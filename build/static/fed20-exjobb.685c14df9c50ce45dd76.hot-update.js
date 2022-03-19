webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/menu.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/menu.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-icon */ \"./packages/exjobb-susanne-theme/src/components/menu-icon.js\");\n/* harmony import */ var _menu_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-modal */ \"./packages/exjobb-susanne-theme/src/components/menu-modal.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The menu that should be displayed on mobile devices displaying links to\n * various categories and pages. This component contains mostly logic and\n * renders the {@link MenuModal} component.\n *\n * @param props - The state and actions injected by Frontity.\n * @returns A React component.\n */var _ref= false?undefined:{name:\"14mkmsw-MobileMenu\",styles:\"body{overflow-y:hidden;};label:MobileMenu;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCwgR2xvYmFsLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9tZW51LWljb25cIjtcbmltcG9ydCBNZW51TW9kYWwgZnJvbSBcIi4vbWVudS1tb2RhbFwiO1xuXG4vKipcbiAqIFRoZSBtZW51IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb2JpbGUgZGV2aWNlcyBkaXNwbGF5aW5nIGxpbmtzIHRvXG4gKiB2YXJpb3VzIGNhdGVnb3JpZXMgYW5kIHBhZ2VzLiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBtb3N0bHkgbG9naWMgYW5kXG4gKiByZW5kZXJzIHRoZSB7QGxpbmsgTWVudU1vZGFsfSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGFuZCBhY3Rpb25zIGluamVjdGVkIGJ5IEZyb250aXR5LlxuICogQHJldHVybnMgQSBSZWFjdCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbiAgY29uc3QgeyBtZW51LCBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbiAgaWYgKG1lbnU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCIgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9e3VuZGVmaW5lZH1cbiAgICAgICAgICBjdXN0b20tZWxlbWVudD1cImFtcC1iaW5kXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYmluZC0wLjEuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51VG9nZ2xlPlxuICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiaXNNZW51T3BlblwiXG4gICAgICAgICAgb249XCJ0YXA6QU1QLnNldFN0YXRlKHsgaXNNZW51T3BlbjogdHJ1ZSB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBkYXRhLWFtcC1iaW5kLWhpZGRlbj1cIiFpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiBmYWxzZSB9KVwiXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgIC8+XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICA8TWVudU1vZGFsIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIiBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PlxuICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbiAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBBZGQgc29tZSBzdHlsZSB0byB0aGUgYm9keSB3aGVuIG1lbnUgaXMgb3BlbixcbiAgICAgICAgICAgIHRvIHByZXZlbnQgYm9keSBzY3JvbGwgKi99XG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17eyBib2R5OiB7IG92ZXJmbG93WTogXCJoaWRkZW5cIiB9IH19IC8+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiMjBweFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudVRvZ2dsZT5cbiAgICAgIHsvKiBJZiB0aGUgbWVudSBpcyBvcGVuLCByZW5kZXIgdGhlIG1lbnUgbW9kYWwgKi99XG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiA8TWVudU1vZGFsIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBNZW51VG9nZ2xlID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1vYmlsZU1lbnUpO1xuXG4vLyBmdW5jdGlvbiBNb2JpbGVNZW51KHsgc3RhdGUsIGFjdGlvbnMgfSkge1xuLy8gICBjb25zdCB7IGlzTW9iaWxlTWVudU9wZW4gfSA9IHN0YXRlLnRoZW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudVRvZ2dsZSBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnRvZ2dsZU1vYmlsZU1lbnV9PlxuLy8gICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcbi8vICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3sgYm9keTogeyBvdmVyZmxvd1k6IFwiaGlkZGVuXCIgfSB9fSAvPlxuLy8gICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cIiMwMDBcIiBzaXplPVwiMjVweFwiIC8+XG4vLyAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICApfVxuLy8gICAgICAgPC9NZW51VG9nZ2xlPlxuLy8gICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDI0cHg7XG4vLyAgIHRvcDogMjRweDtcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB6LWluZGV4OiA1O1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBkaXNwbGF5OiBub25lO1xuXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgfVxuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};function MobileMenu({state,actions}){const{menu,isMobileMenuOpen}=state.theme;if((menu===null||menu===void 0?void 0:menu.length)===0)return null;return state.frontity.mode===\"amp\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"script\",{async:undefined,\"custom-element\":\"amp-bind\",src:\"https://cdn.ampproject.org/v0/amp-bind-0.1.js\"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(MenuToggle,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"HamburgerIcon\"],{color:\"white\",size:\"24px\",role:\"button\",tabindex:\"0\",\"data-amp-bind-hidden\":\"isMenuOpen\",on:\"tap:AMP.setState({ isMenuOpen: true })\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"CloseIcon\"],{color:\"white\",size:\"20px\",role:\"button\",tabindex:\"0\",\"data-amp-bind-hidden\":\"!isMenuOpen\",on:\"tap:AMP.setState({ isMenuOpen: false })\",hidden:true})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{\"data-amp-bind-hidden\":\"!isMenuOpen\",hidden:true})]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuToggle,{onClick:actions.theme.toggleMobileMenu,children:isMobileMenuOpen?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Global\"],{styles:_ref}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"CloseIcon\"],{color:\"white\",size:\"20px\"})]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"HamburgerIcon\"],{color:\"white\",size:\"24px\"})}),isMobileMenuOpen&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})]});}const MenuToggle=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"button\", false?undefined:{target:\"e13ap1gq0\",label:\"MenuToggle\"})( false?undefined:{name:\"12dixkq\",styles:\"position:absolute;right:24px;top:24px;background:transparent;border:0;color:white;z-index:5;height:40px;width:40px;display:none;@media (max-width: 560px){display:flex;align-items:center;justify-content:center;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWdDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCwgR2xvYmFsLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9tZW51LWljb25cIjtcbmltcG9ydCBNZW51TW9kYWwgZnJvbSBcIi4vbWVudS1tb2RhbFwiO1xuXG4vKipcbiAqIFRoZSBtZW51IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb2JpbGUgZGV2aWNlcyBkaXNwbGF5aW5nIGxpbmtzIHRvXG4gKiB2YXJpb3VzIGNhdGVnb3JpZXMgYW5kIHBhZ2VzLiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBtb3N0bHkgbG9naWMgYW5kXG4gKiByZW5kZXJzIHRoZSB7QGxpbmsgTWVudU1vZGFsfSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGFuZCBhY3Rpb25zIGluamVjdGVkIGJ5IEZyb250aXR5LlxuICogQHJldHVybnMgQSBSZWFjdCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbiAgY29uc3QgeyBtZW51LCBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbiAgaWYgKG1lbnU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCIgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9e3VuZGVmaW5lZH1cbiAgICAgICAgICBjdXN0b20tZWxlbWVudD1cImFtcC1iaW5kXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYmluZC0wLjEuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51VG9nZ2xlPlxuICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiaXNNZW51T3BlblwiXG4gICAgICAgICAgb249XCJ0YXA6QU1QLnNldFN0YXRlKHsgaXNNZW51T3BlbjogdHJ1ZSB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBkYXRhLWFtcC1iaW5kLWhpZGRlbj1cIiFpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiBmYWxzZSB9KVwiXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgIC8+XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICA8TWVudU1vZGFsIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIiBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PlxuICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbiAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBBZGQgc29tZSBzdHlsZSB0byB0aGUgYm9keSB3aGVuIG1lbnUgaXMgb3BlbixcbiAgICAgICAgICAgIHRvIHByZXZlbnQgYm9keSBzY3JvbGwgKi99XG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17eyBib2R5OiB7IG92ZXJmbG93WTogXCJoaWRkZW5cIiB9IH19IC8+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiMjBweFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudVRvZ2dsZT5cbiAgICAgIHsvKiBJZiB0aGUgbWVudSBpcyBvcGVuLCByZW5kZXIgdGhlIG1lbnUgbW9kYWwgKi99XG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiA8TWVudU1vZGFsIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBNZW51VG9nZ2xlID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1vYmlsZU1lbnUpO1xuXG4vLyBmdW5jdGlvbiBNb2JpbGVNZW51KHsgc3RhdGUsIGFjdGlvbnMgfSkge1xuLy8gICBjb25zdCB7IGlzTW9iaWxlTWVudU9wZW4gfSA9IHN0YXRlLnRoZW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudVRvZ2dsZSBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnRvZ2dsZU1vYmlsZU1lbnV9PlxuLy8gICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcbi8vICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3sgYm9keTogeyBvdmVyZmxvd1k6IFwiaGlkZGVuXCIgfSB9fSAvPlxuLy8gICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cIiMwMDBcIiBzaXplPVwiMjVweFwiIC8+XG4vLyAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICApfVxuLy8gICAgICAgPC9NZW51VG9nZ2xlPlxuLy8gICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDI0cHg7XG4vLyAgIHRvcDogMjRweDtcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB6LWluZGV4OiA1O1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBkaXNwbGF5OiBub25lO1xuXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgfVxuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(MobileMenu));// function MobileMenu({ state, actions }) {\n//   const { isMobileMenuOpen } = state.theme;\n//   return (\n//     <>\n//       <MenuToggle onClick={actions.theme.toggleMobileMenu}>\n//         {isMobileMenuOpen ? (\n//           <>\n//             <Global styles={{ body: { overflowY: \"hidden\" } }} />\n//             <CloseIcon color=\"#000\" size=\"25px\" />\n//           </>\n//         ) : (\n//           <HamburgerIcon color=\"#000\" size=\"25px\" />\n//         )}\n//       </MenuToggle>\n//       {isMobileMenuOpen && <MenuModal />}\n//     </>\n//   );\n// }\n// const MenuToggle = styled.button`\n//   position: absolute;\n//   right: 24px;\n//   top: 24px;\n//   background: transparent;\n//   border: 0;\n//   color: white;\n//   z-index: 5;\n//   height: 40px;\n//   width: 40px;\n//   display: none;\n//   @media (max-width: 560px) {\n//     display: flex;\n//     align-items: center;\n//     justify-content: center;\n//   }\n// `;\n// export default connect(MobileMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LmpzPzIwMmEiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsInN0YXRlIiwiYWN0aW9ucyIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwidGhlbWUiLCJsZW5ndGgiLCJmcm9udGl0eSIsIm1vZGUiLCJ1bmRlZmluZWQiLCJ0b2dnbGVNb2JpbGVNZW51IiwiTWVudVRvZ2dsZSIsInN0eWxlZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztxUkFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsMHJLQUVBLFFBQVNBLFdBQVQsQ0FBb0IsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQXBCLENBQXdDLENBQ3RDLEtBQU0sQ0FBRUMsSUFBRixDQUFRQyxnQkFBUixFQUE2QkgsS0FBSyxDQUFDSSxLQUF6QyxDQUNBLEdBQUksQ0FBQUYsSUFBSSxPQUFKLEVBQUFBLElBQUksU0FBSixRQUFBQSxJQUFJLENBQUVHLE1BQU4sSUFBaUIsQ0FBckIsQ0FBd0IsTUFBTyxLQUFQLENBRXhCLE1BQU9MLE1BQUssQ0FBQ00sUUFBTixDQUFlQyxJQUFmLEdBQXdCLEtBQXhCLENBQ0wsdUpBQ0UsdUVBQUMsNkNBQUQsV0FDRSxpRkFDRSxLQUFLLENBQUVDLFNBRFQsQ0FFRSxpQkFBZSxVQUZqQixDQUdFLEdBQUcsQ0FBQywrQ0FITixFQURGLEVBREYsQ0FTRSx3RUFBQyxVQUFELFlBQ0UsdUVBQUMsd0RBQUQsRUFDRSxLQUFLLENBQUMsT0FEUixDQUVFLElBQUksQ0FBQyxNQUZQLENBR0UsSUFBSSxDQUFDLFFBSFAsQ0FJRSxRQUFRLENBQUMsR0FKWCxDQUtFLHVCQUFxQixZQUx2QixDQU1FLEVBQUUsQ0FBQyx3Q0FOTCxFQURGLENBU0UsdUVBQUMsb0RBQUQsRUFDRSxLQUFLLENBQUMsT0FEUixDQUVFLElBQUksQ0FBQyxNQUZQLENBR0UsSUFBSSxDQUFDLFFBSFAsQ0FJRSxRQUFRLENBQUMsR0FKWCxDQUtFLHVCQUFxQixhQUx2QixDQU1FLEVBQUUsQ0FBQyx5Q0FOTCxDQU9FLE1BQU0sS0FQUixFQVRGLEdBVEYsQ0E0QkUsdUVBQUMsbURBQUQsRUFBVyx1QkFBcUIsYUFBaEMsQ0FBOEMsTUFBTSxLQUFwRCxFQTVCRixHQURLLENBZ0NMLHVKQUNFLHVFQUFDLFVBQUQsRUFBWSxPQUFPLENBQUVQLE9BQU8sQ0FBQ0csS0FBUixDQUFjSyxnQkFBbkMsVUFDR04sZ0JBQWdCLENBQ2YsdUpBR0UsdUVBQUMsK0NBQUQsRUFBUSxNQUFNLEtBQWQsRUFIRixDQUlFLHVFQUFDLG9EQUFELEVBQVcsS0FBSyxDQUFDLE9BQWpCLENBQXlCLElBQUksQ0FBQyxNQUE5QixFQUpGLEdBRGUsQ0FRZix1RUFBQyx3REFBRCxFQUFlLEtBQUssQ0FBQyxPQUFyQixDQUE2QixJQUFJLENBQUMsTUFBbEMsRUFUSixFQURGLENBY0dBLGdCQUFnQixFQUFJLHVFQUFDLG1EQUFELElBZHZCLEdBaENGLENBaURELENBRUQsS0FBTU8sV0FBVSxDQUFHQyx1REFBSCxrNUtBQWhCLENBbUJlQyx1SEFBTyxDQUFDYixVQUFELENBQXRCLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCwgR2xvYmFsLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9tZW51LWljb25cIjtcbmltcG9ydCBNZW51TW9kYWwgZnJvbSBcIi4vbWVudS1tb2RhbFwiO1xuXG4vKipcbiAqIFRoZSBtZW51IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb2JpbGUgZGV2aWNlcyBkaXNwbGF5aW5nIGxpbmtzIHRvXG4gKiB2YXJpb3VzIGNhdGVnb3JpZXMgYW5kIHBhZ2VzLiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBtb3N0bHkgbG9naWMgYW5kXG4gKiByZW5kZXJzIHRoZSB7QGxpbmsgTWVudU1vZGFsfSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGFuZCBhY3Rpb25zIGluamVjdGVkIGJ5IEZyb250aXR5LlxuICogQHJldHVybnMgQSBSZWFjdCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbiAgY29uc3QgeyBtZW51LCBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbiAgaWYgKG1lbnU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCIgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9e3VuZGVmaW5lZH1cbiAgICAgICAgICBjdXN0b20tZWxlbWVudD1cImFtcC1iaW5kXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYmluZC0wLjEuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51VG9nZ2xlPlxuICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiaXNNZW51T3BlblwiXG4gICAgICAgICAgb249XCJ0YXA6QU1QLnNldFN0YXRlKHsgaXNNZW51T3BlbjogdHJ1ZSB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBkYXRhLWFtcC1iaW5kLWhpZGRlbj1cIiFpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiBmYWxzZSB9KVwiXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgIC8+XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICA8TWVudU1vZGFsIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIiBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PlxuICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbiAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBBZGQgc29tZSBzdHlsZSB0byB0aGUgYm9keSB3aGVuIG1lbnUgaXMgb3BlbixcbiAgICAgICAgICAgIHRvIHByZXZlbnQgYm9keSBzY3JvbGwgKi99XG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17eyBib2R5OiB7IG92ZXJmbG93WTogXCJoaWRkZW5cIiB9IH19IC8+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiMjBweFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudVRvZ2dsZT5cbiAgICAgIHsvKiBJZiB0aGUgbWVudSBpcyBvcGVuLCByZW5kZXIgdGhlIG1lbnUgbW9kYWwgKi99XG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiA8TWVudU1vZGFsIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBNZW51VG9nZ2xlID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1vYmlsZU1lbnUpO1xuXG4vLyBmdW5jdGlvbiBNb2JpbGVNZW51KHsgc3RhdGUsIGFjdGlvbnMgfSkge1xuLy8gICBjb25zdCB7IGlzTW9iaWxlTWVudU9wZW4gfSA9IHN0YXRlLnRoZW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudVRvZ2dsZSBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnRvZ2dsZU1vYmlsZU1lbnV9PlxuLy8gICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcbi8vICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3sgYm9keTogeyBvdmVyZmxvd1k6IFwiaGlkZGVuXCIgfSB9fSAvPlxuLy8gICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cIiMwMDBcIiBzaXplPVwiMjVweFwiIC8+XG4vLyAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICApfVxuLy8gICAgICAgPC9NZW51VG9nZ2xlPlxuLy8gICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDI0cHg7XG4vLyAgIHRvcDogMjRweDtcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB6LWluZGV4OiA1O1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBkaXNwbGF5OiBub25lO1xuXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgfVxuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/menu.js\n");

/***/ })

})