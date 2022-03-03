webpackHotUpdate("frontity",{

/***/ "./packages/mars-theme/src/components/title.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Title=({state})=>{// Get data about the current URL.\nconst data=state.source.get(state.router.link);// Set the default title.\nlet title=state.frontity.title;if(data.isTaxonomy){// Add titles to taxonomies, like \"Category: Nature - Blog Name\" or \"Tag: Japan - Blog Name\".\n// 1. Get the taxonomy entity from the state to get its taxonomy term and name.\nconst{taxonomy,name}=state.source[data.taxonomy][data.id];// 2. Uppercase first letter of the taxonomy term (from \"category\" to \"Category\").\nconst taxonomyCapitalized=taxonomy.charAt(0).toUpperCase()+taxonomy.slice(1);// 3. Render the proper title.\ntitle=`${taxonomyCapitalized}: ${Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(name)} - ${state.frontity.title}`;}else if(data.isAuthor){// Add titles to authors, like \"Author: Jon Snow - Blog Name\".\n// 1. Get the author entity from the state to get its name.\nconst{name}=state.source.author[data.id];// 2. Render the proper title.\ntitle=`Author: ${Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(name)} - ${state.frontity.title}`;}else if(data.isPostType){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\nconst postTitle=state.source[data.type][data.id].title.rendered;// 2. Remove any HTML tags found in the title.\nconst cleanTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(postTitle);// 3. Render the proper title.\ntitle=`${cleanTitle} - ${state.frontity.title}`;}else if(data.is404){// Add titles to 404's.\ntitle=`404 Not Found - ${state.frontity.title}`;}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_0__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"title\",{children:title})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Title));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzPzdmZmEiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidGl0bGUiLCJmcm9udGl0eSIsImlzVGF4b25vbXkiLCJ0YXhvbm9teSIsIm5hbWUiLCJpZCIsInRheG9ub215Q2FwaXRhbGl6ZWQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZGVjb2RlIiwiaXNBdXRob3IiLCJhdXRob3IiLCJpc1Bvc3RUeXBlIiwicG9zdFRpdGxlIiwidHlwZSIsInJlbmRlcmVkIiwiY2xlYW5UaXRsZSIsImlzNDA0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMzQjtBQUNBLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFJQyxNQUFLLENBQUdOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzQixDQUVBLEdBQUlMLElBQUksQ0FBQ08sVUFBVCxDQUFxQixDQUNuQjtBQUNBO0FBQ0EsS0FBTSxDQUFFQyxRQUFGLENBQVlDLElBQVosRUFBcUJWLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNRLFFBQWxCLEVBQTRCUixJQUFJLENBQUNVLEVBQWpDLENBQTNCLENBQ0E7QUFDQSxLQUFNQyxvQkFBbUIsQ0FDdkJILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsR0FBbUNMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsQ0FEckMsQ0FFQTtBQUNBVCxLQUFLLENBQUksR0FBRU0sbUJBQW9CLEtBQUlJLHVEQUFNLENBQUNOLElBQUQsQ0FBTyxNQUFLVixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUExRSxDQUNELENBVEQsSUFTTyxJQUFJTCxJQUFJLENBQUNnQixRQUFULENBQW1CLENBQ3hCO0FBQ0E7QUFDQSxLQUFNLENBQUVQLElBQUYsRUFBV1YsS0FBSyxDQUFDRSxNQUFOLENBQWFnQixNQUFiLENBQW9CakIsSUFBSSxDQUFDVSxFQUF6QixDQUFqQixDQUNBO0FBQ0FMLEtBQUssQ0FBSSxXQUFVVSx1REFBTSxDQUFDTixJQUFELENBQU8sTUFBS1YsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQU0sRUFBMUQsQ0FDRCxDQU5NLElBTUEsSUFBSUwsSUFBSSxDQUFDa0IsVUFBVCxDQUFxQixDQUMxQjtBQUNBO0FBQ0EsS0FBTUMsVUFBUyxDQUFHcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ29CLElBQWxCLEVBQXdCcEIsSUFBSSxDQUFDVSxFQUE3QixFQUFpQ0wsS0FBakMsQ0FBdUNnQixRQUF6RCxDQUNBO0FBQ0EsS0FBTUMsV0FBVSxDQUFHUCx1REFBTSxDQUFDSSxTQUFELENBQXpCLENBQ0E7QUFDQWQsS0FBSyxDQUFJLEdBQUVpQixVQUFXLE1BQUt2QixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUFoRCxDQUNELENBUk0sSUFRQSxJQUFJTCxJQUFJLENBQUN1QixLQUFULENBQWdCLENBQ3JCO0FBQ0FsQixLQUFLLENBQUksbUJBQWtCTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBTSxFQUFoRCxDQUNELENBRUQsTUFDRSx3RUFBQyw2Q0FBRCxXQUNFLHlGQUFRQSxLQUFSLEVBREYsRUFERixDQUtELENBdkNELENBeUNlbUIsdUhBQU8sQ0FBQzFCLEtBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZCwgY29ubmVjdCwgZGVjb2RlLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuY29uc3QgVGl0bGUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCBkYXRhIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAvLyBTZXQgdGhlIGRlZmF1bHQgdGl0bGUuXG4gIGxldCB0aXRsZSA9IHN0YXRlLmZyb250aXR5LnRpdGxlO1xuXG4gIGlmIChkYXRhLmlzVGF4b25vbXkpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIHRheG9ub21pZXMsIGxpa2UgXCJDYXRlZ29yeTogTmF0dXJlIC0gQmxvZyBOYW1lXCIgb3IgXCJUYWc6IEphcGFuIC0gQmxvZyBOYW1lXCIuXG4gICAgLy8gMS4gR2V0IHRoZSB0YXhvbm9teSBlbnRpdHkgZnJvbSB0aGUgc3RhdGUgdG8gZ2V0IGl0cyB0YXhvbm9teSB0ZXJtIGFuZCBuYW1lLlxuICAgIGNvbnN0IHsgdGF4b25vbXksIG5hbWUgfSA9IHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXTtcbiAgICAvLyAyLiBVcHBlcmNhc2UgZmlyc3QgbGV0dGVyIG9mIHRoZSB0YXhvbm9teSB0ZXJtIChmcm9tIFwiY2F0ZWdvcnlcIiB0byBcIkNhdGVnb3J5XCIpLlxuICAgIGNvbnN0IHRheG9ub215Q2FwaXRhbGl6ZWQgPVxuICAgICAgdGF4b25vbXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0YXhvbm9teS5zbGljZSgxKTtcbiAgICAvLyAzLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGAke3RheG9ub215Q2FwaXRhbGl6ZWR9OiAke2RlY29kZShuYW1lKX0gLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pc0F1dGhvcikge1xuICAgIC8vIEFkZCB0aXRsZXMgdG8gYXV0aG9ycywgbGlrZSBcIkF1dGhvcjogSm9uIFNub3cgLSBCbG9nIE5hbWVcIi5cbiAgICAvLyAxLiBHZXQgdGhlIGF1dGhvciBlbnRpdHkgZnJvbSB0aGUgc3RhdGUgdG8gZ2V0IGl0cyBuYW1lLlxuICAgIGNvbnN0IHsgbmFtZSB9ID0gc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXTtcbiAgICAvLyAyLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGBBdXRob3I6ICR7ZGVjb2RlKG5hbWUpfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzUG9zdFR5cGUpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIHBvc3RzIGFuZCBwYWdlcywgdXNpbmcgdGhlIHRpdGxlIGFuZCBlbmRpbmcgd2l0aCB0aGUgQmxvZyBOYW1lLlxuICAgIC8vIDEuIEdldCB0aGUgcG9zdCBlbnRpdHkgZnJvbSB0aGUgc3RhdGUgYW5kIGdldCBpdHMgdGl0bGUuXG4gICAgY29uc3QgcG9zdFRpdGxlID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF0udGl0bGUucmVuZGVyZWQ7XG4gICAgLy8gMi4gUmVtb3ZlIGFueSBIVE1MIHRhZ3MgZm91bmQgaW4gdGhlIHRpdGxlLlxuICAgIGNvbnN0IGNsZWFuVGl0bGUgPSBkZWNvZGUocG9zdFRpdGxlKTtcbiAgICAvLyAzLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGAke2NsZWFuVGl0bGV9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXM0MDQpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIDQwNCdzLlxuICAgIHRpdGxlID0gYDQwNCBOb3QgRm91bmQgLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGl0bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/title.js\n");

/***/ })

})