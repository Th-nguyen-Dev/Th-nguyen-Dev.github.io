import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Generate3DScene from './Generate3DScene.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Generate3DScene/>
  </React.StrictMode>,
  document.getElementById('root')
)
