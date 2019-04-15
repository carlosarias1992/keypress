class AudioController {
    constructor(filePath) {
        this.filePath = filePath;
        this.parentElement = undefined;
        this.audio = true;
        this.toggleSound = this.toggleSound.bind(this);
    }

    toggleSound() {
        if (this.audio) {
            this.audio = false;
        } else {
            this.audio = true;
        }

        this.render(this.parentElement);
    }

    play() {
        if (this.audio) {
            const audio = new Audio(this.filePath);
            audio.play();
        }
    }

    render(parentElement) {
        this.parentElement = parentElement;
        parentElement.innerHTML = '';
        const sound = document.createElement("button");
        sound.onclick = this.toggleSound;
        sound.className = "sound";

        if (this.audio) {
            sound.title = "Disable Sound";
            sound.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            sound.title = "Enable Sound";
            sound.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }

        parentElement.appendChild(sound);
    }
}

export default AudioController;