import React, { ReactNode } from 'react';
import { ColFilter, TableTData, TRows } from './table.type';
import { Table } from './table-component';
import { TableProvider } from './context';
import { TableHeaderFilters } from './table-header-filters';
import clsx from 'clsx';
import { Align } from '@/types/help';

type Props<T extends TableTData> = {
  data: T[];
  title: string;
  onRowClick?: (row: TRows) => void;
  loading?: boolean;
  colsFilters?: ColFilter[];
  colsAlign?: Record<keyof T, Align>;
  extraContent?: ReactNode;
};

const TableV1 = <T extends TableTData>({ extraContent, title, ...props }: Props<T>) => {
  return (
    <TableProvider {...props}>
      <div className={clsx('flex', 'flex-col', 'gap-[15px]')}>
        <TableHeaderFilters title={title} />
        {extraContent && <div className="py-[12px]">{extraContent}</div>}
        <Table />
      </div>
    </TableProvider>
  );
};

export default TableV1;
