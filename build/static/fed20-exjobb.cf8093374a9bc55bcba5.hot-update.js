webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/footer/footer.js":
/*!***********************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/footer/footer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// import FooterForm from \"./footer-form\";\nconst Footer=({state,libraries,actions})=>{// const data = state.source.get(\"/contact-footer\");\nconst contactForm=state.source.get(\"/contact-footer\");const Html2React=libraries.html2react.Component;useEffect(()=>{actions.source.fetch(\"/contact-footer\");});return contactForm.isReady&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(ContactForm,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Html2React,{html:contactForm.content.rendered})})})// <FooterContainer>\n//   <InnerContainer>\n//     <FooterForm />\n//   </InnerContainer>\n// </FooterContainer>\n;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Footer));// const FooterContainer = styled.footer`\n//   color: #1ba098;\n//   background-color: #001827;\n//   font-family: \"pacifico\";\n//   width: 100%;\n//   height: 400px;\n//   position: relative;\n//   left: 0;\n//   bottom: 0;\n// `;\n// const InnerContainer = styled.div`\n//   width: 70vw;\n//   height: auto;\n//   margin: auto;\n//   padding: 30px;\n// `;\nconst ContactForm=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1qrma1a1\",label:\"ContactForm\"})( false?undefined:{name:\"ibx440\",styles:\"width:70%;height:auto;margin:auto;padding:30px;text-align:center;h2{font-size:1.5em;margin-top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRDhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBpbXBvcnQgRm9vdGVyRm9ybSBmcm9tIFwiLi9mb290ZXItZm9ybVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gc3RhdGUuc291cmNlLmdldChcIi9jb250YWN0LWZvb3RlclwiKTtcbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIGNvbnRhY3RGb3JtLmlzUmVhZHkgJiYgKFxuICAgICAgPD5cbiAgICAgICAgPENvbnRhY3RGb3JtPlxuICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e2NvbnRhY3RGb3JtLmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICAgIDwvQ29udGFjdEZvcm0+XG4gICAgICA8Lz5cbiAgICApXG4gICAgLy8gPEZvb3RlckNvbnRhaW5lcj5cbiAgICAvLyAgIDxJbm5lckNvbnRhaW5lcj5cbiAgICAvLyAgICAgPEZvb3RlckZvcm0gLz5cbiAgICAvLyAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgLy8gPC9Gb290ZXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3Rlcik7XG5cbi8vIGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4vLyAgIGNvbG9yOiAjMWJhMDk4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxODI3O1xuLy8gICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICBib3R0b206IDA7XG4vLyBgO1xuXG4vLyBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiA3MHZ3O1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyAgIG1hcmdpbjogYXV0bztcbi8vICAgcGFkZGluZzogMzBweDtcbi8vIGA7XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5gO1xuXG5jb25zdCBGb3JtSW5wdXQgPSBzdHlsZWQuaW5wdXRgYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const FormInput=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"input\", false?undefined:{target:\"e1qrma1a0\",label:\"FormInput\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRThCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBpbXBvcnQgRm9vdGVyRm9ybSBmcm9tIFwiLi9mb290ZXItZm9ybVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gc3RhdGUuc291cmNlLmdldChcIi9jb250YWN0LWZvb3RlclwiKTtcbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIGNvbnRhY3RGb3JtLmlzUmVhZHkgJiYgKFxuICAgICAgPD5cbiAgICAgICAgPENvbnRhY3RGb3JtPlxuICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e2NvbnRhY3RGb3JtLmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gICAgICAgIDwvQ29udGFjdEZvcm0+XG4gICAgICA8Lz5cbiAgICApXG4gICAgLy8gPEZvb3RlckNvbnRhaW5lcj5cbiAgICAvLyAgIDxJbm5lckNvbnRhaW5lcj5cbiAgICAvLyAgICAgPEZvb3RlckZvcm0gLz5cbiAgICAvLyAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgLy8gPC9Gb290ZXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3Rlcik7XG5cbi8vIGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4vLyAgIGNvbG9yOiAjMWJhMDk4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxODI3O1xuLy8gICBmb250LWZhbWlseTogXCJwYWNpZmljb1wiO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICBib3R0b206IDA7XG4vLyBgO1xuXG4vLyBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiA3MHZ3O1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyAgIG1hcmdpbjogYXV0bztcbi8vICAgcGFkZGluZzogMzBweDtcbi8vIGA7XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5gO1xuXG5jb25zdCBGb3JtSW5wdXQgPSBzdHlsZWQuaW5wdXRgYDtcbiJdfQ== */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzPzYwMDciXSwibmFtZXMiOlsiRm9vdGVyIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJhY3Rpb25zIiwiY29udGFjdEZvcm0iLCJzb3VyY2UiLCJnZXQiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsImZldGNoIiwiaXNSZWFkeSIsImNvbnRlbnQiLCJyZW5kZXJlZCIsImNvbm5lY3QiLCJDb250YWN0Rm9ybSIsInN0eWxlZCIsIkZvcm1JbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FSQUdBO0FBRUEsS0FBTUEsT0FBTSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxTQUFULENBQW9CQyxPQUFwQixDQUFELEdBQW1DLENBQ2hEO0FBQ0EsS0FBTUMsWUFBVyxDQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixpQkFBakIsQ0FBcEIsQ0FDQSxLQUFNQyxXQUFVLENBQUdMLFNBQVMsQ0FBQ00sVUFBVixDQUFxQkMsU0FBeEMsQ0FFQUMsU0FBUyxDQUFDLElBQU0sQ0FDZFAsT0FBTyxDQUFDRSxNQUFSLENBQWVNLEtBQWYsQ0FBcUIsaUJBQXJCLEVBQ0QsQ0FGUSxDQUFULENBSUEsTUFDRVAsWUFBVyxDQUFDUSxPQUFaLEVBQ0UscUpBQ0UsdUVBQUMsV0FBRCxXQUNFLHVFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVSLFdBQVcsQ0FBQ1MsT0FBWixDQUFvQkMsUUFBdEMsRUFERixFQURGLEVBTUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpGLENBY0QsQ0F2QkQsQ0F5QmVDLHVIQUFPLENBQUNmLE1BQUQsQ0FBdEIsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBQU1nQixZQUFXLENBQUdDLHVEQUFILCtwRkFBakIsQ0FjQSxLQUFNQyxVQUFTLENBQUdELHVEQUFILHEvRUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuLy8gaW1wb3J0IEZvb3RlckZvcm0gZnJvbSBcIi4vZm9vdGVyLWZvcm1cIjtcblxuY29uc3QgRm9vdGVyID0gKHsgc3RhdGUsIGxpYnJhcmllcywgYWN0aW9ucyB9KSA9PiB7XG4gIC8vIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICBjb25zdCBjb250YWN0Rm9ybSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9jb250YWN0LWZvb3RlclwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICBjb250YWN0Rm9ybS5pc1JlYWR5ICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxDb250YWN0Rm9ybT5cbiAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtjb250YWN0Rm9ybS5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICA8L0NvbnRhY3RGb3JtPlxuICAgICAgPC8+XG4gICAgKVxuICAgIC8vIDxGb290ZXJDb250YWluZXI+XG4gICAgLy8gICA8SW5uZXJDb250YWluZXI+XG4gICAgLy8gICAgIDxGb290ZXJGb3JtIC8+XG4gICAgLy8gICA8L0lubmVyQ29udGFpbmVyPlxuICAgIC8vIDwvRm9vdGVyQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGb290ZXIpO1xuXG4vLyBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuLy8gICBjb2xvcjogIzFiYTA5ODtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTgyNztcbi8vICAgZm9udC1mYW1pbHk6IFwicGFjaWZpY29cIjtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNDAwcHg7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgbGVmdDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gYDtcblxuLy8gY29uc3QgSW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICB3aWR0aDogNzB2dztcbi8vICAgaGVpZ2h0OiBhdXRvO1xuLy8gICBtYXJnaW46IGF1dG87XG4vLyAgIHBhZGRpbmc6IDMwcHg7XG4vLyBgO1xuXG5jb25zdCBDb250YWN0Rm9ybSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuYDtcblxuY29uc3QgRm9ybUlucHV0ID0gc3R5bGVkLmlucHV0YGA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/footer/footer.js\n");

/***/ })

})