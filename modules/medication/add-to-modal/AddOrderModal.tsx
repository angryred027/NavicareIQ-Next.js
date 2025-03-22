'use client';
import { useState, useEffect } from 'react';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';
import Badge from '@/components/badge/Badge';
import { SelectDropDown } from '@/components/common/inputs/select-dropdown';
import TextField from '@/components/text-field/TextField';
import TextArea from '@/components/text-area/TextArea';
import { DropDown } from '@/components/common';
import Icon from '@/components/icon/Icon';
import { any } from 'zod';

type InsuranceItem = {
  provider: string;
  code: string;
};

type PatientInfo = {
  name: string;
  gender: string;
  age: number;
  dob: string;
  phone: string;
  email: string;
  address: string;
  startDate: string;
  insurance: InsuranceItem;
};

type PhysicianInfo = {
  name: string;
  physicianId: string;
};

type LabItem = {
  name: string;
};

type VendorItem = {
  value: string;
  label: string;
};

type PatientList = {
  value: string;
  label: string;
};

type AddOrderModalProps = {
  isOpen: boolean;
  lab: LabItem;
  vendors: VendorItem[];
  patient: PatientInfo;
  physician: PhysicianInfo;
  patientList: PatientList[];
};

const vendorsData = [
  {
    value: 'LabCorp',
    label: 'LabCorp',
  },
  {
    value: 'Quest Sonora',
    label: 'Quest Sonora',
  },
];

const patientListData = [
  {
    value: '2',
    label: 'Angelina',
  },
  {
    value: '1',
    label: 'Angelina',
  },
];

const patientData = {
  name: 'Angellina Perreira',
  gender: 'Female',
  age: 32,
  dob: '03 July 1992',
  phone: '+1 (903) 533 0955',
  email: 'perreira@gmail.com',
  address: '1010 11th St. Sausalito, CA 96922',
  startDate: 'Mar 12, 2023',
  insurance: {
    provider: 'Aetna',
    code: 'W2113 69935',
  },
};

const physicianData = {
  name: 'Charles',
  physicianId: '_physician1',
};

const labData = {
  name: 'Quantitative hCG Pregnancy',
};

const medicineDescriptions = [
  'Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.',
];

const pharmacyList = [
  { value: '1', label: 'Vertisis Custom Pharmacy' },
  { value: '2', label: 'Vertisis Custom Pharmacy' },
  { value: '3', label: 'Vertisis Custom Pharmacy' },
  { value: '4', label: 'Vertisis Custom Pharmacy' },
  { value: '5', label: 'Vertisis Custom Pharmacy' },
];

const qualityOptions = [
  { value: <span className="text-[#4167AF]">1</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">2</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">3</span>, onClick: () => console.log('clicked') },
];

const vialOptions = [
  { value: <span className="text-[#4167AF]">0.25 mg/mL</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">0.5 mg/mL</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">1.0 mg/mL</span>, onClick: () => console.log('clicked') },
];

const refillOptions = [
  { value: <span className="text-[#4167AF]">1</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">2</span>, onClick: () => console.log('clicked') },
  { value: <span className="text-[#4167AF]">3</span>, onClick: () => console.log('clicked') },
];

export default function AddOrderModal({
  isOpen = false,
  lab = labData,
  vendors = vendorsData,
  patient = patientData,
  physician = physicianData,
  patientList = patientListData,
}: AddOrderModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [patientData, setPatientData] = useState<any[]>(patientListData);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [pharmacyData, setPharmacyData] = useState<any[]>(pharmacyList);
  const [selectedPharmacy, setSelectedPharmacy] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the API call
  };
  const handleDropdownClick = (value: string) => {};

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add to Order">
        <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
          <div className="m-1">
            <SelectDropDown
              label="Select Patient"
              options={patientData}
              value={selectedPatient}
              onChange={(value) => setSelectedPatient(value)}
            />
          </div>
          <Badge
            label={`Prescribed by: ${physician.name}`}
            className="my-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80]"
          />
          <div className="flex flex-col justify-center mt-6 p-4 h-[52px] rounded-[12px] bg-[#F6F9FA]">
            <div className="flex justify-between">
              <span className="p-1 font-inter font-medium text-sm leading-[20px] text-[#000005] flex-nowrap">
                {'Vertisis Custom Compounded Sublingual DHEA'}
              </span>
              <div>
                <Icon name="paper1" />
              </div>
            </div>
            <div className="flex">
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Vial: &nbsp;</span>
                <DropDown
                  btnLabel={<span className="text-[#4167AF]">0.25 mg/mL</span>}
                  endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
                  items={vialOptions}
                  className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
                />
              </div>
              <div className="border border-[#E6F0F8] mx-4"></div>
              <div className=" font-inter text-xs leading-[16px] text-[#757B80] flex">
                <span>Qty.&nbsp;</span>
                <DropDown
                  btnLabel={<span className="text-[#4167AF]">1</span>}
                  endSlot={<Icon name="arrowDown" size={16} className="font-semibold text-[#4167AF]" />}
                  items={qualityOptions}
                  className="p-1 h-[1rem]  font-inter font-normal text-[0.75rem] leading-4 text-[#757B80] border border-none"
                />
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
              {medicineDescriptions}
            </div>
          </div>
          <div className="mx-1">
            <form className="my-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Reason"
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
              onChange={(value) => setSelectedPharmacy(value)}
            />
          </div>
          <Badge
            label={`842 Metz Harbors Apt. 095, Chino Hills, AZ, 59788`}
            className="mt-4 gap-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80] pt-[3px] px-2 pb-[2px]"
          />
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
