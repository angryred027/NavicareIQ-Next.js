import { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  indeterminate?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, error, className, indeterminate, ...props }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref || defaultRef) as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate || false;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            ref={resolvedRef}
            className={`
              w-6 h-6
              appearance-none
              border-[1px] border-system-light-800 
              hover:border-status-success-600
              bg-status-success-200
              rounded-[8px]
              cursor-pointer
              checked:bg-status-success-600
              checked:border-status-success-600
              hover:border-system-light-800
              relative
              transition-all
              focus:outline-none 
          
              ${error ? 'border-red-500' : ''}
              ${className || ''}
              after:content-[''] 
              after:absolute 
              after:hidden
              checked:after:block
              after:left-[9px]
              after:top-[5px]
              after:w-[5px]
              after:h-[10px]
              after:border-white
              after:border-r-2
              after:border-b-2
              after:rotate-45
              disabled:bg-status-success-200
              disabled:border-system-light-200
              disabled:after:border-system-light-800
              [&:indeterminate]:bg-status-success-600
              [&:indeterminate]:border-status-success-600
              [&:indeterminate]:after:hidden
              [&:indeterminate]:before:content-['']
              [&:indeterminate]:before:block
              [&:indeterminate]:before:rounded-[2px]
              [&:indeterminate]:before:absolute
              [&:indeterminate]:before:left-[6px]
              [&:indeterminate]:before:top-[10px]
              [&:indeterminate]:before:w-[10px]
              [&:indeterminate]:before:h-[2px]
              [&:indeterminate]:before:bg-white
            `}
            {...props}
          />
          {label && (
            <span className={`text-sm max-w-[210px] truncate whitespace-nowrap ${props.disabled ? 'text-system-dark-300' : 'text-system-dark-900'}`}>{label}</span>
          )}
        </label>
        {error && (
          <span className="text-xs text-status-error-600">{error}</span>
        )}
      </div>
    );
  }
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;