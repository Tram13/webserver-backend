import React from "react";
import LoadingAnimation from "../LoadingAnimation";
import M from "materialize-css"

class Wout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {kop1: undefined}, fetching: true};
    }

    componentDidMount() {
        const url = this.props.api["wout"]
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            )
                            M.AutoInit()
                        }
                    )
            )
        )
    }

    render() {
        const kop1 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop1"]}
                          alt="Kop 1"/>
        const kop2 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop2"]}
                          alt="Kop 2"/>
        const kop3 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop3"]}
                          alt="Kop 3"/>
        const panel1 = <div>
            <div className="row">
                <div className="column">
                    {kop1}
                </div>
                <div className="column">
                    {kop2}
                </div>
            </div>
        </div>
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div>
                    <h3>Wout zuigt ballen in WebDev</h3>
                    <div>
                        <h5>when you sudo reboot and it doesn't work anymore</h5>
                        <div>
                            {panel1}
                        </div>
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