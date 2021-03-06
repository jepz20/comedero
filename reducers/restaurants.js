const defaultState = {
  items: [],
  searchFilter: '',
  filters: {},
  loading: true,
};

const getKeyValue = (key, item) => {
  let value = item;
  let allKeys = key.split('.');
  allKeys.forEach(k => {
    value = value[k];
  });

  return value;
};

const checkMatch = (state, key, item) => {
  let match = getKeyValue(key, item);
  if (match instanceof Array) {
    return state.filters[key].some(filter => match.indexOf(filter) > -1);
  } else {
    return state.filters[key].indexOf(match) > -1;
  };
};

const checkMatchRange = (state, key, item) => {
  let keys = key.split(',');
  let matchLow = getKeyValue(keys[0], item);
  let matchHigh = getKeyValue(keys[1], item);
  console.log(matchLow, matchHigh);
  console.log(state.filters[key][0][0], state.filters[key][0][1]);
  return state.filters[key][0][0] >= matchLow &&
    state.filters[key][0][1] <= matchHigh;
};

export default function restaurants(state=defaultState, action) {
  let items;
  let filters;
  switch (action.type) {
    case 'RECEIVE_RESTAURANTS':
      if (state.searchFilter.length === 0) {
        items = action.response;
      } else {
        let possibleItems = action.response;
        items = Object.keys(action.response).reduce((allItems, current) => {
          let name = possibleItems[current].name.toLowerCase();
          if (name.indexOf(state.searchFilter.toLowerCase()) !== -1) {
            allItems[current] = possibleItems[current];
          };

          return allItems;
        }, {});

      };

      let unMatchItems = [];
      if (Object.keys(state.filters).length > 0) {
        items  = Object.keys(items).reduce((allItems, currentItem) => {
          let isMatch = false;
          for (let key in state.filters) {
            if (key.indexOf(',') > -1) {
              isMatch = checkMatchRange(state, key, items[currentItem]);
            } else {
              isMatch = checkMatch(state, key, items[currentItem]);
            }

            if (isMatch) {
              if (!allItems[currentItem]) {
                allItems[currentItem] = items[currentItem];
              }
            } else {
              delete allItems[currentItem];
            };
          };

          return allItems;
        }, {});
      };

      return { ...state, items, loading: false };
    case 'ADD_FILTER':
      filters = { ...state.filters };
      if (action.property in filters) {
        if (action.filterType === 'range') {
          filters[action.property] = [action.value];
        } else {
          filters[action.property].push(action.value);
        }

      } else {
        filters[action.property] = [action.value];
      };

      return { ...state, filters };
    case 'REMOVE_FILTER':
      filters = { ...state.filters };
      if (action.property in filters) {
        let index = filters[action.property].indexOf(action.value);
        filters[action.property].splice(index, 1);

        if (filters[action.property].length === 0 || action.filterType === 'range') {
          delete filters[action.property];
        };

      };

      return { ...state, filters };
    case 'CLEAR_ALL_FILTERS':
      return { ...state, filters: {} };

    case 'APPLY_SEARCH':
      return { ...state, searchFilter: action.searchFilter };
    default:
      return state;
  }
}
