import React from "react";
import { Redirect } from "react-router-dom";

class RedirectToHomePage extends React.Component {
    render() {
        return (<Redirect to={""}/>)
    }
}

export default RedirectToHomePage