// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import bootReducer from '@/store/features/bootSlice';

const store = configureStore({
  reducer: {
    boot: bootReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
