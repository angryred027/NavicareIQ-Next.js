'use client';
import Image from 'next/image';
import LogoIcon from '@/assets/logo.png';
import LogoTextIcon from '@/assets/logo_text.png';
import LoginTopArrow from '@/assets/login_top_arrow.svg';
import LoginBottomArrow from '@/assets/login_bottom_arrow.svg';
import Button from '@/components/button/Button';
import { useState } from 'react';

const StepOne = () => (
  <div>
    <h2 className="text-lg font-semibold">Step 1: Facility Details</h2>
    <input type="text" placeholder="Facility name or address" className="border p-2 w-full rounded-md" />
  </div>
);

const StepTwo = () => (
  <div>
    <h2 className="text-lg font-semibold">Step 2: Additional Info</h2>
    <input type="text" placeholder="Additional details" className="border p-2 w-full rounded-md" />
  </div>
);

const StepThree = () => (
  <div>
    <h2 className="text-lg font-semibold">Step 3: Confirmation</h2>
    <p>Your account is almost ready!</p>
  </div>
);

const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepOne />, <StepTwo />];

export default function LoginPage() {
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
  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      <div className="flex flex-col md:flex-row relative w-full max-w-full mx-auto bg-white shadow-lg p-5 md:p-7">
        {/* Left Section */}
        <div className="w-full md:w-3/10 flex flex-col justify-between relative">
          <div className="flex gap-4 items-center cursor-pointer pt-2 md:pt-6">
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
        <div className="w-full md:w-4/10 flex flex-col items-center text-center px-4 md:px-0">
          <div className="w-full flex justify-center mt-4">
            <div className="flex gap-2 w-full max-w-xs items-center cursor-pointer mt-4 md:mt-8">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-full rounded-md ${index <= step ? 'bg-[#4167AF]' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex w-full items-center justify-center text-gray-600 font-medium">
            <div className="flex flex-row w-full gap-2 justify-end items-center">
              {step > 0 && (
                <Button
                  variant="ghost"
                  className="flex w-full my-5 items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
                  onClick={backStep}
                >
                  Back
                </Button>
              )}
              {step < steps.length - 1 && (
                <Button
                  variant="primary"
                  className="flex w-full my-5 items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
                  onClick={nextStep}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
          <p className="text-center text-[#757B80] font-inter font-normal text-[0.875rem] leading-[1.25rem]">
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
