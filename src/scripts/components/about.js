import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import * as commonActions from '../actions/other/common';
import * as titleActions from '../actions/title/common';
import * as locationActions from '../actions/location/actions';

@connect(
    state => ({
        title: state.title.get('action'),
        other: state.other.get('action'),
        location: state.location
    }),
    dispatch => ({
        actions: bindActionCreators(titleActions, dispatch),
        locationActions: bindActionCreators(locationActions, dispatch)
    })
)

class About extends Component {

    handleAction1Click = () => {
        console.log("handleAction 1 Click");
        this.props.locationActions.selectLoaction("Russia");
    };

    handleAction2Click = () => {
        console.log("handleAction 2 Click");
        this.props.locationActions.deselectLoaction("Russia");
    };

    render() {
        console.log(this.props.location.get('Russia').get('selected'));
        return (
            <div>
                <h1>About</h1>
                <h3>current common action value -> {this.props.location.get('Russia').get('selected')}</h3>
                <p onClick={this.handleAction1Click}>action 1</p>
                <p onClick={this.handleAction2Click}>action 2</p>
            </div>
        );
    }
}

export default About;
