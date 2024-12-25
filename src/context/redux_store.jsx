import { configureStore } from '@reduxjs/toolkit'
import  timelineToggle  from './reducer/timeline_toggle'
import projectToggle from './reducer/project_toggle'
import  introToggle  from './reducer/introduction_toggle'
import  timelineIntroToggle  from './reducer/timelineIntro_toggle'
import projectGraphicToggle from './reducer/project_graphic_toggle'
import playmodeToggle from './reducer/playmode_toggle'
import  cameraToggle  from './reducer/camera_toggle'
import backgroundToggle from './reducer/background_toggle'
import lightRotationValue  from './reducer/directional_light/light_rotation_value'
import lightColorValue from './reducer/directional_light/light_color_value'
import  ambientColorValue  from './reducer/ambient_light/ambient_color_value'
import ambientIntensityValue from './reducer/ambient_light/ambient_intensity_value'
import  locationsTLDictionary  from './reducer/locations/locations_timeline'
import  locationsNNDictionary  from './reducer/locations/locations_neural_network'
export default configureStore({
  reducer: {
    playmodeToggle: playmodeToggle,
    timelineToggle: timelineToggle,
    projectToggle: projectToggle,
    introToggle: introToggle,
    timelineIntroToggle: timelineIntroToggle,
    projectGraphicToggle: projectGraphicToggle,
    cameraToggle: cameraToggle,
    backgroundToggle: backgroundToggle,
    lightRotationValue: lightRotationValue,
    lightColorValue: lightColorValue,
    ambientColorValue: ambientColorValue,
    ambientIntensityValue: ambientIntensityValue,
    locationsTLDictionary: locationsTLDictionary,
    locationsNNDictionary: locationsNNDictionary,
  },
})