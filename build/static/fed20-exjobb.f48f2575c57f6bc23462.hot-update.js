webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/home.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/home.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/exjobb-susanne-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ \"./packages/exjobb-susanne-theme/src/components/page.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ \"./packages/exjobb-susanne-theme/src/components/loading.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ \"./packages/exjobb-susanne-theme/src/components/error.js\");\n/* harmony import */ var _featured_work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-work */ \"./packages/exjobb-susanne-theme/src/components/featured-work.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Home=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(HomeContainer,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_featured_work__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Home));const HomeContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"evnjrta0\",label:\"HomeContainer\"})( false?undefined:{name:\"fndjfc\",styles:\"background-color:#001f33;height:1500px;width:100vw;padding-top:30px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCBGZWF0dXJlZFdvcmsgZnJvbSBcIi4vZmVhdHVyZWQtd29ya1wiO1xuXG5jb25zdCBIb21lID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9tZUNvbnRhaW5lcj5cbiAgICAgIDxGZWF0dXJlZFdvcmsgLz5cbiAgICAgIHsvKiA8U3dpdGNoPlxuICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgIDxQb3N0IHdoZW49e2RhdGEuaXNQb3N0fSAvPlxuICAgICAgICA8UGFnZSB3aGVuPXtkYXRhLmlzUGFnZX0gLz5cbiAgICAgICAgPFBhZ2Ugd2hlbj17ZGF0YS5pc1BvcnRmb2xpb30gLz5cbiAgICAgICAgPEVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz5cbiAgICAgIDwvU3dpdGNoPiAqL31cbiAgICA8L0hvbWVDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhvbWUpO1xuXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzMztcbiAgaGVpZ2h0OiAxNTAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9ob21lLmpzP2Y2MzkiXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25uZWN0IiwiSG9tZUNvbnRhaW5lciIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3FSQVNBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzFCLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsTUFDRSx3RUFBQyxhQUFELFdBQ0UsdUVBQUMsc0RBQUQsSUFERixFQURGLENBWUQsQ0FmRCxDQWlCZUMsdUhBQU8sQ0FBQ1AsSUFBRCxDQUF0QixFQUVBLEtBQU1RLGNBQWEsQ0FBR0MsdURBQUgsaTZEQUFuQiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQgRmVhdHVyZWRXb3JrIGZyb20gXCIuL2ZlYXR1cmVkLXdvcmtcIjtcblxuY29uc3QgSG9tZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEhvbWVDb250YWluZXI+XG4gICAgICA8RmVhdHVyZWRXb3JrIC8+XG4gICAgICB7LyogPFN3aXRjaD5cbiAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdH0gLz5cbiAgICAgICAgPFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2V9IC8+XG4gICAgICAgIDxQYWdlIHdoZW49e2RhdGEuaXNQb3J0Zm9saW99IC8+XG4gICAgICAgIDxFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICA8L1N3aXRjaD4gKi99XG4gICAgPC9Ib21lQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChIb21lKTtcblxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmMzM7XG4gIGhlaWdodDogMTUwMHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/home.js\n");

/***/ })

})