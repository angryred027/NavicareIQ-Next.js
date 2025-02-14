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
    <div className="flex items-center px-6 py-4 border-b border-system-light-200">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span 
            className={`text-sm px-2 py-1 rounded-[8px] font-medium ${
              item.isActive 
                ? 'bg-midnight-500 text-white font-medium' 
                : 'text-system-dark-500 hover:text-white hover:bg-midnight-100 cursor-pointer'
            }`}
          >
            {item.label}
          </span>
          
          {index < items.length - 1 && (
            <span className="mx-3"><Image src={ArrowRightIcon} alt="arrow-right" width={4} height={8} /></span>
          )}
        </div>
      ))}
    </div>
  );
};

