'use client';
import { useState } from 'react';
export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    name: 'Angelina Perreira',
    gender: 'Female',
    age: 32,
  };
  const profileData = {
    dob: '03 July 1992',
    phone: '+1 (903) 533 0955',
    email: 'perreira@gmail.com',
    address: '1010 11th St. Sausalito, CA 96922',
    patientSince: 'Mar 12, 2023',
    insurance: 'Aetna - W2113 69935',
  };
  const threeDot = (
    <svg
      id="threeDot"
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="18" cy="12" r="2" fill="currentColor" />
    </svg>
  );
  const arrowDown = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 10L12 15L7 10"
        stroke="#515253"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div>
      <div className="p-4 flex justify-center align-middle gap-5 bg-transparent relative z-100">
        {/* Avatar */}
        <div
          id="nabAvatar"
          className="flex rounded-full overflow-hidden float-left w-[44px] h-[44px] bg-[#716FB2] justify-center items-center"
        >
          <p className="font-bold text-white text-lg">AM</p>
        </div>
        {/* Name and Gender */}
        <div className="w-3/5 block m-auto p-auto">
          <span className="block font-inter font-semibold text-[14px] leading-[20px] text-[#000005]">{data.name}</span>
          <div className="flex w-20 h-5 items-center justify-center px-[8px] py-[3px] gap-[10px] bg-[#E6E9EA] rounded-md">
            <span className="font-inter font-medium text-[0.75rem] leading-[1rem] uppercase text-[#757B80] flex-none">
              {data.gender}, {data.age}
            </span>
          </div>
        </div>
        {/* Dropdown Trigger */}
        <div className="relative m-auto p-auto">
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? threeDot : arrowDown}
          </div>
          {/* Dropdown Menu */}
        </div>
      </div>
      {isOpen && (
        <div className="right-0 mt-5 bg-white rounded-lg border">
          <ul className="py-2">
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">DOB</span>
                <div>{profileData.dob}</div>
              </div>
            </div>
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">Phone</span>
                <div>{profileData.phone}</div>
              </div>
            </div>
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">Email</span>
                <div>{profileData.email}</div>
              </div>
            </div>
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">Address</span>
                <div>{profileData.address}</div>
              </div>
            </div>
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">PatientSince</span>
                <div>{profileData.patientSince}</div>
              </div>
            </div>
            <div className="px-5 py-4 flex gap-2">
              <div>icons</div>
              <div className="block">
                <span className="text-gray-500">Insurance</span>
                <div>{profileData.insurance}</div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
