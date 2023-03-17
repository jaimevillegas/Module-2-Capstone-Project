"use strict";
(self["webpackChunknasaverse"] = self["webpackChunknasaverse"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/loader.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/loader.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#loader-container {\n  width: 100%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  margin: 10rem auto;\n  display: none;\n}\n\n.loader {\n  --cell-size: 52px;\n  --cell-spacing: 1px;\n  --cells: 3;\n  --total-size:\n    calc(\n      var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing))\n    );\n\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--total-size);\n  height: var(--total-size);\n}\n\n.cell {\n  flex: 0 0 var(--cell-size);\n  margin: var(--cell-spacing);\n  background-color: transparent;\n  box-sizing: border-box;\n  border-radius: 4px;\n  animation: 1.5s ripple ease infinite;\n}\n\n.cell.d-1 {\n  animation-delay: 100ms;\n}\n\n.cell.d-2 {\n  animation-delay: 200ms;\n}\n\n.cell.d-3 {\n  animation-delay: 300ms;\n}\n\n.cell.d-4 {\n  animation-delay: 400ms;\n}\n\n.cell:nth-child(1) {\n  --cell-color: #144272;\n}\n\n.cell:nth-child(2) {\n  --cell-color: #104781;\n}\n\n.cell:nth-child(3) {\n  --cell-color: #0f55a0;\n}\n\n.cell:nth-child(4) {\n  --cell-color: #105bac;\n}\n\n.cell:nth-child(5) {\n  --cell-color: #1362b6;\n}\n\n.cell:nth-child(6) {\n  --cell-color: #106dd1;\n}\n\n.cell:nth-child(7) {\n  --cell-color: #0d72df;\n}\n\n.cell:nth-child(8) {\n  --cell-color: #0b71df;\n}\n\n.cell:nth-child(9) {\n  --cell-color: #0b81ff;\n}\n\n/* Animation */\n@keyframes ripple {\n  0% {\n    background-color: transparent;\n  }\n\n  30% {\n    background-color: var(--cell-color);\n  }\n\n  60% {\n    background-color: transparent;\n  }\n\n  100% {\n    background-color: transparent;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/loader.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV;;;KAGG;;EAEH,aAAa;EACb,eAAe;EACf,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,cAAc;AACd;EACE;IACE,6BAA6B;EAC/B;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":["#loader-container {\n  width: 100%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  margin: 10rem auto;\n  display: none;\n}\n\n.loader {\n  --cell-size: 52px;\n  --cell-spacing: 1px;\n  --cells: 3;\n  --total-size:\n    calc(\n      var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing))\n    );\n\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--total-size);\n  height: var(--total-size);\n}\n\n.cell {\n  flex: 0 0 var(--cell-size);\n  margin: var(--cell-spacing);\n  background-color: transparent;\n  box-sizing: border-box;\n  border-radius: 4px;\n  animation: 1.5s ripple ease infinite;\n}\n\n.cell.d-1 {\n  animation-delay: 100ms;\n}\n\n.cell.d-2 {\n  animation-delay: 200ms;\n}\n\n.cell.d-3 {\n  animation-delay: 300ms;\n}\n\n.cell.d-4 {\n  animation-delay: 400ms;\n}\n\n.cell:nth-child(1) {\n  --cell-color: #144272;\n}\n\n.cell:nth-child(2) {\n  --cell-color: #104781;\n}\n\n.cell:nth-child(3) {\n  --cell-color: #0f55a0;\n}\n\n.cell:nth-child(4) {\n  --cell-color: #105bac;\n}\n\n.cell:nth-child(5) {\n  --cell-color: #1362b6;\n}\n\n.cell:nth-child(6) {\n  --cell-color: #106dd1;\n}\n\n.cell:nth-child(7) {\n  --cell-color: #0d72df;\n}\n\n.cell:nth-child(8) {\n  --cell-color: #0b71df;\n}\n\n.cell:nth-child(9) {\n  --cell-color: #0b81ff;\n}\n\n/* Animation */\n@keyframes ripple {\n  0% {\n    background-color: transparent;\n  }\n\n  30% {\n    background-color: var(--cell-color);\n  }\n\n  60% {\n    background-color: transparent;\n  }\n\n  100% {\n    background-color: transparent;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/aqua.ttf */ "./src/assets/fonts/aqua.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/earth.jpg */ "./src/assets/images/earth.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Aqua';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n}\n\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #205295;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n:root {\n  --primary: #0a2647;\n  --secondary: #144272;\n  --third: #205295;\n  --fourth: #2c74b3;\n  --light-gray: #e2e2e2;\n  --dark: #000000a8;\n  --placeholder: #00000080;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  position: relative;\n}\n\nbody {\n  font-family: 'Aqua', sans-serif;\n  background-color: var(--primary);\n  color: var(--light-gray);\n  font-size: 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  height: 100vh;\n  overflow: hidden;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  backdrop-filter: blur(0.2rem);\n}\n\nheader ul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\nheader a {\n  text-decoration: none;\n  color: var(--light-gray);\n  font-size: 1.2rem;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.5rem 2rem;\n  z-index: 100;\n}\n\nh1 span {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.menu-items {\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s;\n  padding: 0.5rem 1rem;\n  border: none;\n  cursor: pointer;\n}\n\n.menu-items:hover {\n  overflow: hidden;\n  transform: scale(1.1);\n  box-shadow: 4px 5px 17px -4px var(--third);\n}\n\n.menu-items::before {\n  content: '';\n  position: absolute;\n  left: -50px;\n  top: 0;\n  width: 0;\n  height: 100%;\n  background-color: var(--secondary);\n  transform: skewX(45deg);\n  z-index: -1;\n  transition: width 0.5s;\n}\n\n.menu-items:hover::before {\n  width: 250%;\n}\n\n.active {\n  display: inline-block;\n  color: var(--fourth);\n  font-size: 0.8rem;\n  font-weight: bold;\n  transform: translateY(-0.5rem) translateX(-0.5rem);\n}\n\n.content-wrapper {\n  height: 100%;\n  overflow: auto;\n  padding-bottom: 5rem;\n}\n\n#publish-comment-button {\n  margin-top: 20px;\n  padding: 1.3em 3em;\n  width: min-content;\n  text-align: center;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: 500;\n  color: #000;\n  background-color: #fff;\n  border: none;\n  border-radius: 45px;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n}\n\n#publish-comment-button:hover {\n  background-color: var(--fourth);\n  box-shadow: 0 15px 20px var(--secondary);\n  color: #fff;\n  transform: translateY(-7px);\n}\n\n#publish-comment-button:active {\n  transform: translateY(-1px);\n}\n\n#cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  margin: 1rem;\n  margin-bottom: 10rem;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 25rem;\n  width: 25rem;\n  overflow: hidden;\n  background-color: var(--placeholder);\n  backdrop-filter: blur(0.1rem);\n  opacity: 0;\n  animation: fade-in 0.3s linear 1 forwards;\n  border-radius: 8px;\n  box-shadow: 2px 2px 8px black;\n}\n\n.card img {\n  height: 100%;\n}\n\n.card-description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: var(--dark);\n  width: 100%;\n  min-height: 30%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 1rem;\n  gap: 1rem;\n  cursor: default;\n  font-size: 0.9rem;\n  line-height: 1rem;\n}\n\n.card-description:hover {\n  backdrop-filter: blur(5px);\n}\n\n.fa-comment:hover {\n  color: var(--third);\n}\n\n.fa-heart:hover {\n  color: red;\n}\n\n.pulse {\n  animation: pulse 1s alternate infinite;\n}\n\n.interactions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.icon {\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.card h2 {\n  text-align: center;\n  color: var(--light-gray);\n}\n\n.likes-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#load-more {\n  background-color: transparent;\n  z-index: 10;\n  font-size: 1rem;\n  color: var(--light-gray);\n  margin: 5rem auto;\n  display: none;\n}\n\n.popup-comments-back {\n  display: none;\n  position: fixed;\n  top: 0;\n  backdrop-filter: blur(10px);\n  background-color: #3d4b5f7c;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  z-index: 100000;\n}\n\n.popup-comments {\n  box-shadow: 4px 4px 8px black;\n  background-color: var(--primary);\n  color: var(--light-gray);\n  display: block;\n  z-index: 200000;\n  border-radius: 8px;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90vh;\n  padding: 40px;\n  overflow-y: auto;\n}\n\n.popup-comments .fa-circle-xmark {\n  font-size: 2rem;\n  position: fixed;\n  right: 10%;\n  top: 10%;\n  cursor: pointer;\n  color: var(--light-gray);\n}\n\n.popup-comments .fa-circle-xmark:hover {\n  color: var(--fourth);\n}\n\n#image-title {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 2rem;\n  color: var(--fourth);\n}\n\n.popup-comments img {\n  display: block;\n  max-height: 400px;\n  max-width: 90%;\n  margin: 50px auto;\n  border-radius: 4px;\n  box-shadow: 2px 2px 8px black;\n}\n\n.popup-comments p {\n  color: var(--light-gray);\n  line-height: 24px;\n  padding-top: 20px;\n  margin: 0 auto;\n  width: 80%;\n  text-align: center;\n}\n\n.comments-title {\n  color: var(--fourth);\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 3rem;\n  font-size: 2rem;\n}\n\n.comments-wrapper {\n  color: var(--fourth);\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.comments-wrapper h2 {\n  margin-bottom: 1rem;\n}\n\n.comment-list {\n  width: 40%;\n  padding: 20px;\n}\n\n.comment-list li {\n  list-style: none;\n  padding: 10px;\n}\n\n#comment-content {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\nform {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n}\n\nform input {\n  border: 1px solid black;\n  border-radius: 4px;\n  font-size: 1rem;\n  padding: 10px;\n  font-family: 'Aqua', sans-serif;\n}\n\nform textarea {\n  margin-top: 15px;\n  height: 80px;\n  border: 1px solid black;\n  border-radius: 4px;\n  font-size: 1rem;\n  padding: 10px;\n  font-family: 'Aqua', sans-serif;\n}\n\nform button {\n  padding: 15px;\n  width: 40%;\n  margin: auto;\n  margin-top: 15px;\n  font-family: 'Aqua', sans-serif;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.input-wrapper input {\n  background-color: #eee;\n  border: none;\n  padding: 1rem;\n  font-size: 1rem;\n  width: 100%;\n  border-radius: 1rem;\n  color: lightcoral;\n  box-shadow: 0 0.4rem #dfd9d9;\n  cursor: pointer;\n}\n\n.input-wrapper textarea {\n  background-color: #eee;\n  margin-top: 28px;\n  border: none;\n  padding: 1rem;\n  font-size: 1rem;\n  width: 100%;\n  border-radius: 1rem;\n  color: lightcoral;\n  box-shadow: 0 0.4rem #dfd9d9;\n  cursor: pointer;\n}\n\n.input-wrapper input:focus {\n  outline-color: var(--fourth);\n}\n\n.input-wrapper textarea:focus {\n  outline-color: var(--fourth);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  padding: 1rem;\n  width: 100%;\n  background-color: var(--dark);\n  backdrop-filter: blur(0.3rem);\n  margin-top: 2rem;\n}\n\n@keyframes pulse {\n  from {\n    background-color: var(--placeholder);\n  }\n\n  to {\n    background-color: var(--dark);\n  }\n}\n\n@keyframes fade-in {\n  to {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,gCAAgC;EAChC,wBAAwB;EACxB,eAAe;EACf,yDAAkD;EAClD,0BAA0B;EAC1B,4BAA4B;EAC5B,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,OAAO;EACP,WAAW;EACX,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,kCAAkC;EAClC,uBAAuB;EACvB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,iBAAiB;EACjB,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,qBAAqB;EACrB,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,yCAAyC;EACzC,4BAA4B;EAC5B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,wCAAwC;EACxC,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;EACpC,6BAA6B;EAC7B,UAAU;EACV,yCAAyC;EACzC,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,6BAA6B;EAC7B,WAAW;EACX,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,2BAA2B;EAC3B,2BAA2B;EAC3B,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,wBAAwB;EACxB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,UAAU;EACV,QAAQ;EACR,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,cAAc;EACd,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE;IACE,oCAAoC;EACtC;;EAEA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["@font-face {\n  font-family: 'Aqua';\n  src: url('./assets/fonts/aqua.ttf');\n  font-weight: normal;\n}\n\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #205295;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n:root {\n  --primary: #0a2647;\n  --secondary: #144272;\n  --third: #205295;\n  --fourth: #2c74b3;\n  --light-gray: #e2e2e2;\n  --dark: #000000a8;\n  --placeholder: #00000080;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  position: relative;\n}\n\nbody {\n  font-family: 'Aqua', sans-serif;\n  background-color: var(--primary);\n  color: var(--light-gray);\n  font-size: 1rem;\n  background-image: url('./assets/images/earth.jpg');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  height: 100vh;\n  overflow: hidden;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  backdrop-filter: blur(0.2rem);\n}\n\nheader ul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\nheader a {\n  text-decoration: none;\n  color: var(--light-gray);\n  font-size: 1.2rem;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.5rem 2rem;\n  z-index: 100;\n}\n\nh1 span {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.menu-items {\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s;\n  padding: 0.5rem 1rem;\n  border: none;\n  cursor: pointer;\n}\n\n.menu-items:hover {\n  overflow: hidden;\n  transform: scale(1.1);\n  box-shadow: 4px 5px 17px -4px var(--third);\n}\n\n.menu-items::before {\n  content: '';\n  position: absolute;\n  left: -50px;\n  top: 0;\n  width: 0;\n  height: 100%;\n  background-color: var(--secondary);\n  transform: skewX(45deg);\n  z-index: -1;\n  transition: width 0.5s;\n}\n\n.menu-items:hover::before {\n  width: 250%;\n}\n\n.active {\n  display: inline-block;\n  color: var(--fourth);\n  font-size: 0.8rem;\n  font-weight: bold;\n  transform: translateY(-0.5rem) translateX(-0.5rem);\n}\n\n.content-wrapper {\n  height: 100%;\n  overflow: auto;\n  padding-bottom: 5rem;\n}\n\n#publish-comment-button {\n  margin-top: 20px;\n  padding: 1.3em 3em;\n  width: min-content;\n  text-align: center;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: 500;\n  color: #000;\n  background-color: #fff;\n  border: none;\n  border-radius: 45px;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n}\n\n#publish-comment-button:hover {\n  background-color: var(--fourth);\n  box-shadow: 0 15px 20px var(--secondary);\n  color: #fff;\n  transform: translateY(-7px);\n}\n\n#publish-comment-button:active {\n  transform: translateY(-1px);\n}\n\n#cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  margin: 1rem;\n  margin-bottom: 10rem;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 25rem;\n  width: 25rem;\n  overflow: hidden;\n  background-color: var(--placeholder);\n  backdrop-filter: blur(0.1rem);\n  opacity: 0;\n  animation: fade-in 0.3s linear 1 forwards;\n  border-radius: 8px;\n  box-shadow: 2px 2px 8px black;\n}\n\n.card img {\n  height: 100%;\n}\n\n.card-description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: var(--dark);\n  width: 100%;\n  min-height: 30%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 1rem;\n  gap: 1rem;\n  cursor: default;\n  font-size: 0.9rem;\n  line-height: 1rem;\n}\n\n.card-description:hover {\n  backdrop-filter: blur(5px);\n}\n\n.fa-comment:hover {\n  color: var(--third);\n}\n\n.fa-heart:hover {\n  color: red;\n}\n\n.pulse {\n  animation: pulse 1s alternate infinite;\n}\n\n.interactions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.icon {\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.card h2 {\n  text-align: center;\n  color: var(--light-gray);\n}\n\n.likes-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#load-more {\n  background-color: transparent;\n  z-index: 10;\n  font-size: 1rem;\n  color: var(--light-gray);\n  margin: 5rem auto;\n  display: none;\n}\n\n.popup-comments-back {\n  display: none;\n  position: fixed;\n  top: 0;\n  backdrop-filter: blur(10px);\n  background-color: #3d4b5f7c;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  z-index: 100000;\n}\n\n.popup-comments {\n  box-shadow: 4px 4px 8px black;\n  background-color: var(--primary);\n  color: var(--light-gray);\n  display: block;\n  z-index: 200000;\n  border-radius: 8px;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90vh;\n  padding: 40px;\n  overflow-y: auto;\n}\n\n.popup-comments .fa-circle-xmark {\n  font-size: 2rem;\n  position: fixed;\n  right: 10%;\n  top: 10%;\n  cursor: pointer;\n  color: var(--light-gray);\n}\n\n.popup-comments .fa-circle-xmark:hover {\n  color: var(--fourth);\n}\n\n#image-title {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 2rem;\n  color: var(--fourth);\n}\n\n.popup-comments img {\n  display: block;\n  max-height: 400px;\n  max-width: 90%;\n  margin: 50px auto;\n  border-radius: 4px;\n  box-shadow: 2px 2px 8px black;\n}\n\n.popup-comments p {\n  color: var(--light-gray);\n  line-height: 24px;\n  padding-top: 20px;\n  margin: 0 auto;\n  width: 80%;\n  text-align: center;\n}\n\n.comments-title {\n  color: var(--fourth);\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 3rem;\n  font-size: 2rem;\n}\n\n.comments-wrapper {\n  color: var(--fourth);\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.comments-wrapper h2 {\n  margin-bottom: 1rem;\n}\n\n.comment-list {\n  width: 40%;\n  padding: 20px;\n}\n\n.comment-list li {\n  list-style: none;\n  padding: 10px;\n}\n\n#comment-content {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\nform {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n}\n\nform input {\n  border: 1px solid black;\n  border-radius: 4px;\n  font-size: 1rem;\n  padding: 10px;\n  font-family: 'Aqua', sans-serif;\n}\n\nform textarea {\n  margin-top: 15px;\n  height: 80px;\n  border: 1px solid black;\n  border-radius: 4px;\n  font-size: 1rem;\n  padding: 10px;\n  font-family: 'Aqua', sans-serif;\n}\n\nform button {\n  padding: 15px;\n  width: 40%;\n  margin: auto;\n  margin-top: 15px;\n  font-family: 'Aqua', sans-serif;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.input-wrapper input {\n  background-color: #eee;\n  border: none;\n  padding: 1rem;\n  font-size: 1rem;\n  width: 100%;\n  border-radius: 1rem;\n  color: lightcoral;\n  box-shadow: 0 0.4rem #dfd9d9;\n  cursor: pointer;\n}\n\n.input-wrapper textarea {\n  background-color: #eee;\n  margin-top: 28px;\n  border: none;\n  padding: 1rem;\n  font-size: 1rem;\n  width: 100%;\n  border-radius: 1rem;\n  color: lightcoral;\n  box-shadow: 0 0.4rem #dfd9d9;\n  cursor: pointer;\n}\n\n.input-wrapper input:focus {\n  outline-color: var(--fourth);\n}\n\n.input-wrapper textarea:focus {\n  outline-color: var(--fourth);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  padding: 1rem;\n  width: 100%;\n  background-color: var(--dark);\n  backdrop-filter: blur(0.3rem);\n  margin-top: 2rem;\n}\n\n@keyframes pulse {\n  from {\n    background-color: var(--placeholder);\n  }\n\n  to {\n    background-color: var(--dark);\n  }\n}\n\n@keyframes fade-in {\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/loader.css":
/*!************************!*\
  !*** ./src/loader.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.css */ "./src/loader.css");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils.js */ "./src/modules/utils.js");
