import React, { type FC, useState, useMemo } from 'react';
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import FilterIcon from '@/assets/icons/filter.svg';
import { useTableContext } from '../context';
import { btnOutlinedClassesName } from '@/components/common/buttons/btn-outlined';
import { SelectDropDown } from '@/components/common/inputs';
import { stringOperators, numberOperators, dateOperators } from './helpers';
import { Button } from '@/components/common';
import { DebouncedInput } from './FilterInput';

export const TableFiltersBtn: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [value, setValue] = useState<string | number>('');
  const { cols } = useTableContext();
  const menuButtonClasses = clsx('flex', 'flex-start', 'gap-[8px]', 'capitalize', 'w-[145px]');

  const colsOptions = cols.headers.map((header) => {
    return {
      label: header.label,
      value: header.id,
    };
  });

  const operators = useMemo(() => {
    if (!selectedFilter) return [];
    const col = cols.headers.find((header) => header.id === selectedFilter);
    if (!col) return [];
    if (col.filterType === 'text') return stringOperators;
    if (col.filterType === 'range') return numberOperators;
    if (col.filterType === 'date') return dateOperators;
    return [];
  }, [selectedFilter, cols.headers]);

  console.log('selectedFilter', selectedFilter);

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleOperatorChange = (value: string) => {
    setSelectedOperator(value);
  };

  const handleValueChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Menu>
      <MenuButton className={twMerge(btnOutlinedClassesName, menuButtonClasses)}>
        <div className="flex gap-[16px] items-center">
          <Image src={FilterIcon} alt="filter" width={24} height={24} />
          <div>Filter</div>
        </div>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className={clsx(
          'w-[500px]',
          'bg-white',
          'origin-top-right',
          'rounded-[3px]',
          'border',
          'border-[#BFCFDA]',
          'p-[16px]',
          'text-sm/6',
          'transition',
          'duration-100',
          'ease-out',
          '[--anchor-gap:5px]',
          'focus:outline-none',
          'data-[closed]:scale-95',
          'data-[closed]:opacity-0',
          'cursor-pointer'
        )}
      >
        <MenuItem>
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-[16px]">
              <div className={clsx('grid grid-cols-3', 'gap-[16px]')}>
                <SelectDropDown label="Filter by" onChange={handleFilterChange} options={colsOptions} />

                {selectedFilter && (
                  <SelectDropDown label="Operator" onChange={handleOperatorChange} options={operators} />
                )}
                {selectedOperator && <DebouncedInput onChange={handleValueChange} value={value} />}
              </div>
              <div className="flex justify-end gap-[16px]">
                <Button
                  variant="outlined"
                  label="Cancel"
                  className={clsx(
                    'bg-status-error-600',
                    'text-[#ffffff]',
                    'hover:bg-status-error-300',
                    'hover:text-[#515253]'
                  )}
                />
                <Button variant="outlined" label="Apply" />
                <Button variant="outlined" label="Clear" />
              </div>
            </div>
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
