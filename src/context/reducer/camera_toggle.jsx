import { createSlice } from '@reduxjs/toolkit'
export const cameraToggle = createSlice({
    name: 'cameraToggle',
    initialState: {
        availableToggle: ['zoom_in_right', 'zoom_out_right', 'zoom_in_middle', 'zoom_out_middle', 'zoom_in_middle_down', 'default'],
        cameraToggle: 'default',
    },
    reducers: {
        setCameraToggle: (state, action) => {
            if (state.availableToggle.includes(action.payload)) {
                state.cameraToggle = action.payload;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCameraToggle } = cameraToggle.actions

export default cameraToggle.reducer