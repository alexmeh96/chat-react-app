import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import Popper from 'popper.js';

import "./static/css/magnific-popup.css"
import "./static/css/owl.carousel.min.css"
import "./static/css/owl.theme.default.min.css"
// import 'owl.carousel/dist/assets/owl.carousel.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-dark.min.css';

import "./static/css/bootstrap-dark.min.css"
import "./static/css/bootstrap.min.css"
import "./static/css/icons.min.css"
import "./static/css/app-dark.min.css"
import "./static/css/app.min.css"

import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./static/js/owl.carousel.min"

// import "./static/js/bootstrap.bundle.min"
// import "./static/js/waves.min"
// import "./static/js/simplebar.min"

import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.

import 'owl.carousel';

// import 'simplebar/dist/simplebar.css';

import "./data/index.js"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
