/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("function ibg() {\r\n\r\n   $.each($('.ibg'), function (index, val) {\r\n      if ($(this).find('img').length > 0) {\r\n         $(this).css('background-image', 'url(\"' + $(this).find('img').attr('src') + '\")');\r\n      }\r\n   });\r\n}\r\n\r\nibg();\r\n\r\n$(document).ready(function () {\r\n   $('.header_burger').click(function (event) {\r\n      $('.header_burger,.header_header-menu').toggleClass(`active`);\r\n   });\r\n});\n\n//# sourceURL=webpack://gulp/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;