import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import './index.css';

const App = () => {
  const [showOfficial, setShowOfficial] = useState(true);

  const toggleView = () => {
    setShowOfficial(!showOfficial);
  };

  return (
    <React.StrictMode>
      <div style={{ 
        background: "transparent", 
        position: "absolute", 
        left: "30%", 
        top: "50%", 
        transform: "translate(-50%, -50%)",
        width: "40%", 
        height: "100%", 
        zIndex: 10, 
        color: "white",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Source Code Pro",
        fontSize: "2em"
      }}>
        Hi there.
        <br />
        This is my personal website. I'm currently working on it!
      </div>
      <div style={{ 
        position: "absolute", 
        left: "20%", 
        top: "60%", 
        transform: "translate(-50%, -50%)",
        width: "20%", 
        height: "100%", 
        zIndex: 9999, 
        color: "white",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Source Code Pro",
        fontSize: "2em"
      }}>
        <button onClick={toggleView}>
          {showOfficial ? 'Switch to Editor' : 'Switch to Official'}
        </button>
      </div>
      {showOfficial ?  <OfficialExport />  : <EditorExport /> }
      <MusicPlayer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
