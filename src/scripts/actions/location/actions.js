/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';
import * as loadingActions from '../loader/actions';

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
            dispatch(setLocationData(GetLocations()));
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

function GetLocations() {
    var response = [
        {
            "CultureCode": "ru-RU",
            "CultureName": "Russian"
        },
        {
            "CultureCode": "en-US",
            "CultureName": "English"
        }
    ];

    console.log(convertLocations(response));
    return convertLocations(response);
}

function convertLocations(array) {
    var map = [];
    for(var i = 0; i < array.length; i++){
        var item = array[i];
        var mappedItem = {};
        mappedItem.value = item.CultureName;
        mappedItem.code = item.CultureCode;
        mappedItem.selected = false;
        map.push(mappedItem);
    }
    return map;
}

