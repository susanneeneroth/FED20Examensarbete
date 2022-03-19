webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/post.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const Html2React=libraries.html2react.Component;const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"YYYY-MM-DD\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"title\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"meta\",{name:\"description\",content:post.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(PostInfo,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[\"Posted: \",formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[\"Author: \",author.name]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:post.content.rendered})]},data.id);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));const PostInfo=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf0\",label:\"PostInfo\"})( false?undefined:{name:\"162rpjw\",styles:\"background-image:linear-gradient(to right, #f4f4f4, #fff);margin-bottom:1em;padding:0.5em;border-left:4px solid lightseagreen;font-size:0.8em;&>p{margin:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjJCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgIDxQb3N0SW5mbz5cbiAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgIDxwPkF1dGhvcjoge2F1dGhvci5uYW1lfTwvcD5cbiAgICAgIDwvUG9zdEluZm8+XG4gICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y0ZjRmNCwgI2ZmZik7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgbGlnaHRzZWFncmVlbjtcbiAgZm9udC1zaXplOiAwLjhlbTtcblxuICAmID4gcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzgzMDIiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJmb3JtYXR0ZWREYXRlIiwiZGF5anMiLCJkYXRlIiwiZm9ybWF0IiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJuYW1lIiwiY29udGVudCIsImNvbm5lY3QiLCJQb3N0SW5mbyIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cVJBSUEsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxTQUFULENBQUQsR0FBMEIsQ0FDckMsS0FBTUMsS0FBSSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxLQUFJLENBQUdQLEtBQUssQ0FBQ0csTUFBTixDQUFhRCxJQUFJLENBQUNNLElBQWxCLEVBQXdCTixJQUFJLENBQUNPLEVBQTdCLENBQWIsQ0FDQSxLQUFNQyxPQUFNLENBQUdWLEtBQUssQ0FBQ0csTUFBTixDQUFhTyxNQUFiLENBQW9CSCxJQUFJLENBQUNHLE1BQXpCLENBQWYsQ0FDQSxLQUFNQyxXQUFVLENBQUdWLFNBQVMsQ0FBQ1csVUFBVixDQUFxQkMsU0FBeEMsQ0FFQSxLQUFNQyxjQUFhLENBQUdDLDRDQUFLLENBQUNSLElBQUksQ0FBQ1MsSUFBTixDQUFMLENBQWlCQyxNQUFqQixDQUF3QixZQUF4QixDQUF0QixDQUVBLE1BQ0UsMEZBQ0Usd0VBQUMsNkNBQUQsWUFDRSx5RkFBUVYsSUFBSSxDQUFDVyxLQUFMLENBQVdDLFFBQW5CLEVBREYsQ0FFRSwrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVaLElBQUksQ0FBQ2EsT0FBTCxDQUFhRCxRQUEvQyxFQUZGLEdBREYsQ0FLRSxzRkFBS1osSUFBSSxDQUFDVyxLQUFMLENBQVdDLFFBQWhCLEVBTEYsQ0FNRSx3RUFBQyxRQUFELFlBQ0Usa0dBQVlMLGFBQVosR0FERixDQUVFLGtHQUFZSixNQUFNLENBQUNXLElBQW5CLEdBRkYsR0FORixDQVVFLHVFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVkLElBQUksQ0FBQ2UsT0FBTCxDQUFhSCxRQUEvQixFQVZGLEdBQVVqQixJQUFJLENBQUNPLEVBQWYsQ0FERixDQWNELENBdEJELENBd0JlYyx1SEFBTyxDQUFDeEIsSUFBRCxDQUF0QixFQUVBLEtBQU15QixTQUFRLENBQUdDLHVEQUFILDB5RUFBZCIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRheWpzKHBvc3QuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5leGNlcnB0LnJlbmRlcmVkfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgyPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XG4gICAgICA8UG9zdEluZm8+XG4gICAgICAgIDxwPlBvc3RlZDoge2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgICA8cD5BdXRob3I6IHthdXRob3IubmFtZX08L3A+XG4gICAgICA8L1Bvc3RJbmZvPlxuICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG5cbiAgJiA+IHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/post.js\n");

/***/ })

})