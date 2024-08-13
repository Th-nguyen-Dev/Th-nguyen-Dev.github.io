import React from 'react'
import ReactDOM from 'react-dom/client'
import Generate3DScene from './Generate3DScene.jsx';
import MusicPlayer from './music/music_player.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Generate3DScene/>
    <MusicPlayer/>
  </React.StrictMode>,
  document.getElementById('root')
)
