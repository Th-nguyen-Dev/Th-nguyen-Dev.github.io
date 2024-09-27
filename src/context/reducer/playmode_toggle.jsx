import { createSlice } from '@reduxjs/toolkit'

export const playmodeToggle = createSlice({
  name: 'playmodeToggle',
  initialState: {
    value: false,
  },
  reducers: {
    setPlaymodeToggle: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlaymodeToggle } = playmodeToggle.actions

export default playmodeToggle.reducer