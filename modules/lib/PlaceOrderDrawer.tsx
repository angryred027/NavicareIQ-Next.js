'use client';
import Drawer from '@/components/drawer/Drawer';
import React, { useState, FC, ReactNode, useEffect, Children } from 'react';

type SelectProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  position?: 'left' | 'right';
  className?: string;
};

export const PlaceOrderDrawer: FC<SelectProps> = ({ isOpen, onClose, title, children, position, className }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        position={position}
        className={className}
        children={children}
      />
    </>
  );
};

export default PlaceOrderDrawer;
