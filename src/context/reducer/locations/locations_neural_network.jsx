import { createSlice } from '@reduxjs/toolkit';
import {locationsNeuralNetwork, generate3DCoordinates, generateMovementQuaternions} from './locations_lib';
export const locationsNNDictionary = createSlice({
  name: 'locationsNNDictionary',
  initialState: {
    radius: 5,
    coordinates: locationsNeuralNetwork,
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
export const { regenerateDictionary } = locationsNNDictionary.actions;

export default locationsNNDictionary.reducer;