// TODO Change for default search and data empty
const defaultState = {
  view: 'restaurantLanding',
  data: {
      "address": {
        "city": "Tegucigalpa",
        "country": "Honduras",
        "state": "Francisco Morazan",
        "streetAddress": "Colonia Kennedy",
        "zipCode": 504
      },
      "average_price": 30,
      "categories": [
        "Tipica",
        "Baleada",
        "Capitalino"
      ],
      "commentsCount": 20,
      "featureMenu": [
        {
          "description": "Baleadita con frijoles y mantequilla",
          "dish": "Sencilla",
          "originalPrice": 20.99,
          "price": 17.99
        },
        {
          "description": "Baleadita con frijoles, mantequilla y queso",
          "dish": "Queso y Mantequilla",
          "originalPrice": 24.99,
          "price": 20.99
        },
        {
          "description": "Baleadita con frijoles, mantequilla, queso, huevo con chorizo y platano",
          "dish": "Con Todo",
          "originalPrice": 30.99,
          "price": 27.99
        }
      ],
      "high_price": 45,
      "image": "http://www.amawebs.com/storage/photos/o17bj39efnub.jpg",
      "key": 1,
      "low_price": 15,
      "name": "Baleadas Kennedy",
      "open_hours": "10:00am - 8:00pm",
      "rating": 3
  },
};

export default function(state=defaultState, action) {
  switch (action.type) {
    case 'SET_MAIN_VIEW':
      return { ...state,
        view: action.view,
        data: action.data,
      };
    default:
      return state;
  }
};