/* harmony import */ var _modules_nasaApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nasaApi.js */ "./src/modules/nasaApi.js");
/* harmony import */ var _modules_createCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createCard.js */ "./src/modules/createCard.js");
/* harmony import */ var _modules_cardsCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cardsCounter.js */ "./src/modules/cardsCounter.js");
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/involvementAPI.js");
/* harmony import */ var _modules_combineData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/combineData.js */ "./src/modules/combineData.js");









const fetch = async (options = { title: 'Earth' }, clean = false) => {
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#loader-container').style.display = 'flex';
  if (clean) (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#cards').innerHTML = '';
  const data = await (0,_modules_nasaApi_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  const likes = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__.getLikes)();
  const combined = (0,_modules_combineData_js__WEBPACK_IMPORTED_MODULE_7__["default"])(data, likes);
  return combined;
};

const render = (data, clean) => {
  const container = (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#cards');
  if (clean) container.innerHTML = '';
  const cards = data.map((item, index) => (0,_modules_createCard_js__WEBPACK_IMPORTED_MODULE_4__["default"])(item, index, data));
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#loader-container').style.display = 'none';
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#load-more').style.display = 'block';
  container.append(...cards);
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('.active').textContent = (0,_modules_cardsCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

const loadMore = async () => {
  const currentTitle = (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('.active').parentElement.text.split(' ')[0];
  const currentCarsCount = (0,_modules_cardsCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const pageSize = 20;
  const page = Math.floor(currentCarsCount / pageSize) + 1;
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#load-more').style.display = 'none';
  const newData = await fetch({
    title: currentTitle,
    page_size: pageSize,
    page,
  });
  render(newData);
};

const init = async () => {
  const links = (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', async (ev) => {
      ev.preventDefault();
      (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#load-more').style.display = 'none';
      const title = ev.target.textContent;
      const data = await fetch({ title }, true);
      (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('.active').innerHTML = '';
      (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('.active').classList.remove('active');
      link.firstElementChild.classList.add('active');
      render(data);
    });
  });
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.$)('#load-more').addEventListener('click', () => {
    loadMore();
  });
  const data = await fetch();
  render(data);
};

window.onload = async () => {
  init();
};


/***/ }),

/***/ "./src/involvementAPI.js":
/*!*******************************!*\
  !*** ./src/involvementAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "retreiveData": () => (/* binding */ retreiveData),
/* harmony export */   "submitComment": () => (/* binding */ submitComment)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lYZ9ZtHh76XKuPy6HAWO';
// const itemID = 'test_item_2';

// Retrieve data from the API
const retreiveData = async (itemID) => {
  const response = await fetch(`${url}apps/${appID}/comments?item_id=${itemID}`);
  const data = await response.json();
  return data || [];
};

const submitComment = async (itemID, username, commentDescription) => {
  const response = await fetch(`${url}apps/${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemID,
      username,
      comment: commentDescription,
    }),
  });
  const data = await response.json();
  return data;
};

const addLike = async (itemID) => {
  try {
    const response = await fetch(`${url}apps/${appID}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemID }),
    });
    if (response.ok) {
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    throw new Error('Connection Error: Please check your connection');
  }
};

