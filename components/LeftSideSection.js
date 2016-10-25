import { connect } from 'react-redux';
import CheckboxFilter from './CheckboxFilter';
import RangeFilter from './RangeFilter';
import * as actions from '../actions';
import React from 'react';

const mapStateToProps = (state) =>({
  visibilityMenu: state.visibilityMenu,
});

class LeftSideSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visibilityMenu } = this.props;
    let cousineFilter = {};
    cousineFilter.title = 'Cousine';
    cousineFilter.items = ['Tipica', 'Catracho', 'Capitalino'];
    cousineFilter.property = 'categories';

    let cityFilter = {};
    cityFilter.title = 'City';
    cityFilter.items = ['Tegucigalpa', 'Egkomi', 'Ceiba'];
    cityFilter.property = 'address.city';

    let priceFilter = {};
    priceFilter.title = 'Price';
    priceFilter.property = 'low_price,high_price';

    return (
      <section className={'left__side ' + visibilityMenu}>
        <CheckboxFilter data={cousineFilter}></CheckboxFilter>
        <CheckboxFilter data={cityFilter}></CheckboxFilter>
        <RangeFilter data={priceFilter}></RangeFilter>
      </section>
    );
  }
}

LeftSideSection = connect(mapStateToProps, actions)(LeftSideSection);
export default LeftSideSection;
