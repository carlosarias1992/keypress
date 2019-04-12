import LessonPage from './lesson_page';

document.addEventListener("DOMContentLoaded", () => {
    const lesson = new LessonPage(1);
    lesson.render();
});
