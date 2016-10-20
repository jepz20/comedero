import * as actions from '../actions';
import { contains } from 'lodash';

const defaultState = {
  items: [],
  searchFilter: '',
  filters: {},
  loading: true,
};

export default function restaurants(state=defaultState, action) {
  let items;
  let filters;
  switch (action.type) {
    case 'RECEIVE_RESTAURANTS':
      if (state.searchFilter.length === 0) {
        items = action.response;
      } else {
        items = action.response.filter(r => (
          r.name.toLowerCase().indexOf(state.searchFilter.toLowerCase()) !== -1
        ));
      };

      if (Object.keys(state.filters).length > 0) {
        items  = items.reduce((allItems, currentItem) => {
          let isMatch = false;
          for (let key in state.filters) {
            let match = currentItem;
            let allKeys = key.split('.');
            allKeys.forEach(k => {
              match = match[k];
            });
            if (match instanceof Array) {
              isMatch = state.filters[key].some(filter => match.indexOf(filter) > -1);
            } else {
              isMatch = state.filters[key].indexOf(match) > -1;
            };

            if (isMatch) {
              allItems.push(currentItem);
              break;
            };
          };

          return allItems;
        }, []);
      };

      return { ...state, items, loading: false };
    case 'ADD_FILTER':
      filters = { ...state.filters };
      if (action.property in filters) {
        filters[action.property].push(action.value);
      } else {
        filters[action.property] = [action.value];
      };

      return { ...state, filters };
    case 'REMOVE_FILTER':
      filters = { ...state.filters };
      if (action.property in filters) {
        let index = filters[action.property].indexOf(action.value);
        filters[action.property].splice(index, 1);
      };

      if (filters[action.property].length === 0) {
        delete filters[action.property];
      };

      return { ...state, filters };
    case 'APPLY_SEARCH':
      return { ...state, searchFilter: action.searchFilter };
    default:
      return state;
  }
}
