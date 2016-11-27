import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Panel from 'react-bootstrap/lib/Panel';
import { hashHistory } from 'react-router';

const mapStateToProps = (state) => ({
  visibilityMenu: state.visibilityMenu,
});

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurant, setMainView } = this.props;
    const goToRestaurantLanding = () => {
      setMainView('restaurantLanding', restaurant);
      hashHistory.push('/restaurant/' + restaurant.key);
    };

    const handleEnter = evt => {
      if (evt.key === 'Enter') {
        goToRestaurantLanding();
      }
    };

    if (!restaurant.rateAverage) {
      restaurant.rateAverage = {};
      restaurant.rateAverage.average = 0;
      restaurant.rateAverage.total = 0;
    };

    return (
      <Panel>
      <div
        tabIndex="0"
        className="card"
        onClick={ goToRestaurantLanding } onKeyPress={ handleEnter }>
        <img alt={restaurant.image_description} src={restaurant.image} className="card__hero"></img>
        <div className="card__content">
          <h1>{restaurant.name}</h1>
          <div className="card__content__stats_container">
            <div className="card__content__stats">
              {restaurant.commentsCount}
              {' '}
              <i className="material-icons md-12">comment</i>
            </div>
            <div className="card__content__stats">
              {Math.round(restaurant.rateAverage.average)}
              {' '}
              <i className="material-icons md-12">grade</i>
            </div>
            <div className="card__content__stats">
              <i className="material-icons md-12">access_time</i>
              {' '}
              {`${restaurant.open_hours}`}
            </div>
            <div className="card__content__stats sm-500">
              {`Range: $${restaurant.low_price} - $${restaurant.high_price}`}
            </div>

          </div>
          <div>{restaurant.address.streetAddress},
            {restaurant.address.city},
            {restaurant.address.state}
          </div>
          <div className="card__content__feature-menu">
            <h4>Feature Menu: </h4>
            <ul>
              { restaurant.featureMenu.map(menu => (
                <li key={menu.dish}>
                  <div>
                    <span className="card__content__feature-menu__dish">{menu.dish}</span>
                    {' '}
                    (
                    <span className="card__content__feature-menu__price">${menu.price}</span>
                    )
                  </div>
                  <div className="card__content__feature-menu__description">
                    {menu.description}
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
        <div className="card__content__category__container">
          { restaurant.categories.map(category => (
              <div key={category} className="card__content__category">{category}</div>
          ))

          }
        </div>
      </div>
      </Panel>
    );
  }
}

RestaurantCard = connect(mapStateToProps, actions)(RestaurantCard);
export default RestaurantCard;
