import Lesson from './lesson';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const lesson = new Lesson(0);
    root.appendChild(lesson.render());
    lesson.moveCursor();

    document.addEventListener("keypress", event => {
        lesson.handleInput(event);
    });

    document.addEventListener("keydown", event => {
        lesson.handleBackspace(event);
    });
});
