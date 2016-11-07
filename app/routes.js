// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Timer from './components/Timer';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home} />
    <Route path="/timer" component={Timer} />
    <Route path="*" component={NotFound} />
  </Route>
);
