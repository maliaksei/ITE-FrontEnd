/**
 * Created by a.milko on 24.02.2016.
 */
import React,{Component} from 'react';

class StartTop extends Component
{
    render() {
        return (
            <div id="top" className="clearfix">

                <div className="applogo">
                    <a href="index.html" className="logo">kode</a>
                </div>

                <a href="#" className="sidebar-open-button"><i className="fa fa-bars" /></a>
                <a href="#" className="sidebar-open-button-mobile"><i className="fa fa-bars" /></a>

                <form className="searchform">
                    <input type="text" className="searchbox" id="searchbox" placeholder="Search" />
                        <span className="searchbutton"><i className="fa fa-search" /></span>
                </form>

                <ul className="topmenu">
                    <li><a href="#">Files</a></li>
                    <li><a href="#">Authors</a></li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">My Files <span className="caret" /></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Pictures</a></li>
                            <li><a href="#">Blog Posts</a></li>
                        </ul>
                    </li>
                </ul>

                <a href="#sidepanel" className="sidepanel-open-button"><i className="fa fa-outdent" /></a>

                <ul className="top-right">

                    <li className="dropdown link">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle hdbutton">Create New <span className="caret"/></a>
                        <ul className="dropdown-menu dropdown-menu-list">
                            <li><a href="#"><i className="fa falist fa-paper-plane-o" />Product or Item</a></li>
                            <li><a href="#"><i className="fa falist fa-font"/>Blog Post</a></li>
                            <li><a href="#"><i className="fa falist fa-file-image-o" />Image Gallery</a></li>
                            <li><a href="#"><i className="fa falist fa-file-video-o" />Video Gallery</a></li>
                        </ul>
                    </li>

                    <li className="link">
                        <a href="#" className="notifications">6</a>
                    </li>

                    <li className="dropdown link">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle profilebox">
                            <img src="img/profileimg.png" alt="img" />
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




