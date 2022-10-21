import Lesson from "./lesson";
import Keyboard from "./keyboard";
import Stats from "./stats";
import ReviewPage from "./review_page";

class Game {
  constructor(lessonPage) {
    this.lesson = undefined;
    this.lessonObject = undefined;
    this.stats = undefined;
    this.keyboard = undefined;
    this.banner = undefined;
    this.renderedReview = false;
    this.lessonPage = lessonPage;
    this.header = lessonPage.header;
    this.audioController = lessonPage.audioController;
    this.parentElement = document.getElementById("root");
    this.renderKeyboard = this.renderKeyboard.bind(this);
    this.renderStats = this.renderStats.bind(this);
    this.getCurrentSpeed = this.getCurrentSpeed.bind(this);
    this.getCurrentAccuracy = this.getCurrentAccuracy.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleAccuracyMonitor = this.handleAccuracyMonitor.bind(this);
    this.removeBanner = this.removeBanner.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart() {
    this.lesson = undefined;
    this.stats = undefined;
    this.keyboard = undefined;
    this.banner = undefined;
    this.parentElement.innerHTML = "";
    this.render(this.lessonObject);
  }

  getCurrentAccuracy() {
    const { lesson, stats } = this;

    const currentLetters = this.getCurrentLetters();
    return stats.currentAccuracy(
      lesson.wrongLetters,
      lesson.editedLetters,
      currentLetters
    );
  }

  getCurrentLetters() {
    return this.lesson.letters.slice(0, this.lesson.currentLetterIndex);
  }

  getCurrentSpeed() {
    const currentLetters = this.getCurrentLetters();
    return this.stats.currentSpeed(currentLetters);
  }

  statsElement(parentElement, valueName) {
    const holder = document.createElement("div");
    parentElement.appendChild(holder);
    const title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = valueName;
    holder.appendChild(title);
    const value = document.createElement("p");
    value.className = valueName.toLowerCase();

    if (valueName === "Accuracy") {
      value.innerHTML = `${this.getCurrentAccuracy()}%`;
    } else if (valueName === "Speed") {
      value.innerHTML = `${this.getCurrentSpeed()} WPM`;
    }

    holder.appendChild(value);
  }

  removeBanner() {
    let top = 0;

    const timerId = setInterval(() => {
      top -= 2;
      this.banner.style.top = `${top}px`;

      if (top < -150) {
        clearInterval(timerId);
      }
    }, 5);
  }

  renderBanner() {
    const banner = document.createElement("div");
    this.banner = banner;
    banner.className = "banner slide-in";
    banner.innerHTML = "Start Typing";
    this.parentElement.append(banner);
  }

  renderStats(statsParentElement) {
    if (!document.querySelector(".stats")) {
      statsParentElement.className = "stats";

      this.statsElement(statsParentElement, "Accuracy");
      this.statsElement(statsParentElement, "Speed");

      this.parentElement.appendChild(statsParentElement);
    }
  }

  renderKeyboard(keyboardParentElement) {
    keyboardParentElement.className = "keyboard";
    this.keyboard.render(this.lesson.letters[0]);

    this.parentElement.appendChild(keyboardParentElement);
  }

  scrollDown() {
    const cursor = document.querySelector(".cursor");
    const lessonContainer = document.querySelector(".lesson-container");

    if (
      cursor &&
      cursor.offsetTop > lessonContainer.scrollTop + 5 &&
      lessonContainer.scrollHeight - cursor.offsetTop >= 190
    ) {
      const timerId = setInterval(() => {
        lessonContainer.scrollTop += 1;

        if (lessonContainer.scrollTop + 5 > cursor.offsetTop) {
          clearInterval(timerId);
        }
      }, 12);
    }
  }

  scrollUp() {
    const cursor = document.querySelector(".cursor");
    const lessonContainer = document.querySelector(".lesson-container");

    if (cursor.offsetTop < lessonContainer.scrollTop) {
      const timerId = setInterval(() => {
        lessonContainer.scrollTop -= 1;

        if (lessonContainer.scrollTop + 1 < cursor.offsetTop) {
          clearInterval(timerId);
        }
      }, 12);
    }
  }

  handleKeypress(e) {
    const {
      lesson,
      keyboard,
      stats,
      scrollDown,
      audioController,
      renderedReview,
    } = this;

    const statsSection = document.createElement("div");
    const currentLetter = lesson.letters[lesson.currentLetterIndex + 1];
    lesson.handleInput(e);
    scrollDown();

    if (lesson.currentLetterIndex === 1) {
      this.removeBanner();
      stats.startTimer();
    }

    if (lesson.currentLetterIndex < lesson.letters.length) {
      audioController.play();
      keyboard.render(currentLetter);
    }

    if (lesson.currentLetterIndex === 9) {
      this.renderStats(statsSection);
    } else if (
      lesson.currentLetterIndex > 9 &&
      lesson.currentLetterIndex < lesson.letters.length
    ) {
      const accuracy = document.querySelector(".accuracy");
      accuracy.innerHTML = `${this.getCurrentAccuracy()}%`;

      const speed = document.querySelector(".speed");
      speed.innerHTML = `${this.getCurrentSpeed()} WPM`;
    }

    if (
      !renderedReview &&
      lesson.currentLetterIndex === lesson.letters.length
    ) {
      this.renderedReview = true;
      const reviewPage = new ReviewPage(this);
      reviewPage.render();
    }
  }

  handleKeydown(e) {
    const { lesson, keyboard, scrollUp, audioController } = this;

    const currentLetter = lesson.letters[lesson.currentLetterIndex - 1];
    lesson.handleBackspace(e);

    if (
      currentLetter &&
      lesson.currentLetterIndex < lesson.letters.length &&
      e.key === "Backspace"
    ) {
      audioController.play();
      keyboard.render(currentLetter);
      scrollUp();
    }
  }

  handleInput() {
    document.addEventListener("keypress", this.handleKeypress);
    document.addEventListener("keypress", this.handleAccuracyMonitor);
    document.addEventListener("keydown", this.handleKeydown);
  }

  handleAccuracyMonitor() {
    const numberOfTypedLetters = this.getCurrentLetters().length;

    if (numberOfTypedLetters > 40 && this.getCurrentAccuracy() < 40) {
      this.renderRestartOverlay();
      document.removeEventListener("keypress", this.handleKeypress);
      document.removeEventListener("keypress", this.handleAccuracyMonitor);
      document.removeEventListener("keydown", this.handleKeydown);
    }
  }

  renderRestartOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const restartContainer = document.createElement("div");
    restartContainer.className = "restart-container";
    restartContainer.innerText = "Please focus on your accuracy and try again.";

    const restartButton = document.createElement("button");
    restartButton.className = "restart-button";
    restartButton.innerText = "Restart Lesson";
    restartButton.onclick = this.restart;

    restartContainer.appendChild(restartButton);
    overlay.appendChild(restartContainer);
    this.parentElement.appendChild(overlay);
  }

  render(lessonObject) {
    this.lessonObject = lessonObject;
    this.renderedReview = false;
    this.parentElement.innerHTML = "";
    this.lesson = new Lesson(lessonObject.id);
    const { lesson, parentElement, renderKeyboard, header } = this;

    this.stats = new Stats(lesson);

    parentElement.appendChild(header.render(lessonObject));
    parentElement.appendChild(lesson.render());
    lesson.moveCursor();

    const keyboardSection = document.createElement("div");
    this.keyboard = new Keyboard(keyboardSection);
    renderKeyboard(keyboardSection);

    this.renderBanner();
    this.handleInput();
  }
}

export default Game;
