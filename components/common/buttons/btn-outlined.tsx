import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TButtons } from './buttons-type';

export const btnOutlinedClassesName = clsx(
  'px-[16px]',
  'py-[8px]',
  'rounded-[12px]',
  'border-[1px]',
  'border-[#BFCFDA]',
  'flex',
  'items-center',
  'text-[#515253]',
  'text-[14px]',
  'font-semibold',
  'leading-[20px]',
  'gap-[8px]',
  'hover:bg-gray-200',
  'transition'
);

const ButtonOutlined: FC<TButtons> = ({ label, onClick, className, children, startIcon, endIcon }) => {
  return (
    <button type="button" className={twMerge(btnOutlinedClassesName, className)} onClick={onClick}>
      {startIcon && <span className="start-icon">{startIcon}</span>}
      {children}
      {label && <span className="label">{label}</span>}
      {endIcon && <span className="end-icon">{endIcon}</span>}
    </button>
  );
};

export default ButtonOutlined;
