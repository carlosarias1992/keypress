import Lesson from './lesson';
import Keyboard from './keyboard';
import Stats from './stats';

class Play {
    constructor(lessonNumber, parentElement) {
        this.lessonNumber = lessonNumber;
        this.lesson = undefined;
        this.stats = undefined;
        this.keyboard = undefined;
        this.parentElement = parentElement;
        this.renderKeyboard = this.renderKeyboard.bind(this);
        this.renderStats = this.renderStats.bind(this);
        this.getCurrentSpeed = this.getCurrentSpeed.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    getCurrentSpeed() {
        const currentLetters = this.lesson.letters.slice(0, this.lesson.currentLetterIndex);
        return this.stats.currentSpeed(currentLetters);
    }

    statsElement(parentElement, valueName) {
        const holder = document.createElement("div");
        parentElement.appendChild(holder);
        const title = document.createElement("h2");
        title.innerHTML = valueName;
        holder.appendChild(title);
        const value = document.createElement("p");
        value.className = valueName.toLowerCase();

        if (valueName === "Accuracy") {
            value.innerHTML = `${this.stats.accuracy(this.lesson.wrongLetters, this.lesson.editedLetters)}%`;
        } else if (valueName === "Speed") {
            value.innerHTML = `${this.getCurrentSpeed()} WPM`;
        }

        holder.appendChild(value);
    }

    renderStats(statsParentElement) {
        statsParentElement.className = "stats";

        this.statsElement(statsParentElement, "Accuracy");
        this.statsElement(statsParentElement, "Speed");

        this.parentElement.appendChild(statsParentElement);
    }

    renderKeyboard(keyboardParentElement) {
        keyboardParentElement.className = "keyboard";
        this.keyboard.render(this.lesson.letters[0]);

        this.parentElement.appendChild(keyboardParentElement);
    }

    handleInput() {
        const { lesson, keyboard, stats } = this;
        const statsSection = document.createElement("div");

        document.addEventListener("keypress", e => {
            const currentLetter = lesson.letters[lesson.currentLetterIndex];
            lesson.handleInput(e);

            if (lesson.currentLetterIndex === 1) {
                stats.startTimer();
            }

            if (lesson.currentLetterIndex < lesson.letters.length) {
                keyboard.render(currentLetter);
            }

            if (lesson.currentLetterIndex === 9) {
                this.renderStats(statsSection);
            } else if (lesson.currentLetterIndex > 9) {
                const accuracy = document.querySelector(".accuracy");
                accuracy.innerHTML = `${stats.accuracy(this.lesson.wrongLetters, this.lesson.editedLetters)}%`;
                
                const speed = document.querySelector(".speed");
                speed.innerHTML = `${this.getCurrentSpeed()} WPM`;
            }
        });

        document.addEventListener("keydown", e => {
            const currentLetter = lesson.letters[lesson.currentLetterIndex];
            lesson.handleBackspace(e);

            if (lesson.currentLetterIndex < lesson.letters.length && e.key === "Backspace") {
                keyboard.render(currentLetter);
            }
        });
    }

    render() {
        this.lesson = new Lesson(this.lessonNumber);
        const { lesson, parentElement, renderKeyboard } = this;

        this.stats = new Stats(lesson.letters);

        parentElement.appendChild(lesson.render());
        lesson.moveCursor();

        const keyboardSection = document.createElement("div");
        this.keyboard = new Keyboard(keyboardSection);
        renderKeyboard(keyboardSection);

        this.handleInput();
    }
}

export default Play;