import Icon from '@/components/icon/Icon';

interface MedicalEffectProps {
  title: string;
  rating: 'low' | 'moderate' | 'high';
}

const MedicalEffectRating = {
  low: 'Low Risk',
  moderate: 'Moderate',
  high: 'High Risk',
}

const MedicalEffectRatingStyle = {
  low: 'border-system-light-900 bg-poppy-100 text-poppy-500',
  moderate: 'border-status-warning-600 bg-status-warning-200 text-status-warning-600',
  high: 'border-status-error-300 bg-status-error-200 text-status-error-600',
} 

const Rating = ({ rating }: { rating: 'low' | 'moderate' | 'high' }) => {
  return (
    <div className={`text-caption border rounded-[6px] w-fit px-2 py-1 ${MedicalEffectRatingStyle[rating]}`}>{MedicalEffectRating[rating]}</div>
  );
}

export const MedicalEffect = ({ title, rating }: MedicalEffectProps) => {
  return (
    <div className="border border-[#EDF2F6] bg-white rounded-[8px] px-4 py-3 space-y-2 max-w-[300px]">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-[6px] w-6 h-6 bg-system-light-100 border border-system-light-200"> 
          <Icon name="heart" size={16} viewBox="0 0 18 16"/>
        </div>
        <div className="text-body-bold text-system-dark-900">{title}</div>
      </div>
      <Rating rating={rating} />
    </div>
  );
};