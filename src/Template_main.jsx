import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import PrototypeUI from './prototype_UI.jsx';
import './index.css';

const App = () => {
  const [showOfficial, setShowOfficial] = useState(true);

  const toggleView = () => {
    setShowOfficial(!showOfficial);
  };

  return (
    <React.StrictMode>
      {showOfficial ? <OfficialExport /> : <EditorExport />}
      <PrototypeUI toogleView={toggleView}/>
      <MusicPlayer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
