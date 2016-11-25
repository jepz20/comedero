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
    const commentsRef =  firebaseDb.ref('/' + id + '/comments');
    const ratingsRef =  firebaseDb.ref('/' + id + '/ratings');
    if (comment.content) {
      commentsRef.push({
        author: comment.author,
        content: comment.content,
        date: (new Date).getTime(),
      });
      const commentsCountRef =  firebaseDb.ref('/' + id + '/commentsCount');
      commentsCountRef.transaction(function (currentValue) {
        return (currentValue || 0) + 1;
      });
    }

    if (comment.rate) {
      ratingsRef.push({
        author: comment.author,
        rate: comment.rate,
        date: (new Date).getTime(),
      });
      const rateAverageRef =  firebaseDb.ref('/' + id + '/rateAverage');
      rateAverageRef.transaction(function (currentValue) {
        const calculateNewAverage = (total, average, newValue) => {
          let previousSum = total * average;
          let newSum = previousSum + newValue;
          let newTotal = total + 1;
          return newSum / newTotal;
        };

        if (!currentValue || !currentValue.total || !currentValue.average) {
          return {
            total: 1,
            average: comment.rate,
          };
        } else {
          return {
            total: currentValue.total + 1,
            average: calculateNewAverage(currentValue.total, currentValue.average, comment.rate),
          };
        }

        return (currentValue || 0) + 1;
      });

    }

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

export const clearAllFilters = visibilityMenu => ({
  type: 'CLEAR_ALL_FILTERS',
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
