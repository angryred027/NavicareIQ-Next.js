import React from 'react';
import { TableTData, TRows } from './table.type';
import { Table } from './TableC';
import { TableProvider } from './context';

type Props<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
};

const TableV1 = <T extends TableTData>(props: Props<T>) => {
  return (
    <TableProvider {...props}>
      <Table />;
    </TableProvider>
  );
};

export default TableV1;
