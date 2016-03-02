/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';
import * as loadingActions from '../loader/actions';

//todo: remove after adding fetch request
const products = [
    {
        value: 'Russia',
        selected:true
    },
    {
        value: 'USA',
        selected:false
    }
];

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

export const getLocation = () => {
    return (dispatch) => {
        dispatch(loadingActions.showLoading());
        setTimeout(() => {
            console.log('getLocation');
            console.log('getLocation',products);
            //todo: add fetch request
            dispatch(setLocationData(products));
            dispatch(loadingActions.hideLoading());
        }, 1000);
    }
};

export const setLocationData = value =>{

    return {
        type: types.SET_LOCATION,
        value
    }
};

