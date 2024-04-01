// src/store/bootSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface BootState {
  lng: string;
  test: number;
}

// Define the initial state using that type
const initialState: BootState = {
  lng: 'en',
  test: 0
};

export const bootSlice = createSlice({
  name: 'boot',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<number>) => {
      state.test = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTest } = bootSlice.actions;

export default bootSlice.reducer;
