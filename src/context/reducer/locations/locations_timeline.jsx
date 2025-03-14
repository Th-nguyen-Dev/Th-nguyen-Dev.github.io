import { createSlice } from '@reduxjs/toolkit';
import { locationsTimeline, generate3DCoordinates, generateMovementQuaternions } from './locations_lib';
import * as THREE from 'three';

export const locationsTLDictionary = createSlice({
  name: 'locationsTLDictionary',
  initialState: {
    radius: 5,
    cameraVec: {x: -5.25, y: 0,z: 35},
    coordinates: locationsTimeline,
    coordinates3D: generate3DCoordinates({locations: locationsTimeline, radius: 5}),
    movementQuaternions: generateMovementQuaternions({locations: locationsTimeline, endVec: {x: -5.25, y: 0,z: 35}, radius: 5}),
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
export const { regenerateDictionary } = locationsTLDictionary.actions;

export default locationsTLDictionary.reducer;