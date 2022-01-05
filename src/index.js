import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./static/css/magnific-popup.css"
import "./static/css/owl.carousel.min.css"
import "./static/css/owl.theme.default.min.css"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-dark.min.css';

import "./static/css/bootstrap-dark.min.css"
import "./static/css/bootstrap.min.css"
import "./static/css/icons.min.css"
import "./static/css/app-dark.min.css"
import "./static/css/app.min.css"

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'simplebar';
import 'owl.carousel';

import "./data/index.js"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
