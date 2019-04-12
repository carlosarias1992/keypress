import Game from './game';
import Header from './header';
import lessons from './lessons';
import AudioController from './audio_controller';

class LessonPage {
    constructor(lessonNumber) {
        this.lessonNumber = lessonNumber;
        this.audioController = new AudioController("assets/audio/key-press.mp3");
    }

    restartGame() {
        this.game.restart();
    }

    render() {
        const lessonNumber = this.lessonNumber;
        const lesson = lessons[lessonNumber];
        const header = new Header(lesson, this);
        this.game = new Game(header, this.audioController);
        this.game.startLesson();
    }
}

export default LessonPage;