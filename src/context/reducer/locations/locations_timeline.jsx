import { createSlice } from '@reduxjs/toolkit';
import {locationsTimeline, generate3DCoordinates, generateMovementQuaternions} from './locations_lib';
export const locationsTLDictionary = createSlice({
  name: 'locationsTLDictionary',
  initialState: {
    radius: 5,
    coordinates: locationsTimeline,
    coordinates3D: generate3DCoordinates({locations: locationsNeuralNetwork, radius: 5}),
    movementQuaternions: generateMovementQuaternions({locations: locationsNeuralNetwork, radius: 5}),
  },
  reducers: {
    regenerateDictionary: (state, action) => {
        const newRadius = action.payload;
        state.coordinates3D = generate3DCoordinates({locations: state.coordinates, radius: newRadius});
        state.movementQuaternions = generateMovementQuaternions({locations: state.coordinates, radius: newRadius});
    },
  },
});

// Action creators are generated for each case reducer function
export const { regenerateDictionary } = locationsTLDictionary.actions;

export default locationsTLDictionary.reducer;