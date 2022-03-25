webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list/featured-work-home.js":
/*!*********************************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list/featured-work-home.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ \"./packages/exjobb-susanne-theme/src/components/list/pagination.js\");\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const FeaturedWork=({state,actions})=>{Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/featured\");},[]);// Get the data of the current list.\n// const data = state.source.get(state.router.link);\nconst data=state.source.get(\"/category/featured\");if(data.isCategory){const category=state.source.category[data.id];const posts=data.items.map(({type,id})=>state.source[type][id]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(Item,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(TitleH1,{children:category.name}),posts.slice(0,4).map(p=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:p.link,children:p.title.rendered},p.id))]});}return null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(FeaturedWork));const TitleH1=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"h1\", false?undefined:{target:\"epevn321\",label:\"TitleH1\"})( false?undefined:{name:\"1iq86l5\",styles:\"color:#1ba098\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9mZWF0dXJlZC13b3JrLWhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N5QiIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvZmVhdHVyZWQtd29yay1ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5cbmNvbnN0IEZlYXR1cmVkV29yayA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9jYXRlZ29yeS9mZWF0dXJlZFwiKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICAvLyBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NhdGVnb3J5L2ZlYXR1cmVkXCIpO1xuXG4gIGlmIChkYXRhLmlzQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcblxuICAgIGNvbnN0IHBvc3RzID0gZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4gc3RhdGUuc291cmNlW3R5cGVdW2lkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxUaXRsZUgxPntjYXRlZ29yeS5uYW1lfTwvVGl0bGVIMT5cbiAgICAgICAge3Bvc3RzLnNsaWNlKDAsIDQpLm1hcCgocCkgPT4gKFxuICAgICAgICAgIDxMaW5rIGxpbms9e3AubGlua30ga2V5PXtwLmlkfT5cbiAgICAgICAgICAgIHtwLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0l0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZFdvcmspO1xuXG5jb25zdCBUaXRsZUgxID0gc3R5bGVkLmgxYFxuICBjb2xvcjogIzFiYTA5ODtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMxYmEwOTg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbi8vICAgY29sb3I6ICNmZmY7XG4vLyBgO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbi8vICAgd2lkdGg6IDExNDBweDtcbi8vICAgaGVpZ2h0OiBhdXRvO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG5cbi8vICAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbi8vIGA7XG5cbi8vIGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2Bcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG4vLyBgO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Item=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"epevn320\",label:\"Item\"})( false?undefined:{name:\"1bt0qzs\",styles:\"padding:0;margin:0 16px;color:#1ba098;font-size:0.9em;box-sizing:border-box;display:inline;font-family:\\\"Pacifico\\\";&>a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9mZWF0dXJlZC13b3JrLWhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N1QiIsImZpbGUiOiIvVXNlcnMvc3VzYW5uZS9Eb2N1bWVudHMvMV9GRUQyMC8wX0V4YW1lbnNhcmJldGUvR2l0X1JlcG9zaXRvcnkvRkVEMjBFeGFtZW5zYXJiZXRlL3BhY2thZ2VzL2V4am9iYi1zdXNhbm5lLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvZmVhdHVyZWQtd29yay1ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5cbmNvbnN0IEZlYXR1cmVkV29yayA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9jYXRlZ29yeS9mZWF0dXJlZFwiKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICAvLyBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NhdGVnb3J5L2ZlYXR1cmVkXCIpO1xuXG4gIGlmIChkYXRhLmlzQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcblxuICAgIGNvbnN0IHBvc3RzID0gZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4gc3RhdGUuc291cmNlW3R5cGVdW2lkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxUaXRsZUgxPntjYXRlZ29yeS5uYW1lfTwvVGl0bGVIMT5cbiAgICAgICAge3Bvc3RzLnNsaWNlKDAsIDQpLm1hcCgocCkgPT4gKFxuICAgICAgICAgIDxMaW5rIGxpbms9e3AubGlua30ga2V5PXtwLmlkfT5cbiAgICAgICAgICAgIHtwLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0l0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZFdvcmspO1xuXG5jb25zdCBUaXRsZUgxID0gc3R5bGVkLmgxYFxuICBjb2xvcjogIzFiYTA5ODtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMxYmEwOTg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbi8vICAgY29sb3I6ICNmZmY7XG4vLyBgO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbi8vICAgd2lkdGg6IDExNDBweDtcbi8vICAgaGVpZ2h0OiBhdXRvO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG5cbi8vICAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbi8vIGA7XG5cbi8vIGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2Bcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG4vLyBgO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});// const StyledLink = styled(Link)`\n//   color: #fff;\n// `;\n// const Container = styled.section`\n//   width: 1140px;\n//   height: auto;\n//   margin: 0;\n//   list-style: none;\n//   display: flex;\n//   justify-content: flex-start;\n//   flex-wrap: wrap;\n//   padding: 20px 0;\n//   /* background-color: pink; */\n// `;\n// const Header = styled.h3`\n//   font-weight: 300;\n//   text-transform: capitalize;\n//   color: rgba(12, 17, 43, 0.9);\n// `;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2ZlYXR1cmVkLXdvcmstaG9tZS5qcz8xOGFiIl0sIm5hbWVzIjpbIkZlYXR1cmVkV29yayIsInN0YXRlIiwiYWN0aW9ucyIsInVzZUVmZmVjdCIsInNvdXJjZSIsImZldGNoIiwiZGF0YSIsImdldCIsImlzQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImlkIiwicG9zdHMiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJuYW1lIiwic2xpY2UiLCJwIiwibGluayIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25uZWN0IiwiVGl0bGVIMSIsInN0eWxlZCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUtBLEtBQU1BLGFBQVksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFELEdBQXdCLENBQzNDQyx1REFBUyxDQUFDLElBQU0sQ0FDZEQsT0FBTyxDQUFDRSxNQUFSLENBQWVDLEtBQWYsQ0FBcUIsb0JBQXJCLEVBQ0QsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBO0FBQ0E7QUFDQSxLQUFNQyxLQUFJLENBQUdMLEtBQUssQ0FBQ0csTUFBTixDQUFhRyxHQUFiLENBQWlCLG9CQUFqQixDQUFiLENBRUEsR0FBSUQsSUFBSSxDQUFDRSxVQUFULENBQXFCLENBQ25CLEtBQU1DLFNBQVEsQ0FBR1IsS0FBSyxDQUFDRyxNQUFOLENBQWFLLFFBQWIsQ0FBc0JILElBQUksQ0FBQ0ksRUFBM0IsQ0FBakIsQ0FFQSxLQUFNQyxNQUFLLENBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxHQUFYLENBQWUsQ0FBQyxDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBRCxHQUFrQlQsS0FBSyxDQUFDRyxNQUFOLENBQWFVLElBQWIsRUFBbUJKLEVBQW5CLENBQWpDLENBQWQsQ0FFQSxNQUNFLHlFQUFDLElBQUQsWUFDRSx1RUFBQyxPQUFELFdBQVVELFFBQVEsQ0FBQ00sSUFBbkIsRUFERixDQUVHSixLQUFLLENBQUNLLEtBQU4sQ0FBWSxDQUFaLENBQWUsQ0FBZixFQUFrQkgsR0FBbEIsQ0FBdUJJLENBQUQsRUFDckIsdUVBQUMsaUVBQUQsRUFBTSxJQUFJLENBQUVBLENBQUMsQ0FBQ0MsSUFBZCxVQUNHRCxDQUFDLENBQUNFLEtBQUYsQ0FBUUMsUUFEWCxFQUF5QkgsQ0FBQyxDQUFDUCxFQUEzQixDQURELENBRkgsR0FERixDQVVELENBRUQsTUFBTyxLQUFQLENBQ0QsQ0EzQkQsQ0E2QmVXLHVIQUFPLENBQUNyQixZQUFELENBQXRCLEVBRUEsS0FBTXNCLFFBQU8sQ0FBR0MsdURBQUgseXJHQUFiLENBSUEsS0FBTUMsS0FBSSxDQUFHRCx1REFBSCxtN0dBQVYsQ0FvQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2ZlYXR1cmVkLXdvcmstaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuXG5jb25zdCBGZWF0dXJlZFdvcmsgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvY2F0ZWdvcnkvZmVhdHVyZWRcIik7XG4gIH0sIFtdKTtcblxuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgLy8gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChcIi9jYXRlZ29yeS9mZWF0dXJlZFwiKTtcblxuICBpZiAoZGF0YS5pc0NhdGVnb3J5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbZGF0YS5pZF07XG5cbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJdGVtPlxuICAgICAgICA8VGl0bGVIMT57Y2F0ZWdvcnkubmFtZX08L1RpdGxlSDE+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCA0KS5tYXAoKHApID0+IChcbiAgICAgICAgICA8TGluayBsaW5rPXtwLmxpbmt9IGtleT17cC5pZH0+XG4gICAgICAgICAgICB7cC50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9JdGVtPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRXb3JrKTtcblxuY29uc3QgVGl0bGVIMSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxYmEwOTg7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMWJhMDk4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCI7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gYDtcblxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4vLyAgIHdpZHRoOiAxMTQwcHg7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgcGFkZGluZzogMjBweCAwO1xuXG4vLyAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG4vLyBgO1xuXG4vLyBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4vLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuLy8gYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list/featured-work-home.js\n");

/***/ }),

/***/ "./packages/exjobb-susanne-theme/src/components/list/portfolio-item-home.js":
false

})