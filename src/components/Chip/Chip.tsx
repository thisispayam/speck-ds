import React, { forwardRef } from 'react';
import './Chip.css';

export type ChipVariant = 'outline' | 'filled';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual style variant of the chip
   * @default 'outline'
   */
  variant?: ChipVariant;
  /**
   * The size of the chip
   * @default 'md'
   */
  size?: ChipSize;
  /**
   * Whether the chip is selected/active
   * @default false
   */
  selected?: boolean;
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the chip is clickable
   * @default false
   */
  clickable?: boolean;
  /**
   * Icon to display before the label
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the label (typically a close/remove icon)
   */
  rightIcon?: React.ReactNode;
  /**
   * Callback when the chip is clicked (if clickable)
   */
  onSelect?: () => void;
  /**
   * Callback when the right icon (close) is clicked
   */
  onRemove?: () => void;
  /**
   * The content/label of the chip
   */
  children: React.ReactNode;
}

/**
 * Chip component for displaying tags, filters, or selections
 */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      selected = false,
      disabled = false,
      clickable = false,
      leftIcon,
      rightIcon,
      onSelect,
      onRemove,
      children,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'ds-chip',
      `ds-chip--${variant}`,
      `ds-chip--${size}`,
      selected ? 'ds-chip--selected' : '',
      disabled ? 'ds-chip--disabled' : '',
      clickable || onSelect ? 'ds-chip--clickable' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;
      if (onSelect) {
        onSelect();
      }
      if (onClick) {
        onClick(e);
      }
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!disabled && onRemove) {
        onRemove();
      }
    };

    // Get text content for aria-label
    const chipLabel = typeof children === 'string' ? children : undefined;

    return (
      <span
        ref={ref}
        className={classNames}
        onClick={clickable || onSelect ? handleClick : onClick}
        role={clickable || onSelect ? 'button' : undefined}
        tabIndex={clickable || onSelect ? 0 : undefined}
        aria-disabled={disabled}
        aria-label={clickable || onSelect ? (props['aria-label'] || chipLabel) : undefined}
        aria-pressed={clickable || onSelect ? selected : undefined}
        {...props}
      >
        {leftIcon && <span className="ds-chip__icon ds-chip__icon--left">{leftIcon}</span>}
        <span className="ds-chip__label">{children}</span>
        {rightIcon && !onRemove && (
          <span className="ds-chip__icon ds-chip__icon--right">{rightIcon}</span>
        )}
        {onRemove && (
          <button
            type="button"
            className="ds-chip__remove"
            onClick={handleRemove}
            disabled={disabled}
            aria-label="Remove"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L3 9M3 3L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Chip.displayName = 'Chip';

export default Chip;
