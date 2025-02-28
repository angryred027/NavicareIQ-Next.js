'use client';

import { forwardRef, useState } from 'react';
import Image from 'next/image';
import InfoIcon from '@/assets/icons/info.svg';
import InfoErrorIcon from '@/assets/icons/info-error.svg';
import EyeIcon from '@/assets/icons/eye.svg';


type TextFieldProps = {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: string;
} & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'className' | 'placeholder'>;

const TextArea = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error,
      disabled = false,
      required = false,
      className = '',
      startIcon,
      endIcon,
      value,
      defaultValue,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const hasValue = value !== undefined ? !!value : !!defaultValue;

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const baseInputStyles = `
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
      peer
      disabled:bg-system-light-100
      disabled:cursor-not-allowed
      disabled:border-system-light-800
      disabled:text-system-dark-300
    `;

    const inputStyles = error
      ? `
        border-status-error-600
        focus:border-status-error-600
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
      ${(isFocused || hasValue) 
        ? 'transform -translate-y-2 top-[15px] text-system-dark-500' 
        : 'top-8 -translate-y-1/2 text-system-dark-500'
      }
      ${disabled ? 'text-system-dark-300' : ''}
      ${error 
        ? 'text-status-error-600' 
        : isFocused 
          ? 'text-poppy-500' 
          : 'text-system-dark-300'
      }
    `;

    const helperTextStyles = `
      mt-2
      flex
      pl-4
      items-center
      gap-2
      text-body
      ${error ? 'text-status-error-600' : 'text-system-dark-900'}
    `;

    const iconStyles = `
      absolute
      top-1/2
      -translate-y-1/2
      text-system-dark-500
      ${disabled ? 'text-system-dark-300' : ''}
      ${error ? 'text-status-error-600' : ''}
    `;

    const passwordToggleStyles = `
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      cursor-pointer
      text-system-dark-500
      hover:text-system-dark-900
      transition-colors
      duration-150
      ${disabled ? 'text-system-dark-300 cursor-not-allowed' : ''}
    `;

    return (
      <div className={className}>
        <div className="relative">
          {startIcon && (
            <span className={`${iconStyles} left-4`}>{startIcon}</span>
          )}
          
          <textarea
            ref={ref}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            className={`
              ${baseInputStyles}
              ${inputStyles}
              ${startIcon ? 'pl-12' : ''}
              ${endIcon ? 'pr-12' : ''}
            `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          
          {label && (
            <label className={labelStyles}>
              {label}
              {required && <span className="text-status-error-600 ml-1">*</span>}
            </label>
          )}
          
          {isPassword ? (
            <button
              type="button"
              onClick={() => !disabled && setShowPassword(!showPassword)}
              className={passwordToggleStyles}
              tabIndex={-1}
            >
              {showPassword ? (
                <Image src={EyeIcon} alt="eye" />
              ) : (
                <Image src={EyeIcon} alt="eye" />
              )}
            </button>
          ) : (
            endIcon && <span className={`${iconStyles} right-4`}>{endIcon}</span>
          )}
        </div>

        {(helperText || error) && (
          <p className={helperTextStyles}>
            {error && <Image src={InfoErrorIcon} alt="info" />}
            {!error && <Image src={InfoIcon} alt="info" />}
            <span>{error || helperText}</span>
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;