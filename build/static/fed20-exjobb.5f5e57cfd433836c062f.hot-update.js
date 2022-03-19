webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/menu.js":
/*!**************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/menu.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-icon */ \"./packages/exjobb-susanne-theme/src/components/menu-icon.js\");\n/* harmony import */ var _menu_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-modal */ \"./packages/exjobb-susanne-theme/src/components/menu-modal.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The menu that should be displayed on mobile devices displaying links to\n * various categories and pages. This component contains mostly logic and\n * renders the {@link MenuModal} component.\n *\n * @param props - The state and actions injected by Frontity.\n * @returns A React component.\n */var _ref= false?undefined:{name:\"14mkmsw-MobileMenu\",styles:\"body{overflow-y:hidden;};label:MobileMenu;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCwgR2xvYmFsLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9tZW51LWljb25cIjtcbmltcG9ydCBNZW51TW9kYWwgZnJvbSBcIi4vbWVudS1tb2RhbFwiO1xuXG4vKipcbiAqIFRoZSBtZW51IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb2JpbGUgZGV2aWNlcyBkaXNwbGF5aW5nIGxpbmtzIHRvXG4gKiB2YXJpb3VzIGNhdGVnb3JpZXMgYW5kIHBhZ2VzLiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBtb3N0bHkgbG9naWMgYW5kXG4gKiByZW5kZXJzIHRoZSB7QGxpbmsgTWVudU1vZGFsfSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGFuZCBhY3Rpb25zIGluamVjdGVkIGJ5IEZyb250aXR5LlxuICogQHJldHVybnMgQSBSZWFjdCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbiAgY29uc3QgeyBtZW51LCBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbiAgaWYgKG1lbnU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCIgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9e3VuZGVmaW5lZH1cbiAgICAgICAgICBjdXN0b20tZWxlbWVudD1cImFtcC1iaW5kXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYmluZC0wLjEuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51VG9nZ2xlPlxuICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiaXNNZW51T3BlblwiXG4gICAgICAgICAgb249XCJ0YXA6QU1QLnNldFN0YXRlKHsgaXNNZW51T3BlbjogdHJ1ZSB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBkYXRhLWFtcC1iaW5kLWhpZGRlbj1cIiFpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiBmYWxzZSB9KVwiXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgIC8+XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICA8TWVudU1vZGFsIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIiBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PlxuICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbiAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBBZGQgc29tZSBzdHlsZSB0byB0aGUgYm9keSB3aGVuIG1lbnUgaXMgb3BlbixcbiAgICAgICAgICAgIHRvIHByZXZlbnQgYm9keSBzY3JvbGwgKi99XG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17eyBib2R5OiB7IG92ZXJmbG93WTogXCJoaWRkZW5cIiB9IH19IC8+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwiIzFCQTA5OFwiIHNpemU9XCIyMHB4XCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SGFtYnVyZ2VySWNvbiBjb2xvcj1cIiMxQkEwOThcIiBzaXplPVwiMjRweFwiIC8+XG4gICAgICAgICl9XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICB7LyogSWYgdGhlIG1lbnUgaXMgb3BlbiwgcmVuZGVyIHRoZSBtZW51IG1vZGFsICovfVxuICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcblxuLy8gZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbi8vICAgY29uc3QgeyBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbi8vICAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4vLyAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxHbG9iYWwgc3R5bGVzPXt7IGJvZHk6IHsgb3ZlcmZsb3dZOiBcImhpZGRlblwiIH0gfX0gLz5cbi8vICAgICAgICAgICAgIDxDbG9zZUljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICAgIDwvPlxuLy8gICAgICAgICApIDogKFxuLy8gICAgICAgICAgIDxIYW1idXJnZXJJY29uIGNvbG9yPVwiIzAwMFwiIHNpemU9XCIyNXB4XCIgLz5cbi8vICAgICAgICAgKX1cbi8vICAgICAgIDwvTWVudVRvZ2dsZT5cbi8vICAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIDxNZW51TW9kYWwgLz59XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IE1lbnVUb2dnbGUgPSBzdHlsZWQuYnV0dG9uYFxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHJpZ2h0OiAyNHB4O1xuLy8gICB0b3A6IDI0cHg7XG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgei1pbmRleDogNTtcbi8vICAgaGVpZ2h0OiA0MHB4O1xuLy8gICB3aWR0aDogNDBweDtcbi8vICAgZGlzcGxheTogbm9uZTtcblxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTW9iaWxlTWVudSk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};function MobileMenu({state,actions}){const{menu,isMobileMenuOpen}=state.theme;if((menu===null||menu===void 0?void 0:menu.length)===0)return null;return state.frontity.mode===\"amp\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"script\",{async:undefined,\"custom-element\":\"amp-bind\",src:\"https://cdn.ampproject.org/v0/amp-bind-0.1.js\"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(MenuToggle,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"HamburgerIcon\"],{size:\"24px\",role:\"button\",tabindex:\"0\",\"data-amp-bind-hidden\":\"isMenuOpen\",on:\"tap:AMP.setState({ isMenuOpen: true })\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"CloseIcon\"],{size:\"20px\",role:\"button\",tabindex:\"0\",\"data-amp-bind-hidden\":\"!isMenuOpen\",on:\"tap:AMP.setState({ isMenuOpen: false })\",hidden:true})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{\"data-amp-bind-hidden\":\"!isMenuOpen\",hidden:true})]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuToggle,{onClick:actions.theme.toggleMobileMenu,children:isMobileMenuOpen?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Global\"],{styles:_ref}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"CloseIcon\"],{color:\"#1BA098\",size:\"20px\"})]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_icon__WEBPACK_IMPORTED_MODULE_1__[\"HamburgerIcon\"],{color:\"#1BA098\",size:\"24px\"})}),isMobileMenuOpen&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_menu_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})]});}const MenuToggle=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"button\", false?undefined:{target:\"e13ap1gq0\",label:\"MenuToggle\"})( false?undefined:{name:\"ibcnn4\",styles:\"position:absolute;right:24px;top:10px;background:transparent;border:0;color:white;z-index:5;height:40px;width:40px;display:none;@media (max-width: 560px){display:flex;align-items:center;justify-content:center;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWdDIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCwgR2xvYmFsLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9tZW51LWljb25cIjtcbmltcG9ydCBNZW51TW9kYWwgZnJvbSBcIi4vbWVudS1tb2RhbFwiO1xuXG4vKipcbiAqIFRoZSBtZW51IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb2JpbGUgZGV2aWNlcyBkaXNwbGF5aW5nIGxpbmtzIHRvXG4gKiB2YXJpb3VzIGNhdGVnb3JpZXMgYW5kIHBhZ2VzLiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBtb3N0bHkgbG9naWMgYW5kXG4gKiByZW5kZXJzIHRoZSB7QGxpbmsgTWVudU1vZGFsfSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGFuZCBhY3Rpb25zIGluamVjdGVkIGJ5IEZyb250aXR5LlxuICogQHJldHVybnMgQSBSZWFjdCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbiAgY29uc3QgeyBtZW51LCBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbiAgaWYgKG1lbnU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCIgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9e3VuZGVmaW5lZH1cbiAgICAgICAgICBjdXN0b20tZWxlbWVudD1cImFtcC1iaW5kXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYmluZC0wLjEuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51VG9nZ2xlPlxuICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiaXNNZW51T3BlblwiXG4gICAgICAgICAgb249XCJ0YXA6QU1QLnNldFN0YXRlKHsgaXNNZW51T3BlbjogdHJ1ZSB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBkYXRhLWFtcC1iaW5kLWhpZGRlbj1cIiFpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiBmYWxzZSB9KVwiXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgIC8+XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICA8TWVudU1vZGFsIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIiBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PlxuICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbiAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBBZGQgc29tZSBzdHlsZSB0byB0aGUgYm9keSB3aGVuIG1lbnUgaXMgb3BlbixcbiAgICAgICAgICAgIHRvIHByZXZlbnQgYm9keSBzY3JvbGwgKi99XG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17eyBib2R5OiB7IG92ZXJmbG93WTogXCJoaWRkZW5cIiB9IH19IC8+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwiIzFCQTA5OFwiIHNpemU9XCIyMHB4XCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SGFtYnVyZ2VySWNvbiBjb2xvcj1cIiMxQkEwOThcIiBzaXplPVwiMjRweFwiIC8+XG4gICAgICAgICl9XG4gICAgICA8L01lbnVUb2dnbGU+XG4gICAgICB7LyogSWYgdGhlIG1lbnUgaXMgb3BlbiwgcmVuZGVyIHRoZSBtZW51IG1vZGFsICovfVxuICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcblxuLy8gZnVuY3Rpb24gTW9iaWxlTWVudSh7IHN0YXRlLCBhY3Rpb25zIH0pIHtcbi8vICAgY29uc3QgeyBpc01vYmlsZU1lbnVPcGVuIH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPE1lbnVUb2dnbGUgb25DbGljaz17YWN0aW9ucy50aGVtZS50b2dnbGVNb2JpbGVNZW51fT5cbi8vICAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXG4vLyAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxHbG9iYWwgc3R5bGVzPXt7IGJvZHk6IHsgb3ZlcmZsb3dZOiBcImhpZGRlblwiIH0gfX0gLz5cbi8vICAgICAgICAgICAgIDxDbG9zZUljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICAgIDwvPlxuLy8gICAgICAgICApIDogKFxuLy8gICAgICAgICAgIDxIYW1idXJnZXJJY29uIGNvbG9yPVwiIzAwMFwiIHNpemU9XCIyNXB4XCIgLz5cbi8vICAgICAgICAgKX1cbi8vICAgICAgIDwvTWVudVRvZ2dsZT5cbi8vICAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIDxNZW51TW9kYWwgLz59XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IE1lbnVUb2dnbGUgPSBzdHlsZWQuYnV0dG9uYFxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHJpZ2h0OiAyNHB4O1xuLy8gICB0b3A6IDI0cHg7XG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgei1pbmRleDogNTtcbi8vICAgaGVpZ2h0OiA0MHB4O1xuLy8gICB3aWR0aDogNDBweDtcbi8vICAgZGlzcGxheTogbm9uZTtcblxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTW9iaWxlTWVudSk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(MobileMenu));// function MobileMenu({ state, actions }) {\n//   const { isMobileMenuOpen } = state.theme;\n//   return (\n//     <>\n//       <MenuToggle onClick={actions.theme.toggleMobileMenu}>\n//         {isMobileMenuOpen ? (\n//           <>\n//             <Global styles={{ body: { overflowY: \"hidden\" } }} />\n//             <CloseIcon color=\"#000\" size=\"25px\" />\n//           </>\n//         ) : (\n//           <HamburgerIcon color=\"#000\" size=\"25px\" />\n//         )}\n//       </MenuToggle>\n//       {isMobileMenuOpen && <MenuModal />}\n//     </>\n//   );\n// }\n// const MenuToggle = styled.button`\n//   position: absolute;\n//   right: 24px;\n//   top: 24px;\n//   background: transparent;\n//   border: 0;\n//   color: white;\n//   z-index: 5;\n//   height: 40px;\n//   width: 40px;\n//   display: none;\n//   @media (max-width: 560px) {\n//     display: flex;\n//     align-items: center;\n//     justify-content: center;\n//   }\n// `;\n// export default connect(MobileMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LmpzPzIwMmEiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsInN0YXRlIiwiYWN0aW9ucyIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwidGhlbWUiLCJsZW5ndGgiLCJmcm9udGl0eSIsIm1vZGUiLCJ1bmRlZmluZWQiLCJ0b2dnbGVNb2JpbGVNZW51IiwiTWVudVRvZ2dsZSIsInN0eWxlZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztxUkFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsc25LQUVBLFFBQVNBLFdBQVQsQ0FBb0IsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQXBCLENBQXdDLENBQ3RDLEtBQU0sQ0FBRUMsSUFBRixDQUFRQyxnQkFBUixFQUE2QkgsS0FBSyxDQUFDSSxLQUF6QyxDQUNBLEdBQUksQ0FBQUYsSUFBSSxPQUFKLEVBQUFBLElBQUksU0FBSixRQUFBQSxJQUFJLENBQUVHLE1BQU4sSUFBaUIsQ0FBckIsQ0FBd0IsTUFBTyxLQUFQLENBRXhCLE1BQU9MLE1BQUssQ0FBQ00sUUFBTixDQUFlQyxJQUFmLEdBQXdCLEtBQXhCLENBQ0wsdUpBQ0UsdUVBQUMsNkNBQUQsV0FDRSxpRkFDRSxLQUFLLENBQUVDLFNBRFQsQ0FFRSxpQkFBZSxVQUZqQixDQUdFLEdBQUcsQ0FBQywrQ0FITixFQURGLEVBREYsQ0FTRSx3RUFBQyxVQUFELFlBQ0UsdUVBQUMsd0RBQUQsRUFDRSxJQUFJLENBQUMsTUFEUCxDQUVFLElBQUksQ0FBQyxRQUZQLENBR0UsUUFBUSxDQUFDLEdBSFgsQ0FJRSx1QkFBcUIsWUFKdkIsQ0FLRSxFQUFFLENBQUMsd0NBTEwsRUFERixDQVFFLHVFQUFDLG9EQUFELEVBQ0UsSUFBSSxDQUFDLE1BRFAsQ0FFRSxJQUFJLENBQUMsUUFGUCxDQUdFLFFBQVEsQ0FBQyxHQUhYLENBSUUsdUJBQXFCLGFBSnZCLENBS0UsRUFBRSxDQUFDLHlDQUxMLENBTUUsTUFBTSxLQU5SLEVBUkYsR0FURixDQTBCRSx1RUFBQyxtREFBRCxFQUFXLHVCQUFxQixhQUFoQyxDQUE4QyxNQUFNLEtBQXBELEVBMUJGLEdBREssQ0E4QkwsdUpBQ0UsdUVBQUMsVUFBRCxFQUFZLE9BQU8sQ0FBRVAsT0FBTyxDQUFDRyxLQUFSLENBQWNLLGdCQUFuQyxVQUNHTixnQkFBZ0IsQ0FDZix1SkFHRSx1RUFBQywrQ0FBRCxFQUFRLE1BQU0sS0FBZCxFQUhGLENBSUUsdUVBQUMsb0RBQUQsRUFBVyxLQUFLLENBQUMsU0FBakIsQ0FBMkIsSUFBSSxDQUFDLE1BQWhDLEVBSkYsR0FEZSxDQVFmLHVFQUFDLHdEQUFELEVBQWUsS0FBSyxDQUFDLFNBQXJCLENBQStCLElBQUksQ0FBQyxNQUFwQyxFQVRKLEVBREYsQ0FjR0EsZ0JBQWdCLEVBQUksdUVBQUMsbURBQUQsSUFkdkIsR0E5QkYsQ0ErQ0QsQ0FFRCxLQUFNTyxXQUFVLENBQUdDLHVEQUFILDYwS0FBaEIsQ0FtQmVDLHVIQUFPLENBQUNiLFVBQUQsQ0FBdEIsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCBHbG9iYWwsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IENsb3NlSWNvbiwgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCIuL21lbnUtaWNvblwiO1xuaW1wb3J0IE1lbnVNb2RhbCBmcm9tIFwiLi9tZW51LW1vZGFsXCI7XG5cbi8qKlxuICogVGhlIG1lbnUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vYmlsZSBkZXZpY2VzIGRpc3BsYXlpbmcgbGlua3MgdG9cbiAqIHZhcmlvdXMgY2F0ZWdvcmllcyBhbmQgcGFnZXMuIFRoaXMgY29tcG9uZW50IGNvbnRhaW5zIG1vc3RseSBsb2dpYyBhbmRcbiAqIHJlbmRlcnMgdGhlIHtAbGluayBNZW51TW9kYWx9IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgc3RhdGUgYW5kIGFjdGlvbnMgaW5qZWN0ZWQgYnkgRnJvbnRpdHkuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBNb2JpbGVNZW51KHsgc3RhdGUsIGFjdGlvbnMgfSkge1xuICBjb25zdCB7IG1lbnUsIGlzTW9iaWxlTWVudU9wZW4gfSA9IHN0YXRlLnRoZW1lO1xuICBpZiAobWVudT8ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gc3RhdGUuZnJvbnRpdHkubW9kZSA9PT0gXCJhbXBcIiA/IChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luYz17dW5kZWZpbmVkfVxuICAgICAgICAgIGN1c3RvbS1lbGVtZW50PVwiYW1wLWJpbmRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1iaW5kLTAuMS5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE1lbnVUb2dnbGU+XG4gICAgICAgIDxIYW1idXJnZXJJY29uXG4gICAgICAgICAgc2l6ZT1cIjI0cHhcIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgZGF0YS1hbXAtYmluZC1oaWRkZW49XCJpc01lbnVPcGVuXCJcbiAgICAgICAgICBvbj1cInRhcDpBTVAuc2V0U3RhdGUoeyBpc01lbnVPcGVuOiB0cnVlIH0pXCJcbiAgICAgICAgLz5cbiAgICAgICAgPENsb3NlSWNvblxuICAgICAgICAgIHNpemU9XCIyMHB4XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGRhdGEtYW1wLWJpbmQtaGlkZGVuPVwiIWlzTWVudU9wZW5cIlxuICAgICAgICAgIG9uPVwidGFwOkFNUC5zZXRTdGF0ZSh7IGlzTWVudU9wZW46IGZhbHNlIH0pXCJcbiAgICAgICAgICBoaWRkZW5cbiAgICAgICAgLz5cbiAgICAgIDwvTWVudVRvZ2dsZT5cbiAgICAgIDxNZW51TW9kYWwgZGF0YS1hbXAtYmluZC1oaWRkZW49XCIhaXNNZW51T3BlblwiIGhpZGRlbiAvPlxuICAgIDwvPlxuICApIDogKFxuICAgIDw+XG4gICAgICA8TWVudVRvZ2dsZSBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnRvZ2dsZU1vYmlsZU1lbnV9PlxuICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qIEFkZCBzb21lIHN0eWxlIHRvIHRoZSBib2R5IHdoZW4gbWVudSBpcyBvcGVuLFxuICAgICAgICAgICAgdG8gcHJldmVudCBib2R5IHNjcm9sbCAqL31cbiAgICAgICAgICAgIDxHbG9iYWwgc3R5bGVzPXt7IGJvZHk6IHsgb3ZlcmZsb3dZOiBcImhpZGRlblwiIH0gfX0gLz5cbiAgICAgICAgICAgIDxDbG9zZUljb24gY29sb3I9XCIjMUJBMDk4XCIgc2l6ZT1cIjIwcHhcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxIYW1idXJnZXJJY29uIGNvbG9yPVwiIzFCQTA5OFwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudVRvZ2dsZT5cbiAgICAgIHsvKiBJZiB0aGUgbWVudSBpcyBvcGVuLCByZW5kZXIgdGhlIG1lbnUgbW9kYWwgKi99XG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiA8TWVudU1vZGFsIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBNZW51VG9nZ2xlID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1vYmlsZU1lbnUpO1xuXG4vLyBmdW5jdGlvbiBNb2JpbGVNZW51KHsgc3RhdGUsIGFjdGlvbnMgfSkge1xuLy8gICBjb25zdCB7IGlzTW9iaWxlTWVudU9wZW4gfSA9IHN0YXRlLnRoZW1lO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudVRvZ2dsZSBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnRvZ2dsZU1vYmlsZU1lbnV9PlxuLy8gICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcbi8vICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3sgYm9keTogeyBvdmVyZmxvd1k6IFwiaGlkZGVuXCIgfSB9fSAvPlxuLy8gICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cIiMwMDBcIiBzaXplPVwiMjVweFwiIC8+XG4vLyAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgPEhhbWJ1cmdlckljb24gY29sb3I9XCIjMDAwXCIgc2l6ZT1cIjI1cHhcIiAvPlxuLy8gICAgICAgICApfVxuLy8gICAgICAgPC9NZW51VG9nZ2xlPlxuLy8gICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgPE1lbnVNb2RhbCAvPn1cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgTWVudVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDI0cHg7XG4vLyAgIHRvcDogMjRweDtcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB6LWluZGV4OiA1O1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBkaXNwbGF5OiBub25lO1xuXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgfVxuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb2JpbGVNZW51KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/menu.js\n");

/***/ })

})