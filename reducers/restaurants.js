import * as actions from '../actions';

const defaultState = {
  items: [],
  searchFilter: '',
};

export default function restaurants(state=defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_RESTAURANTS':
      let items;
      if (action.searchFilter === '') {
        items = action.response;
      } else {
        items = action.response.filter(r => (
          r.name.toLowerCase().indexOf(action.searchFilter.toLowerCase()) !== -1
        ));
      };

      return { ...state, items, searchFilter: action.searchFilter };
    default:
      return state;
  }
}
