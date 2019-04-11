/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lesson = __webpack_require__(/*! ./lesson */ \"./src/lesson.js\");\n\nvar _lesson2 = _interopRequireDefault(_lesson);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var root = document.getElementById(\"root\");\n\n    var lesson = new _lesson2.default(0);\n    root.appendChild(lesson.render());\n    lesson.moveCursor();\n\n    document.addEventListener(\"keypress\", function (event) {\n        lesson.handleInput(event);\n    });\n\n    document.addEventListener(\"keydown\", function (event) {\n        lesson.handleBackspace(event);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZXNzb24iLCJMZXNzb24iLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIm1vdmVDdXJzb3IiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwiaGFuZGxlQmFja3NwYWNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsUUFBTUMsT0FBT0YsU0FBU0csY0FBVCxDQUF3QixNQUF4QixDQUFiOztBQUVBLFFBQU1DLFNBQVMsSUFBSUMsZ0JBQUosQ0FBVyxDQUFYLENBQWY7QUFDQUgsU0FBS0ksV0FBTCxDQUFpQkYsT0FBT0csTUFBUCxFQUFqQjtBQUNBSCxXQUFPSSxVQUFQOztBQUVBUixhQUFTQyxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxpQkFBUztBQUMzQ0csZUFBT0ssV0FBUCxDQUFtQkMsS0FBbkI7QUFDSCxLQUZEOztBQUlBVixhQUFTQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxpQkFBUztBQUMxQ0csZUFBT08sZUFBUCxDQUF1QkQsS0FBdkI7QUFDSCxLQUZEO0FBR0gsQ0FkRCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXNzb24gZnJvbSAnLi9sZXNzb24nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICAgIGNvbnN0IGxlc3NvbiA9IG5ldyBMZXNzb24oMCk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChsZXNzb24ucmVuZGVyKCkpO1xuICAgIGxlc3Nvbi5tb3ZlQ3Vyc29yKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZXZlbnQgPT4ge1xuICAgICAgICBsZXNzb24uaGFuZGxlSW5wdXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICBsZXNzb24uaGFuZGxlQmFja3NwYWNlKGV2ZW50KTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/lesson.js":
/*!***********************!*\
  !*** ./src/lesson.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lessons = __webpack_require__(/*! ./lessons */ \"./src/lessons.js\");\n\nvar _lessons2 = _interopRequireDefault(_lessons);\n\nvar _util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Lesson = function () {\n    function Lesson(lessonNumber) {\n        _classCallCheck(this, Lesson);\n\n        this.lesson = _lessons2.default[lessonNumber];\n        this.letters = [];\n        this.editedLetters = [];\n        this.words = this.lesson.content.split(\" \");\n        this.start = 0;\n        this.end = 0;\n        this.duration = 0;\n        this.currentLetterIndex = 0;\n        this.updateCompletionBar = this.updateCompletionBar.bind(this);\n    }\n\n    _createClass(Lesson, [{\n        key: 'currentElement',\n        value: function currentElement() {\n            var letters = document.querySelectorAll(\".letter-holder\");\n            return letters[this.currentLetterIndex];\n        }\n    }, {\n        key: 'moveCursor',\n        value: function moveCursor() {\n            var letters = document.querySelectorAll(\".letter-holder\");\n            (0, _util.addClass)(letters[this.currentLetterIndex], \"cursor\");\n        }\n    }, {\n        key: 'renderLetter',\n        value: function renderLetter(letter) {\n            var letterHolder = document.createElement(\"span\");\n            letterHolder.className = \"letter-holder\";\n            letterHolder.innerHTML = letter;\n            return letterHolder;\n        }\n    }, {\n        key: 'renderWord',\n        value: function renderWord(word, lastWord) {\n            var _this = this;\n\n            var wordContainer = document.createElement(\"pre\");\n            wordContainer.className = \"word-container\";\n            var letters = word.split(\"\");\n\n            letters.forEach(function (letter, idx) {\n                _this.letters.push(letter);\n                wordContainer.appendChild(_this.renderLetter(letter));\n\n                if (idx === letters.length - 1 && !lastWord) {\n                    _this.letters.push(\" \");\n                    wordContainer.appendChild(_this.renderLetter(\" \"));\n                }\n            });\n\n            return wordContainer;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var lessonContainer = document.createElement(\"div\");\n            lessonContainer.className = \"lesson-container\";\n\n            this.words.forEach(function (word, idx) {\n                var lastWord = idx === _this2.words.length - 1 ? true : false;\n                lessonContainer.appendChild(_this2.renderWord(word, lastWord));\n            });\n\n            lessonContainer.appendChild(this.completionBar());\n\n            return lessonContainer;\n        }\n    }, {\n        key: 'completionBar',\n        value: function completionBar() {\n            var bar = document.createElement(\"div\");\n            bar.className = \"completion-bar\";\n            return bar;\n        }\n    }, {\n        key: 'updateCompletionBar',\n        value: function updateCompletionBar() {\n            var bar = document.querySelector(\".completion-bar\");\n            var width = this.currentLetterIndex / (this.letters.length - 1) * 100;\n            bar.style.width = width + '%';\n        }\n    }, {\n        key: 'speed',\n        value: function speed() {\n            console.log((this.end - this.start) / 1000 + ' seconds');\n        }\n    }, {\n        key: 'handleBackspace',\n        value: function handleBackspace(e) {\n            if (this.currentLetterIndex > 0 && this.currentLetterIndex !== this.letters.length) {\n                if (e.key === \"Backspace\") {\n                    var currentElement = this.currentElement();\n                    this.currentLetterIndex -= 1;\n                    this.editedLetters.push(this.currentLetterIndex);\n                    var previousElement = this.currentElement();\n\n                    (0, _util.removeClass)(previousElement, \"wrong\");\n                    (0, _util.removeClass)(previousElement, \"correct\");\n                    (0, _util.removeClass)(currentElement, \"cursor\");\n                    this.moveCursor();\n                    this.updateCompletionBar();\n                }\n            }\n        }\n    }, {\n        key: 'handleInput',\n        value: function handleInput(e) {\n            if (this.currentLetterIndex === 0) this.start = Date.now();\n            if (this.currentLetterIndex === this.letters.length - 1) {\n                this.end = Date.now();\n                this.speed();\n            }\n\n            if (this.currentLetterIndex !== this.letters.length) {\n                var currentLetter = this.letters[this.currentLetterIndex];\n                var currentElement = this.currentElement();\n\n                if (this.editedLetters.includes(this.currentLetterIndex) && e.key === currentLetter) {\n                    (0, _util.addClass)(currentElement, \"edited\");\n                    (0, _util.removeClass)(currentElement, \"cursor\");\n                } else if (e.key === currentLetter) {\n                    (0, _util.addClass)(currentElement, \"correct\");\n                    (0, _util.removeClass)(currentElement, \"cursor\");\n                } else {\n                    (0, _util.addClass)(currentElement, \"wrong\");\n                    (0, _util.removeClass)(currentElement, \"cursor\");\n                }\n\n                this.currentLetterIndex += 1;\n                if (this.currentLetterIndex !== this.letters.length) {\n                    this.moveCursor();\n                    this.updateCompletionBar();\n                }\n            }\n        }\n    }]);\n\n    return Lesson;\n}();\n\nexports.default = Lesson;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVzc29uLmpzPzc2NDgiXSwibmFtZXMiOlsiTGVzc29uIiwibGVzc29uTnVtYmVyIiwibGVzc29uIiwibGVzc29ucyIsImxldHRlcnMiLCJlZGl0ZWRMZXR0ZXJzIiwid29yZHMiLCJjb250ZW50Iiwic3BsaXQiLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwiY3VycmVudExldHRlckluZGV4IiwidXBkYXRlQ29tcGxldGlvbkJhciIsImJpbmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZXR0ZXIiLCJsZXR0ZXJIb2xkZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwid29yZCIsImxhc3RXb3JkIiwid29yZENvbnRhaW5lciIsImZvckVhY2giLCJpZHgiLCJwdXNoIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJMZXR0ZXIiLCJsZW5ndGgiLCJsZXNzb25Db250YWluZXIiLCJyZW5kZXJXb3JkIiwiY29tcGxldGlvbkJhciIsImJhciIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsImUiLCJrZXkiLCJjdXJyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudCIsIm1vdmVDdXJzb3IiLCJEYXRlIiwibm93Iiwic3BlZWQiLCJjdXJyZW50TGV0dGVyIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07QUFDRixvQkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN0QixhQUFLQyxNQUFMLEdBQWNDLGtCQUFRRixZQUFSLENBQWQ7QUFDQSxhQUFLRyxPQUFMLEdBQWUsRUFBZjtBQUNBLGFBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxhQUFLQyxLQUFMLEdBQWEsS0FBS0osTUFBTCxDQUFZSyxPQUFaLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixDQUFiO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLENB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QVVPLGFBQXRFLEVBQXFGO0FBQ2pGLHdDQUFTTixjQUFULEVBQXlCLFFBQXpCO0FBQ0EsMkNBQVlBLGNBQVosRUFBNEIsUUFBNUI7QUFDSCxpQkFIRCxNQUdPLElBQUlGLEVBQUVDLEdBQUYsS0FBVU8sYUFBZCxFQUE2QjtBQUNoQyx3Q0FBU04sY0FBVCxFQUF5QixTQUF6QjtBQUNBLDJDQUFZQSxjQUFaLEVBQTRCLFFBQTVCO0FBQ0gsaUJBSE0sTUFHQTtBQUNILHdDQUFTQSxjQUFULEVBQXlCLE9BQXpCO0FBQ0EsMkNBQVlBLGNBQVosRUFBNEIsUUFBNUI7QUFDSDs7QUFFRCxxQkFBSzlCLGtCQUFMLElBQTJCLENBQTNCO0FBQ0Esb0JBQUksS0FBS0Esa0JBQUwsS0FBNEIsS0FBS1IsT0FBTCxDQUFhMEIsTUFBN0MsRUFBcUQ7QUFDakQseUJBQUtjLFVBQUw7QUFDQSx5QkFBSy9CLG1CQUFMO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7a0JBR1ViLE0iLCJmaWxlIjoiLi9zcmMvbGVzc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxlc3NvbnMgZnJvbSAnLi9sZXNzb25zJztcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIExlc3NvbiB7XG4gICAgY29uc3RydWN0b3IobGVzc29uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGVzc29uID0gbGVzc29uc1tsZXNzb25OdW1iZXJdO1xuICAgICAgICB0aGlzLmxldHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0ZWRMZXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMud29yZHMgPSB0aGlzLmxlc3Nvbi5jb250ZW50LnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgIHRoaXMuZW5kID0gMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudExldHRlckluZGV4ID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0aW9uQmFyID0gdGhpcy51cGRhdGVDb21wbGV0aW9uQmFyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3VycmVudEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGxldHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxldHRlci1ob2xkZXJcIik7XG4gICAgICAgIHJldHVybiBsZXR0ZXJzW3RoaXMuY3VycmVudExldHRlckluZGV4XTtcbiAgICB9XG5cbiAgICBtb3ZlQ3Vyc29yKCkge1xuICAgICAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZXR0ZXItaG9sZGVyXCIpO1xuICAgICAgICBhZGRDbGFzcyhsZXR0ZXJzW3RoaXMuY3VycmVudExldHRlckluZGV4XSwgXCJjdXJzb3JcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyTGV0dGVyKGxldHRlcikge1xuICAgICAgICBjb25zdCBsZXR0ZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbGV0dGVySG9sZGVyLmNsYXNzTmFtZSA9IFwibGV0dGVyLWhvbGRlclwiO1xuICAgICAgICBsZXR0ZXJIb2xkZXIuaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgICAgICByZXR1cm4gbGV0dGVySG9sZGVyO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQod29yZCwgbGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3Qgd29yZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgICAgIHdvcmRDb250YWluZXIuY2xhc3NOYW1lID0gXCJ3b3JkLWNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCBsZXR0ZXJzID0gd29yZC5zcGxpdChcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV0dGVycy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICB3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTGV0dGVyKGxldHRlcikpO1xuXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBsZXR0ZXJzLmxlbmd0aCAtIDEgJiYgIWxhc3RXb3JkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzLnB1c2goXCIgXCIpO1xuICAgICAgICAgICAgICAgIHdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJMZXR0ZXIoXCIgXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHdvcmRDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBsZXNzb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXNzb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJsZXNzb24tY29udGFpbmVyXCI7XG5cbiAgICAgICAgdGhpcy53b3Jkcy5mb3JFYWNoKCh3b3JkLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RXb3JkID0gaWR4ID09PSB0aGlzLndvcmRzLmxlbmd0aCAtIDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBsZXNzb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJXb3JkKHdvcmQsIGxhc3RXb3JkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxlc3NvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbXBsZXRpb25CYXIoKSk7XG5cbiAgICAgICAgcmV0dXJuIGxlc3NvbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb21wbGV0aW9uQmFyKCkge1xuICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiYXIuY2xhc3NOYW1lID0gXCJjb21wbGV0aW9uLWJhclwiO1xuICAgICAgICByZXR1cm4gYmFyO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBsZXRpb25CYXIoKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGlvbi1iYXJcIik7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gKHRoaXMuY3VycmVudExldHRlckluZGV4IC8gKHRoaXMubGV0dGVycy5sZW5ndGggLSAxKSkgKiAxMDA7XG4gICAgICAgIGJhci5zdHlsZS53aWR0aCA9IGAke3dpZHRofSVgO1xuICAgIH1cblxuICAgIHNwZWVkKCkge1xuICAgICAgIGNvbnNvbGUubG9nKGAkeyh0aGlzLmVuZCAtIHRoaXMuc3RhcnQpIC8gMTAwMH0gc2Vjb25kc2ApOyBcbiAgICB9XG5cbiAgICBoYW5kbGVCYWNrc3BhY2UoZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV0dGVySW5kZXggPiAwICYmIHRoaXMuY3VycmVudExldHRlckluZGV4ICE9PSB0aGlzLmxldHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXR0ZXJJbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkTGV0dGVycy5wdXNoKHRoaXMuY3VycmVudExldHRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0VsZW1lbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50KCk7XG5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhwcmV2aW91c0VsZW1lbnQsIFwid3JvbmdcIik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MocHJldmlvdXNFbGVtZW50LCBcImNvcnJlY3RcIik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY3VycmVudEVsZW1lbnQsIFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1cnNvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGlvbkJhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV0dGVySW5kZXggPT09IDApIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV0dGVySW5kZXggPT09IHRoaXMubGV0dGVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLnNwZWVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV0dGVySW5kZXggIT09IHRoaXMubGV0dGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLmxldHRlcnNbdGhpcy5jdXJyZW50TGV0dGVySW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRlZExldHRlcnMuaW5jbHVkZXModGhpcy5jdXJyZW50TGV0dGVySW5kZXgpICYmIGUua2V5ID09PSBjdXJyZW50TGV0dGVyKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoY3VycmVudEVsZW1lbnQsIFwiZWRpdGVkXCIpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGN1cnJlbnRFbGVtZW50LCBcImN1cnNvclwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IGN1cnJlbnRMZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhjdXJyZW50RWxlbWVudCwgXCJjb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGN1cnJlbnRFbGVtZW50LCBcImN1cnNvclwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoY3VycmVudEVsZW1lbnQsIFwid3JvbmdcIik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY3VycmVudEVsZW1lbnQsIFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXR0ZXJJbmRleCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldHRlckluZGV4ICE9PSB0aGlzLmxldHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0aW9uQmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlc3NvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lesson.js\n");

