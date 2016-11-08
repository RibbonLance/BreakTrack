import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import IconHome from 'material-ui/svg-icons/action/home';
import IconDashboard from 'material-ui/svg-icons/action/dashboard';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconChart from 'material-ui/svg-icons/editor/insert-chart';
import IconList from 'material-ui/svg-icons/action/list';
import IconProjects from 'material-ui/svg-icons/hardware/phonelink';
import IconUser from 'material-ui/svg-icons/social/person';

import Timer from './Timer';

const colors = {
  text: {
    primary: '#FFFFFF',
    secondary: '#ffbf00',
    accent: '007bff',
    logo: '#'
  },
  body: {
    primary: '#1A1A1A',
    secondary: '#181818',
    accent: '#101010'
  }
};

const styles = {
  button: {
    width: `${100}%`,
    height: `${50}px`,
    textAlign: 'left',
    color: colors.text.primary,
    borderRadius: 0,
    borderBottom: `${1}px solid ${colors.body.accent}`
  },
  buttonConfig: {
    backgroundColor: colors.body.primary,
    hoverColor: colors.body.secondary,
  },
  topBar: {
    width: `${100}%`,
    height: `${80}px`,
    backgroundColor: colors.body.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: `${26}px`,
    borderBottom: `${1}px solid ${colors.body.accent}`
  },
  bottomBar: {
    width: `${100}%`,
    backgroundColor: colors.body.primary,
    borderTop: `${1}px solid ${colors.body.accent}`,
    position: 'absolute',
    color: colors.text.primary,
    bottom: 0
  },
  timerButton: {
    width: `${100}px`,
    height: `${60}px`,
    borderTop: `${1}px solid ${colors.body.accent}`,
    borderLeft: `${1}px solid ${colors.body.accent}`,
  }
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: 0,
    };
  }
  newButton(label = 'Button', link = '#', icon = (<IconHome />)) {
    this.state.buttons += 1;
    return (
      <Link to={link}>
        <FlatButton
          label={label}
          icon={icon}
          style={styles.button}
          backgroundColor={styles.buttonConfig.backgroundColor}
          hoverColor={styles.buttonConfig.hoverColor}
        />
      </Link>
    );
  }

  render() {
    return (
      <div style={{ width: `${300}px` }}>
        <div style={styles.topBar}>
          <h2 style={{ color: colors.text.primary }}>
            <span style={{ color: colors.text.secondary }}>Break</span>Track
          </h2>
        </div>
        {this.newButton('Dashboard', '/', <IconDashboard />)}
        {this.newButton('Analytics', '/timer', <IconChart />)}
        {this.newButton('Planner', '/timer', <IconList />)}
        {this.newButton('Projects', '/timer', <IconProjects />)}
        {this.newButton('My Account', '/timer', <IconUser />)}
        {this.newButton('Settings', '/settings', <IconSettings />)}
        <div style={styles.bottomBar}>
          <Timer styles={styles} />
        </div>
      </div>
    );
  }

}
