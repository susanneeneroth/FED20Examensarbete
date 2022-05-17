webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/menu-modal.js":
/*!********************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/menu-modal.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./packages/exjobb-susanne-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst _excluded=[\"state\"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The modal containing the mobile menu items.\n *\n * @param props - The props passed to the component from parent.\n * @returns A React component.\n */const MenuModal=_ref=>{let{state}=_ref,props=_objectWithoutProperties(_ref,_excluded);const items=state.source.get(`/menu/${state.theme.menuUrl}/`).items;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxs\"])(\"div\",_objectSpread(_objectSpread({},props),{},{children:[state.frontity.mode!==\"amp\"&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuOverlay,{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuContent,{as:\"nav\",children:items.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuLink,{link:item.url,children:item.title},item.ID);})})]}));};const MenuOverlay=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"et5pgyr2\",label:\"MenuOverlay\"})( false?undefined:{name:\"15d4jrg\",styles:\"background-color:#051622;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApLml0ZW1zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9PlxuICAgICAge3N0YXRlLmZyb250aXR5Lm1vZGUgIT09IFwiYW1wXCIgJiYgPE1lbnVPdmVybGF5IC8+fVxuXG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTE2MjI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuContent=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"et5pgyr1\",label:\"MenuContent\"})( false?undefined:{name:\"1yzkbt2\",styles:\"z-index:3;position:relative;width:100vw;height:auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApLml0ZW1zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9PlxuICAgICAge3N0YXRlLmZyb250aXR5Lm1vZGUgIT09IFwiYW1wXCIgJiYgPE1lbnVPdmVybGF5IC8+fVxuXG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTE2MjI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuLink=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], false?undefined:{target:\"et5pgyr0\",label:\"MenuLink\"})( false?undefined:{name:\"1ses8zz\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;background-color:pink;&:hover,&:focus{background-color:rgba(0, 0, 0, 0.05);}&[aria-current=\\\"page\\\"]{color:yellow;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzZCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApLml0ZW1zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9PlxuICAgICAge3N0YXRlLmZyb250aXR5Lm1vZGUgIT09IFwiYW1wXCIgJiYgPE1lbnVPdmVybGF5IC8+fVxuXG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTE2MjI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzPzAyYzEiXSwibmFtZXMiOlsiTWVudU1vZGFsIiwic3RhdGUiLCJwcm9wcyIsIml0ZW1zIiwic291cmNlIiwiZ2V0IiwidGhlbWUiLCJtZW51VXJsIiwiZnJvbnRpdHkiLCJtb2RlIiwibWFwIiwiaXRlbSIsInVybCIsInRpdGxlIiwiSUQiLCJNZW51T3ZlcmxheSIsInN0eWxlZCIsIk1lbnVDb250ZW50IiwiTWVudUxpbmsiLCJMaW5rIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7azdEQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEtBQU1BLFVBQVMsQ0FBRyxNQUF5QixJQUF4QixDQUFFQyxLQUFGLENBQXdCLE1BQVpDLEtBQVksMENBQ3pDLEtBQU1DLE1BQUssQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsU0FBUUosS0FBSyxDQUFDSyxLQUFOLENBQVlDLE9BQVEsR0FBOUMsRUFBa0RKLEtBQWhFLENBRUEsTUFDRSw4R0FBU0QsS0FBVCxnQkFDR0QsS0FBSyxDQUFDTyxRQUFOLENBQWVDLElBQWYsR0FBd0IsS0FBeEIsRUFBaUMsdUVBQUMsV0FBRCxJQURwQyxDQUdFLHVFQUFDLFdBQUQsRUFBYSxFQUFFLENBQUMsS0FBaEIsVUFDR04sS0FBSyxDQUFDTyxHQUFOLENBQVdDLElBQUQsRUFBVSxDQUNuQixNQUNFLHdFQUFDLFFBQUQsRUFBd0IsSUFBSSxDQUFFQSxJQUFJLENBQUNDLEdBQW5DLFVBQ0dELElBQUksQ0FBQ0UsS0FEUixFQUFlRixJQUFJLENBQUNHLEVBQXBCLENBREYsQ0FLRCxDQU5BLENBREgsRUFIRixJQURGLENBZUQsQ0FsQkQsQ0FvQkEsS0FBTUMsWUFBVyxDQUFHQyx1REFBSCxpckZBQWpCLENBV0EsS0FBTUMsWUFBVyxDQUFHRCx1REFBSCx3bkZBQWpCLENBT0EsS0FBTUUsU0FBUSxDQUFHLGFBQUFGLHVEQUFNLENBQUNHLDZDQUFELHVEQUFULHF1RkFBZCxDQW9CZUMsdUhBQU8sQ0FBQ3BCLFNBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogVGhlIG1vZGFsIGNvbnRhaW5pbmcgdGhlIG1vYmlsZSBtZW51IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBmcm9tIHBhcmVudC5cbiAqIEByZXR1cm5zIEEgUmVhY3QgY29tcG9uZW50LlxuICovXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUubWVudVVybH0vYCkuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7c3RhdGUuZnJvbnRpdHkubW9kZSAhPT0gXCJhbXBcIiAmJiA8TWVudU92ZXJsYXkgLz59XG5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTYyMjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/menu-modal.js\n");

/***/ })

})