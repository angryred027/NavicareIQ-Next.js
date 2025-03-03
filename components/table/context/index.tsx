'use client';
import React, { createContext, FC, useContext, type ReactNode } from 'react';
import { TableTData, TTableContext, TTableProps } from '../table.type';
import useGenerateTable from '../hooks/useGenerateTable';

export interface TableProviderProps<T extends TableTData> extends TTableProps<T> {
  children: ReactNode;
  data: T[];
}

export const TableContext = createContext<TTableContext | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within an TableProvider');
  }
  return context;
};

export const TableProvider = <T extends TableTData>({ children, data }: TableProviderProps<T>) => {
  const value = useGenerateTable({ data });

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
