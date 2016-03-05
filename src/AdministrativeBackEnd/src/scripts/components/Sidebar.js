/**
 * Created by a.milko on 25.02.2016.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar clearfix">
                <ul className="sidebar-panel nav">
                    <li className="sidetitle">MAIN</li>
                    <li><Link to={'/home'}><span className="icon color5"><i className="fa fa-home" /></span>Home</Link></li>
                    <li><Link to={'/about'}><span className="icon color6"><i className="fa fa-envelope-o" /></span>About</Link></li>
                    <li><Link to={'/catalogs'}><span className="icon color7"><i className="fa fa-files-o" /></span>Catalogs<span className="caret" /></Link>
                        <ul>
                            <li><Link to={'/catalogs/listCountry'}>Countries</Link></li>
                            <li><Link to={'/catalogs/listRegion'}>Regions</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar