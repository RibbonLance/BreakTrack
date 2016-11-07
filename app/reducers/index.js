// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import BreakTrack from './BreakTrack';

const rootReducer = combineReducers({
  routing,
  BreakTrack
});

export default rootReducer;
