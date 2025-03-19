'use client';
import Button from '@/components/button/Button';
import TextField from '@/components/text-field/TextField';

type StepFormProps = {
  onClick?: () => void;
};

export default function SelectFacility({ onClick }: StepFormProps) {
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
      <div className="mt-3 p-4  bg-white border border-[#BFCFDA] shadow-[0_1px_3px_rgba(0,0,0,0.12)] rounded-[1rem]">
        <span className="mb-3 text-[0.75rem] leading-[1rem] font-normal text-[#757B80]">
          There is no such facility. Check the info or create new.
        </span>
        <Button
          variant="ghost"
          className="flex flex-row w-full justify-center h-[2.5rem] left-[1rem] top-[2.75rem] border border-[#BFCFDA] rounded-[0.75rem] text-center text-[0.875rem] leading-[1.25rem] font-semibold text-[#515253]"
          onClick={onClick}
        >
          + Create Facility
        </Button>
      </div>
    </>
  );
}
