import { Align } from '@/types/help';
import { SortDirection, SortingState } from '@tanstack/react-table';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { AvailableIcons } from '../icon/Icon';

export type TableTData = Record<
  string,
  | string
  | number
  | boolean
  | {
      value: string | ReactNode;
      subValue: string | ReactNode;
      recommended: boolean | ReactNode;
      icon: string | ReactNode | AvailableIcons;
      filterType?: FilterType;
      align?: 'left' | 'right' | 'center';
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
  colsAlign?: Record<keyof T, Align>;
  canSelect?: boolean;
  colsSort?: string[];
};

export type TChangePage = 'next' | 'prev' | 'first' | 'last' | number;

export type TRows = {
  id: string;
  cells: {
    id: string;
    value: ReactNode;
    isActionRow: boolean;
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
    align?: Align;
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
