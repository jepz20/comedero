import React from 'react';
import * as actions from '../actions';
import RestaurantCard from './RestaurantCard';
const mapStateToProps = (state) => ({
  cards: state.cards,
});

class RestaurantCardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [{
        name: 'Baleadas Kennedy',
        image: 'http://www.amawebs.com/storage/photos/o17bj39efnub.jpg',
        categories: [
          'Tipica',
          'Baleada',
          'Capitalino',
        ],
        rating: 3,
        commentsCount: 20,
        average_price: 30.00,
        low_price: 15,
        high_price: 45,
        open_hours: '10:00am - 8:00pm',
        address: {
          country: 'Honduras',
          city: 'Tegucigalpa',
          state: 'Francisco Morazan',
          zipCode: 504,
          streetAddress: 'Colonia Kennedy',
        },
        featureMenu: [
          {
            dish: 'Sencilla',
            price: 17.99,
            originalPrice: 20.99,
            description: 'Baleadita con frijoles y mantequilla',
          },
          {
            dish: 'Queso y Mantequilla',
            price: 20.99,
            originalPrice: 24.99,
            description: 'Baleadita con frijoles, mantequilla y queso',
          },
          {
            dish: 'Con Todo',
            price: 27.99,
            originalPrice: 30.99,
            description: 'Baleadita con frijoles, mantequilla, queso, huevo con chorizo y platano',
          },
        ],
      },
      {
        name: 'Coco Baleadas',
        image: 'https://s3-media4.fl.yelpcdn.com/bphoto/sCN_ngCkL5YifvWm05Gjzg/o.jpg',
        categories: [
          'Tipica con nombre muy largo',
          'Baleada',
          'Catracho',
          'De la costa',
        ],
        rating: 5,
        commentsCount: 10,
        average_price: 60.00,
        low_price: 30,
        high_price: 90,
        open_hours: '9:00am - 8:00pm',
        address: {
          country: 'Honduras',
          city: 'Tegucigalpa',
          state: 'Francisco Morazan',
          zipCode: 504,
          streetAddress: 'Citi Mall',
        },
        featureMenu: [
          {
            dish: 'Chuchi Catracho',
            price: 100.99,
            originalPrice: 110.99,
            description: 'Deliciosa tortilla de harina con carne al gusto, mantequilla y nuestro encurtido especial',
          },
          {
            dish: 'Baby Chop',
            price: 20.99,
            originalPrice: 24.99,
            description: 'Deliciosa tortilla de harina con carne al gusto, mantequilla y nuestro encurtido especial',
          },
          {
            dish: 'Turbo Chilaquil',
            price: 42.99,
            originalPrice: 46.99,
            description: 'Deliciosa tortilla de harina con carne al gusto, mantequilla y nuestro encurtido especial',
          },
        ],
      },
    ],
    };
  }

  render() {
    return (
       <div>
       { this.state.restaurants.map(r => (
           <div key={ r.name }>
            <RestaurantCard restaurant={r}/>
           </div>
         ))
      }
      </div>
    );
  }
};

export default RestaurantCardsContainer;
