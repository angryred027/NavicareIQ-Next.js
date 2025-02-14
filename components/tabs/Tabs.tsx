'use client';

import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'primary';
  className?: string;
};

export default function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = 'primary',
  className = '',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const variants = {
    primary: {
      container: 'bg-system-dark-100 p-[1px] rounded-[8px]',
      tabsWrapper: 'flex w-full gap-2',
      tab: `
        px-3 py-2 rounded-[7px] text-body-bold transition-all duration-150
        hover:text-system-dark-900 text-caption-bold flex-1
      `,
      activeTab: `
        text-system-dark-900 bg-white text-poppy-500 shadow-sm
      `,
      inactiveTab: `
        text-system-dark-500 hover:bg-system-light-100
      `,
    },
  };

  const styles = variants[variant];

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              ${styles.tab}
              ${activeTab === tab.id ? styles.activeTab : styles.inactiveTab}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}