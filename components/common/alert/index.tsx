import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  content?: string;
  children?: React.ReactNode;
  className?: string;
  type?: 'success' | 'warning' | 'error' | 'info';
};

export const Alert: FC<Props> = ({ children, content, className }) => {
  return (
    <div className={twMerge(clsx('rounded-[12px] px-[16px] py-[8px]', 'bg-[#E6F0F8] border-[#E6F0F8]', className))}>
      {content}
      {children}
    </div>
  );
};
