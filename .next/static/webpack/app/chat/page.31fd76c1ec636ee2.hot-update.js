"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/chat/page.jsx":
/*!***************************!*\
  !*** ./app/chat/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"(app-pages-browser)/./app/context/AuthContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Chat() {\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(chatRef, (snapshot)=>{\n            const messageList = snapshot.docs.map((doc)=>doc.data());\n            setMessages(messageList);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(chatRef, {\n            text: newMessage,\n            userId: user.uid,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n        setNewMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: \"You must be logged in to be in chat\"\n        }, void 0, false, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 overflow-y-auto px-4 py-6\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 rounded-lg mb-2 \".concat(message.userId === user.uid ? \"bg-blue-500 text-white self-end\" : \"bg-gray-200 text-gray-700 self-start\"),\n                            children: [\n                                message.text,\n                                timestamp.toDate().toLocaleString(),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border-t\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"flex-1 border rounded-lg p-2 mr-2 resize-none\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                onClick: handleSendMessage,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Chat, \"3FBbagjpE56yrcaN7KuSVTVqhHE=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNLO0FBQ29DO0FBQ3BEO0FBRWxCLFNBQVNROztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUCw2REFBT0E7SUFDeEIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFVBQVVYLDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBRTtRQUMvQixNQUFNUSxjQUFjVCw4REFBVUEsQ0FBQ1EsU0FBU0UsQ0FBQUE7WUFDdEMsTUFBTUMsY0FBY0QsU0FBU0UsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7WUFDckRWLFlBQVlNO1FBQ2Q7UUFFQSxPQUFPLElBQU1GO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sb0JBQW9CO1FBQ3hCLElBQUlWLFdBQVdXLElBQUksT0FBTyxJQUFJO1FBRTlCLE1BQU1ULFVBQVVYLDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBRTtRQUMvQixNQUFNSCwwREFBTUEsQ0FBQ1UsU0FBUztZQUNwQlUsTUFBTVo7WUFDTmEsUUFBUWhCLEtBQUtpQixHQUFHO1lBQ2hCQyxXQUFXdEIsbUVBQWVBO1FBQzVCO1FBRUFRLGNBQWM7SUFDaEI7SUFFQSxxQkFDRTtrQkFDSyxDQUFDSixxQkFDRSw4REFBQ21CO1lBQUlDLFdBQVU7c0JBQWM7Ozs7O2lDQUU3Qiw4REFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNWbkIsU0FBU1MsR0FBRyxDQUFDLENBQUNXLFNBQVNDLHNCQUN4Qiw4REFBQ0g7NEJBRUdDLFdBQVcsdUJBSVYsT0FIREMsUUFBUUwsTUFBTSxLQUFLaEIsS0FBS2lCLEdBQUcsR0FDckIsb0NBQ0E7O2dDQUdMSSxRQUFRTixJQUFJO2dDQUNaRyxVQUFVSyxNQUFNLEdBQUdDLGNBQWM7OENBQ2xDLDhEQUFDQzs7Ozs7OzJCQVRJSDs7Ozs7Ozs7Ozs4QkFhYiw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ007Z0NBQ0dOLFdBQVU7Z0NBQ1ZPLE9BQU94QjtnQ0FDUHlCLFVBQVVDLENBQUFBLElBQUt6QixjQUFjeUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksYUFBWTs7Ozs7OzBDQUVoQiw4REFBQ0M7Z0NBQ0daLFdBQVU7Z0NBQ1ZhLFNBQVNwQjswQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBdEV3QmQ7O1FBQ0xOLHlEQUFPQTs7O0tBREZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UuanN4P2M3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBzZXJ2ZXJUaW1lc3RhbXAsIG9uU25hcHNob3QgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhdFJlZiA9IGNvbGxlY3Rpb24oZGIsICdjaGF0Jyk7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KGNoYXRSZWYsIHNuYXBzaG90ID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VMaXN0ID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpXG4gICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlTGlzdClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgPT09ICcnKSByZXR1cm47XG5cbiAgICBjb25zdCBjaGF0UmVmID0gY29sbGVjdGlvbihkYiwgJ2NoYXQnKVxuICAgIGF3YWl0IGFkZERvYyhjaGF0UmVmLCB7XG4gICAgICB0ZXh0OiBuZXdNZXNzYWdlLFxuICAgICAgdXNlcklkOiB1c2VyLnVpZCxcbiAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXG4gICAgfSk7XG5cbiAgICBzZXROZXdNZXNzYWdlKCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICB7IXVzZXIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+WW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIGJlIGluIGNoYXQ8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBweC00IHB5LTZcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLWxnIG1iLTIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudXNlcklkID09PSB1c2VyLnVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUgc2VsZi1lbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBzZWxmLXN0YXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltZXN0YW1wLnRvRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYm9yZGVyIHJvdW5kZWQtbGcgcC0yIG1yLTIgcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiY29sbGVjdGlvbiIsImFkZERvYyIsInNlcnZlclRpbWVzdGFtcCIsIm9uU25hcHNob3QiLCJkYiIsIkNoYXQiLCJ1c2VyIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiY2hhdFJlZiIsInVuc3Vic2NyaWJlIiwic25hcHNob3QiLCJtZXNzYWdlTGlzdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwidGV4dCIsInVzZXJJZCIsInVpZCIsInRpbWVzdGFtcCIsImRpdiIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJpbmRleCIsInRvRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicCIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});