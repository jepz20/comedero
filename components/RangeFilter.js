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
    const { data, addFilter } = this.props;
    const applyFilter = () => {
      addFilter(data.property, [this.state.minVal, this.state.maxVal], this.filterType);
    };

    return (
      <div>
        <span>{data.title}</span>
        <Form inline>
          <FormGroup bsSize="small">
            <ControlLabel>L.</ControlLabel>
            <FormControl
              type="text"
              value={this.state.minVal}
              onChange={e => {this.setState({ minVal: e.target.value });}}

            />
          </FormGroup>
          <FormGroup bsClass="reallySmall">
            <ControlLabel>L.</ControlLabel>
            <FormControl
              type="text"
              value={this.state.maxVal}
              onChange={e => {this.setState({ maxVal: e.target.value });}}

            />
          </FormGroup>
          <Button bsSize="small" onClick={applyFilter}> >> </Button>
        </Form>
      </div>
    );
  }
};

RangeFilter = connect(mapStateToProps, actions)(RangeFilter);
export default RangeFilter;
