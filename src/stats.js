class Stats {
    constructor(lesson) {
        this.start = undefined;
        this.content = lesson.letters;
        this.level = lesson.level;
        this.wrongLetters = lesson.wrongLetters;
        this.editedLetters = lesson.editedLetters;
        this.accuracy = this.accuracy.bind(this);
        this.realAccuracy = this.realAccuracy.bind(this);
    }

    startTimer() {
        this.start = Date.now();
    }

    duration() {
        const endTime = Date.now() - this.start;
        return Math.ceil(endTime / 1000);
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

    accuracy() {
        const { content, wrongLetters, editedLetters } = this;
        return Math.ceil(((content.length - wrongLetters.length + editedLetters.length) / content.length) * 100);
    }

    realAccuracy() {
        const { content, wrongLetters } = this;
        return Math.ceil(((content.length - wrongLetters.length) / content.length) * 100);
    }
}

export default Stats;