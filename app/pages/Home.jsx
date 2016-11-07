// Absolute Dependencies
import React from 'react';
import { remote } from 'electron';

 // Relative Dependencies

 // Variable Declarations

// eslint-disable-next-line
function Home() {
  return (
    <div>
      <ul>
        <li>{`App Directory: ${remote.app.getAppPath()}`}</li>
        <li>{`Home Directory: ${remote.app.getPath('home')}`}</li>
        <li>{`Desktop Directory: ${remote.app.getPath('desktop')}`}</li>
        <li>{`AppData Directory: ${remote.app.getPath('appData')}`}</li>
      </ul>
    </div>
  );
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
