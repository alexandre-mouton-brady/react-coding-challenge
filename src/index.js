import React from 'react';
import 'babel-polyfill';
import { App } from './App';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './styles/index.css';

const isProd = process.env.node === 'production';

render(
  <Router basename={isProd ? '/react-coding-challenge/' : '/'}>
    <App />
  </Router>,
  document.getElementById('root'),
);
