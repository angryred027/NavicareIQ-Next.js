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
import Badge from '@/components/badge/Badge';
import Icon from '@/components/icon/Icon';
import { Align } from '@/types/help';
import { IndeterminateCheckbox } from '@/components/common';

const useGenerateTable = <T extends TableTData>({
  data,
  loading: loadingProp,
  colsFilters,
  colsAlign,
  canSelect,
  ...rest
}: TTableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columnHelper = createColumnHelper<T>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loadingProp ?? false);
  }, [loadingProp]);

  const createSelectColumn = useCallback(() => {
    return columnHelper.accessor('select' as unknown as AccessorFn<T>, {
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="size-[24px]"
        >
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
      footer: (info) => info.column.id,
    });
  }, [columnHelper]);

  const createColumn = useCallback(
    (column: keyof T, filterVariant?: FilterType, align?: Align) => {
      return columnHelper.accessor(column as unknown as AccessorFn<T>, {
        id: column as string,
        header: () => column,
        cell: ({ row }) => {
          const cellValue = row.original[column];
          const classAlign = align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center';
          if (typeof cellValue === 'object' && cellValue !== null) {
            return (
              <div className={clsx('flex items-center space-x-2 py-4 bg-transparent rounded-lg', classAlign)}>
                <div className="flex flex-col mr-2">
                  <span className={clsx('font-inter font-normal text-[0.875rem] leading-[1.25rem] text-[#000005]')}>
                    {cellValue.value}
                  </span>
                  <span className="font-inter font-normal text-[0.75rem] leading-[1rem] text-[#91A3B0]">
                    {cellValue?.subValue}
                  </span>
                </div>
                {cellValue.recommended && (
                  <Badge
                    label="Recommmended"
                    className="flex items-center justify-center p-2 gap-[0.625rem]
                    font font-inter font-semibold bg-[rgba(85,126,251,0.12)] border border-[#D0DBFE] rounded-md text-[#4167AF] self-start"
                  />
                )}
                {cellValue?.icon && (
                  <div className="self-start">
                    <Icon name={cellValue?.icon} />
                  </div>
                )}
              </div>
            );
          }

          return (
            <div className={clsx('flex items-center space-x-2 py-4 bg-transparent rounded-lg', classAlign)}>
              {cellValue}
            </div>
          );
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
          align,
        },
      });
    },
    [columnHelper]
  );

  const columns = useMemo(() => {
    const colsToRender = [];
    if (data && data.length === 0) return [];
    else {
      const firstColumn = data[0];

      const keys = Object.keys(firstColumn) as Array<keyof T>;

      canSelect && colsToRender.push(createSelectColumn());
      keys.map((key) => {
        const filterType = colsFilters?.find((filter) => filter.id === key)?.filterType;
        const align = colsAlign?.[key] ?? 'left';
        colsToRender.push(createColumn(key, filterType, align));
      });
      return colsToRender;
    }
  }, [canSelect, colsAlign, colsFilters, createColumn, createSelectColumn, data]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
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
      rowSelection,
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
          label:
            header.id !== 'btns'
              ? header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())
              : '',
          sorted: isSorting ? sorted : false,
          handleSort: () => onSort(header.id),
          sortFn: header.column.getToggleSortingHandler(),
          filterType: header.column.columnDef.meta?.filterType,
          handleFilter: (value: string | number) => onFilter(header.id, value),
          align: header.column.columnDef.meta?.align ?? 'left',
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
        isActionRow: cell.column.id.includes('btns'),
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
