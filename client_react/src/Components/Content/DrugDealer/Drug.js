class Drug {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.owned = 0;
        this.boughtAt = undefined;
    }

    buy(amount) {
        this.owned += amount;
        this.boughtAt = this.price;
        return true;
    }

    sell(amount) {
        if (this.owned > amount) {
            return false;
        } else {
            this.owned -= amount;
            return true;
        }
    }
}

export default Drug;