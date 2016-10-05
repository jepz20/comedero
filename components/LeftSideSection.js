import { connect } from 'react-redux';
import CheckboxFilter from './CheckboxFilter'
import * as actions from '../actions';
import React from 'react';

const mapStateToProps = (state) =>({
  visibilityMenu: state.visibilityMenu,
});

class LeftSideSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visibilityMenu } = this.props;

    return (
      <section className={'left__side ' + visibilityMenu}>
        Anything Else
        <CheckboxFilter></CheckboxFilter>
      </section>
    );
  }
}

LeftSideSection = connect(mapStateToProps, actions)(LeftSideSection);
export default LeftSideSection;
