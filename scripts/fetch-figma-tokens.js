#!/usr/bin/env node

/**
 * Figma Token Fetcher for Speck DS
 * Fetches design tokens from Figma Variables API
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
 * Fetch variables from Figma Variables API
 */
async function fetchFigmaVariables() {
  console.log('🎨 Fetching Figma Variables...');
  
  try {
    const response = await figmaApi.get(`/files/${FIGMA_FILE_ID}/variables/local`);
    const data = response.data;
    
    const tokens = {
      palette: { purple: {}, grey: {} },
      space: {},
      radius: {},
      font: { family: {}, size: {}, weight: {} },
      lineHeight: {},
    };
    
    // Get variable collections and variables
    const collections = data.meta?.variableCollections || {};
    const variables = data.meta?.variables || {};
    
    console.log(`📦 Found ${Object.keys(collections).length} collection(s)`);
    console.log(`📦 Found ${Object.keys(variables).length} variable(s)`);
    
    // Process each variable
    for (const [varId, variable] of Object.entries(variables)) {
      const name = variable.name;
      const resolvedType = variable.resolvedType;
      
      // Get the value from the first mode
      const modeId = Object.keys(variable.valuesByMode)[0];
      const value = variable.valuesByMode[modeId];
      
      // Parse the variable path (e.g., "palette/purple/500" or "space/1")
      const parts = name.split('/');
      
      if (parts[0] === 'palette' && parts.length === 3) {
        // Color: palette/purple/500
        const colorGroup = parts[1].toLowerCase();
        const shade = parts[2];
        
        if (colorGroup === 'purple' || colorGroup === 'grey' || colorGroup === 'gray') {
          const normalizedGroup = colorGroup === 'gray' ? 'grey' : colorGroup;
          if (!tokens.palette[normalizedGroup]) tokens.palette[normalizedGroup] = {};
          
          if (resolvedType === 'COLOR' && value.r !== undefined) {
            tokens.palette[normalizedGroup][shade] = rgbaToHex(value.r, value.g, value.b, value.a);
          }
        }
        console.log(`   🎨 ${name}: ${tokens.palette[colorGroup]?.[shade] || value}`);
        
      } else if (parts[0] === 'space' && parts.length === 2) {
        // Spacing: space/1
        tokens.space[parts[1]] = value;
        console.log(`   📏 ${name}: ${value}`);
        
      } else if (parts[0] === 'radius' && parts.length === 2) {
        // Radius: radius/sm
        tokens.radius[parts[1]] = value;
        console.log(`   🔘 ${name}: ${value}`);
        
      } else if (parts[0] === 'font' && parts.length === 3) {
        // Font: font/family/sans or font/size/md or font/weight/500
        const fontGroup = parts[1];
        const fontKey = parts[2];
        
        if (!tokens.font[fontGroup]) tokens.font[fontGroup] = {};
        tokens.font[fontGroup][fontKey] = value;
        console.log(`   🔤 ${name}: ${value}`);
        
      } else if (parts[0] === 'lineHeight' && parts.length === 2) {
        // Line height: lineHeight/standard
        tokens.lineHeight[parts[1]] = value;
        console.log(`   📐 ${name}: ${value}`);
      }
    }
    
    return tokens;
    
  } catch (error) {
    if (error.response?.status === 403) {
      console.log('⚠️  Variables API requires Figma Enterprise/Professional plan');
      console.log('   Falling back to file-based extraction...\n');
      return null;
    }
    throw error;
  }
}

/**
 * Fallback: Extract colors from color frames in the file
 */
async function fetchFromFile() {
  console.log('🎨 Fetching from Figma file (fallback)...');
  
  const response = await figmaApi.get(`/files/${FIGMA_FILE_ID}`);
  const file = response.data;
  
  console.log(`📁 File: ${file.name}`);
  
  const tokens = {
    palette: { purple: {}, grey: {} },
    space: {},
    radius: {},
    font: { family: {}, size: {}, weight: {} },
    lineHeight: {},
  };
  
  // Extract colors from frames named "Purple" and "Grey"
  function findColorFrames(node) {
    const nodeName = node.name?.toLowerCase() || '';
    
    if ((nodeName === 'purple' || nodeName === 'grey') && node.type === 'FRAME' && node.children) {
      console.log(`\n🎨 Found color frame: "${node.name}"`);
      
      const swatches = node.children
        .filter(c => {
          const isRect = c.type === 'RECTANGLE' || (c.type === 'FRAME' && c.name.toLowerCase().startsWith('frame'));
          const hasFill = c.fills?.[0]?.type === 'SOLID';
          if (!isRect || !hasFill) return false;
          const { r, g, b } = c.fills[0].color;
          return !(r > 0.99 && g > 0.99 && b > 0.99); // Skip white
        })
        .sort((a, b) => {
          const getL = (f) => (f.color.r + f.color.g + f.color.b) / 3;
          return getL(b.fills[0]) - getL(a.fills[0]);
        });
      
      const scales = ['100', '200', '300', '400', '500', '600', '700'];
      swatches.forEach((s, i) => {
        const { r, g, b } = s.fills[0].color;
        const hex = rgbaToHex(r, g, b);
        const scale = scales[i] || `${(i + 1) * 100}`;
        tokens.palette[nodeName][scale] = hex;
        console.log(`   ${nodeName}-${scale}: ${hex}`);
      });
    }
    
    if (node.children) {
      for (const child of node.children) {
        findColorFrames(child);
      }
    }
  }
  
  if (file.document) {
    findColorFrames(file.document);
  }
  
  // Add white to grey if missing
  if (!Object.values(tokens.palette.grey).includes('#FFFFFF')) {
    const newGrey = { '100': '#FFFFFF' };
    let scale = 200;
    for (const v of Object.values(tokens.palette.grey)) {
      newGrey[String(scale)] = v;
      scale += 100;
    }
    tokens.palette.grey = newGrey;
  }
  
  return tokens;
}

