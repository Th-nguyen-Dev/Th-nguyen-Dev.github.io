import { createSlice } from '@reduxjs/toolkit'
export const projectToggle = createSlice({
  name: 'projectToggle',
  initialState: {
    value: false,
  },
  reducers: {
    setProjectToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProjectToggle } = projectToggle.actions

export default projectToggle.reducer