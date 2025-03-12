'use client';
import { Table } from '@/components/table';
import { TableTData, TRows } from '@/components/table/table.type';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import MaleIcon from '@/assets/icons/male.svg';
import InsuranceIcon from '@/assets/icons/insurance.svg';
import ThreeDotsIcon from '@/assets/icons/three-dots.svg';
import { BadgeStatus, DropDown } from '@/components/common';

const LabsList = () => {
  const router = useRouter();

  const rows: TableTData[] = [
    {
      'Patient Name': {
        value: "Byron D'Amore",
        subValue: (
          <div className="flex items-center gap-[2px]">
            Male <Image src={MaleIcon} alt="Male icon" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      lab: {
        value: 'Standard Thyroid',
        subValue: 'Short description of the lab test',
        recommended: false,
        icon: null,
      },
      email: 'damore@gmail.com',
      'Phone number': '(197) 260-7456',
      'Completion Date': 'Jan 1, 2022',
      Insurance: {
        value: 'Aetna',
        subValue: (
          <div className="flex items-center gap-[2px]">
            W2113 69935 <Image src={InsuranceIcon} alt="Insurance" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      'Report Analysis': {
        value: <BadgeStatus status="ready" label="Ready" />,
        subValue: null,
        recommended: false,
        icon: null,
      },
      btns: {
        value: (
          <DropDown
            btnLabel={<Image src={ThreeDotsIcon} alt="Options" width={24} height={24} />}
            className="border-none"
            items={[
              { value: 'Analyze', onClick: () => console.log('Edit') },
              { value: 'Share', onClick: () => console.log('Delete') },
              { value: 'Download', onClick: () => console.log('Delete') },
            ]}
          />
        ),
        subValue: null,
        recommended: false,
        icon: null,
      },
    },
    {
      'Patient Name': {
        value: "Byron D'Amore",
        subValue: (
          <div className="flex items-center gap-[2px]">
            Male <Image src={MaleIcon} alt="Male icon" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      lab: {
        value: 'Standard Thyroid',
        subValue: 'Short description of the lab test',
        recommended: false,
        icon: null,
      },
      email: 'damore@gmail.com',
      'Phone number': '(197) 260-7456',
      'Completion Date': 'Jan 1, 2022',
      Insurance: {
        value: 'Aetna',
        subValue: (
          <div className="flex items-center gap-[2px]">
            W2113 69935 <Image src={InsuranceIcon} alt="Insurance" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      'Report Analysis': {
        value: <BadgeStatus status="not-ready" label="Not Ready" />,
        subValue: null,
        recommended: false,
        icon: null,
      },
      btns: {
        value: (
          <div>
            <DropDown
              btnLabel={<Image src={ThreeDotsIcon} alt="Options" width={24} height={24} />}
              className="border-none"
              items={[
                { value: 'Analyze', onClick: () => console.log('Edit') },
                { value: 'Share', onClick: () => console.log('Delete') },
                { value: 'Download', onClick: () => console.log('Delete') },
              ]}
            />
          </div>
        ),
        subValue: null,
        recommended: false,
        icon: null,
      },
    },
  ];

  const handleRowClick = (row: TRows) => {
    router.push(`/patients/${row.id}`);
  };

  return (
    <div>
      <Table
        title="Labs"
        data={rows}
        canSelect
        onRowClick={handleRowClick}
        colsFilters={[]}
        colsAlign={{
          btns: 'right',
        }}
        colsSort={['Patient Name', 'lab', 'email', 'Phone number', 'Completion Date', 'Insurance']}
      />
    </div>
  );
};
export default LabsList;
