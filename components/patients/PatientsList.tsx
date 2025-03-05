'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import InsuranceIcon from '@/assets/icons/insurance.svg';
import MaleIcon from '@/assets/icons/male.svg';
import FemaleIcon from '@/assets/icons/female.svg';
import { Table } from '../table';
import { TableTData, TRows } from '../table/table.type';
import { Badge } from '../common';

const PatientsList: FC = () => {
  const router = useRouter();

  const rows: TableTData[] = [];

  const handleRowClick = (row: TRows) => {
    router.push(`/patients/${row.id}`);
  };

  return (
    <div className="font-sans">
      <div className="mt-[15px]">
        <Table data={rows} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default PatientsList;
