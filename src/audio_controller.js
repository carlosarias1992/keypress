class AudioController {
  static PLAY_AUDIO_KEY = "playAudio";

  constructor(filePath) {
    this.filePath = filePath;
    this.parentElement = undefined;
    this.playAudio =
      localStorage.getItem(AudioController.PLAY_AUDIO_KEY) === null
        ? true
        : JSON.parse(localStorage.getItem(AudioController.PLAY_AUDIO_KEY));
    this.toggleSound = this.toggleSound.bind(this);
  }

  toggleSound() {
    if (this.playAudio) {
      this.playAudio = false;
    } else {
      this.playAudio = true;
    }

    localStorage.setItem(AudioController.PLAY_AUDIO_KEY, this.playAudio);
    this.render(this.parentElement);
  }

  play() {
    if (this.playAudio) {
      const audio = new Audio(this.filePath);
      audio.play();
    }
  }

  render(parentElement) {
    this.parentElement = parentElement;
    parentElement.innerHTML = "";
    const soundButton = document.createElement("button");
    soundButton.onclick = this.toggleSound;
    soundButton.className = "sound";

    if (this.playAudio) {
      soundButton.title = "Disable Sound";
      soundButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      soundButton.title = "Enable Sound";
      soundButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }

    parentElement.appendChild(soundButton);
  }
}

export default AudioController;
