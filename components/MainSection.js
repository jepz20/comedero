import React from 'react';
import Content from './Content';
import RestaurantLanding from './RestaurantLanding';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
});

// <Provider store={ store }>
//   <Router history={ browserHistory }>
//     <Route path="/" component={ App } />
//   </Router>
// </Provider>,

class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ browserHistory }>
      <section className="main">
          <Route path="/" component={ Content } />
          <Route path="restaurant/:id" component={ RestaurantLanding } />
      </section>
    </Router>
    )
    // const { mainView } = this.props;
    // console.log(mainView);
    // switch (mainView.view) {
    //   case 'search':
    //     return (
    //       <section className="main">
    //       <Content />
    //       </section>
    //     );
    //   case 'restaurantLanding':
    //     return (
    //       <RestaurantLanding data={mainView.data}/>
    //     );
    //   default:
    //     return (
    //       <section className="main">
    //       <Content />
    //       </section>
    //     );
    // }
  }
};
MainSection = connect(mapStateToProps, actions)(MainSection);
export default MainSection;
