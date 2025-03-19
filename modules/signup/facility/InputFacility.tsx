'use client';
import Button from '@/components/button/Button';
import TextField from '@/components/text-field/TextField';

type StepFormProps = {
  onClick?: () => void;
};

export default function InputFacility({ onClick }: StepFormProps) {
  return (
    <>
      <div className="flex flex-col w-full">
        <span className="flex flex-col text-[1.5rem] leading-[2.25rem] font-bold text-[#000005] sm:w-[20rem] sm:text-[1.25rem] sm:leading-[1.75rem] mt-8">
          Welcome to NaviCareIQ
          <span className="text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80] mt-3">
            We’ll ask a couple questions to set up your account. It’ll take approximately 5 minutes.
          </span>
        </span>
      </div>
      <TextField label="Facility" className="h-[3.5rem] mt-8" />
      <div className="flex flex-row w-full gap-2 justify-end  mt-8">
        <Button
          variant="primary"
          className="flex w-full my-5 items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
          onClick={onClick}
        >
          Next
        </Button>
      </div>
    </>
  );
}
