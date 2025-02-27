"use client"

import { useState } from 'react';
import Icon from '@/components/icon/Icon';
import Avatar from '@/components/avatar/Avatar';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapse = ({ title, children, defaultOpen = false }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={"border-b border-system-light-200 overflow-hidden " + (isOpen ? "bg-system-light-100" : "bg-white")}>
      <button
        className="w-full p-4 flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          {/* <Avatar name="Angelina Perreira" size="md" /> */}
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-sm text-system-dark-900">{title}</span>
            {/* <span className="text-body-bold text-system-dark-500 bg-system-dark-100 px-2 py-1 rounded-[6px]">FEMALE, 32</span> */}
          </div>
        </div>
        <Icon
          size={14}
          viewBox="0 0 14 14"
          name="plus" 
          color='text-status-error-600'
          className={`transition-transform duration-200 ${isOpen ? 'rotate-45 text-status-error-600' : ''}`}
        />
      </button>
      
      <div 
        className={`
          overflow-hidden 
          transition-all 
          duration-300
          ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}
        `}
      >
        <div className="p-4 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;