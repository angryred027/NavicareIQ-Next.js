import React, { type FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import FilterIcon from '@/assets/icons/filter.svg';
import { Button } from '../common';
import { TableSortBtn } from './table-filters';
import { useTableContext } from './context';

export const TableHeaderFilters: FC = () => {
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
        <div className={clsx('font-bold', 'text-[##000005]', 'leading-[24px]')}>Patients</div>
        <div className={clsx('font-medium', 'text-[#757B80]', 'text-[12px]', 'leading-[20px]')}>
          Displaying: {totalRows}
        </div>
      </div>
      <div className="w-full flex justify-end gap-[12px]">
        <Button
          label="Filter"
          variant="outlined"
          className="gap-[16px] w-[145px]"
          startIcon={
            <div>
              <Image src={FilterIcon} alt="filter" width={24} height={24} />
            </div>
          }
        />
        <TableSortBtn />
      </div>
    </div>
  );
};
