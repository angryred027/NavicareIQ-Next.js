import React, { type FC } from 'react';
import { Divider, PatientCard } from '@/components/common';

const PatientInformation: FC = () => {
  return (
    <div>
      <PatientCard name="Angelina Perreira" gender="Female" age={32} />
      <Divider className="mt-[16px]" />
    </div>
  );
};

export default PatientInformation;
