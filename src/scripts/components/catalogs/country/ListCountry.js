/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router';

class ListCountry extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Link to="/catalogs/addCountry" className="btn btn-rounded btn-default">Add</Link>
                </div>
                <br/>
                <div className="row">
                    <BootstrapTable data={products} striped={true} hover={true}>
                        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataSort={true} dataAlign="center" >Country</TableHeaderColumn>
                        <TableHeaderColumn dataField="id" dataSort={false} dataAlign="center" dataFormat={actionFormatter}>Actions</TableHeaderColumn>
                    </BootstrapTable>
                </div>

            </div>
        );
    }
}
var products = [{
    id: 1,
    name: "Russia"
},{
    id: 2,
    name: "USA"
}];

function actionFormatter(cell, row){
    return '<button type="button" class="btn btn-rounded btn-default btn-icon"><i class="fa fa-pencil"></i></button> ' +
        '<button type="button" class="btn btn-rounded btn-danger btn-icon"><i class="fa fa-trash-o"></i></button>';
}

export default ListCountry;
