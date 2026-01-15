#!/usr/bin/env node

/**
 * Figma Token Fetcher for Speck DS
 * Fetches design tokens from Figma - ONLY what's in the design, no hardcoded fallbacks
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
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Extract colors from named color frames (Purple, Grey, etc.)
 */
function extractColorFrames(file) {
  const colorFrames = {};
  
  // Only look for the actual color frames in your design
  const colorFramePatterns = ['purple', 'grey', 'gray'];
  
  function findColorFrames(node) {
    const nodeName = node.name?.toLowerCase() || '';
    
    // Check if this is a color frame
    const matchedPattern = colorFramePatterns.find(p => nodeName === p);
    
    if (matchedPattern && node.type === 'FRAME' && node.children) {
      // Normalize 'gray' to 'grey' for consistency
      const colorName = matchedPattern === 'gray' ? 'grey' : matchedPattern;
      if (!colorFrames[colorName]) {
        colorFrames[colorName] = {};
      }
      
      console.log(`\n🎨 Found color frame: "${node.name}"`);
      
      // Get only Rectangle shapes with solid fills (skip text labels and frames)
      const swatches = node.children
        .filter(c => {
          // Only rectangles named "Rectangle X" or "Frame X"
          const isRectangle = c.type === 'RECTANGLE' || (c.type === 'FRAME' && c.name.toLowerCase().startsWith('frame'));
          const hasFill = c.fills && c.fills[0] && c.fills[0].type === 'SOLID';
          if (!isRectangle || !hasFill) return false;
          
          // Skip white colors (these are likely backgrounds/labels)
          const { r, g, b } = c.fills[0].color;
          const isWhite = r > 0.99 && g > 0.99 && b > 0.99;
          return !isWhite;
        })
        .sort((a, b) => {
          // Sort by lightness (lightest first for 100-500 scale)
          const getLightness = (fill) => {
            const { r, g, b } = fill.color;
            return (r + g + b) / 3;
          };
          return getLightness(b.fills[0]) - getLightness(a.fills[0]);
        });
      
      // Map to standard scale: 100 (lightest) to 500 (darkest)
      const scaleValues = ['100', '200', '300', '400', '500', '600', '700'];
      
      swatches.forEach((swatch, index) => {
        const { r, g, b, a = 1 } = swatch.fills[0].color;
        const hex = rgbaToHex(r, g, b, a);
        const scale = scaleValues[index] || `${(index + 1) * 100}`;
        
        colorFrames[colorName][scale] = hex;
        console.log(`   ${colorName}-${scale}: ${hex} (from "${swatch.name}")`);
      });
    }
    
    // Recursively search children
    if (node.children) {
      for (const child of node.children) {
        findColorFrames(child);
      }
    }
  }
  
  if (file.document) {
    findColorFrames(file.document);
  }
  
  return colorFrames;
}

/**
 * Fetch tokens from Figma
 */
async function fetchFigmaTokens() {
  console.log('🎨 Fetching Figma file...');
  
  try {
    const response = await figmaApi.get(`/files/${FIGMA_FILE_ID}`);
    const file = response.data;
    
    console.log(`📁 File: ${file.name}`);
    console.log(`📅 Last modified: ${file.lastModified}`);
    
    // Extract colors from named frames
    const colors = extractColorFrames(file);
    
    // Add white to grey palette as grey-100, shift others
    if (colors.grey && !Object.values(colors.grey).includes('#FFFFFF')) {
      const newGrey = { '100': '#FFFFFF' };
      let scale = 200;
      const sortedValues = Object.values(colors.grey).sort((a, b) => {
        // Sort by lightness (lightest first)
        const getLightness = (hex) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return (r + g + b) / 3;
        };
        return getLightness(b) - getLightness(a);
      });
      for (const value of sortedValues) {
        newGrey[String(scale)] = value;
        scale += 100;
      }
      colors.grey = newGrey;
    }
    
    // Map purple to primary (for semantic usage)
    if (colors.purple) {
      colors.primary = {
        50: colors.purple['100'] || colors.purple['50'],
        100: colors.purple['100'],
        200: colors.purple['200'],
        300: colors.purple['300'],
        400: colors.purple['400'],
        500: colors.purple['500'],
        hover: colors.purple['400'],   // Lighter on hover (since base is dark)
        active: colors.purple['300'],  // Even lighter on active
      };
    }
    
    return { colors };
    
  } catch (error) {
    console.error('❌ Error fetching Figma file:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Generate CSS variables from tokens
 */
function generateCssVariables(tokens) {
  let css = `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: ${new Date().toISOString()}
 */

:root {
`;

  // Colors from Figma
  for (const [category, variants] of Object.entries(tokens.colors)) {
    css += `  /* ${category.charAt(0).toUpperCase() + category.slice(1)} */\n`;
    for (const [variant, value] of Object.entries(variants)) {
      css += `  --color-${category}-${variant}: ${value};\n`;
    }
    css += '\n';
  }

  // Spacing (from your Figma design)
  css += `  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 24px;
  --spacing-6: 32px;
  --spacing-7: 48px;
  --spacing-8: 64px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 999px;

  /* Typography - Fonts */
  --font-serif: "Noe Display", Georgia, serif;
  --font-sans: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;

  /* Typography - Sizes */
  --text-xs: 10px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-md: 16px;
  --text-lg: 18px;
  --text-xl: 24px;
  --text-2xl: 30px;
  --text-3xl: 36px;

  /* Typography - Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Typography - Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
`;
  
  return css;
}

/**
 * Generate TypeScript tokens
 */
function generateTypeScriptTokens(tokens) {
  return `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: ${new Date().toISOString()}
 */

export const colors = ${JSON.stringify(tokens.colors, null, 2)} as const;

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
} as const;

export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  full: '999px',
} as const;

export const typography = {
  fontFamily: {
    serif: '"Noe Display", Georgia, serif',
    sans: '"Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },
  fontSize: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '30px',
    '3xl': '36px',
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
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

// Type exports
export type PurpleShade = keyof typeof colors.purple;
export type GreyShade = keyof typeof colors.grey;
export type PrimaryShade = keyof typeof colors.primary;
export type SpacingKey = keyof typeof spacing;
export type BorderRadiusKey = keyof typeof borderRadius;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
`;
}

/**
 * Generate JSON tokens
 */
function generateJsonTokens(tokens) {
  return {
    color: tokens.colors,
    spacing: {
      1: { value: '4px' },
      2: { value: '8px' },
      3: { value: '12px' },
      4: { value: '16px' },
      5: { value: '24px' },
      6: { value: '32px' },
      7: { value: '48px' },
      8: { value: '64px' },
    },
    borderRadius: {
      none: { value: '0px' },
      xs: { value: '2px' },
      sm: { value: '4px' },
      md: { value: '8px' },
      lg: { value: '16px' },
      xl: { value: '24px' },
      full: { value: '999px' },
    },
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Figma token sync for Speck DS...\n');
  
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
      console.log(`   - ${category}: ${Object.keys(variants).length} shades`);
    }
    
  } catch (error) {
    console.error('\n❌ Failed to sync tokens:', error.message);
    process.exit(1);
  }
}

main();
