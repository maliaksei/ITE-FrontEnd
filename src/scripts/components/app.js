import React,{Component} from 'react';
import StartTop from './StartTop';
import Sidebar from './Sidebar';
import Home from './Home';
import Breadcrumbs from 'react-breadcrumbs';

class App extends Component {
    getCurentTitle() {
        var count = this.props.routes.length;
        var title = this.props.routes[count -1].name;
        return title;
    }

    render() {
        return (
            <div>
                <StartTop/>
                <Sidebar/>
                <div className="content">
                    <div className="page-header">
                        <h1 className="title">{this.getCurentTitle()}</h1>
                        <Breadcrumbs customClass="breadcrumb"  wrapperElement="ol" itemElement="li" separator=""
                                     routes={this.props.routes}
                                     params={this.props.params}
                        />
                    </div>
                    <div className="container-default">
                        {this.props.children}
                    </div>

                    <div className="row footer">
                        <div className="col-md-6 text-left">
                            Copyright © 2015 <a href="#" target="_blank">Egemem</a> All rights reserved.
                        </div>
                        <div className="col-md-6 text-right">
                            Design and Developed by <a href="#" target="_blank">Egemem</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default App;
