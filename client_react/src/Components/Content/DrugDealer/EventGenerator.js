import RandomGenerator from "./RandomGenerator";
import RandomEvent from "./RandomEvent";

class EventGenerator {
    constructor() {
        this.rg = new RandomGenerator();
        this.events = [];
        this.createEvents();
    }

    createEvents() {
        this.events.push(new RandomEvent(
            ["acid"],
            [100 + this.rg.nextInt(35)],
            "The market is flooded with cheap homemade acid!"
        ));
        this.events.push(new RandomEvent(
            ["speed"],
            [600 + this.rg.nextInt(500)],
            "Addicts are buying speed at high prices!"
        ));
        this.events.push(new RandomEvent(
            ["weed"],
            [100 + this.rg.nextInt(100)],
            "Weed prices have bottomed out!"
        ));
        this.events.push(new RandomEvent(
            ["coke"],
            [25000 + this.rg.nextInt(5000)],
            "Addicts are buying coke at very high prices."
        ));
        this.events.push(new RandomEvent(
            ["weed"],
            [700 + this.rg.nextInt(200)],
            "Major weed bust, prices are high!"
        ));
        this.events.push(new RandomEvent(
            ["weed", "shrooms"],
            [700 + this.rg.nextInt(100), 800 + this.rg.nextInt(150)],
            "A bunch of hippies are in town. Weed and shroom prices are high!"
        ));
        this.events.push(new RandomEvent(
            ["opium"],
            [10000 + this.rg.nextInt(1000)],
            "Huge opium bust, prices are out of control!"
        ));
    }

    getRandomEvent() {
        return this.events[this.rg.nextInt(this.events.length - 1)]
    }

    applyRandomEvent() {
        if (this.rg.nextInt(3) === 0) {
            const event = this.getRandomEvent();
            event.apply();
        }
    }
}

export default EventGenerator;