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
    <div className="border border-[#EDF2F6] rounded-[12px] overflow-hidden bg-system-light-100">
      <button
        className="w-full p-4 flex justify-between bg-system-light-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <Avatar name="Angelina Perreira" size="md" />
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-body-bold text-system-dark-900">{title}</span>
            <span className="text-body-bold text-system-dark-500 bg-system-dark-100 px-2 py-1 rounded-[6px]">FEMALE, 32</span>
          </div>
        </div>
        <Icon
          size={12}
          viewBox="0 0 12 7"
          name="chevron-down" 
          className={`mt-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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