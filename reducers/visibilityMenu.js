
export default function visibilityMenu(state='', action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      if (state === '') {
        state = 'show__menu';
      } else {
        state = '';
      };

      return state;
    default:
      return state;
  }
}
