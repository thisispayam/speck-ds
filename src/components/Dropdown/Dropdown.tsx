import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  /**
   * The value of the option (used for form submission)
   */
  value: string;
  /**
   * The label to display
   */
  label: string;
  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
}

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownProps {
  /**
   * The options to display in the dropdown
   */
  options: DropdownOption[];
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * Callback when an option is selected
   */
  onChange?: (value: string, option: DropdownOption) => void;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * The size of the dropdown
   * @default 'md'
   */
  size?: DropdownSize;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Whether the dropdown has an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Label for the dropdown
   */
  label?: string;
  /**
   * Whether the dropdown should take full width
   */
  fullWidth?: boolean;
  /**
   * Additional class names
   */
  className?: string;
  /**
   * ID for the dropdown (used for accessibility)
   */
  id?: string;
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * Accessible label for screen readers (overrides default)
   */
  'aria-label'?: string;
}

/**
 * Dropdown component for selecting from a list of options
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option',
      size = 'md',
      disabled = false,
      error = false,
      errorMessage,
      label,
      fullWidth = false,
      className = '',
      id,
      name,
      'aria-label': ariaLabelProp,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Reset highlighted index when dropdown opens/closes
    useEffect(() => {
      if (isOpen) {
        const selectedIndex = options.findIndex((opt) => opt.value === value);
        setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
      } else {
        setHighlightedIndex(-1);
      }
    }, [isOpen, options, value]);

    // Scroll highlighted option into view
    useEffect(() => {
      if (isOpen && listRef.current && highlightedIndex >= 0) {
        const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
        if (highlightedElement) {
          highlightedElement.scrollIntoView({ block: 'nearest' });
        }
      }
    }, [isOpen, highlightedIndex]);

    const handleToggle = useCallback(() => {
      if (!disabled) {
        setIsOpen((prev) => !prev);
      }
    }, [disabled]);

    const handleSelect = useCallback(
      (option: DropdownOption) => {
        if (!option.disabled) {
          onChange?.(option.value, option);
          setIsOpen(false);
        }
      },
      [onChange]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (disabled) return;

        switch (event.key) {
          case 'Enter':
          case ' ':
            event.preventDefault();
            if (isOpen && highlightedIndex >= 0) {
              const option = options[highlightedIndex];
              if (option && !option.disabled) {
                handleSelect(option);
              }
            } else {
              setIsOpen(true);
            }
            break;
          case 'Escape':
            setIsOpen(false);
            break;
          case 'ArrowDown':
            event.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
            } else {
              setHighlightedIndex((prev) => {
                const nextIndex = prev + 1;
                return nextIndex < options.length ? nextIndex : prev;
              });
            }
            break;
          case 'ArrowUp':
            event.preventDefault();
            if (isOpen) {
              setHighlightedIndex((prev) => {
                const nextIndex = prev - 1;
                return nextIndex >= 0 ? nextIndex : prev;
              });
            }
            break;
          case 'Home':
            if (isOpen) {
              event.preventDefault();
              setHighlightedIndex(0);
            }
            break;
          case 'End':
            if (isOpen) {
              event.preventDefault();
              setHighlightedIndex(options.length - 1);
            }
            break;
        }
      },
      [disabled, isOpen, highlightedIndex, options, handleSelect]
    );

    const classNames = [
      'ds-dropdown',
      `ds-dropdown--${size}`,
      fullWidth ? 'ds-dropdown--full-width' : '',
      disabled ? 'ds-dropdown--disabled' : '',
      error ? 'ds-dropdown--error' : '',
      isOpen ? 'ds-dropdown--open' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    const listId = `${dropdownId}-list`;
    
    // User-provided aria-label takes precedence, then placeholder if no label
    const ariaLabel = ariaLabelProp || (label ? undefined : placeholder);

    return (
      <div className={classNames} ref={dropdownRef}>
        {label && (
          <label className="ds-dropdown__label" id={`${dropdownId}-label`} htmlFor={dropdownId}>
            {label}
          </label>
        )}
        <div
          ref={ref}
          className="ds-dropdown__trigger"
          id={dropdownId}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listId}
          aria-disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={label ? `${dropdownId}-label` : undefined}
          tabIndex={disabled ? -1 : 0}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <span className={`ds-dropdown__value ${!selectedOption ? 'ds-dropdown__placeholder' : ''}`}>
            {selectedOption ? (
              <>
                {selectedOption.icon && <span className="ds-dropdown__option-icon">{selectedOption.icon}</span>}
                {selectedOption.label}
              </>
            ) : (
              placeholder
            )}
          </span>
          <span className="ds-dropdown__arrow" aria-hidden="true">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <ul
          ref={listRef}
          className="ds-dropdown__list"
          id={listId}
          role="listbox"
          aria-labelledby={dropdownId}
          hidden={!isOpen}
        >
          {options.map((option, index) => (
              <li
                key={option.value}
                className={[
                  'ds-dropdown__option',
                  option.disabled ? 'ds-dropdown__option--disabled' : '',
                  option.value === value ? 'ds-dropdown__option--selected' : '',
                  index === highlightedIndex ? 'ds-dropdown__option--highlighted' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                role="option"
                aria-selected={option.value === value}
                aria-disabled={option.disabled}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.icon && <span className="ds-dropdown__option-icon">{option.icon}</span>}
                <span className="ds-dropdown__option-label">{option.label}</span>
                {option.value === value && (
                  <span className="ds-dropdown__check" aria-hidden="true">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        {error && errorMessage && <p className="ds-dropdown__error-message">{errorMessage}</p>}
        {name && <input type="hidden" name={name} value={value || ''} />}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
