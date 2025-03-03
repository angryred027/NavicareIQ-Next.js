import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface toggleState {
  toggled: boolean;
}

const initialState: toggleState = { toggled: false };

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.toggled = action.payload;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
