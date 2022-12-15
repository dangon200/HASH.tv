import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { HMSRoomProvider } from '@100mslive/react-sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </React.StrictMode>
);