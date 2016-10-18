import { combineReducers } from 'redux';
import restaurants from './restaurants';
import visibilityMenu from './visibilityMenu';
import searchFilter from './searchFilter';

export default combineReducers({
  visibilityMenu,
  restaurants,
  searchFilter,
});
