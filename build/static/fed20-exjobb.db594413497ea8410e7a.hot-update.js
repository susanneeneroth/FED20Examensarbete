webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/footer/footer.js":
/*!***********************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/footer/footer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// import FooterForm from \"./footer-form\";\nconst Footer=({state,libraries,actions})=>{// const data = state.source.get(\"/contact-footer\");\nconst Html2React=libraries.html2react.Component;Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/contact-footer\");},[]);const contactForm=state.source.get(\"/contact-footer\");return contactForm.isReady&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(ContactForm,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Html2React,{html:contactForm.content})})})// <FooterContainer>\n//   <InnerContainer>\n//     <FooterForm />\n//   </InnerContainer>\n// </FooterContainer>\n;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Footer));// const FooterContainer = styled.footer`\n//   color: #1ba098;\n//   background-color: #001827;\n//   font-family: \"pacifico\";\n//   width: 100%;\n//   height: 400px;\n//   position: relative;\n//   left: 0;\n//   bottom: 0;\n// `;\n// const InnerContainer = styled.div`\n//   width: 70vw;\n//   height: auto;\n//   margin: auto;\n//   padding: 30px;\n// `;\nconst ContactForm=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1qrma1a1\",label:\"ContactForm\"})( false?undefined:{name:\"ibx440\",styles:\"width:70%;height:auto;margin:auto;padding:30px;text-align:center;h2{font-size:1.5em;margin-top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBpbXBvcnQgRm9vdGVyRm9ybSBmcm9tIFwiLi9mb290ZXItZm9ybVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29udGFjdEZvcm0gPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGFjdEZvcm0uaXNSZWFkeSAmJiAoXG4gICAgICA8PlxuICAgICAgICA8Q29udGFjdEZvcm0+XG4gICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17Y29udGFjdEZvcm0uY29udGVudH0gLz5cbiAgICAgICAgPC9Db250YWN0Rm9ybT5cbiAgICAgIDwvPlxuICAgIClcbiAgICAvLyA8Rm9vdGVyQ29udGFpbmVyPlxuICAgIC8vICAgPElubmVyQ29udGFpbmVyPlxuICAgIC8vICAgICA8Rm9vdGVyRm9ybSAvPlxuICAgIC8vICAgPC9Jbm5lckNvbnRhaW5lcj5cbiAgICAvLyA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRm9vdGVyKTtcblxuLy8gY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbi8vICAgY29sb3I6ICMxYmEwOTg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE4Mjc7XG4vLyAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDQwMHB4O1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vIGA7XG5cbi8vIGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDcwdnc7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICBwYWRkaW5nOiAzMHB4O1xuLy8gYDtcblxuY29uc3QgQ29udGFjdEZvcm0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZC5pbnB1dGBgO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const FormInput=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"input\", false?undefined:{target:\"e1qrma1a0\",label:\"FormInput\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRThCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBpbXBvcnQgRm9vdGVyRm9ybSBmcm9tIFwiLi9mb290ZXItZm9ybVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29udGFjdEZvcm0gPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGFjdEZvcm0uaXNSZWFkeSAmJiAoXG4gICAgICA8PlxuICAgICAgICA8Q29udGFjdEZvcm0+XG4gICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17Y29udGFjdEZvcm0uY29udGVudH0gLz5cbiAgICAgICAgPC9Db250YWN0Rm9ybT5cbiAgICAgIDwvPlxuICAgIClcbiAgICAvLyA8Rm9vdGVyQ29udGFpbmVyPlxuICAgIC8vICAgPElubmVyQ29udGFpbmVyPlxuICAgIC8vICAgICA8Rm9vdGVyRm9ybSAvPlxuICAgIC8vICAgPC9Jbm5lckNvbnRhaW5lcj5cbiAgICAvLyA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRm9vdGVyKTtcblxuLy8gY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbi8vICAgY29sb3I6ICMxYmEwOTg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE4Mjc7XG4vLyAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDQwMHB4O1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vIGA7XG5cbi8vIGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDcwdnc7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICBwYWRkaW5nOiAzMHB4O1xuLy8gYDtcblxuY29uc3QgQ29udGFjdEZvcm0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZC5pbnB1dGBgO1xuIl19 */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzPzYwMDciXSwibmFtZXMiOlsiRm9vdGVyIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJhY3Rpb25zIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJzb3VyY2UiLCJmZXRjaCIsImNvbnRhY3RGb3JtIiwiZ2V0IiwiaXNSZWFkeSIsImNvbnRlbnQiLCJjb25uZWN0IiwiQ29udGFjdEZvcm0iLCJzdHlsZWQiLCJGb3JtSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7OztxUkFHQTtBQUVBLEtBQU1BLE9BQU0sQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFvQkMsT0FBcEIsQ0FBRCxHQUFtQyxDQUNoRDtBQUVBLEtBQU1DLFdBQVUsQ0FBR0YsU0FBUyxDQUFDRyxVQUFWLENBQXFCQyxTQUF4QyxDQUVBQyx1REFBUyxDQUFDLElBQU0sQ0FDZEosT0FBTyxDQUFDSyxNQUFSLENBQWVDLEtBQWYsQ0FBcUIsaUJBQXJCLEVBQ0QsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBLEtBQU1DLFlBQVcsQ0FBR1QsS0FBSyxDQUFDTyxNQUFOLENBQWFHLEdBQWIsQ0FBaUIsaUJBQWpCLENBQXBCLENBRUEsTUFDRUQsWUFBVyxDQUFDRSxPQUFaLEVBQ0UscUpBQ0UsdUVBQUMsV0FBRCxXQUNFLHVFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVGLFdBQVcsQ0FBQ0csT0FBOUIsRUFERixFQURGLEVBTUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpGLENBY0QsQ0F6QkQsQ0EyQmVDLHVIQUFPLENBQUNkLE1BQUQsQ0FBdEIsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBQU1lLFlBQVcsQ0FBR0MsdURBQUgsK3FGQUFqQixDQWNBLEtBQU1DLFVBQVMsQ0FBR0QsdURBQUgscWdGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBpbXBvcnQgRm9vdGVyRm9ybSBmcm9tIFwiLi9mb290ZXItZm9ybVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSwgbGlicmFyaWVzLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY29udGFjdC1mb290ZXJcIik7XG5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29udGFjdEZvcm0gPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NvbnRhY3QtZm9vdGVyXCIpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGFjdEZvcm0uaXNSZWFkeSAmJiAoXG4gICAgICA8PlxuICAgICAgICA8Q29udGFjdEZvcm0+XG4gICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17Y29udGFjdEZvcm0uY29udGVudH0gLz5cbiAgICAgICAgPC9Db250YWN0Rm9ybT5cbiAgICAgIDwvPlxuICAgIClcbiAgICAvLyA8Rm9vdGVyQ29udGFpbmVyPlxuICAgIC8vICAgPElubmVyQ29udGFpbmVyPlxuICAgIC8vICAgICA8Rm9vdGVyRm9ybSAvPlxuICAgIC8vICAgPC9Jbm5lckNvbnRhaW5lcj5cbiAgICAvLyA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRm9vdGVyKTtcblxuLy8gY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbi8vICAgY29sb3I6ICMxYmEwOTg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE4Mjc7XG4vLyAgIGZvbnQtZmFtaWx5OiBcInBhY2lmaWNvXCI7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDQwMHB4O1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vIGA7XG5cbi8vIGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDcwdnc7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICBwYWRkaW5nOiAzMHB4O1xuLy8gYDtcblxuY29uc3QgQ29udGFjdEZvcm0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZC5pbnB1dGBgO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/footer/footer.js\n");

/***/ })

})