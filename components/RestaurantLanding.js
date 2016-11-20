import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class RestaurantLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <section>
        <Col md={3} xs={6}>
          <Thumbnail href="#" src={data.image}></Thumbnail>
        </Col>
        <PageHeader>{ data.name }</PageHeader>
        <div className="card__content__feature-menu">
          <h4>Feature Menu: </h4>
          <ul>
            { data.featureMenu.map(menu => (
              <li key={menu.dish}>
                <div>
                  <span className="landing__content__feature-menu__dish">{menu.dish}</span>
                  {' '}
                  (
                  <span className="landing__content__feature-menu__price">${menu.price}</span>
                  )
                </div>
                <div className="landing__content__feature-menu__description">
                  {menu.description}
                </div>
              </li>
            ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default RestaurantLanding;
