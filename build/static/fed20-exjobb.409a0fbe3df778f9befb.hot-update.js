webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/post.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-media */ \"./packages/exjobb-susanne-theme/src/components/featured-media.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/exjobb-susanne-theme/src/components/list/index.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries,actions})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const Html2React=libraries.html2react.Component;const fmediaId=post.featured_media;console.log(\"fmediaId\",fmediaId);// Prefetch home posts and the list component.\nactions.source.fetch(\"/\");_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload();const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"YYYY-MM-DD\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(PostContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"title\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"meta\",{name:\"description\",content:post.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(PostContent,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{id:fmediaId}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(PostInfo,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"p\",{children:[\"Posted: \",formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"p\",{children:[\"Author: \",author.name]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Html2React,{html:post.content.rendered})]})]});};const PostContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf2\",label:\"PostContainer\"})( false?undefined:{name:\"c1arbp\",styles:\"height:auto;width:1140px;padding-top:30px;color:#cbe4f5;padding:10px 0 20px 0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMsIGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcbiAgY29uc29sZS5sb2coXCJmbWVkaWFJZFwiLCBmbWVkaWFJZCk7XG5cbiAgLy8gUHJlZmV0Y2ggaG9tZSBwb3N0cyBhbmQgdGhlIGxpc3QgY29tcG9uZW50LlxuICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIExpc3QucHJlbG9hZCgpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXlqcyhwb3N0LmRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9zdENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5leGNlcnB0LnJlbmRlcmVkfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBvc3RDb250ZW50PlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17Zm1lZGlhSWR9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogODQwcHg7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFBvc3RJbmZvID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBwaW5rLCAjZmZmKTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzAwMTgyNztcblxuICAmID4gcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PostContent=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf1\",label:\"PostContent\"})( false?undefined:{name:\"1ybn18i\",styles:\"height:auto;width:840px;margin:auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMsIGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcbiAgY29uc29sZS5sb2coXCJmbWVkaWFJZFwiLCBmbWVkaWFJZCk7XG5cbiAgLy8gUHJlZmV0Y2ggaG9tZSBwb3N0cyBhbmQgdGhlIGxpc3QgY29tcG9uZW50LlxuICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIExpc3QucHJlbG9hZCgpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXlqcyhwb3N0LmRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9zdENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5leGNlcnB0LnJlbmRlcmVkfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBvc3RDb250ZW50PlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17Zm1lZGlhSWR9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogODQwcHg7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFBvc3RJbmZvID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBwaW5rLCAjZmZmKTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzAwMTgyNztcblxuICAmID4gcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PostInfo=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"eh7s0yf0\",label:\"PostInfo\"})( false?undefined:{name:\"ip9h7y\",styles:\"background-image:linear-gradient(to right, pink, #fff);margin-bottom:1em;padding:0.5em;border-left:4px solid lightseagreen;font-size:0.8em;color:#001827;&>p{margin:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRDJCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMsIGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcbiAgY29uc29sZS5sb2coXCJmbWVkaWFJZFwiLCBmbWVkaWFJZCk7XG5cbiAgLy8gUHJlZmV0Y2ggaG9tZSBwb3N0cyBhbmQgdGhlIGxpc3QgY29tcG9uZW50LlxuICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIExpc3QucHJlbG9hZCgpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXlqcyhwb3N0LmRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9zdENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5leGNlcnB0LnJlbmRlcmVkfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBvc3RDb250ZW50PlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17Zm1lZGlhSWR9IC8+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgPHA+UG9zdGVkOiB7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgPHA+QXV0aG9yOiB7YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICA8L1Bvc3RDb250ZW50PlxuICAgIDwvUG9zdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogI2NiZTRmNTtcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbmA7XG5cbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogODQwcHg7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFBvc3RJbmZvID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBwaW5rLCAjZmZmKTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzAwMTgyNztcblxuICAmID4gcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzgzMDIiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiYWN0aW9ucyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicG9zdCIsInR5cGUiLCJpZCIsImF1dGhvciIsIkh0bWwyUmVhY3QiLCJodG1sMnJlYWN0IiwiQ29tcG9uZW50IiwiZm1lZGlhSWQiLCJmZWF0dXJlZF9tZWRpYSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIkxpc3QiLCJwcmVsb2FkIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwiZGF0ZSIsImZvcm1hdCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibmFtZSIsImNvbnRlbnQiLCJQb3N0Q29udGFpbmVyIiwic3R5bGVkIiwiUG9zdENvbnRlbnQiLCJQb3N0SW5mbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cVJBTUEsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxTQUFULENBQW9CQyxPQUFwQixDQUFELEdBQW1DLENBQzlDLEtBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUixLQUFLLENBQUNJLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBQ0EsS0FBTUMsT0FBTSxDQUFHWCxLQUFLLENBQUNJLE1BQU4sQ0FBYU8sTUFBYixDQUFvQkgsSUFBSSxDQUFDRyxNQUF6QixDQUFmLENBQ0EsS0FBTUMsV0FBVSxDQUFHWCxTQUFTLENBQUNZLFVBQVYsQ0FBcUJDLFNBQXhDLENBQ0EsS0FBTUMsU0FBUSxDQUFHUCxJQUFJLENBQUNRLGNBQXRCLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosQ0FBd0JILFFBQXhCLEVBRUE7QUFDQWIsT0FBTyxDQUFDRSxNQUFSLENBQWVlLEtBQWYsQ0FBcUIsR0FBckIsRUFDQUMsNkNBQUksQ0FBQ0MsT0FBTCxHQUVBLEtBQU1DLGNBQWEsQ0FBR0MsNENBQUssQ0FBQ2YsSUFBSSxDQUFDZ0IsSUFBTixDQUFMLENBQWlCQyxNQUFqQixDQUF3QixZQUF4QixDQUF0QixDQUVBLE1BQ0UseUVBQUMsYUFBRCxZQUNFLHdFQUFDLDZDQUFELFlBQ0UseUZBQVFqQixJQUFJLENBQUNrQixLQUFMLENBQVdDLFFBQW5CLEVBREYsQ0FFRSwrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVuQixJQUFJLENBQUNvQixPQUFMLENBQWFELFFBQS9DLEVBRkYsR0FERixDQUtFLHdFQUFDLFdBQUQsWUFDRSx1RUFBQyx1REFBRCxFQUFlLEVBQUUsQ0FBRVosUUFBbkIsRUFERixDQUVFLHNGQUFLUCxJQUFJLENBQUNrQixLQUFMLENBQVdDLFFBQWhCLEVBRkYsQ0FHRSx3RUFBQyxRQUFELFlBQ0Usa0dBQVlMLGFBQVosR0FERixDQUVFLGtHQUFZWCxNQUFNLENBQUNrQixJQUFuQixHQUZGLEdBSEYsQ0FPRSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFckIsSUFBSSxDQUFDc0IsT0FBTCxDQUFhSCxRQUEvQixFQVBGLEdBTEYsR0FERixDQWlCRCxDQS9CRCxDQWlDQSxLQUFNSSxjQUFhLENBQUdDLHVEQUFILCtoR0FBbkIsQ0FRQSxLQUFNQyxZQUFXLENBQUdELHVEQUFILG8vRkFBakIsQ0FNQSxLQUFNRSxTQUFRLENBQUdGLHVEQUFILG9uR0FBZCxDQWFlRyx1SEFBTyxDQUFDcEMsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XG4gIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbcG9zdC5hdXRob3JdO1xuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuICBjb25zdCBmbWVkaWFJZCA9IHBvc3QuZmVhdHVyZWRfbWVkaWE7XG4gIGNvbnNvbGUubG9nKFwiZm1lZGlhSWRcIiwgZm1lZGlhSWQpO1xuXG4gIC8vIFByZWZldGNoIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICBMaXN0LnByZWxvYWQoKTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF5anMocG9zdC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0Q29udGVudD5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2ZtZWRpYUlkfSAvPlxuICAgICAgICA8aDI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgICAgPFBvc3RJbmZvPlxuICAgICAgICAgIDxwPlBvc3RlZDoge2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgICAgIDxwPkF1dGhvcjoge2F1dGhvci5uYW1lfTwvcD5cbiAgICAgICAgPC9Qb3N0SW5mbz5cbiAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgPC9Qb3N0Q29udGVudD5cbiAgICA8L1Bvc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XG5gO1xuXG5jb25zdCBQb3N0Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDg0MHB4O1xuICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcGluaywgI2ZmZik7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgbGlnaHRzZWFncmVlbjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICMwMDE4Mjc7XG5cbiAgJiA+IHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/post.js\n");

/***/ })

})