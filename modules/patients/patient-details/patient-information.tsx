import React, { type FC } from 'react';
import Calendar from '@/assets/icons/calendar.svg';
import Phone from '@/assets/icons/phone.svg';
import Email from '@/assets/icons/email.svg';
import Address from '@/assets/icons/location.svg';
import PatientSince from '@/assets/icons/patient-history.svg';
import Insurance from '@/assets/icons/insurance.svg';
import InsuranceShield from '@/assets/icons/insurance-shield.svg';
import { Divider, PatientCard } from '@/components/common';
import Image from 'next/image';
import { KeyInformation } from './key-information';

const PatientInformation: FC = () => {
  return (
    <div>
      <PatientCard name="Angelina Perreira" gender="Female" age={32} />
      <Divider className="mt-[16px]" />
      <div className="flex flex-col gap-[30px] px-[16px] py-[24px]">
        <KeyInformation
          icon={<Image src={Calendar} alt="calendar" width={20} height={20} />}
          label="DOB"
          description="03 July 1992"
        />
        <KeyInformation
          icon={<Image src={Phone} alt="phone" width={20} height={20} />}
          label="Phone"
          description="+1 (903) 533 0955"
        />
        <KeyInformation
          icon={<Image src={Email} alt="email" width={20} height={20} />}
          label="Email"
          description="perreira@gmail.com"
        />
        <KeyInformation
          icon={<Image src={Address} alt="address" width={20} height={20} />}
          label="Address"
          description="1010 11th St. Sausalito, CA 96922"
        />
        <KeyInformation
          icon={<Image src={PatientSince} alt="patient since" width={20} height={20} />}
          label="Patient Since"
          description="Mar 12, 2023"
          subDescription="1 year 11 months"
        />
        <KeyInformation
          icon={<Image src={InsuranceShield} alt="insurance shield" width={20} height={20} />}
          label="Insurance"
          description="Aetna"
          subDescription={
            <div className="flex gap-[6px]">
              <div>W2113 69935</div>
              <div>
                <Image src={Insurance} alt="insurance" width={16} height={16} />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PatientInformation;
