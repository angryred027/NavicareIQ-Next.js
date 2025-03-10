import { Table } from '@/components/table';
import { ColFilter, TableTData, TRows } from '@/components/table/table.type';
import React, { FC } from 'react';
import FavoriteContainer from './favorite-container';

const PatientTable: FC = () => {
  const rows: TableTData[] = [];
  const colsFilters: ColFilter[] = [];

  const handleRowClick = (row: TRows) => {
    console.log('row', row);
  };

  return (
    <div>
      <Table
        title="Labs"
        data={rows}
        onRowClick={handleRowClick}
        colsFilters={colsFilters}
        extraContent={<FavoriteContainer />}
      />
    </div>
  );
};

export default PatientTable;
