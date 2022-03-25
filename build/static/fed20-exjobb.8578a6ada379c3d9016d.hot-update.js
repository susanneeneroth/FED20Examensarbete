webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/home.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/home.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/exjobb-susanne-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ \"./packages/exjobb-susanne-theme/src/components/page.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ \"./packages/exjobb-susanne-theme/src/components/loading.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ \"./packages/exjobb-susanne-theme/src/components/error.js\");\n/* harmony import */ var _featured_work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-work */ \"./packages/exjobb-susanne-theme/src/components/featured-work.js\");\n/* harmony import */ var _list_portfolio_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/portfolio-home */ \"./packages/exjobb-susanne-theme/src/components/list/portfolio-home.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Home=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(HomeContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_featured_work__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{when:data.isFetching}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_list_portfolio_home__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:data.isArchive}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPage}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPortfolio}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:data.isError})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Home));const HomeContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"evnjrta0\",label:\"HomeContainer\"})( false?undefined:{name:\"133r0qm\",styles:\"background-color:#001f33;height:auto;width:100vw;padding-top:30px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCBGZWF0dXJlZFdvcmsgZnJvbSBcIi4vZmVhdHVyZWQtd29ya1wiO1xuaW1wb3J0IFBvcnRmb2xpb0hvbWUgZnJvbSBcIi4vbGlzdC9wb3J0Zm9saW8taG9tZVwiO1xuXG5jb25zdCBIb21lID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9tZUNvbnRhaW5lcj5cbiAgICAgIDxGZWF0dXJlZFdvcmsgLz5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxMb2FkaW5nIHdoZW49e2RhdGEuaXNGZXRjaGluZ30gLz5cbiAgICAgICAgPFBvcnRmb2xpb0hvbWUgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgIDxQb3N0IHdoZW49e2RhdGEuaXNQb3N0fSAvPlxuICAgICAgICA8UGFnZSB3aGVuPXtkYXRhLmlzUGFnZX0gLz5cbiAgICAgICAgPFBhZ2Ugd2hlbj17ZGF0YS5pc1BvcnRmb2xpb30gLz5cbiAgICAgICAgPEVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSG9tZSk7XG5cbmNvbnN0IEhvbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjMzO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9ob21lLmpzP2Y2MzkiXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJpc0ZldGNoaW5nIiwiaXNBcmNoaXZlIiwiaXNQb3N0IiwiaXNQYWdlIiwiaXNQb3J0Zm9saW8iLCJpc0Vycm9yIiwiY29ubmVjdCIsIkhvbWVDb250YWluZXIiLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7cVJBVUEsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FDMUIsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FFQSxNQUNFLHlFQUFDLGFBQUQsWUFDRSx1RUFBQyxzREFBRCxJQURGLENBRUUsd0VBQUMsbUVBQUQsWUFDRSx1RUFBQyxnREFBRCxFQUFTLElBQUksQ0FBRUosSUFBSSxDQUFDSyxVQUFwQixFQURGLENBRUUsdUVBQUMsNERBQUQsRUFBZSxJQUFJLENBQUVMLElBQUksQ0FBQ00sU0FBMUIsRUFGRixDQUdFLHVFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFTixJQUFJLENBQUNPLE1BQWpCLEVBSEYsQ0FJRSx1RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRVAsSUFBSSxDQUFDUSxNQUFqQixFQUpGLENBS0UsdUVBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVSLElBQUksQ0FBQ1MsV0FBakIsRUFMRixDQU1FLHVFQUFDLDhDQUFELEVBQU8sSUFBSSxDQUFFVCxJQUFJLENBQUNVLE9BQWxCLEVBTkYsR0FGRixHQURGLENBYUQsQ0FoQkQsQ0FrQmVDLHVIQUFPLENBQUNiLElBQUQsQ0FBdEIsRUFFQSxLQUFNYyxjQUFhLENBQUdDLHVEQUFILDRoRUFBbkIiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IEZlYXR1cmVkV29yayBmcm9tIFwiLi9mZWF0dXJlZC13b3JrXCI7XG5pbXBvcnQgUG9ydGZvbGlvSG9tZSBmcm9tIFwiLi9saXN0L3BvcnRmb2xpby1ob21lXCI7XG5cbmNvbnN0IEhvbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxIb21lQ29udGFpbmVyPlxuICAgICAgPEZlYXR1cmVkV29yayAvPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICA8UG9ydGZvbGlvSG9tZSB3aGVuPXtkYXRhLmlzQXJjaGl2ZX0gLz5cbiAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3R9IC8+XG4gICAgICAgIDxQYWdlIHdoZW49e2RhdGEuaXNQYWdlfSAvPlxuICAgICAgICA8UGFnZSB3aGVuPXtkYXRhLmlzUG9ydGZvbGlvfSAvPlxuICAgICAgICA8RXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Ib21lQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChIb21lKTtcblxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmMzM7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/home.js\n");

/***/ })

})