import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

const mapStateToProps = (state) => ({
});

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterType = 'checkbox';
  }

  render() {
    const { data, addFilter, removeFilter, fetchRestaurants, toggleMenu } = this.props;
    const applyFilter = evt => {
      let index = evt.target.value;
      let value = data.items[index];
      let property = data.property;
      if (evt.target.checked) {
        addFilter(property, value, this.filterType);
      } else {
        removeFilter(property, value, this.filterType);
      };

      toggleMenu();
      fetchRestaurants();
    };

    return (
        <FormGroup>
          <ControlLabel>{data.title}</ControlLabel>
          {
            data.items.map((item, index) => (
              <Checkbox key={index} value={index} onChange={ applyFilter }>{item}</Checkbox>
            ))
          }
        </FormGroup>
    );
  }
};
CheckboxFilter = connect(mapStateToProps, actions)(CheckboxFilter);
export default CheckboxFilter;
