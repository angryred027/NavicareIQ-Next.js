interface PastReportProps {
  reportNumber: string;
  date: string;
}

export const PastReport = ({ reportNumber, date }: PastReportProps) => {
  return (
    <div className="border border-[#EDF2F6] bg-white rounded-[8px] px-4 py-3 space-y-2 max-w-[300px]">
      <div className="text-body-bold text-system-dark-900">{reportNumber}</div>
      <div className="text-caption text-system-dark-500">{date}</div>
    </div>
  );
};