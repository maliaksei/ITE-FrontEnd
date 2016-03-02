/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from '../../actions/location/types';
import Immutable,{ Map } from 'immutable';

const locations = (state = Immutable.List([]), action) => {
    switch (action.type) {
        case types.SELECT_LOCATION:
            return state.update(
                state.findIndex(function(item) {
                    return item.value === action.value;
                }), function(item) {
                    return {value:item.value, selected: true};
                }
            );
        //return state.updateIn([action.value,'selected'], value=>true);
        case types.DESELECT_LOCATION:
            return state.update(
                state.findIndex(function(item) {
                    return item.value === action.value;
                }), function(item) {
                    return {value:item.value, selected: false};
                }
            );
        case types.SET_LOCATION:
            return Immutable.List(action.value);
        //return state.updateIn([action.value,'selected'], value=>false);
        default:
            return state
    }

};

export default locations;
