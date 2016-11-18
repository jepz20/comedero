export const fetchRestaurants = (filter) => fetch('./data/restaurants.json')
  .then(res => res.json())
  .then(restaurants => {
    if (!filter || filter.length === 0) {
      return restaurants;
    }

    const filterExpression = new RegExp(filter, 'gi');
    return restaurants.filter(r => r.name.match(filterExpression));
  });
