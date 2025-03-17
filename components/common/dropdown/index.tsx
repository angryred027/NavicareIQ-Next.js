import React, { FC, Fragment, ReactNode } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { btnOutlinedClassesName } from '../buttons/btn-outlined';
import { twMerge } from 'tailwind-merge';
type Props = {
  btnLabel: string | ReactNode;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
  className?: string;
  items: {
    value: ReactNode;
    startSlot?: ReactNode;
    endSlot?: ReactNode;
    divider?: boolean;
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }[];
  disabled?: boolean;
};

export const DropDown: FC<Props> = ({ btnLabel, items, startSlot, endSlot, className, disabled }) => {
  const menuButtonClasses = clsx('flex', 'flex-start', 'gap-[8px]', 'capitalize');

  return (
    <Menu>
      <MenuButton disabled={disabled} className={twMerge(btnOutlinedClassesName, menuButtonClasses, className)}>
        {startSlot && <div>{startSlot}</div>}
        {btnLabel && <div>{btnLabel}</div>}
        {endSlot && <div>{endSlot}</div>}
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className={clsx(
          'w-52',
          'bg-white',
          'origin-top-right',
          'rounded-xl',
          'border',
          'border-[#BFCFDA]',
          'p-1',
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
        {items.map(({ value, divider, startSlot, endSlot, onClick }, index) => (
          <Fragment key={index}>
            <MenuItem key={index}>
              <div
                onClick={onClick}
                className={clsx(
                  'p-2',
                  'data-[focus]:bg-[#E6F0F8]',
                  'rounded-xl',
                  'flex items-center',
                  'gap-2',
                  'capitalize',
                  startSlot && 'justify-start',
                  endSlot && 'justify-between'
                )}
              >
                {startSlot && <div>{startSlot}</div>}
                {value && <div>{value}</div>}
                {endSlot && <div>{endSlot}</div>}
              </div>
            </MenuItem>
            {divider && <div className="my-1 h-px bg-[#BFCFDA]" />}
          </Fragment>
        ))}
      </MenuItems>
    </Menu>
  );
};
