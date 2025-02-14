import { ReactNode } from 'react';
import Icon from '@/components/icon/Icon';

type AlertType = 'positive' | 'warning' | 'negative' | 'neutral';

interface AlertProps {
  type?: AlertType;
  children: ReactNode;
  className?: string;
}

const Alert = ({ type = 'neutral', children, className = '' }: AlertProps) => {
  const alertStyles = {
    positive: {
      bg: 'bg-status-success-600',
      text: 'text-white',
      iconColor: 'text-white'
    },
    warning: {
      bg: 'bg-status-warning-300',
      text: 'text-system-dark-900',
      iconColor: 'text-system-dark-800'
    },
    negative: {
      bg: 'bg-status-error-600',
      text: 'text-white',
      iconColor: 'text-white'
    },
    neutral: {
      bg: 'bg-system-light-500',
      text: 'text-system-dark-900',
      iconColor: 'text-system-dark-900'
    }
  };

  const { bg, text, iconColor } = alertStyles[type];

  return (
    <div className={`
      ${bg} 
      ${text}
      p-3 
      rounded-[16px]
      flex 
      items-start 
      gap-3
      ${className}
    `}>
      <div className="flex items-center justify-center gap-2 flex-1">
        <Icon name="info-circle" className={iconColor} />
        <div className="flex-1">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <Icon name="close" className={iconColor} />
      </div>
    </div>
  );
};

export default Alert;