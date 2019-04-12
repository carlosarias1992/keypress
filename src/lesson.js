import lessons from './lessons';
import { addClass, removeClass } from './util';

class Lesson {
    constructor(lessonNumber) {
        this.lesson = lessons[lessonNumber];
        this.letters = [];
        this.editedLetters = [];
        this.wrongLetters = [];
        this.words = this.lesson.content.split(" ");
        this.start = 0;
        this.duration = 0;
        this.currentLetterIndex = 0;
        this.updateCompletionBar = this.updateCompletionBar.bind(this);
    }

    currentElement() {
        const letters = document.querySelectorAll(".letter-holder");
        return letters[this.currentLetterIndex];
    }

    moveCursor() {
        const letters = document.querySelectorAll(".letter-holder");
        addClass(letters[this.currentLetterIndex], "cursor");
    }

    renderLetter(letter) {
        const letterHolder = document.createElement("span");
        letterHolder.className = "letter-holder";
        letterHolder.innerHTML = letter;
        return letterHolder;
    }

    renderWord(word, lastWord) {
        const wordContainer = document.createElement("pre");
        wordContainer.className = "word-container";
        const letters = word.split("");
        
        letters.forEach((letter, idx) => {
            this.letters.push(letter);
            wordContainer.appendChild(this.renderLetter(letter));

            if (idx === letters.length - 1 && !lastWord) {
                this.letters.push(" ");
                wordContainer.appendChild(this.renderLetter(" "));
            }
        });

        return wordContainer;
    }

    render() {
        const lessonContainer = document.createElement("div");
        lessonContainer.className = "lesson-container";

        this.words.forEach((word, idx) => {
            const lastWord = idx === this.words.length - 1 ? true : false;
            lessonContainer.appendChild(this.renderWord(word, lastWord));
        });

        lessonContainer.appendChild(this.completionBar());
        return lessonContainer;
    }

    completionBar() {
        const bar = document.createElement("div");
        bar.className = "completion-bar";
        return bar;
    }

    updateCompletionBar() {
        const bar = document.querySelector(".completion-bar");
        const width = (this.currentLetterIndex / (this.letters.length)) * 65;
        bar.style.width = `${width}%`;
    }

    handleBackspace(e) {
        if (this.currentLetterIndex > 0 && this.currentLetterIndex !== this.letters.length) {
            if (e.key === "Backspace") {
                const currentElement = this.currentElement();
                this.currentLetterIndex -= 1;
                const previousElement = this.currentElement();
                
                if (this.wrongLetters.includes(this.currentLetterIndex) && !this.editedLetters.includes(this.currentLetterIndex)) {
                    this.editedLetters.push(this.currentLetterIndex);
                }

                removeClass(previousElement, "wrong");
                removeClass(previousElement, "correct");
                removeClass(previousElement, "edited");
                removeClass(currentElement, "cursor");
                this.moveCursor();
                this.updateCompletionBar();
            }
        }
    }

    handleInput(e) {
        if (this.currentLetterIndex === 0) this.start = Date.now();

        if (this.currentLetterIndex !== this.letters.length) {
            const currentLetter = this.letters[this.currentLetterIndex];
            const currentElement = this.currentElement();

            if (this.editedLetters.includes(this.currentLetterIndex) && e.key === currentLetter) {
                addClass(currentElement, "edited");
                removeClass(currentElement, "cursor");
            } else if (e.key === currentLetter) {
                addClass(currentElement, "correct");
                removeClass(currentElement, "cursor");
            } else {
                if (!this.wrongLetters.includes(this.currentLetterIndex)) {
                    this.wrongLetters.push(this.currentLetterIndex);
                }
                addClass(currentElement, "wrong");
                removeClass(currentElement, "cursor");
            }

            this.currentLetterIndex += 1;
            if (this.currentLetterIndex !== this.letters.length) this.moveCursor();
            this.updateCompletionBar();
        }
    }
}

export default Lesson;