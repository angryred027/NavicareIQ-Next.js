type RiskLevel = 'Low Risk' | 'Moderate' | 'High Risk';

import Icon from '@/components/icon/Icon';

type BadgeProps = {
  icon?: string;
  level?: RiskLevel;
  label?: string;
  className?: string;
};

export default function Badge({ level, label, icon, className }: BadgeProps) {
  const colors = {
    'Low Risk': 'bg-[#557EFB1F] border-[#D0DBFE] text-[#4167AF]',
    Moderate: 'bg-[#F1BE661F] border-[#FFEDCF] text-[#D6972A]',
    'High Risk': 'bg-[#F166661F] border-[#FADDDD] text-[#F16666]',
  };

  return (
    <div
      className={`inline-flex justify-center items-center p-[0.125rem_0.375rem] rounded-[0.375rem] border ${level && colors[level]} ${className}`}
    >
      {icon && <Icon name={icon} />}
      <span className={`text-[0.75rem] leading-[1rem] font-medium text-center font-inter`}>{label || level}</span>
    </div>
  );
}
