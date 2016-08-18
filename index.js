import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import App from './components/App';
// import { fetchStops } from './api';
import configureStore from './store/configureStore';
import 'normalize.css';

const store = configureStore();
render(
  <Provider store={store}>
  // <App />
  </Provider>,
  document.getElementById('root')
);
