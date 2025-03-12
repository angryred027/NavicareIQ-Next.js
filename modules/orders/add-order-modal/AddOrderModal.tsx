'use client';
import { useState, useEffect } from 'react';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';
import Badge from '@/components/badge/Badge';
import { SelectDropDown } from '@/components/common/inputs/select-dropdown';

type Vendor = {
  value: string;
  label: React.ReactNode;
};
const items = [
  {
    value: 'LabCorp',
    label: <span>LabCorp</span>,
  },
  {
    value: 'Quest Sonora',
    label: <span>Quest Sonora</span>,
  },
];
export default function AddOrderModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>(items);
  const [selectedVendor, setSelectedVendor] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  // Fetch vendors from API
  // useEffect(() => {
  //   const fetchVendors = async () => {
  //     try {
  //       const response = await fetch('/api/vendors');
  //       const data = await response.json();
  //       const formattedVendors = data.map((vendor: string) => ({
  //         value: vendor,
  //         label: <span>{vendor}</span>,
  //       }));
  //       setVendors(formattedVendors);
  //     } catch (error) {
  //       console.error('Failed to fetch vendors:', error);
  //     }
  //   };

  //   fetchVendors();
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the API call
    const orderData = {
      reason,
      vendor: selectedVendor,
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Order added successfully!');
        setIsModalOpen(false);
      } else {
        console.error('Failed to add order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add to Order">
        <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
          <div className="relative sm:flex-none bg-[#F6F9FA] rounded-md border border-[#E6F0F8]">
            <PatientInfo />
          </div>
          <Badge
            label="Prescribed by: Carles"
            className="my-2 rounded-md bg-[#E6E9EA] font-inter font-medium text-[12px] leading-[16px] text-[#757B80]"
          />
          <div className="flex flex-col justify-center mt-5 p-4 h-[52px] rounded-[12px] bg-[#F6F9FA]">
            <span className="font-inter text-[14px] font-normal leading-[20px] text-[#000005]">
              Quantitative hCG Pregnancy
            </span>
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
              options={vendors}
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
      <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button variant="ghost" onClick={() => setIsModalOpen(true)}>
        Add to order
      </Button>
    </>
  );
}
