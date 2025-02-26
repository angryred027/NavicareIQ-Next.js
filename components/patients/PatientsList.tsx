import React, { FC } from 'react';
import { TableHeaderFilters } from '../table';

const PatientsList: FC = () => {
  return (
    <div className="font-sans">
      <TableHeaderFilters />
    </div>
  );
};

export default PatientsList;
