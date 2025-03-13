'use client';
import { useState, ReactNode } from 'react';
import Icon from '@/components/icon/Icon';
import clsx from 'clsx';
import Avatar from '@/components/avatar/Avatar';

interface AccordionProps {
  title: string | ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: 'default' | 'v2';
}

const Accordion = ({ title, children, defaultOpen = false, variant = 'default' }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVariantV2 = variant === 'v2';

  return (
    <div className={'border-b border-system-light-200 overflow-hidden '}>
      <button className="w-full p-4 flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-sm text-system-dark-900">{title}</span>
          </div>
        </div>
        <Icon
          size={isVariantV2 ? 24 : 14}
          viewBox={isVariantV2 ? '0 0 24 24' : '0 0 14 14'}
          name={isVariantV2 ? 'arrowDown' : 'plus'}
          color="text-status-error-600"
          className={clsx('transition-transform duration-200', {
            'transform rotate-45 text-status-error-600': isOpen && !isVariantV2,
            'rotate-180': isOpen && isVariantV2,
          })}
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
        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
