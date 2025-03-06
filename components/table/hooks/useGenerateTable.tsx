'use client';
import { useMemo, useCallback, useState } from 'react';
import {
  AccessorFn,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type PaginationState,
} from '@tanstack/react-table';
import { TableProps, TableTData, TChangePage, TRows } from '../table.type';
import clsx from 'clsx';
import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';

const useGenerateTable = <T extends TableTData>({ data }: TableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columnHelper = createColumnHelper<T>();

  const createColumn = useCallback(
    (column: keyof T) => {
      return columnHelper.accessor(column as unknown as AccessorFn<T>, {
        id: column as string,
        cell: ({ row }) => {
          const rowValue = row.original[column];
          if (typeof rowValue === 'object' && rowValue !== null) {
            return (
              <div className="flex items-center space-x-2 py-4 pr-2 bg-transparent rounded-lg">
                <div className="flex flex-col mr-2">
                  <span className={clsx('font-inter font-normal text-[0.875rem] leading-[1.25rem] text-[#000005]')}>
                    {rowValue.value}
                  </span>
                  <span className="font-inter font-normal text-[0.75rem] leading-[1rem] text-[#91A3B0]">
                    {rowValue?.subValue}
                  </span>
                </div>
                {rowValue.recommended && (
                  <Badge
                    label="Recommmended"
                    className="flex items-center justify-center p-2 gap-[0.625rem]
                    font font-inter font-semibold bg-[rgba(85,126,251,0.12)] border border-[#D0DBFE] rounded-md text-[#4167AF]"
                  />
                )}
                <Icon name={rowValue?.icon} />
              </div>
            );
          }
          return (
            <>
              <div className="flex flex-row flex- justify-end">
                <div className="py-2 px-4 mx-4">${rowValue}</div>
                <Button onClick={() => alert('Welcome!')}>
                  <div className="flex items-center gap-2 px-2">+ Add to Order</div>
                </Button>
              </div>
            </>
          );
        },
        footer: (info) => info.column.id,
      });
    },
    [columnHelper]
  );

  const columns = useMemo(() => {
    if (data && data.length === 0) return [];
    else {
      const firstColumn = data[0];
      const keys = Object.keys(firstColumn) as Array<keyof T>;
      return keys.map((key) => createColumn(key));
    }
  }, [createColumn, data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const cols = table.getHeaderGroups().map((headerGroup) => {
    const columnData = {
      id: headerGroup.id,
      headers: headerGroup.headers.map((header) => ({
        id: header.id,
        label: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()),
      })),
    };

    return columnData;
  });
  const colsTotal = useMemo(() => cols.map((col) => col.headers.length).reduce((acc, cur) => acc + cur, 0), [cols]);

  const rows = table.getRowModel().rows.map((row) => {
    const rowData: TRows = {
      id: row.id,
      cells: row.getVisibleCells().map((cell) => ({
        id: cell.column.id,
        value: flexRender(cell.column.columnDef.cell, cell.getContext()),
      })),
    };
    return rowData;
  });
  const totalRows = table.getRowCount().toLocaleString();
  const rowsPerPage = table.getRowModel().rows.length.toLocaleString();

  const currentPage = (table.getState().pagination.pageIndex + 1).toLocaleString();
  const pageSize = table.getState().pagination.pageSize;
  const totalPages = table.getPageCount().toLocaleString();
  const rowsOnPage = useMemo(() => {
    const calculatedRows = pageSize * parseInt(currentPage, pageSize);
    return Math.min(calculatedRows, parseInt(totalRows, pageSize));
  }, [pageSize, currentPage, totalRows]);

  const handlePageChange = (newPage: TChangePage) => {
    switch (newPage) {
      case 'next':
        return table.nextPage();
      case 'prev':
        return table.previousPage();
      case 'first':
        return table.firstPage();
      case 'last':
        return table.lastPage();
      default:
        const page = newPage >= 0 ? newPage - 1 : 0;
        table.setPageIndex(page);
    }
  };

  const changeRowsPerPage = (newPageSize: number) => {
    table.setPageSize(newPageSize);
  };

  return {
    table,
    cols,
    rows,
    totalRows,
    handlePageChange,
    changeRowsPerPage,
    rowsPerPage,
    colsTotal,
    currentPage,
    pageSize,
    rowsOnPage,
    totalPages,
  };
};

export default useGenerateTable;
