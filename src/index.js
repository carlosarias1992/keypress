import Play from './play';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const play = new Play(1, root);
    play.render();
});
