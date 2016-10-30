import { TEST } from '../constants';

const initialState = {
  number: 1,
};

// eslint-disable-next-line
export function BreakTrack(state = initialState, action) {
  console.log(state);
  console.log(action);
  if (action.type === TEST) {
    console.log(':D');
    return { number: state.number + action.amount };
  }
  return state;
}
