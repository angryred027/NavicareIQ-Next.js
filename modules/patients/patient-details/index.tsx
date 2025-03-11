'use client';
import React, { FC } from 'react';
import { Grid, GridItem, Card } from '@/components/common';
import PatientInformation from './patient-information';
import PastReportPrescriptions from './past-report-prescriptions';
import PatientTable from './patient-table';

const PatientDetail: FC = () => {
  return (
    <Grid gap="16px" className="h-full">
      <GridItem col={2} className="h-full">
        <Card className="h-full">
          <PatientInformation />
        </Card>
      </GridItem>
      <GridItem col={3} className="h-full">
        <Card className="h-full p-[8px]">
          <PastReportPrescriptions />
        </Card>
      </GridItem>
      <GridItem col={7}>
        <PatientTable />
      </GridItem>
    </Grid>
  );
};

export default PatientDetail;
