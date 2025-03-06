import React, { type FC } from 'react';
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import FilterIcon from '@/assets/icons/filter.svg';
import { useTableContext } from '../context';
import { btnOutlinedClassesName } from '@/components/common/buttons/btn-outlined';
import { SelectDropDown } from '@/components/common/inputs';

export const TableFiltersBtn: FC = () => {
  const { cols } = useTableContext();
  const menuButtonClasses = clsx('flex', 'flex-start', 'gap-[8px]', 'capitalize', 'w-[145px]');

  const colsOptions = cols.headers.map((header) => {
    return {
      name: header.label,
      id: header.id,
    };
  });

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
          'w-96',
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
            <SelectDropDown label="Filter by" onChange={(value) => console.log(value)} options={colsOptions} />
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
