import React, { type FC, ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  status: 'not-ready' | 'ready' | 'success' | 'warning';
  label: string | ReactNode;
};

export const BadgeStatus: FC<Props> = ({ status, label }) => {
  const isReady = status === 'ready';
  const isNotReady = status === 'not-ready';
  const isSuccess = status === 'success';
  const isWarning = status === 'warning';

  const statusStyles = clsx({
    'bg-[#3DBD7B1F] text-[#3DBD7B] border-[#3DBD7B70]': isReady,
    'bg-[#F1BE661F] text-[#D6972A] border-[#FFEDCF]': isNotReady,
    'bg-[#557EFB1F] text-[#4167AF] border-[#D0DBFE]': isSuccess,
    'bg-[#F166661F] text-[#F16666] border-[#FADDDD]': isWarning,
  });

  return (
    <div
      className={clsx('px-[6px]', 'rounded-[6px]', 'border-[1px]', 'text-[12px]', 'font-medium', 'w-max', statusStyles)}
    >
      {label}
    </div>
  );
};
