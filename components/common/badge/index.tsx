import React, { type FC, type ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  className?: string;
  children?: ReactNode;
};

export const Badge: FC<Props> = ({ label, children, className }) => {
  const badgeClassNames = clsx(
    'bg-status-error-600',
    'flex',
    'items-center',
    'rounded-[20px]',
    'px-[6px]',
    'py-[2px]',
    'justify-center',
    'text-white',
    'text-[12px]',
    'font-semibold',
    'leading-[16px]',
    'tracking-[0%]',
    'w-max'
  );

  return (
    <div className={twMerge(badgeClassNames, className)}>
      {label}
      {children}
    </div>
  );
};
