'use client';
import React, { type FC } from 'react';

import GoToFirts from '@/assets/icons/go-to-first.svg';
import GoToLast from '@/assets/icons/go-to-last.svg';
import GoToNext from '@/assets/icons/next.svg';
import GoToPrev from '@/assets/icons/previous.svg';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../common';
import { useTableContext } from './context';
import { Loader } from '../common';

export const Table: FC = () => {
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
    onRowClick,
    isLoading,
    isEmpty,
  } = useTableContext();

  return (
    <table
      className={twMerge(
        clsx('w-full', 'bg-[#FFFFFF]', 'text-[12px]', 'border-separate', 'border-spacing-[0px]'),
        clsx({
          'border-[1px] border-[#E6F0F8] rounded-[8px]': isEmpty,
        })
      )}
      cellSpacing={0}
      cellPadding={0}
    >
      <thead>
        <tr>
          {cols.headers.map((header) => {
            return (
              <th
                className={clsx(
                  'bg-[#F6F9FA]',
                  'border-b-[1px]',
                  'border-r-[1px]',
                  'border-t-[1px]',
                  'border-[#E6F0F8]',
                  'first:border-l-[1px]',
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
      </thead>
      <tbody>
        {!isLoading &&
          rows.map((row) => {
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
                    <td
                      key={cell.id}
                      className={clsx('border-b-[1px]', 'border-r-[1px]', 'border-b-[#E6F0F8]', 'first:border-l-[1px]')}
                    >
                      <div className={clsx('p-[16px]', 'font-normal', 'leading-[20px]', 'text-[14px]')}>
                        {cell.value}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        {isLoading && (
          <tr>
            <td colSpan={colsTotal} className="h-[200px]">
              <div className="flex justify-center items-center h-full w-full">
                <Loader />
              </div>
            </td>
          </tr>
        )}
        {isEmpty && !isLoading && (
          <tr>
            <td colSpan={colsTotal} className="h-[200px]">
              <div className="flex justify-center items-center text-[18px] h-full w-full">No data</div>
            </td>
          </tr>
        )}
      </tbody>
      {!isEmpty && (
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
      )}
    </table>
  );
};
