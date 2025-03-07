import Header from '@/components/header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/features/authSlice';

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Breadcrumbs
          items={[
            { label: 'Patients' },
            { label: 'Angelina Perreira' },
            { label: 'Reports' },
            { isActive: true, label: '#PLJ22113 (Jan 28, 2025)' },
          ]}
        />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
