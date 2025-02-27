import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';

interface PastReportProps {
  reportNumber: string;
  date: string;
}

export const MedicationCard = ({ reportNumber, date }: PastReportProps) => {
  return (
    <div className="border border-[#EDF2F6] bg-white flex justify-between items-start rounded-[8px] px-4 py-3 max-w-[680px]">
      <div className="flex items-start">
        <div className="max-w-[440px]">
          <div className="flex items-start justify-between">
            <div className="flex flex-col ">
              <div className="text-body-bold text-system-dark-900">{reportNumber}</div>
              <div className="text-caption text-system-dark-500">{date}</div>
            </div>
            <div className="cursor-pointer bg-system-dark-100 rounded-[8px] p-1 ">    
              <Icon name="paper" size={15} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2 border-status-warning-600 bg-status-warning-200 text-status-warning-600 text-caption border rounded-[6px] w-fit px-2 py-1">
            <Icon name="warning" size={14} viewBox="0 0 14 13"/>
            <div className="text-caption">Previously Prescribed</div>
          </div>
        </div>
       
      </div>
      <Button variant="ghost" className="flex items-center gap-2">
        <Icon name="plus" size={24} viewBox="0 0 24 24"/>
        Add to order
      </Button>
    </div>
  );
};