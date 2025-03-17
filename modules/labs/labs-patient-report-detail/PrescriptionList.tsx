import React, { FC } from 'react';
import clsx from 'clsx';
import PrescriptionItem from './PrescriptionItem';

const PrescriptionList: FC = () => {
  return (
    <div
      className={clsx(
        'flex justify-between w-full bg-[#fff] ',
        'flex-col',
        'mt-[16px]',
        'border-[#E6F0F8] boder-[1px]',
        'rounded-[8px]'
      )}
    >
      <PrescriptionItem
        name="Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL"
        description="Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day."
      />
      <PrescriptionItem
        name="Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL"
        description="Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day."
        previousPrescription
      />
    </div>
  );
};

export default PrescriptionList;
