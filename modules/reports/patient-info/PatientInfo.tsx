import Icon from '@/components/icon/Icon';
import Collapse from '@/components/collapse/Collapse';

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

type InsuranceItem = {
  provider: string;
  code: string;
};

type PatientData = {
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

type PatientInfoProps = {
  patient: PatientData;
};

export const PatientInfo = ({ patient = patientData }: PatientInfoProps) => {
  return (
    <div className="w-full space-y-4 flex justify-center align-middle gap-5 bg-transparent relative z-100">
      <Collapse title={patient.name} subTitle={patient.gender + `, ${patient.age}`} defaultOpen>
        <div className="space-y-8 border-t border-system-light-200 pt-4">
          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="calendar" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">DOB</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">{patient.dob}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="call" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Phone</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">{patient.phone}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="message" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Email</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">{patient.email}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="pin-map" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Address</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">
                {patient.address}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="time" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Since</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">
                {patient.startDate}
              </span>
              <span className="text-xs sm:text-sm leading-[1rem] font-normal text-[#91A3B0]">{'1 year, 3 months'}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="shield" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Insurance</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">
                {patient.insurance.provider}
              </span>
              <span className="flex text-xs sm:text-sm leading-[1rem] font-normal text-[#91A3B0]">
                {patient.insurance.code}
                <Icon name="copy" className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
