# Code Racer

### Background

Code Racer is a web application designed to teach programmers how to type. Code racer has a number of different lessons
depending on the language that you are trying to learn. A user receives stats at the end of the lesson which will help
determine long-term improvement in typing speed. 

### Functionality & MVP

With Code Racer, users will be able to: 

- [ ] Choose a lesson
- [ ] Begin typing as soon as the lesson loads
- [ ] Start, pause and reset the lesson
- [ ] Review stats at the end of the lesson
- [ ] Switch between lessons

In addition, this project will include: 

- [ ] An instructions page
- [ ] A production README

### Wireframes

This app will consist of three pages. All pages will have easy access to nav links to my github and linkedIn. The index page 
will include all available lessons. A user can click on any of these lessons to begin working on a specific lesson. 

![Index Page](https://github.com/carlosarias1992/code-racer/raw/master/assets/images/index.png "Index Page")

Each lesson will be displayed on a lesson page. Each lesson page will display the text to be typed by the user. The user can
begin working on a lesson by simply typing on the keyboard. 

![Lesson Page](https://github.com/carlosarias1992/code-racer/raw/master/assets/images/lesson.png "Lesson Page")

The last page will be rendered once a lesson has been completed. This page also known as the stats page will display the 
user's stats including the typing speed and accuracy. The user can use the controls in the center of the page to restart a 
lesson, access all lessons, or move on to the next lesson. 

![Stats Page](https://github.com/carlosarias1992/code-racer/raw/master/assets/images/stats.png "Stats Page")

### Architecture and Technologies

This project will be implemented with the following technologies:

* `JavaScript` for game logic
* Google's Firebase for data storage
* `Node.js` to implement a server environment
* `Webpack` to bundle js files

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including webpack. Write a basic entry file to make sure that the basic setup works.

**Day 2**: Learn to use Google's Firebase, and develop the basic game logic. 

**Day 3**: Install the controls for the user to interact with the game. 

**Day 4**: Style all pages.

### Bonus Features

- [ ] User auth using `Node.js` and Google's Firebase
- [ ] User profile page with the user's stats
- [ ] High score for fast typers
