webpackHotUpdate("fed20-exjobb",{

/***/ "./node_modules/dayjs/locale/de.js":
false,

/***/ "./packages/exjobb-susanne-theme/src/components/post.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Post=({state})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).locale(de).format(\"DD MMMM YYYY\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[\"Posted: \",formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[\"Author: \",author.name]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzgzMDIiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwiZGF0ZSIsImxvY2FsZSIsImRlIiwiZm9ybWF0IiwidGl0bGUiLCJyZW5kZXJlZCIsIm5hbWUiLCJfX2h0bWwiLCJjb250ZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzFCLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHTixLQUFLLENBQUNFLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBQ0EsS0FBTUMsT0FBTSxDQUFHVCxLQUFLLENBQUNFLE1BQU4sQ0FBYU8sTUFBYixDQUFvQkgsSUFBSSxDQUFDRyxNQUF6QixDQUFmLENBRUEsS0FBTUMsY0FBYSxDQUFHQyw0Q0FBSyxDQUFDTCxJQUFJLENBQUNNLElBQU4sQ0FBTCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQXhCLEVBQTRCQyxNQUE1QixDQUFtQyxjQUFuQyxDQUF0QixDQUVBLE1BQ0UsMEZBQ0Usc0ZBQUtULElBQUksQ0FBQ1UsS0FBTCxDQUFXQyxRQUFoQixFQURGLENBRUUsa0dBQVlQLGFBQVosR0FGRixDQUdFLGtHQUFZRCxNQUFNLENBQUNTLElBQW5CLEdBSEYsQ0FJRSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUViLElBQUksQ0FBQ2MsT0FBTCxDQUFhSCxRQUF2QixDQUE5QixFQUpGLEdBREYsQ0FRRCxDQWZELENBaUJlSSx1SEFBTyxDQUFDdEIsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5sb2NhbGUoZGUpLmZvcm1hdChcIkREIE1NTU0gWVlZWVwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgIDxwPlBvc3RlZDoge2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/post.js\n");

/***/ })

})