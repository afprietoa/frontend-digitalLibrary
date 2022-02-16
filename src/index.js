import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Quicksand:300,500,600,700', 'Raleway:500,600,700']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


