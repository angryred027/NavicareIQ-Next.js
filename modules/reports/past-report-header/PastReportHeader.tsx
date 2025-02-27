import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';


interface PastReportProps {
  reportNumber: string;
  date: string;
}

export const PastReportHeader = ({ reportNumber, date }: PastReportProps) => {
  return (
    <div className="flex justify-between items-center border border-[#EDF2F6] bg-[#E6F0F8] rounded-[8px] px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="flex flex-col w-[6px] h-[62px] bg-[#4167AF] rounded-[8px]"/> 
        <div>
          <div className="text-body-bold text-system-dark-900">{reportNumber}</div>
          <div className="text-caption text-system-dark-500">{date}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="primary">
          <Icon name="download" viewBox="0 0 18 20" size={20}/>
        </Button>
        <Button variant="primary" className="flex items-center gap-2">
          <Icon name="mail" viewBox="0 0 18 20" size={20}/>
          Share
        </Button>
      </div>
    </div>
  );
};