/***/ }),

/***/ "./src/lessons.js":
/*!************************!*\
  !*** ./src/lessons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    0: {\n        lessonName: \"Hello World\",\n        content: \"Hello world!\"\n    },\n    1: {\n        lessonName: \"Lorem Ipsum\",\n        content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo dui, lobortis vitae nibh vitae, tempor bibendum nisi. Maecenas tempor feugiat dignissim. Cras placerat enim at mi consequat, ac eleifend enim viverra.\"\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVzc29ucy5qcz85ZmFkIl0sIm5hbWVzIjpbImxlc3Nvbk5hbWUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNYLE9BQUc7QUFDQ0Esb0JBQVksYUFEYjtBQUVDQyxpQkFBUztBQUZWLEtBRFE7QUFLWCxPQUFHO0FBQ0NELG9CQUFZLGFBRGI7QUFFQ0MsaUJBQVM7QUFGVjtBQUxRLEMiLCJmaWxlIjoiLi9zcmMvbGVzc29ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAwOiB7XG4gICAgICAgIGxlc3Nvbk5hbWU6IFwiSGVsbG8gV29ybGRcIiwgXG4gICAgICAgIGNvbnRlbnQ6IFwiSGVsbG8gd29ybGQhXCJcbiAgICB9LFxuICAgIDE6IHtcbiAgICAgICAgbGVzc29uTmFtZTogXCJMb3JlbSBJcHN1bVwiLFxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIGxlbyBkdWksIGxvYm9ydGlzIHZpdGFlIG5pYmggdml0YWUsIHRlbXBvciBiaWJlbmR1bSBuaXNpLiBNYWVjZW5hcyB0ZW1wb3IgZmV1Z2lhdCBkaWduaXNzaW0uIENyYXMgcGxhY2VyYXQgZW5pbSBhdCBtaSBjb25zZXF1YXQsIGFjIGVsZWlmZW5kIGVuaW0gdml2ZXJyYS5cIlxuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lessons.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar addClass = exports.addClass = function addClass(element, className) {\n    var classes = element.className.split(\" \");\n\n    if (!classes.includes(className)) {\n        classes.push(className);\n    }\n\n    element.className = classes.join(\" \");\n};\n\nvar removeClass = exports.removeClass = function removeClass(element, className) {\n    var classes = element.className.split(\" \");\n\n    var filteredClasses = classes.filter(function (klass) {\n        return klass !== className;\n    });\n\n    element.className = filteredClasses.join(\" \");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcz9lMGViIl0sIm5hbWVzIjpbImFkZENsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJzcGxpdCIsImluY2x1ZGVzIiwicHVzaCIsImpvaW4iLCJyZW1vdmVDbGFzcyIsImZpbHRlcmVkQ2xhc3NlcyIsImZpbHRlciIsImtsYXNzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQzVDLFFBQU1DLFVBQVVGLFFBQVFDLFNBQVIsQ0FBa0JFLEtBQWxCLENBQXdCLEdBQXhCLENBQWhCOztBQUVBLFFBQUksQ0FBQ0QsUUFBUUUsUUFBUixDQUFpQkgsU0FBakIsQ0FBTCxFQUFrQztBQUM5QkMsZ0JBQVFHLElBQVIsQ0FBYUosU0FBYjtBQUNIOztBQUVERCxZQUFRQyxTQUFSLEdBQW9CQyxRQUFRSSxJQUFSLENBQWEsR0FBYixDQUFwQjtBQUNILENBUk07O0FBVUEsSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDUCxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFDL0MsUUFBTUMsVUFBVUYsUUFBUUMsU0FBUixDQUFrQkUsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBaEI7O0FBRUEsUUFBTUssa0JBQWtCTixRQUFRTyxNQUFSLENBQWUsaUJBQVM7QUFDNUMsZUFBT0MsVUFBVVQsU0FBakI7QUFDSCxLQUZ1QixDQUF4Qjs7QUFJQUQsWUFBUUMsU0FBUixHQUFvQk8sZ0JBQWdCRixJQUFoQixDQUFxQixHQUFyQixDQUFwQjtBQUNILENBUk0iLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgIFxuICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoa2xhc3MgPT4ge1xuICAgICAgICByZXR1cm4ga2xhc3MgIT09IGNsYXNzTmFtZTtcbiAgICB9KTtcblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZmlsdGVyZWRDbGFzc2VzLmpvaW4oXCIgXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });