-- THIS IS SOMETHING ONLY NEEDED TO PUSH TO MAIN --

Signed commits verify the authenticity of code changes through cryptographic signatures.

Required steps:

1. Generate GPG key:

```bash
gpg --full-generate-key
```

2. Add to GitHub:

- Copy GPG key: `gpg --armor --export YOUR_KEY_ID`
- Add to GitHub Settings > SSH and GPG keys

3. Configure Git:

```bash
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
```

4. Sign commits:

```bash
git commit -S -m "message"  # Manual signing
# Or commits auto-sign with previous config
```

Benefits:

- Verifies commit authenticity
- Prevents impersonation
- Adds security audit trail
- Shows verified badge on GitHub

Commits without valid signatures will be rejected if this protection is enabled.

# Table Component Usage Guide

The `Table` component is a reusable table component that can be used to display tabular data. It supports pagination, row click events, and customizable rows per page.

## Props

- `data`: An array of objects representing the table data.
- `onRowClick`: An optional callback function that is called when a row is clicked. It receives the clicked row as an argument.

## Example Usage

The `Table` component is a reusable table component that can be used to display tabular data. It supports pagination, row click events, and customizable rows per page.

## Props

- `data`: An array of objects representing the table data.
- `onRowClick`: An optional callback function that is called when a row is clicked. It receives the clicked row as an argument.
- `colsFilters`: An array of column filters to apply to the table.
- `extraContent`: Optional additional content to render with the table.

## Example Usage

### Example 1: Basic Table with Favorite Container

```tsx
import React from 'react';
import { Table } from './components/table/TableC';

const rows: TableTData[] = [
  {
    'Lab Name': {
      value: 'Standard Thyroid',
      subValue: 'LabCorp',
      recommended: true,
      icon: null,
    },
    Price: {
      value: '80',
      subValue: null,
      recommended: false,
      icon: null,
      align: 'right',
    },
  },
];

const colsFilters: ColFilter[] = [
  {
    id: 'Lab Name',
    filterType: 'text',
  },
];

const App = () => {
  const handleRowClick = (row) => {
    console.log('Row clicked', row);
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

export default App;
```

### Example 2: Patients List Table

```tsx
'use client';
import React, { type FC, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import InsuranceIcon from '@/assets/icons/insurance.svg';
import MaleIcon from '@/assets/icons/male.svg';
import FemaleIcon from '@/assets/icons/female.svg';
import { Table } from '../../components/table';
import { ColFilter, TableTData, TRows } from '../../components/table/table.type';
import { Badge } from '../../components/common';
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
        subValue: (
          <div className="flex items-center gap-[2px]">
            Male <Image src={MaleIcon} alt="Male icon" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      DOB: {
        value: 'Feb 12, 1995',
        subValue: '29 years',
        recommended: false,
        icon: null,
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
        subValue: (
          <div className="flex items-center gap-[2px]">
            Female <Image src={FemaleIcon} alt="female icon" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      DOB: {
        value: 'Jan 1, 2000',
        subValue: '25 years',
        recommended: false,
        icon: null,
      },
      email: 'jane.doe@gmail.com',
      'Phone number': '(123) 456-7890',
      address: {
        value: '1234 Main St, Anytown, USA',
        subValue: 'Apt. 123',
        recommended: false,
        icon: null,
      },
      'Patient Since': {
        value: 'Jan 1, 2022',
        subValue: '3 months',
        recommended: false,
        icon: null,
      },
      Insurance: {
        value: 'Aetna',
        subValue: (
          <div className="flex items-center gap-[6px]">
            W2113 69935
            <Image src={InsuranceIcon} alt="Insurance" width={16} height={16} />
          </div>
        ),
        recommended: false,
        icon: null,
      },
      'Reports No.': {
        value: (
          <div className="flex items-center gap-[8px]">
            6 <Badge label="+3" />
          </div>
        ),
        recommended: false,
        icon: null,
        subValue: null,
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

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const handleRowClick = (row: TRows) => {
    router.push(`/patients/${row.id}`);
  };

  return (
    <div className="font-sans">
      <div className="mt-[15px]">
        <Table title="Patients" data={rows} onRowClick={handleRowClick} colsFilters={colsFilters} />
      </div>
    </div>
  );
};

export default PatientsList;
```

## Explanation

1. **Import the Table Component**: Import the `Table` component from its file location.
2. **Define the Data**: Create an array of objects representing the rows of the table. Each object should have properties that match the table's columns.
3. **Handle Row Click**: Define a function to handle row click events. This function will receive the clicked row as an argument.
4. **Render the Table**: Use the `Table` component in your JSX, passing the data and the row click handler as props.

These examples demonstrate how to set up and use the `Table` component in a React application. Adjust the data structure and props as needed to fit your specific use case.
