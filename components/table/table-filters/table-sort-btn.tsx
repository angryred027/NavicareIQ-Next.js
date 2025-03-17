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
  const { cols, sorting, colsSort = [] } = useTableContext();
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

  const colsOptions = colsSort
    .map((col) => {
      const findCol = cols.headers.find((header) => header.id === col);
      if (!findCol) return null;
      return {
        value: findCol.label,
        onClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e?.preventDefault();
          e?.stopPropagation();
          findCol.handleSort();
        },
      };
    })
    .filter((col) => col !== null);

  return (
    <div>
      <DropDown
        btnLabel={activeSort.label ?? 'Sort by'}
        className="min-w-[145px]"
        startSlot={<div>{activeSort.icon}</div>}
        items={colsOptions}
        disabled={colsOptions.length === 0}
      />
    </div>
  );
};
