import React, { type FC, type ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        clsx('bg-[#F6F9FA] rounded-[12px]', 'border-[1px] border-[#E6F0F8]', 'p-[16px] w-full'),
        className
      )}
    >
      {children}
    </div>
  );
};
