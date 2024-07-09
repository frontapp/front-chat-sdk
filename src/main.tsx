import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App.tsx';
import EmbeddedApp from './EmbeddedApp.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EmbeddedApp />
    {/* <App /> */}
  </React.StrictMode>
);
