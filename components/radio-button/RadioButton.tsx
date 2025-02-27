import { InputHTMLAttributes, forwardRef } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            ref={ref}
            className={`
              w-6 h-6
              appearance-none
              border-[1px] border-system-light-800 
              hover:border-status-success-600
              hover:border-[2px]
              bg-status-success-200
              rounded-full
              cursor-pointer
              checked:bg-white
              checked:border-status-success-600
              checked:border-[3px]
              hover:border-system-light-800
              relative
              transition-all
              focus:outline-none 

              hover:checked:bg-status-success-600
              hover:checked:border-system-light-800
              hover:checked:border-[2px]
              hover:checked:after:bg-white
              hover:checked:after:left-1/2
              hover:checked:after:top-1/2
              hover:checked:after:w-[8px]
              hover:checked:after:h-[8px]
          
              ${error ? 'border-red-500' : ''}
              ${className || ''}
              after:content-[''] 
              after:absolute 
              after:hidden
              checked:after:block
              after:left-1/2
              after:top-1/2
              after:w-[8px]
              after:h-[8px]
              after:bg-status-success-600
              after:rounded-full
              after:-translate-x-1/2
              after:-translate-y-1/2
              disabled:bg-status-success-200
              disabled:border-system-light-200
              disabled:after:bg-system-light-800
              disabled:border-[1px]
            `}
            {...props}
          />
          {label && (
            <span 
              className={`
                text-sm 
                max-w-[210px] 
                truncate 
                whitespace-nowrap 
                ${props.disabled ? 'text-system-dark-300' : 'text-system-dark-900'}
              `}
              title={label}
            >
              {label}
            </span>
          )}
        </label>
        {error && (
          <span className="text-xs text-status-error-600">{error}</span>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;