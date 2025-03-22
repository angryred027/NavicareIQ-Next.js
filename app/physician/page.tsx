'use client';
import { useEffect } from 'react';
import { useBreadcrumbs } from '@/context/BreadcrumbsContext';

interface PageProps {
  breadCrumbs: (data: any[]) => void;
}
export default function PhysicianPage({ breadCrumbs }: PageProps) {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      //   { label: 'Patients' },
      //   { label: 'Angelina Perreira' },
      //   { label: 'Reports' },
      //   { isActive: true, label: '#PLJ22113 (Jan 28, 2025)' },
    ]);
  }, [setBreadcrumbs]);
  return (
    <>
      <div>Physician Page</div>
    </>
  );
}
