import React, { Suspense, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import TestExport from './test/TestExport.jsx';
import { WebProvider } from './context/web_context';
import redux_store from './context/redux_store.jsx';
import { Provider } from 'react-redux';
import Header from './UI/Header.jsx';
import './index.css';
import { Loader } from '@react-three/drei';
import FakeLoadScreen from './UI/FakeLoadScreen.jsx';
const App = () => {
  return (
    <React.StrictMode>
        <div className="absolute top-0 left-0  w-full h-full ">
          <WebProvider>
            <Provider store={redux_store}>
                <OfficialExport />
                {/* <EditorExport /> */}
            {/* <MusicPlayer /> */}
            <Header />
            <FakeLoadScreen />
            </Provider>
          </WebProvider>
          
        </div>
        
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
