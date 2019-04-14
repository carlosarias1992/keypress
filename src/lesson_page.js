import Game from './game';
import Header from './header';
import AudioController from './audio_controller';
import HomePage from './home_page';
import keyUrls from './key_urls';

class LessonPage {
    constructor() {
        this.cache = [];
        this.audioController = new AudioController("assets/audio/key-press.mp3");
        this.ratings = {};
        this.header = new Header(this);
        this.game = new Game(this);
        this.render = this.render.bind(this);
        this.renderHome = this.renderHome.bind(this);
        this.cacheImages = this.cacheImages.bind(this);
    }

    preloadImages(letters) {
        for (let i = 0; i < letters.length; i++) {
            const img = new Image();
            img.src = `assets/images/keys/${keyUrls[letters[i]]}`;
        }
    }

    cacheImages(content) {
        const distinctLetters = [...new Set(content)];
        const newLetters = [];

        distinctLetters.forEach(letter => {
            if (!this.cache.includes(letter)) {
                newLetters.push(letter);
                this.cache.push(letter);
            }
        });

        this.preloadImages(newLetters);
    }

    restartGame() {
        this.game.restart();
    }

    renderHome() {
        const home = new HomePage(this);
        home.render();
    }

    render(lesson) {
        this.cacheImages(lesson.content);
        this.game.render(lesson);
    }
}

export default LessonPage;