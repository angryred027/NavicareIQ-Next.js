type RiskLevel = 'Low Risk' | 'Moderate' | 'High Risk';

import SummaryCard from '@/components/summary-card/SummaryCard';
import Badge from '@/components/badge/Badge';
import { IconButton } from '@/components/common';
import { Button } from '@/components/common';
import Image from 'next/image';
import AddIcon from '@/assets/icons/plus.svg';
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu';

import Icon from '@/components/icon/Icon';
export default function Users() {
  const summaryData = [
    {
      id: '1',
      label: 'Cardiovascular Effects',
      icon: 'heart',
      level: 'Moderate',
    },
    {
      id: '2',
      label: 'Kidney Involvement',
      icon: 'bottle',
      level: 'Low Risk',
    },
    {
      id: '3',
      label: 'Dehidration',
      icon: 'waterDrop',
      level: 'High Risk',
    },
    {
      id: '4',
      label: 'Castrointestinal Dysfunction',
      icon: 'microscope',
      level: 'Low Risk',
    },
    {
      id: '5',
      label: 'Malnutrition',
      icon: 'pipette',
      level: 'High Risk',
    },
    {
      id: '6',
      label: 'Infection or Inflammation',
      icon: 'healthcare',
      level: 'Moderate',
    },
    {
      id: '7',
      label: 'Blood Glucose and Diabetes',
      icon: 'injector',
      level: 'Moderate',
    },
    {
      id: '8',
      label: 'Kidney Function',
      icon: 'flask1',
      level: 'Low Risk',
    },
    {
      id: '9',
      label: 'Nutrient Deficiencies',
      icon: 'capsule',
      level: 'High Risk',
    },
  ];

  const medicineData = [
    {
      id: '1',
      title: 'Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL',
      description: 'Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.',
    },
    {
      id: '2',
      title: 'Vertisis Custom Compounded Sublingual Progesterone 10 mg/mL',
      description: 'Hold 30 drops under the tongue for 30 seconds and swallow remaining solution before bed.',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-4 col-span-1">
          <div className="h-19 bg-[#F6F9FA] rounded-md border  border-[#E6F0F8]">
            <DropdownMenu />
          </div>
          <div className="flex-1 bg-[#F6F9FA] rounded-md border  border-[#E6F0F8] p-2">
            <div className="flex bg-[#E6E9EA] h-8 rounded-lg overflow-hidden">
              <button className="flex-1 px-4 py-2 bg-white shadow-md rounded-[7px] border border-[#E6E9EA] font-inter font-semibold text-[12px] leading-[16px] text-center text-[#000005]">
                Past Reports
              </button>
              <button className="flex-1 px-4 py-2 bg-[#E6E9EA] font-inter font-semibold text-[12px] leading-[16px] text-[#757B80]">
                Past Prescriptions
              </button>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="col-span-3 bg-[#F6F9FA] rounded-md border">
          <div className="grid gap-4 p-4">
            <div className="row-span-1 pb-0">
              <div className="grid grid-cols-1 gap-2 px-2 bg-[#F6F9FA]  rounded-md">
                <div className="flex items-center h-20 bg-[#E6F0F8] rounded-md border  border-[#E6F0F8]">
                  <div className="w-4">
                    <div className="bg-blue-500 h-15 w-1" />
                  </div>

                  <div>
                    <h2 className="font-inter font-bold text-base leading-6 text-[#000005]">Lab Report #PLJ22113</h2>
                    <p className="font-inter font-medium text-sm leading-5 text-[#757B80] ">Jan 28, 2025</p>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <div className="row-span-2"> */}
            <span className="pt-0 pl-4 font-inter font-semibold text-xs leading-4 tracking-[0.08em] uppercase text-[#000005]">
              Summary
            </span>
            <div className="grid grid-cols-3 gap-2 p-2 bg-[#F6F9FA]  rounded-md">
              {summaryData.map((item, index) => (
                <SummaryCard key={item.id} level={item.level} label={item.label} icon={item.icon} />
              ))}
            </div>
            {/* </div>
            <div className="row-span-2"> */}
            <div className="m-2 p-4 bg-white rounded-xl shadow-md w-full">
              <div className="border-b pb-4">
                <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#000005]">
                  Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL
                </span>
                <p className="font-inter font-normal text-[12px] leading-[20px] text-[#757B80]">
                  Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.
                </p>
              </div>
              {/* <hr className="p-0"></hr> */}

              <div className="flex pt-4">
                <div className="flex-1">
                  <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#000005]">
                    Vertisis Custom Compounded Sublingual Progesterone 10 mg/mL
                  </span>
                  <p className="font-inter font-normal text-[12px] leading-[20px] text-[#757B80]">
                    Hold 30 drops under the tongue for 30 seconds and swallow remaining solution before bed.
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <Badge icon="warning" level="Moderate" label="Previously presubscibed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
