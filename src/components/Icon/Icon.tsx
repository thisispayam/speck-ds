/**
 * Icon Component
 * SVG icon system based on Figma designs
 * 
 * Icons from Figma:
 * - Chevron/down/16 (16x16px)
 * - Chevron/down/12 (12x12px)
 */

import React from 'react';
import './Icon.css';

export type IconName = 
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right';

/** Icon sizes from Figma: 12px and 16px */
export type IconSize = 12 | 16;

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Icon size in pixels (from Figma: 12 or 16) */
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

/**
 * SVG paths for each icon
 * Based on Figma chevron polygon vectors
 * ViewBox is sized to match Figma component bounds
 */
const iconPaths: Record<IconName, string> = {
  'chevron-down': 'M3 4.5L8 9.5L13 4.5',
  'chevron-up': 'M3 9.5L8 4.5L13 9.5',
  'chevron-left': 'M9.5 3L4.5 8L9.5 13',
  'chevron-right': 'M4.5 3L9.5 8L4.5 13',
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
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="1"
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
