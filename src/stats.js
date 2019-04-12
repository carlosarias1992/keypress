class Stats {
    constructor(content) {
        this.start = undefined;
        this.content = content;
        this.accuracy = this.accuracy.bind(this);
        this.realAccuracy = this.realAccuracy.bind(this);
    }

    startTimer() {
        this.start = Date.now();
    }

    duration() {
        const endTime = Date.now() - this.start;
        return endTime / 1000;
    }

    speed() {
        return Math.ceil((this.content.length / 4.5) / this.duration() * 60);
    }

    currentAccuracy(wrongLetters, editedLetters, content) {
        return Math.ceil(((content.length - wrongLetters.length + editedLetters.length) / content.length) * 100);
    }

    currentSpeed(content) {
        return Math.ceil((content.length / 4.5) / this.duration() * 60);
    }

    accuracy(wrongLetters, editedLetters) {
        const { content } = this;
        return Math.ceil(((content.length - wrongLetters.length + editedLetters.length) / content.length) * 100);
    }

    realAccuracy(wrongLetters) {
        const { content } = this;
        return ((content.length - wrongLetters.length) / content.length) * 100;
    }
}

export default Stats;