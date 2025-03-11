import React, { FC } from 'react';
import Image from 'next/image';
import PlusIcon from '@/assets/icons/plus-dark.svg';
import { Table } from '@/components/table';
import { ColFilter, TableTData, TRows } from '@/components/table/table.type';
import FavoriteContainer from './favorite-container';
import { Button } from '@/components/common';

const PatientTable: FC = () => {
  const rows: TableTData[] = [
    {
      'Lab Name': {
        value: 'Standard Thyroid',
        subValue: 'LabCorp',
        recommended: true,
        icon: 'bookmark',
      },
      Price: {
        value: '80',
        subValue: null,
        recommended: false,
        align: 'right',
        icon: 'bookmarked',
      },
      btns: {
        value: (
          <Button
            startIcon={<Image src={PlusIcon} color="#515253" width={12} height={12} alt="plus" />}
            label="Add to cart"
            variant="outlined"
          />
        ),
        subValue: null,
        recommended: false,
        icon: null,
      },
    },
  ];
  const colsFilters: ColFilter[] = [
    {
      id: 'Lab Name',
      filterType: 'text',
    },
  ];

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
        colsAlign={{
          Price: 'right',
          btns: 'right',
        }}
        extraContent={<FavoriteContainer />}
      />
    </div>
  );
};

export default PatientTable;
