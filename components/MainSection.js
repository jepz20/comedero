import React from 'react';
import Content from './Content';
import RestaurantLanding from './RestaurantLanding';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
});

class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
};
MainSection = connect(mapStateToProps, actions)(MainSection);
export default MainSection;
