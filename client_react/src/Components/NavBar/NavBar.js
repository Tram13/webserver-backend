import React from "react";
import M from "materialize-css"
import NavBarSide from "./NavBarSide";
import NavBarTop from "./NavBarTop";

class NavBar extends React.Component {

    componentDidMount() {
        M.AutoInit();
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }

    render() {
        return (
            <div>
                <NavBarTop/>
                <NavBarSide/>
            </div>
        )
    }
}

export default NavBar;