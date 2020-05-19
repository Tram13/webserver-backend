import React from "react";
import LoadingAnimation from "../LoadingAnimation";

class Minecraft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("minecraft");
    }

    componentDidMount() {
        const url = this.props.api["minecraft"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            )
                        }
                    )
            )
        )
    }

    render() {
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            let status;
            if (this.state.data['online']) {
                status = <h4>Huidige status: Online<i className="material-icons padded-left">check</i></h4>
            } else {
                status = <h4>Huidige status: Offline<i className="material-icons padded-left">error</i></h4>
            }
            return (
                <div className="padded-left">
                    <h3>Minecraft toegangsportaal</h3>
                    <h5>Welkom op het wereldwijde web, 90s-style.</h5>
                    <p>
                        Koop hier je maandticket voor de SkyFactory-server! Huidige maand: mei
                    </p>
                    <p>
                        Preorders voor juni staan ook al open.
                    </p>
                    <p>
                        De inkomsten worden opnieuw geïnvesteerd in de hardware van de server en deze website.
                    </p>
                    <p>
                        Minimumdonatie is 9.95EUR. Vermeld de gebruikersnaam in het bericht.
                    </p>
                    <p/>
                    <h3>
                        <a href="https://www.paypal.me/vermotearno">PayPal-Link</a>
                    </h3>
                    {status}
                </div>
            )
        }
    }
}

export default Minecraft

