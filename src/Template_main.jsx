import React from 'react'
import ReactDOM from 'react-dom/client'
import CanvasExport from './Canvas.jsx';
import MusicPlayer from './music/music_player.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasExport/>
    <MusicPlayer/>
  </React.StrictMode>
)
