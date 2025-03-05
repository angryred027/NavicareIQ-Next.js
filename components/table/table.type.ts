import { SortDirection, SortingState } from '@tanstack/react-table';
import type { ReactNode } from 'react';
export type TableTData = Record<
  string,
  string | number | boolean | { value: string | ReactNode; subvalue: string | ReactNode }
>;

export type TTableProps<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
};

export type TChangePage = 'next' | 'prev' | 'first' | 'last' | number;

export type TRows = {
  id: string;
  cells: {
    id: string;
    value: ReactNode;
  }[];
};

export type SorttedType = SortDirection | false;

export type TCol = {
  id: string;
  headers: {
    id: string;
    label: ReactNode;
    sorted: SorttedType;
    handleSort: () => void;
    sortFn: ((event: unknown) => void) | undefined;
  }[];
};

export type TTableContext = {
  cols: TCol;
  rows: TRows[];
  totalRows: string;
  colsTotal: number;
  currentPage: string;
  pageSize: number;
  changeRowsPerPage: (value: number) => void;
  handlePageChange: (value: TChangePage) => void;
  rowsOnPage: number;
  totalPages: string;
  sorting: SortingState;
} & Omit<TTableProps<TableTData>, 'data'>;

export type TableProps<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
};
