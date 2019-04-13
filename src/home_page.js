import lessons from './lessons';

class HomePage {
    constructor(lessonPage) {
        this.parentElement = document.getElementById("root");
        this.lessonPage = lessonPage;
        this.render = this.render.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderLesson(lessonNumber) {
        this.lessonPage.render(lessons[lessonNumber]);
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
        buttonImage.className = `button-image general-icon level-${lesson.level}`;
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

    renderHeader() {
        const header = document.createElement("header");
        header.className = "main-header";
        const link = document.createElement("a");
        link.href = "./index.html";
        link.innerHTML = "Keypress";
        header.appendChild(link);
        this.parentElement.appendChild(header);
    }

    render() {
        this.parentElement.innerHTML = '';
        this.renderHeader();
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

        const emptyButtons = (5 - (Object.values(lessons).length % 5));

        for (let i = 0; i < emptyButtons; i++) {
            const emptyButton = document.createElement("button");
            emptyButton.className = "col-sm empty-button";
            row.appendChild(emptyButton);
        }

        this.parentElement.appendChild(lessonsContainer);
    }
}

export default HomePage;