const getLikes = async (itemID) => {
  // It returns an array of objects with all item ID's. We have to implement a filtering function
  const response = await fetch(`${url}apps/${appID}/likes`);
  const data = await response.json();
  return itemID ? data.find((like) => like.item_id === itemID) : data;
};

// FUNCTION TO ADD A LIKE




/***/ }),

/***/ "./src/modules/cardsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/cardsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");


const counter = (className = 'card') => {
  const cardCount = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.$)(`.${className}`);
  if (cardCount && cardCount.length) {
    return cardCount.length;
  }
  return 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);


/***/ }),

/***/ "./src/modules/combineData.js":
/*!************************************!*\
  !*** ./src/modules/combineData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const combineData = (items = [], likes = []) => items.map((item) => ({
  ...item,
  likes: likes.find((like) => like.item_id === item.nasa_id)?.likes || 0,
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineData);


/***/ }),

/***/ "./src/modules/createCard.js":
/*!***********************************!*\
  !*** ./src/modules/createCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../involvementAPI.js */ "./src/involvementAPI.js");
/* harmony import */ var _updateCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateCard.js */ "./src/modules/updateCard.js");
/* harmony import */ var _createCommentsPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCommentsPopup.js */ "./src/modules/createCommentsPopup.js");





const contentWrapper = document.querySelector('.content-wrapper');

