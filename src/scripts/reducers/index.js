/**
 * Created by a.milko on 25.02.2016.
 */
import { combineReducers } from 'redux';

import other from './other/other';
import title from './title/title';
import location from './location/location';
import loading from './loading/loading';
import country from './list-country/country';
import addCountry from './add-country/addCountry';

export default combineReducers({
    other,
    title,
    location,
    loading,
    country,
    addCountry
});