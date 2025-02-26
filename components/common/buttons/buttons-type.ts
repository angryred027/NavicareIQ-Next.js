import type { ReactNode } from 'react';

export type TButtons = {
  label: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};
