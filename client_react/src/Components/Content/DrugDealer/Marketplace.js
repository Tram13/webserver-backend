import Drug from "./Drug";
import RandomGenerator from "./RandomGenerator";

class Marketplace {
    constructor() {
        this.rg = new RandomGenerator();
        const weed = new Drug("weed", 420);
        const shrooms = new Drug("shrooms", 500);
        const acid = new Drug("acid", 1500);
        const opium = new Drug("opium", 2000);
        const heroin = new Drug("heroin", 10000);
        const hashish = new Drug("hashish", 1000);
        const crack = new Drug("crack", 7000);
        const coke = new Drug("coke", 15000);
        const speed = new Drug("speed", 200);
        this.drugs = [weed, shrooms, acid, opium, heroin, hashish, crack, coke, speed];
    }

    updatePrices() {
        this.drugs.forEach((drug) => drug.price = Math.round(drug.price * this.getPriceMultiplier()));
    }

    getPriceMultiplier() {
        let priceMultiplier = this.rg.nextInt(25) / 100;
        if (this.rg.nextBoolean()) {
            priceMultiplier *= (-1);
        }
        priceMultiplier += 1;
        return priceMultiplier;
    }

    findDrugByName(name) {
        let i = 0;
        while (i < this.drugs.length && this.drugs[i].name !== name) {
            i++;
        }
        return this.drugs[i];
    }
}

export default Marketplace;