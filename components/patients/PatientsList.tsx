import React, { FC } from 'react';
import { TableHeaderFilters, Table } from '../table';

const PatientsList: FC = () => {
  const rows = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
  ];

  return (
    <div className="font-sans">
      <TableHeaderFilters />
      <div className="mt-[15px]">
        <Table data={rows} />
      </div>
    </div>
  );
};

export default PatientsList;
