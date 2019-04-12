class Header {
    constructor(lesson) {
        this.lesson = lesson;
    }

    renderMenu(parentElement) {
        const menu = document.createElement("div");
        menu.className = "menu";
        parentElement.appendChild(menu);
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }

    renderControllers(parentElement) {
        const controllers = document.createElement("div");
        controllers.className = "controllers";
        parentElement.appendChild(controllers);


    }

    render() {
        const header = document.createElement("header");
        const leftControllers = document.createElement("div");
        header.appendChild(leftControllers);
        this.renderMenu(leftControllers);

        return header;
    }
}

export default Header;