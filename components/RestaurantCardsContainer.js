import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import RestaurantCard from './RestaurantCard';

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

class RestaurantCardsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchRestaurants } = this.props;
    fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    if (restaurants.items.length === 0 && !restaurants.loading) {
      return (
        <div className="message_center">No Results Found :(</div>
      );
    }

    return (
       <div>
       { Object.keys(restaurants.items).map(r => (
           <div key={restaurants.items[r].name}>
            <RestaurantCard restaurant={restaurants.items[r]}/>
           </div>
         ))
      }
      </div>
    );
  }
};

RestaurantCardsContainer = connect(mapStateToProps, actions)(RestaurantCardsContainer);
export default RestaurantCardsContainer;
