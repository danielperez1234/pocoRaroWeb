"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 3558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/logo.svg
var logo = __webpack_require__(4123);
// EXTERNAL MODULE: ./public/Menu.png
var Menu = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/headerV2.js







function HeaderV2({ onPress  }) {
    return /*#__PURE__*/ _jsx("header", {
        className: "background",
        children: /*#__PURE__*/ _jsxs("nav", {
            className: "navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            className: "navbar-brand",
                            href: "#",
                            children: "Default Color"
                        }),
                        /*#__PURE__*/ _jsx("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbar-default",
                            "aria-controls": "navbar-default",
                            "aria-expanded": "true",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ _jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "navbar-collapse collapse show",
                            id: "navbar-default",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "navbar-collapse-header",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-6 collapse-brand",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "javascript:void(0)",
                                                    children: /*#__PURE__*/ _jsx("img", {
                                                        src: "https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/brand/blue.png"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-6 collapse-close",
                                                children: /*#__PURE__*/ _jsxs("button", {
                                                    type: "button",
                                                    className: "navbar-toggler",
                                                    "data-toggle": "collapse",
                                                    "data-target": "#navbar-default",
                                                    "aria-controls": "navbar-default",
                                                    "aria-expanded": "true",
                                                    "aria-label": "Toggle navigation",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {}),
                                                        /*#__PURE__*/ _jsx("span", {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    className: "navbar-nav ml-lg-auto",
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ _jsxs("a", {
                                                className: "nav-link nav-link-icon",
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ _jsx("i", {
                                                        className: "ni ni-favourite-28"
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none",
                                                        children: "Discover"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ _jsxs("a", {
                                                className: "nav-link nav-link-icon",
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ _jsx("i", {
                                                        className: "ni ni-notification-70"
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none",
                                                        children: "Profile"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "nav-item dropdown",
                                            children: [
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "nav-link nav-link-icon",
                                                    href: "#",
                                                    id: "navbar-default_dropdown_1",
                                                    role: "button",
                                                    "data-toggle": "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "ni ni-settings-gear-65"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "nav-link-inner--text d-lg-none",
                                                            children: "Settings"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "dropdown-menu dropdown-menu-right",
                                                    "aria-labelledby": "navbar-default_dropdown_1",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("a", {
                                                            className: "dropdown-item",
                                                            href: "#",
                                                            children: "Action"
                                                        }),
                                                        /*#__PURE__*/ _jsx("a", {
                                                            className: "dropdown-item",
                                                            href: "#",
                                                            children: "Another action"
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "dropdown-divider"
                                                        }),
                                                        /*#__PURE__*/ _jsx("a", {
                                                            className: "dropdown-item",
                                                            href: "#",
                                                            children: "Something else here"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("link", {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                    crossOrigin: "anonymous"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7166);
;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        style: {
            backgroundColor: "#341F07"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "footer row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "columnas_footer row col-md-8 col-sm-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "columna_footer col-md-5 col-sm-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: "Redes Sociales"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://www.instagram.com/pocoraro.estudio/",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "red_social",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/instagram.png",
                                                width: 30,
                                                height: 30,
                                                priority: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "pocoraro.estudio"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://www.pinterest.com.mx/pocoraroestuido/",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "red_social",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/pinterest.png",
                                                width: 30,
                                                height: 30,
                                                priority: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "pocoraroestudio"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "columna_footer col-md-4 col-sm-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: "Contacto"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: "pocoraro.estudio@gmail.com"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: "4776716277"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    className: "aviso-privacidad col-md-3 col-sm-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/aviso",
                        children: "Aviso de Privacidad"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_document.js


// import Header from '../components/header'




function Document() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(next_document.Head, {
                children: /*#__PURE__*/ jsx_runtime.jsx("link", {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                        crossOrigin: "anonymous",
                        async: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,859,166], () => (__webpack_exec__(3558)));
module.exports = __webpack_exports__;

})();