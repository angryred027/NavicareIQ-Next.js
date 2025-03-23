'use client';
import { useState, useRef } from 'react';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import Badge from '@/components/badge/Badge';
import Icon from '@/components/icon/Icon';

import QuantityDropdown from '@/modules/lib/QuantityDropdown';

import { SelectDropDown } from '@/components/common/inputs/select-dropdown';
import { DropDown } from '@/components/common';

import { Medication } from '@/types/medication.type';
import { Physician } from '@/types/physician.type';
import { Pharmacy } from '@/types/pharmacy.type';
import { Patient } from '@/types/patient.type';

type AddOrderModalProps = {
  isOpen: boolean;
  patients: Patient[];
  physician: Physician;
  medication: Medication;
  pharmacies: Pharmacy[];
  onClose: () => void;
};

const physicianData = {
  id: 1,
  facility_id: 1,
  first_name: 'Charles',
  last_name: 'Brown',
  created_at: '',
  updated_at: '',
};

const pharmacyOptions = [
  {
    value: '1',
    label: 'Vertisis Custom Pharmacy',
    extraData: { street_address: '842 Metz Harbors Apt. 095', city: 'Chino Hills', state: 'AZ', zip: '59788' },
  },
  {
    value: '2',
    label: 'MedCore Compounding Pharmacy',
    extraData: { street_address: '1256 Pine Hill Rd', city: 'Austin', state: 'TX', zip: '73301' },
  },
  {
    value: '3',
    label: 'Precision RX Solutions',
    extraData: { street_address: '4820 Oakwood Ave', city: 'San Diego', state: 'CA', zip: '92115' },
  },
  {
    value: '4',
    label: 'Elite Custom Pharma',
    extraData: { street_address: '2315 Sunset Blvd', city: 'Denver', state: 'CO', zip: '80219' },
  },
  {
    value: '5',
    label: 'Summit Care Pharmacy',
    extraData: { street_address: '7852 Maple Grove St', city: 'Seattle', state: 'WA', zip: '98109' },
  },
];

const medicationData = {
  id: 1,
  name: 'Vertisis Custom Compounded Sublingual DHEA',
  use: 'Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.',
  form: 'string',
  qty_per_pkg: 'string',
  price: 10,
  vial: '0.25 mg/mL',
  storage: 'string',
  description: 'string',
  created_at: 'string',
  updated_at: 'string',
};

const quantityOptions = [
  { value: <span className="text-[#4167AF]">1</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">2</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">3</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">4</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">5</span>, onClick: () => console.log('clicked') },
];

const vialOptions = [
  { value: <span className="text-[#4167AF]">0.25 mg/mL</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">0.4 mg/mL</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">0.5 mg/mL</span>, onClick: () => console.log('clicked') },
];

const refillOptions = [
  { value: <span className="text-[#4167AF]">1</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">2</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">3</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">4</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">5</span>, onClick: () => console.log('clicked') },
];

export default function AddOrderModal({
  isOpen = false,
  patients,
  physician = physicianData,
  medication = medicationData,
  onClose,
}: AddOrderModalProps) {
  const [copiedText, setCopiedText] = useState<string>('');
  const textRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (textRef.current) {
      const text = textRef.current.textContent || '';
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedText(text);
          setCopied(true);
          alert(`Copied text: ${text}`);
        })
        .catch((err) => alert(`Failed to copy: ${err}`));
    }
  };
  const patientOptions = [
    {
      value: '1',
      label: 'Angelina Perreira',
    },
    {
      value: '2',
      label: 'Dean Friedland',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [patientData, setPatientData] = useState<any[]>(patientOptions);
  const [pharmacyData, setPharmacyData] = useState<any[]>(pharmacyOptions);
  const [selectedPharmacy, setSelectedPharmacy] = useState<string>('');
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [pharmacyAddress, setPharmacyAddress] = useState<string>('');

  const [reason, setReason] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the API call
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          onClose();
        }}
        title="Add to Order"
      >
        <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
          <div className="m-1">
            <SelectDropDown
              label="Select Patient"
              options={patientData}
              value={selectedPatient}
              onChange={(value) => setSelectedPatient(value)}
            />
          </div>
          {physician.first_name && (
            <Badge
              label={`Prescribed by: ${physician.first_name}`}
              className="mx-1 my-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80]"
            />
          )}
          <div className="flex flex-col justify-center mt-6 p-4 h-[52px] rounded-[12px] bg-[#F6F9FA]">
            <div className="flex justify-between">
              <span
                ref={textRef}
                className="p-1 font-inter font-medium text-sm leading-[20px] text-[#000005] flex-nowrap"
              >
                {medication.name}
              </span>
              <div>
                <Icon name="paper1" onClick={copyToClipboard} />
              </div>
            </div>
            <div className="flex">
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Vial: &nbsp;</span>
                <DropDown
                  btnLabel={<span className="text-[#4167AF]">{medication.vial}</span>}
                  endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
                  items={vialOptions}
                  className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
                />
              </div>
              <div className="border border-[#E6F0F8] mx-4"></div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Qty.&nbsp;</span>
                <QuantityDropdown />
              </div>
              <div className="border border-[#E6F0F8] mx-4"></div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Refill.&nbsp; </span>
                <DropDown
                  btnLabel={<span className="text-[#4167AF]">1</span>}
                  endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
                  items={refillOptions}
                  className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 my-4">
            <Badge icon="warning" level="Moderate" label="Previously prescribed" />
          </div>
          <div className="mb-5 bg-white border border-[#BFCFDA] rounded-[16px] box-border p-4">
            <div className="font-medium font-inter text-sm leading-[20px] text-[#757B80]">Directions for use</div>
            <div className="break-words whitespace-normal font-inter text-sm leading-[20px] text-[#000005]">
              {medication.use}
            </div>
          </div>
          <div className="mx-1">
            <form className="my-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Reason for compounding"
                className="w-full h-[56px] p-5 bg-white border border-[#BFCFDA] rounded-[1rem] font-inter text-base leading-6 text-[#757B80] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </form>
          </div>
          <hr className=" border-t border-[#E6F0F8]" />
          <div className="mx-1 mt-5 h-[56px]">
            <SelectDropDown
              label="Pharmacy"
              options={pharmacyData}
              value={selectedPharmacy}
              onChange={(value, extraData) => {
                setSelectedPharmacy(value);
                if (extraData?.street_address && extraData?.city && extraData?.state && extraData?.zip)
                  setPharmacyAddress(
                    `${extraData?.street_address}, ${extraData?.city}, ${extraData?.state}, ${extraData?.zip}` || ''
                  );
              }}
            />
          </div>
          {pharmacyAddress && (
            <Badge
              label={pharmacyAddress}
              className="mt-4 mx-1 gap-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80] pt-[3px] px-2 pb-[2px]"
            />
          )}
          <hr className="mt-10 top-[678px] border-0 border-[#E6F0F8] border-t" />
          <Button
            variant="primary"
            className="flex w-full my-5 items-center justify-center h-[3.5rem] bg-[#4167AF] rounded-[1rem]"
            type="submit"
          >
            Place Order
          </Button>
        </div>
      </Modal>
    </>
  );
}
