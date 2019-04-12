class AudioController {
    constructor(filePath, parentElement) {
        this.parentElement = parentElement;
        this.filePath = filePath;
        this.audio = true;
        this.toggleSound = this.toggleSound.bind(this);
    }

    toggleSound() {
        if (this.audio) {
            this.audio = false;
        } else {
            this.audio = true;
        }

        this.render();
    }

    play() {
        if (this.audio) {
            const audio = new Audio(this.filePath);
            audio.play();
        }
    }

    render() {
        this.parentElement.innerHTML = '';
        const sound = document.createElement("button");
        sound.onclick = this.toggleSound;
        sound.className = "sound";

        if (this.audio) {
            sound.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            sound.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }

        this.parentElement.appendChild(sound);
    }
}

export default AudioController;