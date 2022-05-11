webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list/list.js":
/*!*******************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list/list.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _assets_image_placeholder_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image_placeholder_small.png */ \"./packages/exjobb-susanne-theme/src/assets/image_placeholder_small.png\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/exjobb-susanne-theme/src/components/featured-media.js\");\n/* harmony import */ var _data_portfolioImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/portfolioImages */ \"./packages/exjobb-susanne-theme/src/data/portfolioImages.js\");\n/* harmony import */ var _list_item_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item-portfolio */ \"./packages/exjobb-susanne-theme/src/components/list/list-item-portfolio.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const List=({state,actions,libraries,item})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(ItemsContainer,{children:[data.items.map(({type,id})=>{const post=state.source[type][id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_list_item_portfolio__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{item:post},post.id);}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(PrevNextNav,{children:[data.previous&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.previous);},children:\"\\xAB Prev\"}),data.next&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.next);},children:\"Next \\xBB\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));const ItemsContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp4\",label:\"ItemsContainer\"})( false?undefined:{name:\"m98wdp\",styles:\"width:1020px;display:flex;gap:30px;flex-wrap:wrap;padding-top:50px;padding-bottom:30px;@media (max-width: 560px){max-width:500px;gap:0;justify-content:center;}&>a{display:block;margin:6px 0;font-size:1.2em;color:black;text-decoration:none;}&>a:visited{color:black;}h2{color:#1ba098;font-family:\\\"pacifico\\\";margin-left:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDaUMiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9JbWFnZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wb3J0Zm9saW9JbWFnZXNcIjtcbmltcG9ydCBMaXN0SXRlbVBvcnRmb2xpbyBmcm9tIFwiLi9saXN0LWl0ZW0tcG9ydGZvbGlvXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzLCBpdGVtIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW1Qb3J0Zm9saW8ga2V5PXtwb3N0LmlkfSBpdGVtPXtwb3N0fSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Image=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"img\", false?undefined:{target:\"ew4ketp3\",label:\"Image\"})( false?undefined:{name:\"17egndr\",styles:\"border-radius:3px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFd0IiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9JbWFnZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wb3J0Zm9saW9JbWFnZXNcIjtcbmltcG9ydCBMaXN0SXRlbVBvcnRmb2xpbyBmcm9tIFwiLi9saXN0LWl0ZW0tcG9ydGZvbGlvXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzLCBpdGVtIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW1Qb3J0Zm9saW8ga2V5PXtwb3N0LmlkfSBpdGVtPXtwb3N0fSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Item=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp2\",label:\"Item\"})( false?undefined:{name:\"1q2cm9x\",styles:\"box-sizing:border-box;text-align:center;h2{margin-left:20px;text-align:left;}p{text-align:left;margin-left:20px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGdUIiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9JbWFnZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wb3J0Zm9saW9JbWFnZXNcIjtcbmltcG9ydCBMaXN0SXRlbVBvcnRmb2xpbyBmcm9tIFwiLi9saXN0LWl0ZW0tcG9ydGZvbGlvXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzLCBpdGVtIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW1Qb3J0Zm9saW8ga2V5PXtwb3N0LmlkfSBpdGVtPXtwb3N0fSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledExcerpt=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp1\",label:\"StyledExcerpt\"})( false?undefined:{name:\"d9qi7b\",styles:\"color:#cbe4f5;max-width:312px;p{margin-left:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHZ0MiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9JbWFnZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wb3J0Zm9saW9JbWFnZXNcIjtcbmltcG9ydCBMaXN0SXRlbVBvcnRmb2xpbyBmcm9tIFwiLi9saXN0LWl0ZW0tcG9ydGZvbGlvXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzLCBpdGVtIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW1Qb3J0Zm9saW8ga2V5PXtwb3N0LmlkfSBpdGVtPXtwb3N0fSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PrevNextNav=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ew4ketp0\",label:\"PrevNextNav\"})( false?undefined:{name:\"19yg2n3\",styles:\"padding-top:1.5em;&>button{background:#eee;text-decoration:none;padding:0.5em 1em;color:#888;border:1px solid #aaa;font-size:0.8em;margin-right:2em;}&>button:hover{cursor:pointer;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHOEIiLCJmaWxlIjoiL1VzZXJzL3N1c2FubmUvRG9jdW1lbnRzLzFfRkVEMjAvMF9FeGFtZW5zYXJiZXRlL0dpdF9SZXBvc2l0b3J5L0ZFRDIwRXhhbWVuc2FyYmV0ZS9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgSW1hZ2VQbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlX3BsYWNlaG9sZGVyX3NtYWxsLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9JbWFnZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wb3J0Zm9saW9JbWFnZXNcIjtcbmltcG9ydCBMaXN0SXRlbVBvcnRmb2xpbyBmcm9tIFwiLi9saXN0LWl0ZW0tcG9ydGZvbGlvXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzLCBpdGVtIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPEl0ZW1zQ29udGFpbmVyPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW1Qb3J0Zm9saW8ga2V5PXtwb3N0LmlkfSBpdGVtPXtwb3N0fSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFByZXZOZXh0TmF2PlxuICAgICAgICB7ZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTcxOyBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHQgJiMxODc7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1ByZXZOZXh0TmF2PlxuICAgIDwvSXRlbXNDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYgPiBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNjYmU0ZjU7XG4gIG1heC13aWR0aDogMzEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZOZXh0TmF2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgJiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanM/Y2NhNCJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJhY3Rpb25zIiwibGlicmFyaWVzIiwiaXRlbSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwiaWQiLCJwb3N0IiwicHJldmlvdXMiLCJzZXQiLCJuZXh0IiwiY29ubmVjdCIsIkl0ZW1zQ29udGFpbmVyIiwic3R5bGVkIiwiSW1hZ2UiLCJJdGVtIiwiU3R5bGVkRXhjZXJwdCIsIlByZXZOZXh0TmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztxUkFRQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBa0JDLFNBQWxCLENBQTZCQyxJQUE3QixDQUFELEdBQXlDLENBQ3BELEtBQU1DLEtBQUksQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJOLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsTUFDRSx5RUFBQyxjQUFELFlBQ0dKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxHQUFYLENBQWUsQ0FBQyxDQUFFQyxJQUFGLENBQVFDLEVBQVIsQ0FBRCxHQUFrQixDQUNoQyxLQUFNQyxLQUFJLENBQUdiLEtBQUssQ0FBQ0ssTUFBTixDQUFhTSxJQUFiLEVBQW1CQyxFQUFuQixDQUFiLENBQ0EsTUFBTyx3RUFBQyw0REFBRCxFQUFpQyxJQUFJLENBQUVDLElBQXZDLEVBQXdCQSxJQUFJLENBQUNELEVBQTdCLENBQVAsQ0FDRCxDQUhBLENBREgsQ0FLRSx3RUFBQyxXQUFELFlBQ0dSLElBQUksQ0FBQ1UsUUFBTCxFQUNDLGlGQUNFLE9BQU8sQ0FBRSxJQUFNLENBQ2JiLE9BQU8sQ0FBQ00sTUFBUixDQUFlUSxHQUFmLENBQW1CWCxJQUFJLENBQUNVLFFBQXhCLEVBQ0QsQ0FISCx1QkFGSixDQVVHVixJQUFJLENBQUNZLElBQUwsRUFDQyxpRkFDRSxPQUFPLENBQUUsSUFBTSxDQUNiZixPQUFPLENBQUNNLE1BQVIsQ0FBZVEsR0FBZixDQUFtQlgsSUFBSSxDQUFDWSxJQUF4QixFQUNELENBSEgsdUJBWEosR0FMRixHQURGLENBNEJELENBL0JELENBaUNlQyx1SEFBTyxDQUFDbEIsSUFBRCxDQUF0QixFQUVBLEtBQU1tQixlQUFjLENBQUdDLHVEQUFILGd2SUFBcEIsQ0FtQ0EsS0FBTUMsTUFBSyxDQUFHRCx1REFBSCxvN0hBQVgsQ0FJQSxLQUFNRSxLQUFJLENBQUdGLHVEQUFILG1oSUFBVixDQWVBLEtBQU1HLGNBQWEsQ0FBR0gsdURBQUgsNDlIQUFuQixDQVNBLEtBQU1JLFlBQVcsQ0FBR0osdURBQUgsNmxJQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VfcGxhY2Vob2xkZXJfc21hbGwucG5nXCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7IHBvcnRmb2xpb0ltYWdlcyB9IGZyb20gXCIuLi8uLi9kYXRhL3BvcnRmb2xpb0ltYWdlc1wiO1xuaW1wb3J0IExpc3RJdGVtUG9ydGZvbGlvIGZyb20gXCIuL2xpc3QtaXRlbS1wb3J0Zm9saW9cIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMsIGl0ZW0gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXNDb250YWluZXI+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgcmV0dXJuIDxMaXN0SXRlbVBvcnRmb2xpbyBrZXk9e3Bvc3QuaWR9IGl0ZW09e3Bvc3R9IC8+O1xuICAgICAgfSl9XG4gICAgICA8UHJldk5leHROYXY+XG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxNzE7IFByZXZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEubmV4dCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5uZXh0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dCAmIzE4NztcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvUHJldk5leHROYXY+XG4gICAgPC9JdGVtc0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZ2FwOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJiA+IGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjMWJhMDk4O1xuICAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEV4Y2VycHQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2NiZTRmNTtcbiAgbWF4LXdpZHRoOiAzMTJweDtcblxuICBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgUHJldk5leHROYXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogMS41ZW07XG5cbiAgJiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgfVxuICAmID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list/list.js\n");

/***/ })

})