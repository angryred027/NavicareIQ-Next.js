import React, { type FC } from 'react';
import clsx from 'clsx';

type Props = {
  labReport: string;
  date: string;
};

const LabReportCard: FC<Props> = ({ labReport, date }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-[4px]',
        'bg-[white] rounded-[8px] px-[16px]',
        'py-[12px]',
        'border-[1px] border-[#E6F0F8]'
      )}
    >
      <div className="font-bold text-[14px]">{labReport}</div>
      <div className="font-medium text-[12px] text-[#757B80]">{date}</div>
    </div>
  );
};

export default LabReportCard;
