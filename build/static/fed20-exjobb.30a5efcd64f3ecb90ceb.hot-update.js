webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list/list-item-featured.js":
/*!*********************************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list/list-item-featured.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link */ \"./packages/exjobb-susanne-theme/src/components/link.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../featured-media */ \"./packages/exjobb-susanne-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Item Component\n *\n * It renders the preview of a blog post. Each blog post contains\n * - FeaturedMedia: the featured image/video of the post\n * - excerpt\n */const ListItemFeatured=({state,item})=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(FlexItem,{children:[state.theme.featured.showOnList&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{id:item.featured_media}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{link:item.link,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{dangerouslySetInnerHTML:{__html:item.title.rendered}})}),item.excerpt&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Excerpt,{dangerouslySetInnerHTML:{__html:item.excerpt.rendered}})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(ListItemFeatured));const Excerpt=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e123pxfr1\",label:\"Excerpt\"})( false?undefined:{name:\"ejbpd5\",styles:\"line-height:1.6em;color:#cbe4f5;text-align:center;margin-top:20px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0tZmVhdHVyZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEIwQiIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLWZlYXR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbi8qKlxuICogSXRlbSBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBwcmV2aWV3IG9mIGEgYmxvZyBwb3N0LiBFYWNoIGJsb2cgcG9zdCBjb250YWluc1xuICogLSBGZWF0dXJlZE1lZGlhOiB0aGUgZmVhdHVyZWQgaW1hZ2UvdmlkZW8gb2YgdGhlIHBvc3RcbiAqIC0gZXhjZXJwdFxuICovXG5jb25zdCBMaXN0SXRlbUZlYXR1cmVkID0gKHsgc3RhdGUsIGl0ZW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4SXRlbT5cbiAgICAgIHtzdGF0ZS50aGVtZS5mZWF0dXJlZC5zaG93T25MaXN0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2l0ZW0uZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICApfVxuICAgICAgPExpbmsgbGluaz17aXRlbS5saW5rfT5cbiAgICAgICAgPGgyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fSAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7aXRlbS5leGNlcnB0ICYmIChcbiAgICAgICAgPEV4Y2VycHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmV4Y2VycHQucmVuZGVyZWQgfX0gLz5cbiAgICAgICl9XG4gICAgPC9GbGV4SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdEl0ZW1GZWF0dXJlZCk7XG5cbmNvbnN0IEV4Y2VycHQgPSBzdHlsZWQuZGl2YFxuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGNvbG9yOiAjY2JlNGY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5gO1xuXG5jb25zdCBGbGV4SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4gICAgY29sb3I6ICMxYmEwOTg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIGgyOmhvdmVyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const FlexItem=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e123pxfr0\",label:\"FlexItem\"})( false?undefined:{name:\"rh2iek\",styles:\"color:#cbe4f5;text-align:center;margin-top:20px;h2{font-family:\\\"pacifico\\\";color:#1ba098;text-align:left;margin-left:20px;}h2:hover{color:#1ba098;}p{text-align:left;margin-left:20px;}img{border-radius:5px;width:500px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0tZmVhdHVyZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUMyQiIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLWZlYXR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbi8qKlxuICogSXRlbSBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBwcmV2aWV3IG9mIGEgYmxvZyBwb3N0LiBFYWNoIGJsb2cgcG9zdCBjb250YWluc1xuICogLSBGZWF0dXJlZE1lZGlhOiB0aGUgZmVhdHVyZWQgaW1hZ2UvdmlkZW8gb2YgdGhlIHBvc3RcbiAqIC0gZXhjZXJwdFxuICovXG5jb25zdCBMaXN0SXRlbUZlYXR1cmVkID0gKHsgc3RhdGUsIGl0ZW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4SXRlbT5cbiAgICAgIHtzdGF0ZS50aGVtZS5mZWF0dXJlZC5zaG93T25MaXN0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2l0ZW0uZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICApfVxuICAgICAgPExpbmsgbGluaz17aXRlbS5saW5rfT5cbiAgICAgICAgPGgyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fSAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7aXRlbS5leGNlcnB0ICYmIChcbiAgICAgICAgPEV4Y2VycHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmV4Y2VycHQucmVuZGVyZWQgfX0gLz5cbiAgICAgICl9XG4gICAgPC9GbGV4SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdEl0ZW1GZWF0dXJlZCk7XG5cbmNvbnN0IEV4Y2VycHQgPSBzdHlsZWQuZGl2YFxuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGNvbG9yOiAjY2JlNGY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5gO1xuXG5jb25zdCBGbGV4SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjY2JlNGY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4gICAgY29sb3I6ICMxYmEwOTg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIGgyOmhvdmVyIHtcbiAgICBjb2xvcjogIzFiYTA5ODtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS1mZWF0dXJlZC5qcz9hYTVlIl0sIm5hbWVzIjpbIkxpc3RJdGVtRmVhdHVyZWQiLCJzdGF0ZSIsIml0ZW0iLCJ0aGVtZSIsImZlYXR1cmVkIiwic2hvd09uTGlzdCIsImZlYXR1cmVkX21lZGlhIiwibGluayIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwiY29ubmVjdCIsIkV4Y2VycHQiLCJzdHlsZWQiLCJGbGV4SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FSQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsS0FBTUEsaUJBQWdCLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLElBQVQsQ0FBRCxHQUFxQixDQUM1QyxNQUNFLHlFQUFDLFFBQUQsWUFDR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLFVBQXJCLEVBQ0MsdUVBQUMsdURBQUQsRUFBZSxFQUFFLENBQUVILElBQUksQ0FBQ0ksY0FBeEIsRUFGSixDQUlFLHVFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFSixJQUFJLENBQUNLLElBQWpCLFVBQ0UsNkVBQUksdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFTixJQUFJLENBQUNPLEtBQUwsQ0FBV0MsUUFBckIsQ0FBN0IsRUFERixFQUpGLENBUUdSLElBQUksQ0FBQ1MsT0FBTCxFQUNDLHVFQUFDLE9BQUQsRUFBUyx1QkFBdUIsQ0FBRSxDQUFFSCxNQUFNLENBQUVOLElBQUksQ0FBQ1MsT0FBTCxDQUFhRCxRQUF2QixDQUFsQyxFQVRKLEdBREYsQ0FjRCxDQWZELENBaUJlRSx1SEFBTyxDQUFDWixnQkFBRCxDQUF0QixFQUVBLEtBQU1hLFFBQU8sQ0FBR0MsdURBQUgsay9FQUFiLENBT0EsS0FBTUMsU0FBUSxDQUFHRCx1REFBSCw2b0ZBQWQiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS1mZWF0dXJlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuLi9mZWF0dXJlZC1tZWRpYVwiO1xuXG4vKipcbiAqIEl0ZW0gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgcHJldmlldyBvZiBhIGJsb2cgcG9zdC4gRWFjaCBibG9nIHBvc3QgY29udGFpbnNcbiAqIC0gRmVhdHVyZWRNZWRpYTogdGhlIGZlYXR1cmVkIGltYWdlL3ZpZGVvIG9mIHRoZSBwb3N0XG4gKiAtIGV4Y2VycHRcbiAqL1xuY29uc3QgTGlzdEl0ZW1GZWF0dXJlZCA9ICh7IHN0YXRlLCBpdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleEl0ZW0+XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWQuc2hvd09uTGlzdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtpdGVtLmZlYXR1cmVkX21lZGlhfSAvPlxuICAgICAgKX1cbiAgICAgIDxMaW5rIGxpbms9e2l0ZW0ubGlua30+XG4gICAgICAgIDxoMiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0udGl0bGUucmVuZGVyZWQgfX0gLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAge2l0ZW0uZXhjZXJwdCAmJiAoXG4gICAgICAgIDxFeGNlcnB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5leGNlcnB0LnJlbmRlcmVkIH19IC8+XG4gICAgICApfVxuICAgIDwvRmxleEl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3RJdGVtRmVhdHVyZWQpO1xuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBjb2xvcjogI2NiZTRmNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuYDtcblxuY29uc3QgRmxleEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2NiZTRmNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuICAgIGNvbG9yOiAjMWJhMDk4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICBoMjpob3ZlciB7XG4gICAgY29sb3I6ICMxYmEwOTg7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list/list-item-featured.js\n");

/***/ })

})