import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Buttons from './Buttons.jsx';
import AppSlider from './AppSlider.jsx';
import Images from './Images.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Buttons />
    <AppSlider />
     <Images />
  </React.StrictMode>
);

