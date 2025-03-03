import Button from '../button/Button';
import Image from 'next/image';
import AddIcon from '@/assets/icons/plus.svg';
import CartIcon from '@/assets/icons/cart.svg';
import FlagIcon from '@/assets/icons/flag.svg';

export const ActionsBtns = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2 relative">
        <div className="absolute top-[-4px] right-[-4px] bg-[#F16666] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
          3
        </div>
        <Image src={FlagIcon} alt="flag" width={24} height={24} />
      </div>

      <div className="w-[1px] h-6 bg-[#E6F0F8]" />

      <Button>
        <div className="flex items-center gap-2 px-2">
          <Image src={AddIcon} alt="add" width={12} height={12} />
          New Patient
        </div>
      </Button>

      <div className="w-[1px] h-6 bg-[#E6F0F8]" />

      <Button>
        <Image src={CartIcon} alt="cart" width={24} height={24} />
      </Button>
    </div>
  );
};
