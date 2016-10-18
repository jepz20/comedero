import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
});

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.searchOnEnter = this.searchOnEnter.bind(this);
    this.state = {};
    this.state.searchValue = '';
    console.log(this.state);
  }

  updateInputValue(evt) {
    this.setState({
      searchValue: evt.target.value,
    });
  }

  doSearch() {
    const { fetchRestaurants } = this.props;
    fetchRestaurants(this.state.searchValue);
  }

  searchOnEnter(evt) {
    if (evt.key == 'Enter') {
      this.doSearch();
    }
  }

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            <a href="#">Comedero</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Form pullLeft>
          <FormGroup>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.searchValue}
            onChange= {this.updateInputValue}
            onKeyPress={this.searchOnEnter}
          />
          </FormGroup>
          {' '}
          <Button type="submit" onClick={this.doSearch}>Search</Button>
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
