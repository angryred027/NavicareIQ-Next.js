type Insurance = {
  provider: string;
  code: string;
};

export type Patient = {
  email?: string;
  city: string;
  conditions: string;
  created_at: string;
  diagnoses_codes: string;
  dob: string;
  drug_allergies: string;
  facility_id: number;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
  medications: string;
  phone: string;
  state: string;
  street_address: string;
  updated_at: string;
  zip: string;

  insurance: Insurance;
};

export type PatientPayload = {
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  zip: number;
  diagnoses_codes: string;
  conditions: string;
  medications: string;
  drug_allergies: string;
  facility_id: number;
};
