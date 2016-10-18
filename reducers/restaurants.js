export default function restaurants(state=[], action) {
  switch (action.type) {
    case 'RECIEVE_RESTAURANTS':
      console.log('RESTAURAAANTS', action);
      return action.response;
    default:
      return state;
  }
}
