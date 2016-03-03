/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from '../../actions/list-country/types';
import Immutable,{ Map } from 'immutable';

var initialState = {
    countries: Immutable.List([]),
    isLoading: false
};

const locations = (state = Map(initialState), action) => {
    switch (action.type) {
        case types.ADD_COUNTRY:
            return state.push(action.value);
        case types.EDIT_COUNTRY:
            return state.update(
                state.findIndex(function(item) {
                    return item.value.Id === action.value.Id;
                }), function(item) {
                    return item.value;
                }
            );
        case types.GET_COUNTRIES:
            return state.update('countries',()=>Immutable.List(action.value));
        case types.SET_LOADING_VISIBLE_COUNTRIES:
            return state.update('isLoading',()=>action.value);
        default:
            return state
    }
};

export default locations;
