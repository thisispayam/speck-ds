/**
 * Fetch Complete Figma File & Update Tokens
 * 
 * Updates figma-complete.json AND tokens.css with ONE API call.
 * Run with: npm run fetch:figma
 * 
 * Requires FIGMA_API_KEY in .env file
 */

const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const FIGMA_FILE_ID = 'Th7UVyk0UGSWZW1Yx7sRu3';
const OUTPUT_FILE = path.join(__dirname, '..', 'figma-complete.json');
const TOKENS_CSS_FILE = path.join(__dirname, '..', 'src', 'styles', 'tokens.css');
const TOKENS_TS_FILE = path.join(__dirname, '..', 'src', 'tokens', 'index.ts');
const TOKENS_JSON_FILE = path.join(__dirname, '..', 'src', 'tokens', 'tokens.json');

/**
 * Convert Figma RGBA (0-1) to hex color
 */
function rgbaToHex(r, g, b) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function buildDefaultSemanticColors(palette) {
  return {
    light: {
      'background-primary': palette.grey?.['100'],
      'background-secondary': palette.grey?.['200'],
      'background-tertiary': palette.grey?.['300'],
      'foreground-primary': palette.grey?.['600'],
      'foreground-secondary': palette.grey?.['500'],
      'foreground-tertiary': palette.grey?.['400'],
      'border-subtle': palette.grey?.['200'],
      'border-strong': palette.grey?.['300'],
      'accent-primary': palette.purple?.['400'],
      'accent-primary-hover': palette.purple?.['300'],
      'accent-primary-active': palette.purple?.['200'],
    },
    dark: {
      'background-primary': palette.grey?.['700'] || palette.grey?.['600'],
      'background-secondary': palette.grey?.['600'] || palette.grey?.['500'],
      'background-tertiary': palette.grey?.['500'] || palette.grey?.['400'],
      'foreground-primary': palette.grey?.['100'],
      'foreground-secondary': palette.grey?.['200'],
      'foreground-tertiary': palette.grey?.['300'],
      'border-subtle': palette.grey?.['500'],
      'border-strong': palette.grey?.['400'],
      'accent-primary': palette.purple?.['300'],
      'accent-primary-hover': palette.purple?.['200'],
      'accent-primary-active': palette.purple?.['100'],
    },
  };
}

/**
 * Extract tokens from Figma document
 */
