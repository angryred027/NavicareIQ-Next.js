import React, { type FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import clsx from 'clsx';

type Props = {
  Icon: string | StaticImport;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  alt?: string;
};

export const IconButton: FC<Props> = ({ Icon, onClick, className, ...rest }) => {
  return (
    <button
      className={clsx(
        'p-2',
        'rounded-md',
        'hover:bg-gray-200',
        'transition',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <Image src={Icon} alt="go-to-last" width={24} height={24} />
    </button>
  );
};
