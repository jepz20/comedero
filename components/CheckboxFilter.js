import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';
import Checkbox from 'react-bootstrap/lib/Checkbox'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <FormGroup>
          <ControlLabel>Cousine</ControlLabel>
          <Checkbox>Honduran</Checkbox>
          <Checkbox>Baleada</Checkbox>
          <Checkbox>Italian</Checkbox>
        </FormGroup>
    )
  }
};

export default CheckboxFilter;
