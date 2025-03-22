'use client';
import { useState, ReactNode } from 'react';
import { DropDown } from '@/components/common';
import Icon from '@/components/icon/Icon';

type QuantityOption = {
  value: string | ReactNode;
  onClick: () => void;
};

type QuantityDropdownProps = {
  quantityOptions?: QuantityOption[];
};

const quantityDefaultOptions: QuantityOption[] = [
  { value: <span className="text-[#4167AF]">1</span>, onClick: () => console.log('1 clicked') },
  { value: <span className="text-[#4167AF]">2</span>, onClick: () => console.log('2 clicked') },
  { value: <span className="text-[#4167AF]">3</span>, onClick: () => console.log('3 clicked') },
  { value: <span className="text-[#4167AF]">4</span>, onClick: () => console.log('4 clicked') },
  { value: <span className="text-[#4167AF]">5</span>, onClick: () => console.log('5 clicked') },
];

export default function QuantityDropdown({ quantityOptions = quantityDefaultOptions }: QuantityDropdownProps) {
  const [options, setOptions] = useState<QuantityOption[]>(quantityOptions);

  return (
    <>
      <DropDown
        btnLabel={<span className="text-[#4167AF]">1</span>}
        endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
        items={options}
        className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
      />
    </>
  );
}
