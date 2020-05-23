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
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="" onClick={this.rickroll} className="nav-content padded-left">Tram13</Link>
                    <a onClick={(e) => e.preventDefault()} data-target="mobile-demo" className="sidenav-trigger"
                       href={"#!"}>
                        <i className="hide-on-med-and-up material-icons">
                            list
                        </i>
                    </a>
                    <ul className="right hide-on-small-and-down">
                        <li className={(this.props.selected === "wout" ? "red lighten-3 active" : "") + "sidenav-close"}>
                            <Link to="/wout">Wout</Link></li>
                        <li className={(this.props.selected === "jonas" ? "red lighten-3 active " : "") + "sidenav-close"}>
                            <Link to="/jonas">Jonas</Link></li>
                        <li className={(this.props.selected === "minecraft" ? "red lighten-3 active " : "") + "sidenav-close"}>
                            <Link to="/minecraft">Minecraft</Link></li>
                        <li className={(this.props.selected === "suggestions" ? "red lighten-3 active " : "") + "sidenav-close"}>
                            <Link to="/suggestions">Suggestions</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarTop;