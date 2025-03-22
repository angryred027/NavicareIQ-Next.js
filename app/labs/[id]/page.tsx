'use client';
import React from 'react';
import { useEffect } from 'react';
import { useBreadcrumbs } from '@/context/BreadcrumbsContext';
import { usePathname } from 'next/navigation';
import PatientReportDetail from '@/modules/labs/labs-patient-report-detail';

const PatientReportDetailPage = () => {
  const pathname = usePathname();
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    if (!pathname) return;

    const pathSegments = pathname.split('/').filter((segment) => segment);

    const breadcrumbList = pathSegments.map((segment, index) => {
      const id = index;
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { id, label, href };
    });

    setBreadcrumbs(breadcrumbList);
  }, [pathname]);

  useEffect(() => {
    setBreadcrumbs([
      { id: 0, label: 'Patients' },
      { id: 1, label: 'Angelina Perreira' },
      { id: 2, label: 'Reports' },
      { id: 3, isActive: true, label: '#PLJ22113 (Jan 28, 2025)' },
    ]);
  }, [setBreadcrumbs]);
  return (
    <div>
      <PatientReportDetail />
    </div>
  );
};

export default PatientReportDetailPage;
