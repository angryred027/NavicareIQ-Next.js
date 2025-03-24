'use client';
import Header from '@/components/header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { getCurrentUser } from '@/store/features/authSlice';
import {
  addLabOrder,
  addMedicationOrder,
  setMedicationQuantity,
  loadStoredOrderData,
} from '@/store/features/orderSlice';

import { usePathname } from 'next/navigation';

import OrderDrawer from '@/modules/lib/OrderDrawer';
import { Patient } from '@/types/patient.type';

const patientData: Patient = {
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
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { labOrders, medicationOrders } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(loadStoredOrderData());
  }, []);

  const pathname = usePathname();
  const showBreadCrumbs = pathname !== '/help' && pathname !== '/education';
  const isDrawerOpen = useSelector((state: RootState) => state.page.isDrawerOpen);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log('ABCD');
  }, [isDrawerOpen]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        {showBreadCrumbs && (
          <Breadcrumbs
            items={[
              { label: 'Patients' },
              { label: 'Angelina Perreira' },
              { label: 'Reports' },
              { isActive: true, label: '#PLJ22113 (Jan 28, 2025)' },
            ]}
          />
        )}
        <div className="p-6 h-[calc(100vh_-_142px)] overflow-y-auto">{children}</div>
        {isDrawerOpen && <OrderDrawer isOpen={isDrawerOpen} patient={patientData} />}
      </div>
    </div>
  );
}
