import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TButtons } from './buttons-type';

export const btnFilledClassNames = clsx(
  'px-[16px]',
  'py-[8px]',
  'bg-[#4167AF]',
  'rounded-[12px]',
  'flex',
  'items-center',
  'text-[#FFFFFF]',
  'text-[14px]',
  'font-semibold',
  'leading-[20px]',
  'gap-[8px]',
  'hover:bg-[#2F4D80]',
  'transition',
  'disabled:opacity-[30%]'
);

const ButtonFilled: FC<TButtons> = ({ label, onClick, className, children, startIcon, endIcon, disabled }) => {
  return (
    <button
      type="button"
      className={twMerge(
        clsx(btnFilledClassNames, {
          'justify-center': !startIcon && !endIcon,
        }),
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="start-icon">{startIcon}</span>}
      {children}
      {label && <span className="label">{label}</span>}
      {endIcon && <span className="end-icon">{endIcon}</span>}
    </button>
  );
};

export default ButtonFilled;
