import AudioController from './audio_controller';

class Header {
    constructor(lesson) {
        this.lesson = lesson;
        this.sound = undefined;
        this.renderLessonName = this.renderLessonName.bind(this);
        this.renderControllers = this.renderControllers.bind(this);
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
        const audioController = document.createElement("div");
        controllers.appendChild(audioController);

        this.sound = new AudioController("assets/audio/key-press.mp3", audioController);
        this.sound.render();
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