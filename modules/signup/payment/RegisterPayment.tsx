'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import TextField from '@/components/text-field/TextField';
import Image from 'next/image';
import VisaIcon from '@/assets/icons/visa.svg';

type StepFormProps = {
  onClick1?: () => void;
  onClick2?: () => void;
};

export default function RegisterPayment({ onClick1, onClick2 }: StepFormProps) {
  return (
    <>
      <>
        <div className="flex flex-col w-full">
          <span className="flex flex-col text-[1.5rem] leading-[2.25rem] font-bold text-[#000005] sm:w-[20rem] sm:text-[1.25rem] sm:leading-[1.75rem] mt-8">
            Payment Info
            <span className="text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80] mt-3">
              We’ll ask a couple questions to set up your account. It’ll take approximately 5 minutes.
            </span>
          </span>
        </div>
        <TextField
          label="Card Number"
          className="h-[3.5rem] mt-6"
          endIcon={<Image src={VisaIcon} width={32} height={32} alt="visa" />}
        />
        <div className="flex flex-row gap-2 justify-center items-center">
          <TextField label="Exp." className="h-[3.5rem] mt-6" endIcon={<Icon name="calendar"></Icon>} />
          <TextField label="CCV" type="password" className="h-[3.5rem] mt-6" />
        </div>
        <TextField label="Name on Card" className="h-[3.5rem] mt-6" />
        <TextField label="Billing Address" className="h-[3.5rem] mt-6" />
        <div className="flex flex-row gap-2 justify-center items-center">
          <TextField label="City" className="h-[3.5rem] mt-6" />
          <TextField label="State" className="h-[3.5rem] mt-6" />
          <TextField label="Zip" className="h-[3.5rem] mt-6" />
        </div>
        <div className="flex flex-row w-full gap-2 justify-end  mt-6">
          <Button
            variant="ghost"
            className="flex w-full items-center justify-center h-[56px] p-5 border border-[#BFCFDA] rounded-[1rem] box-border font-inter font-semibold text-base leading-[1.25rem] text-center text-[#515253]"
            onClick={onClick1}
          >
            Back
          </Button>
          <Button
            variant="primary"
            className="flex w-full items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
            onClick={onClick2}
          >
            Next
          </Button>
        </div>
      </>
    </>
  );
}
