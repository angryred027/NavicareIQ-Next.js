'use client';
import React, { useRef, useEffect } from 'react';
import type { HTMLProps, FC } from 'react';
import clsx from 'clsx';

type Props = {
  indeterminate?: boolean;
} & HTMLProps<HTMLInputElement>;

export const IndeterminateCheckbox: FC<Props> = ({ indeterminate, ...rest }) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <div
      className={clsx(
        'rounded-[8px]',
        'w-[24px]',
        'h-[24px]',
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'border-[#BFCFDA]',
        'border-[1px]',
        'transition-all',
        {
          'bg-[#3DBD7B]': rest.checked || indeterminate,
          'bg-[#F6F9FA]': !rest.checked,
        }
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        aria-describedby="offers-description"
        id="offers"
        name="offers"
        className={'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'}
        {...rest}
      />
      <svg
        fill="none"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        className="pointer-events-none self-center justify-self-center stroke-white"
      >
        <path
          d="M12.3332 1L4.99984 8.33333L1.6665 5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx('opacity-0', {
            'opacity-100': rest.checked,
          })}
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('absolute top-0 left-0 w-full h-full p-[4px] opacity-0 cursor-pointer pointer-events-none', {
          'opacity-100': indeterminate,
        })}
      >
        <path d="M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};
