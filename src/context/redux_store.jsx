import { configureStore } from "@reduxjs/toolkit";
import cameraToggle from "./reducer/camera_toggle";
import backgroundToggle from "./reducer/background_toggle";
import lightRotationValue from "./reducer/directional_light/light_rotation_value";
import lightColorValue from "./reducer/directional_light/light_color_value";
import ambientColorValue from "./reducer/ambient_light/ambient_color_value";
import ambientIntensityValue from "./reducer/ambient_light/ambient_intensity_value";
import locationsTLDictionary from "./reducer/locations/locations_timeline";
import locationsNNDictionary from "./reducer/locations/locations_neural_network";
import directionalIntensityValue from "./reducer/directional_light/light_intensity_value";
import playmodeToggle from "./reducer/playmode_toggle";
const store = configureStore({
  reducer: {
    cameraToggle: cameraToggle,
    playmodeToggle: playmodeToggle,
    backgroundToggle: backgroundToggle,
    lightRotationValue: lightRotationValue,
    lightColorValue: lightColorValue,
    ambientColorValue: ambientColorValue,
    ambientIntensityValue: ambientIntensityValue,
    locationsTLDictionary: locationsTLDictionary,
    locationsNNDictionary: locationsNNDictionary,
    directionalIntensityValue: directionalIntensityValue,
  },
});

export default store;
