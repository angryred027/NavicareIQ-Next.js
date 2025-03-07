import Header from '@/components/header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
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
        <div className="p-6 h-full">{children}</div>
      </div>
    </div>
  );
}
