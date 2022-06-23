import React from 'react';
import ReactDOM from 'react-dom/client';

// Firebase
import './firebase';

// CSS
import './index.css';

import { MainRouter } from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
