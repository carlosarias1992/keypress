import Lesson from './lesson';
import Keyboard from './keyboard';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const lesson = new Lesson(0);
    root.appendChild(lesson.render());
    lesson.moveCursor();

    const keyboard = new Keyboard(lesson.letters[lesson.currentLetterIndex]);
    const bottomSection = document.createElement("div");
    bottomSection.className = "bottom-section";
    bottomSection.appendChild(keyboard.render());
    root.appendChild(bottomSection);

    document.addEventListener("keypress", event => {
        lesson.handleInput(event);
        const keyboard = new Keyboard(lesson.letters[lesson.currentLetterIndex]);
        
        if (lesson.currentLetterIndex < lesson.letters.length) {
            keyboard.reset(bottomSection);
        }
    });

    document.addEventListener("keydown", event => {
        lesson.handleBackspace(event);
        const keyboard = new Keyboard(lesson.letters[lesson.currentLetterIndex]);

        if (lesson.currentLetterIndex < lesson.letters.length) {
            keyboard.reset(bottomSection);
        }
    });
});
