import { createSlice } from '@reduxjs/toolkit'

export const lightRotationValue = createSlice({
    name: 'lightRotationValue',
    initialState: {
        value: 0.0
    },
    reducers: {
        setLightRotationValue: (state, action) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLightRotationValue } = lightRotationValue.actions

export default lightRotationValue.reducer
