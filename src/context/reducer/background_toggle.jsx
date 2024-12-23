import { createSlice } from '@reduxjs/toolkit'
export const backgroundToggle = createSlice({
    name: 'backgroundToggle',
    initialState: {
        value: false
    },
    reducers: {
        setBackgroundToggle: (state, action) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBackgroundToggle } = backgroundToggle.actions

export default backgroundToggle.reducer
