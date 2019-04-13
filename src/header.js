class Header {
    constructor(lessonPage) {
        this.lessonPage = lessonPage;
        this.restart = false;
        this.audioController = lessonPage.audioController;
        this.renderLessonName = this.renderLessonName.bind(this);
        this.renderControllers = this.renderControllers.bind(this);
        this.restartLesson = this.restartLesson.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
    }

    restartLesson() {
        this.lessonPage.restartGame();
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
        restartController.innerHTML = '<i class="fas fa-undo"></i>';
    }

    renderControllers(parentElement) {
        const controllers = document.createElement("div");
        controllers.className = "right-controllers";
        parentElement.appendChild(controllers);

        this.renderRestartController(controllers);

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