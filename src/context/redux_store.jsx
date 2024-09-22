import { configureStore } from '@reduxjs/toolkit'
import  timelineToggle  from './reducer/timeline_toggle'
import projectToggle from './reducer/project_toggle'
export default configureStore({
  reducer: {
    timelineToggle: timelineToggle,
    projectToggle: projectToggle,
  },
})