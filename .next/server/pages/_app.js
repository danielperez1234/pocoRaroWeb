(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3176:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__scratchy_69e5c0', '__scratchy_Fallback_69e5c0'","fontWeight":800},
	"className": "__className_69e5c0",
	"variable": "__variable_69e5c0"
};


/***/ }),

/***/ 9109:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__montse_7f1301', '__montse_Fallback_7f1301'"},
	"className": "__className_7f1301",
	"variable": "__variable_7f1301"
};


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ RootLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"pages\\_app.js","import":"","arguments":[{"src":[{"path":"./fonts/Montserrat-Medium.ttf","weight":"500"},{"path":"./fonts/Montserrat-SemiBold.ttf","weight":"600"},{"path":"./fonts/Montserrat-Bold.ttf","weight":"700"}],"display":"swap","variable":"--font-montse"}],"variableName":"montse"}
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_ = __webpack_require__(9109);
var Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default = /*#__PURE__*/__webpack_require__.n(Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"pages\\_app.js","import":"","arguments":[{"src":"./fonts/Scratchy.ttf","weight":"800","variable":"--font-scratchy"}],"variableName":"scratchy"}
var Scratchy_ttf_weight_800_variable_font_scratchy_variableName_scratchy_ = __webpack_require__(3176);
var Scratchy_ttf_weight_800_variable_font_scratchy_variableName_scratchy_default = /*#__PURE__*/__webpack_require__.n(Scratchy_ttf_weight_800_variable_font_scratchy_variableName_scratchy_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(5931);
;// CONCATENATED MODULE: ./pages/_app.js





// const scratchy = localFont({
//   src: './fonts/Scratchy.ttf',
//   weight: '800',
//   variable: '--font-scratchy'
// })
function RootLayout({ Component , children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            className: `${(Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default()).className} ${(Montserrat_Bold_ttf_weight_700_display_swap_variable_font_montse_variableName_montse_default()).variable} ${(Scratchy_ttf_weight_800_variable_font_scratchy_variableName_scratchy_default()).variable}`,
            ...children
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



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
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(3568)));
module.exports = __webpack_exports__;

})();