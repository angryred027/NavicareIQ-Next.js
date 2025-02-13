'use client';

import Image from 'next/image';
import LogoIcon from '../../assets/logo.png';
import LogoTextIcon from '../../assets/logo_text.png';
import { useRouter } from 'next/navigation';


export const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex gap-3 items-center cursor-pointer" onClick={() => router.push('/')}>
      <Image src={LogoIcon} width={44} height={44} alt='logo' />
      <Image src={LogoTextIcon} width={114} height={18} alt='logo-text' />
    </div>
  );
};