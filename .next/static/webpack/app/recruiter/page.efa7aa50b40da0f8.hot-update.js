"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recruiter/page",{

/***/ "(app-pages-browser)/./app/recruiter/page.js":
/*!*******************************!*\
  !*** ./app/recruiter/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./app/components/Footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_CandidateList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CandidateList */ \"(app-pages-browser)/./app/components/CandidateList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RecruiterPage = ()=>{\n    _s();\n    const candidates = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.candidates.list);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"recruiter-page-container\",\n                children: candidates.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Liste des candidats\"\n                        }, void 0, false, {\n                            fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CandidateList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                    lineNumber: 16,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"no-candidates-message\",\n                    children: [\n                        \"Veuillez soumettre une candidature via le formulaire candidat pour voir la liste.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/candidate\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"blue\",\n                                    textDecoration: \"underline\"\n                                },\n                                children: \"Acc\\xe8s au formulaire candidat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/siyam/Reeway/Airmayi-Platform/app/recruiter/page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RecruiterPage, \"kQ6vwPucxs+7Q0cLXfhv/oMdqXk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = RecruiterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecruiterPage);\nvar _c;\n$RefreshReg$(_c, \"RecruiterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWNydWl0ZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMEM7QUFDQTtBQUNBO0FBQ2I7QUFDMkI7QUFFeEQsTUFBTUssZ0JBQWdCOztJQUNsQixNQUFNQyxhQUFhTix3REFBV0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRCxVQUFVLENBQUNFLElBQUk7SUFFL0QscUJBQ0k7OzBCQUFFLDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNMLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDVkosV0FBV0ssTUFBTSxHQUFHLGtCQUNqQiw4REFBQ0Y7O3NDQUNHLDhEQUFDRztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDUixpRUFBYUE7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDUztvQkFBRUgsV0FBVTs7d0JBQXdCO3NDQUU3Qyw4REFBQ1AsaURBQUlBOzRCQUFDVyxNQUFLO3NDQUNILDRFQUFDRDtnQ0FBRUUsT0FBTztvQ0FBRUMsT0FBTztvQ0FBUUMsZ0JBQWdCO2dDQUFZOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt0RSw4REFBQ2YsMERBQU1BOzs7Ozs7O0FBRWY7R0F0Qk1HOztRQUNpQkwsb0RBQVdBOzs7S0FENUJLO0FBd0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZWNydWl0ZXIvcGFnZS5qcz9jMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FuZGlkYXRlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW5kaWRhdGVMaXN0XCI7XG5cbmNvbnN0IFJlY3J1aXRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FuZGlkYXRlcy5saXN0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNydWl0ZXItcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxpc3RlIGRlcyBjYW5kaWRhdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbmRpZGF0ZUxpc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tY2FuZGlkYXRlcy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBWZXVpbGxleiBzb3VtZXR0cmUgdW5lIGNhbmRpZGF0dXJlIHZpYSBsZSBmb3JtdWxhaXJlIGNhbmRpZGF0IHBvdXIgdm9pciBsYSBsaXN0ZS5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FuZGlkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5BY2PDqHMgYXUgZm9ybXVsYWlyZSBjYW5kaWRhdDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPjwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNydWl0ZXJQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIkhlYWRlciIsIkZvb3RlciIsIkxpbmsiLCJDYW5kaWRhdGVMaXN0IiwiUmVjcnVpdGVyUGFnZSIsImNhbmRpZGF0ZXMiLCJzdGF0ZSIsImxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJoMiIsInAiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/recruiter/page.js\n"));

/***/ })

});