class Header {
    constructor(lesson) {
        this.lesson = lesson;
        this.audio = true;
        this.renderLessonName = this.renderLessonName.bind(this);
    }

    renderMenu(parentElement) {
        const menu = document.createElement("button");
        menu.className = "menu";
        parentElement.appendChild(menu);
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }

    renderLessonName(parentElement) {
        const { lesson } = this;

        const lessonName = document.createElement("div");
        lessonName.className = "lesson-name";
        parentElement.appendChild(lessonName);
        lessonName.innerHTML = `Lesson ${lesson.id}: ${lesson.name}`;
    }

    renderControllers(parentElement) {
        const controllers = document.createElement("div");
        controllers.className = "right-controllers";
        parentElement.appendChild(controllers);

        const sound = document.createElement("button");
        sound.className = "sound";
        sound.innerHTML = '<i class="fas fa-volume-up"></i>';
        controllers.appendChild(sound);
    }

    render() {
        const { renderMenu, renderLessonName, renderControllers } = this;

        const header = document.createElement("header");
        const leftControllers = document.createElement("div");
        leftControllers.className = "left-controllers";
        header.appendChild(leftControllers);
        renderMenu(leftControllers);
        renderLessonName(leftControllers);
        renderControllers(header);

        return header;
    }
}

export default Header;