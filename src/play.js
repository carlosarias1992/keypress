import Lesson from './lesson';
import Keyboard from './keyboard';
import Stats from './stats';

class Play {
    constructor(lessonNumber, parentElement) {
        this.lessonNumber = lessonNumber;
        this.lesson = undefined;
        this.keyboard = undefined;
        this.parentElement = parentElement;
        this.renderKeyboard = this.renderKeyboard.bind(this);
    }

    renderStats(stats, statsParentElement) {
        statsParentElement.className = "stats";
        stats.render();

        this.parentElement.appendChild(statsParentElement);
    }

    renderKeyboard(keyboard, keyboardParentElement) {
        keyboardParentElement.className = "keyboard";
        keyboard.render(this.lesson.letters[0]);

        this.parentElement.appendChild(keyboardParentElement);
    }

    handleInput() {
        const { lesson, keyboard } = this;
        const stats = new Stats(lesson.letters);
        const currentLetter = lesson.letters[lesson.currentLetterIndex];

        document.addEventListener("keypress", e => {
            lesson.handleInput(e);

            if (lesson.currentLetterIndex === 0) {
                stats.startTimer();
            }

            if (lesson.currentLetterIndex < lesson.letters.length) {
                keyboard.render(currentLetter);
            }
        });

        document.addEventListener("keydown", e => {
            lesson.handleBackspace(e);

            if (lesson.currentLetterIndex < lesson.letters.length) {
                keyboard.render(currentLetter);
            }
        });
    }

    render() {
        this.lesson = new Lesson(this.lessonNumber);
        const { lesson, parentElement, renderKeyboard, renderStats } = this;

        parentElement.appendChild(lesson.render());
        lesson.moveCursor();

        const statsSection = document.createElement("div");
        this.stats = new Stats(lesson.letters);
        renderStats(stats, statsSection);

        const keyboardSection = document.createElement("div");
        this.keyboard = new Keyboard(keyboardSection);
        renderKeyboard(this.keyboard, keyboardSection);

        this.handleInput();
    }
}

export default Play;