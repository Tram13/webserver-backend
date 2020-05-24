import React from "react";
import LoadingAnimation from "../LoadingAnimation";

class Amber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("amber");
    }

    render() {
        return (
            <LoadingAnimation/>
        )
    }
}

export default Amber