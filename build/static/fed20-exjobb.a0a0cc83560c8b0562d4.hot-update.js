webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list/list.js":
/*!*******************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list/list.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _assets_image_placeholder_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image_placeholder_small.png */ \"./packages/exjobb-susanne-theme/src/assets/image_placeholder_small.png\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// import post from \"./post\";\nconst List=({state,actions,libraries})=>{const data=state.source.get(state.router.link);const Excerpt=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(ItemsContainer,{children:[data.items.map(item=>{const post=state.source[item.type][item.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(Item,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\",{src:_assets_image_placeholder_small_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.link,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledExcerpt,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Excerpt,{html:post.excerpt.rendered})})]},item.id)]},item.id);}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PrevNextNav,{children:[data.previous&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.previous);},children:\"\\xAB Prev\"}),data.next&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.next);},children:\"Next \\xBB\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));const ItemsContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp3\",label:\"ItemsContainer\"})( false?undefined:{name:\"1juiea\",styles:\"width:980px;display:flex;gap:10px;flex-wrap:wrap;padding-top:30px;&>a{display:block;margin:6px 0;font-size:1.2em;color:black;text-decoration:none;}&>a:visited{color:black;}h2{color:#cbe4f5;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEaUMiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuXG4vLyBpbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBFeGNlcnB0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICA8RXhjZXJwdCBodG1sPXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxQcmV2TmV4dE5hdj5cbiAgICAgICAge2RhdGEucHJldmlvdXMgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEucHJldmlvdXMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzE3MTsgUHJldlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0ICYjMTg3O1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9QcmV2TmV4dE5hdj5cbiAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmID4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICNjYmU0ZjU7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRXhjZXJwdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICBtYXgtd2lkdGg6IDMxNXB4O1xuXG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Item=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp2\",label:\"Item\"})( false?undefined:{name:\"123qxij\",styles:\"box-sizing:border-box;h2{margin-left:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFdUIiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuXG4vLyBpbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBFeGNlcnB0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICA8RXhjZXJwdCBodG1sPXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxQcmV2TmV4dE5hdj5cbiAgICAgICAge2RhdGEucHJldmlvdXMgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEucHJldmlvdXMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzE3MTsgUHJldlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0ICYjMTg3O1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9QcmV2TmV4dE5hdj5cbiAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmID4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICNjYmU0ZjU7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRXhjZXJwdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICBtYXgtd2lkdGg6IDMxNXB4O1xuXG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledExcerpt=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp1\",label:\"StyledExcerpt\"})( false?undefined:{name:\"tulffp\",styles:\"color:#cbe4f5;max-width:315px;p{margin-left:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGZ0MiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuXG4vLyBpbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBFeGNlcnB0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICA8RXhjZXJwdCBodG1sPXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxQcmV2TmV4dE5hdj5cbiAgICAgICAge2RhdGEucHJldmlvdXMgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEucHJldmlvdXMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzE3MTsgUHJldlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0ICYjMTg3O1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9QcmV2TmV4dE5hdj5cbiAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmID4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICNjYmU0ZjU7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRXhjZXJwdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICBtYXgtd2lkdGg6IDMxNXB4O1xuXG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PrevNextNav=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp0\",label:\"PrevNextNav\"})( false?undefined:{name:\"19yg2n3\",styles:\"padding-top:1.5em;&>button{background:#eee;text-decoration:none;padding:0.5em 1em;color:#888;border:1px solid #aaa;font-size:0.8em;margin-right:2em;}&>button:hover{cursor:pointer;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGOEIiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuXG4vLyBpbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBFeGNlcnB0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8U3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgICAgICA8RXhjZXJwdCBodG1sPXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhjZXJwdD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxQcmV2TmV4dE5hdj5cbiAgICAgICAge2RhdGEucHJldmlvdXMgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEucHJldmlvdXMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzE3MTsgUHJldlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0ICYjMTg3O1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9QcmV2TmV4dE5hdj5cbiAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmID4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICNjYmU0ZjU7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRXhjZXJwdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICBtYXgtd2lkdGg6IDMxNXB4O1xuXG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcmV2TmV4dE5hdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICYgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanM/Y2NhNCJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJhY3Rpb25zIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJFeGNlcnB0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInBvc3QiLCJ0eXBlIiwiaWQiLCJJbWFnZVBsYWNlaG9sZGVyIiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJwcmV2aW91cyIsInNldCIsIm5leHQiLCJjb25uZWN0IiwiSXRlbXNDb250YWluZXIiLCJzdHlsZWQiLCJJdGVtIiwiU3R5bGVkRXhjZXJwdCIsIlByZXZOZXh0TmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFLQTtBQUVBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFrQkMsU0FBbEIsQ0FBRCxHQUFtQyxDQUM5QyxLQUFNQyxLQUFJLENBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxHQUFiLENBQWlCTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLFFBQU8sQ0FBR04sU0FBUyxDQUFDTyxVQUFWLENBQXFCQyxTQUFyQyxDQUVBLE1BQ0UseUVBQUMsY0FBRCxZQUNHUCxJQUFJLENBQUNRLEtBQUwsQ0FBV0MsR0FBWCxDQUFnQkMsSUFBRCxFQUFVLENBQ3hCLEtBQU1DLEtBQUksQ0FBR2QsS0FBSyxDQUFDSSxNQUFOLENBQWFTLElBQUksQ0FBQ0UsSUFBbEIsRUFBd0JGLElBQUksQ0FBQ0csRUFBN0IsQ0FBYixDQUNBLE1BQ0UseUVBQUMsSUFBRCxZQUNFLDhFQUFLLEdBQUcsQ0FBRUMsMkVBQVYsRUFERixDQUVFLHdFQUFDLGlFQUFELEVBQW9CLElBQUksQ0FBRUgsSUFBSSxDQUFDUCxJQUEvQixXQUNFLHNGQUFLTyxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsUUFBaEIsRUFERixDQUVFLHVFQUFDLGFBQUQsV0FDRSx1RUFBQyxPQUFELEVBQVMsSUFBSSxDQUFFTCxJQUFJLENBQUNNLE9BQUwsQ0FBYUQsUUFBNUIsRUFERixFQUZGLEdBQVdOLElBQUksQ0FBQ0csRUFBaEIsQ0FGRixHQUFXSCxJQUFJLENBQUNHLEVBQWhCLENBREYsQ0FXRCxDQWJBLENBREgsQ0FlRSx3RUFBQyxXQUFELFlBQ0diLElBQUksQ0FBQ2tCLFFBQUwsRUFDQyxpRkFDRSxPQUFPLENBQUUsSUFBTSxDQUNicEIsT0FBTyxDQUFDSyxNQUFSLENBQWVnQixHQUFmLENBQW1CbkIsSUFBSSxDQUFDa0IsUUFBeEIsRUFDRCxDQUhILHVCQUZKLENBVUdsQixJQUFJLENBQUNvQixJQUFMLEVBQ0MsaUZBQ0UsT0FBTyxDQUFFLElBQU0sQ0FDYnRCLE9BQU8sQ0FBQ0ssTUFBUixDQUFlZ0IsR0FBZixDQUFtQm5CLElBQUksQ0FBQ29CLElBQXhCLEVBQ0QsQ0FISCx1QkFYSixHQWZGLEdBREYsQ0FzQ0QsQ0ExQ0QsQ0E0Q2VDLHVIQUFPLENBQUN6QixJQUFELENBQXRCLEVBRUEsS0FBTTBCLGVBQWMsQ0FBR0MsdURBQUgsaTRIQUFwQixDQXdCQSxLQUFNQyxLQUFJLENBQUdELHVEQUFILHF1SEFBVixDQVFBLEtBQU1FLGNBQWEsQ0FBR0YsdURBQUgsb3ZIQUFuQixDQVNBLEtBQU1HLFlBQVcsQ0FBR0gsdURBQUgscTNIQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VfcGxhY2Vob2xkZXJfc21hbGwucG5nXCI7XG5cbi8vIGltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IEV4Y2VycHQgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXNDb250YWluZXI+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJdGVtIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VQbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gbGluaz17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgPGgyPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XG4gICAgICAgICAgICAgIDxTdHlsZWRFeGNlcnB0PlxuICAgICAgICAgICAgICAgIDxFeGNlcnB0IGh0bWw9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRFeGNlcnB0PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5ODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogI2NiZTRmNTtcbiAgfVxuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzE1cHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list/list.js\n");

/***/ })

})