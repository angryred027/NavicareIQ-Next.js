'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { setToggle } from '@/store/features/pageSlice';
interface TabSwitcherProps {
  tabs: string[];
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs }) => {
  const toggled = useSelector((state: RootState) => state.page.toggled);

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    if (index) dispatch(setToggle(false));
    else dispatch(setToggle(true));
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex bg-[#E6E9EA] h-8 rounded-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`flex-1 px-4 py-2 font-inter rounded-[0.5rem] border border-[#E6E9EA] text-[0.75rem] leading-[1rem] 
                ${activeTab === index ? 'font-semibold text-[#757B80] bg-[#E6E9EA]' : 'bg-white shadow-md hover:text-blue-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
