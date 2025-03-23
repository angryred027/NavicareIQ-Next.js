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
  onSelect: (value: number) => void;
};

export default function QuantityDropdown({ quantityOptions, onSelect }: QuantityDropdownProps) {
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const quantityDefaultOptions: QuantityOption[] = [
    {
      value: <span className="text-[#4167AF]">1</span>,
      onClick: () => {
        handleSelect(1);
      },
    },
    {
      value: <span className="text-[#4167AF]">2</span>,
      onClick: () => {
        handleSelect(2);
      },
    },
    {
      value: <span className="text-[#4167AF]">3</span>,
      onClick: () => {
        handleSelect(3);
      },
    },
    {
      value: <span className="text-[#4167AF]">4</span>,
      onClick: () => {
        handleSelect(4);
      },
    },
    {
      value: <span className="text-[#4167AF]">5</span>,
      onClick: () => {
        handleSelect(5);
      },
    },
  ];

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onSelect(value);
  };

  const [options, setOptions] = useState<QuantityOption[]>(quantityDefaultOptions);

  return (
    <>
      <DropDown
        btnLabel={<span className="text-[#4167AF]">{selectedValue}</span>}
        endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
        items={options}
        className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
      />
    </>
  );
}
