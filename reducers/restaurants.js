const defaultState = [];

export default function restaurants(state=defaultState, action) {
  switch (action.type) {
    case 'RECIEVE_RESTAURANTS':
      console.log('RESTAURAAANTS', action);
      return action.response;
    default:
      return state;
  }
}
