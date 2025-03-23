import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MedicationOrderItem, MedicationOrderItems } from '@/types/medication.type';
import { LabOrderItem, LabOrderItems } from '@/types/lab.type';

interface OrderState {
  labOrders: LabOrderItems;
  medicationOrders: MedicationOrderItems;
}

const initialState: OrderState = {
  labOrders: [],
  medicationOrders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addLabOrder: (state, action: PayloadAction<LabOrderItem>) => {
      state.labOrders.push(action.payload);
    },

    addMedicationOrder: (state, action: PayloadAction<MedicationOrderItem>) => {
      state.medicationOrders.push(action.payload);
    },

    setMedicationQuantity: (state, action: PayloadAction<MedicationOrderItem>) => {
      let pos = -1;
      if ((pos = state.medicationOrders.indexOf(action.payload))) {
        state.medicationOrders[pos] = action.payload;
      } else {
        addMedicationOrder(action.payload);
      }
    },
  },
});

export const { addLabOrder, addMedicationOrder } = orderSlice.actions;
export default orderSlice.reducer;
