import { firebaseDb } from '../utils/firebase';

const restaurantsRef =  firebaseDb.ref('/');
export const fetchRestaurants = () => (
  dispatch => {
    restaurantsRef.on('value', snapshot=> {
      dispatch({
        type: 'RECIEVE_RESTAURANTS',
        response: snapshot.val()
      });
    });
  }
)

export const receiveRestaurants = response => ({
  type: 'RECIEVE_RESTAURANTS',
  response,
});

export const toggleMenu = visibilityMenu => ({
  type: 'TOGGLE_MENU',
  visibilityMenu,
});