function extractTokensFromDocument(document) {
  const tokens = {
    palette: { purple: {}, grey: {} },
    space: {},
    radius: {},
    font: { family: {}, size: {}, weight: {} },
    lineHeight: {},
    semantic: { light: {}, dark: {} },
  };

  // Find color frames
  function findColorFrames(node) {
    const nodeName = node.name?.toLowerCase() || '';
    
    if ((nodeName === 'purple' || nodeName === 'grey') && node.type === 'FRAME' && node.children) {
      console.log(`   🎨 Found color frame: "${node.name}"`);
      
      const collectSwatches = (children) => {
        const results = [];
        for (const c of children) {
          const isRect = c.type === 'RECTANGLE';
          const hasFill = c.fills?.[0]?.type === 'SOLID';
          if (isRect && hasFill) {
            const { r, g, b } = c.fills[0].color;
            if (!(r > 0.99 && g > 0.99 && b > 0.99)) {
              results.push(c);
            }
          }
          if (c.type === 'FRAME' && c.children) {
            results.push(...collectSwatches(c.children));
          }
        }
        return results;
      };
      
      const swatches = collectSwatches(node.children)
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
      });
    }
    
    if (node.children) {
      for (const child of node.children) {
        findColorFrames(child);
      }
    }
  }

  findColorFrames(document);

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

  // Parse tokens from text nodes on Page 1
  function findTextTokens(node) {
    if (node.type === 'TEXT' && node.characters) {
      const text = node.characters;
      
      // Parse spacing: space.1 = 4 space.2 = 8 ...
      const spaceMatches = text.matchAll(/space\.(\d+)\s*=\s*(\d+)/g);
      for (const match of spaceMatches) {
        tokens.space[match[1]] = parseInt(match[2]);
      }
      
      // Parse radius: radius.sm = 8px radius.md = 16px ...
      const radiusMatches = text.matchAll(/radius\.(\w+)\s*=\s*(\d+)(?:px)?/g);
      for (const match of radiusMatches) {
        tokens.radius[match[1]] = parseInt(match[2]);
      }
      
      // Parse font sizes: font.size.xs = 10px ...
      const fontSizeMatches = text.matchAll(/font\.size\.(\w+)\s*=\s*(\d+)(?:px)?/g);
      for (const match of fontSizeMatches) {
        tokens.font.size[match[1]] = parseInt(match[2]);
      }
      
      // Parse font weights: font-weight.400 = 400 ...
      const fontWeightMatches = text.matchAll(/font-weight\.(\d+)\s*=\s*(\d+)/g);
      for (const match of fontWeightMatches) {
        tokens.font.weight[match[1]] = parseInt(match[2]);
      }
      
      // Parse line heights: lineHeight.tight = 1.15 ...
      const lineHeightMatches = text.matchAll(/lineHeight\.(\w+)\s*=\s*([\d.]+)/g);
      for (const match of lineHeightMatches) {
        tokens.lineHeight[match[1]] = parseFloat(match[2]);
      }
      
      // Parse font family
      if (text.includes('font-family.seif') || text.includes('font.family.sans')) {
        const serifMatch = text.match(/font[.-]family\.?se(?:i|ri)f?\s*=\s*([^;]+?)(?:\s+font|$)/i);
        const sansMatch = text.match(/font\.?family\.?sans\s*=\s*([^;]+?)(?:\s+font|$)/i);
        if (serifMatch) tokens.font.family.serif = serifMatch[1].trim();
        if (sansMatch) tokens.font.family.sans = sansMatch[1].trim();
      }

      // Parse semantic colors (Light/Dark mode blocks)
      if (text.toLowerCase().includes('color.background') || text.toLowerCase().includes('color.foreground')) {
        const isDark = text.toLowerCase().includes('dark mode');
        const modeKey = isDark ? 'dark' : 'light';
        const lines = text.split('\n');
        for (const line of lines) {
          const match = line.match(/color\.(background|foreground|border|accent)\.([\w.-]+)\s*=\s*([a-zA-Z]+)[-\s]?(\d+)?/);
          if (!match) continue;
          const group = match[1].toLowerCase();
          const name = match[2].replace(/\./g, '-').toLowerCase();
          const paletteGroup = match[3].toLowerCase();
          const shade = match[4];
          const hex = shade ? tokens.palette[paletteGroup]?.[shade] : undefined;
          if (hex) {
            tokens.semantic[modeKey][`${group}-${name}`] = hex;
          }
        }
      }
    }
    
    if (node.children) {
      for (const child of node.children) {
        findTextTokens(child);
      }
    }
  }

  findTextTokens(document);

  return tokens;
}

/**
 * Generate CSS variables from tokens
 */
function generateCssVariables(tokens) {
  const timestamp = new Date().toISOString();
  
  let css = `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma
 * Last sync: ${timestamp}
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
  
  // Primary (mapped from purple - accent is purple-400)
  if (tokens.palette.purple && Object.keys(tokens.palette.purple).length > 0) {
    css += `  /* Primary (from Purple - accent is purple-400) */\n`;
    css += `  --color-primary-50: ${tokens.palette.purple['100']};\n`;
    css += `  --color-primary-100: ${tokens.palette.purple['100']};\n`;
    css += `  --color-primary-200: ${tokens.palette.purple['200']};\n`;
    css += `  --color-primary-300: ${tokens.palette.purple['300']};\n`;
    css += `  --color-primary-400: ${tokens.palette.purple['400']};\n`;
    css += `  --color-primary-500: ${tokens.palette.purple['400']};\n`;
    css += `  --color-primary-hover: ${tokens.palette.purple['300']};\n`;
    css += `  --color-primary-active: ${tokens.palette.purple['200']};\n\n`;
  }

  // Semantic Colors - Light Mode
  const defaultSemantic = buildDefaultSemanticColors(tokens.palette);
  const semanticLight = tokens.semantic?.light && Object.keys(tokens.semantic.light).length > 0
    ? tokens.semantic.light
    : defaultSemantic.light;

  css += `  /* Semantic Colors - Light Mode (default) */\n`;
  for (const [key, value] of Object.entries(semanticLight)) {
    if (!value) continue;
    css += `  --color-${key}: ${value};\n`;
  }
  css += '\n';

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
      css += `  --font-${key}: "${value.replace(/"/g, '')}";\n`;
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

  const semanticDark = tokens.semantic?.dark && Object.keys(tokens.semantic.dark).length > 0
    ? tokens.semantic.dark
    : defaultSemantic.dark;

  if (semanticDark && Object.keys(semanticDark).length > 0) {
    css += `\n/* Dark Theme */\n[data-theme="dark"],\n.dark-theme {\n`;
    for (const [key, value] of Object.entries(semanticDark)) {
      if (!value) continue;
      css += `  --color-${key}: ${value};\n`;
    }
    css += '}\n';
  }
  
  return css;
}

