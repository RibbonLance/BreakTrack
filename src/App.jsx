// Absolute Dependencies
import React from 'react';
import { remote } from 'electron';
import { connect } from 'react-redux';

 // Relative Dependencies
import { test } from './actions/index';

 // Variable Declarations

// eslint-disable-next-line
function App({ number, test }) {
  return (
    <div>
      <ul>
        <li>{`App Directory: ${remote.app.getAppPath()}`}</li>
        <li>{`Home Directory: ${remote.app.getPath('home')}`}</li>
        <li>{`Desktop Directory: ${remote.app.getPath('desktop')}`}</li>
        <li>{`AppData Directory: ${remote.app.getPath('appData')}`}</li>
        <button onClick={() => test(15)}>
          {number}
        </button>
      </ul>
    </div>
   );
}

App.propTypes = {

};

App.defaultProps = {

};

export default connect(
  state => ({ number: state.BreakTrack.number }),
  { test }
)(App);
