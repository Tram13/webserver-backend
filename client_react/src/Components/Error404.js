import React from "react";

class Error404 extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("");
    }


    render() {
        return (
            <div>
                <table className={"centered"}>
                    <tbody>
                    <tr>
                        <td><h1>404.</h1></td>
                        <td><h4>We couldn't find that page.</h4></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Error404