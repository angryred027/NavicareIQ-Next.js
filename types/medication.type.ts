export type Medication = {
  id: number;
  name: string;
  use: string;
  form: string;
  qty_per_pkg: string;
  price: number;
  vial: string;
  storage: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type MedicationOrderItem = {
  medication: Medication | undefined;
  quantity: number;
};

export type MedicationOrderItems = MedicationOrderItem[];
