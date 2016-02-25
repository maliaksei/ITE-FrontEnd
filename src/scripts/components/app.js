import React,{Component} from 'react';
import StartTop from './StartTop';
import Sidebar from './Sidebar';
import Home from './Home';

class App extends Component {

  render() {
    return (
        <div>
            <StartTop/>
            <Sidebar/>
            <div className="content">
                <div className="page-header">
                    <h1 className="title">Test</h1>
                    <ol className="breadcrumb">
                        <li><a href="index.html">Dashboard</a></li>
                        <li><a href="#">Extra Pages</a></li>
                        <li className="active">Blank Page</li>
                    </ol>
                </div>
                <div>{this.props.children}</div>
            </div>
      </div>
    );
  }

}

export default App;
