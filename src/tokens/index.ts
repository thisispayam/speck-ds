/**
 * Design System Tokens
 * Auto-generated from Figma - DO NOT EDIT MANUALLY
 * Last sync: 2026-01-15T08:14:18.767Z
 */

export const colors = {
  "gray": {
    "50": "#ffffff",
    "100": "#e6e6e6",
    "200": "#c4c4c4",
    "300": "#8d8d8d",
    "400": "#656565",
    "500": "#1a1a1a",
    "600": "#141414",
    "700": "#0f0f0f",
    "800": "#0a0a0a",
    "900": "#050505",
    "950": "#000000"
  },
  "primary": {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764"
  },
  "success": {
    "50": "#f0fdf4",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d"
  },
  "warning": {
    "50": "#fffbeb",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309"
  },
  "error": {
    "50": "#fef2f2",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c"
  }
} as const;

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
