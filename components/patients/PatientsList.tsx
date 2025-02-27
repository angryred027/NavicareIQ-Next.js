import React, { FC } from 'react';
import { TableHeaderFilters, Table } from '../table';
import { TableTData } from '../table/table.type';

const PatientsList: FC = () => {
  const rows: TableTData[] = [
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
    {
      name: {
        value: "Byron D'Amore",
        subvalue: '1234567890',
      },
      DOB: {
        value: '01/01/2000',
        subvalue: '22 years',
      },
      email: 'damore@gmail.com',
    },
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
