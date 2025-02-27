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
import { TableProps, TableTData, TChangePage } from '../table.type';
import clsx from 'clsx';

const useGenerateTable = <T extends TableTData>({ data }: TableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 7,
  });
  const columnHelper = createColumnHelper<T>();

  const createColumn = useCallback(
    (column: keyof T) => {
      return columnHelper.accessor(column as unknown as AccessorFn<T>, {
        id: column as string,
        cell: ({ row }) => {
          const rowValue = row.original[column];
          if (typeof rowValue === 'object') {
            return (
              <div>
                <div>{rowValue.value}</div>
                <div className={clsx('text-[#91A3B0]', 'text-[12px]', 'leading-[16px]', 'font-normal', 'mt-[2px]')}>
                  {rowValue.subvalue}
                </div>
              </div>
            );
          }
          return <div>{rowValue}</div>;
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
      const keys = Object.keys(firstColumn);
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

  const cols = useMemo(() => {
    return table.getHeaderGroups().map((headerGroup) => {
      const columnData = {
        id: headerGroup.id,
        headers: headerGroup.headers.map((header) => ({
          id: header.id,
          label: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()),
        })),
      };

      return columnData;
    });
  }, [table]);

  const colsTotal = useMemo(() => cols.map((col) => col.headers.length).reduce((acc, cur) => acc + cur, 0), [cols]);

  const rows = useMemo(() => {
    return table.getRowModel().rows.map((row) => {
      const rowData = {
        id: row.id,
        cells: row.getVisibleCells().map((cell) => ({
          id: cell.column.id,
          value: flexRender(cell.column.columnDef.cell, cell.getContext()),
        })),
      };
      return rowData;
    });
  }, [table]);

  const totalRows = useMemo(() => table.getRowCount().toLocaleString(), [table]);
  const rowsPerPage = useMemo(() => table.getRowModel().rows.length.toLocaleString(), [table]);

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
  };
};

export default useGenerateTable;
