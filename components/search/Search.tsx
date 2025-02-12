import SearchIcon from '@/assets/icons/search.svg';
import Image from 'next/image';

export const Search = () => {
  return (
    <div className="relative flex items-center bg-[#F1F4F5] rounded-[20px] px-4 py-2 text-sm border border-[#E6F0F8]">
      <Image src={SearchIcon} alt="search" width={16} height={16} />
      <input 
        placeholder='Search...'
        className="bg-transparent px-3 text-sm focus:outline-none focus:border-transparent"
      />
    </div>
  );
};
