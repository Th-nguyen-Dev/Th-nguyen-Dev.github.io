import { configureStore } from '@reduxjs/toolkit'
import  timelineToggle  from './reducer/timeline_toggle'
import projectToggle from './reducer/project_toggle'
import  introToggle  from './reducer/introduction_toggle'
import  timelineIntroToggle  from './reducer/timelineIntro_toggle'
import projectGraphicToggle from './reducer/project_graphic_toggle'
import playmodeToggle from './reducer/playmode_toggle'
export default configureStore({
  reducer: {
    playmodeToggle: playmodeToggle,
    timelineToggle: timelineToggle,
    projectToggle: projectToggle,
    introToggle: introToggle,
    timelineIntroToggle: timelineIntroToggle,
    projectGraphicToggle: projectGraphicToggle,
  },
})