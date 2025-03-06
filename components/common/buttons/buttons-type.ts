import type { ReactNode } from 'react';

export type TButtons = {
  label: string | ReactNode;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
};
