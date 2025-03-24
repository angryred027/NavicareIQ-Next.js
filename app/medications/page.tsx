'use client';

import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';
import { TableTData, TRows } from '@/components/table/table.type';
import { Table } from '@/components/table/table-component';
import { TableProvider } from '@/components/table/context';

import AddOrderModal from '@/modules/medications/add-order-modal/AddOrderModal';
import Button from '@/components/button/Button';
import Badge from '@/components/badge/Badge';
import Icon from '@/components/icon/Icon';

import { ReactNode, useState, useEffect, useMemo } from 'react';
import { Medication } from '@/types/medication.type';
import { Patient } from '@/types/patient.type';

const patientListData: Patient[] = [
  {
    id: 1,
    first_name: 'Angelina',
    last_name: 'Perreira',
    gender: 'Female',
    dob: '1992-07-03',
    phone: '+1 (903) 533-0955',
    email: 'angelina.perreira@gmail.com',
    city: 'Sausalito',
    state: 'CA',
    zip: '96922',
    street_address: '1010 11th St.',
    conditions: 'Hypertension, Asthma',
    diagnoses_codes: 'I10, J45',
    drug_allergies: 'Penicillin, Ibuprofen',
    medications: 'Lisinopril, Albuterol',
    facility_id: 101,
    created_at: '2024-03-12T08:30:00Z',
    updated_at: '2024-03-20T14:45:00Z',
    insurance: {
      provider: 'Aetna',
      code: 'W2113 69935',
    },
  },
  {
    id: 1,
    first_name: 'Dean',
    last_name: 'Friedland',
    gender: 'Male',
    dob: '1992-07-03',
    phone: '+1 (903) 533-0955',
    email: 'angelina.perreira@gmail.com',
    city: 'Sausalito',
    state: 'CA',
    zip: '96922',
    street_address: '1010 11th St.',
    conditions: 'Hypertension, Asthma',
    diagnoses_codes: 'I10, J45',
    drug_allergies: 'Penicillin, Ibuprofen',
    medications: 'Lisinopril, Albuterol',
    facility_id: 101,
    created_at: '2024-03-12T08:30:00Z',
    updated_at: '2024-03-20T14:45:00Z',
    insurance: {
      provider: 'Aetna',
      code: 'E1334 3421',
    },
  },
];

type PhysicianInfo = {
  name: string;
  physicianId: string;
};

const patientData = {
  id: 1,
  name: 'Angelina Perreira',
  gender: 'Female',
  age: 32,
  dob: '03 July 1992',
  phone: '+1 (903) 533 0955',
  email: 'perreira@gmail.com',
  address: '1010 11th St. Sausalito, CA, 96922',
  startDate: 'Mar 12, 2023',
  insurance: {
    provider: 'Aetna',
    code: 'W2113 69935',
  },
};

const physicianData = {
  id: 1,
  facility_id: 1,
  first_name: 'Charles',
  last_name: 'Brown',
  created_at: '',
  updated_at: '',
};

export default function MedicationsPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const medicinesData: TableTData[] = [
    {
      name: 'Isotretinoin',
      'Primary Use': 'Blood pressure management',
      vial: '0.25 mg/mL',
      form: 'Capsule',
      'Qty per pkg': 10,
      price: `$20`,
      btns: {
        value: (
          <Button onClick={() => handleAddToOrder('Isotretinoin')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Clotrimazole',
      'Primary Use': 'Blood pressure management',
      vial: '0.25 mg/pkg',
      form: 'Powder',
      'Qty per pkg': 20,
      price: `$10`,
      btns: {
        value: (
          <Button onClick={() => handleAddToOrder('Clotrimazole')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Montelukast',
      'Primary Use': 'Blood pressure management',
      vial: '0.4 mg/mL',
      form: 'Capsule',
      'Qty per pkg': 10,
      price: `$15`,
      btns: {
        value: (
          <Button onClick={() => handleAddToOrder('Montelukast')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Sertraline',
      'Primary Use': 'Blood pressure management',
      vial: '0.4 mg/mL',
      form: 'Capsule',
      'Qty per pkg': 12,
      price: `$15`,
      btns: {
        value: (
          <Button onClick={() => handleAddToOrder('Sertraline')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Clonazepam',
      'Primary Use': 'Blood pressure management',
      vial: '0.4 mg/mL',
      form: 'Capsule',
      'Qty per pkg': 12,
      price: `$15`,
      btns: {
        value: (
          <Button onClick={() => handleAddToOrder('Clonazepam')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
  ];

  const handleAddToOrder = (medication: string) => {
    setIsModalOpen(true);
    console.log(`Modal State Before:`, isModalOpen);
  };

  const [medicationsData, setMedicationsData] = useState<TableTData[]>(medicinesData);
  const [query, setQuery] = useState<string>('');
  const filteredMedicationsData = useMemo(() => {
    if (!query) {
      return medicationsData;
    } else {
      return medicationsData.filter((medication) => {
        return JSON.stringify(
          `${medication.name}, ${medication.price}, ${medication['Primary Use']}, ${medication.vial}, ${medication.form}, ${medication['Qty per pkg']}`
        )
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    }
  }, [query, medicationsData]);

  return (
    <>
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-[0.75rem]">
          <div className="block mr-2 mb-4 sm:mb-0 flex-1 sm:flex-none">
            <span className="block font-inter font-bold text-[1rem] leading-[1.5rem] text-[#000005]">Medications</span>
            <span className="font-inter font-medium text-[0.75rem] leading-[1.25rem] text-[#757B80]">
              Displaying: {filteredMedicationsData.length}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none w-full sm:w-[15rem] mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
            </div>

            <div className="flex flex-col sm:flex-row sm:ml-4 sm:space-x-4 w-full sm:w-auto">
              <Button variant="gray" className="mb-4 sm:mb-0">
                <Icon name="filter" className="mr-4" /> Filter
              </Button>
              <Button variant="gray">
                <Icon name="sort" className="mr-2" /> Sort By
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
      </div>
      <TableProvider
        data={filteredMedicationsData}
        colsAlign={{
          price: 'right',
          btns: 'right',
        }}
      >
        <Table />
      </TableProvider>
      {isModalOpen && (
        <AddOrderModal
          isOpen={true}
          onClose={() => {
            setIsModalOpen(false);
          }}
          physician={physicianData}
          patients={patientListData}
        />
      )}
    </>
  );
}
