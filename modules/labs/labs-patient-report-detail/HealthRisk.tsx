import React, { FC } from 'react';
import Image from 'next/image';
import HealthRiskItem from './HealthRiskItem';
import HeartIcon from '@/assets/icons/heart-risk.svg';

const HealthRisk: FC = () => {
  return (
    <div className="flex gap-[8px] items-center flex-wrap">
      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Heart Disease"
        status="medium"
      />
      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Kidney Involvement"
        status="low"
      />
      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Dehidration"
        status="high"
      />

      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Gastrointestinal Dysfunction "
        status="low"
      />
      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Heart Disease"
        status="low"
      />
      <HealthRiskItem
        icon={<Image src={HeartIcon} alt="Heart Disease" width={24} height={24} />}
        title="Heart Disease"
        status="low"
      />
    </div>
  );
};

export default HealthRisk;
