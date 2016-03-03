/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LocationActions from '../../../actions/location/actions';
import * as CountryActions from '../../../actions/list-country/actions';
import LocationMultiselect from '../../controls/LocationMultiselect';
import CountryTable from '../../controls/CountryTable';


class ListCountry extends Component {

    render() {
        return (
            <div>
                {this.props.children||<HomeComponent />}
            </div>

        );
    }
}

@connect(
    state => ({
        location: state.location,
        countries: state.country.get('countries'),
        isLoading: state.country.get('isLoading')
    }),
    dispatch => ({
        locationActions: bindActionCreators(LocationActions, dispatch),
        countryActions: bindActionCreators(CountryActions, dispatch)
    })
)

class HomeComponent extends Component{

    componentWillMount()
    {
        var locationCount = this.props.location.toArray().length;
        if(locationCount === 0)
        {
            this.props.locationActions.getLocation();
        }


        var countryCount = this.props.countries.toArray().length;
        if(countryCount === 0)
        {
            this.props.countryActions.getCountriesFromAPI();

        }
    }

    render(){

        return(
            <div>
                <div className="row">
                    <Link to="/catalogs/listCountry/addCountry" className="btn btn-rounded btn-default">Add</Link>
                </div>
                <br/>
                <div className="row">
                    <LocationMultiselect locationList={this.props.location.toArray()}  selectLocation={this.props.locationActions.selectLocation}
                                         deselectLocation={this.props.locationActions.deselectLocation} />
                </div>
                <br/>
                <div className="row">
                    <CountryTable countryList={this.props.countries.toArray()} isLoading={this.props.isLoading} locationList={this.props.location.toArray()}/>
                </div>
            </div>);
    }
}

export default ListCountry;
