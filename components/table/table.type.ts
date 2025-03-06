import type { ReactNode } from 'react';
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
    }
>;

export type TableProps<T extends TableTData> = {
  data: T[];
};

export type TChangePage = 'next' | 'prev' | 'first' | 'last' | number;

export type TRows = {
  id: string;
  cells: {
    id: string;
    value: ReactNode;
  }[];
};
