import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";

class Wout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("wout");
    }

    componentDidMount() {
        const url = this.props.api["wout"];
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
        const kop3 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop3"]}
                          alt="Kop 3"/>;


        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className={"padded-left"}>
                    <h3>Wout zuigt ballen in WebDev</h3>
                    <div>
                        <h5>when you sudo reboot and it doesn't work anymore</h5>
                        <table>
                            <tbody>
                            <tr className={"no-border"}>
                                <td>{kop1}</td>
                                <td>{kop2}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h5>when you do it again</h5>
                        {kop3}
                    </div>
                </div>
            )
        }
    }
}

export default Wout