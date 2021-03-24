/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/forbidden.js":
/*!******************************!*\
  !*** ./src/app/forbidden.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_forbidden_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/forbidden.scss */ "./src/style/forbidden.scss");

var interval = 500;

function generateLocks() {
  //generates locks
  var lock = document.createElement('div'),
      position = generatePosition(); //locks position

  lock.innerHTML = '<div class="top"></div><div class="bottom"></div>';
  lock.style.top = position[0];
  lock.style.left = position[1];
  lock.classList = 'lock'; // generated';

  document.body.appendChild(lock);
  setTimeout(function () {
    lock.style.opacity = '1';
    lock.classList.add('generated');
  }, 100);
  setTimeout(function () {
    lock.parentElement.removeChild(lock);
  }, 2000);
}

function generatePosition() {
  //generating random location coordinates
  var x = Math.round(Math.random() * 100 - 10) + '%';
  var y = Math.round(Math.random() * 100) + '%';
  return [x, y];
}

setInterval(generateLocks, interval);
generateLocks();
var link = document.getElementById('link');
link.addEventListener('click', function () {
  window.history.go(-2);
}); // footer.setAttribute('class','footer');
// document.body.appendChild(lock);

/***/ }),

/***/ "./src/style/forbidden.scss":
/*!**********************************!*\
  !*** ./src/style/forbidden.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/forbidden.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnBhY2tfc2V0dXAvLi9zcmMvYXBwL2ZvcmJpZGRlbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnBhY2tfc2V0dXAvLi9zcmMvc3R5bGUvZm9yYmlkZGVuLnNjc3M/NmY1ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnBhY2tfc2V0dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJwYWNrX3NldHVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJwYWNrX3NldHVwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbnRlcnZhbCIsImdlbmVyYXRlTG9ja3MiLCJsb2NrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicG9zaXRpb24iLCJnZW5lcmF0ZVBvc2l0aW9uIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiY2xhc3NMaXN0IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsIm9wYWNpdHkiLCJhZGQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwieSIsInNldEludGVydmFsIiwibGluayIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImhpc3RvcnkiLCJnbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUcsR0FBakI7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtBQUErQjtBQUNwRCxNQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQUEsTUFDSUMsUUFBUSxHQUFHQyxnQkFBZ0IsRUFEL0IsQ0FEcUIsQ0FFa0M7O0FBQ3ZESixNQUFJLENBQUNLLFNBQUwsR0FBaUIsbURBQWpCO0FBQ0FMLE1BQUksQ0FBQ00sS0FBTCxDQUFXQyxHQUFYLEdBQWlCSixRQUFRLENBQUMsQ0FBRCxDQUF6QjtBQUNBSCxNQUFJLENBQUNNLEtBQUwsQ0FBV0UsSUFBWCxHQUFrQkwsUUFBUSxDQUFDLENBQUQsQ0FBMUI7QUFDQUgsTUFBSSxDQUFDUyxTQUFMLEdBQWlCLE1BQWpCLENBTnFCLENBTUU7O0FBQ3ZCUixVQUFRLENBQUNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlgsSUFBMUI7QUFDQVksWUFBVSxDQUFDLFlBQU07QUFDYlosUUFBSSxDQUFDTSxLQUFMLENBQVdPLE9BQVgsR0FBcUIsR0FBckI7QUFDQWIsUUFBSSxDQUFDUyxTQUFMLENBQWVLLEdBQWYsQ0FBbUIsV0FBbkI7QUFDSCxHQUhTLEVBR1AsR0FITyxDQUFWO0FBSUFGLFlBQVUsQ0FBQyxZQUFNO0FBQ2JaLFFBQUksQ0FBQ2UsYUFBTCxDQUFtQkMsV0FBbkIsQ0FBK0JoQixJQUEvQjtBQUNILEdBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDs7QUFDRCxTQUFTSSxnQkFBVCxHQUE0QjtBQUF3QjtBQUNoRCxNQUFNYSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsR0FBd0IsRUFBbkMsSUFBeUMsR0FBbkQ7QUFDQSxNQUFNQyxDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsSUFBa0MsR0FBNUM7QUFDQSxTQUFPLENBQUNILENBQUQsRUFBSUksQ0FBSixDQUFQO0FBQ0g7O0FBQ0RDLFdBQVcsQ0FBQ3ZCLGFBQUQsRUFBZ0JELFFBQWhCLENBQVg7QUFDQUMsYUFBYTtBQUViLElBQUl3QixJQUFJLEdBQUd0QixRQUFRLENBQUN1QixjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDQUQsSUFBSSxDQUFDRSxnQkFBTCxDQUFzQixPQUF0QixFQUE4QixZQUFLO0FBQy9CQyxRQUFNLENBQUNDLE9BQVAsQ0FBZUMsRUFBZixDQUFrQixDQUFDLENBQW5CO0FBQ0gsQ0FGRCxFLENBSUE7QUFDQSxtQzs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJmb3JiaWRkZW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZS9mb3JiaWRkZW4uc2Nzcyc7XG5cbmNvbnN0IGludGVydmFsID0gNTAwO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUxvY2tzKCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2VuZXJhdGVzIGxvY2tzXG4gICAgY29uc3QgbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwb3NpdGlvbiA9IGdlbmVyYXRlUG9zaXRpb24oKTsgICAgICAgICAgICAgICAgICAgICAvL2xvY2tzIHBvc2l0aW9uXG4gICAgbG9jay5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInRvcFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3R0b21cIj48L2Rpdj4nO1xuICAgIGxvY2suc3R5bGUudG9wID0gcG9zaXRpb25bMF07XG4gICAgbG9jay5zdHlsZS5sZWZ0ID0gcG9zaXRpb25bMV07XG4gICAgbG9jay5jbGFzc0xpc3QgPSAnbG9jaycvLyBnZW5lcmF0ZWQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9jayk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbG9jay5jbGFzc0xpc3QuYWRkKCdnZW5lcmF0ZWQnKTtcbiAgICB9LCAxMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsb2NrLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobG9jayk7XG4gICAgfSwgMjAwMCk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVBvc2l0aW9uKCkgeyAgICAgICAgICAgICAgICAgICAgICAgLy9nZW5lcmF0aW5nIHJhbmRvbSBsb2NhdGlvbiBjb29yZGluYXRlc1xuICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTAwKSAtIDEwKSArICclJztcbiAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSArICclJztcbiAgICByZXR1cm4gW3gsIHldO1xufVxuc2V0SW50ZXJ2YWwoZ2VuZXJhdGVMb2NrcywgaW50ZXJ2YWwpO1xuZ2VuZXJhdGVMb2NrcygpO1xuXG5sZXQgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rJylcbmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKC0yKTtcbn0pXG5cbi8vIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZm9vdGVyJyk7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvY2spOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvZm9yYmlkZGVuLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==