/**
 * Speck DS - Design System Tokens
 * Source: Figma Design System
 * Last sync: 2026-01-15
 */

export const colors = {
  purple: {
    '100': '#ECE6F8',
    '200': '#8B6AD3',
    '300': '#C5B4E9',
    '400': '#3E06B6',
    '500': '#1F035B',
  },
  grey: {
    '100': '#ffffff',
    '200': '#E5E5E5',
    '300': '#C4C4C4',
    '400': '#8D8D8D',
    '500': '#656565',
    '600': '#1A1A1A',
    '700': '#000000',
  },
  primary: {
    '50': '#ECE6F8',
    '100': '#C5B4E9',
    '200': '#8B6AD3',
    '300': '#3E06B6',
    '400': '#1F035B',
    '500': '#1F035B',
    '600': '#1F035B',
  },
  success: {
    '50': '#f0fdf4',
    '500': '#22c55e',
    '600': '#16a34a',
    '700': '#15803d',
  },
  warning: {
    '50': '#fffbeb',
    '500': '#f59e0b',
    '600': '#d97706',
    '700': '#b45309',
  },
  error: {
    '50': '#fef2f2',
    '500': '#ef4444',
    '600': '#dc2626',
    '700': '#b91c1c',
  },
} as const;

export const spacing = {
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '24px',
  '6': '32px',
  '7': '48px',
  '8': '64px',
} as const;

export const borderRadius = {
  none: '0px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  full: '999px',
} as const;

export const typography = {
  fontFamily: {
    serif: '"Noe Display", Merriweather, Georgia, serif',
    sans: 'Avenir, "Helvetica Neue", sans-serif',
  },
  fontSize: {
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.15',
    standard: '1.35',
    relaxed: '1.6',
    reader: '1.75',
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
export type LineHeight = keyof typeof typography.lineHeight;
