import React, { Suspense, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import TestExport from './test/TestExport.jsx';
import { WebProvider } from './context/web_context';
import './index.css';

const App = () => {
  const renderOutput = useMemo(() => {
    return (
      <>
          <Suspense fallback={null}>
             <OfficialExport />
          </Suspense>
         <MusicPlayer />
      </>
    )
  }, []);
  return (
    <React.StrictMode>
      <WebProvider>
        {/* <EditorExport /> */}
        {renderOutput}
      </WebProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
