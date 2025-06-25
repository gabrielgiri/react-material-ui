import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Buttons from './Buttons.jsx';
import AppSlider from './AppSlider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Buttons />
    <AppSlider />
  </React.StrictMode>
);

