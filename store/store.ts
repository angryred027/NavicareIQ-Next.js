// store.tsx
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import pageReducer from './features/pageSlice';
import orderReducer from './features/orderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
