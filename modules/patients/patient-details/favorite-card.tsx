import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import BookmarkIcon from '@/assets/icons/bookmark.svg';
import PlusCircleIcon from '@/assets/icons/plus-circle.svg';
type Props = {
  title: string;
  subtitle?: string;
  bookmarked?: boolean;
  price: string;
  onClick?: () => void;
  hideActions?: boolean;
};

const FavoriteCard: FC<Props> = ({ title, subtitle, bookmarked, price, onClick, hideActions = false }) => {
  return (
    <div
      className={clsx(
        'min-w-[147px] border-[1px]',
        'h-[132px]',
        'border-[#E6F0F8] bg-[#ffffff]',
        'rounded-[12px]',
        'p-[12px]',
        'flex',
        'flex-col',
        'justify-between'
      )}
    >
      <div>
        <div className="flex justify-between">
          <div className="text-[14px] ">{title}</div>
          {bookmarked && (
            <div className="size-[20px]">
              <Image src={BookmarkIcon} width={20} height={20} alt="bookmark" />
            </div>
          )}
        </div>
        <div className={clsx('text-[12px]', 'text-[#91A3B0]', 'mt-[2px]')}>{subtitle}</div>
      </div>
      <div className="flex justify-between">
        <div className="">{price}</div>
        {!hideActions && (
          <div className="size-[24px]">
            <button className="size-[24px] border-none" onClick={onClick}>
              <Image src={PlusCircleIcon} width={24} height={24} alt="plus-circle" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteCard;
