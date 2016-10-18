import { firebaseDb } from '../utils/firebase';

const restaurantsRef =  firebaseDb.ref('/');
export const fetchRestaurants = (searchFilter='') => (
  dispatch => {
    restaurantsRef.on('value', snapshot=> {
      dispatch({
        type: 'RECEIVE_RESTAURANTS',
        response: snapshot.val(),
        searchFilter,
      });
    });
  }
);

export const receiveRestaurants = response => ({
  type: 'RECEIVE_RESTAURANTS',
  response,
});

export const toggleMenu = visibilityMenu => ({
  type: 'TOGGLE_MENU',
  visibilityMenu,
});

export const applySearch = text => ({
  type: 'APPLY_SEARCH',
  text,
});
