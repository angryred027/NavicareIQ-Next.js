import React, { type FC, type ReactNode, useState, useEffect } from 'react';
import Image from 'next/image';
import SortIcon from '@/assets/icons/sort.svg';
import SortUpIcon from '@/assets/icons/sort-arrow-up.svg';
import SortDownIcon from '@/assets/icons/sort-arrow-down.svg';
import { useTableContext } from '../context';
import { DropDown } from '@/components/common/dropdown';

type ActiveSort = {
  label: string;
  icon: ReactNode;
};

export const TableSortBtn: FC = () => {
  const { cols, sorting } = useTableContext();
  const [activeSort, setActiveSort] = useState<ActiveSort>({
    label: 'Sort by',
    icon: <Image src={SortIcon} alt="sort" width={24} height={24} />,
  });

  useEffect(() => {
    if (sorting.length) {
      const isDesc = sorting[0].desc;
      setActiveSort({
        label: sorting[0].id,
        icon: <Image src={isDesc ? SortDownIcon : SortUpIcon} alt="sort" width={24} height={24} />,
      });
    } else {
      setActiveSort({
        label: 'Sort by',
        icon: <Image src={SortIcon} alt="sort" width={24} height={24} />,
      });
    }
  }, [sorting]);

  const colsOptions = cols.headers.map((header) => {
    return {
      value: header.label,
      onClick: () => {
        header.handleSort();
      },
    };
  });

  return (
    <div>
      <DropDown
        btnLabel={activeSort.label ?? 'Sort by'}
        className="min-w-[145px]"
        startSlot={<div>{activeSort.icon}</div>}
        items={colsOptions}
      />
    </div>
  );
};
