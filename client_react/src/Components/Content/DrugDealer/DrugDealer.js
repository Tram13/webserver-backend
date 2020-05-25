import React from "react";
import RandomGenerator from "./RandomGenerator";
import Marketplace from "./Marketplace";
import EventGenerator from "./EventGenerator";

class DrugDealer extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("drugdealer");
        this.marketplace = new Marketplace();
        this.rg = new RandomGenerator();
        this.eventGenerator = new EventGenerator();
        this.cash = 2500;
        this.daysleft = 32;
    }

    nextDay = () => {
        if (this.daysleft > 0) {
            this.marketplace.updatePrices();
            this.eventGenerator.applyRandomEvent();
            this.daysleft--;
            // Because the state itself doesn't get updated
            this.forceUpdate();
        }
    };

    onClickBuy = (event) => {
        const drug = this.marketplace.findDrugByName(event.target.name)
        drug.buy(1);
        this.forceUpdate();
    };

    drugsToTableRows = () => {
        return this.marketplace.drugs.map(
            (drug) =>
                <tr key={drug.name}>
                    <td className="padded-left" key={drug.name + "Name"}>{drug.name}</td>
                    <td key={drug.name + "Price"}>{"€" + drug.price}</td>
                    <td key={drug.name + "Buy"}>
                        <a name={drug.name} className="waves-effect waves-light btn" onClick={this.onClickBuy}><i
                            className="material-icons right">attach_money</i>Buy</a>
                    </td>
                    <td key={drug.name + "Owned"}>{drug.owned}</td>
                </tr>
        );
    };

    render() {
        return (
            <div>
                <table id="gameTable" className="responsive-table striped highlight centered">
                    <thead>
                    <tr>
                        <th key="drugName" className="padded-left">Drug name</th>
                        <th key="drugPrice">Price</th>
                        <th key="drugBuy">Buy</th>
                        <th key="drugOwned">Your possesion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.drugsToTableRows()}
                    </tbody>
                </table>
                <a className="waves-effect waves-light btn" onClick={this.nextDay}>button</a>
            </div>
        )
    }
}

export default DrugDealer;
/* TODO: deze events laten werken

        randomEvent() {
                if (xx === 5) {
                    const lost = random(2000);
                    if ((cash - lost) < 0) lost = cash;
                    alert("You were mugged in the subway, you lost " + Currency(lost));
                    cash = cash - lost;
                    if (cash < 0) cash = 0;
                }

                if (xx === 7) {
                    const x = random(9) - 1;
                    alert("Your crackhead friend unloaded some " + drugs[x] + " on you!");
                    yourdrugs[x] = drugs[x];
                    yourprice[x] = 0;
                    quants[x] = Number(quants[x]) + Number(random(5));
                    showyours();
                }
                if (xx === 8) {
                    const x = random(9) - 1
                    alert(drugs[x] + " prices are low!");
                    price[x] = price[x] / 2;
                }
                if (xx === 11) {
                    const x = random(9) - 1;
                    alert("Big " + drugs[x] + " bust. Prices have doubled!");
                    price[x] = price[x] * 2;
                }
            }
        }
    }
    */