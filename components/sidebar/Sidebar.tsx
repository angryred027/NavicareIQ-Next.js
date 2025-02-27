'use client';

import MenuIcon from '@/assets/icons/menu.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '../icon/Icon';
import AvatarIcon from '@/assets/avatar.png';

type MenuItem = {
  icon: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    icon: 'flask',
    path: '/laboratory',
  },
  {
    icon: 'location',
    path: '/locations',
  },
  {
    icon: 'users',
    path: '/users',
  },
  {
    icon: 'paper',
    path: '/paper',
  },
];

const helpMenuItem: MenuItem = {
  icon: 'info-romb',
  path: '/'
}

export const Sidebar = () => {
  const pathname = usePathname();

  const RenderMenu = ({item}: {item: MenuItem}) => (
    <Link
      href={item.path}
      className={`px-6 py-3 ${pathname === item.path ? 'border-r-2 border-[#4167AF]' : ''}`}
    >
      <div className="w-6 h-6 rounded-[12px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#EDF2F6]">
        <Icon
          name={item.icon}
          className={`transition-colors ${pathname === item.path ? 'text-[#4167AF]' : 'text-[#757B80]'}`}
        />
      </div>
    </Link>
  );

  return (
    <aside
      className="h-screen bg-[#F6F9FA] border-r border-[#EDF2F6] flex flex-col justify-between items-center pb-3"
      suppressHydrationWarning
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4 px-6 py-7 mb-5">
          <Image src={MenuIcon} alt="menu" width={24} height={24} className="cursor-pointer hover:opacity-80" />
        </div>

        <div className="flex flex-col gap-5">
          {menuItems.map((item, index) => (
            <RenderMenu key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <RenderMenu item={helpMenuItem} />

        <div>
          <Image src={AvatarIcon} alt="info" width={48} height={48} />
        </div>
      </div>
    </aside>
  );
};
