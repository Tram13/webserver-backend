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
        const kop1 = <img className="materialboxed" width="650" src={this.state.data["kop1"]} alt="Kop1"/>
        const kop2 = <img className="materialboxed" width="650" src={this.state.data["kop2"]} alt="Kop2"/>
        const kop3 = <img className="materialboxed" width="650" src={this.state.data["kop3"]} alt="Kop3"/>
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div>
                    {kop1}
                    {kop2}
                    {kop3}
                </div>
            )
        }
    }
}

export default Wout