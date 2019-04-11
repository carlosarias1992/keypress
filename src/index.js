import Lesson from './lesson';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const lesson = new Lesson(0);
    root.appendChild(lesson.render());
});
