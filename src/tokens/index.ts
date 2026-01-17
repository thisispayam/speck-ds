/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma
 * Last sync: 2026-01-17T00:46:09.159Z
 */

export const colors = {
  "purple": {
    "100": "#ECE6F8",
    "200": "#C5B4E9",
    "300": "#8B6AD3",
    "400": "#3E06B6",
    "500": "#1F035B"
  },
  "grey": {
    "100": "#FFFFFF",
    "200": "#E5E5E5",
    "300": "#C4C4C4",
    "400": "#767676",
    "500": "#4A4A4A",
    "600": "#1A1A1A",
    "700": "#000000"
  },
  "primary": {
    "50": "#ECE6F8",
    "100": "#ECE6F8",
    "200": "#C5B4E9",
    "300": "#8B6AD3",
    "400": "#3E06B6",
    "500": "#1F035B",
    "hover": "#3E06B6",
    "active": "#8B6AD3"
  }
} as const;

export const spacing = {
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 24,
  "6": 32,
  "7": 48,
  "8": 64
} as const;

export const borderRadius = {
  "none": 0,
  "sm": 8,
  "md": 16,
  "lg": 24,
  "full": 999
} as const;

export const typography = {
  fontFamily: {
    "serif": "\"Noe Display\", Merriweather, Georgia, serif",
    "sans": "\"Avenir\", \"Helvetica Neue\", sans-serif"
},
  fontSize: {
    "xs": 10,
    "sm": 14,
    "md": 16,
    "lg": 20,
    "xl": 24,
    "2xl": 36
},
  fontWeight: {
    "400": 400,
    "500": 500,
    "600": 600,
    "700": 700
},
  lineHeight: {
    "tight": 1.15,
    "standard": 1.35,
    "relaxed": 1.6,
    "reader": 1.75
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
export type LineHeight = keyof typeof typography.lineHeight;
