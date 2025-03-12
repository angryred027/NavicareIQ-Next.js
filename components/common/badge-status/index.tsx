import React, { type FC } from 'react';
import clsx from 'clsx';

type Props = {
  status: 'not-ready' | 'ready';
  label: string;
};

export const BadgeStatus: FC<Props> = ({ status, label }) => {
  const isReady = status === 'ready';

  const statusStyles = clsx({
    'bg-[#3DBD7B1F] text-[#3DBD7B] border-[#3DBD7B70]': isReady,
    'bg-[#F1BE661F] text-[#D6972A] border-[#FFEDCF]': !isReady,
  });

  return (
    <div className={clsx('px-[6px]', 'rounded-[6px]', 'border-[1px]', 'text-[12px]', 'font-medium', statusStyles)}>
      {label}
    </div>
  );
};
