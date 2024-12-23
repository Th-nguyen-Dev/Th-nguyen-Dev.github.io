import { createSlice } from '@reduxjs/toolkit'
export const cameraToggle = createSlice({
    name: 'cameraToggle',
    initialState: {
        zoom_out_right: false,
        zoom_in_right: false,
        zoom_in_middle: false,
        zoom_out_middle: false,
        zoom_in_middle_down: false,
    },
    reducers: {
        setCameraToggle: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCameraToggle } = cameraToggle.actions

export default cameraToggle.reducer