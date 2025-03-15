import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5.0,
};

export const directionalIntensityValue = createSlice({
  name: "directionalIntensityValue",
  initialState,
  reducers: {
    setDirectionalIntensityValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDirectionalIntensityValue } =
  directionalIntensityValue.actions;
export default directionalIntensityValue.reducer;
