/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import LocationMultiselect from '../../controls/LocationMultiselect';
import InputList from '../../controls/InputList';
import Loader from '../../controls/Loader';
import * as LocationActions from '../../../actions/location/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    state => ({
        location: state.location,
        loadingVisible: state.loading.get('visible')
    }),
    dispatch => ({
        locationActions: bindActionCreators(LocationActions, dispatch),
    })
)

class AddCountry extends Component {

    componentWillMount()
    {
        var count = this.props.location.toArray().length;
        if(count === 0)
        {
            this.props.locationActions.getLocation();
        }
    }

    render() {
        return (
            <div className="segment">
                <LocationMultiselect locationList={this.props.location.toArray()}  selectLocation={this.props.locationActions.selectLocation}
                                     deselectLocation={this.props.locationActions.deselectLocation} />
                <div className="form-horizontal">
                    <InputList locationList={this.props.location}/>

                </div>
                <Loader visible={this.props.loadingVisible}/>
            </div>
        );
    }
}

export default AddCountry;
