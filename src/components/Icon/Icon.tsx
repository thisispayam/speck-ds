/**
 * Icon Component
 * SVG icon system based on Figma designs
 */

import React from 'react';
import './Icon.css';

export type IconName = 
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right';

export type IconSize = 12 | 16 | 20 | 24;

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Icon size in pixels */
  size?: IconSize;
  /** Custom color (inherits from parent by default) */
  color?: string;
  /** Additional CSS class names */
  className?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Whether the icon is purely decorative */
  'aria-hidden'?: boolean;
}

// SVG paths for each icon (from Figma)
const iconPaths: Record<IconName, string> = {
  'chevron-down': 'M3 5L8 10L13 5',
  'chevron-up': 'M3 10L8 5L13 10',
  'chevron-left': 'M10 3L5 8L10 13',
  'chevron-right': 'M5 3L10 8L5 13',
};

// ViewBox sizes based on icon size
const viewBoxes: Record<IconSize, string> = {
  12: '0 0 16 16',
  16: '0 0 20 20',
  20: '0 0 24 24',
  24: '0 0 28 28',
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => {
  const path = iconPaths[name];
  const viewBox = viewBoxes[size];
  
  // Determine if icon should be hidden from screen readers
  const isDecorative = ariaHidden ?? !ariaLabel;
  
  const classes = [
    'ds-icon',
    `ds-icon--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={ariaLabel}
      aria-hidden={isDecorative}
      role={isDecorative ? undefined : 'img'}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
