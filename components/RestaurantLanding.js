import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentsContainer from './CommentsContainer.js';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
  routing: state.routing,
});

class RestaurantLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchRestaurant, routing } = this.props;
    let lastIndex = routing.locationBeforeTransitions.pathname.lastIndexOf('/');
    let restaurantId = routing.locationBeforeTransitions.pathname.substring(lastIndex + 1);
    fetchRestaurant(restaurantId);
  }

  render() {
    const { fetchRestaurant, mainView } = this.props;
    return (
      <section className="landing">
        <div className="landing__content__main">
          <div className="landing__content__main__thumbnail">
            <img src={ mainView.data.image}/>
          </div>
          <div className="landing__content__main__info">
            <div className="landing__content__main__info__title">
              <h1>{ mainView.data.name }</h1>
            </div>
            <div className="landing__content__main__info__rating">RATING: { mainView.data.rating }</div>
            <div className="landing__content__main__info__main-info">
              <h2>
                address:
                <span>
                  { `${mainView.data.address.streetAddress},
                    ${mainView.data.address.city}, ${mainView.data.address.state},
                    ${mainView.data.address.country}`
                  }
                </span>
              </h2>
              <h2>
                Open Hours: <span> { mainView.data.open_hours} </span>
              </h2>
              <h2> Average: <span>{ mainView.data.average_price}</span> </h2>
              <h2> Low: <span>{ mainView.data.low_price}</span> </h2>
              <h2> High: <span>{ mainView.data.high_price}</span> </h2>
              <h2> Categories: </h2>
              { mainView.data.categories.map((c, index) =>
                <div className="card__content__category" key= { index }>
                  { c }
                </div>)
              }
              <h2>
                Open Hours: { mainView.data.open_hours}
              </h2>
              <h2> website: <span>{ mainView.data.website}</span> </h2>
            </div>
            <div className="landing__content__main__info__feature-menu">
              <h4>Feature Menu: </h4>
              <ul>
                { mainView.data.featureMenu.map(menu => (
                  <li key={menu.dish}>
                    <div>
                      <span className="landing__content__main__info__feature-menu__dish">{menu.dish}</span>
                      {' '}
                      (
                      <span className="landing__content__main__info__feature-menu__price">${menu.price}</span>
                      )
                    </div>
                    <div className="landing__content__main__info__feature-menu__description">
                      {menu.description}
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
          </div>
        <div className="landing__content__comments">
            <CommentsContainer comments={ mainView.data.comments } />
        </div>
      </section>
    );
  }
}

RestaurantLanding = connect(mapStateToProps, actions)(RestaurantLanding);
export default RestaurantLanding;
