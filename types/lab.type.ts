export type Lab = {
  id: number;
  name: string;
  description?: string;
  price: number;
  type?: string;
  code?: string;
  lab_tests?: LabTest[];
  created_at?: string;
  updated_at?: string;
};

export type LabTest = {
  id: number;
  code?: string;
  description?: string;
  name: string;
  created_at?: string;
  updated_at?: string;
};

export type LabOrderItem = {
  lab: Lab | undefined;
  ordered_date?: string;
};

export type LabOrderItems = {
  labOrders: LabOrderItem[] | undefined;
};
