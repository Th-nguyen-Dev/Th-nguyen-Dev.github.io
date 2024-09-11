import { createSlice } from '@reduxjs/toolkit'

export const timelineToggle = createSlice({
  name: 'timelineToggle',
  initialState: {
    value: null,
  },
  reducers: {
    setTimelineToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTimelineToggle } = timelineToggle.actions

export default timelineToggle.reducer