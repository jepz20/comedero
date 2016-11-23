import React from 'react';
import { connect } from 'react-redux';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import * as actions from '../actions';
import LeftSideSection from './LeftSideSection';
import Button from 'react-bootstrap/lib/Button';

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
        <LeftSideSection />
        <div className={'card__container '  + visibilityMenu}>
          <div className="content__filter__btn md-700">
            <Button onClick={toggleMenu} bsStyle="primary">Filter</Button>
          </div>
          <RestaurantCardsContainer />
        </div>
      </section>
    );
  }
};

Content = connect(mapStateToProps, actions)(Content);
export default Content;
