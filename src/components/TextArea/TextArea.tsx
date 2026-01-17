import React, { forwardRef, useState, useCallback, useId } from 'react';
import './TextArea.css';

export type TextAreaSize = 'sm' | 'md' | 'lg';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Label text above the textarea
   */
  label?: string;
  /**
   * Instruction/helper text below the textarea
   */
  helperText?: string;
  /**
   * Error message to display (also sets error state)
   */
  errorMessage?: string;
  /**
   * Whether to show character count
   * @default false
   */
  showCount?: boolean;
  /**
   * The size of the textarea
   * @default 'md'
   */
  size?: TextAreaSize;
  /**
   * Whether the textarea has an error state
   * @default false
   */
  error?: boolean;
  /**
   * Whether the textarea should take full width
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Number of visible text lines
   * @default 4
   */
  rows?: number;
  /**
   * Whether the textarea is resizable
   * @default 'vertical'
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

/**
 * TextArea component for multi-line text input
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      showCount = false,
      size = 'md',
      error = false,
      fullWidth = true,
      rows = 4,
      resize = 'vertical',
      maxLength,
      value,
      defaultValue,
      onChange,
      disabled,
      className = '',
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    // Use controlled value if provided, otherwise internal state
    const currentValue = value !== undefined ? value : internalValue;
    const charCount = String(currentValue).length;

    const hasError = error || !!errorMessage;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        if (onChange) {
          onChange(e);
        }
      },
      [value, onChange]
    );

    const wrapperClassNames = [
      'ds-textarea-wrapper',
      `ds-textarea-wrapper--${size}`,
      fullWidth ? 'ds-textarea-wrapper--full-width' : '',
      hasError ? 'ds-textarea-wrapper--error' : '',
      disabled ? 'ds-textarea-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const textareaClassNames = [
      'ds-textarea',
      `ds-textarea--${size}`,
      `ds-textarea--resize-${resize}`,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClassNames}>
        {label && (
          <label htmlFor={id} className="ds-textarea__label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={textareaClassNames}
          rows={rows}
          maxLength={maxLength}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={hasError}
          aria-label={label ? undefined : props.placeholder || 'Text input'}
          aria-describedby={
            (helperText || errorMessage) ? `${id}-helper` : undefined
          }
          {...props}
        />
        {(helperText || errorMessage || showCount) && (
          <div className="ds-textarea__footer">
            <span id={`${id}-helper`} className="ds-textarea__helper-text">
              {errorMessage || helperText}
            </span>
            {showCount && (
              <span className="ds-textarea__count">
                {charCount}{maxLength ? `/${maxLength}` : ''}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
