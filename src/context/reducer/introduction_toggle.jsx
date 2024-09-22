import { createSlice } from '@reduxjs/toolkit'
export const introToggle = createSlice({
  name: 'introToggle',
  initialState: {
    value: false,
  },
  reducers: {
    setIntroToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIntroToggle } = introToggle.actions

export default introToggle.reducer