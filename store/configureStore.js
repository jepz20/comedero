import { createStore, applyMiddleWare } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  };

  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleWare(...middleware)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
    store.replaceReducer(nextReducer);
  }

  return store;
}
