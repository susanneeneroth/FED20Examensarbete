webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/post.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-media */ \"./packages/exjobb-susanne-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const Html2React=libraries.html2react.Component;const fmediaId=post.featured_media;const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"YYYY-MM-DD\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PostContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"title\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"meta\",{name:\"description\",content:post.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PostContent,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{id:post.featured_media}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PostInfo,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"p\",{children:[\"Posted: \",formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"p\",{children:[\"Author: \",author.name]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:post.content.rendered})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));const PostContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf2\",label:\"PostContainer\"})( false?undefined:{name:\"c1arbp\",styles:\"height:auto;width:1140px;padding-top:30px;color:#cbe4f5;padding:10px 0 20px 0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2dDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0Q29udGVudD5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0MHB4O1xuYDtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAxODI3O1xuXG4gICYgPiBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PostContent=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf1\",label:\"PostContent\"})( false?undefined:{name:\"8z1n01\",styles:\"height:auto;width:1140px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QzhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0Q29udGVudD5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0MHB4O1xuYDtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAxODI3O1xuXG4gICYgPiBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PostInfo=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf0\",label:\"PostInfo\"})( false?undefined:{name:\"nirdzh\",styles:\"background-image:linear-gradient(to right, #f4f4f4, #fff);margin-bottom:1em;padding:0.5em;border-left:4px solid lightseagreen;font-size:0.8em;color:#001827;&>p{margin:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRDJCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0Q29udGVudD5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0MHB4O1xuYDtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAxODI3O1xuXG4gICYgPiBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzgzMDIiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJmbWVkaWFJZCIsImZlYXR1cmVkX21lZGlhIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwiZGF0ZSIsImZvcm1hdCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibmFtZSIsImNvbnRlbnQiLCJjb25uZWN0IiwiUG9zdENvbnRhaW5lciIsInN0eWxlZCIsIlBvc3RDb250ZW50IiwiUG9zdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBRCxHQUEwQixDQUNyQyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR1AsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEtBQU1DLE9BQU0sQ0FBR1YsS0FBSyxDQUFDRyxNQUFOLENBQWFPLE1BQWIsQ0FBb0JILElBQUksQ0FBQ0csTUFBekIsQ0FBZixDQUNBLEtBQU1DLFdBQVUsQ0FBR1YsU0FBUyxDQUFDVyxVQUFWLENBQXFCQyxTQUF4QyxDQUNBLEtBQU1DLFNBQVEsQ0FBR1AsSUFBSSxDQUFDUSxjQUF0QixDQUVBLEtBQU1DLGNBQWEsQ0FBR0MsNENBQUssQ0FBQ1YsSUFBSSxDQUFDVyxJQUFOLENBQUwsQ0FBaUJDLE1BQWpCLENBQXdCLFlBQXhCLENBQXRCLENBRUEsTUFDRSx5RUFBQyxhQUFELFlBQ0Usd0VBQUMsNkNBQUQsWUFDRSx5RkFBUVosSUFBSSxDQUFDYSxLQUFMLENBQVdDLFFBQW5CLEVBREYsQ0FFRSwrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVkLElBQUksQ0FBQ2UsT0FBTCxDQUFhRCxRQUEvQyxFQUZGLEdBREYsQ0FLRSx3RUFBQyxXQUFELFlBQ0UsdUVBQUMsdURBQUQsRUFBZSxFQUFFLENBQUVkLElBQUksQ0FBQ1EsY0FBeEIsRUFERixDQUVFLHNGQUFLUixJQUFJLENBQUNhLEtBQUwsQ0FBV0MsUUFBaEIsRUFGRixDQUdFLHdFQUFDLFFBQUQsWUFDRSxrR0FBWUwsYUFBWixHQURGLENBRUUsa0dBQVlOLE1BQU0sQ0FBQ2EsSUFBbkIsR0FGRixHQUhGLENBT0UsdUVBQUMsVUFBRCxFQUFZLElBQUksQ0FBRWhCLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUgsUUFBL0IsRUFQRixHQUxGLEdBREYsQ0FpQkQsQ0ExQkQsQ0E0QmVJLHVIQUFPLENBQUMxQixJQUFELENBQXRCLEVBRUEsS0FBTTJCLGNBQWEsQ0FBR0MsdURBQUgsdTFGQUFuQixDQVNBLEtBQU1DLFlBQVcsQ0FBR0QsdURBQUgsZ3lGQUFqQixDQUtBLEtBQU1FLFNBQVEsQ0FBR0YsdURBQUgsKzZGQUFkIiwiZmlsZSI6Ii4vcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0Q29udGVudD5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0MHB4O1xuYDtcblxuY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAxODI3O1xuXG4gICYgPiBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/post.js\n");

/***/ })

})