/**
 * Created by a.milko on 29.02.2016.
 */
import * as types from './types';

export const addCountry = value => {
    return {
        type: types.ADD_COUNTRY,
        value
    }
};

export const editLoading = value => {
    return {
        type: types.EDIT_COUNTRY,
        value
    }
};


export const getCountry = value => {
    return {
        type: types.GET_COUNTRIES,
        value
    }
};

export const removeCountry = value => {
    return {
        type: types.REMOVE_COUNTRY,
        value
    }
};

export const setLoadingVisible = value =>{
    return {
        type: types.SET_LOADING_VISIBLE_COUNTRIES,
        value
    }
};

export const getCountriesFromAPI = () => {
    return (dispatch) => {
        dispatch(setLoadingVisible(true));
        setTimeout(() => {
            dispatch(getCountry(GetCountries()));
            dispatch(setLoadingVisible(false));
        }, 1000);
    }
};

function GetCountries(){
    const countries = [
        {
            "Localizations": [
                {
                    "CultureCode": "en-US",
                    "Name": "c1-en-US"
                },
                {
                    "CultureCode": "ru-RU",
                    "Name": "c1-ru-RU"
                }
            ],
            "Id": 1,
            "InternalName": "c1"
        },
        {
            "Localizations": [
                {
                    "CultureCode": "en-US",
                    "Name": "c2-en-US"
                },
                {
                    "CultureCode": "ru-RU",
                    "Name": "c2-ru-RU"
                }
            ],
            "Id": 2,
            "InternalName": "c2"
        },
        {
            "Localizations": [
                {
                    "CultureCode": "en-US",
                    "Name": "c3-en-US (2)"
                },
                {
                    "CultureCode": "ru-RU",
                    "Name": "c3-ru-RU (3)"
                }
            ],
            "Id": 3,
            "InternalName": "c3 (e1)"
        }
    ];

    return convertCountry(countries);
}

function convertCountry(array) {
    var map = [];
    for(var i = 0; i < array.length; i++){
        var item = array[i];
        var localization = {};
        localization.Id =item.Id;
        localization.InternalName = item.InternalName;
        var localizations = item.Localizations;
        for(var j = 0; j < localizations.length; j++)
        {
            var localizationNameItem = localizations[j];
            var cultureCode = localizationNameItem.CultureCode;
            localization[cultureCode] = localizationNameItem.Name;
        }

        map.push(localization);
    }
    return map;
}

