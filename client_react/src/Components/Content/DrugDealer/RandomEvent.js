class RandomEvent {
    /**
     *
     * @param target = [String]; what drugs change in price? eg. ["weed", "shrooms"]
     * @param change = [Int]; sets the new price after the event eg. [500, 600]
     * @param message = String; what happened?
     */
    constructor(target, change, message) {
        this.targets = target;
        this.change = change;
        this.message = message;
    }

    apply() {
    }
}

export default RandomEvent;