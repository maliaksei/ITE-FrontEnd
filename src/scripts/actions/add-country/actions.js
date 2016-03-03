/**
 * Created by a.milko on 03.03.2016.
 */
import * as types from './types';

export const pushCountry = value => {
    return {
        type: types.PUSH_COUNTRY,
        value
    }
};

export const succesCountry = value => {
    return {
        type: types.SUCCESS_RESPONSE_COUNTRY,
        value
    }
};


export const failCountry = () => {
    return {
        type: types.FAIL_RESPONSE_COUNTRY,
        value
    }
};

export const setLoadingVisible = value =>{
    return {
        type: types.SET_LOADING_VISIBLE_COUNTRY,
        value
    }
};

export const postData = value => {
    return (dispatch) => {
        dispatch(setLoadingVisible(true));
        setTimeout(() => {
            dispatch(POST(value));
            dispatch(setLoadingVisible(false));
        }, 1000);
    }
};



function POST(value){

    const countries = {
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
    };

    fetch('localhost')
        .then(countries)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    setLoadingVisible(false);
                    failCountry();
                    return;
                }
                succesCountry(value);
                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
            failCountry();
        });
}


