"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 9439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Menu.f0377dbd.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjklEQVR42k3MvwtBUQAFYJuBMihlYVF2DBZlMclgIULiJU9+9CYlZVEm/mbfrffq3fo6t3NPt5CdbrNYotJDlvMPE2UsV+w4cdf95DgMhlw5cuhJGTFzb4TBiDMRsXIn51xIwqDPiy1Tg7XccKMTBgMe7FmlP0R8WIZBKy2ffN3fMmFBrZA/iqpBW9az7g9ulSWGtcdGhQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.2785d3c9.svg","height":435,"width":2000,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/logo.svg
var logo = __webpack_require__(4123);
// EXTERNAL MODULE: ./public/Menu.png
var Menu = __webpack_require__(9439);
;// CONCATENATED MODULE: ./public/exit.png
/* harmony default export */ const exit = ({"src":"/_next/static/media/exit.fb68f40f.png","height":81,"width":82,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42i2MLQpCQRSFL4KI2WISLAaDYLCKIGgWsboBu9HyxPRAQQWZoiAYRDG9BVhMwsweZjYwdwV+yAycOff83Csa3CQGd4Rr6p0ktNTbLzyS6G0G1ogMs0u5riygV/BM+CoIQ9ChaJjf0bs2/g5dFQIBTbbvhHsCQ+GjwTZEeLQo/HGj+CC84F3hcSq4EsaBjR684UKBtwBbdF8wck7PwZl5AAtYUjjBL8F8MhRgyiygnHioweU/w8q7RvNYHHEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/header.js







function Header() {
    const [show, setShow] = (0,external_react_.useState)(false);
    const closeHandler = (e)=>{
        setShow(false);
    };
    const menuHandler = (e)=>{
        console.log("press");
        setShow(true);
    };
    (0,external_react_.useEffect)(()=>{
        console.log("hola");
    }, [
        show
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    visibility: show ? "visible" : "hidden",
                    opacity: show ? "1" : "0",
                    zIndex: "8"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "card_menu cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "close_menu",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                onClick: closeHandler,
                                className: "exit",
                                src: exit.src,
                                width: 50,
                                height: 50,
                                alt: "exit"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-menu-links",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/conocenos",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "navbar_vertical",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "hl2",
                                            children: "Con\xf3cenos"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/servicios",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "hl2",
                                            children: "Nuestros servicios"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/equipo",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "hl2",
                                            children: "Equipo pocoraro"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/contacto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "hl2",
                                            children: "Contacto"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `contenedor ${"header_style"} row`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "col-md-3 col-sm-6 col-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "logo_nav",
                            src: logo/* default.src */.Z.src,
                            width: 300,
                            height: 100,
                            alt: "imagen logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sandwich col-sm-6 col-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                onClick: menuHandler,
                                className: "snack cursor-pointer",
                                src: Menu/* default.src */.Z.src,
                                width: 50,
                                height: 50,
                                alt: "imagen logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "navbar-cust col-md-9 col-sm-12 col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/conocenos",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "hl2",
                                        children: "Con\xf3cenos"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/servicios",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "hl2",
                                        children: "Nuestros servicios"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/equipo",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "hl2",
                                        children: "Equipo pocoraro"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/contacto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "hl2",
                                        children: "Contacto"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;