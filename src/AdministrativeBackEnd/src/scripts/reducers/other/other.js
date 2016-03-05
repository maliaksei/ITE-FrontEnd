import * as actionTypes from '../../actions/other/types';
import { Map } from 'immutable';

const reducers = (state = Map({}), action) => {

  switch (action.type) {
    case actionTypes.ACTION1_TYPE:
      return state.set('action', action.value || 1);
    case actionTypes.ACTION2_TYPE:
      return state.set('action', 2);
    default:
      return state
  }

};

export default reducers;
