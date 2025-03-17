'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { Alert, Button } from '@/components/common';
import PaperDownload from '@/assets/icons/paper-download.svg';
import Mail from '@/assets/icons/mail.svg';
import HealthRisk from './HealthRisk';
import PrescriptionList from './PrescriptionList';

const SummaryLabPatientReportLab: FC = () => {
  return (
    <div>
      <Alert>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[17px]">
            <div className="w-[6px] h-[62px] rounded-[4px] bg-[#4167AF] border-[#4167AF]" />
            <div className="flex flex-col gap-[2px]">
              <div className="font-bold">Lab Report #PLJ22113</div>
              <div className="text-[12px] font-medium text-[#757B80]">Jan 28, 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-[17px]">
            <Button variant="primary" label={<Image src={PaperDownload} alt="Download" />} />
            <Button variant="primary" startIcon={<Image src={Mail} alt="Mail" />} label="Share" className="w-[110px]" />
          </div>
        </div>
      </Alert>
      <div className="mt-[16px]">
        <div className="font-semibold">Summary</div>
        <div className="mt-[12px]">
          <HealthRisk />
        </div>
        <PrescriptionList />
      </div>
    </div>
  );
};

export default SummaryLabPatientReportLab;
