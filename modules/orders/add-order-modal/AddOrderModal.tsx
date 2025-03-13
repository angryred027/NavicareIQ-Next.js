'use client';
import { useState, useEffect } from 'react';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';
import Badge from '@/components/badge/Badge';
import { SelectDropDown } from '@/components/common/inputs/select-dropdown';

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

type AddOrderModalProps = {
  isOpen: boolean;
  lab: LabItem;
  vendors: VendorItem[];
  patient: PatientInfo;
  physician: PhysicianInfo;
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

export default function AddOrderModal({
  isOpen = false,
  lab = labData,
  vendors = vendorsData,
  patient = patientData,
  physician = physicianData,
}: AddOrderModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [vendorsData, setVendorsData] = useState<VendorItem[]>(vendors);
  const [selectedVendor, setSelectedVendor] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the API call
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add to Order">
        <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
          <div className="relative sm:flex-none bg-[#F6F9FA] rounded-md border border-[#E6F0F8]">
            <PatientInfo patient={patient} />
          </div>
          <Badge
            label={`Prescribed by: ${physician.name}`}
            className="my-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80]"
          />
          <div className="flex flex-col justify-center mt-5 p-4 h-[52px] rounded-[12px] bg-[#F6F9FA]">
            <span className="font-inter text-[14px] font-normal leading-[20px] text-[#000005]">{lab.name}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge icon="warning" level="Moderate" label="Previously prescribed" />
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
          <hr className="h-[1px] border-0 bg-[#E6F0F8]" />
          <div className="mx-1 my-5 h-[56px]">
            <SelectDropDown
              label="Vendor"
              options={vendorsData}
              value={selectedVendor}
              onChange={(value) => setSelectedVendor(value)}
            />
          </div>
          <hr className="h-[1px] border-0 bg-[#E6F0F8]" />
          <Button
            variant="primary"
            className="flex w-full my-5 items-center justify-center h-[3.5rem] bg-[#4167AF] rounded-[1rem]"
            type="submit"
          >
            Add to order
          </Button>
        </div>
      </Modal>
    </>
  );
}
