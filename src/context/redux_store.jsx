import { configureStore } from '@reduxjs/toolkit'
import  timelineToggle  from './reducer/timeline_toggle'
export default configureStore({
  reducer: {
    timelineToggle: timelineToggle,
  },
})