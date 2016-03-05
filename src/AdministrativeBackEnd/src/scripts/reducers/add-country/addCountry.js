/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from '../../actions/add-country/types';
import Immutable,{ Map } from 'immutable';

var initialState = {
    country: Map({}),
    isLoading: false,
    status: ""
};

const addCountry = (state = Map(initialState), action) => {
    switch (action.type) {
        case types.SUCCESS_RESPONSE_COUNTRY:
            return state.update('country',()=>Map(action.value));
        case types.SET_LOADING_VISIBLE_COUNTRY:
            return state.update('isLoading',()=>action.value);
        default:
            return state
    }
};

export default addCountry;
