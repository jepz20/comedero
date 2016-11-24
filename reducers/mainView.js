// TODO Change for default search and data empty
const defaultState = {
  view: 'main',
  data: {
    address: {},
    categories: [],
    featureMenu: [],
    comments: {},
  },
};

export default function(state=defaultState, action) {
  switch (action.type) {
    case 'SET_MAIN_VIEW':
      return {
        ...state,
        view: action.view,
        data: action.data,
      };
    case 'RECEIVE_RESTAURANT':
      return {
        ...state,
        data: action.response,
      }
    default:
      return state;
  }
};
