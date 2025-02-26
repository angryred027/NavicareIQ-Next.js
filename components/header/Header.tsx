import { Logo } from '../logo/Logo';
import { Search } from '../search/Search';
import { ActionsBtns } from '../actions-btns/ActionsBtns';

export default function Header() {
  return (
    <header className="border-b border-[#E6F0F8] flex px-6 py-[18px] w-full justify-between items-center">
      <div className="flex items-center gap-8">
        <Logo />
        <Search />
      </div>
      <div>
        <ActionsBtns />
      </div>
    </header>
  );
}