function createCard(item, index, data) {
  const card = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'card pulse' });
  const image = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: item.image,
    alt: item.title,
    onload: () => {
      card.classList.remove('pulse');
    },
  });
  const info = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'card-description' });
  const title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    textContent:
      item.title.trim().length > 20
        ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.trauncateText)(item.title, 22)
        : item.title,
    title: item.title,
  });
  const description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    textContent:
      item.description.length > 155
        ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.trauncateText)(item.description)
        : item.description,
  });
  const interactions = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'interactions' });
  const like = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    class: 'icon',
    innerHTML: `<i class="fa-regular fa-heart"></i> ${item.likes}`,
    onclick: async () => {
      if (!like.getAttribute('disabled')) {
        like.setAttribute('disabled', true);
        const result = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(item.nasa_id);
        if (result.success) {
          data[index] = { ...item, likes: data[index].likes + 1 };
          (0,_updateCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, data[index].likes);
        }
        like.removeAttribute('disabled');
      }
    },
  });
  const comment = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    class: 'icon',
    id: `comments-button-${item.nasa_id}`,
    innerHTML: '<i class="fa-regular fa-comment"></i> ',
  });
  interactions.append(like, comment);
  info.append(title, description, interactions);
  card.append(image, info);

  document.addEventListener('click', (e) => {
    const target = e.target.closest(`#comments-button-${item.nasa_id}`);

    if (target) {
      contentWrapper.append((0,_createCommentsPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"])(item));
    }
  });

  const displayComments = async () => {
    const commentCounter = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.retreiveData)(item.nasa_id);
    if (commentCounter.length === undefined) {
      const numberOfComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
        class: 'comments-counter',
        innerHTML: '0',
      });
      comment.append(numberOfComments);
    } else {
      const numberOfComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
        class: 'comments-counter',
        innerHTML: `${commentCounter.length}`,
      });
      comment.append(numberOfComments);
    }
  };

  displayComments();

  return card;
}


/***/ }),

/***/ "./src/modules/createCommentsPopup.js":
/*!********************************************!*\
  !*** ./src/modules/createCommentsPopup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCommentPopup)
/* harmony export */ });
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../involvementAPI.js */ "./src/involvementAPI.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");
// import { $ } from './utils.js';



function createCommentPopup(item) {
  const popupCommentsBack = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', {
    class: `popup-comments-back popup-comments-back-${item.nasa_id}`,
  });
  const popupComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', { class: 'popup-comments' });
  const image = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {
    src: item.image,
    alt: item.title,
  });
  const imageTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {
    id: 'image-title',
    textContent: item.title,
    title: item.title,
  });
  const closeButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('i', {
    id: 'popup-comments-close-button',
    class: 'fa-regular fa-circle-xmark',
  });
  const imageDescription = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {
    id: 'image-description',
    textContent: item.description,
  });
  const textPhotographer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {
    innerHTML: `Photographer: ${item.photographer}`,
  });

  const commentsWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { class: 'comments-wrapper' });
  const commentList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', { class: 'comment-list' });
  const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('form');
  const addAComment = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', { textContent: 'Add a Comment' });
  const inputUsername = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', {
    class: 'input-username',
    placeholder: 'Your Name',
  });
  const inputDescription = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('textarea', {
    id: 'input-description',
    placeholder: 'Your insights',
  });
  const commentsTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {
    class: 'comments-title',
    innerHTML: '',
  });
  const publishCommentButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', {
    id: 'publish-comment-button',
    textContent: 'Comment',
  });
  form.append(
    addAComment,
    inputUsername,
    inputDescription,
    publishCommentButton,
  );
  commentsWrapper.append(commentList, form);
  popupComments.append(
    image,
    imageTitle,
    closeButton,
    imageDescription,
    textPhotographer,
    commentsTitle,
    commentsWrapper,
  );
  popupCommentsBack.append(popupComments);
  popupCommentsBack.style.display = 'block';

  const displayComments = async () => {
    const commentCounter = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.retreiveData)(item.nasa_id);
    if (commentCounter.length === undefined) {
      const numberOfComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {
        class: 'comments-title',
        innerHTML: 'Comments 0',
      });
      commentsTitle.append(numberOfComments);
    } else {
      const numberOfComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {
        class: 'comments-title',
        innerHTML: `Comments ${commentCounter.length}`,
      });
      commentsTitle.append(numberOfComments);
    }

    const getComments = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.retreiveData)(item.nasa_id);
    commentList.innerHTML = '';
    if (Array.isArray(getComments)) {
      getComments.forEach((commentary) => {
        const commentItem = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
          class: 'commentary-item',
          innerHTML: `
      <span id='comment-date-${item.nasa_id}'>${commentary.creation_date}</span> - 
      <span id='comment-user-${item.nasa_id}'>${commentary.username}</span>
      <div id='comment-content-${item.nasa_id}'>${commentary.comment}</div>
      `,
        });
        commentList.append(commentItem);
      });

      return getComments;
    }
    return 1;
  };

  displayComments();

  document.addEventListener('click', (e) => {
    const target = e.target.closest('#popup-comments-close-button');

    if (target) {
      popupCommentsBack.style.display = 'none';
    }
  });

  document.addEventListener('click', async (e) => {
    const target = e.target.closest('#publish-comment-button');

    if (target) {
      e.preventDefault();
      const nasaID = item.nasa_id;
      const newUser = inputUsername.value;
      const newDescription = inputDescription.value;
      inputUsername.value = '';
      inputDescription.value = '';
      setTimeout(() => {
        displayComments();
      }, '1000');
      await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.submitComment)(nasaID, newUser, newDescription);
    }
  });

  return popupCommentsBack;
}


/***/ }),

/***/ "./src/modules/endpoints.js":
/*!**********************************!*\
  !*** ./src/modules/endpoints.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const base = 'https://images-api.nasa.gov/';
const endpoints = {
  search: (params) => `${base}search?${
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`,
  asset: (id) => `asset/${id}`,
  meta: (id) => `metadata/${id}`,
  caption: (id) => `captions/${id}`,
  album: (name) => `album/${name}`,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endpoints);


/***/ }),

/***/ "./src/modules/nasaApi.js":
/*!********************************!*\
  !*** ./src/modules/nasaApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoints.js */ "./src/modules/endpoints.js");


const getImages = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return `Error: Request failed with status code ${response.status}`;
};

const filterData = async (items = []) => {
  const filtered = [];

  await Promise.all(
    items.map(async ({ href, data = [] }) => {
      const images = {};
      const imageUrls = await getImages(href);
      imageUrls.forEach((url) => {
        if (url.match(/thumb/)) {
          images.thumb = url;
        } else if (url.match(/orig/)) {
          images.main = url;
        } else if (url.match(/medium/)) {
          images.main = url;
        }
      });
      filtered.push({
        title: data[0].title,
        nasa_id: data[0].nasa_id,
        description: data[0].description,
        photographer: data[0].photographer || 'Unknown',
        thumb: images.thumb,
        image: images.main,
      });
    }),
  );

  return filtered;
};

const getData = async (params, configs) => {
  const query = _endpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"].search({
    title: 'mars',
    media_type: 'image',
    page_size: 20,
    ...params,
  });
  try {
    const response = await fetch(query, { ...configs });
    if (response.ok) {
      const data = await response.json();
      return await filterData(data.collection.items);
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } catch (error) {
    throw new Error('Please check your connection');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/modules/updateCard.js":
/*!***********************************!*\
  !*** ./src/modules/updateCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");


const updateCard = (index, likes) => {
  const container = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.$)('#cards');
  const target = container.children[index];
  target.querySelector(
    '.icon',
  ).innerHTML = `<i class="fa-solid fa-heart"></i> ${likes}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCard);


/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "trauncateText": () => (/* binding */ trauncateText)
/* harmony export */ });
const createElement = (tagName = 'div', options = {}) => {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([name, value]) => {
    if (['class', 'id', 'style'].includes(name)) {
      element.setAttribute(name, value);
    } else {
      element[name] = value;
    }
  });
  return element;
};

const $ = (query) => {
  const result = document.querySelectorAll(query);
  return result.length > 1 ? result : result[0];
};

const trauncateText = (text = '', length = 155) => `${text.slice(0, length).trim()}....`;




/***/ }),

