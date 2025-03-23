import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
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

export const loadStoredOrderData = createAsyncThunk('order/loadStoredOrderData', async (_, { rejectWithValue }) => {
  try {
    const serializedState = localStorage.getItem('orderState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return rejectWithValue('Failed to load localStorage.');
  }
});

export const saveOrderStateToLocalStorage = (state: OrderState) => {
  try {
    localStorage.setItem('orderState', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save order state:', error);
  }
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addLabOrder: (state, action: PayloadAction<LabOrderItem>) => {
      state.labOrders.push(action.payload);
      saveOrderStateToLocalStorage(state);
    },

    addMedicationOrder: (state, action: PayloadAction<MedicationOrderItem>) => {
      const previousOrders = state.medicationOrders;
      const payload = action.payload;
      const index = previousOrders.findIndex((order) => order.medication?.id === payload.medication?.id);

      if (index !== -1) {
        state.medicationOrders[index].quantity += payload.quantity;
      } else state.medicationOrders.push(action.payload);
      console.log('Payload: ', action.payload);
      saveOrderStateToLocalStorage(state);
    },

    setMedicationQuantity: (state, action: PayloadAction<MedicationOrderItem>) => {
      const previousOrders = state.medicationOrders;
      const payload = action.payload;
      const index = previousOrders.findIndex((order) => order.medication?.id === payload.medication?.id);

      if (index !== -1) {
        state.medicationOrders[index].quantity = payload.quantity;
      }
      saveOrderStateToLocalStorage(state);
    },

    clearMedicationOrder: (state) => {
      state.medicationOrders = [];
      saveOrderStateToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadStoredOrderData.pending, (state) => {
        state.labOrders = [];
        state.medicationOrders = [];
      })
      .addCase(loadStoredOrderData.fulfilled, (state, action) => {
        if (action.payload) {
          state.labOrders = action.payload.labOrders;
          state.medicationOrders = action.payload.medicationOrders;
        } else {
          state.labOrders = [];
          state.medicationOrders = [];
        }
      })
      .addCase(loadStoredOrderData.rejected, (state, action) => {
        state.labOrders = [];
        state.medicationOrders = [];
      });
  },
});

export const { addLabOrder, addMedicationOrder, setMedicationQuantity, clearMedicationOrder } = orderSlice.actions;
export default orderSlice.reducer;
