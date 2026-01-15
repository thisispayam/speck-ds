/**
 * Speck DS - Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: 2026-01-15T21:14:21.801Z
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
    "400": "#8D8D8D",
    "500": "#656565",
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
