import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import toggleReducer from './features/toggleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toggle: toggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
