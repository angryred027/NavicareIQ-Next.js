'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { TableHeaderFilters, Table } from '../table';
import { TableTData, TRows } from '../table/table.type';

const PatientsList: FC = () => {
  const router = useRouter();

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

  const handleRowClick = (row: TRows) => {
    router.push(`/patients/${row.id}`);
  };

  return (
    <div className="font-sans">
      <TableHeaderFilters />
      <div className="mt-[15px]">
        <Table data={rows} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default PatientsList;
