type RiskLevel = 'Low Risk' | 'Moderate' | 'High Risk';

import Icon from '@/components/icon/Icon';
import Badge from '@/components/badge/Badge';
interface SummaryCardProps {
  level: RiskLevel;
  label: string;
  icon: string;
  className: string;
}

const SummaryCard = ({ level, label, className = '', icon = '' }: SummaryCardProps) => {
  return (
    <div className="block items-center p-2 bg-white border border-[#E6F0F8] rounded-lg">
      <div className="flex p-1">
        <div className="flex justify-center items-center w-6 h-6 left-1  bg-[#F6F9FA] border border-[#E6F0F8] rounded-md">
          <Icon name={icon} />
        </div>
        <div className="flex flex-col ml-2 justify-center items-center">
          <span className="font-inter font-semibold text-[0.75rem] leading-[1rem] text-[#000005]">{label}</span>
        </div>
      </div>
      <div className="flex p-1">
        <Badge level={level} />
      </div>
    </div>
  );
};

export default SummaryCard;
