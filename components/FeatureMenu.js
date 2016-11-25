import React from 'react';

class FeatureMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { featureMenu } = this.props;
    return (
      <div className="landing__content__main-info__feature-menu">
        <h3>Feature Menu</h3>
        <div className="borderline"></div>
        <ul>
          { featureMenu.map(menu => (
            <li key={menu.dish}>
              <div>
                <span className="landing__content__main-info__feature-menu__dish">{menu.dish}</span>
                {' '}
                (
                  <span className="landing__content__main-info__feature-menu__price">
                    ${menu.price}
                  </span>
                )
              </div>
              <div className="landing__content__main-info__feature-menu__description">
                {menu.description}
              </div>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default FeatureMenu;
