import { combineReducers } from 'redux';
import restaurants from './restaurants';
import visibilityMenu from './visibilityMenu';

export default combineReducers({
  visibilityMenu,
  restaurants,
});
