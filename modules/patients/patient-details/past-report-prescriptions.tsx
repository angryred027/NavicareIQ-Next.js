import React, { type FC, Fragment, useState } from 'react';
import Tabs from '@/components/tabs/Tabs';
import ReportPrescriptionsCard from './reports-prescriptions-card';
import clsx from 'clsx';

const tabsIds = [
  {
    id: '1',
    label: 'Past Reports',
  },
  {
    id: '2',
    label: 'Past Prescriptions',
  },
];

const PastReportPrescriptions: FC = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Fragment>
      <Tabs tabs={tabsIds} defaultTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} />
      <div className={clsx('mt-[12px] flex flex-col gap-[8px]', 'h-[calc(100vh_-_250px)]', 'overflow-y-auto')}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ReportPrescriptionsCard key={index} title={`Lab Report #${index + 1}`} subtitle="Jan 28, 2025" />
        ))}
      </div>
    </Fragment>
  );
};

export default PastReportPrescriptions;
