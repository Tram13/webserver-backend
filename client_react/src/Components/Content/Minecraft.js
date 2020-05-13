import React from "react";

class Minecraft extends React.Component {

    render() {
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
            </div>
        )
    }
}

export default Minecraft

