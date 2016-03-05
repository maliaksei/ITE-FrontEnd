/**
 * Created by a.milko on 01.03.2016.
 */
import React,{Component, PropTypes} from 'react';
import {Input, FormGroup, Glyphicon} from 'react-bootstrap';

export default class InputList extends Component{
    static propTypes = {
        locationList: PropTypes.object.isRequired
    };

    handleChange = e => {

        var id = e.target.id;
        if(id === 'internalName')
        {
            this.setState({internalName: e.target.value});
        }else{
            let newStateLocalizations = this.state.localizations;
            for(let i=0;i<newStateLocalizations.length; i++)
            {
                if(newStateLocalizations[i].cultureCode == id)
                {
                    newStateLocalizations[i].name = e.target.value;
                }
            }
            this.setState({localizations: newStateLocalizations});
        }
    };

    constructor (props, context) {
        super(props, context);
        this.state = {
            internalName: '',
            localizations: this.setStates(this.props.locationList.toArray())
        };
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({ localizations: this.updateStates(nextProps.locationList.toArray())});
    }

    setStates(locations){
        let states = [];
        for(let i=0;i<locations.length; i++)
        {
            if(locations[i].selected)
            {
                let state = {};
                state.cultureCode = locations[i].code;
                state.name = '';
                states.push(state);
            }

        }
        return states;
    }

    updateStates(locations){
        let states = this.state.localizations;
        for(let i=0;i<locations.length; i++)
        {
            if(locations[i].selected)
            {
                let index = states.findIndex((item) => {return item.cultureCode === locations[i].code});
                if(index === -1)
                {
                    let state = {};
                    state.cultureCode = locations[i].code;
                    state.name = '';
                    states.push(state);
                }
            }
            else{
                let index = states.findIndex((item) => {return item.cultureCode === locations[i].code});
                if(index != -1)
                {
                    states.splice(index,1);
                }
            }

        }
        return states;
    }

    pencilGlyphicon(){
        return(<Glyphicon glyph="pencil" />);
    }

    getForm() {
        return (
            <div>
                <br/>
                {this.getInternalNameInput()}
                {this.getInputs()}
                <ActionButtons key="actions"/>
            </div>
        );
    }

    getInternalNameInput()
    {
        return (
            <Input
                id="internalName"
                type="text"
                name='Internal Name'
                key='InternalName'
                placeholder={'Internal Name' }
                required="required"
                label={ <span>Internal Name<span className="text-danger small">*</span></span> }
                labelClassName="col-sm-2"
                wrapperClassName="col-sm-4"
                ref="InternalName"
                hasFeedback
                onChange={ this.handleChange.bind(this) }
                addonAfter={this.pencilGlyphicon()}/>
        );
    }

    getDefaultForm()
    {
        return (
            <div>
                <br/>
                {this.getInternalNameInput()}
                <ActionButtons key="actions"/>
            </div>
        );
    }

    getInputs() {
        return this.props.locationList.map((item) => {
            if (item.selected) {
                return ( <Input
                    id={item.code}
                    type="text"
                    name={item.value}
                    key={item.value}
                    placeholder={'Name on ' + item.value }
                    required="required"
                    label={ <span> {item.value }<span className="text-danger small">*</span></span> }
                    labelClassName="col-sm-2"
                    wrapperClassName="col-sm-4"
                    hasFeedback
                    onChange={ this.handleChange }
                    addonAfter={this.pencilGlyphicon()}/>);
            }
        });
    }

    render() {

        console.log(this.state.localizations);
        const selectedIndex = this.props.locationList.findIndex((item)=> {
            return item.selected === true;
        });

        if(selectedIndex == -1)
        {
            return this.getDefaultForm();

        }else {
            return this.getForm();
        }
    }
}


class WarningMessage extends Component{


    render(){
        return (
            <div>
                <br/>
                <div className="kode-alert kode-alert-icon alert5-light">
                    <i className="fa fa-warning"/>
                    Location are not selected.
                </div>
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


