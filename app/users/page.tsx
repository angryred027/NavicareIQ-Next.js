'use client';

type RiskLevel = 'Low Risk' | 'Moderate' | 'High Risk';

import SummaryCard from '@/components/summary-card/SummaryCard';
import Badge from '@/components/badge/Badge';
import { IconButton } from '@/components/common';
import Button from '@/components/button/Button';
import Image from 'next/image';
import AddIcon from '@/assets/icons/plus.svg';
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu';
import TabSwitcher from '@/components/tabs/tabswitcher/TabSwitcher';

import Icon from '@/components/icon/Icon';
import HistoryButton from '@/components/history-btn/HistoryButton';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { PatientInfo } from '@/modules/reports/patient-info/PatientInfo';

export default function Users() {
  const toggled = useSelector((state: RootState) => state.toggle.toggled);

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

  const reportData = [
    {
      id: 1,
      label: 'Lab Report #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 2,
      label: 'Lab Report #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 3,
      label: 'Lab Report #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 4,
      label: 'Lab Report #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 5,
      label: 'Lab Report #PLJ22113',
      date: 'Jan 28, 2025',
    },
  ];

  const presubscriptionData = [
    {
      id: 1,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 2,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 3,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 4,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 5,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 6,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
    {
      id: 7,
      label: 'Lab Presubscription #PLJ22113',
      date: 'Jan 28, 2025',
    },
  ];

  const handleCopy = (e) => {
    //
    alert('Copied!');
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-4 col-span-1 ">
          <div className="relative sm:flex-none bg-[#F6F9FA] rounded-md border  border-[#E6F0F8]">
            <PatientInfo />
          </div>
          <div className="flex-1 bg-[#F6F9FA] rounded-md border  border-[#E6F0F8] p-2">
            <TabSwitcher tabs={['Past Report', 'Past Prescription']} />
            <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden">
              {toggled
                ? reportData.map((item, index) => <HistoryButton key={index} label={item.label} date={item.date} />)
                : presubscriptionData.map((item, index) => (
                    <HistoryButton key={index} label={item.label} date={item.date} />
                  ))}
              {toggled
                ? reportData.map((item, index) => <HistoryButton key={index} label={item.label} date={item.date} />)
                : presubscriptionData.map((item, index) => (
                    <HistoryButton key={index} label={item.label} date={item.date} />
                  ))}
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="col-span-3 bg-[#F6F9FA] rounded-md border">
          <div className="grid gap-4 p-4">
            <div className="row-span-1 pb-0">
              <div className="grid grid-cols-1 gap-2 px-2 bg-[#F6F9FA] rounded-md">
                <div className="row-span-1 pb-0">
                  <div className="grid grid-cols-1 gap-2 px-2 bg-[#F6F9FA] rounded-md">
                    <div className="flex items-center justify-between h-20 bg-[#E6F0F8] rounded-md border border-[#E6F0F8] p-3 md:p-4">
                      <div className="h-16 w-2 bg-[#4167AF] rounded-lg mx-2 md:mx-3"></div>

                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h2 className="font-inter font-bold text-sm md:text-base leading-6 text-[#000005] truncate">
                          {toggled ? 'Lab Report #PLJ22113' : 'Lab Lab Presubscription #PLJ22113'}
                        </h2>
                        <p className="font-inter font-medium text-xs md:text-sm leading-5 text-[#757B80]">
                          Jan 28, 2025
                        </p>
                      </div>

                      <div className="flex flex-row gap-2 md:gap-3 mr-2 items-center">
                        <div className="w-9 h-9 flex items-center justify-center border border-[#BFCFDA] rounded-lg">
                          <Icon name="download" className="w-5 h-5" />
                        </div>
                        <Button
                          className="border border-[#BFCFDA] px-3 py-1 text-xs md:text-sm flex items-center"
                          variant="ghost"
                          onClick={() => alert('Welcome!')}
                        >
                          <div className="flex items-center gap-1 md:gap-2">@ Share</div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row-span-2"> */}
            <span className="pt-0 pl-4 font-inter font-semibold text-xs leading-4 tracking-[0.08em] uppercase text-[#000005]">
              Summary
            </span>
            <div className="grid max-w-7xl min-w-[30rem] sm:grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-2 p-2 bg-[#F6F9FA]  rounded-md">
              {summaryData.map((item, index) => (
                <SummaryCard key={item.id} level={item.level} label={item.label} icon={item.icon} />
              ))}
            </div>
            {/* </div>
            <div className="row-span-2"> */}
            <div className="m-2 p-4 bg-white rounded-xl shadow-md w-full">
              <div className="flex border-b pb-4">
                <div className="block">
                  <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#000005]">
                    Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL
                  </span>
                  <p className="font-inter font-normal text-[12px] leading-[20px] text-[#757B80]">
                    Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.
                  </p>
                </div>
                <div id="1" className="flex w-[1.25rem] h-[1.25rem] bg-[#E6E9EA] rounded-lg" onClick={handleCopy}>
                  <Icon name="paper" />
                </div>
                <div className="flex-1"></div>

                <div className="flex items-center gap-2 px-3 py-2">
                  <Button onClick={() => alert('Welcome!')}>
                    <Image src={AddIcon} alt="add" width={16} height={16} className="w-4 h-4" />
                    <span className="text-sm font-medium">Add to Order</span>
                  </Button>
                </div>
              </div>
              <div className="flex pt-4">
                <div className="block">
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
                <div className="flex w-[1.25rem] h-[1.25rem] bg-[#E6E9EA] rounded-lg" onClick={handleCopy}>
                  <Icon name="paper" />
                </div>
                <div className="flex-1"></div>

                <div className="flex items-center gap-2 px-3 py-2">
                  <Button onClick={() => alert('Welcome!')}>
                    <Image src={AddIcon} alt="add" width={16} height={16} className="w-4 h-4" />
                    <span className="text-sm font-medium">Add to Order</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
