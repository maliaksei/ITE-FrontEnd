/**
 * Created by a.milko on 01.03.2016.
 */
import React,{Component, PropTypes} from 'react';
import {Input} from 'react-bootstrap';
import Immutable,{ Map } from 'immutable';

export default class InputList extends Component{
    static propTypes = {
        locationList: PropTypes.object.isRequired
    }

    render(){
        var component;
        var selectedIndex = this.props.locationList.findIndex((function(item) {
            return item.selected === true;
        }));

        if(selectedIndex == -1)
        {
            component =
                <div className="kode-alert kode-alert-icon alert5-light">
                    <i className="fa fa-warning"/>
                    Location are not selected.
                </div>;
        }else {
            component = this.props.locationList.map(function (item) {
                if (item.selected) {
                    return ( <Input
                        type="text"
                        name={item.value}
                        key={item.value}
                        placeholder={'Name in ' + item.value }
                        required="required"
                        label={ <span> {item.value }<span className="text-danger small">*</span></span> }
                        labelClassName="col-sm-2"
                        wrapperClassName="col-sm-4"
                        hasFeedback
                        feedbackIcon={<i className="form-control-feedback fa fa-pencil" key="icon" />}/>);
                }
            });
            component = component.push(<ActionButtons key="actions"/>);
        }

        return(
            <div>
                <br/>
                {component}
            </div>
        );
    }
}

class ActionButtons extends Component{

    render(){
        return(
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </div>
        );
    }
}