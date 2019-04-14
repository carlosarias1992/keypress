import Requirements from './level_requirements';

class ReviewPage {
    constructor(stats) {
        this.stats = stats;
        this.renderScore = this.renderScore.bind(this);
        this.renderRequirements = this.renderRequirements.bind(this);
        this.render = this.render.bind(this);
    }

    renderStars(rating) {

    }

    renderRequirements(parentElement) {
        const requirements = document.createElement("div");
        requirements.innerHTML = "Requirement:";
        requirements.className = "score";
        parentElement.appendChild(requirements);

        const speed = document.createElement("p");
        speed.innerHTML = `${Requirements[this.stats.level].speed} WPM`;
        requirements.appendChild(speed);

        const goalSpeed = document.createElement("p");
        goalSpeed.innerHTML = `${Requirements[this.stats.level].goalSpeed} WPM goal`;
        requirements.appendChild(goalSpeed);

        const accuracy = document.createElement("p");
        accuracy.innerHTML = `80% accuracy`;
        requirements.appendChild(accuracy);
    }

    renderScore() {
        const scoreBox = document.createElement("div");
        scoreBox.className = "score-box";

        const score = document.createElement("div");
        score.className = "score";
        score.innerHTML = "Your Score:";
        scoreBox.appendChild(score);

        const speed = document.createElement("p");
        speed.innerHTML = `${this.stats.speed()} WPM`;
        score.appendChild(speed);

        const accuracy = document.createElement("p");
        accuracy.innerHTML = `${this.stats.accuracy()}% accuracy`;
        score.appendChild(accuracy);

        const realAccuracy = document.createElement("p");
        realAccuracy.innerHTML = `${this.stats.realAccuracy()}% real accuracy`;
        score.appendChild(realAccuracy);

        const duration = document.createElement("p");
        duration.innerHTML = `${this.stats.duration()} seconds`;
        score.appendChild(duration);

        this.renderRequirements(scoreBox);

        return scoreBox;
    }

    render() {
        const root = document.getElementById("root");
        
        const reviewPage = document.createElement("div");
        reviewPage.className = "review";
        root.appendChild(reviewPage);

        reviewPage.appendChild(this.renderScore());
    }
}

export default ReviewPage;