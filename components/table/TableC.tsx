'use client';
import React from 'react';
import useGenerateTable from './hooks/useGenerateTable';
import { TableTData } from './table.type';
import clsx from 'clsx';

type Props<T extends TableTData> = {
  data: T[];
};

export const Table = <T extends TableTData>({ data }: Props<T>) => {
  const { cols, rows } = useGenerateTable({ data });

  return (
    <table
      className={clsx('w-full', 'rounded-[12px]', 'border-[1px]', 'border-[#E6F0F8]', 'bg-[#FFFFFF]', 'text-[12px]')}
    >
      <thead className={clsx('bg-[#F6F9FA]')}>
        {cols.map((col) => {
          return (
            <tr key={col.id}>
              {col.headers.map((header) => {
                return (
                  <th key={header.id}>
                    <div
                      className={clsx(
                        'font-semibold',
                        'text-[#91A3B0]',
                        'leading-[16px]',
                        'py-[12px]',
                        'px-[16px]',
                        'capitalize'
                      )}
                    >
                      {header.label}
                    </div>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id} className={clsx('border-[1px]', 'border-[#E6F0F8]')}>
              {row.cells.map((cell) => {
                return (
                  <td key={cell.id}>
                    <div className={clsx('p-[16px]', 'font-normal', 'leading-[20px]', 'text-[14px]')}>{cell.value}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
