webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// import post from \"./post\";\nconst List=({state,actions,libraries})=>{const data=state.source.get(state.router.link);const Excerpt=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(Items,{children:[data.items.map(item=>{const post=state.source[item.type][item.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.link,children:[post.title.rendered,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledExcerpt,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Excerpt,{html:post.excerpt.rendered})})]},item.id)},post.id)});}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(PrevNextNav,{children:[data.previous&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.previous);},children:\"\\xAB Prev\"}),data.next&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.next);},children:\"Next \\xBB\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));const Items=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ej9usdt2\",label:\"Items\"})( false?undefined:{name:\"6271r9\",styles:\"&>a{display:block;margin:6px 0;font-size:1.2em;color:black;text-decoration:none;}&>a:visited{color:black;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbi8vIGltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IEV4Y2VycHQgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXM+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gbGluaz17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICAgIDxFeGNlcnB0IGh0bWw9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4Y2VycHQ+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8UHJldk5leHROYXY+XG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxNzE7IFByZXZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEubmV4dCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5uZXh0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dCAmIzE4NztcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvUHJldk5leHROYXY+XG4gICAgPC9JdGVtcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHBpbms7XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledExcerpt=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ej9usdt1\",label:\"StyledExcerpt\"})( false?undefined:{name:\"1666u7v\",styles:\"color:pink\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWdDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbi8vIGltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IEV4Y2VycHQgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXM+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gbGluaz17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICAgIDxFeGNlcnB0IGh0bWw9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4Y2VycHQ+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8UHJldk5leHROYXY+XG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxNzE7IFByZXZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEubmV4dCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5uZXh0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dCAmIzE4NztcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvUHJldk5leHROYXY+XG4gICAgPC9JdGVtcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHBpbms7XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PrevNextNav=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ej9usdt0\",label:\"PrevNextNav\"})( false?undefined:{name:\"19yg2n3\",styles:\"padding-top:1.5em;&>button{background:#eee;text-decoration:none;padding:0.5em 1em;color:#888;border:1px solid #aaa;font-size:0.8em;margin-right:2em;}&>button:hover{cursor:pointer;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRThCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbi8vIGltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IEV4Y2VycHQgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXM+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gbGluaz17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICAgIDxFeGNlcnB0IGh0bWw9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4Y2VycHQ+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8UHJldk5leHROYXY+XG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxNzE7IFByZXZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEubmV4dCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5uZXh0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dCAmIzE4NztcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvUHJldk5leHROYXY+XG4gICAgPC9JdGVtcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHBpbms7XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0LmpzPzZkYmMiXSwibmFtZXMiOlsiTGlzdCIsInN0YXRlIiwiYWN0aW9ucyIsImxpYnJhcmllcyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiRXhjZXJwdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwb3N0IiwidHlwZSIsImlkIiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJwcmV2aW91cyIsInNldCIsIm5leHQiLCJjb25uZWN0IiwiSXRlbXMiLCJzdHlsZWQiLCJTdHlsZWRFeGNlcnB0IiwiUHJldk5leHROYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cVJBR0E7QUFFQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBa0JDLFNBQWxCLENBQUQsR0FBbUMsQ0FDOUMsS0FBTUMsS0FBSSxDQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkwsS0FBSyxDQUFDTSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxRQUFPLENBQUdOLFNBQVMsQ0FBQ08sVUFBVixDQUFxQkMsU0FBckMsQ0FFQSxNQUNFLHlFQUFDLEtBQUQsWUFDR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdDLEdBQVgsQ0FBZ0JDLElBQUQsRUFBVSxDQUN4QixLQUFNQyxLQUFJLENBQUdkLEtBQUssQ0FBQ0ksTUFBTixDQUFhUyxJQUFJLENBQUNFLElBQWxCLEVBQXdCRixJQUFJLENBQUNHLEVBQTdCLENBQWIsQ0FDQSxNQUNFLHNKQUNFLHVGQUNFLHdFQUFDLGlFQUFELEVBQW9CLElBQUksQ0FBRUYsSUFBSSxDQUFDUCxJQUEvQixXQUNHTyxJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFEZCxDQUVFLHVFQUFDLGFBQUQsV0FDRSx1RUFBQyxPQUFELEVBQVMsSUFBSSxDQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYUQsUUFBNUIsRUFERixFQUZGLEdBQVdMLElBQUksQ0FBQ0csRUFBaEIsQ0FERixFQUFVRixJQUFJLENBQUNFLEVBQWYsQ0FERixFQURGLENBWUQsQ0FkQSxDQURILENBZ0JFLHdFQUFDLFdBQUQsWUFDR2IsSUFBSSxDQUFDaUIsUUFBTCxFQUNDLGlGQUNFLE9BQU8sQ0FBRSxJQUFNLENBQ2JuQixPQUFPLENBQUNLLE1BQVIsQ0FBZWUsR0FBZixDQUFtQmxCLElBQUksQ0FBQ2lCLFFBQXhCLEVBQ0QsQ0FISCx1QkFGSixDQVVHakIsSUFBSSxDQUFDbUIsSUFBTCxFQUNDLGlGQUNFLE9BQU8sQ0FBRSxJQUFNLENBQ2JyQixPQUFPLENBQUNLLE1BQVIsQ0FBZWUsR0FBZixDQUFtQmxCLElBQUksQ0FBQ21CLElBQXhCLEVBQ0QsQ0FISCx1QkFYSixHQWhCRixHQURGLENBdUNELENBM0NELENBNkNlQyx1SEFBTyxDQUFDeEIsSUFBRCxDQUF0QixFQUVBLEtBQU15QixNQUFLLENBQUdDLHVEQUFILDR2R0FBWCxDQWNBLEtBQU1DLGNBQWEsQ0FBR0QsdURBQUgscXFHQUFuQixDQUlBLEtBQU1FLFlBQVcsQ0FBR0YsdURBQUgsNjBHQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG4vLyBpbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBFeGNlcnB0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zPlxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4Y2VycHQ+XG4gICAgICAgICAgICAgICAgICA8RXhjZXJwdCBodG1sPXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeGNlcnB0PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtcyA9IHN0eWxlZC5kaXZgXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRXhjZXJwdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiBwaW5rO1xuYDtcblxuY29uc3QgUHJldk5leHROYXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogMS41ZW07XG5cbiAgJiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgfVxuICAmID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list.js\n");

/***/ })

})