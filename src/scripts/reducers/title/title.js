/**
 * Created by a.milko on 25.02.2016.
 */

import * as actionTypes from '../../actions/title/types';
import { Map } from 'immutable';

const title = (state = Map({}), action) => {

    switch (action.type) {
        case actionTypes.ACTION_CHANGETITLE:
            return state.set('action', action.value || "Home");
        default:
            return state
    }

};

export default title;