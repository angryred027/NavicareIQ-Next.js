import React, { FC } from 'react';
import clsx from 'clsx';

export const TableHeaderFilters: FC = () => {
  return (
    <div
      className={clsx(
        'w-full',
        'h-[72px]',
        'bg-[#F6F9FA]',
        'border-[1px]',
        'border-[#E6F0F8]',
        'rounded-[12px]',
        'flex',
        'justify-between',
        'py-[12px]',
        'px-[16px]'
      )}
    >
      <div className="w-full">
        <div className={clsx('font-bold', 'text-[##000005]', 'leading-[24px]')}>Patients</div>
        <div className={clsx('font-medium', 'text-[#757B80]', 'text-[12px]', 'leading-[20px]')}>Displaying: 124</div>
      </div>
    </div>
  );
};
