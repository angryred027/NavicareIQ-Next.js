'use client';
import { useState, useEffect } from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setLoading, setError, setFilters, setSort } from '@/store/features/pageSlice';

import Icon from '@/components/icon/Icon';
import Button from '@/components/button/Button';
import { Table } from '@/components/table/TableC';
import OrderCard from '@/modules/orders/order-card/OrderCard';
import FavoutiteCard from '@/modules/orders/favoutite-card/FavoutiteCard';

const favouriteData = [
  {
    title: 'Quantitative hCG Pregnancy',
    category: 'LabCorp',
    price: 80,
  },
  {
    title: 'Liver Health',
    category: 'LabCorp',
    price: 40,
  },
  {
    title: 'Anemia',
    category: 'LabCorp',
    price: 20,
  },
  {
    title: 'Inflammation (hs-CRP)',
    category: 'LabCorp',
    price: 80,
  },
  {
    title: 'Diabetes Risk (HbA1c)',
    category: 'LabCorp',
    price: 50,
  },
];

const ordersData = [
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
  {
    category: 'Quantitative hCG Pregnancy +2',
    name: 'Angelina Perreira ',
    date: 'Jan 28, 2025',
  },
];

const labsData = [
  {
    'Lab Name': {
      value: 'Standard Thyroid',
      subValue: 'LabCorp',
      icon: 'favourite',
      recommended: true,
    },
    price: 50,
  },
  {
    'Lab Name': {
      value: 'Tuberculosis (TB) Blood',
      subValue: 'LabCorp',
      icon: 'favourite',
      recommended: false,
    },
    price: 250,
  },
  {
    'Lab Name': {
      value: 'Quantitative hCG Pregnancy',
      subValue: 'Sonora Quest',
      icon: 'favourite',
      recommended: false,
    },
    price: 120,
  },
];

export default function OrderPage() {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, filters, sort } = useSelector((state: RootState) => state.page);

  useEffect(() => {
    dispatch(setLoading(true));
    //
    dispatch(setLoading(false));
  }, []);

  return (
    <>
      <div className="flex h-screen gap-4">
        {/* Left Column (Fixed & Scrollable) */}
        <div className="w-1/3 md:w-1/3 sm:w-1/2 h-screen p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border flex flex-col">
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-bold text-[#000005]">
            Previous Orders
          </span>

          <div className="relative w-full my-2 sm:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
          </div>

          {/* Scrollable Order List */}
          <div className="w-full overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden">
            {ordersData.map((item, index) => (
              <OrderCard key={index} category={item.category} name={item.name} date={item.date} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 md:w-2/3 sm:w-1/2 gap-2 flex flex-col">
          <div className="flex justify-between overflow-hidden p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
            <div className="block mr-2 mb-4 sm:mb-0 flex-1 sm:flex-none">
              <span className="block font-inter font-bold text-[1rem] leading-[1.5rem] text-[#000005]">Labs</span>
              <span className="font-inter font-medium text-[0.75rem] leading-[1.25rem] text-[#757B80]">
                Displaying: 124
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none w-full sm:w-[15rem] mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search..."
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

          <div className="p-2 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
            <span className="m-2 text-[0.75rem] leading-[1rem] font-inter font-semibold text-[#91A3B0]">
              Favourites
            </span>

            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favouriteData.map((item, index) => (
                <FavoutiteCard key={index} title={item.title} category={item.category} price={item.price} />
              ))}
              <div className="flex w-[10rem] justify-center items-center max-w-xs p-4 m-1 bg-white rounded-2xl shadow-md border">
                <div>
                  <Icon name="roundPlus" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
            <Table data={labsData} />
          </div>
        </div>
      </div>
    </>
  );
}
