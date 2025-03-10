import React, { type FC } from 'react';
import ThreeDots from '@/assets/icons/three-dots.svg';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  title: string;
  subtitle: string;
};

const ReportPrescriptionsCard: FC<Props> = ({ title, subtitle }) => {
  return (
    <div
      className={clsx(
        'flex gap-[2px] bg-[#fff]',
        'px-[12px] py-[10px]',
        'border-[1px] border-[#E6F0F8] rounded-[8px]',
        'flex-col'
      )}
    >
      <div className={clsx('flex ml-[2px]', 'justify-between')}>
        <div className="font-bold text-[14px]">{title}</div>
        <div className="cursor-pointer">
          <Image src={ThreeDots} alt="three-dots" width={24} height={24} />
        </div>
      </div>
      <div>
        <div className="text-[12px] font-medium text-[#757B80]">{subtitle}</div>
      </div>
    </div>
  );
};

export default ReportPrescriptionsCard;
