import React from 'react';
import {Link} from "react-router-dom";

class NavBarTop extends React.Component {
    constructor(props) {
        super(props);
        this.rickrollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    rickroll = () => {
        const isRickroll = Math.floor(Math.random() * Math.floor(100)) < 0.05;
        if (isRickroll) {
            window.open(this.rickrollUrl, "_blank");
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="" onClick={this.rickroll} className="nav-content menubar-padded">Tram13</Link>
                    <Link onClick={(e) => e.preventDefault()} data-target="mobile-demo" className="sidenav-trigger" to={void(0)}>
                        <i className="material-icons hide-on-med-and-up">
                            Pages
                        </i>
                    </Link>
                    <ul className="right hide-on-small-and-down">
                        <li className={(this.props.selected === "Wout" ? "active " : "") + "sidenav-close"}><Link to="/wout">Wout</Link></li>
                        <li className={(this.props.selected === "Jonas" ? "active " : "") + "sidenav-close"}><Link to="/jonas">Jonas</Link></li>
                        <li className={(this.props.selected === "Minecraft" ? "active " : "") + "sidenav-close"}><Link to="/minecraft">Minecraft</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarTop;