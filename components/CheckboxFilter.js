import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';
import Checkbox from 'react-bootstrap/lib/Checkbox'

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Checkbox>Texto</Checkbox>
    )
  }
};

export default CheckboxFilter;
