import React from 'react';
import MainSection from './MainSection';
import HeaderSection from './HeaderSection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderSection />
        {this.props.children}
      </div>
    );
  }
}

export default App;
