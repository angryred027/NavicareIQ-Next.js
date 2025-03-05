'use client';
import React from 'react';

import GoToFirts from '@/assets/icons/go-to-first.svg';
import GoToLast from '@/assets/icons/go-to-last.svg';
import GoToNext from '@/assets/icons/next.svg';
import GoToPrev from '@/assets/icons/previous.svg';

import useGenerateTable from './hooks/useGenerateTable';
import { TableTData, TRows } from './table.type';
import clsx from 'clsx';
import { IconButton } from '../common';

type Props<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
};

export const Table = <T extends TableTData>({ data, onRowClick }: Props<T>) => {
  const {
    cols,
    rows,
    totalRows,
    colsTotal,
    currentPage,
    pageSize,
    changeRowsPerPage,
    handlePageChange,
    rowsOnPage,
    totalPages,
  } = useGenerateTable({ data });

  return (
    <table
      className={clsx('w-full', 'bg-[#FFFFFF]', 'text-[12px]', 'border-separate', 'border-spacing-[0px]')}
      cellSpacing={0}
      cellPadding={0}
    >
      <thead>
        {cols.map((col) => {
          return (
            <tr key={col.id}>
              {col.headers.map((header) => {
                return (
                  <th
                    className={clsx(
                      'bg-[#F6F9FA]',
                      'border-b-[1px]',
                      // 'border-r-[1px]',
                      'border-t-[1px]',
                      'border-[#E6F0F8]',
                      // 'first:border-l-[1px]',
                      'first:rounded-tl-[8px]',
                      'last:rounded-tr-[8px]'
                    )}
                    key={header.id}
                  >
                    <div
                      className={clsx(
                        'font-semibold',
                        'text-[#91A3B0]',
                        'leading-[16px]',
                        'py-[12px]',
                        'px-[16px]',
                        'text-left',
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
            <tr
              key={row.id}
              className={clsx(
                'hover:bg-[#F6F9FA]',
                'hover:shadow-[0px_4px_4px_#0000000A]',
                'transition',
                'cursor-pointer'
              )}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {row.cells.map((cell) => {
                return (
                  <td key={cell.id} className={clsx('border-b-[1px]', 'border-b-[#E6F0F8]')}>
                    <div className={clsx('p-[16px]', 'font-normal', 'leading-[20px]', 'text-[14px]')}>{cell.value}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={colsTotal}
            className={clsx(
              'border-b-[1px]',
              'border-r-[1px]',
              'border-[#E6F0F8]',
              'border-l-[1px]',
              'rounded-b-[8px]',
              'items-center'
            )}
          >
            <div
              className={clsx(
                'font-semibold',
                'text-[12px]',
                'w-full',
                'flex',
                'justify-end',
                'gap-[12px]',
                'px-[22px]',
                'py-[6px]',
                'items-center'
              )}
            >
              <div className={clsx('flex', 'gap-[12px]')}>
                Rows per page:
                <div className="flex gap-[12px] ml-[14px]">{`${rowsOnPage} - ${totalRows} of ${totalRows}`}</div>
              </div>
              <div>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    changeRowsPerPage(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className={clsx('flex', 'gap-[14px]', 'items-center', 'ml-[14px]')}>
                <IconButton
                  Icon={GoToFirts}
                  onClick={() => handlePageChange('first')}
                  disabled={Number(currentPage) === 1}
                  alt="go-to-first"
                />

                <IconButton
                  Icon={GoToPrev}
                  onClick={() => handlePageChange('prev')}
                  disabled={Number(currentPage) === 1}
                  alt="go-to-prev"
                />
                <IconButton
                  Icon={GoToNext}
                  onClick={() => handlePageChange('next')}
                  disabled={Number(currentPage) === Number(totalPages)}
                  alt="go-to-next"
                />
                <IconButton
                  Icon={GoToLast}
                  onClick={() => handlePageChange('last')}
                  alt="go-to-last"
                  disabled={Number(currentPage) === Number(totalPages)}
                />
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
