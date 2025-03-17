import React, { type FC } from 'react';
import RightArrowIcon from '@/assets/icons/chevron-right.svg';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
};

const NavigationItem: FC<Props> = ({ label, onClick, isActive }) => {
  return (
    <div
      className={clsx('flex items-center gap-[8px] font-semibold', {
        'text-[#716FB2]': isActive,
        'text-[#757B80]': !isActive,
      })}
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px]">
        <div>
          <Image src={RightArrowIcon} alt="Right Arrow" width={16} height={16} />
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default NavigationItem;
