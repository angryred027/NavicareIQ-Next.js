'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import MedicineCard from '@/modules/education/medicine-card/MedicineCard';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setError, setLoading } from '@/store/features/pageSlice';
import { ReactNode, useState, useEffect, useMemo } from 'react';
import { Loader } from '@/components/common';

import Image from 'next/image';
import SortIcon from '@/assets/icons/sort.svg';
import SortUpIcon from '@/assets/icons/sort-arrow-up.svg';
import SortDownIcon from '@/assets/icons/sort-arrow-down.svg';
import { DropDown } from '@/components/common';

type ActiveSort = {
  label: string;
  icon: ReactNode;
};

const medicineData = [
  {
    image: './images/2d17230684438c7dcc508c348a84972c.jpg',
    name: 'Acetaminophen',
    category: 'Pain Relief & Anti-Inflammatory',
    uses: 'Pain & fever reducer',
  },
  {
    image: './images/9c7ab370298d3e5663b62c5cbb8cc191.jpg',
    name: 'Amoxicillin',
    category: 'Antibiotics',
    uses: 'Common penicillin antibiotic',
  },
  {
    image: './images/9067d50c4698ac96f14e4d6c3dec4623.jpg',
    name: 'Doxycycline',
    category: 'Antibiotics',
    uses: 'Used for acne, Lyme disease, STDs',
  },
  {
    image: './images/934f20fa98ec2d8924dc492b06a104ec.jpg',
    name: 'Loratadine',
    category: 'Allergy & Antihistamines',
    uses: 'Non-drowsy allergy relief',
  },
  {
    image: './images/6e3867af47e303929a78801fe229ea1b.jpg',
    name: 'Diphenhydramine',
    category: 'Allergy & Antihistamines',
    uses: 'Drowsy antihistamine for allergies & sleep',
  },
  {
    image: './images/0573d0c4d0fdd8ebabfaeb7e8c8aced4.jpg',
    name: 'Metformin',
    category: 'Diabetes & Blood Sugar Control',
    uses: 'First-line medication for Type 2 diabetes',
  },
  {
    image: './images/d87e0424a79a101b3a79830aac7954c4.jpg',
    name: 'Losartan',
    category: 'Hypertension',
    uses: 'ARB (angiotensin receptor blocker)',
  },
  {
    image: './images/52b41db35fab98e6f8b874d5df3ca9d1.jpg',
    name: 'Amlodipine',
    category: 'Hypertension',
    uses: 'Calcium channel blocker',
  },
];

const sortOptions = [
  {
    value: 'Latest',
    onClick: () => {},
  },
  {
    value: 'Oldest',
    onClick: () => {},
  },
  {
    value: 'Highest',
    onClick: () => {},
  },
  {
    value: 'Lowest',
    onClick: () => {},
  },
  {
    value: 'A-Z',
    onClick: () => {},
  },
  {
    value: 'Z-A',
    onClick: () => {},
  },
];

export default function EducationPage() {
  const { loading, error, filters, sort } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch<AppDispatch>();

  const [medicationsData, setMedicationsData] = useState<any[]>(medicineData);
  const [query, setQuery] = useState('');
  const [activeSort, setActiveSort] = useState<ActiveSort>({
    label: 'Sort by',
    icon: <Image src={SortIcon} alt="sort" width={24} height={24} />,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch('/api/education', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const obj = await response.json();

        if (!response.ok) {
          dispatch(setError(`Error fetch data: ${response.status}`));
          setMedicationsData([]);
          return;
        }
        // setMedicationsData(obj.data);
        console.log('Medications Data: ', obj.data);
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        } else {
          dispatch(setError('An unknown error occurred'));
        }
        setMedicationsData([]);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, []);

  const filteredMedicationsData = useMemo(() => {
    if (!query) {
      return medicationsData;
    } else {
      return medicationsData.filter((medication) =>
        JSON.stringify(medication).toLowerCase().includes(query.toLowerCase())
      );
    }
  }, [query, medicationsData]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-[0.75rem]">
        <div className="block mr-2 mb-4 sm:mb-0 flex-1 sm:flex-none">
          <span className="block font-inter font-bold text-[1rem] leading-[1.5rem] text-[#000005]">Education</span>
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
            <div>
              <DropDown
                btnLabel={activeSort.label ?? 'Sort by'}
                className="min-w-[145px]"
                startSlot={<div>{activeSort.icon}</div>}
                items={sortOptions}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <Loader />
        ) : (
          filteredMedicationsData.map((item, index) => (
            <MedicineCard key={index} image={item.image} name={item.name} category={item.category} uses={item.uses} />
          ))
        )}
      </div>
    </div>
  );
}
