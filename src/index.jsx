// Absolute Dependencies
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Relative Dependencies
import App from './App';
import BreakTrack from './reducers/BreakTrack';

// Variable Declarations
const store = createStore(BreakTrack);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="*" component={App} />
    </Router>
  </Provider>, document.getElementById('root')
);
