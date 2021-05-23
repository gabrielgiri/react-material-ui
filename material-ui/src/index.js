import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Buttons from './Buttons.jsx';
import AppSlider from './AppSlider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Buttons />
    <AppSlider />
  </React.StrictMode>,
  document.getElementById('root')
);

