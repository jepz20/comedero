import React from 'react';
import Content from './Content';
import RestaurantLanding from './RestaurantLanding';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
});

class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainView } = this.props;
    console.log(mainView);
    switch (mainView.view) {
      case 'search':
        return (
          <section className="main">
          <Content />
          </section>
        );
      case 'restaurantLanding':
        return (
          <RestaurantLanding data={mainView.data}/>
        );
      default:
        return (
          <section className="main">
          <Content />
          </section>
        );
    }
  }
};
MainSection = connect(mapStateToProps, actions)(MainSection);
export default MainSection;
