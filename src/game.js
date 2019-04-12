import Lesson from './lesson';
import Keyboard from './keyboard';
import Stats from './stats';
import Header from './header';
import lessons from './lessons';

class Game {
    constructor() {
        this.lessonNumber = undefined;
        this.lesson = undefined;
        this.stats = undefined;
        this.keyboard = undefined;
        this.header = undefined;
        this.parentElement = document.getElementById("root");
        this.renderKeyboard = this.renderKeyboard.bind(this);
        this.renderStats = this.renderStats.bind(this);
        this.getCurrentSpeed = this.getCurrentSpeed.bind(this);
        this.getCurrentAccuracy = this.getCurrentAccuracy.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.startLesson = this.startLesson.bind(this);
    }

    startLesson(lessonNumber) {
        this.lessonNumber = lessonNumber;
        this.parentElement.innerHTML = '';
        this.render();
    } 

    getCurrentAccuracy() {
        const { lesson, stats } = this;

        const currentLetters = lesson.letters.slice(0, lesson.currentLetterIndex);
        return stats.currentAccuracy(lesson.wrongLetters, lesson.editedLetters, currentLetters);
    }

    getCurrentSpeed() {
        const { lesson, stats } = this;

        const currentLetters = lesson.letters.slice(0, lesson.currentLetterIndex);
        return stats.currentSpeed(currentLetters);
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
            value.innerHTML = `${this.getCurrentAccuracy()}%`;
        } else if (valueName === "Speed") {
            value.innerHTML = `${this.getCurrentSpeed()} WPM`;
        }

        holder.appendChild(value);
    }

    renderStats(statsParentElement) {
        if (!document.querySelector(".stats")) {
            statsParentElement.className = "stats";

            this.statsElement(statsParentElement, "Accuracy");
            this.statsElement(statsParentElement, "Speed");

            this.parentElement.appendChild(statsParentElement);
        }
    }

    renderKeyboard(keyboardParentElement) {
        keyboardParentElement.className = "keyboard";
        this.keyboard.render(this.lesson.letters[0]);

        this.parentElement.appendChild(keyboardParentElement);
    }

    scrollDown() {
        const cursor = document.querySelector(".cursor");
        const lessonContainer = document.querySelector(".lesson-container");

        if (cursor && cursor.offsetTop > lessonContainer.scrollTop + 5 && lessonContainer.scrollHeight - cursor.offsetTop >= 207) {
            const timerId = setInterval(() => {
                lessonContainer.scrollTop += 1;

                if (lessonContainer.scrollTop + 5 > cursor.offsetTop) {
                    clearInterval(timerId);
                }
            }, 12);
        } 
    }

    scrollUp() {
        const cursor = document.querySelector(".cursor");
        const lessonContainer = document.querySelector(".lesson-container");

        if (cursor.offsetTop < lessonContainer.scrollTop) {
            const timerId = setInterval(() => {
                lessonContainer.scrollTop -= 1;

                if (lessonContainer.scrollTop + 1 < cursor.offsetTop) {
                    clearInterval(timerId);
                }
            }, 12);
        }
    }

    handleKeypress(e) {
        const { lesson, keyboard, stats, scrollDown, header } = this;

        const statsSection = document.createElement("div");
        const currentLetter = lesson.letters[lesson.currentLetterIndex + 1];
        lesson.handleInput(e);
        scrollDown();

        if (lesson.currentLetterIndex === 1) {
            stats.startTimer();
        }

        if (lesson.currentLetterIndex < lesson.letters.length) {
            const audio = header.sound;
            audio.play();
            keyboard.render(currentLetter);
        }

        if (lesson.currentLetterIndex === 9) {
            this.renderStats(statsSection);
        } else if (lesson.currentLetterIndex > 9 && lesson.currentLetterIndex < lesson.letters.length) {
            const accuracy = document.querySelector(".accuracy");
            accuracy.innerHTML = `${this.getCurrentAccuracy()}%`;

            const speed = document.querySelector(".speed");
            speed.innerHTML = `${this.getCurrentSpeed()} WPM`;
        }
    }

    handleKeydown(e) {
        const { lesson, keyboard, scrollUp, header } = this;

        const currentLetter = lesson.letters[lesson.currentLetterIndex - 1];
        lesson.handleBackspace(e);

        if (currentLetter && lesson.currentLetterIndex < lesson.letters.length && e.key === "Backspace") {
            const audio = header.sound;
            audio.play();
            keyboard.render(currentLetter);
            scrollUp();
        }
    }

    handleInput() {
        const { handleKeydown, handleKeypress } = this;

        document.addEventListener("keypress", handleKeypress);
        document.addEventListener("keydown", handleKeydown);
    }

    render() {
        this.lesson = new Lesson(this.lessonNumber);
        const { lesson, parentElement, renderKeyboard, lessonNumber } = this;

        this.header = new Header(lessons[lessonNumber]);
        this.stats = new Stats(lesson.letters);

        parentElement.appendChild(this.header.render());
        parentElement.appendChild(lesson.render());
        lesson.moveCursor();

        const keyboardSection = document.createElement("div");
        this.keyboard = new Keyboard(keyboardSection);
        renderKeyboard(keyboardSection);

        this.handleInput();
    }
}

export default Game;