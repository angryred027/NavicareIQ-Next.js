import Icon from '@/components/icon/Icon';

interface FavouriteCardProps {
  title: string;
  category: string;
  price: number;
}

export default function FavouriteCard({ title, category, price }: FavouriteCardProps) {
  return (
    <div className="flex flex-col w-full items-top justify-between max-w-xs h-full p-4 m-1 rounded-2xl ">
      <div>
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
      </div>
      <div className=" flex justify-between items-center mt-4">
        <div className="text-[0.875rem] leading-[1.25rem] font-inter font-normal text-[#000005]">${price}</div>
        <div className="flex justify-center items-center w-8 h-8">
          <Icon name="roundPlus" />
        </div>
      </div>
    </div>
  );
}
