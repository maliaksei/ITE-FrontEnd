/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';

export const selectLoaction = value => {
    return {
        type: types.SELECT_LOCATION,
        value
    }
};

export const deselectLoaction = value => {
    return {
        type: types.DESELECT_LOCATION,
        value
    }
};
