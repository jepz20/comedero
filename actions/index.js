import { firebaseDb } from '../utils/firebase';

const restaurantsRef =  firebaseDb.ref('/');
export const fetchRestaurants = () => (
  dispatch => {
    restaurantsRef.on('value', snapshot=> {
      dispatch({
        type: 'RECEIVE_RESTAURANTS',
        response: snapshot.val(),
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

export const addFilter = (property, value) => ({
  type: 'ADD_FILTER',
  property,
  value,
});

export const removeFilter = (property, value) => ({
  type: 'REMOVE_FILTER',
  property,
  value,
});

export const applySearch = searchFilter => ({
  type: 'APPLY_SEARCH',
  searchFilter,
});
