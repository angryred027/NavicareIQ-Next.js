import Header from '@/components/header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/features/authSlice';
import { usePathname } from 'next/navigation';
import { BreadcrumbsProvider, useBreadcrumbs } from '@/context/BreadcrumbsContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const [breadCrumbs, setBreadCrumbs] = useState<any[]>([]);
  const pathname = usePathname();
  return (
    <BreadcrumbsProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <BreadcrumbsDisplay />
          <div className="p-6 h-[calc(100vh_-_142px)] overflow-y-auto [&::-webkit-scrollbar]:hidden">{children}</div>
        </div>
      </div>
    </BreadcrumbsProvider>
  );
}

function BreadcrumbsDisplay() {
  const { breadcrumbs } = useBreadcrumbs();
  return breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null;
}
