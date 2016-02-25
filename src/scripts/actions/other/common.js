import * as actionTypes from './types';

export const action1 = value => {
  return {
    type: actionTypes.ACTION1_TYPE,
    value: ""
}
};


export const action2 = () => {
  return {
    type: actionTypes.ACTION2_TYPE
  }
};
