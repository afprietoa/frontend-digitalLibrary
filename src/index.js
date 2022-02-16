import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Quicksand:300,500,600,700', 'Raleway:500,600,700']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


