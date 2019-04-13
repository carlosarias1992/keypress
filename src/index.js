import HomePage from './home_page';
import LessonPage from './lesson_page';

document.addEventListener("DOMContentLoaded", () => {
    const lesson = new LessonPage();
    const home = new HomePage(lesson);
    home.render();
});
