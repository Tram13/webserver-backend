import React from "react";

class Minecraft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Minecraft toegangsportaal</h1>
                <h4>Welkom op het wereldwijde web, 90s-style.</h4>
                <p>
                    Koop hier je maandticket voor de SkyFactory-server! Huidige maand: mei
                </p>
                <p>
                    De inkomsten worden opnieuw geïnvesteerd in de hardware van de server en deze website.
                </p>
                <p>
                    Minimumdonatie is 9.95EUR. Vermeld de gebruikersnaam in het bericht.
                </p>
                <p/>
                <h1>
                    <a href="https://www.paypal.me/vermotearno">PayPal-Link</a>
                </h1>
            </div>
        )
    }
}

export default Minecraft

