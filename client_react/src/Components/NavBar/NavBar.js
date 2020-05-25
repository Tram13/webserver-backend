import React from "react";
import M from "materialize-css"
import NavBarSide from "./NavBarSide";
import NavBarTop from "./NavBarTop";
import {Link} from "react-router-dom";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.data = [
            "amber",
            "wout",
            "jonas",
            "minecraft",
            "suggestions",
            "ardennen",
            "drugdealer"
        ].sort();
    }

    componentDidMount() {
        M.AutoInit();
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }

    generateNavBarItems = () => {
        return this.data.map(
            (item) =>
                <li key={item}
                    className={(this.props.selected === item ? "red lighten-3 active " : "") + "sidenav-close"}>
                    <Link to={"/" + item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></li>
        )
    };

    render() {
        this.navBarItems = this.generateNavBarItems();
        return (
            <div>
                <NavBarTop selected={this.props.selected} navBarItems={this.navBarItems}/>
                <NavBarSide selected={this.props.selected} navBarItems={this.navBarItems}/>
            </div>
        )
    }
}

export default NavBar;