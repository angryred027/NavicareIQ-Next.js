import Icon from '@/components/icon/Icon';
import Collapse from '@/components/collapse/Collapse';
import calculateAge from '@/lib/CalculateAge';

import { Patient } from '@/types/patient.type';

const patientData: Patient = {
  id: 1,
  first_name: 'Angelina',
  last_name: 'Perreira',
  gender: 'Female',
  dob: '1992-07-03',
  phone: '+1 (903) 533-0955',
  email: 'angelina.perreira@gmail.com',
  city: 'Sausalito',
  state: 'CA',
  zip: '96922',
  street_address: '1010 11th St.',
  conditions: 'Hypertension, Asthma',
  diagnoses_codes: 'I10, J45',
  drug_allergies: 'Penicillin, Ibuprofen',
  medications: 'Lisinopril, Albuterol',
  facility_id: 101,
  created_at: '2024-03-12T08:30:00Z',
  updated_at: '2024-03-20T14:45:00Z',
  insurance: {
    provider: 'Aetna',
    code: 'W2113 69935',
  },
};

type PatientInfoProps = {
  patient: Patient;
};

export const PatientInfo = ({ patient = patientData }: PatientInfoProps) => {
  return (
    <div className="w-full space-y-4 flex justify-center align-middle gap-5 bg-transparent relative z-100">
      <Collapse
        title={`${patient.first_name}${patient.last_name}`}
        subTitle={patient.gender + `, ${calculateAge(patient.dob)}`}
        defaultOpen
      >
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
                {`${patient.street_address}, ${patient.city}, ${patient.state}, ${patient.zip}`}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 flex-wrap">
            <Icon name="time" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm leading-[1rem] font-medium text-[#757B80]">Since</span>
              <span className="text-sm sm:text-base leading-[1.25rem] font-normal text-[#000005]">
                {patient.created_at}
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
