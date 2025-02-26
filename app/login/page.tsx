import PassageAuth from '@/modules/auth/PassageAuth';
import Image from 'next/image';
import LogoIcon from '@/assets/logo.png';
import LogoTextIcon from '@/assets/logo_text.png';
import LoginTopArrow from '@/assets/login_top_arrow.svg';
import LoginBottomArrow from '@/assets/login_bottom_arrow.svg';
import LoginChat from '@/assets/login_chat.png';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex p-5">
      <div className="w-1/2 relative rounded-[20px] bg-[#E6F0F8]">
        <div className="inline-flex gap-[18px] items-center cursor-pointer pt-[32px] pl-[32px]">
          <Image src={LogoIcon} width={64} height={64} alt='logo' />
          <Image src={LogoTextIcon} width={166} height={27} alt='logo-text' />
        </div>
        <Image 
          src={LoginTopArrow} 
          width={256} 
          height={256} 
          alt='top-arrow' 
          className="absolute top-0 right-0"
        />
        <Image 
          src={LoginBottomArrow}
          width={256} 
          height={256} 
          alt='bottom-arrow' 
          className="absolute bottom-0 left-0"
        />
        <Image 
          src={LoginChat} 
          alt='chat' 
          className="absolute bottom-0 right-0"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <PassageAuth />
      </div>
    </div>
  );
}