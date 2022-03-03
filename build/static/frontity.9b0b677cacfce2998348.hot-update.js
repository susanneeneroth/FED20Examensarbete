webpackHotUpdate("frontity",{

/***/ "./packages/mars-theme/src/components/title.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Title=({state})=>{// Get data about the current URL.\nconst data=state.source.get(state.router.link);// Set the default title.\nlet title=state.frontity.title;if(data.isTaxonomy){// Add titles to taxonomies, like \"Category: Nature - Blog Name\" or \"Tag: Japan - Blog Name\".\n// 1. Get the taxonomy entity from the state to get its taxonomy term and name.\nconst{taxonomy,name}=state.source[data.taxonomy][data.id];// 2. Uppercase first letter of the taxonomy term (from \"category\" to \"Category\").\nconst taxonomyCapitalized=taxonomy.charAt(0).toUpperCase()+taxonomy.slice(1);// 3. Render the proper title.\ntitle=`${taxonomyCapitalized}: ${Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(name)} - ${state.frontity.title}`;}else if(data.isAuthor){// Add titles to authors, like \"Author: Jon Snow - Blog Name\".\n// 1. Get the author entity from the state to get its name.\nconst{name}=state.source.author[data.id];// 2. Render the proper title.\ntitle=`Author: ${Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(name)} - ${state.frontity.title}`;}else if(data.isPostType){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\nconst postTitle=state.source[data.type][data.id].title.rendered;// 2. Remove any HTML tags found in the title.\nconst cleanTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(postTitle);// 3. Render the proper title.\ntitle=`${cleanTitle} - ${state.frontity.title}`;}else if(data.is404){// Add titles to 404's.\ntitle=`404 Not Found - ${state.frontity.title}`;}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(SiteTitle,{children:title})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Title));const SiteTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e1rgiybd0\",label:\"SiteTitle\"})( false?undefined:{name:\"1a2xb7p\",styles:\"color:#869ba9\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy90aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWQsIGNvbm5lY3QsIGRlY29kZSwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgZGF0YSBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gU2V0IHRoZSBkZWZhdWx0IHRpdGxlLlxuICBsZXQgdGl0bGUgPSBzdGF0ZS5mcm9udGl0eS50aXRsZTtcblxuICBpZiAoZGF0YS5pc1RheG9ub215KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byB0YXhvbm9taWVzLCBsaWtlIFwiQ2F0ZWdvcnk6IE5hdHVyZSAtIEJsb2cgTmFtZVwiIG9yIFwiVGFnOiBKYXBhbiAtIEJsb2cgTmFtZVwiLlxuICAgIC8vIDEuIEdldCB0aGUgdGF4b25vbXkgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgdGF4b25vbXkgdGVybSBhbmQgbmFtZS5cbiAgICBjb25zdCB7IHRheG9ub215LCBuYW1lIH0gPSBzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF07XG4gICAgLy8gMi4gVXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiB0aGUgdGF4b25vbXkgdGVybSAoZnJvbSBcImNhdGVnb3J5XCIgdG8gXCJDYXRlZ29yeVwiKS5cbiAgICBjb25zdCB0YXhvbm9teUNhcGl0YWxpemVkID1cbiAgICAgIHRheG9ub215LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGF4b25vbXkuc2xpY2UoMSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHt0YXhvbm9teUNhcGl0YWxpemVkfTogJHtkZWNvZGUobmFtZSl9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXNBdXRob3IpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIGF1dGhvcnMsIGxpa2UgXCJBdXRob3I6IEpvbiBTbm93IC0gQmxvZyBOYW1lXCIuXG4gICAgLy8gMS4gR2V0IHRoZSBhdXRob3IgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgbmFtZS5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF07XG4gICAgLy8gMi4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgQXV0aG9yOiAke2RlY29kZShuYW1lKX0gLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pc1Bvc3RUeXBlKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byBwb3N0cyBhbmQgcGFnZXMsIHVzaW5nIHRoZSB0aXRsZSBhbmQgZW5kaW5nIHdpdGggdGhlIEJsb2cgTmFtZS5cbiAgICAvLyAxLiBHZXQgdGhlIHBvc3QgZW50aXR5IGZyb20gdGhlIHN0YXRlIGFuZCBnZXQgaXRzIHRpdGxlLlxuICAgIGNvbnN0IHBvc3RUaXRsZSA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdLnRpdGxlLnJlbmRlcmVkO1xuICAgIC8vIDIuIFJlbW92ZSBhbnkgSFRNTCB0YWdzIGZvdW5kIGluIHRoZSB0aXRsZS5cbiAgICBjb25zdCBjbGVhblRpdGxlID0gZGVjb2RlKHBvc3RUaXRsZSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHtjbGVhblRpdGxlfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzNDA0KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byA0MDQncy5cbiAgICB0aXRsZSA9IGA0MDQgTm90IEZvdW5kIC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxTaXRlVGl0bGU+e3RpdGxlfTwvU2l0ZVRpdGxlPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGl0bGUpO1xuXG5jb25zdCBTaXRlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogIzg2OWJhOTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzPzdmZmEiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidGl0bGUiLCJmcm9udGl0eSIsImlzVGF4b25vbXkiLCJ0YXhvbm9teSIsIm5hbWUiLCJpZCIsInRheG9ub215Q2FwaXRhbGl6ZWQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZGVjb2RlIiwiaXNBdXRob3IiLCJhdXRob3IiLCJpc1Bvc3RUeXBlIiwicG9zdFRpdGxlIiwidHlwZSIsInJlbmRlcmVkIiwiY2xlYW5UaXRsZSIsImlzNDA0IiwiY29ubmVjdCIsIlNpdGVUaXRsZSIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7OztxUkFFQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMzQjtBQUNBLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFJQyxNQUFLLENBQUdOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzQixDQUVBLEdBQUlMLElBQUksQ0FBQ08sVUFBVCxDQUFxQixDQUNuQjtBQUNBO0FBQ0EsS0FBTSxDQUFFQyxRQUFGLENBQVlDLElBQVosRUFBcUJWLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNRLFFBQWxCLEVBQTRCUixJQUFJLENBQUNVLEVBQWpDLENBQTNCLENBQ0E7QUFDQSxLQUFNQyxvQkFBbUIsQ0FDdkJILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsR0FBbUNMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsQ0FEckMsQ0FFQTtBQUNBVCxLQUFLLENBQUksR0FBRU0sbUJBQW9CLEtBQUlJLHVEQUFNLENBQUNOLElBQUQsQ0FBTyxNQUFLVixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUExRSxDQUNELENBVEQsSUFTTyxJQUFJTCxJQUFJLENBQUNnQixRQUFULENBQW1CLENBQ3hCO0FBQ0E7QUFDQSxLQUFNLENBQUVQLElBQUYsRUFBV1YsS0FBSyxDQUFDRSxNQUFOLENBQWFnQixNQUFiLENBQW9CakIsSUFBSSxDQUFDVSxFQUF6QixDQUFqQixDQUNBO0FBQ0FMLEtBQUssQ0FBSSxXQUFVVSx1REFBTSxDQUFDTixJQUFELENBQU8sTUFBS1YsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQU0sRUFBMUQsQ0FDRCxDQU5NLElBTUEsSUFBSUwsSUFBSSxDQUFDa0IsVUFBVCxDQUFxQixDQUMxQjtBQUNBO0FBQ0EsS0FBTUMsVUFBUyxDQUFHcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ29CLElBQWxCLEVBQXdCcEIsSUFBSSxDQUFDVSxFQUE3QixFQUFpQ0wsS0FBakMsQ0FBdUNnQixRQUF6RCxDQUNBO0FBQ0EsS0FBTUMsV0FBVSxDQUFHUCx1REFBTSxDQUFDSSxTQUFELENBQXpCLENBQ0E7QUFDQWQsS0FBSyxDQUFJLEdBQUVpQixVQUFXLE1BQUt2QixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUFoRCxDQUNELENBUk0sSUFRQSxJQUFJTCxJQUFJLENBQUN1QixLQUFULENBQWdCLENBQ3JCO0FBQ0FsQixLQUFLLENBQUksbUJBQWtCTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUFoRCxDQUNELENBRUQsTUFDRSx3RUFBQyw2Q0FBRCxXQUNFLHVFQUFDLFNBQUQsV0FBWUEsS0FBWixFQURGLEVBREYsQ0FLRCxDQXZDRCxDQXlDZW1CLHVIQUFPLENBQUMxQixLQUFELENBQXRCLEVBRUEsS0FBTTJCLFVBQVMsQ0FBR0MsdURBQUgsNnBHQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy90aXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWQsIGNvbm5lY3QsIGRlY29kZSwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgZGF0YSBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gU2V0IHRoZSBkZWZhdWx0IHRpdGxlLlxuICBsZXQgdGl0bGUgPSBzdGF0ZS5mcm9udGl0eS50aXRsZTtcblxuICBpZiAoZGF0YS5pc1RheG9ub215KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byB0YXhvbm9taWVzLCBsaWtlIFwiQ2F0ZWdvcnk6IE5hdHVyZSAtIEJsb2cgTmFtZVwiIG9yIFwiVGFnOiBKYXBhbiAtIEJsb2cgTmFtZVwiLlxuICAgIC8vIDEuIEdldCB0aGUgdGF4b25vbXkgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgdGF4b25vbXkgdGVybSBhbmQgbmFtZS5cbiAgICBjb25zdCB7IHRheG9ub215LCBuYW1lIH0gPSBzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF07XG4gICAgLy8gMi4gVXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiB0aGUgdGF4b25vbXkgdGVybSAoZnJvbSBcImNhdGVnb3J5XCIgdG8gXCJDYXRlZ29yeVwiKS5cbiAgICBjb25zdCB0YXhvbm9teUNhcGl0YWxpemVkID1cbiAgICAgIHRheG9ub215LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGF4b25vbXkuc2xpY2UoMSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHt0YXhvbm9teUNhcGl0YWxpemVkfTogJHtkZWNvZGUobmFtZSl9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXNBdXRob3IpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIGF1dGhvcnMsIGxpa2UgXCJBdXRob3I6IEpvbiBTbm93IC0gQmxvZyBOYW1lXCIuXG4gICAgLy8gMS4gR2V0IHRoZSBhdXRob3IgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgbmFtZS5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF07XG4gICAgLy8gMi4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgQXV0aG9yOiAke2RlY29kZShuYW1lKX0gLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pc1Bvc3RUeXBlKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byBwb3N0cyBhbmQgcGFnZXMsIHVzaW5nIHRoZSB0aXRsZSBhbmQgZW5kaW5nIHdpdGggdGhlIEJsb2cgTmFtZS5cbiAgICAvLyAxLiBHZXQgdGhlIHBvc3QgZW50aXR5IGZyb20gdGhlIHN0YXRlIGFuZCBnZXQgaXRzIHRpdGxlLlxuICAgIGNvbnN0IHBvc3RUaXRsZSA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdLnRpdGxlLnJlbmRlcmVkO1xuICAgIC8vIDIuIFJlbW92ZSBhbnkgSFRNTCB0YWdzIGZvdW5kIGluIHRoZSB0aXRsZS5cbiAgICBjb25zdCBjbGVhblRpdGxlID0gZGVjb2RlKHBvc3RUaXRsZSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHtjbGVhblRpdGxlfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzNDA0KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byA0MDQncy5cbiAgICB0aXRsZSA9IGA0MDQgTm90IEZvdW5kIC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxTaXRlVGl0bGU+e3RpdGxlfTwvU2l0ZVRpdGxlPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGl0bGUpO1xuXG5jb25zdCBTaXRlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogIzg2OWJhOTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/title.js\n");

/***/ })

})