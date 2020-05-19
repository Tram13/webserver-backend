import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";

class Jonas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("jonas");
    }

    componentDidMount() {
        const url = this.props.api["jonas"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            );
                            M.AutoInit()
                        }
                    )
            )
        )
    }

    render() {
        const kop1 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop1"]}
                          alt="Kop 1"/>;
        const kop2 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop2"]}
                          alt="Kop 2"/>;

        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className={"padded-left"}>
                    <h3>Jonas is een dikke sloef</h3>
                    <div>
                        <table>
                            <tbody>
                            <tr className={"no-border"}>
                                <td><h5>Jonas komt niet naar HashCode omdat hij ballen zuigt.</h5></td>
                                <td><h5>We waren 5de btw, take that Jonas</h5></td>
                            </tr>
                            <tr className={"no-border"}>
                                <td>{kop1}</td>
                                <td>{kop2}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default Jonas