import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationPanel = () => {
  return (
    <div className="flex flex-col gap-[16px] pb-[16px]">
      <NavigationItem label="Summary" isActive />
      <NavigationItem label="Prescription" />
      <NavigationItem label="Key findings" />
      <NavigationItem label="Patient profile" />
      <NavigationItem label="Lifestyle" />
      <NavigationItem label="Supplements" />
      <NavigationItem label="Nutrition" />
      <NavigationItem label="Exercise" />
      <NavigationItem label="Screening" />
      <NavigationItem label="Lab results" />
    </div>
  );
};

export default NavigationPanel;
