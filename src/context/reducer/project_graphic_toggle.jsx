import { createSlice } from '@reduxjs/toolkit'
export const projectGraphicToggle = createSlice({
  name: 'projectGraphicToggle',
  initialState: {
    value: false,
  },
  reducers: {
    setProjectGraphicToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProjectGraphicToggle } = projectGraphicToggle.actions

export default projectGraphicToggle.reducer