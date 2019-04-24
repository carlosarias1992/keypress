# Keypress 

### [Live Site!](https://carlosarias1992.github.io/keypress/)

## Background

Keyrpress is a web application designed to teach users how to type. Keypress has a variety of lessons
that focus improving students' typing skills over time. A user receives stats at the end of each lesson which will help
determine long-term improvement in typing speed and accuracy. 

## Architecture and Technologies

This project will be implemented with the following technologies:

* `JavaScript` for game logic
* `Webpack` to bundle js files

## Functionality & MVP

With Keypress, users are able to: 

- [x] Choose a lesson
- [x] Begin typing as soon as the lesson loads
- [x] Start, and reset the lesson
- [x] Review stats at the end of the lesson
- [x] Switch between lessons

## Features

### Lesson Page

In the lesson page, users can begin typing as soon as the page renders. The lesson object will keep track of the user's typing speed and accuracy, which will then be displayed on the screen for the user to keep track of their progress throughout the lesson. With OOP, it was made simple to use the same template for every lesson regardless of its length or the characters contained within it. However, the main challenge presented itself when rendering the keyboard guide images. Due to the large number of images (each key has its own image), there was an image rendering lag, which detrimented user experience. In order to tackle this issue, I had to develop a custom caching algorithm which would cache all images before they were rendered on the page. Once in the cache, the browser is able to load these images faster. Therefore, the rendering lag is seamless and unnoticeable. Nonetheless, I took this algorithm one step further and optimized it to only create image objects that had not already been cached. This way, I was able to optimize my application not only in terms of time, but also space complexity. 

``` JavaScript
preloadImages(keys) {
    for (let i = 0; i < keys.length; i++) {
        const img = new Image();
        img.src = `assets/images/keys/${keyUrls[keys[i]]}`;
    }
}

cacheImages(content) {
    const distinctKeys = [...new Set(content)];
    const newKeys = [];

    distinctKeys.forEach(key => {
        if (letter === "\n") key = "Enter";
        
        if (!this.cache.includes(key)) {
            newKeys.push(key);
            this.cache.push(key);
        }
    });

    this.preloadImages(newKeys);
}
```

![Lesson Page](https://github.com/carlosarias1992/code-racer/raw/master/assets/images/lesson_page.png "Lesson Page")



### Review Page

``` JavaScript 
startTimer() {
    this.start = Date.now();
}

duration() {
    const endTime = Date.now() - this.start;
    return Math.ceil(endTime / 1000);
}

speed() {
    return Math.ceil((this.content.length / 4.5) / this.duration() * 60);
}
    
accuracy() {
    const { content, wrongLetters, editedLetters } = this;
    const numberOfCorrectInputs = content.length - wrongLetters.length;
    return Math.ceil(((numberOfCorrectInputs + editedLetters.length) / content.length) * 100);
}
```

![Review Page](https://github.com/carlosarias1992/code-racer/raw/master/assets/images/review.png "Review Page")

## Future Implementations

- [ ] User auth through `Node.js` and Google's Firebase
- [ ] User profile page with the user's stats