/**
 * Generate CSS variables from tokens
 */
function generateCssVariables(tokens) {
  let css = `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma
 * Last sync: ${new Date().toISOString()}
 */

:root {
`;

  // Colors
  for (const [group, shades] of Object.entries(tokens.palette)) {
    if (Object.keys(shades).length === 0) continue;
    css += `  /* ${group.charAt(0).toUpperCase() + group.slice(1)} */\n`;
    const sortedShades = Object.entries(shades).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    for (const [shade, value] of sortedShades) {
      css += `  --color-${group}-${shade}: ${value};\n`;
    }
    css += '\n';
  }
  
  // Primary (mapped from purple)
  if (tokens.palette.purple && Object.keys(tokens.palette.purple).length > 0) {
    css += `  /* Primary (from Purple) */\n`;
    css += `  --color-primary-50: ${tokens.palette.purple['100']};\n`;
    css += `  --color-primary-100: ${tokens.palette.purple['100']};\n`;
    css += `  --color-primary-200: ${tokens.palette.purple['200']};\n`;
    css += `  --color-primary-300: ${tokens.palette.purple['300']};\n`;
    css += `  --color-primary-400: ${tokens.palette.purple['400']};\n`;
    css += `  --color-primary-500: ${tokens.palette.purple['500']};\n`;
    css += `  --color-primary-hover: ${tokens.palette.purple['400']};\n`;
    css += `  --color-primary-active: ${tokens.palette.purple['300']};\n\n`;
  }

  // Spacing
  if (Object.keys(tokens.space).length > 0) {
    css += `  /* Spacing */\n`;
    const sortedSpace = Object.entries(tokens.space).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    for (const [key, value] of sortedSpace) {
      css += `  --spacing-${key}: ${value}px;\n`;
    }
    css += '\n';
  } else {
    css += `  /* Spacing (defaults) */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 24px;
  --spacing-6: 32px;
  --spacing-7: 48px;
  --spacing-8: 64px;

`;
  }

  // Border Radius
  if (Object.keys(tokens.radius).length > 0) {
    css += `  /* Border Radius */\n`;
    const radiusOrder = ['none', 'sm', 'md', 'lg', 'xl', 'full'];
    const sortedRadius = Object.entries(tokens.radius).sort((a, b) => {
      const aIdx = radiusOrder.indexOf(a[0]);
      const bIdx = radiusOrder.indexOf(b[0]);
      return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
    });
    for (const [key, value] of sortedRadius) {
      css += `  --radius-${key}: ${value}px;\n`;
    }
    css += '\n';
  } else {
    css += `  /* Border Radius (defaults) */
  --radius-none: 0px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;

`;
  }

  // Typography - Fonts
  if (tokens.font.family && Object.keys(tokens.font.family).length > 0) {
    css += `  /* Typography - Fonts */\n`;
    for (const [key, value] of Object.entries(tokens.font.family)) {
      css += `  --font-${key}: ${value};\n`;
    }
    css += '\n';
  } else {
    css += `  /* Typography - Fonts (defaults) */
  --font-serif: "Noe Display", Merriweather, Georgia, serif;
  --font-sans: "Avenir", "Helvetica Neue", sans-serif;

`;
  }

  // Typography - Sizes
  if (tokens.font.size && Object.keys(tokens.font.size).length > 0) {
    css += `  /* Typography - Sizes */\n`;
    const sizeOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
    const sortedSizes = Object.entries(tokens.font.size).sort((a, b) => {
      const aIdx = sizeOrder.indexOf(a[0]);
      const bIdx = sizeOrder.indexOf(b[0]);
      return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
    });
    for (const [key, value] of sortedSizes) {
      css += `  --text-${key}: ${value}px;\n`;
    }
    css += '\n';
  } else {
    css += `  /* Typography - Sizes (defaults) */
  --text-xs: 10px;
  --text-sm: 14px;
  --text-md: 16px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 36px;

`;
  }

  // Typography - Weights
  if (tokens.font.weight && Object.keys(tokens.font.weight).length > 0) {
    css += `  /* Typography - Weights */\n`;
    const sortedWeights = Object.entries(tokens.font.weight).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    for (const [key, value] of sortedWeights) {
      css += `  --font-weight-${key}: ${value};\n`;
    }
    css += '\n';
  }

  // Line Heights
  if (Object.keys(tokens.lineHeight).length > 0) {
    css += `  /* Line Heights */\n`;
    for (const [key, value] of Object.entries(tokens.lineHeight)) {
      css += `  --leading-${key}: ${value};\n`;
    }
    css += '\n';
  } else {
    css += `  /* Line Heights (defaults) */
  --leading-tight: 1.15;
  --leading-standard: 1.35;
  --leading-relaxed: 1.6;
  --leading-reader: 1.75;

`;
  }

  // Shadows
  css += `  /* Shadows */
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
  // Sort colors
  const sortShades = (obj) => {
    const sorted = {};
    Object.keys(obj).sort((a, b) => parseInt(a) - parseInt(b)).forEach(k => sorted[k] = obj[k]);
    return sorted;
  };

  const colors = {
    purple: sortShades(tokens.palette.purple || {}),
    grey: sortShades(tokens.palette.grey || {}),
    primary: tokens.palette.purple ? {
      50: tokens.palette.purple['100'],
      100: tokens.palette.purple['100'],
      200: tokens.palette.purple['200'],
      300: tokens.palette.purple['300'],
      400: tokens.palette.purple['400'],
      500: tokens.palette.purple['500'],
      hover: tokens.palette.purple['400'],
      active: tokens.palette.purple['300'],
    } : {},
  };

  const spacing = Object.keys(tokens.space).length > 0 ? tokens.space : {
    1: 4, 2: 8, 3: 12, 4: 16, 5: 24, 6: 32, 7: 48, 8: 64
  };
  
  const borderRadius = Object.keys(tokens.radius).length > 0 ? tokens.radius : {
    none: 0, sm: 8, md: 16, lg: 24, full: 999
  };

  const fontFamily = tokens.font.family && Object.keys(tokens.font.family).length > 0 
    ? tokens.font.family 
    : { serif: '"Noe Display", Merriweather, Georgia, serif', sans: '"Avenir", "Helvetica Neue", sans-serif' };

  const fontSize = tokens.font.size && Object.keys(tokens.font.size).length > 0
    ? tokens.font.size
    : { xs: 10, sm: 14, md: 16, lg: 20, xl: 24, '2xl': 36 };

  const fontWeight = tokens.font.weight && Object.keys(tokens.font.weight).length > 0
    ? tokens.font.weight
    : { 400: 400, 500: 500, 600: 600, 700: 700 };

  const lineHeight = Object.keys(tokens.lineHeight).length > 0
    ? tokens.lineHeight
    : { tight: 1.15, standard: 1.35, relaxed: 1.6, reader: 1.75 };

  return `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma
 * Last sync: ${new Date().toISOString()}
 */

export const colors = ${JSON.stringify(colors, null, 2)} as const;

export const spacing = ${JSON.stringify(spacing, null, 2)} as const;

export const borderRadius = ${JSON.stringify(borderRadius, null, 2)} as const;

export const typography = {
  fontFamily: ${JSON.stringify(fontFamily, null, 4)},
  fontSize: ${JSON.stringify(fontSize, null, 4)},
  fontWeight: ${JSON.stringify(fontWeight, null, 4)},
  lineHeight: ${JSON.stringify(lineHeight, null, 4)},
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
export type LineHeight = keyof typeof typography.lineHeight;
`;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Figma token sync for Speck DS...\n');
  
  try {
    // Try Variables API first, fallback to file parsing
    let tokens = await fetchFigmaVariables();
    
    if (!tokens) {
      tokens = await fetchFromFile();
    }
    
    // Create output directories
    const tokensDir = path.join(__dirname, '..', 'src', 'tokens');
    const stylesDir = path.join(__dirname, '..', 'src', 'styles');
    
    fs.mkdirSync(tokensDir, { recursive: true });
    fs.mkdirSync(stylesDir, { recursive: true });
    
    // Generate and write files
    const cssContent = generateCssVariables(tokens);
    const tsContent = generateTypeScriptTokens(tokens);
    
    fs.writeFileSync(path.join(stylesDir, 'tokens.css'), cssContent);
    fs.writeFileSync(path.join(tokensDir, 'index.ts'), tsContent);
    fs.writeFileSync(path.join(tokensDir, 'tokens.json'), JSON.stringify(tokens, null, 2));
    
    console.log('\n✅ Tokens synced successfully!');
    console.log(`   📄 ${path.join(stylesDir, 'tokens.css')}`);
    console.log(`   📄 ${path.join(tokensDir, 'index.ts')}`);
    console.log(`   📄 ${path.join(tokensDir, 'tokens.json')}`);
    
  } catch (error) {
    console.error('\n❌ Failed to sync tokens:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Data:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
