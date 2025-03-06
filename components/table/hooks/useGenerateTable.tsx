'use client';
import { useMemo, useCallback, useState, useEffect } from 'react';
import {
  AccessorFn,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  type PaginationState,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { TTableProps, TableTData, TChangePage, TCol, TRows, SorttedType, FilterType } from '../table.type';
import clsx from 'clsx';

const useGenerateTable = <T extends TableTData>({
  data,
  loading: loadingProp,
  colsFilters,
  ...rest
}: TTableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columnHelper = createColumnHelper<T>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loadingProp ?? false);
  }, [loadingProp]);

  const createColumn = useCallback(
    (column: keyof T, filterVariant?: FilterType) => {
      return columnHelper.accessor(column as unknown as AccessorFn<T>, {
        id: column as string,
        header: () => column,
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
        sortingFn: (rowA, rowB) => {
          const valueA =
            typeof rowA.original[column] === 'object'
              ? (rowA.original[column]?.value ?? '')
              : (rowA.original[column] ?? '');

          const valueB =
            typeof rowB.original[column] === 'object'
              ? (rowB.original[column]?.value ?? '')
              : (rowB.original[column] ?? '');

          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        },
        meta: {
          filterType: filterVariant,
        },
      });
    },
    [columnHelper]
  );

  const columns = useMemo(() => {
    if (data && data.length === 0) return [];
    else {
      const firstColumn = data[0];
      const keys = Object.keys(firstColumn);
      return keys.map((key) => {
        const filterType = colsFilters?.find((filter) => filter.id === key)?.filterType;
        return createColumn(key, filterType);
      });
    }
  }, [colsFilters, createColumn, data]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    state: {
      pagination,
      sorting,
      columnFilters,
    },
  });

  const cols: TCol[] = table.getHeaderGroups().map((headerGroup) => {
    const columnData = {
      id: headerGroup.id,
      headers: headerGroup.headers.map((header) => {
        const isSorting = sorting.some((sort) => sort.id === header.id);
        const sorted: SorttedType = header.column.getCanSort()
          ? header.column.getNextSortingOrder() === 'asc'
            ? 'asc'
            : header.column.getNextSortingOrder() === 'desc'
              ? 'desc'
              : false
          : false;
        return {
          id: header.id,
          label: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()),
          sorted: isSorting ? sorted : false,
          handleSort: () => onSort(header.id),
          sortFn: header.column.getToggleSortingHandler(),
          filterType: header.column.columnDef.meta?.filterType,
          handleFilter: (value: string | number) => onFilter(header.id, value),
        };
      }),
    };

    return columnData;
  });

  const colsTotal = useMemo(() => cols.map((col) => col.headers.length).reduce((acc, cur) => acc + cur, 0), [cols]);
  const colsToRender = cols[0] ?? [];

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
  const isEmpty = useMemo(() => rows.length === 0, [rows.length]);

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

  const onSort = (column: string) => {
    return table.getHeaderGroups().forEach((header) => {
      if (header.headers.some((h) => h.id === column)) {
        const col = header.headers.find((h) => h.id === column);
        col?.column.toggleSorting();
      }
    });
  };

  const onFilter = (column: string, value: string | number) => {
    return table.getHeaderGroups().forEach((header) => {
      if (header.headers.some((h) => h.id === column)) {
        const col = header.headers.find((h) => h.id === column);
        if (col) {
          col.column.setFilterValue(value);
        }
      }
    });
  };

  const handleResetFilters = () => {
    table.getAllColumns().forEach((col) => {
      col.setFilterValue('');
    });
  };

  return {
    table,
    cols: colsToRender,
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
    onSort,
    sorting,
    isLoading,
    setIsLoading,
    isEmpty,
    handleResetFilters,
    ...rest,
  };
};

export default useGenerateTable;
