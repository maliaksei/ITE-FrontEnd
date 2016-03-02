/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LocationActions from '../../../actions/location/actions';
import LocationMultiselect from '../../controls/LocationMultiselect';



class ListCountry extends Component {

    render() {
        return (
            <div>
                {this.props.children||<HomeComponent />}
            </div>

        );
    }
}
var products = [{
    id: 1,
    internalName: "Russia",
    enUS: "Russia",
    ruRU: "Россия"

},{
    id: 2,
    internalName: "USA",
    enUS: "USA",
    ruRU: "Америка"
}];

function actionFormatter(cell, row){
    return '<button type="button" class="btn btn-rounded btn-default btn-icon"><i class="fa fa-pencil"></i></button> ' +
        '<button type="button" class="btn btn-rounded btn-danger btn-icon"><i class="fa fa-trash-o"></i></button>';
}

@connect(
    state => ({
        location: state.location,
        loadingVisible: state.loading.get('visible')
    }),
    dispatch => ({
        locationActions: bindActionCreators(LocationActions, dispatch),
    })
)
class HomeComponent extends Component{

    componentWillMount()
    {
        console.log(this.props.location);
        var count = this.props.location.toArray().length;
        if(count === 0)
        {
            this.props.locationActions.getLocation();
        }
    }

    render(){

        var columns = [];
        var localisation = this.props.location.toArray()
        columns.push( <TableHeaderColumn key={1} dataField="id" isKey={true} dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>);
        localisation.forEach(function(element, index, array){
            if(element.selected)
            {
                columns.push( <TableHeaderColumn key={element.value} dataField="id"  dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>);
            }
        });


        console.log("localisation",columns);
        //var columns = [];
        //
        //for(var i = 0; i< 3; i++)
        //{
        //    if(i===0)
        //    {
        //        columns.push( <TableHeaderColumn key={i} dataField="id" isKey={true} dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>);
        //    }
        //    columns.push( <TableHeaderColumn key={i} dataField="id"  dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>);
        //}
        //console.log(columns);

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
                <BootstrapTable data={products} striped={true} hover={true}>

                    {columns}
                </BootstrapTable>
            </div>

        </div>);
    }
}

export default ListCountry;
