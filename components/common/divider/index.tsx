import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export const Divider: FC<Props> = ({ className }) => {
  return <hr className={twMerge(clsx('border-[1px] border-[#EDF2F6]'), className)} />;
};
