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
    if (!mainView.data) {
      return (
        <div>Loading...</div>
      );
    };

    if (!mainView.data.rateAverage) {
      mainView.data.rateAverage = {};
      mainView.data.rateAverage.average = 0;
      mainView.data.rateAverage.total = 0;
    };
    return (
      <section className="landing">
        <div className="landing__content__main">
          <div className="landing__content__main__thumbnail">
            <img alt="" src={ mainView.data.image}/>
          </div>
          <div className="landing__content__main-info">
            <div className="landing__content__main-info__title">
              <h1>{ mainView.data.name }</h1>
            </div>
            <div className="landing__content__main-info__rating">
              <StarRatingComponent
                  name="rate1"
                  starCount={ 5 }
                  editing={ false }
                  starColor="#CC0000"
                  value={ Math.round(mainView.data.rateAverage.average) }
              />
              {' '}
              <span>
                ({mainView.data.rateAverage.total})
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
                  { `${mainView.data.address.streetAddress},
                  ${mainView.data.address.city}, ${mainView.data.address.state},
                  ${mainView.data.address.country}`
                }
              </span>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title">
                  Open Hours:
                </div>
                <span> { mainView.data.open_hours} </span>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title">
                  Price Range:
                </div>
                {' '}
                <span>${ mainView.data.low_price} - ${ mainView.data.high_price}</span>
              </div>

              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title"> website: </div>
                 <a href={ mainView.data.website }>{ mainView.data.website }</a>
              </div>
              <div className="landing__content__main-info__detail__row">
                <div className="landing__content__main-info__detail__row__title"> Categories: </div>
                <div className="landing__content__category__container">
                  { mainView.data.categories.map((c, index) =>
                    <div className="landing__content__category" key= { index }>
                      { c }
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureMenu featureMenu= { mainView.data.featureMenu }/>
        <div className="landing__content__comments">
            <CommentsContainer comments={ mainView.data.comments } />
        </div>
      </section>
    );
  }
}

RestaurantLanding = connect(mapStateToProps, actions)(RestaurantLanding);
export default RestaurantLanding;
