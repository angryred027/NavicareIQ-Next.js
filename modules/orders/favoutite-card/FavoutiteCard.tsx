import Icon from '@/components/icon/Icon';

interface FavoutiteCardProps {
  title: string;
  category: string;
  price: number;
}

export default function FavoutiteCard({ title, category, price }: FavoutiteCardProps) {
  return (
    <div className="w-[9.1875rem] justify-between max-w-xs p-4 m-1 bg-white rounded-2xl shadow-md border">
      <div className="flex justify-between items-start">
        <div className="break-words text-[0.875rem] leading-[1.25rem] font-inter font-normal text-[#000005] ">
          {title}
        </div>
        <div className="w-6 h-6">
          <Icon name="favourite" />
        </div>
      </div>
      <div className="text-[0.75rem] leading-[1rem] font-inter font-normal text-[#91A3B0] flex-none order-1 flex-grow-0">
        {category}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-[0.875rem] leading-[1.25rem] font-inter font-normal text-[#000005]">${price}</div>
        <div className="w-8 h-8">
          <Icon name="roundPlus" />
        </div>
      </div>
    </div>
  );
}
