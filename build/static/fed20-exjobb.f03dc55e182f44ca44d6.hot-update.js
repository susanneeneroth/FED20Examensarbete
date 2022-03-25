webpackHotUpdate("fed20-exjobb",{

/***/ "./packages/exjobb-susanne-theme/src/components/list/portfolio-home.js":
/*!*****************************************************************************!*\
  !*** ./packages/exjobb-susanne-theme/src/components/list/portfolio-home.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portfolio_item_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio-item-home */ \"./packages/exjobb-susanne-theme/src/components/list/portfolio-item-home.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./packages/exjobb-susanne-theme/src/components/list/pagination.js\");\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const ListFrontpage=({state,actions})=>{Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/portfolio\");},[]);// Get the data of the current list.\n// const data = state.source.get(state.router.link);\nconst data=state.source.get(\"/category/portfolio\");if(data.isCategory){const category=state.source.category[data.id];const posts=data.items.map(({type,id})=>state.source[type][id]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_portfolio_item_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})// <Item>\n//   <TitleH1>{category.name}</TitleH1>\n//   {posts.slice(0, 4).map((p) => (\n//     <Link link={p.link} key={p.id}>\n//       {p.title.rendered}\n//     </Link>\n//   ))}\n// </Item>\n;}return null;};//   return (\n//     <Container>\n//       {/* If the list is a taxonomy, it render a title. */}\n//       {data.isTaxonomy && (\n//         <Header>\n//           {data.taxonomy}:{\" \"}\n//           <b>{decode(state.source[data.taxonomy][data.id].name)}</b>\n//         </Header>\n//       )}\n//       {/* If the list is for a specific author, it render a title. */}\n//       {data.isAuthor && (\n//         <Header>\n//           Author: <b>{decode(state.source.author[data.id].name)}</b>\n//         </Header>\n//       )}\n//       {/* Iterate over the items of the list. Max 4 post items on frontpage */}\n//       {data.items.slice(0, 4).map(({ type, id }) => {\n//         const item = state.source[type][id];\n//         console.log(data.items[0]);\n//         // Render one Item component for each one.\n//         return <ListItemFrontpage key={item.id} item={item} />;\n//       })}\n//       {/* <Pagination /> */}\n//     </Container>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(ListFrontpage));const TitleH1=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"h1\", false?undefined:{target:\"er7ki7b1\",label:\"TitleH1\"})( false?undefined:{name:\"1iq86l5\",styles:\"color:#1ba098\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9wb3J0Zm9saW8taG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXlCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9wb3J0Zm9saW8taG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUG9ydGZvbGlvSXRlbSBmcm9tIFwiLi9wb3J0Zm9saW8taXRlbS1ob21lXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuXG5jb25zdCBMaXN0RnJvbnRwYWdlID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L3BvcnRmb2xpb1wiKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICAvLyBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NhdGVnb3J5L3BvcnRmb2xpb1wiKTtcblxuICBpZiAoZGF0YS5pc0NhdGVnb3J5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbZGF0YS5pZF07XG5cbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgICAvLyA8SXRlbT5cbiAgICAgIC8vICAgPFRpdGxlSDE+e2NhdGVnb3J5Lm5hbWV9PC9UaXRsZUgxPlxuICAgICAgLy8gICB7cG9zdHMuc2xpY2UoMCwgNCkubWFwKChwKSA9PiAoXG4gICAgICAvLyAgICAgPExpbmsgbGluaz17cC5saW5rfSBrZXk9e3AuaWR9PlxuICAgICAgLy8gICAgICAge3AudGl0bGUucmVuZGVyZWR9XG4gICAgICAvLyAgICAgPC9MaW5rPlxuICAgICAgLy8gICApKX1cbiAgICAgIC8vIDwvSXRlbT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXI+XG4vLyAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgaXQgcmVuZGVyIGEgdGl0bGUuICovfVxuLy8gICAgICAge2RhdGEuaXNUYXhvbm9teSAmJiAoXG4vLyAgICAgICAgIDxIZWFkZXI+XG4vLyAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbi8vICAgICAgICAgICA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lKX08L2I+XG4vLyAgICAgICAgIDwvSGVhZGVyPlxuLy8gICAgICAgKX1cblxuLy8gICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgaXQgcmVuZGVyIGEgdGl0bGUuICovfVxuLy8gICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuLy8gICAgICAgICA8SGVhZGVyPlxuLy8gICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbi8vICAgICAgICAgPC9IZWFkZXI+XG4vLyAgICAgICApfVxuXG4vLyAgICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gTWF4IDQgcG9zdCBpdGVtcyBvbiBmcm9udHBhZ2UgKi99XG4vLyAgICAgICB7ZGF0YS5pdGVtcy5zbGljZSgwLCA0KS5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YS5pdGVtc1swXSk7XG5cbi8vICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4vLyAgICAgICAgIHJldHVybiA8TGlzdEl0ZW1Gcm9udHBhZ2Uga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbi8vICAgICAgIH0pfVxuLy8gICAgICAgey8qIDxQYWdpbmF0aW9uIC8+ICovfVxuLy8gICAgIDwvQ29udGFpbmVyPlxuLy8gICApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0RnJvbnRwYWdlKTtcblxuY29uc3QgVGl0bGVIMSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxYmEwOTg7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMWJhMDk4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCI7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gYDtcblxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4vLyAgIHdpZHRoOiAxMTQwcHg7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgcGFkZGluZzogMjBweCAwO1xuXG4vLyAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG4vLyBgO1xuXG4vLyBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4vLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuLy8gYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Item=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"er7ki7b0\",label:\"Item\"})( false?undefined:{name:\"1bt0qzs\",styles:\"padding:0;margin:0 16px;color:#1ba098;font-size:0.9em;box-sizing:border-box;display:inline;font-family:\\\"Pacifico\\\";&>a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9wb3J0Zm9saW8taG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXVCIiwiZmlsZSI6Ii9Vc2Vycy9zdXNhbm5lL0RvY3VtZW50cy8xX0ZFRDIwLzBfRXhhbWVuc2FyYmV0ZS9HaXRfUmVwb3NpdG9yeS9GRUQyMEV4YW1lbnNhcmJldGUvcGFja2FnZXMvZXhqb2JiLXN1c2FubmUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9wb3J0Zm9saW8taG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUG9ydGZvbGlvSXRlbSBmcm9tIFwiLi9wb3J0Zm9saW8taXRlbS1ob21lXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuXG5jb25zdCBMaXN0RnJvbnRwYWdlID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L3BvcnRmb2xpb1wiKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICAvLyBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NhdGVnb3J5L3BvcnRmb2xpb1wiKTtcblxuICBpZiAoZGF0YS5pc0NhdGVnb3J5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbZGF0YS5pZF07XG5cbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgICAvLyA8SXRlbT5cbiAgICAgIC8vICAgPFRpdGxlSDE+e2NhdGVnb3J5Lm5hbWV9PC9UaXRsZUgxPlxuICAgICAgLy8gICB7cG9zdHMuc2xpY2UoMCwgNCkubWFwKChwKSA9PiAoXG4gICAgICAvLyAgICAgPExpbmsgbGluaz17cC5saW5rfSBrZXk9e3AuaWR9PlxuICAgICAgLy8gICAgICAge3AudGl0bGUucmVuZGVyZWR9XG4gICAgICAvLyAgICAgPC9MaW5rPlxuICAgICAgLy8gICApKX1cbiAgICAgIC8vIDwvSXRlbT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXI+XG4vLyAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgaXQgcmVuZGVyIGEgdGl0bGUuICovfVxuLy8gICAgICAge2RhdGEuaXNUYXhvbm9teSAmJiAoXG4vLyAgICAgICAgIDxIZWFkZXI+XG4vLyAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbi8vICAgICAgICAgICA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lKX08L2I+XG4vLyAgICAgICAgIDwvSGVhZGVyPlxuLy8gICAgICAgKX1cblxuLy8gICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgaXQgcmVuZGVyIGEgdGl0bGUuICovfVxuLy8gICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuLy8gICAgICAgICA8SGVhZGVyPlxuLy8gICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbi8vICAgICAgICAgPC9IZWFkZXI+XG4vLyAgICAgICApfVxuXG4vLyAgICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gTWF4IDQgcG9zdCBpdGVtcyBvbiBmcm9udHBhZ2UgKi99XG4vLyAgICAgICB7ZGF0YS5pdGVtcy5zbGljZSgwLCA0KS5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YS5pdGVtc1swXSk7XG5cbi8vICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4vLyAgICAgICAgIHJldHVybiA8TGlzdEl0ZW1Gcm9udHBhZ2Uga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbi8vICAgICAgIH0pfVxuLy8gICAgICAgey8qIDxQYWdpbmF0aW9uIC8+ICovfVxuLy8gICAgIDwvQ29udGFpbmVyPlxuLy8gICApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0RnJvbnRwYWdlKTtcblxuY29uc3QgVGl0bGVIMSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxYmEwOTg7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMWJhMDk4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCI7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gYDtcblxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4vLyAgIHdpZHRoOiAxMTQwcHg7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgcGFkZGluZzogMjBweCAwO1xuXG4vLyAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG4vLyBgO1xuXG4vLyBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4vLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuLy8gYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});// const StyledLink = styled(Link)`\n//   color: #fff;\n// `;\n// const Container = styled.section`\n//   width: 1140px;\n//   height: auto;\n//   margin: 0;\n//   list-style: none;\n//   display: flex;\n//   justify-content: flex-start;\n//   flex-wrap: wrap;\n//   padding: 20px 0;\n//   /* background-color: pink; */\n// `;\n// const Header = styled.h3`\n//   font-weight: 300;\n//   text-transform: capitalize;\n//   color: rgba(12, 17, 43, 0.9);\n// `;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L3BvcnRmb2xpby1ob21lLmpzPzg2ZTQiXSwibmFtZXMiOlsiTGlzdEZyb250cGFnZSIsInN0YXRlIiwiYWN0aW9ucyIsInVzZUVmZmVjdCIsInNvdXJjZSIsImZldGNoIiwiZGF0YSIsImdldCIsImlzQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImlkIiwicG9zdHMiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJjb25uZWN0IiwiVGl0bGVIMSIsInN0eWxlZCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFNQSxLQUFNQSxjQUFhLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBRCxHQUF3QixDQUM1Q0MsdURBQVMsQ0FBQyxJQUFNLENBQ2RELE9BQU8sQ0FBQ0UsTUFBUixDQUFlQyxLQUFmLENBQXFCLHFCQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQTtBQUNBO0FBQ0EsS0FBTUMsS0FBSSxDQUFHTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUcsR0FBYixDQUFpQixxQkFBakIsQ0FBYixDQUVBLEdBQUlELElBQUksQ0FBQ0UsVUFBVCxDQUFxQixDQUNuQixLQUFNQyxTQUFRLENBQUdSLEtBQUssQ0FBQ0csTUFBTixDQUFhSyxRQUFiLENBQXNCSCxJQUFJLENBQUNJLEVBQTNCLENBQWpCLENBRUEsS0FBTUMsTUFBSyxDQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLENBQUMsQ0FBRUMsSUFBRixDQUFRSixFQUFSLENBQUQsR0FBa0JULEtBQUssQ0FBQ0csTUFBTixDQUFhVSxJQUFiLEVBQW1CSixFQUFuQixDQUFqQyxDQUFkLENBRUEsTUFDRSx3RUFBQyw0REFBRCxJQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFURixDQVdELENBRUQsTUFBTyxLQUFQLENBQ0QsQ0E1QkQsQ0E2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlSyx1SEFBTyxDQUFDZixhQUFELENBQXRCLEVBRUEsS0FBTWdCLFFBQU8sQ0FBR0MsdURBQUgscWxKQUFiLENBSUEsS0FBTUMsS0FBSSxDQUFHRCx1REFBSCwrMEpBQVYsQ0FvQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWNrYWdlcy9leGpvYmItc3VzYW5uZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L3BvcnRmb2xpby1ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBQb3J0Zm9saW9JdGVtIGZyb20gXCIuL3BvcnRmb2xpby1pdGVtLWhvbWVcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5cbmNvbnN0IExpc3RGcm9udHBhZ2UgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvY2F0ZWdvcnkvcG9ydGZvbGlvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIC8vIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvcG9ydGZvbGlvXCIpO1xuXG4gIGlmIChkYXRhLmlzQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcblxuICAgIGNvbnN0IHBvc3RzID0gZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4gc3RhdGUuc291cmNlW3R5cGVdW2lkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRmb2xpb0l0ZW0gLz5cbiAgICAgIC8vIDxJdGVtPlxuICAgICAgLy8gICA8VGl0bGVIMT57Y2F0ZWdvcnkubmFtZX08L1RpdGxlSDE+XG4gICAgICAvLyAgIHtwb3N0cy5zbGljZSgwLCA0KS5tYXAoKHApID0+IChcbiAgICAgIC8vICAgICA8TGluayBsaW5rPXtwLmxpbmt9IGtleT17cC5pZH0+XG4gICAgICAvLyAgICAgICB7cC50aXRsZS5yZW5kZXJlZH1cbiAgICAgIC8vICAgICA8L0xpbms+XG4gICAgICAvLyAgICkpfVxuICAgICAgLy8gPC9JdGVtPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPENvbnRhaW5lcj5cbi8vICAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCBpdCByZW5kZXIgYSB0aXRsZS4gKi99XG4vLyAgICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbi8vICAgICAgICAgPEhlYWRlcj5cbi8vICAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuLy8gICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbi8vICAgICAgICAgPC9IZWFkZXI+XG4vLyAgICAgICApfVxuXG4vLyAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCBpdCByZW5kZXIgYSB0aXRsZS4gKi99XG4vLyAgICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4vLyAgICAgICAgIDxIZWFkZXI+XG4vLyAgICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuLy8gICAgICAgICA8L0hlYWRlcj5cbi8vICAgICAgICl9XG5cbi8vICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiBNYXggNCBwb3N0IGl0ZW1zIG9uIGZyb250cGFnZSAqL31cbi8vICAgICAgIHtkYXRhLml0ZW1zLnNsaWNlKDAsIDQpLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLml0ZW1zWzBdKTtcblxuLy8gICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbi8vICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbUZyb250cGFnZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuLy8gICAgICAgfSl9XG4vLyAgICAgICB7LyogPFBhZ2luYXRpb24gLz4gKi99XG4vLyAgICAgPC9Db250YWluZXI+XG4vLyAgICk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3RGcm9udHBhZ2UpO1xuXG5jb25zdCBUaXRsZUgxID0gc3R5bGVkLmgxYFxuICBjb2xvcjogIzFiYTA5ODtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMxYmEwOTg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbi8vICAgY29sb3I6ICNmZmY7XG4vLyBgO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbi8vICAgd2lkdGg6IDExNDBweDtcbi8vICAgaGVpZ2h0OiBhdXRvO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG5cbi8vICAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbi8vIGA7XG5cbi8vIGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2Bcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG4vLyBgO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/exjobb-susanne-theme/src/components/list/portfolio-home.js\n");

/***/ })

})