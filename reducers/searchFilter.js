export default function searchFilter(state='', action) {
  switch (action.type) {
    case 'APPLY_SEARCH':
      return action.text;
    default:
      return state;
  }
}
