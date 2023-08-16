exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 4092:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7495));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5333))

/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Navbar() {
    const { user, signInWithGoogle, logOut } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("light");
    const handleLogin = ()=>{
        signInWithGoogle();
    };
    const handleLogout = async ()=>{
        logOut();
    };
    const toggleTheme = ()=>{
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-20 w-full border-b-2 flex items-center justify-between p-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/chat",
                            children: "Chat"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/profile",
                            children: "Profile"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        onClick: toggleTheme,
                        children: theme === "light" ? "Dark" : "Light"
                    })
                ]
            }),
            !user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        onClick: handleLogin,
                        children: "Login"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        onClick: handleLogout,
                        children: "Log Out"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rounded-full w-10 h-10 overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: user.photoURL,
                                alt: `${user.displayName}'s profile`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: user.displayName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "p-2 cursor-pointer",
                        onClick: handleLogout,
                        children: "Log Out"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3407);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4642);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const signInWithGoogle = async ()=>{
        try {
            const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .GoogleAuthProvider */ .hJ();
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signInWithPopup */ .rh)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, provider);
        } catch (error) {
            console.log(error);
        }
    };
    const logOut = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signOut */ .w7)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
        } catch (error) {
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .onAuthStateChanged */ .Aj)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, (user)=>{
            setUser(user);
        });
        return unsubscribe;
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            signInWithGoogle,
            logOut
        },
        children: children
    });
};
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2856);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1522);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3407);



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg90GKTw3rsnekkNlwubneMKbL0eD-HI8",
    authDomain: "ssr-chat-ad10c.firebaseapp.com",
    projectId: "ssr-chat-ad10c",
    storageBucket: "ssr-chat-ad10c.appspot.com",
    messagingSenderId: "960439100989",
    appId: "1:960439100989:web:08d9b80716d862398dac54"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);


/***/ }),

/***/ 3467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(6697);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/andrijcikulaj/Documents/ssr-chat/app/components/Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./app/context/AuthContext.js

const AuthContext_proxy = (0,module_proxy.createProxy)(String.raw`/Users/andrijcikulaj/Documents/ssr-chat/app/context/AuthContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthContext_esModule, $$typeof: AuthContext_$$typeof } = AuthContext_proxy;
const AuthContext_default_ = AuthContext_proxy.default;

const e0 = AuthContext_proxy["AuthProvider"];

const e1 = AuthContext_proxy["useAuth"];

;// CONCATENATED MODULE: ./app/layout.js





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;