import { SortDirection, SortingState } from '@tanstack/react-table';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
export type TableTData = Record<
  string,
  | string
  | number
  | boolean
  | {
      value: string | ReactNode;
      subValue: string | ReactNode;
      recommended: boolean | ReactNode;
      icon: string | ReactNode;
      filterType?: FilterType 
    }
>;

export type ColFilter = {
  id: string;
  filterType: FilterType;
};

export type FilterType = 'range' | 'text' | 'date';

export type TTableProps<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
  loading?: boolean;
  colsFilters?: ColFilter[];
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
    handleFilter: (val: string | number) => void;
    sortFn: ((event: unknown) => void) | undefined;
    filterType?: FilterType;
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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isEmpty: boolean;
  handleResetFilters: () => void;
} & Omit<TTableProps<TableTData>, 'data'>;

export type TableProps<T extends TableTData> = {
  data: T[];
  onRowClick?: (row: TRows) => void;
};
