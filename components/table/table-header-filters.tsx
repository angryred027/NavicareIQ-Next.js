import React, { type FC } from 'react';
import clsx from 'clsx';
import { TableSortBtn, TableFiltersBtn } from './table-filters';
import { useTableContext } from './context';

type Props = {
  title: string;
};

export const TableHeaderFilters: FC<Props> = ({ title }) => {
  const { totalRows } = useTableContext();
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
        <div className={clsx('font-bold', 'text-[##000005]', 'leading-[24px]')}>{title ?? 'Title'}</div>
        <div className={clsx('font-medium', 'text-[#757B80]', 'text-[12px]', 'leading-[20px]')}>
          Displaying: {totalRows}
        </div>
      </div>
      <div className="w-full flex justify-end gap-[12px]">
        <TableFiltersBtn />
        <TableSortBtn />
      </div>
    </div>
  );
};
