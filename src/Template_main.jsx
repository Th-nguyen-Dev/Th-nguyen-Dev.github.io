import React, { Suspense, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import EditorExport from './editor/EditorExport.jsx';
import OfficialExport from './official/OfficialExport.jsx';
import MusicPlayer from './music/music_player.jsx';
import TestExport from './test/TestExport.jsx';
import { WebProvider } from './context/web_context';
import redux_store from './context/redux_store.jsx';
import { Provider } from 'react-redux';
import './index.css';

const App = () => {
  return (
    <React.StrictMode>
      <WebProvider>
        <Provider store={redux_store}>
          <Suspense fallback={null}>
             <OfficialExport />
          </Suspense>
         {/* <MusicPlayer /> */}
        </Provider>
      </WebProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement._reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  rootElement._reactRootContainer.render(<App />);
}
