// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Settings from './pages/Settings';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home} />
    <Route path="/settings" component={Settings} />
    <Route path="*" component={NotFound} />
  </Route>
);
