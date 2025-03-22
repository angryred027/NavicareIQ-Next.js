'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Breadcrumb {
  id: number;
  label: string;
  isActive?: boolean;
  href?: string;
}

interface BreadcrumbsContextType {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

export const BreadcrumbsProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  return <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</BreadcrumbsContext.Provider>;
};

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider');
  }
  return context;
};
