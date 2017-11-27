import React from 'react';
import 'babel-polyfill';
import { App } from './App';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './styles/index.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
