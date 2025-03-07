import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  label?: string;
};

export const Loader: FC<Props> = ({ className, label }) => {
  const loaderClasses = clsx(
    'w-16',
    'h-16',
    'border-4',
    'border-[#BFCFDA]',
    'border-t-[#1A1A1A]',
    'rounded-full',
    'animate-spin',
    'duration-500',
    'ease-linear'
  );
  return (
    <div>
      <div className={twMerge(loaderClasses, className)} />
      <div className={clsx('text-[#1A1A1A]', 'text-sm', 'mt-2')}>{(label && label) ?? 'Loading...'}</div>
    </div>
  );
};
