/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ListCountry extends Component {

    render() {
        return (
            <BootstrapTable data={products} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Country ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true} dataAlign="center" >Country</TableHeaderColumn>
                <TableHeaderColumn dataField="" dataSort={false} dataAlign="center" >Actions</TableHeaderColumn>
            </BootstrapTable>
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



export default ListCountry;
