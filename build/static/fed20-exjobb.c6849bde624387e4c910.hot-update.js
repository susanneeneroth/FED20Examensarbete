webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/post.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-media */ \"./packages/exjobb-susanne-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const Html2React=libraries.html2react.Component;const fmediaId=post.featured_media;const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"YYYY-MM-DD\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{id:post.featured_media}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"title\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"meta\",{name:\"description\",content:post.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{id:post.featured_media}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PostInfo,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"p\",{children:[\"Posted: \",formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"p\",{children:[\"Author: \",author.name]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:post.content.rendered})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));const PostInfo=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf0\",label:\"PostInfo\"})( false?undefined:{name:\"162rpjw\",styles:\"background-image:linear-gradient(to right, #f4f4f4, #fff);margin-bottom:1em;padding:0.5em;border-left:4px solid lightseagreen;font-size:0.8em;&>p{margin:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17cG9zdC5mZWF0dXJlZF9tZWRpYX0gLz5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSAvPlxuICAgICAgPGgyPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XG4gICAgICA8UG9zdEluZm8+XG4gICAgICAgIDxwPlBvc3RlZDoge2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgICA8cD5BdXRob3I6IHthdXRob3IubmFtZX08L3A+XG4gICAgICA8L1Bvc3RJbmZvPlxuICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG5cbiAgJiA+IHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzgzMDIiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJmbWVkaWFJZCIsImZlYXR1cmVkX21lZGlhIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwiZGF0ZSIsImZvcm1hdCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibmFtZSIsImNvbnRlbnQiLCJjb25uZWN0IiwiUG9zdEluZm8iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBRCxHQUEwQixDQUNyQyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR1AsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEtBQU1DLE9BQU0sQ0FBR1YsS0FBSyxDQUFDRyxNQUFOLENBQWFPLE1BQWIsQ0FBb0JILElBQUksQ0FBQ0csTUFBekIsQ0FBZixDQUNBLEtBQU1DLFdBQVUsQ0FBR1YsU0FBUyxDQUFDVyxVQUFWLENBQXFCQyxTQUF4QyxDQUNBLEtBQU1DLFNBQVEsQ0FBR1AsSUFBSSxDQUFDUSxjQUF0QixDQUVBLEtBQU1DLGNBQWEsQ0FBR0MsNENBQUssQ0FBQ1YsSUFBSSxDQUFDVyxJQUFOLENBQUwsQ0FBaUJDLE1BQWpCLENBQXdCLFlBQXhCLENBQXRCLENBRUEsTUFDRSwwRkFDRSx3RUFBQyw2Q0FBRCxZQUNFLHVFQUFDLHVEQUFELEVBQWUsRUFBRSxDQUFFWixJQUFJLENBQUNRLGNBQXhCLEVBREYsQ0FFRSx5RkFBUVIsSUFBSSxDQUFDYSxLQUFMLENBQVdDLFFBQW5CLEVBRkYsQ0FHRSwrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVkLElBQUksQ0FBQ2UsT0FBTCxDQUFhRCxRQUEvQyxFQUhGLEdBREYsQ0FNRSx1RUFBQyx1REFBRCxFQUFlLEVBQUUsQ0FBRWQsSUFBSSxDQUFDUSxjQUF4QixFQU5GLENBT0Usc0ZBQUtSLElBQUksQ0FBQ2EsS0FBTCxDQUFXQyxRQUFoQixFQVBGLENBUUUsd0VBQUMsUUFBRCxZQUNFLGtHQUFZTCxhQUFaLEdBREYsQ0FFRSxrR0FBWU4sTUFBTSxDQUFDYSxJQUFuQixHQUZGLEdBUkYsQ0FZRSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFaEIsSUFBSSxDQUFDaUIsT0FBTCxDQUFhSCxRQUEvQixFQVpGLEdBREYsQ0FnQkQsQ0F6QkQsQ0EyQmVJLHVIQUFPLENBQUMxQixJQUFELENBQXRCLEVBRUEsS0FBTTJCLFNBQVEsQ0FBR0MsdURBQUgsMGhGQUFkIiwiZmlsZSI6Ii4vcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17cG9zdC5mZWF0dXJlZF9tZWRpYX0gLz5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSAvPlxuICAgICAgPGgyPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XG4gICAgICA8UG9zdEluZm8+XG4gICAgICAgIDxwPlBvc3RlZDoge2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgICA8cD5BdXRob3I6IHthdXRob3IubmFtZX08L3A+XG4gICAgICA8L1Bvc3RJbmZvPlxuICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG5cbiAgJiA+IHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/post.js\n");

/***/ })

})