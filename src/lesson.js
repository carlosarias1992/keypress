import lessons from './lessons';
import { addClass, removeClass } from './util';

class Lesson {
    constructor(lessonNumber) {
        this.letters = [];
        this.editedLetters = [];
        this.wrongLetters = [];
        this.id = lessonNumber;
        this.level = lessons[lessonNumber].level;
        this.words = lessons[lessonNumber].content.split(" ");
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
        
        if (letter === "\n") {
            letterHolder.className += " enter";
        }

        letterHolder.innerHTML = letter;
        return letterHolder;
    }

    renderWord(parentElement, word, lastWord, nextLine) {
        const wordContainer = document.createElement("pre");
        wordContainer.className = "word-container";

        if (word.includes("\n")) {
            const words = word.split("\n");

            words.forEach((word, idx) => {
                if (idx === 0) {
                    this.renderWord(parentElement, word, lastWord, true);
                } else {
                    this.renderWord(parentElement, word, lastWord);
                }
            });
        } else {
            parentElement.appendChild(wordContainer);
            const letters = word.split("");

            letters.forEach((letter, idx) => {
                this.letters.push(letter);
                wordContainer.appendChild(this.renderLetter(letter));

                if (idx === letters.length - 1 && nextLine) {
                    this.letters.push("Enter");
                    wordContainer.appendChild(this.renderLetter("\n"));
                    const lineBreak = document.createElement("br");
                    parentElement.appendChild(lineBreak);
                }

                if (idx === letters.length - 1 && !lastWord) {
                    this.letters.push(" ");
                    wordContainer.appendChild(this.renderLetter(" "));
                }
            });
        }
    }

    render() {
        const lessonContainer = document.createElement("div");
        lessonContainer.className = "lesson-container";

        this.words.forEach((word, idx) => {
            const lastWord = idx === this.words.length - 1 ? true : false;
            this.renderWord(lessonContainer, word, lastWord);
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
                if (e.key !== "Enter") {
                    const letterElement = document.createElement("div");
                    letterElement.className = "wrong-letter";
                    letterElement.innerHTML = e.key;
                    currentElement.appendChild(letterElement);

                    setTimeout(() => {
                        addClass(letterElement, "remove-wrong-letter");
                    }, 5);
                }

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