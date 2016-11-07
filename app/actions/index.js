import * as Constants from '../constants';

function makeActionCreator(type, ...argNames) {
  return function act(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const pomoComplete = makeActionCreator(Constants.POMO_COMPLETE);
