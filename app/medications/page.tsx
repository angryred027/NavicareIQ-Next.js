'use client';
import PlaceOrderDrawer from '@/modules/lib/PlaceOrderDrawer';
import AddOrderModal from '@/modules/medication/add-to-modal/AddOrderModal';
import Button from '@/components/button/Button';
import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';
import Badge from '@/components/badge/Badge';
import { Table } from '@/components/table/table-component';
import { TableProvider } from '@/components/table/context';
import { TableTData, TRows } from '@/components/table/table.type';
import Icon from '@/components/icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setError, setLoading } from '@/store/features/pageSlice';
import { ReactNode, useState, useEffect, useMemo } from 'react';
import { Loader } from '@/components/common';

const patientListData = [
  {
    value: 'LabCorp',
    label: 'LabCorp',
  },
  {
    value: 'Quest Sonora',
    label: 'Quest Sonora',
  },
];

type InsuranceItem = {
  provider: string;
  code: string;
};

type PatientInfo = {
  name: string;
  gender: string;
  age: number;
  dob: string;
  phone: string;
  email: string;
  address: string;
  startDate: string;
  insurance: InsuranceItem;
};

type PhysicianInfo = {
  name: string;
  physicianId: string;
};

type LabItem = {
  name: string;
};

type VendorItem = {
  value: string;
  label: string;
};

const medicationsData: TableTData[] = [
  {
    name: 'Isotretinoin',
    'Primary Use': 'Blood pressure management',
    vial: '0.25 mg/mL',
    form: 'Capsule',
    'Qty. per pkg.': 20,
    price: `$20`,
    btns: {
      value: (
        <Button onClick={() => alert('Welcome!')}>
          <div className="flex items-center gap-2 px-2">+</div>
        </Button>
      ),
    },
  },
];

type AddOrderModalProps = {
  isOpen: boolean;
  lab: LabItem;
  vendors: VendorItem[];
  patient: PatientInfo;
  physician: PhysicianInfo;
};

const vendorsData = [
  {
    value: 'LabCorp',
    label: 'LabCorp',
  },
  {
    value: 'Quest Sonora',
    label: 'Quest Sonora',
  },
];

const patientData = {
  name: 'Angellina Perreira',
  gender: 'Female',
  age: 32,
  dob: '03 July 1992',
  phone: '+1 (903) 533 0955',
  email: 'perreira@gmail.com',
  address: '1010 11th St. Sausalito, CA 96922',
  startDate: 'Mar 12, 2023',
  insurance: {
    provider: 'Aetna',
    code: 'W2113 69935',
  },
};

const physicianData = {
  name: 'Charles',
  physicianId: '_physician1',
};

const labData = {
  name: 'Quantitative hCG Pregnancy',
};

