import lessons from './lessons';

class Lesson {
    constructor(lessonNumber) {
        this.lesson = lessons[lessonNumber];
    }

    render() {
        const { content } = this.lesson;
        const lessonContainer = document.createElement("div");
        lessonContainer.className = "lesson-container";

        content.split("").forEach((letter, idx) => {
            const letterHolder = document.createElement("span");

            if (idx === 0) {
                letterHolder.className = "letter-holder cursor";
            } else {
                letterHolder.className = "letter-holder";
            }

            letterHolder.innerHTML = letter;
            lessonContainer.appendChild(letterHolder);
        });

        return lessonContainer;
    }
}

export default Lesson;