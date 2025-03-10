import { RowData } from '@tanstack/react-table';

type FilterType = 'range' | 'text' | 'date';
export interface IFaqItem {
  title: string;
  description: string;
}

export type Align = 'left' | 'right' | 'center';

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filterType?: FilterType;
    align?: Align;
  }
}
