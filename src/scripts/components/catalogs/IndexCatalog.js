/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import Constants from '../constants/Constants'

class IndexCatalog extends Component {

    //getInitialState() {
    //    return {data: []};
    //}
    //componentDidMount(){
    //    $.ajax({
    //        url:'localhost',
    //        dataType: 'json',
    //        cache: false,
    //        success: function(data) {
    //            this.setState({data: data});
    //        }.bind(this),
    //        error: function(xhr, status, err) {
    //            console.error('1111', status, err.toString());
    //        }.bind(this)
    //})}
    render() {
        return (
            <div>
                {this.props.children||<HomeComponent />}
            </div>
        );
    }

}

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div className="panel panel-widget">
                <div className="panel-title">
                    Catalogs
                    <ul className="panel-tools panel-tools-hover">
                        <li><a className="icon minimise-tool"><i className="fa fa-minus" /></a></li>
                        <li><a className="icon expand-tool"><i className="fa fa-expand" /></a></li>
                    </ul>
                </div>
                <div className="panel-body">
                    <ul className="basic-list">
                        <li>Counties <span className="right label label-default">3</span></li>
                        <li>Regions <span className="right label label-danger">22</span></li>
                        <li>Platforms <span className="right label label-success">300</span></li>
                        <li>User messages <span className="right label label-primary">100</span></li>
                    </ul>
                </div>
            </div>
        );
    }
});
export default IndexCatalog;
