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
    console.log(this.props);
    console.log(this.state);
    fetchRestaurants();
  }

  render() {
    return (
       <div>
       { this.props.restaurants.map(r => (
           <div key={ r.name }>
            <RestaurantCard restaurant={r}/>
           </div>
         ))
      }
      </div>
    );
  }
};

RestaurantCardsContainer = connect(mapStateToProps, actions)(RestaurantCardsContainer);
export default RestaurantCardsContainer;
