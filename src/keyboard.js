import keyUrls from './key_urls';
window.keyUrls = keyUrls;

class Keyboard {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    render(key) {
        this.parentElement.innerHTML = "";
        const url = keyUrls[key];
        const keyboardImage = document.createElement("img");
        keyboardImage.src = `assets/images/keys/${url}`;
        this.parentElement.appendChild(keyboardImage);
    }
}

export default Keyboard;