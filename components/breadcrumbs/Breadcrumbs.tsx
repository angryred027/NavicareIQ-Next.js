import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import Image from 'next/image';

type BreadcrumbsProps = {
  items?: {
    label: string;
    isActive?: boolean;
  }[];
};

export const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center px-6 py-4 border-b border-[#E6F0F8]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span 
            className={`text-sm ${
              item.isActive 
                ? 'bg-[#716FB2] text-white font-medium rounded-[8px] px-2 py-1' 
                : 'text-[#757B80] hover:text-[#44436B] font-medium cursor-pointer'
            }`}
          >
            {item.label}
          </span>
          
          {index < items.length - 1 && (
            <span className="text-[#9795B5] mx-3"><Image src={ArrowRightIcon} alt="arrow-right" width={4} height={8} /></span>
          )}
        </div>
      ))}
    </div>
  );
};

