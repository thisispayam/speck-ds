#!/usr/bin/env node

/**
 * Figma Token Fetcher
 * Fetches design tokens (colors, typography, spacing) from Figma and transforms them
 * into CSS variables and TypeScript tokens for the design system.
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const FIGMA_API_KEY = process.env.FIGMA_API_KEY;
const FIGMA_FILE_ID = 'Th7UVyk0UGSWZW1Yx7sRu3';

if (!FIGMA_API_KEY) {
  console.error('❌ FIGMA_API_KEY is not set in .env file');
  process.exit(1);
}

const figmaApi = axios.create({
  baseURL: 'https://api.figma.com/v1',
  headers: {
    'X-Figma-Token': FIGMA_API_KEY,
  },
});

/**
 * Convert Figma RGBA (0-1) to hex color
 */
function rgbaToHex(r, g, b, a = 1) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

/**
 * Convert Figma RGBA to CSS rgba string
 */
function rgbaToCss(r, g, b, a = 1) {
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}

/**
 * Parse style name to get category and variant
 * e.g., "Purple/100" -> { category: "purple", variant: "100" }
 */
function parseStyleName(name) {
  const parts = name.split('/').map(p => p.trim().toLowerCase().replace(/\s+/g, '-'));
  if (parts.length === 2) {
    return { category: parts[0], variant: parts[1] };
  }
  return { category: 'misc', variant: parts[0] };
}

/**
 * Extract color tokens from Figma file
 */
