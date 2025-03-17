import React, { FC } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type GridProps = {
  children?: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
};

type GridItemProps = {
  children?: React.ReactNode;
  col?: number;
  colWidth?: string;
  className?: string;
};

export const Grid: FC<GridProps> = ({ children, columns = 12, gap = 16, className }) => {
  return (
    <div
      className={twMerge(clsx(`grid gap-[${gap}]`), className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};

export const GridItem: FC<GridItemProps> = ({ children, col = 1, className, colWidth }) => {
  return (
    <div
      className={twMerge(className)}
      style={{
        gridColumn: `span ${col}`,
        width: colWidth,
      }}
    >
      {children}
    </div>
  );
};
