/**
 * Created by a.milko on 03.03.2016.
 */
/**
 * Created by a.milko on 01.03.2016.
 */
import React,{Component,PropTypes} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Loader from './Loader';

export default class CountryTable extends Component {
    static propTypes = {
        countryList: PropTypes.array.isRequired,
        locationList: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired
    };

    render () {
        var columns  = setColumns(this.props.locationList);
        var countries = this.props.countryList;
        return (
            <div className="segment">
                <BootstrapTable data={countries} striped={true} hover={true}>
                    {columns}
                </BootstrapTable>
                <Loader visible={this.props.isLoading}/>
            </div>
        );
    }
}

function actionFormatter(cell, row){
    return '<button type="button" class="btn btn-rounded btn-default btn-icon"><i class="fa fa-pencil"></i></button> ' +
        '<button type="button" class="btn btn-rounded btn-danger btn-icon"><i class="fa fa-trash-o"></i></button>';
}


function setColumns(locations){
    var columns = [];
    columns.push( <TableHeaderColumn key="1" dataField="Id" isKey={true} dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>);
    columns.push( <TableHeaderColumn key="2" dataField="InternalName"  dataAlign="center" dataSort={true}>internal Name</TableHeaderColumn>);
    locations.forEach(function(element, index, array){
        if(element.selected)
        {
            columns.push( <TableHeaderColumn key={element.value} dataField={element.code}  dataAlign="center" dataSort={true}>{element.value}</TableHeaderColumn>);
        }
    });
    columns.push(<TableHeaderColumn key="3" dataField="Id" dataSort={false} dataAlign="center" dataFormat={actionFormatter}>Actions</TableHeaderColumn>);
    return columns;
}