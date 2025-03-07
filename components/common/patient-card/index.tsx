import React, { type FC } from 'react';
import clsx from 'clsx';
import { Avatar } from '@/components/common';

type PatientCardProps = {
  name: string;
  gender: string;
  age: number;
};

export const PatientCard: FC<PatientCardProps> = ({ name, gender, age }) => {
  return (
    <div className="flex items-center gap-[12px]">
      <div>
        <Avatar label={name} />
      </div>
      <div>
        <div className={clsx('font-semibold text-[14px]')}>{name}</div>
        <div
          className={clsx(
            'font-medium text-[12px] text-[#757B80] uppercase',
            'bg-system-dark-100 px-[8px] py-[3px] rounded-[6px]',
            'mt-[3px]'
          )}
        >{`${gender} , ${age} years`}</div>
      </div>
    </div>
  );
};
