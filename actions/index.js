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

export const fetchRestaurant = (id) => (
  dispatch => {
    const restaurantsRef =  firebaseDb.ref('/' + id);
    restaurantsRef.on('value', snapshot=> {
      dispatch({
        type: 'RECEIVE_RESTAURANT',
        response: snapshot.val(),
      });
    });
  }
);

export const addComment = (id, comment) => (
  dispatch => {
    const restaurantsRef =  firebaseDb.ref('/' + id + '/comments');
    restaurantsRef.push({
      author: comment.author,
      content: comment.content,
    });
  }
);

export const setCommentCount = (id, commentCount) => (
  dispatch => {
    const restaurantsRef =  firebaseDb.ref('/' + id + '/commentsCount');
    restaurantsRef.set(commentCount);
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

export const addFilter = (property, value, filterType) => ({
  type: 'ADD_FILTER',
  property,
  value,
  filterType,
});

export const removeFilter = (property, value, filterType) => ({
  type: 'REMOVE_FILTER',
  property,
  value,
  filterType,
});

export const applySearch = searchFilter => ({
  type: 'APPLY_SEARCH',
  searchFilter,
});

export const setMainView = (view, data) => ({
  type: 'SET_MAIN_VIEW',
  view,
  data,
});
