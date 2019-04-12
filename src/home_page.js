import LessonPage from './lesson_page';
import lessons from './lessons';

class HomePage {
    constructor() {
        this.parentElement = document.getElementById("root");
    }

    renderLesson(lessonNumber) {
        const lesson = new LessonPage(lessonNumber);
        lesson.render();
    }

    buttonHeader(lesson) {
        const buttonHeader = document.createElement("div");
        buttonHeader.className = "button-header";
        buttonHeader.innerHTML = lesson.id;

        return buttonHeader;
    }

    buttonFooter(lesson) {
        const buttonFooter = document.createElement("div");
        buttonFooter.className = "button-footer";
        buttonFooter.innerHTML = lesson.name;

        return buttonFooter;
    }

    buttonImage(lesson) {
        const buttonImage = document.createElement("div");
        buttonImage.className = "button-image";
        buttonImage.innerHTML = "";

        return buttonImage;
    }

    renderLessonBox(lesson) {
        const button = document.createElement("button");
        button.className = "col-sm";
        button.onclick = () => this.renderLesson(lesson.id);
        button.appendChild(this.buttonHeader(lesson));
        button.appendChild(this.buttonImage(lesson));
        button.appendChild(this.buttonFooter(lesson));

        return button;
    }

    render() {
        const lessonsContainer = document.createElement("div");
        lessonsContainer.className = "all-lessons";
        const allLessons = document.createElement("div");
        allLessons.className = "container";
        lessonsContainer.appendChild(allLessons);
        let row;

        Object.values(lessons).forEach((lesson, idx) => {
            if (idx % 5 === 0) {
                row = document.createElement("div");
                row.className = "row";
                allLessons.appendChild(row);
            }

            row.appendChild(this.renderLessonBox(lesson));
        });

        this.parentElement.appendChild(lessonsContainer);
    }
}

export default HomePage;