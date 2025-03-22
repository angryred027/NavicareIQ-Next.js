import React, { useState, FC, ReactNode, useEffect } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

type SelectOption<T = any> = {
  value: string;
  label: ReactNode;
  extraData?: T;
};

type SelectProps<T = any> = {
  label: ReactNode;
  value?: string;
  onChange?: (value: string, extraData?: T) => void;
  options: SelectOption<T>[];
};

export const SelectDropDown: FC<SelectProps> = <T,>({ label, value, onChange, options }: SelectProps<T>) => {
  const [selected, setSelected] = useState<SelectOption | null>(null);

  useEffect(() => {
    if (selected) {
      onChange?.(selected.value, selected.extraData);
    }
  }, [selected, onChange]);

  useEffect(() => {
    if (value) {
      const option = options.find((option) => option.value === value);
      option && setSelected(option);
    }
  }, [options, value]);

  return (
    <div className="w-full max-w-md">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              'relative w-full',
              'cursor-pointer rounded-[16px]',
              'border-[2px] bg-white',
              'text-left text-sm',
              'font-medium text-gray-900',
              'flex px-[14px]',
              'items-center justify-between',
              'border-[#BFCFDA] focus:outline-none',
              'focus:ring-2 focus:ring-[#273E69]',
              'whitespace-nowrap overflow-hidden overflow-ellipsis',
              {
                'py-[6px]': selected,
                'py-[16px]': !selected,
              },
              'z-50'
            )}
          >
            <div className="flex relative items-center w-full">
              {selected && (
                <div className={clsx('absolute left-0 top-0 w-full', 'capitalize text-[#757B80]')}>{label}</div>
              )}

              <div
                className={clsx('capitalize', {
                  'text-[#000005] text-[14px] pt-[20px]': selected,
                  'text-[16px] text-[#757B80]': !selected,
                })}
              >
                {selected ? selected?.label : label}
              </div>
            </div>
            <ChevronDownIcon className="size-5 text-[#273E69]" />
          </ListboxButton>

          <ListboxOptions
            anchor="bottom"
            className="mt-2 w-[325px] rounded-lg border-[2px] border-[#273E69] bg-white py-2 shadow-lg z-50"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option}
                className={clsx(
                  'cursor-pointer select-none py-[6px] px-[19px] text-sm',
                  'text-gray-900',
                  'hover:bg-[#F6F9FA]',
                  'group flex items-center justify-between'
                )}
              >
                <div className="group-data-[selected]:text-[#273E69] group-data-[selected]:font-bold capitalize">
                  {option.label}
                </div>
                <CheckIcon className="invisible size-4 fill-[#273E69] group-data-[selected]:visible" />
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
