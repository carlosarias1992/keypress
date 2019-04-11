import keyUrls from './key_urls';

class Keyboard {
    constructor(key, parentElement) {
        this.key = key;
        this.url = keyUrls[key];
        this.parentElement = parentElement;
    }

    reset(parentElement) {
        parentElement.innerHTML = "";
        parentElement.appendChild(this.render());
    }

    render() {
        const keyboardImage = document.createElement("img");
        keyboardImage.src = `assets/images/keys/${this.url}`;
        return keyboardImage;
    }
}

export default Keyboard;