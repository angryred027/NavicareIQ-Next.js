'use client';

import { forwardRef, useState, useRef, useEffect } from 'react';
import ArrowDownIcon from '@/assets/icons/arrow-down.svg';
import CheckIcon from '@/assets/icons/check.svg';
import Image from 'next/image';
import CheckBox from '@/components/checkbox/CheckBox';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  multiple?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      helperText,
      error,
      disabled = false,
      required = false,
      className = '',
      multiple = false,
      value,
      onChange,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    
    const selectedValues = Array.isArray(value) ? value : [value].filter(Boolean);
    const selectedOptions = options.filter(opt => selectedValues.includes(opt.value));
    const hasValue = selectedOptions.length > 0;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setIsFocused(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
      if (disabled) return;

      if (multiple) {
        const newValues = selectedValues.includes(option.value)
          ? selectedValues.filter(v => v !== option.value)
          : [...selectedValues, option.value];
        onChange?.(newValues as string[]);
      } else {
        onChange?.(option.value);
        setIsOpen(false);
      }
    };

    const baseSelectStyles = `
      w-full
      pt-7
      px-4 
      pb-2
      text-body
      bg-white
      border-2
      rounded-[16px]
      transition-all
      duration-150
      outline-none
      cursor-pointer
      flex
      items-center
      justify-between
      disabled:bg-system-light-100
      disabled:cursor-not-allowed
      disabled:border-system-light-800
      disabled:text-system-dark-300
    `;

    const selectStyles = error
      ? `
        border-status-error-600
        hover:border-status-error-600
      `
      : `
        border-transparent         
        shadow-[0_0_0_1px_#BFCFDA]
        focus:border-poppy-900
        focus:shadow-none
        hover:shadow-[0_0_0_1px_#273E69]
        focus:hover:shadow-none

      `;

    const labelStyles = `
      absolute
      left-4
      text-body
      transition-all
      duration-150
      pointer-events-none
      transform -translate-y-2 top-[15px] text-system-dark-500
      ${(isFocused || hasValue) 
        ? 'transform -translate-y-2 top-[15px] text-system-dark-500' 
        : 'top-1/2 -translate-y-1/2 text-system-dark-500'
      }
      ${disabled ? 'text-system-dark-300' : ''}
      ${error 
        ? 'text-status-error-600' 
        : isFocused 
          ? 'text-poppy-500' 
          : 'text-system-dark-300'
      }
    `;

    const optionsStyles = `
      py-2
      flex
      flex-col
      gap-1
      absolute
      top-full
      left-0
      right-0
      mt-1
      bg-white
      border
      border-system-light-500
      rounded-[16px]
      overflow-hidden
      z-50
      shadow-lg
    `;

    const optionStyles = `
      flex
      items-center
      justify-between
      gap-2
      px-4
      py-2
      text-body
      cursor-pointer
      transition-colors
      hover:bg-system-light-100
      ${disabled ? 'cursor-not-allowed text-system-dark-300' : ''}
    `;

    const helperTextStyles = `
      mt-1.5
      text-caption
      ${error ? 'text-status-error-600' : 'text-system-dark-500'}
    `;

    const getSelectedLabel = () => {
      if (!hasValue) return 'Select';
      
      if (multiple) {
        return selectedOptions
          .map(option => option.label)
          .join(', ');
      }
      
      return selectedOptions[0]?.label;
    };

    return (
      <div className={className} ref={ref}>
        <div className="relative" ref={selectRef}>
          <div
            className={`
              ${baseSelectStyles}
              ${selectStyles}
            `}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onFocus={() => setIsFocused(true)}
            tabIndex={disabled ? -1 : 0}
          >
             <span className={`
              truncate
              max-w-[90%]
              ${!hasValue ? 'text-system-dark-300' : ''}
            `}>
              {getSelectedLabel()}
            </span>
          </div>
          <div 
              className={`
                absolute
                right-4
                top-[25px]
                text-system-dark-500
                transition-transform
                duration-150
                cursor-pointer
                ${isOpen ? 'transform rotate-180' : ''}
                ${disabled ? 'text-system-dark-300' : ''}
                ${error ? 'text-status-error-600' : ''}
              `}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Image src={ArrowDownIcon} alt="arrow-down" width={20} height={20} />
            </div>
          
          {label && (
            <label className={labelStyles}>
              {label}
              {required && <span className="text-status-error-600 ml-1">*</span>}
            </label>
          )}
          
          {isOpen && !disabled && (
            <div className={optionsStyles}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`
                    ${optionStyles}
                    ${option.value === value ? 'text-poppy-900 text-body-bold' : ''}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(option);
                  }}
                >
                  {multiple ? (
                    <CheckBox 
                      label={option.label}  
                      onChange={() => {}}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      checked={selectedValues.includes(option.value) || false} 
                    />
                  ) : (
                    <>
                      <span className='truncate whitespace-nowrap'>{option.label}</span>
                      {option.value === value && (
                        <Image src={CheckIcon} alt="check" width={20} height={20} />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {(helperText || error) && (
          <p className={helperTextStyles}>{error || helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;