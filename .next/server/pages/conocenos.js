(() => {
var exports = {};
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 5653:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__montse_7f1301', '__montse_Fallback_7f1301'"},
	"className": "__className_7f1301",
	"variable": "__variable_7f1301"
};


/***/ }),

/***/ 9733:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "conocenos_banner__4yprY",
	"conocenos_container": "conocenos_conocenos_container__9DpB8",
	"image": "conocenos_image__NKebS",
	"texto": "conocenos_texto__92drP",
	"textinterno": "conocenos_textinterno__gLFOm",
	"span_stack": "conocenos_span_stack__akvuL",
	"span_img_circulo": "conocenos_span_img_circulo__0XhA5",
	"span_img_underline": "conocenos_span_img_underline__GtkoG"
};


/***/ }),

/***/ 4924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Conocenos)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"pages\\conocenos.jsx","import":"","arguments":[{"src":[{"path":"./fonts/Montserrat-Medium.ttf","weight":"500"},{"path":"./fonts/Montserrat-SemiBold.ttf","weight":"600"},{"path":"./fonts/Montserrat-Bold.ttf","weight":"700"}],"display":"swap","variable":"--font-montse"}],"variableName":"montse"}
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_ = __webpack_require__(5653);
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default = /*#__PURE__*/__webpack_require__.n(Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/conocenos.module.css
var conocenos_module = __webpack_require__(9733);
var conocenos_module_default = /*#__PURE__*/__webpack_require__.n(conocenos_module);
// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7166);
;// CONCATENATED MODULE: ./pages/conocenos.jsx







function Conocenos() {
    var tamanoPantalla = window.innerWidth;
    var banner = "";
    if (tamanoPantalla < 600) {
        banner = "/banners/phone.svg";
    } else if (tamanoPantalla < 960) {
        banner = "/banners/tablet.svg";
    } else {
        banner = "/banners/web.svg";
    }
    const [width, setWidth] = (0,external_react_.useState)(0.0);
    var [bannerRoute, setBanner] = (0,external_react_.useState)(banner);
    const handleResize = ()=>{
        console.log(width);
        if (width < 601) {
            setBanner("/banners/phone.svg");
        } else if (width < 960) {
            setBanner("/banners/tablet.svg");
        } else {
            setBanner("/banners/web.svg");
        }
        return setWidth(window.innerWidth);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: (Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                className: (conocenos_module_default()).banner,
                src: bannerRoute,
                width: 5000,
                height: 5000,
                alt: "banner"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (conocenos_module_default()).conocenos_container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (conocenos_module_default()).image,
                        src: "estrella_feliz.svg",
                        alt: "estrella_feli",
                        height: 300,
                        width: 300,
                        priority: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: (conocenos_module_default()).texto,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: (conocenos_module_default()).textinterno,
                                children: "nos apasiona"
                            }),
                            " crear, transformar, hacer y deshacer.",
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: (conocenos_module_default()).textinterno,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: (conocenos_module_default()).span_stack,
                                        children: [
                                            "Siempre",
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/rayon_conocenos_simpre.svg",
                                                width: 1000,
                                                className: (conocenos_module_default()).span_img_underline
                                            })
                                        ]
                                    }),
                                    "buscando algo especial, extraordinario, honesto, efectivo, sin temerle",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: (conocenos_module_default()).span_stack,
                                        children: [
                                            "nunca",
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/rayon_conocenos_nunca.svg",
                                                width: 1000,
                                                className: (conocenos_module_default()).span_img_underline
                                            })
                                        ]
                                    }),
                                    " ",
                                    "a lo ",
                                    `(un)`
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: `${(conocenos_module_default()).span_stack} ${(conocenos_module_default()).textinterno}`,
                                children: [
                                    "pocoraro.",
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/circulo_conocenos.svg",
                                        width: 1000,
                                        className: (conocenos_module_default()).span_img_circulo
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fconocenos&absolutePagePath=private-next-pages%2Fconocenos.jsx&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,166], () => (__webpack_exec__(4924)));
module.exports = __webpack_exports__;

})();