'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import TextField from '@/components/text-field/TextField';
import SignPanel from '@/components/sign-panel/SignPanel';

type StepFormProps = {
  onClick1?: () => void;
  onClick2?: () => void;
};

export default function ProviderAgreement({ onClick1, onClick2 }: StepFormProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <span className="flex flex-col text-[1.5rem] leading-[2.25rem] font-bold text-[#000005] sm:w-[20rem] sm:text-[1.25rem] sm:leading-[1.75rem] mt-8">
            Provider Agreement
            <span className="text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80] mt-3">
              Please sign the document below.
            </span>
          </span>
        </div>
        <TextField label="Facility Name" className="h-[3.5rem] mt-6" />
        <div className="mt-6 p-6 md:p-4 w-[30rem] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-md">
          <p className="text-left text-[0.875rem] leading-[1.25rem] font-normal text-[#757B80]">
            I authorize Vertisis Custom Pharmacy LLC, and any other pharmacies owned by Vertisis Custom Pharmacy LLC
            (referred to in this agreement as the "Pharmacy") to provide medications and associated products and
            services to the above-named Doctor and or Facility. I certify that I have the legal authority to sign this
            agreement on behalf of said Doctor and or Facility. I understand that by signing this agreement I will
            become responsible to pay the usual and customary fee for all medications, products and services provided to
            the Doctor and or Facility by the Pharmacy at the direction of the facility administration and staff and
            attending physician(s). If I disagree with any medication, product or service directed by the facility or an
            attending physician, I will contact them and resolve the issue(s) and ask them to provide different written
            direction to the Pharmacy. I acknowledge and agree that the Pharmacy provides medications, products or
            services based upon the most current written direction received by it. For patients receiving benefits from
            an insurance company, I am aware that the Pharmacy Does Not bill any insurance for any of its products and
            or services and the doctor and or Facility accepts full financial responsibility for the medication it
            prescribes from the Pharmacy. I also understand that not all medications and products that the Pharmacy may
            compound are FDA approved. I understand that it is my responsibility to consult with the proper overseeing
            medical licensure board to fully understand my scope of practice. I also understand that the Pharmacy will
            bill me on a regular basis (normally per order) for all charges for which I am responsible on behalf of the
            Patient. The invoice will show all charges billed, payments received, and any adjustments required to the
            patient's account over the previous billing period, plus any balance forward. I agree to pay the Pharmacy in
            full before my prescription has shipped. I acknowledge and agree that any order / prescription that is not
            canceled within 24 hours of the expected delivery date will result in a charge of 30% of the retail cost of
            the prescription. If the Pharmacy is required to pursue legal action to collect any balance due from me on
            behalf of the Doctor and or Facility, I agree to pay reasonable attorney and collection agency fees and
            costs incurred in collecting any amounts due and owing hereunder. I understand that Arizona state statute
            and federal antikickback rules prohibit the mark up in price of custom compounded medications by a
            prescriber or facility. I understand the Pharmacy will provide the Doctor and or Facility a duplicate copy
            of the price, dosage form, drug name and strength for the prescribed medication which should be provide to
            the patient, patient representative, and or third party payer. I understand that the Doctor and or Facility
            can in no way mark-up the price of the medication for a patient. I also understand that the Pharmacy has the
            option to discontinue providing additional medications, products or services to the above-named Doctor and
            or Facility at any time for any reason, regardless of whether the Pharmacy still provides medications,
            products or services to other Doctor and or Facility. I understand that the Pharmacy can provide for regular
            automatic payments from an established checking or savings account or to a credit card. If I elect an
            automated payment method, I will sign a separate authorization form, but understand that the terms and
            conditions of this agreement will still apply.
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
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
