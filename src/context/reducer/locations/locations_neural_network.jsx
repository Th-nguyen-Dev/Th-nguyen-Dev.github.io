import { createSlice } from '@reduxjs/toolkit';
import { locationsNeuralNetwork, generate3DCoordinates, generateMovementQuaternions } from './locations_lib';
import * as THREE from 'three';

export const locationsNNDictionary = createSlice({
  name: 'locationsNNDictionary',
  initialState: {
    radius: 5,
    cameraVec: {x: 32.00, y: 0, z: 8.50},
    coordinates: locationsNeuralNetwork,
    coordinates3D: generate3DCoordinates({locations: locationsNeuralNetwork, radius: 5}),
    movementQuaternions: generateMovementQuaternions({locations: locationsNeuralNetwork, endVec: {x: 32.00, y: 0, z: 8.50} , radius: 5}),
  },
  reducers: {
    regenerateDictionary: (state, action) => {
        const newRadius = action.payload;
        state.coordinates3D = generate3DCoordinates({locations: state.coordinates, radius: newRadius});
        state.movementQuaternions = generateMovementQuaternions({locations: state.coordinates, endVec: state.cameraVec, radius: newRadius});
    },
  },
});

// Action creators are generated for each case reducer function
export const { regenerateDictionary } = locationsNNDictionary.actions;

export default locationsNNDictionary.reducer;