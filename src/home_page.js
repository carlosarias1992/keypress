import lessons from './lessons';
import { typewriterEffect } from './util';

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
        this.renderRating(button, lesson.id);
        button.appendChild(this.buttonFooter(lesson));

        return button;
    }

    renderHeader() {
        const header = document.createElement("header");
        header.className = "main-header";
        
        const link = document.createElement("button");
        link.className="logo-button";
        link.onclick = this.render;
        link.innerHTML = "<img src='assets/images/logo.png' />Keypress";
        header.appendChild(link);

        this.parentElement.appendChild(header);
    }

    renderRating(parentElement, lessonNumber) {
        if (this.lessonPage.ratings[lessonNumber]) {
            const ratingElement = document.createElement("div");
            const rating = this.lessonPage.ratings[lessonNumber].rating;
            ratingElement.className = `button-stars stars-${rating}`;

            if (rating >= 3) {
                parentElement.appendChild(ratingElement);
            }
        }
    }

    renderSplash() {
        this.parentElement.innerHTML = '';
        const splash = document.createElement("div");
        splash.className = "splash";
        this.parentElement.appendChild(splash);

        const splashHeader = document.createElement("div");
        splashHeader.className = "splash-header";

        const logoButton = document.createElement("button");
        logoButton.onclick = this.render;
        logoButton.innerHTML = "Keypress";
        splashHeader.appendChild(logoButton);

        splash.appendChild(splashHeader);

        const moonImage = document.createElement("img");
        moonImage.src = "assets/images/moon.png";
        moonImage.className = "moon";
        splash.appendChild(moonImage);

        const titleSection = document.createElement("div");
        titleSection.className = "splash-title";
        splash.appendChild(titleSection);

        const title = document.createElement("h1");
        typewriterEffect(title, "Learn Touch Typing for free!");
        titleSection.appendChild(title);

        const span = document.createElement("span");
        span.innerHTML = "|";
        titleSection.appendChild(span);

        const subtitle = document.createElement("p");
        subtitle.innerHTML = "Click the button below and choose a lesson to begin learning";
        titleSection.appendChild(subtitle);

        const titleButton = document.createElement("button");
        titleButton.innerHTML = "Get Started";
        titleButton.onclick = this.render;
        titleSection.appendChild(titleButton);
    }

    render() {
        scrollTo(0, 0);
        document.querySelector("body").style.overflow = "auto";
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