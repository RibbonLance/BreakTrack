// Absolute Dependencies
import React from 'react';
import Sidebar from 'react-sidebar';
import AppBar from 'material-ui/AppBar';
import IconHome from 'material-ui/svg-icons/action/home';

// Variable Declarations
import Navigation from '../components/Navigation';

const navigationStyles = {
  appbar: {
    WebkitAppRegion: 'drag',
  },
  navbar: {
    backgroundColor: '#1A1A1A',
  },
  main: {
    padding: `${10}px`,
  }
};

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appBarTitle: 'Dashboard',
      appBarIcon: <IconHome />,
    };
  }

  generateAppBar() {
    return (
      <AppBar
        title={this.state.appBarTitle}
        iconElementLeft={this.state.appBarIcon}
        style={navigationStyles.appbar}
      />
    );
  }

  render() {
    return (
      <div>
        <Sidebar sidebar={<Navigation />} open docked styles={{ sidebar: navigationStyles.navbar }}>
          <nav>
            {this.generateAppBar()}
          </nav>
          <main style={navigationStyles.main}>{this.props.children}</main>
        </Sidebar>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default MainLayout;
