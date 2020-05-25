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
                    <Link to="" onClick={this.rickroll} className="hide-on-med-and-down nav-content padded-left">Tram13</Link>
                    <Link to="" onClick={this.rickroll} className="hide-on-large-only nav-content right padded-right">Tram13</Link>
                    <a onClick={(e) => e.preventDefault()} data-target="mobile-demo" className="sidenav-trigger"
                       href={"#!"}>
                        <i className="hide-on-small-and-up material-icons">
                            list
                        </i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {this.props.navBarItems}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarTop;