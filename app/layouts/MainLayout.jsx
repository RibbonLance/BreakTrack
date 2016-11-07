// Absolute Dependencies
import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

// Variable Declarations
import Navigation from '../components/Navigation';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <Navigation />
        </nav>
        <RaisedButton label="Default" />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default MainLayout;
