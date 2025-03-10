'use client';
import React, { createContext, useContext, type ReactNode } from 'react';
import { TableTData, TTableContext, TTableProps } from '../table.type';
import useGenerateTable from '../hooks/useGenerateTable';
import { Align } from '@/types/help';

export interface TableProviderProps<T extends TableTData> extends TTableProps<T> {
  children: ReactNode;
  data: T[];
  colsAlign?: Record<keyof T, Align>;
}

export const TableContext = createContext<TTableContext | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within an TableProvider');
  }
  return context;
};

export const TableProvider = <T extends TableTData>({ children, ...rest }: TableProviderProps<T>) => {
  const value = useGenerateTable({ ...rest });

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
