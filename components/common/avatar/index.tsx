import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
  label: string;
};

export const Avatar: FC<Props> = ({ src, alt, className, size = 44, label }) => {
  const sizeToString = size.toString() + 'px';
  const createAvatar = () => {
    const cutLabel = label
      .split(' ')
      .map((word) => word[0])
      .join('');

    if (src) {
      return (
        <Image src={src} alt={alt ?? label} className={twMerge('rounded-full', className)} width={size} height={size} />
      );
    }
    return (
      <div
        className={twMerge(
          clsx(
            'rounded-full bg-midnight-500',
            `size-[${sizeToString}]`,
            'flex justify-center items-center',
            'text-[#FFFFFF] font-bold text-[16px]'
          ),
          className
        )}
      >
        {cutLabel}
      </div>
    );
  };

  return <div className={`size-[${sizeToString}]`}>{createAvatar()}</div>;
};
