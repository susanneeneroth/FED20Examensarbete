webpackHotUpdate("frontity",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\n/* harmony import */ var _components_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/handlers/menu-handler */ \"./packages/mars-theme/src/components/handlers/menu-handler.js\");\nconst marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     * In Frontity, any package can add React components to the site.\n     * We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{autoPrefetch:\"in-view\",menu:[\"primary-menu\"],menuUrl:\"primary-menu\",isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{toggleMobileMenu:({state})=>{state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:({state})=>{state.theme.isMobileMenuOpen=false;},beforeSSR:async({state,actions})=>{await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);},beforeCSR:()=>{__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\", 7)).then(WebFontLoader=>{WebFontLoader.load({google:{families:[\"Pacifico:400\",\"Merriweather:400,700:latin-ext\",\"Sacramento\"]}});});}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * and internal link inside the content HTML.\n       * You can add your own processors too.\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_5__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"]]},source:{handlers:[_components_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbIm1hcnNUaGVtZSIsIm5hbWUiLCJyb290cyIsInRoZW1lIiwiVGhlbWUiLCJzdGF0ZSIsImF1dG9QcmVmZXRjaCIsIm1lbnUiLCJtZW51VXJsIiwiaXNNb2JpbGVNZW51T3BlbiIsImZlYXR1cmVkIiwic2hvd09uTGlzdCIsInNob3dPblBvc3QiLCJhY3Rpb25zIiwidG9nZ2xlTW9iaWxlTWVudSIsImNsb3NlTW9iaWxlTWVudSIsImJlZm9yZVNTUiIsInNvdXJjZSIsImZldGNoIiwiYmVmb3JlQ1NSIiwidGhlbiIsIldlYkZvbnRMb2FkZXIiLCJsb2FkIiwiZ29vZ2xlIiwiZmFtaWxpZXMiLCJsaWJyYXJpZXMiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIiwiaWZyYW1lIiwibGluayIsImhhbmRsZXJzIiwibWVudUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU1BLEtBQU1BLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJDLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lGLEtBQUssQ0FBRSxDQUNMRyxZQUFZLENBQUUsU0FEVCxDQUVMQyxJQUFJLENBQUUsQ0FBQyxjQUFELENBRkQsQ0FHTEMsT0FBTyxDQUFFLGNBSEosQ0FJTEMsZ0JBQWdCLENBQUUsS0FKYixDQUtMQyxRQUFRLENBQUUsQ0FDUkMsVUFBVSxDQUFFLEtBREosQ0FFUkMsVUFBVSxDQUFFLEtBRkosQ0FMTCxDQUxGLENBVFMsQ0EwQmhCO0FBQ0Y7QUFDQTtBQUNBLEtBQ0VDLE9BQU8sQ0FBRSxDQUNQVixLQUFLLENBQUUsQ0FDTFcsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFVCxLQUFGLENBQUQsR0FBZSxDQUMvQkEsS0FBSyxDQUFDRixLQUFOLENBQVlNLGdCQUFaLENBQStCLENBQUNKLEtBQUssQ0FBQ0YsS0FBTixDQUFZTSxnQkFBNUMsQ0FDRCxDQUhJLENBSUxNLGVBQWUsQ0FBRSxDQUFDLENBQUVWLEtBQUYsQ0FBRCxHQUFlLENBQzlCQSxLQUFLLENBQUNGLEtBQU4sQ0FBWU0sZ0JBQVosQ0FBK0IsS0FBL0IsQ0FDRCxDQU5JLENBT0xPLFNBQVMsQ0FBRSxNQUFPLENBQUVYLEtBQUYsQ0FBU1EsT0FBVCxDQUFQLEdBQThCLENBQ3ZDLEtBQU1BLFFBQU8sQ0FBQ0ksTUFBUixDQUFlQyxLQUFmLENBQXNCLFNBQVFiLEtBQUssQ0FBQ0YsS0FBTixDQUFZSyxPQUFRLEdBQWxELENBQU4sQ0FDRCxDQVRJLENBVUxXLFNBQVMsQ0FBRSxJQUFNLENBQ2YseUpBQXdCQyxJQUF4QixDQUE4QkMsYUFBRCxFQUFtQixDQUM5Q0EsYUFBYSxDQUFDQyxJQUFkLENBQW1CLENBQ2pCQyxNQUFNLENBQUUsQ0FDTkMsUUFBUSxDQUFFLENBQ1IsY0FEUSxDQUVSLGdDQUZRLENBR1IsWUFIUSxDQURKLENBRFMsQ0FBbkIsRUFTRCxDQVZELEVBV0QsQ0F0QkksQ0FEQSxDQTlCTyxDQXdEaEJDLFNBQVMsQ0FBRSxDQUNUQyxVQUFVLENBQUUsQ0FDVjtBQUNOO0FBQ0E7QUFDQTtBQUNBLFNBQ01DLFVBQVUsQ0FBRSxDQUFDQyw2RUFBRCxDQUFRQyw4RUFBUixDQUFnQkMsNEVBQWhCLENBTkYsQ0FESCxDQVNUYixNQUFNLENBQUUsQ0FDTmMsUUFBUSxDQUFFLENBQUNDLHlFQUFELENBREosQ0FUQyxDQXhESyxDQUFsQixDQXVFZWhDLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IGltYWdlIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2ltYWdlXCI7XG5pbXBvcnQgaWZyYW1lIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2lmcmFtZVwiO1xuaW1wb3J0IGxpbmsgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGlua1wiO1xuaW1wb3J0IG1lbnVIYW5kbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGFuZGxlcnMvbWVudS1oYW5kbGVyXCI7XG5cbmNvbnN0IG1hcnNUaGVtZSA9IHtcbiAgbmFtZTogXCJAZnJvbnRpdHkvbWFycy10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqIEluIEZyb250aXR5LCBhbnkgcGFja2FnZSBjYW4gYWRkIFJlYWN0IGNvbXBvbmVudHMgdG8gdGhlIHNpdGUuXG4gICAgICogV2UgdXNlIHJvb3RzIGZvciB0aGF0LCBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiBUaGVtZSxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICAvKipcbiAgICAgKiBTdGF0ZSBpcyB3aGVyZSB0aGUgcGFja2FnZXMgc3RvcmUgdGhlaXIgZGVmYXVsdCBzZXR0aW5ncyBhbmQgb3RoZXJcbiAgICAgKiByZWxldmFudCBzdGF0ZS4gSXQgaXMgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICB0aGVtZToge1xuICAgICAgYXV0b1ByZWZldGNoOiBcImluLXZpZXdcIixcbiAgICAgIG1lbnU6IFtcInByaW1hcnktbWVudVwiXSxcbiAgICAgIG1lbnVVcmw6IFwicHJpbWFyeS1tZW51XCIsXG4gICAgICBpc01vYmlsZU1lbnVPcGVuOiBmYWxzZSxcbiAgICAgIGZlYXR1cmVkOiB7XG4gICAgICAgIHNob3dPbkxpc3Q6IGZhbHNlLFxuICAgICAgICBzaG93T25Qb3N0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogQWN0aW9ucyBhcmUgZnVuY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBzdGF0ZSBvciBkZWFsIHdpdGggb3RoZXIgcGFydHMgb2ZcbiAgICogRnJvbnRpdHkgbGlrZSBsaWJyYXJpZXMuXG4gICAqL1xuICBhY3Rpb25zOiB7XG4gICAgdGhlbWU6IHtcbiAgICAgIHRvZ2dsZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9ICFzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgYmVmb3JlU1NSOiBhc3luYyAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gICAgICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApO1xuICAgICAgfSxcbiAgICAgIGJlZm9yZUNTUjogKCkgPT4ge1xuICAgICAgICBpbXBvcnQoXCJ3ZWJmb250bG9hZGVyXCIpLnRoZW4oKFdlYkZvbnRMb2FkZXIpID0+IHtcbiAgICAgICAgICBXZWJGb250TG9hZGVyLmxvYWQoe1xuICAgICAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAgICAgICAgXCJQYWNpZmljbzo0MDBcIixcbiAgICAgICAgICAgICAgICBcIk1lcnJpd2VhdGhlcjo0MDAsNzAwOmxhdGluLWV4dFwiLFxuICAgICAgICAgICAgICAgIFwiU2FjcmFtZW50b1wiLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpYnJhcmllczoge1xuICAgIGh0bWwycmVhY3Q6IHtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGEgcHJvY2Vzc29yIHRvIGBodG1sMnJlYWN0YCBzbyBpdCBwcm9jZXNzZXMgdGhlIGA8aW1nPmAgdGFnc1xuICAgICAgICogYW5kIGludGVybmFsIGxpbmsgaW5zaWRlIHRoZSBjb250ZW50IEhUTUwuXG4gICAgICAgKiBZb3UgY2FuIGFkZCB5b3VyIG93biBwcm9jZXNzb3JzIHRvby5cbiAgICAgICAqL1xuICAgICAgcHJvY2Vzc29yczogW2ltYWdlLCBpZnJhbWUsIGxpbmtdLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICBoYW5kbGVyczogW21lbnVIYW5kbGVyXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFyc1RoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})