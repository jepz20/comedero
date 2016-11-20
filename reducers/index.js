import { combineReducers } from 'redux';
import restaurants from './restaurants';
import visibilityMenu from './visibilityMenu';
import mainView from './mainView';

export default combineReducers({
  visibilityMenu,
  restaurants,
  mainView,
});
