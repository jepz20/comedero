import App from './components/App';
import configureStore from './store/configureStore';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

const store = configureStore();
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
