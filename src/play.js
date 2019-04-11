import Lesson from './lesson';
import Keyboard from './keyboard';
import Stats from './stats';

class Play {
    constructor(lessonNumber, parentElement) {
        this.lessonNumber = lessonNumber;
        this.lesson = '';
        this.parentElement = parentElement;
    }

    renderKeyboard(keyboard, parentElement) {
        parentElement.className = "keyboard";
        keyboard.render(this.lesson.letters[0]);

        this.parentElement.appendChild(parentElement);
    }

    render() {
        const lesson = new Lesson(this.lessonNumber);
        this.lesson = lesson;
        
        this.parentElement.appendChild(lesson.render());
        lesson.moveCursor();

        const keyboardSection = document.createElement("div");
        const keyboard = new Keyboard(keyboardSection);
        this.renderKeyboard(keyboard, keyboardSection);

        // const stats = new Stats(lesson.letters);

        // document.addEventListener("keypress", event => {
        //     if (lesson.currentLetterIndex === 0) {
        //         stats.startTimer();
        //     }

        //     console.log(stats.accuracy(lesson.wrongLetters, lesson.editedLetters));

        //     lesson.handleInput(event);
        //     const keyboard = new Keyboard(lesson.letters[lesson.currentLetterIndex]);

        //     if (lesson.currentLetterIndex < lesson.letters.length) {
        //         keyboard.reset(keyboardSection);
        //     }
        // });

        // document.addEventListener("keydown", event => {
        //     lesson.handleBackspace(event);
        //     const keyboard = new Keyboard(lesson.letters[lesson.currentLetterIndex]);

        //     if (lesson.currentLetterIndex < lesson.letters.length) {
        //         keyboard.reset(keyboardSection);
        //     }
        // });
    }
}

export default Play;