import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const mapStateToProps = state => ({
});

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.searchOnEnter = this.searchOnEnter.bind(this);
    this.state = {};
    this.state.searchValue = '';
  }

  updateInputValue(evt) {
    this.setState({
      searchValue: evt.target.value,
    });
  }

  doSearch() {
    const { applySearch, fetchRestaurants, setMainView, clearAllFilters } = this.props;

    hashHistory.push('/');
    setMainView('main', {});
    applySearch(this.state.searchValue);
    fetchRestaurants();
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
            <Navbar.Brand bsStyle="darker">
            <Link to="/"><h1 className="header__app-title">Comedero</h1></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Form pullLeft >
          <FormGroup>
          <InputGroup>
            <label className="nodisplay" htmlFor="searchButton">Search</label>
            <FormControl
            type="text"
            id="searchButton"
            placeholder="Search"
            value={this.state.searchValue}
            onChange= {this.updateInputValue}
            onKeyPress={this.searchOnEnter}
            />
            <InputGroup.Button>
              <Button type="submit" onClick={this.doSearch} bsStyle="primary">Search</Button>
            </InputGroup.Button>
          </InputGroup>
          {' '}

          </FormGroup>
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
