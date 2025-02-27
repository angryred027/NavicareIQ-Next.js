import type { ReactNode } from 'react';
export type TableTData = Record<
  string,
  string | number | boolean | { value: string | ReactNode; subvalue: string | ReactNode }
>;

export type TableProps<T extends TableTData> = {
  data: T[];
};

export type TChangePage = 'next' | 'prev' | 'first' | 'last' | number;
