/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import LocationMultiselect from '../../controls/LocationMultiselect';
import InputList from '../../controls/InputList';
import * as LocationActions from '../../../actions/location/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    state => ({
        location: state.location,
    }),
    dispatch => ({
        locationActions: bindActionCreators(LocationActions, dispatch),
    })
)

class AddCountry extends Component {


    render() {
        return (
            <div>
                <LocationMultiselect locationList={this.props.location.toArray()}  selectLocation={this.props.locationActions.selectLocation}
                                     deselectLocation={this.props.locationActions.deselectLocation} />
                <div className="form-horizontal">
                    <InputList locationList={this.props.location}/>

                </div>
            </div>
        );
    }
}

export default AddCountry;
