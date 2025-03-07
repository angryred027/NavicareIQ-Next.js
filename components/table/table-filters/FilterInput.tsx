import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  label,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
  label?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <div>
      {label && <div className="text-[#757B80]">{label}</div>}
      <input
        className={clsx(
          'relative w-full',
          'cursor-pointer rounded-[16px]',
          'border-[2px] bg-white',
          'text-left text-sm',
          'font-medium text-gray-900',
          'flex px-[14px]',
          'items-center justify-between',
          'border-[#BFCFDA] focus:outline-none',
          'focus:ring-2 focus:ring-[#273E69]',
          'whitespace-nowrap overflow-hidden overflow-ellipsis',
          'py-[14px]'
        )}
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
