import { POMO_COMPLETE } from '../constants';

const initialState = {
  pomoComplete: 0,
};

function BreakTrack(state = initialState, action) {
  if (action.type === POMO_COMPLETE) {
    return { pomoComplete: state.pomoComplete + 1 };
  }
  return state;
}

export default BreakTrack;
