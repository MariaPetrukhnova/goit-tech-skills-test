import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-montserrat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-techSkills-test'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);