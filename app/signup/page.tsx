'use client';
import { useState } from 'react';
import Image from 'next/image';
import LogoIcon from '@/assets/logo.png';
import LogoTextIcon from '@/assets/logo_text.png';
import LoginTopArrow from '@/assets/login_top_arrow.svg';
import LoginBottomArrow from '@/assets/login_bottom_arrow.svg';

import InputFacility from '@/modules/signup/facility/InputFacility';
import SelectFacility from '@/modules/signup/facility/SelectFacility';
import RegisterPayment from '@/modules/signup/payment/RegisterPayment';
import RegisterFacility from '@/modules/signup/facility/RegisterFacility';
import RegisterPhysician from '@/modules/signup/physician/RegisterPhysician';
import ProviderAgreement from '@/modules/signup/provider/ProviderAgreement';
import ConsentForm from '@/modules/signup/consent/ConsentForm';

export default function SignUpPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };
  const backStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const steps = [
    <InputFacility onClick={nextStep} />,
    <SelectFacility onClick={nextStep} />,
    <RegisterFacility onClick={nextStep} />,
    <RegisterPhysician onClick1={backStep} onClick2={nextStep} />,
    <RegisterPayment onClick1={backStep} onClick2={nextStep} />,
    <ProviderAgreement onClick1={backStep} onClick2={nextStep} />,
    <ConsentForm onClick1={backStep} onClick2={nextStep} />,
  ];
  return (
    <div className="min-h-screen w-full flex bg-[#FFFFFF]">
      <div className="flex flex-col gap-4 md:flex-row relative w-full max-w-full mx-auto bg-white shadow-lg p-5 md:p-7">
        {/* Left Section */}
        <div className="w-full md:w-3/10 flex flex-col justify-between relative">
          <div className="flex gap-4 items-center cursor-pointer">
            <Image src={LogoIcon} width={64} height={64} alt="logo" />
            <Image src={LogoTextIcon} width={166} height={27} alt="logo-text" />
          </div>
          <Image
            src={LoginBottomArrow}
            width={256}
            height={256}
            alt="bottom-arrow"
            className="absolute bottom-0 left-0 hidden md:block"
          />
        </div>

        {/* Center Section */}
        <div className="w-full md:w-4/10 flex flex-col justify-between items-center text-center px-4 md:px-0">
          <div className="flex flex-col w-full max-w-xs mt-4 md:mt-8">
            {/* Page Indicator */}
            <div className="flex gap-2 w-full items-center cursor-pointer">
              {steps.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setStep(index)}
                  className={`h-2 w-full rounded-md ${index < step ? 'bg-[#3DBD7B]' : index === step ? 'bg-[#4167AF]' : 'bg-[#E6F0F8]'}`}
                />
              ))}
            </div>

            {steps[step]}
          </div>

          {/* Footer */}
          <p className="text-center text-[#757B80] font-inter font-normal text-[0.875rem] leading-[1.25rem] mt-8">
            © Envita Health™ 2025 All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/10 flex flex-col relative">
          <Image
            src={LoginTopArrow}
            width={256}
            height={256}
            alt="top-arrow"
            className="absolute top-0 right-0 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
