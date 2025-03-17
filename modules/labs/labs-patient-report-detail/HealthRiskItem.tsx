import React, { FC } from 'react';
import clsx from 'clsx';
import { BadgeStatus } from '@/components/common';

type Props = {
  icon: React.ReactNode;
  title: string;
  status: 'low' | 'medium' | 'high';
};

const HealthRiskItem: FC<Props> = ({ icon, title, status }) => {
  return (
    <div
      className={clsx(
        'rounded-[8px] p-[12px]',
        'flex flex-col gap-[8px]',
        'bg-[#FFFFFF]',
        'border-[#E6F0F8] border-[1px]',
        'text-[12px]',
        'w-[228px]'
      )}
    >
      <div className="flex items-center gap-[8px]">
        {icon}
        <div className="font-semibold">{title}</div>
      </div>
      <div>
        {status === 'low' && <BadgeStatus label="Low Risk" status="success" />}
        {status === 'medium' && <BadgeStatus label="Moderate" status="not-ready" />}
        {status === 'high' && <BadgeStatus label="High Risk" status="warning" />}
      </div>
    </div>
  );
};

export default HealthRiskItem;
