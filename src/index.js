import HomePage from './home_page';
import LessonPage from './lesson_page';

document.addEventListener("DOMContentLoaded", () => {
    const cachedYellowStar = new Image();
    cachedYellowStar.src = `assets/images/yellow-star.png`;

    const cachedEmptyStar = new Image();
    cachedEmptyStar.src = `assets/images/empty-star.png`;

    const lesson = new LessonPage();
    const home = new HomePage(lesson);
    home.render();
});
