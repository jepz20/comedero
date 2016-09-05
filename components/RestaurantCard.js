import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Panel from 'react-bootstrap/lib/Panel';

const mapStateToProps = (state) => ({
  visibilityMenu: state.visibilityMenu,
});

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <Panel>
      <div className="card">
        <img src={restaurant.image} className="card__hero"></img>
        <div className="card__content">
          <h1>{restaurant.name}</h1>
          <div className="card__content__stats_container">
            <div className="card__content__stats">
              {restaurant.commentsCount}
              {' '}
              <i className="material-icons md-12">comment</i>
            </div>
            <div className="card__content__stats">
              {restaurant.rating}
              {' '}
              <i className="material-icons md-12">grade</i>
            </div>
            <div className="card__content__stats">
              <i className="material-icons md-12">access_time</i>
              {' '}
              {`${restaurant.open_hours}`}
            </div>
            <div className="card__content__stats sm-500">
              {`Average: $${restaurant.average_price}`}
            </div>

          </div>
          <div>{restaurant.address.streetAddress}, {restaurant.address.city}, {restaurant.address.state}</div>
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
          { restaurant.categories.map( category => (
              <div className="card__content__category">{category}</div>
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
