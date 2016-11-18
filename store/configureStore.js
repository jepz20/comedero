import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const logger = createLogger();
  const middlewares = [promise];
  if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  };

  console.log(middlewares);
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
