import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentsContainer from './CommentsContainer.js';
import FeatureMenu from './FeatureMenu.js';
import StarRatingComponent from 'react-star-rating-component';

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
    const { data } = mainView;
    if (!mainView.data) {
      return (
        <div>Loading...</div>
      );
    };

    if (!data.rateAverage) {
      data.rateAverage = {};
      data.rateAverage.average = 0;
      data.rateAverage.total = 0;
    };

    return (
      <section className="landing">
        <div className="landing__content__main">
          <div className="landing__content__main__thumbnail">
            <img alt={ data.image_description } src={ data.image }/>
          </div>
          <div className="landing__content__main-info">
            <div className="landing__content__main-info__title">
              <h1>{ data.name }</h1>
            </div>
            <div className="landing__content__main-info__rating">
              <StarRatingComponent
                  name="rate1"
                  starCount={ 5 }
                  editing={ false }
                  starColor="#CC0000"
                  value={ Math.round(data.rateAverage.average) }
              />
              {' '}
              <span>
                ({data.rateAverage.total})
              </span>
            </div>
            <div className="landing__content__main-info__detail">
              <h3>Detail </h3>
              <div className="borderline"></div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title">
                  address:
                </div>
                {' '}
                <span className="landing__content__main-info__detail__row__description">
                  { `${data.address.streetAddress},
                  ${data.address.city}, ${data.address.state},
                  ${data.address.country}`
                }
              </span>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title">
                  Open Hours:
                </div>
                <span> { data.open_hours} </span>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title">
                  Price Range:
                </div>
                {' '}
                <span>${ data.low_price} - ${ data.high_price}</span>
              </div>

              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title"> website: </div>
                 <a href={ data.website }>{ data.website }</a>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title"> Categories: </div>
                <div className="landing__content__category__container">
                  { data.categories.map((c, index) =>
                    <div className="landing__content__category" key= { index }>
                      { c }
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureMenu featureMenu= { data.featureMenu }/>
        <div className="landing__content__comments">
            <CommentsContainer comments={ data.comments } />
        </div>
      </section>
    );
  }
}

RestaurantLanding = connect(mapStateToProps, actions)(RestaurantLanding);
export default RestaurantLanding;
