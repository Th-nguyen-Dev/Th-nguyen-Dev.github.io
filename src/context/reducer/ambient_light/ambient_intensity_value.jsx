import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const ambientIntensityValue = createSlice({
  name: "ambientIntensity",
  initialState,
  reducers: {
    setAmbientIntensityValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAmbientIntensityValue } = ambientIntensityValue.actions;

export default ambientIntensityValue.reducer;
