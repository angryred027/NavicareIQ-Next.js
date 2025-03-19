'use client';
import { useState } from 'react';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import TextField from '@/components/text-field/TextField';
import SignPanel from '@/components/sign-panel/SignPanel';
import DatePickerInput from '@/components/date-picker/DatePicker';

type StepFormProps = {
  onClick1?: () => void;
  onClick2?: () => void;
};

export default function ConsentForm({ onClick1, onClick2 }: StepFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <span className="flex flex-col text-[1.5rem] leading-[2.25rem] font-bold text-[#000005] sm:w-[20rem] sm:text-[1.25rem] sm:leading-[1.75rem] mt-8">
            Consent Statement Form
            <span className="text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80] mt-3">
              Please sign the document below.
            </span>
          </span>
        </div>
        <TextField label="Facility Name" className="h-[3.5rem] mt-6" />
        <div className="mt-6 p-6 md:p-4 w-[30rem] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-md">
          <p className="text-left text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80]">
            I understand that 42 U.S.C. § 1320a-7b (also known as the federal Anti-Kickback Statute ("AKS")) is a
            criminal statute that prohibits the willful exchange of anything of value from a health care business, or
            individual health care provider, to induce the referral, purchase, or use of a product/service that is
            eligible for payment by a federal health care program (e.g., Medicare, Medicaid, TRICARE, etc.). When the
            exchange of anything of value (referred to as "remuneration" in the statute) is offered to a federal
            beneficiary purposefully to induce or reward the beneficiary to purchase or consume a service or product
            payable by a federal health care program, the AKS is violated. The AKS defines "remuneration" as the
            exchange of anything of value, directly or indirectly, overtly or covertly, in cash or in kind. Violation of
            the statute constitutes a felony punishable by a maximum fine of $25,000, imprisonment up to five (5) years,
            or both. Conviction will also lead to the offending provider being automatically excluded from participation
            in federal health programs, including Medicare and Medicaid. I also understand that according to Ariz. Rev.
            Stat. § 32.1901.01(B) (24) Arizona statutes prohibit the payment of rebates to a prescriber for any
            prescription regardless of the payer source. Vertisis Custom Pharmacy LLC, and any other pharmacies owned by
            Vertisis Custom Pharmacy LLC (referred to in this agreement as the "Pharmacy") require its prescribers to
            include in their consent documents the following statement that notifies its patients of their right to
            direct their pharmacy needs to any pharmacy. To be placed in patient's consent documents: "I understand that
            I have the ability and it is my right to be able to select / direct which pharmacy my prescriber uses to
            fill my medication orders." I understand that it is my responsibility to include the above statement inside
            of my patient's consent documents. If for some reason the consent statement is not included in the patient's
            consent documents or the patient does not sign the consent documents, I understand that the Pharmacy cannot
            and will not supply any medications for that patient. I understand it is my responsibly to make sure every
            patient signs a copy of the above consent statement
          </p>
        </div>
        <TextField label="Initials" className="h-[3.5rem] mt-6" endIcon={<Icon name=""></Icon>} />
        <TextField label="Date" className="h-[3.5rem] mt-6" endIcon={<Icon name="calendar"></Icon>} />

        <div className="flex justify-center items-center mt-6 w-[60rem]">
          <SignPanel />
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
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
