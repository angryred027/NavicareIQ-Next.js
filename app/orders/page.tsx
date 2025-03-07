'use client';
import { useState, useEffect } from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setLoading, setError, setFilters, setSort } from '@/store/features/pageSlice';

import Icon from '@/components/icon/Icon';
import Button from '@/components/button/Button';
import { Table } from '@/components/table/TableC';
import { TableProvider } from '@/components/table/context';
import OrderCard from '@/modules/orders/order-card/OrderCard';
import FavouriteCard from '@/modules/orders/favourite-card/FavouriteCard';

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
      <div className="flex flex-col md:flex-row h-screen gap-4 p-4">
        {/* Left Column (Fixed & Scrollable) */}
        <div className="w-full md:w-1/3 h-[50vh] md:h-screen p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl flex flex-col">
          <span className="text-lg md:text-xl font-bold text-[#000005]">Previous Orders</span>

          <div className="relative w-full my-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
          </div>

          <div className="w-full overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden">
            {ordersData.map((item, index) => (
              <OrderCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <span className="block font-bold text-lg text-[#000005]">Labs</span>
              <span className="text-sm text-[#757B80]">Displaying: 124</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2">
              <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
              </div>
              <Button variant="gray" className="flex items-center">
                <Icon name="filter" className="mr-2" /> Filter
              </Button>
              <Button variant="gray" className="flex items-center">
                <Icon name="sort" className="mr-2" /> Sort By
              </Button>
            </div>
          </div>

          <div className="p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl">
            <span className="text-sm font-semibold text-[#91A3B0]">Favourites</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
              {favouriteData.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-36 flex items-center justify-center bg-white rounded-2xl shadow-md border"
                >
                  <FavouriteCard {...item} />
                </div>
              ))}
              <div className="w-full h-36 flex items-center justify-center bg-white rounded-2xl shadow-md border">
                <Icon name="roundPlus" />
              </div>
            </div>
          </div>
          <TableProvider data={labsData}>
            <Table />
          </TableProvider>
        </div>
      </div>
    </>
  );
}
