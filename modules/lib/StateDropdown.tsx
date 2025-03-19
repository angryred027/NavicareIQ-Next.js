const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

import React, { useState, FC, ReactNode, useEffect } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

type SelectProps = {
  label: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
};

type SelectOption = {
  value: string;
  label: ReactNode;
};

export const StateDropDown: FC<SelectProps> = ({ label = 'State', value, onChange, options = states }) => {
  const [selected, setSelected] = useState<SelectOption | null>(null);

  useEffect(() => {
    if (selected) {
      onChange?.(selected.value);
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
              'focus:border-poppy-900',
              'flex mt-7 px-[14px]',
              'items-center justify-between',
              'border-[#BFCFDA] focus:outline-none',
              'whitespace-nowrap overflow-hidden overflow-ellipsis',
              {
                'pt-2 pb-3': selected,
                'py-5': !selected,
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
                  'text-body text-[14px] pt-[20px]': selected,
                  'text-sm text-[#757B80]': !selected,
                })}
              >
                {selected ? selected?.value : label}
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

export default StateDropDown;
