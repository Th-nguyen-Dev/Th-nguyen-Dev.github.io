import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    h: 0,    // hue (0-360)
    s: 0,    // saturation (0-100)
    l: 100,  // lightness (0-100)
};

export const ambientColorValue = createSlice({
    name: 'ambientColor',
    initialState,
    reducers: {
        setAmbientColorValue: (state, action) => {
            const { h, s, l } = action.payload;
            state.h = h;
            state.s = s;
            state.l = l;
        }
    }
});

export const { setAmbientColorValue } = ambientColorValue.actions;
export default ambientColorValue.reducer;