import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect  } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import './styles/style.less';
import './js/bootstrap/bootstrap.min';
import './js/plugins';
import reducers from './scripts/reducers/index'
import App from './scripts/components/app';
import Home from './scripts/components/Home';
import About from './scripts/components/About';
import NoMatch from './scripts/components/NoMatch';
import StartTop from './scripts/components/StartTop';
import IndexCatalog from './scripts/components/catalogs/IndexCatalog';
import AddCountry from './scripts/components/catalogs/country/AddCountry';
import ListCountry from './scripts/components/catalogs/country/ListCountry';
import AddRegion from './scripts/components/catalogs/regions/Addregion'
import ListRegion from './scripts/components/catalogs/regions/ListRegion';


let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} name="Home">
                <IndexRoute component={Home} />
                <Route path="home" component={Home} name="Home"></Route>
                <Route path="catalogs" component={IndexCatalog} name="Catalogs">
                    <Route path="listCountry" component={ListCountry} name="List country">
                        <Route path="addCountry" component={AddCountry} name="Add country"/>
                    </Route>
                    <Route path="addRegion" component={AddRegion} name="Add region"/>
                    <Route path="listRegion" component={ListRegion} name="List region"/>
                </Route>
                <Route path="about" component={About} name="About"/>
                <Route path="*" component={NoMatch} name="Not found"/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
