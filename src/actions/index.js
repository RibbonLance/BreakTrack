import { TEST } from '../constants';

export function test(n) {// eslint-disable-line
  console.log(`Action fired.${n}`);
  return {
    type: TEST,
    amount: n,
  };
}
