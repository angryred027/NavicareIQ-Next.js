import Button from '../button/Button';
import Image from 'next/image';
import AddIcon from '@/assets/icons/plus.svg';
import CartIcon from '@/assets/icons/cart.svg';
import FlagIcon from '@/assets/icons/flag.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import { setIsDrawerOpen } from '@/store/features/pageSlice';
import { UnknownAction } from '@reduxjs/toolkit';
type ActionBtnsProps = {
  onClick1?: () => void | UnknownAction;
  onClick2?: () => void | UnknownAction;
  onClick3?: () => void | UnknownAction;
};
export const ActionsBtns = ({ onClick1, onClick2, onClick3 }: ActionBtnsProps) => {
  // const isDrawerOpen = useSelector((state: RootState) => state.page.isDrawerOpen);

  const dispatch = useDispatch<AppDispatch>();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

      <Button
        onClick={() => {
          dispatch(setIsDrawerOpen(true));
        }}
      >
        <Image src={CartIcon} alt="cart" width={24} height={24} />
      </Button>
    </div>
  );
};
