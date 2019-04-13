import Game from './game';
import Header from './header';
import AudioController from './audio_controller';
import HomePage from './home_page';

class LessonPage {
    constructor() {
        this.audioController = new AudioController("assets/audio/key-press.mp3");
        this.header = new Header(this);
        this.game = new Game(this.header, this.audioController);
        this.render = this.render.bind(this);
        this.renderHome = this.renderHome.bind(this);
    }

    restartGame() {
        this.game.restart();
    }

    renderHome() {
        const home = new HomePage(this);
        home.render();
    }

    render(lesson) {
        this.game.render(lesson);
    }
}

export default LessonPage;