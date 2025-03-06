import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface pageState {
  loading: boolean;
  error: string | null;

  filters?: Record<string, any>[] | undefined;
  sort?: string | null;
  toggled?: boolean;
}

const initialState: pageState = {
  loading: false,
  error: null,
  filters: [],
  sort: null,
  toggled: false,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setFilters: (state, action: PayloadAction<Record<string, any>[]>) => {
      state.filters = action.payload;
    },

    setSort: (state, action: PayloadAction<string | null>) => {
      state.sort = action.payload;
    },

    setToggle: (state, action: PayloadAction<boolean>) => {
      state.toggled = action.payload;
    },
  },
});

export const { setLoading, setError, setFilters, setSort, setToggle } = pageSlice.actions;
export default pageSlice.reducer;
