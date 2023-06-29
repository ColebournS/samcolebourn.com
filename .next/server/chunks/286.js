"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children , type , onClick , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (type === "primary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            type: "button",
            className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: "button",
        className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${theme === "light" ? "hover:bg-slate-100" : "hover:bg-slate-600 text-white"} hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes} link`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ 




const Header = ({ handleWorkScroll , handleAboutScroll , handleContactScroll , isBlog ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                className: "block tablet:hidden mt-5",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between p-2 laptop:p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        onClick: ()=>router.push("/")
                                        ,
                                        className: "font-medium p-2 laptop:p-0 link",
                                        children: "Sam Colebourn"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-6",
                                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-5",
                                                    src: `/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: `absolute right-0 z-10 w-11/12 p-4 ${theme === "light" ? "bg-white" : "bg-slate-800"} shadow-md rounded-md`,
                                children: !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleWorkScroll,
                                            children: "Work"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleAboutScroll,
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleContactScroll,
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:sam.colebourn@gmail.com")
                                            ,
                                            children: "Resume"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/resume")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Resume"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} light:text-black top-0 z-10 tablet:flex`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        onClick: ()=>router.push("/")
                        ,
                        className: "ml-4 font-medium cursor-pointer mob:p-2 laptop:p-0",
                        children: "Sam Colebourn"
                    }),
                    !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleWorkScroll,
                                children: "Work"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleAboutScroll,
                                children: "About"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleContactScroll,
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "Resume"
                            }),
                            mounted && theme && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "Resume"
                            }),
                            mounted && theme && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Socials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Button/index.js
var Button = __webpack_require__(542);
;// CONCATENATED MODULE: ./components/Socials/socialData.json
const socialData_namespaceObject = JSON.parse('{"U":[{"id":"1","title":"Github","link":"https://github.com/ColebournS"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/sam-colebourn/"},{"id":"5","title":"Email","link":"mailto:sam.colebourn@gmail.com"}]}');
;// CONCATENATED MODULE: ./components/Socials/index.js




const Socials = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${className} flex flex-wrap mob:flex-nowrap link`,
        children: socialData_namespaceObject.U.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                onClick: ()=>window.open(social.link)
                ,
                children: social.title
            }, index)
        )
    });
};
/* harmony default export */ const components_Socials = (Socials);


/***/ })

};
;