webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/works.js":
/*!************************!*\
  !*** ./pages/works.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_works__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/works */ "./utils/works.js");
var _jsxFileName = "/Users/sartre/Desktop/dev/bema/pages/works.js";



var myWorks = Object(_utils_works__WEBPACK_IMPORTED_MODULE_2__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.work,
    id: "work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "::: work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentWork,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, myWorks.map(function (work, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
      style: {
        backgroundImage: "url(".concat(work.cover, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, work.title));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.77d9a2f753c697bd65a6.hot-update.js.map