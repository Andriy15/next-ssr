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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"(app-pages-browser)/./app/context/AuthContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Chat() {\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(chatRef, (snapshot)=>{\n            const messageList = snapshot.docs.map((doc)=>doc.data());\n            setMessages(messageList);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(chatRef, {\n            text: newMessage,\n            userId: user.uid,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n        setNewMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: \"You must be logged in to be in chat\"\n        }, void 0, false, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 overflow-y-auto px-4 py-6\",\n                    children: messages.map((message, index)=>{\n                        var _message_timestamp;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 rounded-lg mb-2 flex flex-col \".concat(message.userId === user.uid ? \"bg-blue-500 text-white self-end\" : \"bg-gray-200 text-gray-700 self-start\"),\n                            children: [\n                                message.text,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xs text-gray-400\",\n                                    children: message.userId\n                                }, void 0, false, {\n                                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-gray-400\",\n                                    children: new Date((_message_timestamp = message.timestamp) === null || _message_timestamp === void 0 ? void 0 : _message_timestamp.toDate()).toLocaleString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border-t\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"flex-1 border rounded-lg p-2 mr-2 resize-none\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                onClick: handleSendMessage,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Chat, \"3FBbagjpE56yrcaN7KuSVTVqhHE=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNLO0FBQ29DO0FBQ3BEO0FBRWxCLFNBQVNROztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUCw2REFBT0E7SUFDeEIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFVBQVVYLDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBRTtRQUMvQixNQUFNUSxjQUFjVCw4REFBVUEsQ0FBQ1EsU0FBU0UsQ0FBQUE7WUFDdEMsTUFBTUMsY0FBY0QsU0FBU0UsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7WUFDckRWLFlBQVlNO1FBQ2Q7UUFFQSxPQUFPLElBQU1GO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sb0JBQW9CO1FBQ3hCLElBQUlWLFdBQVdXLElBQUksT0FBTyxJQUFJO1FBRTlCLE1BQU1ULFVBQVVYLDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBRTtRQUMvQixNQUFNSCwwREFBTUEsQ0FBQ1UsU0FBUztZQUNwQlUsTUFBTVo7WUFDTmEsUUFBUWhCLEtBQUtpQixHQUFHO1lBQ2hCQyxXQUFXdEIsbUVBQWVBO1FBQzVCO1FBRUFRLGNBQWM7SUFDaEI7SUFFQSxxQkFDRTtrQkFDSyxDQUFDSixxQkFDRSw4REFBQ21CO1lBQUlDLFdBQVU7c0JBQWM7Ozs7O2lDQUU3Qiw4REFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNWbkIsU0FBU1MsR0FBRyxDQUFDLENBQUNXLFNBQVNDOzRCQWNSRDs2Q0FiaEIsOERBQUNGOzRCQUVHQyxXQUFXLHFDQUlWLE9BSERDLFFBQVFMLE1BQU0sS0FBS2hCLEtBQUtpQixHQUFHLEdBQ3JCLG9DQUNBOztnQ0FHTEksUUFBUU4sSUFBSTs4Q0FDYiw4REFBQ0k7b0NBQUlDLFdBQVU7OENBQ1pDLFFBQVFMLE1BQU07Ozs7Ozs4Q0FFakIsOERBQUNHO29DQUFJQyxXQUFVOzhDQUNaLElBQUlHLE1BQUtGLHFCQUFBQSxRQUFRSCxTQUFTLGNBQWpCRyx5Q0FBQUEsbUJBQW1CRyxNQUFNLElBQUlDLGNBQWM7Ozs7Ozs7MkJBWmxESDs7Ozs7Ozs7Ozs7OEJBaUJiLDhEQUFDSDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDTTtnQ0FDR04sV0FBVTtnQ0FDVk8sT0FBT3hCO2dDQUNQeUIsVUFBVUMsQ0FBQUEsSUFBS3pCLGNBQWN5QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzNDSSxhQUFZOzs7Ozs7MENBRWhCLDhEQUFDQztnQ0FDR1osV0FBVTtnQ0FDVmEsU0FBU3BCOzBDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckI7R0ExRXdCZDs7UUFDTE4seURBQU9BOzs7S0FERk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvcGFnZS5qc3g/YzdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIHNlcnZlclRpbWVzdGFtcCwgb25TbmFwc2hvdCB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGF0UmVmID0gY29sbGVjdGlvbihkYiwgJ2NoYXQnKTtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QoY2hhdFJlZiwgc25hcHNob3QgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZUxpc3QgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSlcbiAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VMaXN0KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpID09PSAnJykgcmV0dXJuO1xuXG4gICAgY29uc3QgY2hhdFJlZiA9IGNvbGxlY3Rpb24oZGIsICdjaGF0JylcbiAgICBhd2FpdCBhZGREb2MoY2hhdFJlZiwge1xuICAgICAgdGV4dDogbmV3TWVzc2FnZSxcbiAgICAgIHVzZXJJZDogdXNlci51aWQsXG4gICAgICB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgIH0pO1xuXG4gICAgc2V0TmV3TWVzc2FnZSgnJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgeyF1c2VyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBiZSBpbiBjaGF0PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcHgtNCBweS02XCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyBtYi0yIGZsZXggZmxleC1jb2wgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudXNlcklkID09PSB1c2VyLnVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUgc2VsZi1lbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBzZWxmLXN0YXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UudXNlcklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG1lc3NhZ2UudGltZXN0YW1wPy50b0RhdGUoKSkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkLWxnIHAtMiBtci0yIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJvblNuYXBzaG90IiwiZGIiLCJDaGF0IiwidXNlciIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImNoYXRSZWYiLCJ1bnN1YnNjcmliZSIsInNuYXBzaG90IiwibWVzc2FnZUxpc3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsInRleHQiLCJ1c2VySWQiLCJ1aWQiLCJ0aW1lc3RhbXAiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwiaW5kZXgiLCJEYXRlIiwidG9EYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});