'use client';
import React, { type FC, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import InsuranceIcon from '@/assets/icons/insurance.svg';
import MaleIcon from '@/assets/icons/male.svg';
import FemaleIcon from '@/assets/icons/female.svg';
import { Table } from '../table';
import { ColFilter, TableTData, TRows } from '../table/table.type';
import { Badge } from '../common';
import { getPatients } from '@/lib/api/patient';
import { Patient } from '@/types/patient.type';
import { ApiResponse } from '@/lib';

const PatientsList: FC = () => {
  const router = useRouter();
  const [patients, setPatients] = useState<ApiResponse<Patient[]>>([]);

  const rows: TableTData[] = [
    {
      name: {
        value: "Byron D'Amore",
        subvalue: (
          <div className="flex items-center gap-[2px]">
            Male <Image src={MaleIcon} alt="Male icon" width={16} height={16} />
          </div>
        ),
      },
      DOB: {
        value: 'Feb 12, 1995',
        subvalue: '29 years',
      },
      email: 'damore@gmail.com',
      'Phone number': '(197) 260-7456',
      address: '1234 Main St, Anytown, USA',
      'Patient Since': 'Jan 1, 2022',
      Insurance: 'Aetna',
      'Reports No.': '3',
    },
    {
      name: {
        value: 'Jane Doe',
        subvalue: (
          <div className="flex items-center gap-[2px]">
            Female <Image src={FemaleIcon} alt="female icon" width={16} height={16} />
          </div>
        ),
      },
      DOB: {
        value: 'Jan 1, 2000',
        subvalue: '25 years',
      },
      email: 'jane.doe@gmail.com',
      'Phone number': '(123) 456-7890',
      address: {
        value: '1234 Main St, Anytown, USA',
        subvalue: 'Apt. 123',
      },
      'Patient Since': {
        value: 'Jan 1, 2022',
        subvalue: '3 months',
      },
      Insurance: {
        value: 'Aetna',
        subvalue: (
          <div className="flex items-center gap-[6px]">
            W2113 69935
            <Image src={InsuranceIcon} alt="Insurance" width={16} height={16} />
          </div>
        ),
      },
      'Reports No.': {
        value: (
          <div className="flex items-center gap-[8px]">
            6 <Badge label="+3" />
          </div>
        ),
        subvalue: null,
      },
    },
  ];

  const colsFilters: ColFilter[] = [
    {
      id: 'name',
      filterType: 'text',
    },
    {
      id: 'DOB',
      filterType: 'date',
    },
    {
      id: 'email',
      filterType: 'text',
    },
    {
      id: 'Phone number',
      filterType: 'text',
    },
    {
      id: 'address',
      filterType: 'text',
    },
    {
      id: 'Patient Since',
      filterType: 'date',
    },
    {
      id: 'Insurance',
      filterType: 'text',
    },
    {
      id: 'Reports No.',
      filterType: 'range',
    },
  ];

  const fetchPatients = useCallback(async () => {
    const response = await getPatients(1);
    setPatients(response);
  }, []);

  // useEffect(() => {
  //   fetchPatients();
  // }, [fetchPatients]);

  const handleRowClick = (row: TRows) => {
    router.push(`/patients/${row.id}`);
  };

  return (
    <div className="font-sans">
      <div className="mt-[15px]">
        <Table data={rows} onRowClick={handleRowClick} colsFilters={colsFilters} />
      </div>
    </div>
  );
};

export default PatientsList;
