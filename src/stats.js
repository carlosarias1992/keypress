import Requirements from "./level_requirements";
import { merge } from "lodash";

class Stats {
  constructor(lesson, lessonPage) {
    this.start = undefined;
    this.content = lesson.letters;
    this.level = lesson.level;
    this.lessonPage = lessonPage;
    this.lesson = lesson;
    this.requirement = Requirements[lesson.level];
    this.wrongLetters = lesson.wrongLetters;
    this.editedLetters = lesson.editedLetters;
    this.accuracy = this.accuracy.bind(this);
    this.realAccuracy = this.realAccuracy.bind(this);
    this.rating = this.rating.bind(this);
    this.saveLessonRating = this.saveLessonRating.bind(this);
  }

  startTimer() {
    this.start = Date.now();
  }

  duration() {
    const endTime = Date.now() - this.start;
    return Math.ceil(endTime / 1000);
  }

  speed() {
    return Math.ceil((this.content.length / 4.5 / this.duration()) * 60);
  }

  currentAccuracy(wrongLetters, editedLetters, content) {
    return Math.ceil(
      ((content.length - wrongLetters.length + editedLetters.length) /
        content.length) *
        100
    );
  }

  currentSpeed(content) {
    return Math.ceil((content.length / 4.5 / this.duration()) * 60);
  }

  accuracy() {
    const { content, wrongLetters, editedLetters } = this;
    return Math.ceil(
      ((content.length - wrongLetters.length + editedLetters.length) /
        content.length) *
        100
    );
  }

  realAccuracy() {
    const { content, wrongLetters } = this;
    return Math.ceil(
      ((content.length - wrongLetters.length) / content.length) * 100
    );
  }

  saveLessonRating() {
    this.lessonPage.ratings = merge(this.lessonPage.ratings, {
      [this.lesson.id]: this.rating(),
    });
  }

  rating() {
    const { requirement } = this;
    const realAccuracy = this.realAccuracy();
    const speed = this.speed();

    const speedRating = speed / requirement.goalSpeed;
    const accuracyRating = realAccuracy / 80;
    const aggregatedRating = Math.floor((speedRating + accuracyRating) / 2);

    if (aggregatedRating < 0.2) {
      return {
        rating: 0,
        message: "Focus on accuracy. You'll build speed later.",
      };
    } else if (aggregatedRating >= 0.2 && aggregatedRating < 0.4) {
      return {
        rating: 0,
        message: "Keep practicing. Speed will come naturally with time.",
      };
    } else if (aggregatedRating >= 0.4 && aggregatedRating < 0.6) {
      return {
        rating: 3,
        message:
          "Good work. Now focus on reaching the goal speed with 100% accuracy.",
      };
    } else if (aggregatedRating >= 0.6 && aggregatedRating < 0.8) {
      return {
        rating: 4,
        message:
          "Excellent work! Now focus on reaching the goal speed with 100% accuracy.",
      };
    } else if (aggregatedRating >= 1) {
      return {
        rating: 5,
        message: "Excellent work! Time to move on to the next lesson.",
      };
    }
  }
}

export default Stats;
