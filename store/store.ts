import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import toggleReducer from './features/toggleSlice';
import pageReducer from './features/pageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
