'use client';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setError, setLoading } from '@/store/features/pageSlice';

import Icon from '@/components/icon/Icon';
import Button from '@/components/button/Button';
import { Table } from '@/components/table/table-component';
import { TableProvider } from '@/components/table/context';
import OrderCard from '@/modules/orders/order-card/OrderCard';
import FavouriteCard from '@/modules/orders/favourite-card/FavouriteCard';
import { TableTData } from '@/components/table/table.type';
import { Loader } from '@/components/common';
import convertDateFormat from '@/lib/convertDateFormat';

const favouriteData = [
  {
    title: 'Quantitative hCG Pregnancy',
    category: 'LabCorp',
    price: 80,
    align: 'right',
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

export default function OrderPage() {
  const { loading, error, filters, sort } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch<AppDispatch>();

  const [ordersData, setOrdersData] = useState<any[]>([]);
  const [labsData, setLabsData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>('');

  const handleAddToOrder = (rowData: TableTData) => {
    const handleAddToOrder = (rowData: TableTData) => {
      const labName = rowData['Lab Name'];

      if (typeof labName === 'object' && labName !== null && 'value' in labName) {
        alert(`Added ${labName.value} to order!`);
      } else {
        alert('Lab Name is not valid!');
      }
    };
  };

  const filteredOrdersData = useMemo(() => {
    if (!query) {
      return ordersData;
    } else {
      return ordersData.filter((item) =>
        JSON.stringify(item.lab_orders[0].lab_order_items[0].lab_product.name)
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    }
  }, [query, ordersData]);

  const generateLabsTableData = (labsData: any[]) => {
    const labsTableData = labsData.map((lab, item) => {
      const labName = lab.name || 'Unknown';
      const provider = lab.provider || 'Unknown';
      const icon = lab.provider || '';
      const recommended = lab.recommended || false;
      const price = lab.price || 0;
      const rowData = {
        'Lab Name': {
          value: labName,
          subValue: provider,
          icon: icon,
          recommended: recommended,
        },
        price: `$${price}`,
        btns: {
          value: (
            <Button onClick={() => alert(`Added ${rowData['Lab Name'].value} to order!`)}>
              <div className="flex items-center gap-2 px-2">+ Add to Order</div>
            </Button>
          ),
          subValue: null,
          recommended: false,
          icon: null,
        },
      };
      return rowData;
    });

    return labsTableData;
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      dispatch(setLoading(true)); // 🔹 Start loading before API call

      try {
        const response = await fetch('/api/lab-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ patientId: 1 }),
        });

        if (response.ok) {
          const obj = await response.json();
          console.log(obj);
          setOrdersData(obj.ordersData);
          setLabsData(obj.labsData);
        } else {
          setOrdersData([]);
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        } else {
          dispatch(setError('An unknown error occurred'));
        }
        setOrdersData([]);
        setLabsData([]);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchOrderData();
  }, [dispatch]);

  const labsTableData = useMemo(() => {
    const tableData = generateLabsTableData(labsData);
    console.log('TableData: ', tableData);
    return tableData;
  }, [labsData]);

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
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="w-full overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden">
              {filteredOrdersData.map((item, index) => (
                <OrderCard
                  key={index}
                  category={item.lab_orders[0].lab_order_items[0].lab_product.name}
                  name={patientData.name}
                  date={convertDateFormat(item.created_at)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 mr-4 sm:mb-0">
              <span className="block font-bold text-lg text-[#000005]">Labs</span>
              <span className="text-sm text-[#757B80]">Displaying: {labsTableData.length}</span>
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
                <Icon name="roundPlus" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <TableProvider
            data={labsTableData}
            colsAlign={{
              'Lab Name': 'left',
              price: 'right',
              btns: 'right',
            }}
          >
            <Table />
          </TableProvider>
        </div>
      </div>
    </>
  );
}
