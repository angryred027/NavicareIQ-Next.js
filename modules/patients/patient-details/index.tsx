import React, { FC } from 'react';
import { Grid, GridItem, Card } from '@/components/common';
import PatientInformation from './patient-information';

const PatientDetail: FC = () => {
  return (
    <Grid gap="16px" className="h-full">
      <GridItem col={3} className="h-full">
        <Card className="h-full">
          <PatientInformation />
        </Card>
      </GridItem>
      <GridItem col={3} className="h-full">
        <Card className="h-full">
          <div>Detail</div>
        </Card>
      </GridItem>
      <GridItem col={6}>
        <Card>
          <div>Detail</div>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default PatientDetail;
