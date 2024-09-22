import { createSlice } from '@reduxjs/toolkit'
export const timelineIntroToggle = createSlice({
  name: 'timelineIntroToggle',
  initialState: {
    value: false,
  },
  reducers: {
    setTimelineIntroToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTimelineIntroToggle } = timelineIntroToggle.actions

export default timelineIntroToggle.reducer