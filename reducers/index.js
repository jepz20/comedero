import { combineReducers } from 'redux';
import restaurants from './restaurants';
import visibilityMenu from './visibilityMenu';
import mainView from './mainView';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  visibilityMenu,
  restaurants,
  mainView,
  routing: routerReducer,
});
