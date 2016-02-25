import * as actionTypes from './types';

export const changeTitle = value=>{
  return{
    type: actionTypes.ACTION_CHANGETITLE,
    value: value
  }
};

