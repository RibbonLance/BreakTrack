// Absolute Dependencies
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// Relative Dependencies
import App from './App';
import * as reducers from './reducers';

// Variable Declarations

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const store = createStore(
  reducer,
  DevTools.instrument()
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="*" component={App} />
      </Router>
      <DevTools />
    </div>
  </Provider>, document.getElementById('root')
);
