/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';

export const showLoading = () => {
    return {
        type: types.LOADING
    }
};

export const hideLoading = () => {
    return {
        type: types.NOT_LOADING
    }
};

