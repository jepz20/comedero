import * as api from '../api';

export const toggleMenu = visibilityMenu => ({
  type: 'TOGGLE_MENU',
  visibilityMenu,
});

const getRestaurants = restaurants => ({
  type: 'SET_RESTAURANTS',
  restaurants,
});

export const fetchRestaurants = filter =>
  api.fetchRestaurants(filter)
  .then(restaurants =>
    getRestaurants(restaurants)
  );
