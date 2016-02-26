/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import {Input} from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect';

class AddCounry extends Component {
    render() {
        return (
            <div>
                <div className="form-horizontal">
                    <Input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required="required"
                        label={ <span>First Name <span className="text-danger small">*</span></span> }
                        labelClassName="col-sm-2"
                        wrapperClassName="col-sm-4"
                        hasFeedback
                        feedbackIcon={<i className="form-control-feedback fa fa-pencil" key="icon" />} />
                    <Input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required="required"
                        label={ <span>First Name <span className="text-danger small">*</span></span> }
                        labelClassName="col-sm-2"
                        wrapperClassName="col-sm-4"
                        hasFeedback
                        feedbackIcon={<i className="form-control-feedback fa fa-pencil" key="icon" />} />
                    <Multiselect data={products} multiple />
                </div>
                <br/>
            </div>
        );
    }
}

var products = [{
    value: 'One',
    selected:true
},{
    value: 'Two',
    selected:false
}];

export default AddCounry;
