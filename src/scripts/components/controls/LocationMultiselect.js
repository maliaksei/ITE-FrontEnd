/**
 * Created by a.milko on 01.03.2016.
 */
import React,{Component,PropTypes} from 'react';
import Multiselect from 'react-bootstrap-multiselect';
import {setMultiselect} from '../../../js/plugins';

export default class LocationMultiselect extends Component {
    static propTypes = {
        locationList: PropTypes.array.isRequired,
        selectLocation: PropTypes.func.isRequired,
        deselectLocation: PropTypes.func.isRequired
    }

    componentDidMount(){
        setMultiselect();
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({ locations: nextProps.locationList }, this.callback);
    }

    callback(){
        setMultiselect();
    }

    render () {

        return (
            <Multiselect data={this.state.locations} multiple  templates={{li:'<li><div class="checkbox checkbox-primary"><label></label></div></li>'}}
                         onChange={this.handleChange.bind(this)}
            />
        );
    }

    constructor (props, context) {
        super(props, context);
        this.state = {
            locations: this.props.locationList || []
        };
    }

    handleChange (option, checked, select){
        if(checked)
        {
            this.props.selectLocation(option[0].value);
        }
        else{
            this.props.deselectLocation(option[0].value);
        }

    }
}