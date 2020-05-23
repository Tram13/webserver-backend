import React from 'react';
import {Link} from "react-router-dom";

class NavBarSide extends React.Component {
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
            <ul className="sidenav" id="mobile-demo">
                <li className={(this.props.selected === "" ? "active " : "") + "sidenav-close clickable"}>
                    <Link to="" onClick={this.rickroll} className="nav-content padded-left">Home</Link>
                </li>
                <li>
                    <div className="divider"/>
                </li>
                <li className={(this.props.selected === "wout" ? "red lighten-3 active " : "") + "sidenav-close clickable"}>
                    <Link to="/wout">Wout</Link></li>
                <li className={(this.props.selected === "jonas" ? "red lighten-3 active " : "") + "sidenav-close clickable"}>
                    <Link to="/jonas">Jonas</Link></li>
                <li className={(this.props.selected === "minecraft" ? "red lighten-3 active " : "") + "sidenav-close clickable"}>
                    <Link to="/minecraft">Minecraft</Link></li>
                <li className={(this.props.selected === "suggestions" ? "red lighten-3 active " : "") + "sidenav-close clickable"}>
                    <Link to="/suggestions">Suggestions</Link></li>
            </ul>
        )
    }
}

export default NavBarSide;