import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.executeFilter = this.executeFilter.bind(this);
    this.executeOnEnter = this.executeOnEnter.bind(this);
    this.initializeState = this.initializeState.bind(this);
  }

  componentDidMount() {
    this.initializeState();
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  executeFilter() {
    const { fetchRestaurants } = this.props;
    const { searchValue } = this.state;
    if (searchValue && searchValue.length > 0) {
      fetchRestaurants(searchValue);
    }

  }

  initializeState() {
    const { fetchRestaurants } = this.props;
    fetchRestaurants();
    this.setState({ searchValue: '' });
    ReactDOM.findDOMNode(this.searchInput).focus();
  }

  executeOnEnter(e) {
    if (e.key === 'Enter') {
      this.executeFilter();
    }
  }

  render() {

    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            <a href="#" onClick={ this.initializeState }>Comedero</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl
                onChange={ this.handleChange }
                type="text"
                value={this.state.searchValue}
                ref={(ref) => this.searchInput = ref}
                onKeyPress={ this.executeOnEnter }
                placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.executeFilter}>Submit</Button>
          </Navbar.Form>
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/jepz20/comedero">Github</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

HeaderSection = connect(mapStateToProps, actions)(HeaderSection);
export default HeaderSection;
