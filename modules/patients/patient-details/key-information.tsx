import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  icon: ReactNode;
  label: string;
  description: string;
  subDescription?: ReactNode;
};

export const KeyInformation: FC<Props> = ({ icon, label, description, subDescription }) => {
  return (
    <div className={clsx('flex gap-[8px]')}>
      <div>{icon}</div>
      <div>
        <div className="text-[#757B80] text-[12px] font-medium">{label}</div>
        <div className="text-[#000005] text-[14px] mt-[4px]">{description}</div>
        {subDescription && <div className="text-[#91A3B0] text-[12px] mt-[4px]">{subDescription}</div>}
      </div>
    </div>
  );
};
