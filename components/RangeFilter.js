import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
const mapStateToProps = () => ({
});

class RangeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterType = 'range';
    this.state = {
      minVal: '',
      maxVal: '',
    };
  }

  render() {
    const { data, addFilter, fetchRestaurants, toggleMenu, removeFilter } = this.props;
    const applyFilter = () => {
      if (this.state.minVal.length > 0 &&
        this.state.maxVal.length > 0
      ) {
        addFilter(data.property, [this.state.minVal, this.state.maxVal], this.filterType);
      } else {
        removeFilter(data.property, [this.state.minVal, this.state.maxVal], this.filterType);
      }

      toggleMenu();
      fetchRestaurants();
    };

    return (
      <div>
        <div style={{fontWeight: 700, paddingBottom: '10px'}}>
          {data.title}
        </div>
        <Form inline>
          <FormGroup bsStyle="inline" controlId="fromRange">
            <ControlLabel>$ </ControlLabel>
            {' '}
            <FormControl
              type="text"
              bsStyle="small"
              value={this.state.minVal}
              onChange={e => {this.setState({ minVal: e.target.value });}}

            />
          </FormGroup>
          {' to '}
          <FormGroup bsStyle="inline" controlId="toRange">
            <ControlLabel>$ </ControlLabel>
            {' '}
            <FormControl
              type="text"
              bsStyle="small"
              value={this.state.maxVal}
              onChange={e => {this.setState({ maxVal: e.target.value });}}

            />
          </FormGroup>
          {' '}
          <Button onClick={applyFilter} bsStyle="default"> >> </Button>
        </Form>
      </div>
    );
  }
};

RangeFilter = connect(mapStateToProps, actions)(RangeFilter);
export default RangeFilter;
