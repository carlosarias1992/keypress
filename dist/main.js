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
eval("\n\nvar _lesson = __webpack_require__(/*! ./lesson */ \"./src/lesson.js\");\n\nvar _lesson2 = _interopRequireDefault(_lesson);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var root = document.getElementById(\"root\");\n\n    var lesson = new _lesson2.default(0);\n    root.appendChild(lesson.render());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZXNzb24iLCJMZXNzb24iLCJhcHBlbmRDaGlsZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELFFBQU1DLE9BQU9GLFNBQVNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFFQSxRQUFNQyxTQUFTLElBQUlDLGdCQUFKLENBQVcsQ0FBWCxDQUFmO0FBQ0FILFNBQUtJLFdBQUwsQ0FBaUJGLE9BQU9HLE1BQVAsRUFBakI7QUFDSCxDQUxEIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExlc3NvbiBmcm9tICcuL2xlc3Nvbic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gICAgY29uc3QgbGVzc29uID0gbmV3IExlc3NvbigwKTtcbiAgICByb290LmFwcGVuZENoaWxkKGxlc3Nvbi5yZW5kZXIoKSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/lesson.js":
/*!***********************!*\
  !*** ./src/lesson.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lessons = __webpack_require__(/*! ./lessons */ \"./src/lessons.js\");\n\nvar _lessons2 = _interopRequireDefault(_lessons);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Lesson = function () {\n    function Lesson(lessonNumber) {\n        _classCallCheck(this, Lesson);\n\n        this.lesson = _lessons2.default[lessonNumber];\n    }\n\n    _createClass(Lesson, [{\n        key: \"render\",\n        value: function render() {\n            var content = this.lesson.content;\n\n            var lessonContainer = document.createElement(\"div\");\n            lessonContainer.className = \"lesson-container\";\n\n            content.split(\"\").forEach(function (letter, idx) {\n                var letterHolder = document.createElement(\"span\");\n\n                if (idx === 0) {\n                    letterHolder.className = \"letter-holder cursor\";\n                } else {\n                    letterHolder.className = \"letter-holder\";\n                }\n\n                letterHolder.innerHTML = letter;\n                lessonContainer.appendChild(letterHolder);\n            });\n\n            return lessonContainer;\n        }\n    }]);\n\n    return Lesson;\n}();\n\nexports.default = Lesson;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVzc29uLmpzPzc2NDgiXSwibmFtZXMiOlsiTGVzc29uIiwibGVzc29uTnVtYmVyIiwibGVzc29uIiwibGVzc29ucyIsImNvbnRlbnQiLCJsZXNzb25Db250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJpZHgiLCJsZXR0ZXJIb2xkZXIiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsTTtBQUNGLG9CQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3RCLGFBQUtDLE1BQUwsR0FBY0Msa0JBQVFGLFlBQVIsQ0FBZDtBQUNIOzs7O2lDQUVRO0FBQUEsZ0JBQ0dHLE9BREgsR0FDZSxLQUFLRixNQURwQixDQUNHRSxPQURIOztBQUVMLGdCQUFNQyxrQkFBa0JDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7QUFDQUYsNEJBQWdCRyxTQUFoQixHQUE0QixrQkFBNUI7O0FBRUFKLG9CQUFRSyxLQUFSLENBQWMsRUFBZCxFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQ3ZDLG9CQUFNQyxlQUFlUCxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQXJCOztBQUVBLG9CQUFJSyxRQUFRLENBQVosRUFBZTtBQUNYQyxpQ0FBYUwsU0FBYixHQUF5QixzQkFBekI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hLLGlDQUFhTCxTQUFiLEdBQXlCLGVBQXpCO0FBQ0g7O0FBRURLLDZCQUFhQyxTQUFiLEdBQXlCSCxNQUF6QjtBQUNBTixnQ0FBZ0JVLFdBQWhCLENBQTRCRixZQUE1QjtBQUNILGFBWEQ7O0FBYUEsbUJBQU9SLGVBQVA7QUFDSDs7Ozs7O2tCQUdVTCxNIiwiZmlsZSI6Ii4vc3JjL2xlc3Nvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZXNzb25zIGZyb20gJy4vbGVzc29ucyc7XG5cbmNsYXNzIExlc3NvbiB7XG4gICAgY29uc3RydWN0b3IobGVzc29uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGVzc29uID0gbGVzc29uc1tsZXNzb25OdW1iZXJdO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLmxlc3NvbjtcbiAgICAgICAgY29uc3QgbGVzc29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVzc29uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGVzc29uLWNvbnRhaW5lclwiO1xuXG4gICAgICAgIGNvbnRlbnQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlckhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0dGVySG9sZGVyLmNsYXNzTmFtZSA9IFwibGV0dGVyLWhvbGRlciBjdXJzb3JcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0dGVySG9sZGVyLmNsYXNzTmFtZSA9IFwibGV0dGVyLWhvbGRlclwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXR0ZXJIb2xkZXIuaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgICAgICAgICAgbGVzc29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldHRlckhvbGRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsZXNzb25Db250YWluZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXNzb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lesson.js\n");

/***/ }),

/***/ "./src/lessons.js":
/*!************************!*\
  !*** ./src/lessons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    0: {\n        lessonName: \"Lorem Ipsum\",\n        content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo dui, lobortis vitae nibh vitae, tempor bibendum nisi. Maecenas tempor feugiat dignissim. Cras placerat enim at mi consequat, ac eleifend enim viverra.\"\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVzc29ucy5qcz85ZmFkIl0sIm5hbWVzIjpbImxlc3Nvbk5hbWUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNYLE9BQUc7QUFDQ0Esb0JBQVksYUFEYjtBQUVDQyxpQkFBUztBQUZWO0FBRFEsQyIsImZpbGUiOiIuL3NyYy9sZXNzb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIDA6IHtcbiAgICAgICAgbGVzc29uTmFtZTogXCJMb3JlbSBJcHN1bVwiLCBcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYSBsZW8gZHVpLCBsb2JvcnRpcyB2aXRhZSBuaWJoIHZpdGFlLCB0ZW1wb3IgYmliZW5kdW0gbmlzaS4gTWFlY2VuYXMgdGVtcG9yIGZldWdpYXQgZGlnbmlzc2ltLiBDcmFzIHBsYWNlcmF0IGVuaW0gYXQgbWkgY29uc2VxdWF0LCBhYyBlbGVpZmVuZCBlbmltIHZpdmVycmEuXCJcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lessons.js\n");

/***/ })

/******/ });