/**
 * Generate TypeScript tokens
 */
function generateTypeScriptTokens(tokens) {
  const timestamp = new Date().toISOString();
  
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
      500: tokens.palette.purple['400'],
      hover: tokens.palette.purple['300'],
      active: tokens.palette.purple['200'],
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

  const defaultSemantic = buildDefaultSemanticColors(tokens.palette);
  const semanticColors = tokens.semantic && Object.keys(tokens.semantic).length > 0
    ? tokens.semantic
    : defaultSemantic;

  return `/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma
 * Last sync: ${timestamp}
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

export const semanticColors = ${JSON.stringify(semanticColors, null, 2)} as const;

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
export type SemanticMode = keyof typeof semanticColors;
export type SemanticColorKey = keyof typeof semanticColors.light;
`;
}

async function fetchFigmaFile() {
  const apiKey = process.env.FIGMA_API_KEY;
  
  if (!apiKey) {
    console.error('❌ Error: FIGMA_API_KEY not found in .env file');
    process.exit(1);
  }

  console.log('🎨 Fetching Figma file (ONE API call)...');
  console.log(`   File ID: ${FIGMA_FILE_ID}\n`);

  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: {
          'X-Figma-Token': apiKey,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        console.error('❌ Error: Rate limited. You have limited API calls per month.');
        console.error('   Wait and try again later.');
      } else {
        console.error(`❌ Error: API returned ${response.status} ${response.statusText}`);
      }
      process.exit(1);
    }

    const data = await response.json();
    const timestamp = new Date().toISOString();
    
    // Save complete Figma file
    const output = {
      ...data,
      _fetchedAt: timestamp,
      _fileId: FIGMA_FILE_ID,
    };
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log('✅ Saved figma-complete.json');

    // Extract and generate tokens
    console.log('\n📦 Extracting tokens from Figma...');
    const tokens = extractTokensFromDocument(data.document);
    
    // Ensure directories exist
    fs.mkdirSync(path.dirname(TOKENS_CSS_FILE), { recursive: true });
    fs.mkdirSync(path.dirname(TOKENS_TS_FILE), { recursive: true });

    // Generate CSS
    const cssContent = generateCssVariables(tokens);
    fs.writeFileSync(TOKENS_CSS_FILE, cssContent);
    console.log('✅ Updated src/styles/tokens.css');

    // Generate TypeScript
    const tsContent = generateTypeScriptTokens(tokens);
    fs.writeFileSync(TOKENS_TS_FILE, tsContent);
    console.log('✅ Updated src/tokens/index.ts');

    // Save tokens JSON
    fs.writeFileSync(TOKENS_JSON_FILE, JSON.stringify(tokens, null, 2));
    console.log('✅ Updated src/tokens/tokens.json');

    console.log(`\n🎉 Done! All files updated from Figma.`);
    console.log(`   File name: ${data.name}`);
    console.log(`   Last modified: ${data.lastModified}`);
    console.log(`   Fetched at: ${timestamp}`);

  } catch (error) {
    console.error('❌ Error fetching Figma file:', error.message);
    process.exit(1);
  }
}

fetchFigmaFile();