async function fetchFigmaTokens() {
  console.log('🎨 Fetching Figma file...');
  
  try {
    const response = await figmaApi.get(`/files/${FIGMA_FILE_ID}`);
    const file = response.data;
    
    console.log(`📁 File: ${file.name}`);
    console.log(`📅 Last modified: ${file.lastModified}`);
    
    const tokens = {
      colors: {},
      typography: {},
      spacing: {},
      borderRadius: {},
      shadows: {},
    };
    
    // Extract styles from the file
    const styles = file.styles || {};
    
    // Track style IDs to their properties
    const styleMap = new Map();
    
    for (const [styleId, style] of Object.entries(styles)) {
      styleMap.set(styleId, {
        name: style.name,
        type: style.styleType,
      });
    }
    
    // Traverse the document to find nodes with fills
    function extractColorsFromNode(node, depth = 0) {
      // Check if node has fills with colors
      if (node.fills && Array.isArray(node.fills)) {
        for (const fill of node.fills) {
          if (fill.type === 'SOLID' && fill.color) {
            const { r, g, b, a = 1 } = fill.color;
            const hex = rgbaToHex(r, g, b, a);
            
            // Check if this node uses a style
            if (node.styles && node.styles.fill) {
              const styleInfo = styleMap.get(node.styles.fill);
              if (styleInfo) {
                const { category, variant } = parseStyleName(styleInfo.name);
                if (!tokens.colors[category]) {
                  tokens.colors[category] = {};
                }
                tokens.colors[category][variant] = hex;
              }
            }
          }
        }
      }
      
      // Recursively process children
      if (node.children) {
        for (const child of node.children) {
          extractColorsFromNode(child, depth + 1);
        }
      }
    }
    
    // Process all pages
    if (file.document && file.document.children) {
      for (const page of file.document.children) {
        extractColorsFromNode(page);
      }
    }
    
    // Extract colors from named color frames (Purple, Grey, etc.)
    const colorFrames = extractColorFrames(file);
    for (const [frameName, frameColors] of Object.entries(colorFrames)) {
      tokens.colors[frameName] = { ...tokens.colors[frameName], ...frameColors };
    }
    
    // Add default tokens if Figma doesn't have complete definitions
    tokens.colors = ensureDefaultTokens(tokens.colors);
    
    return tokens;
  } catch (error) {
    console.error('❌ Error fetching Figma file:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Extract colors from named color frames (Purple, Grey, etc.)
 * Looks for frames that contain color swatches and extracts them
 */
function extractColorFrames(file) {
  const colorFrames = {};
  
  // Color frame names to look for (case-insensitive)
  const colorFramePatterns = ['purple', 'grey', 'gray', 'blue', 'green', 'red', 'orange', 'yellow', 'pink', 'neutral'];
  
  function findColorFrames(node, parentName = '') {
    const nodeName = node.name?.toLowerCase() || '';
    
    // Check if this is a color frame
    const matchedPattern = colorFramePatterns.find(p => nodeName.includes(p));
    
    if (matchedPattern && node.type === 'FRAME' && node.children) {
      const colorName = matchedPattern === 'grey' ? 'gray' : matchedPattern;
      if (!colorFrames[colorName]) {
        colorFrames[colorName] = {};
      }
      
      // Get all rectangles with solid fills, sorted by Y position
      const swatches = node.children
        .filter(c => (c.type === 'RECTANGLE' || c.type === 'ELLIPSE' || c.type === 'FRAME') && c.fills && c.fills[0])
        .sort((a, b) => {
          const yA = a.absoluteBoundingBox?.y || 0;
          const yB = b.absoluteBoundingBox?.y || 0;
          return yA - yB;
        });
      
      // Assign scale values based on position (darkest typically at top)
      const scaleValues = ['950', '900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];
      
      swatches.forEach((swatch, index) => {
        if (swatch.fills[0].type === 'SOLID' && swatch.fills[0].color) {
          const { r, g, b, a = 1 } = swatch.fills[0].color;
          const hex = rgbaToHex(r, g, b, a);
          
          // Try to extract scale from node name (e.g., "500", "Purple 500")
          const nameMatch = swatch.name.match(/(\d+)/);
          const scale = nameMatch ? nameMatch[1] : (index < scaleValues.length ? scaleValues[index] : `${(index + 1) * 100}`);
          
          colorFrames[colorName][scale] = hex;
          console.log(`   🎨 ${colorName}-${scale}: ${hex} (from "${swatch.name}")`);
        }
      });
    }
    
    // Recursively search children
    if (node.children) {
      for (const child of node.children) {
        findColorFrames(child, node.name);
      }
    }
  }
  
  if (file.document) {
    findColorFrames(file.document);
  }
  
  return colorFrames;
}

/**
 * Ensure we have default tokens if Figma doesn't have complete definitions
 */
function ensureDefaultTokens(colors) {
  // Default grayscale if not extracted
  if (!colors.gray || Object.keys(colors.gray).length < 5) {
    colors.gray = {
      '50': '#ffffff',
      '100': '#e6e6e6',
      '200': '#c4c4c4',
      '300': '#8d8d8d',
      '400': '#656565',
      '500': '#1a1a1a',
      '600': '#141414',
      '700': '#0f0f0f',
      '800': '#0a0a0a',
      '900': '#050505',
      '950': '#000000',
    };
  }
  
  // Default primary color (purple) if not extracted
  if (!colors.primary) {
    colors.primary = {
      '50': '#faf5ff',
      '100': '#f3e8ff',
      '200': '#e9d5ff',
      '300': '#d8b4fe',
      '400': '#c084fc',
      '500': '#a855f7',
      '600': '#9333ea',
      '700': '#7e22ce',
      '800': '#6b21a8',
      '900': '#581c87',
      '950': '#3b0764',
    };
  }
  
  // Semantic colors
  if (!colors.success) {
    colors.success = {
      '50': '#f0fdf4',
      '500': '#22c55e',
      '600': '#16a34a',
      '700': '#15803d',
    };
  }
  
  if (!colors.warning) {
    colors.warning = {
      '50': '#fffbeb',
      '500': '#f59e0b',
      '600': '#d97706',
      '700': '#b45309',
    };
  }
  
  if (!colors.error) {
    colors.error = {
      '50': '#fef2f2',
      '500': '#ef4444',
      '600': '#dc2626',
      '700': '#b91c1c',
    };
  }
  
  return colors;
}

/**
 * Generate CSS variables from tokens
 */
function generateCssVariables(tokens) {
  let css = `/**
 * Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: ${new Date().toISOString()}
 */

:root {
`;

  // Colors
  for (const [category, variants] of Object.entries(tokens.colors)) {
    css += `  /* ${category.charAt(0).toUpperCase() + category.slice(1)} */\n`;
    for (const [variant, value] of Object.entries(variants)) {
      css += `  --color-${category}-${variant}: ${value};\n`;
    }
    css += '\n';
  }

  // Spacing
  const spacing = {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
  };
  
  css += '  /* Spacing */\n';
  for (const [key, value] of Object.entries(spacing)) {
    css += `  --spacing-${key}: ${value};\n`;
  }
  css += '\n';

  // Border Radius
  const borderRadius = {
    'none': '0',
    'sm': '0.125rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    'xl': '0.75rem',
    '2xl': '1rem',
    'full': '9999px',
  };
  
  css += '  /* Border Radius */\n';
  for (const [key, value] of Object.entries(borderRadius)) {
    css += `  --radius-${key}: ${value};\n`;
  }
  css += '\n';

  // Typography
  const typography = {
    'font-sans': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    'font-mono': 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    'text-xs': '0.75rem',
    'text-sm': '0.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '1.875rem',
    'font-normal': '400',
    'font-medium': '500',
    'font-semibold': '600',
    'font-bold': '700',
  };
  
  css += '  /* Typography */\n';
  for (const [key, value] of Object.entries(typography)) {
    css += `  --${key}: ${value};\n`;
  }
  css += '\n';

  // Shadows
  const shadows = {
    'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  };
  
  css += '  /* Shadows */\n';
  for (const [key, value] of Object.entries(shadows)) {
    css += `  --shadow-${key}: ${value};\n`;
  }

  css += '}\n';
  
  return css;
}

/**
 * Generate TypeScript tokens
 */
function generateTypeScriptTokens(tokens) {
  return `/**
 * Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: ${new Date().toISOString()}
 */

export const colors = ${JSON.stringify(tokens.colors, null, 2)} as const;

export const spacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

export const typography = {
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export type ColorCategory = keyof typeof colors;
export type SpacingKey = keyof typeof spacing;
export type BorderRadiusKey = keyof typeof borderRadius;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
`;
}

/**
 * Generate JSON tokens for Style Dictionary
 */
function generateJsonTokens(tokens) {
  return {
    color: tokens.colors,
    spacing: {
      '0': { value: '0' },
      '1': { value: '0.25rem' },
      '2': { value: '0.5rem' },
      '3': { value: '0.75rem' },
      '4': { value: '1rem' },
      '5': { value: '1.25rem' },
      '6': { value: '1.5rem' },
      '8': { value: '2rem' },
      '10': { value: '2.5rem' },
      '12': { value: '3rem' },
      '16': { value: '4rem' },
    },
    borderRadius: {
      none: { value: '0' },
      sm: { value: '0.125rem' },
      md: { value: '0.375rem' },
      lg: { value: '0.5rem' },
      xl: { value: '0.75rem' },
      '2xl': { value: '1rem' },
      full: { value: '9999px' },
    },
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Figma token sync...\n');
  
  try {
    const tokens = await fetchFigmaTokens();
    
    // Create output directories
    const tokensDir = path.join(__dirname, '..', 'src', 'tokens');
    const stylesDir = path.join(__dirname, '..', 'src', 'styles');
    
    fs.mkdirSync(tokensDir, { recursive: true });
    fs.mkdirSync(stylesDir, { recursive: true });
    
    // Generate and write files
    const cssContent = generateCssVariables(tokens);
    const tsContent = generateTypeScriptTokens(tokens);
    const jsonContent = generateJsonTokens(tokens);
    
    fs.writeFileSync(path.join(stylesDir, 'tokens.css'), cssContent);
    fs.writeFileSync(path.join(tokensDir, 'index.ts'), tsContent);
    fs.writeFileSync(path.join(tokensDir, 'tokens.json'), JSON.stringify(jsonContent, null, 2));
    
    console.log('\n✅ Tokens synced successfully!');
    console.log(`   📄 ${path.join(stylesDir, 'tokens.css')}`);
    console.log(`   📄 ${path.join(tokensDir, 'index.ts')}`);
    console.log(`   📄 ${path.join(tokensDir, 'tokens.json')}`);
    
    // Print summary
    console.log('\n📊 Token Summary:');
    for (const [category, variants] of Object.entries(tokens.colors)) {
      console.log(`   - ${category}: ${Object.keys(variants).length} variants`);
    }
    
  } catch (error) {
    console.error('\n❌ Failed to sync tokens:', error.message);
    process.exit(1);
  }
}

main();
