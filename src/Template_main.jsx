import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import PrototypeUI from './prototype_UI.jsx';
import TestExport from './test/TestExport.jsx';
import { WebProvider } from './context/web_context';
import './index.css';

const App = () => {

  return (
    <React.StrictMode>
      <WebProvider>
        {/* <EditorExport /> */}
        <Suspense fallback={null}>
          <OfficialExport />
        </Suspense>
        <MusicPlayer />
      </WebProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
