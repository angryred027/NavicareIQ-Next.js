import React from 'react';

interface HistoryButtonProps {
  onClick?: () => void;
  label: string;
  date: string;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({ onClick, label, date }) => {
  return (
    <button onClick={onClick} className="mt-2 p-2 w-full bg-white border border-[#E6F0F8] rounded-lg">
      <div className="inline-block justify-start">
        <span className="text-[#000005] text-[0.875rem] font-bold leading-[1.25rem] font-inter">{label}</span>
        <br></br>
        <span className="text-[#757B80] text-[0.75rem] font-medium leading-[1.25rem] font-inter">{date}</span>
      </div>
    </button>
  );
};

export default HistoryButton;
