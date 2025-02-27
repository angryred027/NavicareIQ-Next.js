'use client';
import { useMemo, useCallback } from 'react';
import { AccessorFn, createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import { TableProps, TableTData } from '../table.type';

const useGenerateTable = <T extends TableTData>({ data }: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const createColumn = useCallback(
    (column: keyof T) => {
      return columnHelper.accessor(column as unknown as AccessorFn<T>, {
        id: column as string,
        cell: (info) => info.getValue(),
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

  return {
    table,
    cols,
    rows,
  };
};

export default useGenerateTable;