function Child() {
  return (
    <>
      <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
        <div className="my-4 relative sm:flex-none bg-[#F6F9FA] rounded-md border border-[#E6F0F8]">
          <PatientInfo patient={patientData} />
        </div>
        <div className="mb-2 font-inter font-semibold text-xs leading-[16px] text-[#757B80]">Order 1</div>
        <div className="bg-[#F6F9FA] rounded-[12px] p-3">
          <div className="flex flex-col justify-center rounded-[12px]">
            <div className="flex justify-between">
              <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                {'Vertisis Custom Compounded Sublingual DHEA'}
              </span>
              <div className="mt-1">
                <Icon name="circleThreeDot" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
              </div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Qty. &nbsp;</span>
                <span className="font-semibold text-[#4167AF]">1</span>
                <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
              </div>
            </div>
          </div>
          <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
          <div className="flex flex-col justify-center rounded-[12px]">
            <div className="flex justify-between">
              <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                {'Vertisis Custom Compounded Sublingual DHEA'}
              </span>
              <div className="mt-1">
                <Icon name="circleThreeDot" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
              </div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Qty. &nbsp;</span>
                <span className="font-semibold text-[#4167AF]">2</span>
                <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge icon="warning" level="Moderate" label="Previously prescribed" />
          </div>
          <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
          <div className="bg-white rounded-[8px] p-3">
            <div className=" flex justify-between font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
              <span>Pharmacy</span>
              <Icon name="circleThreeDot" />
            </div>
            <div className="mt-1 font-inter font-medium text-[12px] leading-[16px] text-[#000005]">
              Vertisis Custom Pharmacy
            </div>
            <div className="mt-2 font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
              Est. Pickup: Feb 12, 2025
            </div>
          </div>
        </div>

        <div className="mb-2 mt-4 font-inter font-semibold text-xs leading-[16px] text-[#757B80]">Order 2</div>
        <div className="bg-[#F6F9FA] rounded-[12px] p-3">
          <div className="flex flex-col justify-center rounded-[12px]">
            <div className="flex justify-between">
              <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                {'Vertisis Custom Compounded Sublingual DHEA'}
              </span>
              <div className="mt-1">
                <Icon name="circleThreeDot" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
              </div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Qty. &nbsp;</span>
                <span className="font-semibold text-[#4167AF]">1</span>
                <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
              </div>
            </div>
          </div>
          <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
          <div className="bg-white rounded-[8px] p-3">
            <div className="flex justify-between font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
              <span>Pharmacy</span>
              <Icon name="circleThreeDot" />
            </div>
            <div className="mt-1 font-inter font-medium text-[12px] leading-[16px] text-[#000005]">
              Vertisis Custom Pharmacy
            </div>
            <div className="mt-2 font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
              Est. Pickup: Feb 12, 2025
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex w-full my-5 items-center justify-center h-[3.5rem] bg-[#4167AF] rounded-[1rem]"
          type="submit"
        >
          Confirm & Place order
        </Button>
      </div>
    </>
  );
}

export default function MedicationsPage() {
  const medicinesData: TableTData[] = [
    {
      name: 'Isotretinoin',
      'Primary Use': 'Blood pressure management',
      vial: '0.25 mg/mL',
      form: 'Capsule',
      'Qty per pkg': 20,
      price: '$50',
      btns: {
        value: (
          <Button onClick={() => alert('Welcome!')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Clotrimazole',
      'Primary Use': 'Blood pressure management',
      vial: '0.25 mg/pkg',
      form: 'Capsule',
      'Qty per pkg': 10,
      price: '$30',
      btns: {
        value: (
          <Button onClick={() => alert('Welcome!')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
    {
      name: 'Montelukast',
      'Primary Use': 'Blood pressure management',
      vial: '0.35 mg/mL',
      form: 'Powder',
      'Qty per pkg': 15,
      price: '$10',
      btns: {
        value: (
          <Button onClick={() => handleAddtoOrder('adfs')}>
            <div className="flex items-center">+</div>
          </Button>
        ),
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { loading, error, filters, sort } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddtoOrder = (_id: string) => {
    setIsModalOpen(true);
    console.log('123');
  };

  const [medicationsData, setMedicationsData] = useState<TableTData[]>(medicinesData);
  const [query, setQuery] = useState<string>('');
  const filteredMedicationsData = useMemo(() => {
    if (!query) {
      return medicationsData;
    } else {
      return medicationsData.filter((medication) => {
        console.log('Filtering medication:', medication);
        return JSON.stringify(medication).toLowerCase().includes(query.toLowerCase());
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
      <AddOrderModal
        isOpen={isModalOpen}
        lab={labData}
        vendors={vendorsData}
        patient={patientData}
        physician={physicianData}
        patientList={patientListData}
      />
      {/* <PlaceOrderDrawer
        isOpen={isOpen}
        title={'Place Order'}
        position={'right'}
        className={'h-screen'}
        onClose={() => setIsOpen(false)}
      >
        <Child />
      </PlaceOrderDrawer> */}
    </>
  );
}
