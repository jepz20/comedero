import App from './components/App';
import Content from './components/Content';
import MainSection from './components/MainSection';
import RestaurantLanding from './components/RestaurantLanding';
import configureStore from './store/configureStore';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import 'normalize.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={ store }>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ history }>
      <Route component={ App }>
        <Route  component= { MainSection }>
          <Route path="/restaurant/:id" component= { RestaurantLanding } />
          <Route path="/" component= { Content } />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
