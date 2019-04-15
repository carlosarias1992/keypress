import lessons from './lessons';

class Header {
    constructor(lessonPage) {
        this.lessonPage = lessonPage;
        this.restart = false;
        this.audioController = lessonPage.audioController;
        this.renderLessonName = this.renderLessonName.bind(this);
        this.renderControllers = this.renderControllers.bind(this);
        this.restartLesson = this.restartLesson.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        this.nextLesson = this.nextLesson.bind(this);
    }

    restartLesson() {
        this.lessonPage.restartGame();
    }

    nextLesson() {
        const nextLessonNumber = this.lessonPage.currentLesson.id;
        const nextLesson = lessons[nextLessonNumber + 1];
        this.lessonPage.render(nextLesson);
    }

    renderNextLessonButton(parentElement) {
        const nextLessonButton = document.createElement("button");
        nextLessonButton.onclick = this.nextLesson;
        nextLessonButton.title = "Next Lesson";
        nextLessonButton.innerHTML = '<i class="fas fa-step-forward"></i>';

        if (Object.values(lessons).length === this.lessonPage.currentLesson.id) {
            nextLessonButton.className = "disabled";
            nextLessonButton.disabled = true;
        }

        parentElement.appendChild(nextLessonButton);
    }

    renderMenu(parentElement) {
        const { lessonPage } = this;
        const menu = document.createElement("button");
        menu.onclick = lessonPage.renderHome;
        menu.className = "menu";
        parentElement.appendChild(menu);
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }

    renderLessonName(parentElement, lesson) {
        const lessonName = document.createElement("div");
        lessonName.className = "lesson-name";
        parentElement.appendChild(lessonName);
        lessonName.innerHTML = `Lesson ${lesson.id}: ${lesson.name}`;
    }

    renderRestartController(parentElement) {
        const restartController = document.createElement("button");
        parentElement.appendChild(restartController);
        restartController.onclick = this.restartLesson;
        restartController.title = "Restart Lesson";
        restartController.innerHTML = '<i class="fas fa-undo"></i>';
    }

    renderControllers(parentElement) {
        const controllers = document.createElement("div");
        controllers.className = "right-controllers";
        parentElement.appendChild(controllers);

        this.renderRestartController(controllers);
        this.renderNextLessonButton(controllers);

        const audioControllerDiv = document.createElement("div");
        controllers.appendChild(audioControllerDiv);
        this.audioController.render(audioControllerDiv);
    }

    render(lesson) {
        const { renderMenu, renderLessonName, renderControllers } = this;

        const header = document.createElement("header");
        const leftControllers = document.createElement("div");
        leftControllers.className = "left-controllers";
        header.appendChild(leftControllers);
        renderMenu(leftControllers);
        renderLessonName(leftControllers, lesson);
        renderControllers(header);

        return header;
    }
}

export default Header;