/***/ "./src/assets/fonts/aqua.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/aqua.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab628adeb50daa6d86a3.ttf";

/***/ }),

/***/ "./src/assets/images/earth.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/earth.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdff75d94bd6c79d643c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLHFDQUFxQyx3QkFBd0Isd0NBQXdDLHdCQUF3QixHQUFHLHlC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QTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RROztBQUUvQjtBQUNBLG9CQUFvQiw0Q0FBQztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjFCLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNELDZCQUE2Qjs7QUFFeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvbG9hZGVyLmNzcz8yODExIiwid2VicGFjazovL25hc2F2ZXJzZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vc3JjL21vZHVsZXMvY2FyZHNDb3VudGVyLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL3NyYy9tb2R1bGVzL2NvbWJpbmVEYXRhLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vc3JjL21vZHVsZXMvY3JlYXRlQ29tbWVudHNQb3B1cC5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvbW9kdWxlcy9lbmRwb2ludHMuanMiLCJ3ZWJwYWNrOi8vbmFzYXZlcnNlLy4vc3JjL21vZHVsZXMvbmFzYUFwaS5qcyIsIndlYnBhY2s6Ly9uYXNhdmVyc2UvLi9zcmMvbW9kdWxlcy91cGRhdGVDYXJkLmpzIiwid2VicGFjazovL25hc2F2ZXJzZS8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2xvYWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcmVtIGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIC0tY2VsbC1zaXplOiA1MnB4O1xcbiAgLS1jZWxsLXNwYWNpbmc6IDFweDtcXG4gIC0tY2VsbHM6IDM7XFxuICAtLXRvdGFsLXNpemU6XFxuICAgIGNhbGMoXFxuICAgICAgdmFyKC0tY2VsbHMpICogKHZhcigtLWNlbGwtc2l6ZSkgKyAyICogdmFyKC0tY2VsbC1zcGFjaW5nKSlcXG4gICAgKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogdmFyKC0tdG90YWwtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXRvdGFsLXNpemUpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBmbGV4OiAwIDAgdmFyKC0tY2VsbC1zaXplKTtcXG4gIG1hcmdpbjogdmFyKC0tY2VsbC1zcGFjaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFuaW1hdGlvbjogMS41cyByaXBwbGUgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmNlbGwuZC0xIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XFxufVxcblxcbi5jZWxsLmQtMiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG5cXG4uY2VsbC5kLTMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuXFxuLmNlbGwuZC00IHtcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgxKSB7XFxuICAtLWNlbGwtY29sb3I6ICMxNDQyNzI7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgyKSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDQ3ODE7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgzKSB7XFxuICAtLWNlbGwtY29sb3I6ICMwZjU1YTA7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg0KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDViYWM7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg1KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMzYyYjY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg2KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDZkZDE7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg3KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwZDcyZGY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg4KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwYjcxZGY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg5KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwYjgxZmY7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgcmlwcGxlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbG9hZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Y7OztLQUdHOztFQUVILGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGNBQWM7QUFDZDtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xvYWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcmVtIGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIC0tY2VsbC1zaXplOiA1MnB4O1xcbiAgLS1jZWxsLXNwYWNpbmc6IDFweDtcXG4gIC0tY2VsbHM6IDM7XFxuICAtLXRvdGFsLXNpemU6XFxuICAgIGNhbGMoXFxuICAgICAgdmFyKC0tY2VsbHMpICogKHZhcigtLWNlbGwtc2l6ZSkgKyAyICogdmFyKC0tY2VsbC1zcGFjaW5nKSlcXG4gICAgKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogdmFyKC0tdG90YWwtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXRvdGFsLXNpemUpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBmbGV4OiAwIDAgdmFyKC0tY2VsbC1zaXplKTtcXG4gIG1hcmdpbjogdmFyKC0tY2VsbC1zcGFjaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFuaW1hdGlvbjogMS41cyByaXBwbGUgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmNlbGwuZC0xIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XFxufVxcblxcbi5jZWxsLmQtMiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG5cXG4uY2VsbC5kLTMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuXFxuLmNlbGwuZC00IHtcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgxKSB7XFxuICAtLWNlbGwtY29sb3I6ICMxNDQyNzI7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgyKSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDQ3ODE7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgzKSB7XFxuICAtLWNlbGwtY29sb3I6ICMwZjU1YTA7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg0KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDViYWM7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg1KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMzYyYjY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg2KSB7XFxuICAtLWNlbGwtY29sb3I6ICMxMDZkZDE7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg3KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwZDcyZGY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg4KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwYjcxZGY7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCg5KSB7XFxuICAtLWNlbGwtY29sb3I6ICMwYjgxZmY7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgcmlwcGxlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FxdWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2VhcnRoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXF1YSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNTI5NTtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMGEyNjQ3O1xcbiAgLS1zZWNvbmRhcnk6ICMxNDQyNzI7XFxuICAtLXRoaXJkOiAjMjA1Mjk1O1xcbiAgLS1mb3VydGg6ICMyYzc0YjM7XFxuICAtLWxpZ2h0LWdyYXk6ICNlMmUyZTI7XFxuICAtLWRhcms6ICMwMDAwMDBhODtcXG4gIC0tcGxhY2Vob2xkZXI6ICMwMDAwMDA4MDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0FxdWEnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC4ycmVtKTtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDJyZW07XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbmgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW1zOmhvdmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiA0cHggNXB4IDE3cHggLTRweCB2YXIoLS10aGlyZCk7XFxufVxcblxcbi5tZW51LWl0ZW1zOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNTBweDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xcbn1cXG5cXG4ubWVudS1pdGVtczpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAyNTAlO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKSB0cmFuc2xhdGVYKC0wLjVyZW0pO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XFxufVxcblxcbiNwdWJsaXNoLWNvbW1lbnQtYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxLjNlbSAzZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jcHVibGlzaC1jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xcbn1cXG5cXG4jcHVibGlzaC1jb21tZW50LWJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjFyZW0pO1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGxpbmVhciAxIGZvcndhcmRzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggYmxhY2s7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0aW9uOmhvdmVyIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uZmEtY29tbWVudDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGhpcmQpO1xcbn1cXG5cXG4uZmEtaGVhcnQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnB1bHNlIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbn1cXG5cXG4uaW50ZXJhY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbG9hZC1tb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBtYXJnaW46IDVyZW0gYXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cC1jb21tZW50cy1iYWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q0YjVmN2M7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDAwMDA7XFxufVxcblxcbi5wb3B1cC1jb21tZW50cyB7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6LWluZGV4OiAyMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wb3B1cC1jb21tZW50cyAuZmEtY2lyY2xlLXhtYXJrIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxMCU7XFxuICB0b3A6IDEwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzIC5mYS1jaXJjbGUteG1hcms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxufVxcblxcbiNpbWFnZS10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxufVxcblxcbi5wb3B1cC1jb21tZW50cyBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCBibGFjaztcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzIHAge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRzLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb21tZW50cy13cmFwcGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb21tZW50cy13cmFwcGVyIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb21tZW50LWxpc3QgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNjb21tZW50LWNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQXF1YScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmZvcm0gdGV4dGFyZWEge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQXF1YScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiAnQXF1YScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjb2xvcjogbGlnaHRjb3JhbDtcXG4gIGJveC1zaGFkb3c6IDAgMC40cmVtICNkZmQ5ZDk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC13cmFwcGVyIHRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiBsaWdodGNvcmFsO1xcbiAgYm94LXNoYWRvdzogMCAwLjRyZW0gI2RmZDlkOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tZm91cnRoKTtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tZm91cnRoKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuM3JlbSk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlcik7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YseURBQWtEO0VBQ2xELDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7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akM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBcXVhJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9hcXVhLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDUyOTU7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzBhMjY0NztcXG4gIC0tc2Vjb25kYXJ5OiAjMTQ0MjcyO1xcbiAgLS10aGlyZDogIzIwNTI5NTtcXG4gIC0tZm91cnRoOiAjMmM3NGIzO1xcbiAgLS1saWdodC1ncmF5OiAjZTJlMmUyO1xcbiAgLS1kYXJrOiAjMDAwMDAwYTg7XFxuICAtLXBsYWNlaG9sZGVyOiAjMDAwMDAwODA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdBcXVhJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvZWFydGguanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjJyZW0pO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbXM6aG92ZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMTdweCAtNHB4IHZhcigtLXRoaXJkKTtcXG59XFxuXFxuLm1lbnUtaXRlbXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01MHB4O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxufVxcblxcbi5tZW51LWl0ZW1zOmhvdmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDI1MCU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pIHRyYW5zbGF0ZVgoLTAuNXJlbSk7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuI3B1Ymxpc2gtY29tbWVudC1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDEuM2VtIDNlbTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNwdWJsaXNoLWNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxuICBib3gtc2hhZG93OiAwIDE1cHggMjBweCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XFxufVxcblxcbiNwdWJsaXNoLWNvbW1lbnQtYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbiNjYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEuNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhY2Vob2xkZXIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuMXJlbSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuM3MgbGluZWFyIDEgZm9yd2FyZHM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCBibGFjaztcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb246aG92ZXIge1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5mYS1jb21tZW50OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10aGlyZCk7XFxufVxcblxcbi5mYS1oZWFydDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucHVsc2Uge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbi5pbnRlcmFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZCBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5saWtlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsb2FkLW1vcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzLWJhY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDRiNWY3YztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDAwMDtcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzIHtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHotaW5kZXg6IDIwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA1JTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzIC5mYS1jaXJjbGUteG1hcmsge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDEwJTtcXG4gIHRvcDogMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudHMgLmZhLWNpcmNsZS14bWFyazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoKTtcXG59XFxuXFxuI2ltYWdlLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoKTtcXG59XFxuXFxuLnBvcHVwLWNvbW1lbnRzIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudHMgcCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudHMtdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbW1lbnRzLXdyYXBwZXIge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNvbW1lbnRzLXdyYXBwZXIgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2NvbW1lbnQtY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdBcXVhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdBcXVhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdBcXVhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiBsaWdodGNvcmFsO1xcbiAgYm94LXNoYWRvdzogMCAwLjRyZW0gI2RmZDlkOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG1hcmdpbi10b3A6IDI4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XFxuICBib3gtc2hhZG93OiAwIDAuNHJlbSAjZGZkOWQ5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1mb3VydGgpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC4zcmVtKTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2xvYWRlci5jc3MnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvbmFzYUFwaS5qcyc7XG5pbXBvcnQgY3JlYXRlQ2FyZCBmcm9tICcuL21vZHVsZXMvY3JlYXRlQ2FyZC5qcyc7XG5pbXBvcnQgY2FyZHNDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9jYXJkc0NvdW50ZXIuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBjb21iaW5lRGF0YSBmcm9tICcuL21vZHVsZXMvY29tYmluZURhdGEuanMnO1xuXG5jb25zdCBmZXRjaCA9IGFzeW5jIChvcHRpb25zID0geyB0aXRsZTogJ0VhcnRoJyB9LCBjbGVhbiA9IGZhbHNlKSA9PiB7XG4gICQoJyNsb2FkZXItY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgaWYgKGNsZWFuKSAkKCcjY2FyZHMnKS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEob3B0aW9ucyk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgY29tYmluZWQgPSBjb21iaW5lRGF0YShkYXRhLCBsaWtlcyk7XG4gIHJldHVybiBjb21iaW5lZDtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChkYXRhLCBjbGVhbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSAkKCcjY2FyZHMnKTtcbiAgaWYgKGNsZWFuKSBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNhcmRzID0gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBjcmVhdGVDYXJkKGl0ZW0sIGluZGV4LCBkYXRhKSk7XG4gICQoJyNsb2FkZXItY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgJCgnI2xvYWQtbW9yZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXIuYXBwZW5kKC4uLmNhcmRzKTtcbiAgJCgnLmFjdGl2ZScpLnRleHRDb250ZW50ID0gY2FyZHNDb3VudGVyKCk7XG59O1xuXG5jb25zdCBsb2FkTW9yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY3VycmVudFRpdGxlID0gJCgnLmFjdGl2ZScpLnBhcmVudEVsZW1lbnQudGV4dC5zcGxpdCgnICcpWzBdO1xuICBjb25zdCBjdXJyZW50Q2Fyc0NvdW50ID0gY2FyZHNDb3VudGVyKCk7XG4gIGNvbnN0IHBhZ2VTaXplID0gMjA7XG4gIGNvbnN0IHBhZ2UgPSBNYXRoLmZsb29yKGN1cnJlbnRDYXJzQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xuICAkKCcjbG9hZC1tb3JlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IGZldGNoKHtcbiAgICB0aXRsZTogY3VycmVudFRpdGxlLFxuICAgIHBhZ2Vfc2l6ZTogcGFnZVNpemUsXG4gICAgcGFnZSxcbiAgfSk7XG4gIHJlbmRlcihuZXdEYXRhKTtcbn07XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gJCgnLm5hdi1saW5rJyk7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2KSA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnI2xvYWQtbW9yZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb25zdCB0aXRsZSA9IGV2LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh7IHRpdGxlIH0sIHRydWUpO1xuICAgICAgJCgnLmFjdGl2ZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgJCgnLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbGluay5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJlbmRlcihkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG4gICQoJyNsb2FkLW1vcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkTW9yZSgpO1xuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCk7XG4gIHJlbmRlcihkYXRhKTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGluaXQoKTtcbn07XG4iLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XG5jb25zdCBhcHBJRCA9ICdsWVo5WnRIaDc2WEt1UHk2SEFXTyc7XG4vLyBjb25zdCBpdGVtSUQgPSAndGVzdF9pdGVtXzInO1xuXG4vLyBSZXRyaWV2ZSBkYXRhIGZyb20gdGhlIEFQSVxuY29uc3QgcmV0cmVpdmVEYXRhID0gYXN5bmMgKGl0ZW1JRCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH1hcHBzLyR7YXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSUR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhIHx8IFtdO1xufTtcblxuY29uc3Qgc3VibWl0Q29tbWVudCA9IGFzeW5jIChpdGVtSUQsIHVzZXJuYW1lLCBjb21tZW50RGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9YXBwcy8ke2FwcElEfS9jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlELFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50OiBjb21tZW50RGVzY3JpcHRpb24sXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaXRlbUlEKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9YXBwcy8ke2FwcElEfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JRCB9KSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gRXJyb3I6IFBsZWFzZSBjaGVjayB5b3VyIGNvbm5lY3Rpb24nKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoaXRlbUlEKSA9PiB7XG4gIC8vIEl0IHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFsbCBpdGVtIElEJ3MuIFdlIGhhdmUgdG8gaW1wbGVtZW50IGEgZmlsdGVyaW5nIGZ1bmN0aW9uXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfWFwcHMvJHthcHBJRH0vbGlrZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGl0ZW1JRCA/IGRhdGEuZmluZCgobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBpdGVtSUQpIDogZGF0YTtcbn07XG5cbi8vIEZVTkNUSU9OIFRPIEFERCBBIExJS0VcblxuZXhwb3J0IHtcbiAgcmV0cmVpdmVEYXRhLCBzdWJtaXRDb21tZW50LCBnZXRMaWtlcywgYWRkTGlrZSxcbn07XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGNvdW50ZXIgPSAoY2xhc3NOYW1lID0gJ2NhcmQnKSA9PiB7XG4gIGNvbnN0IGNhcmRDb3VudCA9ICQoYC4ke2NsYXNzTmFtZX1gKTtcbiAgaWYgKGNhcmRDb3VudCAmJiBjYXJkQ291bnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhcmRDb3VudC5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuZXhwb3J0IGRlZmF1bHQgY291bnRlcjtcbiIsImNvbnN0IGNvbWJpbmVEYXRhID0gKGl0ZW1zID0gW10sIGxpa2VzID0gW10pID0+IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgLi4uaXRlbSxcbiAgbGlrZXM6IGxpa2VzLmZpbmQoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gaXRlbS5uYXNhX2lkKT8ubGlrZXMgfHwgMCxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZURhdGE7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB0cmF1bmNhdGVUZXh0IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBhZGRMaWtlLCByZXRyZWl2ZURhdGEgfSBmcm9tICcuLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgdXBkYXRlQ2FyZCBmcm9tICcuL3VwZGF0ZUNhcmQuanMnO1xuaW1wb3J0IGNyZWF0ZUNvbW1lbnRQb3B1cCBmcm9tICcuL2NyZWF0ZUNvbW1lbnRzUG9wdXAuanMnO1xuXG5jb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtLCBpbmRleCwgZGF0YSkge1xuICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NhcmQgcHVsc2UnIH0pO1xuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICBzcmM6IGl0ZW0uaW1hZ2UsXG4gICAgYWx0OiBpdGVtLnRpdGxlLFxuICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xuICAgIH0sXG4gIH0pO1xuICBjb25zdCBpbmZvID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NhcmQtZGVzY3JpcHRpb24nIH0pO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywge1xuICAgIHRleHRDb250ZW50OlxuICAgICAgaXRlbS50aXRsZS50cmltKCkubGVuZ3RoID4gMjBcbiAgICAgICAgPyB0cmF1bmNhdGVUZXh0KGl0ZW0udGl0bGUsIDIyKVxuICAgICAgICA6IGl0ZW0udGl0bGUsXG4gICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gIH0pO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7XG4gICAgdGV4dENvbnRlbnQ6XG4gICAgICBpdGVtLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDE1NVxuICAgICAgICA/IHRyYXVuY2F0ZVRleHQoaXRlbS5kZXNjcmlwdGlvbilcbiAgICAgICAgOiBpdGVtLmRlc2NyaXB0aW9uLFxuICB9KTtcbiAgY29uc3QgaW50ZXJhY3Rpb25zID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ludGVyYWN0aW9ucycgfSk7XG4gIGNvbnN0IGxpa2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgY2xhc3M6ICdpY29uJyxcbiAgICBpbm5lckhUTUw6IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj48L2k+ICR7aXRlbS5saWtlc31gLFxuICAgIG9uY2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghbGlrZS5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgbGlrZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFkZExpa2UoaXRlbS5uYXNhX2lkKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgZGF0YVtpbmRleF0gPSB7IC4uLml0ZW0sIGxpa2VzOiBkYXRhW2luZGV4XS5saWtlcyArIDEgfTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGluZGV4LCBkYXRhW2luZGV4XS5saWtlcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlrZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNvbW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgY2xhc3M6ICdpY29uJyxcbiAgICBpZDogYGNvbW1lbnRzLWJ1dHRvbi0ke2l0ZW0ubmFzYV9pZH1gLFxuICAgIGlubmVySFRNTDogJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jb21tZW50XCI+PC9pPiAnLFxuICB9KTtcbiAgaW50ZXJhY3Rpb25zLmFwcGVuZChsaWtlLCBjb21tZW50KTtcbiAgaW5mby5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBpbnRlcmFjdGlvbnMpO1xuICBjYXJkLmFwcGVuZChpbWFnZSwgaW5mbyk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoYCNjb21tZW50cy1idXR0b24tJHtpdGVtLm5hc2FfaWR9YCk7XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY3JlYXRlQ29tbWVudFBvcHVwKGl0ZW0pKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50Q291bnRlciA9IGF3YWl0IHJldHJlaXZlRGF0YShpdGVtLm5hc2FfaWQpO1xuICAgIGlmIChjb21tZW50Q291bnRlci5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzOiAnY29tbWVudHMtY291bnRlcicsXG4gICAgICAgIGlubmVySFRNTDogJzAnLFxuICAgICAgfSk7XG4gICAgICBjb21tZW50LmFwcGVuZChudW1iZXJPZkNvbW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzOiAnY29tbWVudHMtY291bnRlcicsXG4gICAgICAgIGlubmVySFRNTDogYCR7Y29tbWVudENvdW50ZXIubGVuZ3RofWAsXG4gICAgICB9KTtcbiAgICAgIGNvbW1lbnQuYXBwZW5kKG51bWJlck9mQ29tbWVudHMpO1xuICAgIH1cbiAgfTtcblxuICBkaXNwbGF5Q29tbWVudHMoKTtcblxuICByZXR1cm4gY2FyZDtcbn1cbiIsIi8vIGltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IHJldHJlaXZlRGF0YSwgc3VibWl0Q29tbWVudCB9IGZyb20gJy4uL2ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29tbWVudFBvcHVwKGl0ZW0pIHtcbiAgY29uc3QgcG9wdXBDb21tZW50c0JhY2sgPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywge1xuICAgIGNsYXNzOiBgcG9wdXAtY29tbWVudHMtYmFjayBwb3B1cC1jb21tZW50cy1iYWNrLSR7aXRlbS5uYXNhX2lkfWAsXG4gIH0pO1xuICBjb25zdCBwb3B1cENvbW1lbnRzID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIHsgY2xhc3M6ICdwb3B1cC1jb21tZW50cycgfSk7XG4gIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgIHNyYzogaXRlbS5pbWFnZSxcbiAgICBhbHQ6IGl0ZW0udGl0bGUsXG4gIH0pO1xuICBjb25zdCBpbWFnZVRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCB7XG4gICAgaWQ6ICdpbWFnZS10aXRsZScsXG4gICAgdGV4dENvbnRlbnQ6IGl0ZW0udGl0bGUsXG4gICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gIH0pO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgaWQ6ICdwb3B1cC1jb21tZW50cy1jbG9zZS1idXR0b24nLFxuICAgIGNsYXNzOiAnZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsnLFxuICB9KTtcbiAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7XG4gICAgaWQ6ICdpbWFnZS1kZXNjcmlwdGlvbicsXG4gICAgdGV4dENvbnRlbnQ6IGl0ZW0uZGVzY3JpcHRpb24sXG4gIH0pO1xuICBjb25zdCB0ZXh0UGhvdG9ncmFwaGVyID0gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICBpbm5lckhUTUw6IGBQaG90b2dyYXBoZXI6ICR7aXRlbS5waG90b2dyYXBoZXJ9YCxcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNXcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbW1lbnRzLXdyYXBwZXInIH0pO1xuICBjb25zdCBjb21tZW50TGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgeyBjbGFzczogJ2NvbW1lbnQtbGlzdCcgfSk7XG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGFkZEFDb21tZW50ID0gY3JlYXRlRWxlbWVudCgnaDInLCB7IHRleHRDb250ZW50OiAnQWRkIGEgQ29tbWVudCcgfSk7XG4gIGNvbnN0IGlucHV0VXNlcm5hbWUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICBjbGFzczogJ2lucHV0LXVzZXJuYW1lJyxcbiAgICBwbGFjZWhvbGRlcjogJ1lvdXIgTmFtZScsXG4gIH0pO1xuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7XG4gICAgaWQ6ICdpbnB1dC1kZXNjcmlwdGlvbicsXG4gICAgcGxhY2Vob2xkZXI6ICdZb3VyIGluc2lnaHRzJyxcbiAgfSk7XG4gIGNvbnN0IGNvbW1lbnRzVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtcbiAgICBjbGFzczogJ2NvbW1lbnRzLXRpdGxlJyxcbiAgICBpbm5lckhUTUw6ICcnLFxuICB9KTtcbiAgY29uc3QgcHVibGlzaENvbW1lbnRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgaWQ6ICdwdWJsaXNoLWNvbW1lbnQtYnV0dG9uJyxcbiAgICB0ZXh0Q29udGVudDogJ0NvbW1lbnQnLFxuICB9KTtcbiAgZm9ybS5hcHBlbmQoXG4gICAgYWRkQUNvbW1lbnQsXG4gICAgaW5wdXRVc2VybmFtZSxcbiAgICBpbnB1dERlc2NyaXB0aW9uLFxuICAgIHB1Ymxpc2hDb21tZW50QnV0dG9uLFxuICApO1xuICBjb21tZW50c1dyYXBwZXIuYXBwZW5kKGNvbW1lbnRMaXN0LCBmb3JtKTtcbiAgcG9wdXBDb21tZW50cy5hcHBlbmQoXG4gICAgaW1hZ2UsXG4gICAgaW1hZ2VUaXRsZSxcbiAgICBjbG9zZUJ1dHRvbixcbiAgICBpbWFnZURlc2NyaXB0aW9uLFxuICAgIHRleHRQaG90b2dyYXBoZXIsXG4gICAgY29tbWVudHNUaXRsZSxcbiAgICBjb21tZW50c1dyYXBwZXIsXG4gICk7XG4gIHBvcHVwQ29tbWVudHNCYWNrLmFwcGVuZChwb3B1cENvbW1lbnRzKTtcbiAgcG9wdXBDb21tZW50c0JhY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgZGlzcGxheUNvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXdhaXQgcmV0cmVpdmVEYXRhKGl0ZW0ubmFzYV9pZCk7XG4gICAgaWYgKGNvbW1lbnRDb3VudGVyLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBudW1iZXJPZkNvbW1lbnRzID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgY2xhc3M6ICdjb21tZW50cy10aXRsZScsXG4gICAgICAgIGlubmVySFRNTDogJ0NvbW1lbnRzIDAnLFxuICAgICAgfSk7XG4gICAgICBjb21tZW50c1RpdGxlLmFwcGVuZChudW1iZXJPZkNvbW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzOiAnY29tbWVudHMtdGl0bGUnLFxuICAgICAgICBpbm5lckhUTUw6IGBDb21tZW50cyAke2NvbW1lbnRDb3VudGVyLmxlbmd0aH1gLFxuICAgICAgfSk7XG4gICAgICBjb21tZW50c1RpdGxlLmFwcGVuZChudW1iZXJPZkNvbW1lbnRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21tZW50cyA9IGF3YWl0IHJldHJlaXZlRGF0YShpdGVtLm5hc2FfaWQpO1xuICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGdldENvbW1lbnRzKSkge1xuICAgICAgZ2V0Q29tbWVudHMuZm9yRWFjaCgoY29tbWVudGFyeSkgPT4ge1xuICAgICAgICBjb25zdCBjb21tZW50SXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgIGNsYXNzOiAnY29tbWVudGFyeS1pdGVtJyxcbiAgICAgICAgICBpbm5lckhUTUw6IGBcbiAgICAgIDxzcGFuIGlkPSdjb21tZW50LWRhdGUtJHtpdGVtLm5hc2FfaWR9Jz4ke2NvbW1lbnRhcnkuY3JlYXRpb25fZGF0ZX08L3NwYW4+IC0gXG4gICAgICA8c3BhbiBpZD0nY29tbWVudC11c2VyLSR7aXRlbS5uYXNhX2lkfSc+JHtjb21tZW50YXJ5LnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgIDxkaXYgaWQ9J2NvbW1lbnQtY29udGVudC0ke2l0ZW0ubmFzYV9pZH0nPiR7Y29tbWVudGFyeS5jb21tZW50fTwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZChjb21tZW50SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGdldENvbW1lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcblxuICBkaXNwbGF5Q29tbWVudHMoKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnI3BvcHVwLWNvbW1lbnRzLWNsb3NlLWJ1dHRvbicpO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcG9wdXBDb21tZW50c0JhY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcjcHVibGlzaC1jb21tZW50LWJ1dHRvbicpO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmFzYUlEID0gaXRlbS5uYXNhX2lkO1xuICAgICAgY29uc3QgbmV3VXNlciA9IGlucHV0VXNlcm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICBpbnB1dFVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzcGxheUNvbW1lbnRzKCk7XG4gICAgICB9LCAnMTAwMCcpO1xuICAgICAgYXdhaXQgc3VibWl0Q29tbWVudChuYXNhSUQsIG5ld1VzZXIsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb3B1cENvbW1lbnRzQmFjaztcbn1cbiIsImNvbnN0IGJhc2UgPSAnaHR0cHM6Ly9pbWFnZXMtYXBpLm5hc2EuZ292Lyc7XG5jb25zdCBlbmRwb2ludHMgPSB7XG4gIHNlYXJjaDogKHBhcmFtcykgPT4gYCR7YmFzZX1zZWFyY2g/JHtcbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHt2YWx1ZX1gKVxuICAgICAgLmpvaW4oJyYnKX1gLFxuICBhc3NldDogKGlkKSA9PiBgYXNzZXQvJHtpZH1gLFxuICBtZXRhOiAoaWQpID0+IGBtZXRhZGF0YS8ke2lkfWAsXG4gIGNhcHRpb246IChpZCkgPT4gYGNhcHRpb25zLyR7aWR9YCxcbiAgYWxidW06IChuYW1lKSA9PiBgYWxidW0vJHtuYW1lfWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHM7XG4iLCJpbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4vZW5kcG9pbnRzLmpzJztcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbiAgcmV0dXJuIGBFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAke3Jlc3BvbnNlLnN0YXR1c31gO1xufTtcblxuY29uc3QgZmlsdGVyRGF0YSA9IGFzeW5jIChpdGVtcyA9IFtdKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkID0gW107XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgaXRlbXMubWFwKGFzeW5jICh7IGhyZWYsIGRhdGEgPSBbXSB9KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICAgIGNvbnN0IGltYWdlVXJscyA9IGF3YWl0IGdldEltYWdlcyhocmVmKTtcbiAgICAgIGltYWdlVXJscy5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICAgICAgaWYgKHVybC5tYXRjaCgvdGh1bWIvKSkge1xuICAgICAgICAgIGltYWdlcy50aHVtYiA9IHVybDtcbiAgICAgICAgfSBlbHNlIGlmICh1cmwubWF0Y2goL29yaWcvKSkge1xuICAgICAgICAgIGltYWdlcy5tYWluID0gdXJsO1xuICAgICAgICB9IGVsc2UgaWYgKHVybC5tYXRjaCgvbWVkaXVtLykpIHtcbiAgICAgICAgICBpbWFnZXMubWFpbiA9IHVybDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmaWx0ZXJlZC5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGRhdGFbMF0udGl0bGUsXG4gICAgICAgIG5hc2FfaWQ6IGRhdGFbMF0ubmFzYV9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGFbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHBob3RvZ3JhcGhlcjogZGF0YVswXS5waG90b2dyYXBoZXIgfHwgJ1Vua25vd24nLFxuICAgICAgICB0aHVtYjogaW1hZ2VzLnRodW1iLFxuICAgICAgICBpbWFnZTogaW1hZ2VzLm1haW4sXG4gICAgICB9KTtcbiAgICB9KSxcbiAgKTtcblxuICByZXR1cm4gZmlsdGVyZWQ7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKHBhcmFtcywgY29uZmlncykgPT4ge1xuICBjb25zdCBxdWVyeSA9IGVuZHBvaW50cy5zZWFyY2goe1xuICAgIHRpdGxlOiAnbWFycycsXG4gICAgbWVkaWFfdHlwZTogJ2ltYWdlJyxcbiAgICBwYWdlX3NpemU6IDIwLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSwgeyAuLi5jb25maWdzIH0pO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBhd2FpdCBmaWx0ZXJEYXRhKGRhdGEuY29sbGVjdGlvbi5pdGVtcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IHVwZGF0ZUNhcmQgPSAoaW5kZXgsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjYXJkcycpO1xuICBjb25zdCB0YXJnZXQgPSBjb250YWluZXIuY2hpbGRyZW5baW5kZXhdO1xuICB0YXJnZXQucXVlcnlTZWxlY3RvcihcbiAgICAnLmljb24nLFxuICApLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0XCI+PC9pPiAke2xpa2VzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDYXJkO1xuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lID0gJ2RpdicsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmIChbJ2NsYXNzJywgJ2lkJywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgJCA9IChxdWVyeSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAxID8gcmVzdWx0IDogcmVzdWx0WzBdO1xufTtcblxuY29uc3QgdHJhdW5jYXRlVGV4dCA9ICh0ZXh0ID0gJycsIGxlbmd0aCA9IDE1NSkgPT4gYCR7dGV4dC5zbGljZSgwLCBsZW5ndGgpLnRyaW0oKX0uLi4uYDtcblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgJCwgdHJhdW5jYXRlVGV4dCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9