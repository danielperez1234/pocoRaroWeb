(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 8154:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__montse_7f1301', '__montse_Fallback_7f1301'"},
	"className": "__className_7f1301",
	"variable": "__variable_7f1301"
};


/***/ }),

/***/ 9474:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "contacto_title__NVJeX",
	"stack": "contacto_stack__zLj1k",
	"submit": "contacto_submit__h4_m4",
	"text_input": "contacto_text_input__b33SQ",
	"title_input": "contacto_title_input__Kkq7G",
	"nuestros": "contacto_nuestros__lC_Dx",
	"servicios": "contacto_servicios__Ki_d_",
	"img": "contacto_img__EeniS",
	"contenido": "contacto_contenido__dVNBc"
};


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Contacto)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"pages\\contacto.js","import":"","arguments":[{"src":[{"path":"./fonts/Montserrat-Medium.ttf","weight":"500"},{"path":"./fonts/Montserrat-SemiBold.ttf","weight":"600"},{"path":"./fonts/Montserrat-Bold.ttf","weight":"700"}],"display":"swap","variable":"--font-montse"}],"variableName":"montse"}
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_ = __webpack_require__(8154);
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default = /*#__PURE__*/__webpack_require__.n(Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/contacto.module.css
var contacto_module = __webpack_require__(9474);
var contacto_module_default = /*#__PURE__*/__webpack_require__.n(contacto_module);
// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7166);
;// CONCATENATED MODULE: ./pages/contacto.js






function Contacto() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: (Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default()).className,
        style: {
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(contacto_module_default()).contenido} row`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `${(contacto_module_default()).title} col-md-8 col-sm-12`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: (contacto_module_default()).stack,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (contacto_module_default()).nuestros,
                                            children: [
                                                " ",
                                                "NOS ",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                "ENCANTAR\xcdA",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (contacto_module_default()).servicios,
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "SABER M\xc1S"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    width: 600,
                                                    height: 500,
                                                    alt: "rayon",
                                                    className: (contacto_module_default()).img,
                                                    src: "/rayon_contacto_saber.svg"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                " "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    children: [
                                        "DE TI",
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        className: `${(contacto_module_default()).formulario} col-md-4 col-sm-12`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "nombre"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                placeholder: "nombre",
                                                className: `${(contacto_module_default()).text_input} `
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "tel\xe9fono/celular"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                placeholder: "telefono",
                                                className: `${(contacto_module_default()).text_input} col-md-6`
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (contacto_module_default()).title_input,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "correo electr\xf3nico"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "text",
                                        placeholder: "correo",
                                        className: `${(contacto_module_default()).text_input} col-12`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (contacto_module_default()).title_input,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "mensaje"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                        type: "text",
                                        className: `${(contacto_module_default()).text_input} col-12`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "submit",
                                    value: "enviar",
                                    className: `${(contacto_module_default()).submit} `
                                })
                            }),
                            " "
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fcontacto&absolutePagePath=private-next-pages%2Fcontacto.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,166], () => (__webpack_exec__(2185)));
module.exports = __webpack_exports__;

})();