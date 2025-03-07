'use client';

import { useState } from 'react';
import Icon from '@/components/icon/Icon';
import Avatar from '@/components/avatar/Avatar';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapse = ({ title, children, defaultOpen = false }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={'border-b border-system-light-200 overflow-hidden '}>
      <button className="w-full p-4 flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center h-full gap-4">
          <Avatar name="Angelina Perreira" size="md" className="hidden lg:flex" />
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-sm text-system-dark-900">{title}</span>
            <span className="items-center justify-center gap-[0.625rem] px-[0.5rem] pt-[0.125rem] pb-[0.125rem] bg-[#E6E9EA] rounded-[0.375rem] text-[0.75rem] leading-[1rem] font-medium text-[#757B80] flex-none">
              FEMALE, 32
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {!isOpen ? <Icon name="threeDot" /> : <Icon name="arrowDown" className="rotate-180" />}
        </div>
      </button>

      <div
        className={`
          overflow-hidden 
          transition-all 
          duration-300
          ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}
        `}
      >
        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
