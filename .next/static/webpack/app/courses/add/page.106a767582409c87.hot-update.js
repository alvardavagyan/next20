"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/add/page",{

/***/ "(app-pages-browser)/./src/app/courses/add/page.tsx":
/*!**************************************!*\
  !*** ./src/app/courses/add/page.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/actions/course-actions */ \"(app-pages-browser)/./src/app/lib/actions/course-actions.ts\");\n/* harmony import */ var _app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/components/image-picker */ \"(app-pages-browser)/./src/app/lib/components/image-picker.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [state, handleAddAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useActionState)(_app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_1__.handleAdd, {\n        message: \"\"\n    });\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        price: \"\",\n        duration: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setValue((ite)=>({\n                ...elm,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-5\",\n                children: \"Add Course\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"column  is-two-fifths my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        action: handleAddAction,\n                        children: [\n                            (state === null || state === void 0 ? void 0 : state.message) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: 'red'\n                                },\n                                children: state === null || state === void 0 ? void 0 : state.message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 40\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"name\",\n                                    placeholder: \"enter a name\",\n                                    value: value.name,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"price\",\n                                    placeholder: \"enter a price\",\n                                    value: value.price,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"duration\",\n                                    placeholder: \"enter a duration\",\n                                    value: value.duration,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__.ImagePicker, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button is-danger\",\n                                    children: \"submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Archive 19\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\n_s(Page, \"FHeFDYvNhw8F4a66LshdGbdOVE8=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_3__.useActionState\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9hZGQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDRztBQUNsQjtBQUcvQixTQUFTSTs7SUFFcEIsTUFBTSxDQUFDQyxPQUFNQyxnQkFBZ0IsR0FBQ0oscURBQWNBLENBQUNGLHNFQUFTQSxFQUFDO1FBQUNPLFNBQVE7SUFBRTtJQUNsRSxNQUFNLENBQUNDLE9BQU1DLFNBQVMsR0FBQ04sK0NBQVFBLENBQUM7UUFFNUJPLE1BQUs7UUFDTEMsT0FBTTtRQUNOQyxVQUFTO0lBQ2I7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUosSUFBSSxFQUFFRixLQUFLLEVBQUUsR0FBR00sRUFBRUMsTUFBTTtRQUNoQ04sU0FBU08sQ0FBQUEsTUFBUTtnQkFBRSxHQUFHQyxHQUFHO2dCQUFFLENBQUNQLEtBQUssRUFBRUY7WUFBTTtJQUM3QztJQUdBLHFCQUFPLDhEQUFDVTs7MEJBQ0osOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFZOzs7Ozs7MEJBQzFCLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDWCw0RUFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFLRCxXQUFVO3dCQUFNRSxRQUFRaEI7OzRCQUN6QkQsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPRSxPQUFPLG1CQUFJLDhEQUFDZ0I7Z0NBQUVDLE9BQU87b0NBQUNDLE9BQU07Z0NBQUs7MENBQUlwQixrQkFBQUEsNEJBQUFBLE1BQU9FLE9BQU87Ozs7OzswQ0FDM0QsOERBQUNXO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDTTtvQ0FDR0MsTUFBSztvQ0FDTFAsV0FBVTtvQ0FDVlYsTUFBSztvQ0FDTGtCLGFBQVk7b0NBQ1pwQixPQUFPQSxNQUFNRSxJQUFJO29DQUNqQm1CLFVBQVVoQjs7Ozs7Ozs7Ozs7MENBTWxCLDhEQUFDSztnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ007b0NBQ0dDLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZWLE1BQUs7b0NBQ0xrQixhQUFZO29DQUNacEIsT0FBT0EsTUFBTUcsS0FBSztvQ0FDbEJrQixVQUFVaEI7Ozs7Ozs7Ozs7OzBDQUlsQiw4REFBQ0s7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNNO29DQUNHQyxNQUFLO29DQUNMUCxXQUFVO29DQUNWVixNQUFLO29DQUNMa0IsYUFBWTtvQ0FDWnBCLE9BQU9BLE1BQU1JLFFBQVE7b0NBQ3JCaUIsVUFBVWhCOzs7Ozs7Ozs7OzswQ0FHbEIsOERBQUNLO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDbkIseUVBQVdBOzs7Ozs7Ozs7OzBDQUVoQiw4REFBQ2lCO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDVTtvQ0FBT1YsV0FBVTs4Q0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RDtHQWxFd0JoQjs7UUFFVUYsaURBQWNBOzs7S0FGeEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY291cnNlcy9hZGQvcGFnZS50c3g/MzJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBoYW5kbGVBZGQgfSBmcm9tIFwiQC9hcHAvbGliL2FjdGlvbnMvY291cnNlLWFjdGlvbnNcIjtcbmltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSBcIkAvYXBwL2xpYi9jb21wb25lbnRzL2ltYWdlLXBpY2tlclwiO1xuaW1wb3J0IHt1c2VBY3Rpb25TdGF0ZSwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpe1xuXG4gICAgY29uc3QgW3N0YXRlLGhhbmRsZUFkZEFjdGlvbl09dXNlQWN0aW9uU3RhdGUoaGFuZGxlQWRkLHttZXNzYWdlOlwiXCJ9KVxuICAgIGNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV09dXNlU3RhdGUoe1xuXG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIixcbiAgICAgICAgZHVyYXRpb246XCJcIlxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0VmFsdWUoaXRlID0+ICh7IC4uLmVsbSwgW25hbWVdOiB2YWx1ZSB9KSlcbiAgICB9XG5cblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS01XCI+QWRkIENvdXJzZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gIGlzLXR3by1maWZ0aHMgbXktNFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJveFwiIGFjdGlvbj17aGFuZGxlQWRkQWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlPy5tZXNzYWdlICYmIDxwIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT57c3RhdGU/Lm1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBteS00XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgZHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVBpY2tlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlclwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59Il0sIm5hbWVzIjpbImhhbmRsZUFkZCIsIkltYWdlUGlja2VyIiwidXNlQWN0aW9uU3RhdGUiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJzdGF0ZSIsImhhbmRsZUFkZEFjdGlvbiIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInByaWNlIiwiZHVyYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaXRlIiwiZWxtIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwicCIsInN0eWxlIiwiY29sb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/add/page.tsx\n"));

/***/ })

});