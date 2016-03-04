/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from '../../actions/loader/types';
import Immutable,{ Map } from 'immutable';


const loading = (state = Map({}), action) => {
    switch (action.type) {
        case types.LOADING:
            return state.set('visible', true);
        case types.NOT_LOADING:
            return state.set('visible', false);
        default:
            return state
    }
};

export default loading;
