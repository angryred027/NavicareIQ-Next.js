import React from 'react';
import { TableTData, TRows } from './table.type';
import { Table } from './TableC';
import { TableProvider } from './context';
import { TableHeaderFilters } from './TableHeaderFilters';
import clsx from 'clsx';

type Props<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
  loading?: boolean;
};

const TableV1 = <T extends TableTData>(props: Props<T>) => {
  return (
    <TableProvider {...props}>
      <div className={clsx('flex', 'flex-col', 'gap-[15px]')}>
        <TableHeaderFilters />
        <Table />
      </div>
    </TableProvider>
  );
};

export default TableV1;
