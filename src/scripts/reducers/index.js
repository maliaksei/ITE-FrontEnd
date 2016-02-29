/**
 * Created by a.milko on 25.02.2016.
 */
import { combineReducers } from 'redux';

import other from './other/other';
import title from './title/title';
import location from './location/location';

export default combineReducers({
    other,
    title,
    location
});