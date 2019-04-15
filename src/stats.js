import Requirements from './level_requirements';
import { merge } from 'lodash';

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
        return Math.ceil((this.content.length / 4.5) / this.duration() * 60);
    }

    currentAccuracy(wrongLetters, editedLetters, content) {
        return Math.ceil(((content.length - wrongLetters.length + editedLetters.length) / content.length) * 100);
    }

    currentSpeed(content) {
        return Math.ceil((content.length / 4.5) / this.duration() * 60);
    }

    accuracy() {
        const { content, wrongLetters, editedLetters } = this;
        return Math.ceil(((content.length - wrongLetters.length + editedLetters.length) / content.length) * 100);
    }

    realAccuracy() {
        const { content, wrongLetters } = this;
        return Math.ceil(((content.length - wrongLetters.length) / content.length) * 100);
    }

    saveLessonRating() {
        this.lessonPage.ratings = merge(this.lessonPage.ratings, { [this.lesson.id]: this.rating()} );
    }

    rating() {
        const { requirement } = this;
        const realAccuracy = this.realAccuracy();
        const speed = this.speed();
        const requirementHalfPoint = ((requirement.goalSpeed - requirement.speed) / 2) + requirement.speed;

        if (realAccuracy < 80) {
            return {
                rating: 0,
                message: "Focus on accuracy. You'll build speed later."
            };
        } else if (speed < requirement.speed) {
            return {
                rating: 0,
                message: "Keep practicing. Speed will come naturally with time."
            };
        } else if ((realAccuracy >= 80 && realAccuracy < 90) || (speed >= requirement.speed && speed < requirementHalfPoint)) {
            return {
                rating: 3,
                message: 'Good work. Now focus on reaching the goal speed with 100% accuracy.'
            };
        } else if ((realAccuracy >= 90 && realAccuracy < 100) || (speed >= requirementHalfPoint && speed < requirement.goalSpeed)) {
            return {
                rating: 4,
                message: 'Excellent work! Now focus on reaching the goal speed with 100% accuracy.'
            };
        } else if ((realAccuracy >= 100) || (speed >= requirement.goalSpeed)) {
            return {
                rating: 5,
                message: 'Excellent work! Time to move on to the next lesson.'
            };
        }
    }
}

export default Stats;