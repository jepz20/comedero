import React from 'react';
import { connect } from 'react-redux';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  visibilityMenu: state.visibilityMenu,
});

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleMenu, visibilityMenu } = this.props;

    return (
      <section className="content">
        <div className={'card__container ' + visibilityMenu}>
          <button onClick={toggleMenu}>Show Menu</button>
          <RestaurantCardsContainer />
        </div>
      </section>
    );
  }
};

Content = connect(mapStateToProps, actions)(Content);
export default Content;
