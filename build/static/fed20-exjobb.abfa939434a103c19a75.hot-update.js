webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/featured-media.js":
/*!************************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/featured-media.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The Component that renders a featured media, typically an image. The featured\n * media can represent an individual Post, Page, or Custom Post Type.\n *\n * @param props - The state injected by {@link connect } and the ID of the\n * featured media.\n *\n * @returns A react component.\n */const FeaturedMedia=({state,id})=>{var _media$media_details,_media$media_details2;const media=state.source.attachment[id];if(!media)return null;const srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(`${current.join(\" \")}w${index!==array.length-1?\", \":\"\"}`),\"\")||null;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,{isAmp:state.frontity.mode===\"amp\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset,width:media===null||media===void 0?void 0:(_media$media_details=media.media_details)===null||_media$media_details===void 0?void 0:_media$media_details.width,height:media===null||media===void 0?void 0:(_media$media_details2=media.media_details)===null||_media$media_details2===void 0?void 0:_media$media_details2.height})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(FeaturedMedia));const Container=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1bvtson1\",label:\"Container\"})(\"margin-top:16px;height:300px;\",({isAmp})=>isAmp&&\"position: relative;\",\";\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkM0QiIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbi8qKlxuICogVGhlIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBmZWF0dXJlZCBtZWRpYSwgdHlwaWNhbGx5IGFuIGltYWdlLiBUaGUgZmVhdHVyZWRcbiAqIG1lZGlhIGNhbiByZXByZXNlbnQgYW4gaW5kaXZpZHVhbCBQb3N0LCBQYWdlLCBvciBDdXN0b20gUG9zdCBUeXBlLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBzdGF0ZSBpbmplY3RlZCBieSB7QGxpbmsgY29ubmVjdCB9IGFuZCB0aGUgSUQgb2YgdGhlXG4gKiBmZWF0dXJlZCBtZWRpYS5cbiAqXG4gKiBAcmV0dXJucyBBIHJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNBbXA9e3N0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCJ9PlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIHdpZHRoPXttZWRpYT8ubWVkaWFfZGV0YWlscz8ud2lkdGh9XG4gICAgICAgIGhlaWdodD17bWVkaWE/Lm1lZGlhX2RldGFpbHM/LmhlaWdodH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICAkeyh7IGlzQW1wIH0pID0+IGlzQW1wICYmIFwicG9zaXRpb246IHJlbGF0aXZlO1wifTtcbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkKEltYWdlKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG5gO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuLy8gY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4vLyAgIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4vLyAgIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4vLyAgIGNvbnN0IHNyY3NldCA9IE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbi8vICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuLy8gICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuLy8gICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbi8vICAgICAucmVkdWNlKFxuLy8gICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4vLyAgICAgICAgIGZpbmFsLmNvbmNhdChcbi8vICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4vLyAgICAgICAgICksXG4vLyAgICAgICBcIlwiXG4vLyAgICAgKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxJbWFnZSBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfSBzcmM9e21lZGlhLnNvdXJjZV91cmx9IHNyY1NldD17c3Jjc2V0fSAvPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZE1lZGlhKTtcblxuLy8gY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuLy8gICBtYXJnaW4tdG9wOiAxNnB4O1xuLy8gICBoZWlnaHQ6IDMwMHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4vLyBgO1xuIl19 */\"));const StyledImage=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e1bvtson0\",label:\"StyledImage\"})( false?undefined:{name:\"45ertb\",styles:\"display:block;height:100%;width:100%;object-fit:cover;border-radius:5px;margin-top:40px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQyIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbi8qKlxuICogVGhlIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBmZWF0dXJlZCBtZWRpYSwgdHlwaWNhbGx5IGFuIGltYWdlLiBUaGUgZmVhdHVyZWRcbiAqIG1lZGlhIGNhbiByZXByZXNlbnQgYW4gaW5kaXZpZHVhbCBQb3N0LCBQYWdlLCBvciBDdXN0b20gUG9zdCBUeXBlLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBzdGF0ZSBpbmplY3RlZCBieSB7QGxpbmsgY29ubmVjdCB9IGFuZCB0aGUgSUQgb2YgdGhlXG4gKiBmZWF0dXJlZCBtZWRpYS5cbiAqXG4gKiBAcmV0dXJucyBBIHJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNBbXA9e3N0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCJ9PlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIHdpZHRoPXttZWRpYT8ubWVkaWFfZGV0YWlscz8ud2lkdGh9XG4gICAgICAgIGhlaWdodD17bWVkaWE/Lm1lZGlhX2RldGFpbHM/LmhlaWdodH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICAkeyh7IGlzQW1wIH0pID0+IGlzQW1wICYmIFwicG9zaXRpb246IHJlbGF0aXZlO1wifTtcbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkKEltYWdlKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG5gO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuLy8gY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4vLyAgIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4vLyAgIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4vLyAgIGNvbnN0IHNyY3NldCA9IE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbi8vICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuLy8gICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuLy8gICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbi8vICAgICAucmVkdWNlKFxuLy8gICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4vLyAgICAgICAgIGZpbmFsLmNvbmNhdChcbi8vICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4vLyAgICAgICAgICksXG4vLyAgICAgICBcIlwiXG4vLyAgICAgKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxJbWFnZSBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfSBzcmM9e21lZGlhLnNvdXJjZV91cmx9IHNyY1NldD17c3Jjc2V0fSAvPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZE1lZGlhKTtcblxuLy8gY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuLy8gICBtYXJnaW4tdG9wOiAxNnB4O1xuLy8gICBoZWlnaHQ6IDMwMHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4vLyBgO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});// import React from \"react\";\n// import { connect, styled } from \"frontity\";\n// const FeaturedMedia = ({ state, id }) => {\n//   const media = state.source.attachment[id];\n//   if (!media) return null;\n//   const srcset = Object.values(media.media_details.sizes)\n//     // Get the url and width of each size.\n//     .map((item) => [item.source_url, item.width])\n//     // Recude them to a string with the format required by `srcset`.\n//     .reduce(\n//       (final, current, index, array) =>\n//         final.concat(\n//           `${current.join(\" \")}w${index !== array.length - 1 ? \", \" : \"\"}`\n//         ),\n//       \"\"\n//     );\n//   return (\n//     <Image alt={media.title.rendered} src={media.source_url} srcSet={srcset} />\n//   );\n// };\n// export default connect(FeaturedMedia);\n// const Image = styled.img`\n//   margin-top: 16px;\n//   height: 300px;\n//   width: 100%;\n//   object-fit: cover;\n// `;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcz80NDhlIl0sIm5hbWVzIjpbIkZlYXR1cmVkTWVkaWEiLCJzdGF0ZSIsImlkIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50Iiwic3Jjc2V0IiwiT2JqZWN0IiwidmFsdWVzIiwibWVkaWFfZGV0YWlscyIsInNpemVzIiwibWFwIiwiaXRlbSIsInNvdXJjZV91cmwiLCJ3aWR0aCIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsImluZGV4IiwiYXJyYXkiLCJjb25jYXQiLCJqb2luIiwibGVuZ3RoIiwiZnJvbnRpdHkiLCJtb2RlIiwidGl0bGUiLCJyZW5kZXJlZCIsImhlaWdodCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJzdHlsZWQiLCJpc0FtcCIsIlN0eWxlZEltYWdlIiwiSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cVJBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsS0FBTUEsY0FBYSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQUQsR0FBbUIsZ0RBQ3ZDLEtBQU1DLE1BQUssQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JILEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNDLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixLQUFNRyxPQUFNLENBQ1ZDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JDLEtBQWxDLENBQ0U7QUFERixDQUVHQyxHQUZILENBRVFDLElBQUQsRUFBVSxDQUFDQSxJQUFJLENBQUNDLFVBQU4sQ0FBa0JELElBQUksQ0FBQ0UsS0FBdkIsQ0FGakIsQ0FHRTtBQUhGLENBSUdDLE1BSkgsQ0FLSSxDQUFDQyxLQUFELENBQVFDLE9BQVIsQ0FBaUJDLEtBQWpCLENBQXdCQyxLQUF4QixHQUNFSCxLQUFLLENBQUNJLE1BQU4sQ0FDRyxHQUFFSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxHQUFiLENBQWtCLElBQUdILEtBQUssR0FBS0MsS0FBSyxDQUFDRyxNQUFOLENBQWUsQ0FBekIsQ0FBNkIsSUFBN0IsQ0FBb0MsRUFBRyxFQURqRSxDQU5OLENBU0ksRUFUSixHQVVPLElBWFQsQ0FhQSxNQUNFLHdFQUFDLFNBQUQsRUFBVyxLQUFLLENBQUVyQixLQUFLLENBQUNzQixRQUFOLENBQWVDLElBQWYsR0FBd0IsS0FBMUMsVUFDRSx1RUFBQyxXQUFELEVBQ0UsR0FBRyxDQUFFckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxRQURuQixDQUVFLEdBQUcsQ0FBRXZCLEtBQUssQ0FBQ1UsVUFGYixDQUdFLE1BQU0sQ0FBRVAsTUFIVixDQUlFLEtBQUssQ0FBRUgsS0FBRixTQUFFQSxLQUFGLHVDQUFFQSxLQUFLLENBQUVNLGFBQVQsK0NBQUUscUJBQXNCSyxLQUovQixDQUtFLE1BQU0sQ0FBRVgsS0FBRixTQUFFQSxLQUFGLHdDQUFFQSxLQUFLLENBQUVNLGFBQVQsZ0RBQUUsc0JBQXNCa0IsTUFMaEMsRUFERixFQURGLENBV0QsQ0E3QkQsQ0ErQmVDLHVIQUFPLENBQUM1QixhQUFELENBQXRCLEVBRUEsS0FBTTZCLFVBQVMsQ0FBR0MsdURBQUgsZ0dBR1gsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZUEsS0FBSyxFQUFJLHFCQUhiLGs4SEFBZixDQU1BLEtBQU1DLFlBQVcsQ0FBRyxhQUFBRix1REFBTSxDQUFDRyxrRUFBRCwyREFBVCwybElBQWpCLENBU0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcblxuLyoqXG4gKiBUaGUgQ29tcG9uZW50IHRoYXQgcmVuZGVycyBhIGZlYXR1cmVkIG1lZGlhLCB0eXBpY2FsbHkgYW4gaW1hZ2UuIFRoZSBmZWF0dXJlZFxuICogbWVkaWEgY2FuIHJlcHJlc2VudCBhbiBpbmRpdmlkdWFsIFBvc3QsIFBhZ2UsIG9yIEN1c3RvbSBQb3N0IFR5cGUuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gVGhlIHN0YXRlIGluamVjdGVkIGJ5IHtAbGluayBjb25uZWN0IH0gYW5kIHRoZSBJRCBvZiB0aGVcbiAqIGZlYXR1cmVkIG1lZGlhLlxuICpcbiAqIEByZXR1cm5zIEEgcmVhY3QgY29tcG9uZW50LlxuICovXG5jb25zdCBGZWF0dXJlZE1lZGlhID0gKHsgc3RhdGUsIGlkIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc0FtcD17c3RhdGUuZnJvbnRpdHkubW9kZSA9PT0gXCJhbXBcIn0+XG4gICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgd2lkdGg9e21lZGlhPy5tZWRpYV9kZXRhaWxzPy53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXttZWRpYT8ubWVkaWFfZGV0YWlscz8uaGVpZ2h0fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRNZWRpYSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gICR7KHsgaXNBbXAgfSkgPT4gaXNBbXAgJiYgXCJwb3NpdGlvbjogcmVsYXRpdmU7XCJ9O1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbmA7XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBjb25zdCBGZWF0dXJlZE1lZGlhID0gKHsgc3RhdGUsIGlkIH0pID0+IHtcbi8vICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbi8vICAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbi8vICAgY29uc3Qgc3Jjc2V0ID0gT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuLy8gICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4vLyAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4vLyAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuLy8gICAgIC5yZWR1Y2UoXG4vLyAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbi8vICAgICAgICAgZmluYWwuY29uY2F0KFxuLy8gICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbi8vICAgICAgICAgKSxcbi8vICAgICAgIFwiXCJcbi8vICAgICApO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEltYWdlIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9IHNyYz17bWVkaWEuc291cmNlX3VybH0gc3JjU2V0PXtzcmNzZXR9IC8+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG4vLyBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4vLyAgIG1hcmdpbi10b3A6IDE2cHg7XG4vLyAgIGhlaWdodDogMzAwcHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vIGA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/featured-media.js\n");

/***/ })

})