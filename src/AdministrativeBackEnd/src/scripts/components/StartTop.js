/**
 * Created by a.milko on 24.02.2016.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';

class StartTop extends Component
{
    render() {
        return (
            <div id="top" className="clearfix">

                <div className="applogo">

                    <Link to={'/'} className="logo" >ITE</Link>
                </div>

                <a className="sidebar-open-button"><i className="fa fa-bars" /></a>
                <a className="sidebar-open-button-mobile"><i className="fa fa-bars" /></a>

                <form className="searchform">
                    <input type="text" className="searchbox" id="searchbox" placeholder="Search" />
                    <span className="searchbutton"><i className="fa fa-search" /></span>
                </form>

                <ul className="top-right">
                    <li className="dropdown link">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle profilebox">
                            <b>Jonathan Doe</b><span className="caret"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-list dropdown-menu-right">
                            <li role="presentation" className="dropdown-header">Profile</li>
                            <li><a href="#"><i className="fa falist fa-inbox" />Inbox<span className="badge label-danger">4</span></a></li>
                            <li><a href="#"><i className="fa falist fa-file-o" />Files</a></li>
                            <li><a href="#"><i className="fa falist fa-wrench" />Settings</a></li>
                            <li className="divider" />
                            <li><a href="#"><i className="fa falist fa-lock" /> Lockscreen</a></li>
                            <li><a href="#"><i className="fa falist fa-power-off" /> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default StartTop;




