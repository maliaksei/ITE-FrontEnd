/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';

export const selectLocation = value => {
    return {
        type: types.SELECT_LOCATION,
        value
    }
};

export const deselectLocation = value => {
    return {
        type: types.DESELECT_LOCATION,
        value
    }
};
