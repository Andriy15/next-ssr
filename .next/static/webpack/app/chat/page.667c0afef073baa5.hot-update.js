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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"(app-pages-browser)/./app/context/AuthContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Chat() {\n    var _user;\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(chatRef, (snapshot)=>{\n            const messageList = snapshot.docs.map((doc)=>doc.data());\n            setMessages(messageList);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(chatRef, {\n            text: newMessage,\n            userId: user.uid,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n        setNewMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: \"You must be logged in to be in chat\"\n        }, void 0, false, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 overflow-y-auto px-4 py-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-400\",\n                                children: (_user = user) === null || _user === void 0 ? void 0 : _user.displayName\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        messages.map((message, index)=>{\n                            var _message_timestamp;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 rounded-lg mb-2 flex flex-col \".concat(message.userId === user.uid ? \"bg-blue-500 text-white self-end\" : \"bg-gray-200 text-gray-700 self-start\"),\n                                children: [\n                                    message.text,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400\",\n                                        children: new Date((_message_timestamp = message.timestamp) === null || _message_timestamp === void 0 ? void 0 : _message_timestamp.toDate()).toLocaleString()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border-t\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"flex-1 border rounded-lg p-2 mr-2 resize-none\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                onClick: handleSendMessage,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrijcikulaj/Documents/ssr-chat/app/chat/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Chat, \"3FBbagjpE56yrcaN7KuSVTVqhHE=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNLO0FBQ29DO0FBQ3BEO0FBRWxCLFNBQVNRO1FBcUNDQzs7SUFwQ3ZCLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUdQLDZEQUFPQTtJQUN4QixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsVUFBVVgsOERBQVVBLENBQUNJLHlDQUFFQSxFQUFFO1FBQy9CLE1BQU1RLGNBQWNULDhEQUFVQSxDQUFDUSxTQUFTRSxDQUFBQTtZQUN0QyxNQUFNQyxjQUFjRCxTQUFTRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtZQUNyRFYsWUFBWU07UUFDZDtRQUVBLE9BQU8sSUFBTUY7SUFDZixHQUFHLEVBQUU7SUFFTCxNQUFNTyxvQkFBb0I7UUFDeEIsSUFBSVYsV0FBV1csSUFBSSxPQUFPLElBQUk7UUFFOUIsTUFBTVQsVUFBVVgsOERBQVVBLENBQUNJLHlDQUFFQSxFQUFFO1FBQy9CLE1BQU1ILDBEQUFNQSxDQUFDVSxTQUFTO1lBQ3BCVSxNQUFNWjtZQUNOYSxRQUFRaEIsS0FBS2lCLEdBQUc7WUFDaEJDLFdBQVd0QixtRUFBZUE7UUFDNUI7UUFFQVEsY0FBYztJQUNoQjtJQUVBLHFCQUNFO2tCQUNLLENBQUNKLHFCQUNFLDhEQUFDbUI7WUFBSUMsV0FBVTtzQkFBYzs7Ozs7aUNBRTdCLDhEQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDtzQ0FDQyw0RUFBQ0E7Z0NBQUlDLFdBQVU7MkNBQ1pwQixRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1xQixXQUFXOzs7Ozs7Ozs7Ozt3QkFHckJwQixTQUFTUyxHQUFHLENBQUMsQ0FBQ1ksU0FBU0M7Z0NBV1pEO2lEQVZaLDhEQUFDSDtnQ0FFR0MsV0FBVyxxQ0FJVixPQUhERSxRQUFRTixNQUFNLEtBQUtoQixLQUFLaUIsR0FBRyxHQUNyQixvQ0FDQTs7b0NBR0xLLFFBQVFQLElBQUk7a0RBQ2IsOERBQUNJO3dDQUFJQyxXQUFVO2tEQUNoQixJQUFJSSxNQUFLRixxQkFBQUEsUUFBUUosU0FBUyxjQUFqQkkseUNBQUFBLG1CQUFtQkcsTUFBTSxJQUFJQyxjQUFjOzs7Ozs7OytCQVQ5Q0g7Ozs7Ozs7Ozs7Ozs4QkFlYiw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ087Z0NBQ0dQLFdBQVU7Z0NBQ1ZRLE9BQU96QjtnQ0FDUDBCLFVBQVVDLENBQUFBLElBQUsxQixjQUFjMEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksYUFBWTs7Ozs7OzBDQUVoQiw4REFBQ0M7Z0NBQ0diLFdBQVU7Z0NBQ1ZjLFNBQVNyQjswQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBN0V3QmQ7O1FBQ0xOLHlEQUFPQTs7O0tBREZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UuanN4P2M3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBzZXJ2ZXJUaW1lc3RhbXAsIG9uU25hcHNob3QgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhdFJlZiA9IGNvbGxlY3Rpb24oZGIsICdjaGF0Jyk7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KGNoYXRSZWYsIHNuYXBzaG90ID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VMaXN0ID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpXG4gICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlTGlzdClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSA9PT0gJycpIHJldHVybjtcblxuICAgIGNvbnN0IGNoYXRSZWYgPSBjb2xsZWN0aW9uKGRiLCAnY2hhdCcpXG4gICAgYXdhaXQgYWRkRG9jKGNoYXRSZWYsIHtcbiAgICAgIHRleHQ6IG5ld01lc3NhZ2UsXG4gICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICB9KTtcblxuICAgIHNldE5ld01lc3NhZ2UoJycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIHshdXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Zb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gYmUgaW4gY2hhdDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB4LTQgcHktNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHJvdW5kZWQtbGcgbWItMiBmbGV4IGZsZXgtY29sICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJJZCA9PT0gdXNlci51aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHNlbGYtZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgc2VsZi1zdGFydCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShtZXNzYWdlLnRpbWVzdGFtcD8udG9EYXRlKCkpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkLWxnIHAtMiBtci0yIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJvblNuYXBzaG90IiwiZGIiLCJDaGF0IiwidXNlciIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImNoYXRSZWYiLCJ1bnN1YnNjcmliZSIsInNuYXBzaG90IiwibWVzc2FnZUxpc3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsInRleHQiLCJ1c2VySWQiLCJ1aWQiLCJ0aW1lc3RhbXAiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJpbmRleCIsIkRhdGUiLCJ0b0RhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});