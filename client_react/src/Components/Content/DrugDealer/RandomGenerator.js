class RandomGenerator {

    // inclusive 0 to i
    nextInt(i) {
        return Math.floor(Math.random() * (i + 1));
    }

    nextBoolean() {
        return this.nextInt(1) === 0;
    }
}

export default RandomGenerator;