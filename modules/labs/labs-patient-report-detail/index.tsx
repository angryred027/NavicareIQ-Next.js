'use client';
import React, { type FC, useState } from 'react';
import { Grid, GridItem, Card } from '@/components/common';
import PatientInformation from '@/modules/patients/patient-details/patient-information';
import Tabs from '@/components/tabs/Tabs';
import LabReportCard from './lab-report-card';
import SummaryLabPatientReportLab from './summary-lab-patient-report-detail';
import NavigationPanel from './NavigationPanel';

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

const PatientReportDetail: FC = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div>
      <Grid gap="16px" className="h-full">
        <GridItem col={2} colWidth="288px" className="h-full">
          <div className="h-[calc(100vh_-_190px)] overflow-y-auto">
            <PatientInformation hasAccordion />
            <Card className=" mt-[12px] p-[8px]">
              <Tabs tabs={tabsIds} defaultTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} />
              <div className="flex flex-col gap-[8px] mt-[12px]">
                {Array.from({ length: 7 }).map((_, index) => (
                  <LabReportCard key={index} labReport={`Lab Report #PLJ22113`} date="12/12/2022" />
                ))}
              </div>
            </Card>
          </div>
        </GridItem>
        <GridItem col={7} className="h-full">
          <Card className="h-full p-[8px]">
            <SummaryLabPatientReportLab />
          </Card>
        </GridItem>
        <GridItem col={3}>
          <Card className="w-[182px] p-[8px]">
            <NavigationPanel />
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default PatientReportDetail;
