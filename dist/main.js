/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  background-color: aquamarine;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nheader {\\n  display: flex;\\n  background-color: crimson;\\n  position: fixed;\\n  justify-content: space-evenly;\\n  width: 100%;\\n  top: 0;\\n  padding-right: 41%;\\n}\\n\\n.header-content {\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: crimson;\\n  color: cornsilk;\\n  align-items: center;\\n  margin-top: 1%;\\n  gap: 50%;\\n}\\n\\n.logo {\\n  width: 80px;\\n  height: 53%;\\n}\\n\\n.movieTitle {\\n  font-size: 1.4rem;\\n  color: beige;\\n}\\n\\n.counter {\\n  font-size: 2rem;\\n  color: green;\\n}\\n\\nul {\\n  display: flex;\\n  gap: 80%;\\n}\\n\\n.movieName h3,\\n.movieName p {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.movieName p {\\n  cursor: pointer;\\n}\\n\\n.commentBtn {\\n  padding: 10px;\\n  margin: 5% 34%;\\n  border: none;\\n  border-radius: 5px;\\n  text-align: center;\\n  cursor: pointer;\\n  box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 35%);\\n  justify-items: center;\\n}\\n\\nmain {\\n  padding: 5% 0 0 0;\\n  margin: 1%;\\n}\\n\\n.moviecards-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  column-gap: 1%;\\n  justify-content: center;\\n}\\n\\n.fas {\\n  color: red;\\n}\\n\\n.imageTextContainer {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* POPUP STYLES */\\n.popup-container {\\n  background: #d7c49eff;\\n  position: fixed;\\n  opacity: 2;\\n  top: 5%;\\n  left: 2.5%;\\n  left: 12.5%;\\n  overflow-y: hidden;\\n  border: 1px solid #dfe1e6;\\n  border-radius: 16px;\\n  margin: 30px 20px 40px 0;\\n  padding: 16px;\\n  height: 90vh;\\n  display: flex;\\n  width: 75%;\\n}\\n\\n.fa-times {\\n  position: fixed;\\n  left: 85%;\\n  font-size: 200%;\\n  cursor: pointer;\\n}\\n\\n.popup-headTitle {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: left;\\n  padding-left: 2%;\\n}\\n\\n.popup-headTitle h2 {\\n  padding-bottom: 10px;\\n}\\n\\n.popup-headTitle img {\\n  width: 40%;\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n\\n.displayAllComments {\\n  overflow-y: auto;\\n}\\n\\n.comment-section h2,\\n.displayAllComments h2 {\\n  color: black;\\n  text-align: center;\\n  font-size: 20px;\\n  padding-bottom: 10px;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.user,\\n.comment {\\n  padding: 5px;\\n  border-radius: 8px;\\n}\\n\\n.comment {\\n  padding: 20px;\\n}\\n\\n.comment-ul {\\n  flex-direction: column;\\n  list-style: none;\\n}\\n\\n.userInput {\\n  padding: 0 !important;\\n  margin: 0 !important;\\n}\\n\\n.comment-ul li {\\n  background-color: #343148ff;\\n  padding: 12px;\\n  border-radius: 8px;\\n  margin-top: 20px;\\n  color: white;\\n}\\n\\n.submitBtn {\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px;\\n  border: none;\\n  border-radius: 5px;\\n  text-align: center;\\n  cursor: pointer;\\n  box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 35%);\\n}\\n\\nfooter {\\n  position: fixed;\\n  width: 100%;\\n  height: 50px;\\n  bottom: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgb(17 134 36 / 60%);\\n  color: white;\\n  margin-bottom: 0;\\n}\\n\\n.movie-count {\\n  display: flex;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  body {\\n    background-color: lightblue;\\n  }\\n\\n  .logo {\\n    display: none;\\n  }\\n\\n  .header-content {\\n    display: flex;\\n    justify-content: flex-end;\\n    background-color: crimson;\\n    color: cornsilk;\\n    padding: 1% 0 1% 0%;\\n    gap: 7%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/modules/asset/logo.svg":
/*!************************************!*\
  !*** ./src/modules/asset/logo.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"logo.svg\");\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/asset/logo.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_asset_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/asset/logo.svg */ \"./src/modules/asset/logo.svg\");\n/* harmony import */ var _modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiCall.js */ \"./src/modules/apiCall.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_popupComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupComments.js */ \"./src/modules/popupComments.js\");\n/* harmony import */ var _modules_moviecounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/moviecounter.js */ \"./src/modules/moviecounter.js\");\n\n\n\n\n\n\n\nconst movieAppend = async () => {\n  const movieCard = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieCard);\n};\n\nmovieAppend();\n\nconst moviepop = async () => {\n  const movieCard = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_popupComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(movieCard);\n};\n\nmoviepop();\n\n(0,_modules_moviecounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tvApiUrl = 'https://api.tvmaze.com/shows';\n\nconst getMovies = async () => {\n  const response = await fetch(tvApiUrl);\n  const films = await response.json();\n  const data = films.slice(0, 20).map((item) => item);\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/apiCall.js?");

/***/ }),

/***/ "./src/modules/commentAPI.js":
/*!***********************************!*\
  !*** ./src/modules/commentAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\nconst fetchMovieComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DI7eKxNz4tMHOe3Yq2L5/comments/';\n\nconst getComment = async (movieId) => {\n  const response = await fetch(`${fetchMovieComments}?item_id=${movieId}`).catch((err) => err);\n  const resJSON = response.json();\n  return (resJSON);\n};\n\n// SEND COMMENT TO API\nconst addComment = async (comment) => {\n  fetch(fetchMovieComments, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(comment),\n  });\n};\n\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/commentAPI.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCommentCount\": () => (/* binding */ displayCommentCount),\n/* harmony export */   \"countComments\": () => (/* binding */ countComments)\n/* harmony export */ });\n/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ \"./src/modules/commentAPI.js\");\n\n\nconst countComments = (list) => list.length;\n\nconst displayCommentCount = async (commentId, displayNumber) => {\n  const comments = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(commentId);\n  if (countComments(comments)) displayNumber.innerHTML = (`${countComments(comments)}`);\n};\n\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/count.js":
/*!******************************!*\
  !*** ./src/modules/count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviescount = (list) => list.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviescount);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/count.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst appId = 'GkH7NaZUGpE0nkgYlAMb';\nconst involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;\nconst container = document.querySelector('.moviecards-container');\n\n// add a like to a movie\nconst addLike = async (itemId) => {\n  fetch(involvementApiUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemId }),\n  });\n};\n// return a like\nconst getLikes = async () => {\n  const response = await fetch(involvementApiUrl);\n  const likes = await response.json();\n  return likes;\n};\n\nconst updateLikes = async (id) => {\n  const likes = await getLikes();\n  let results = 0;\n  likes.forEach((e) => {\n    if (e.item_id.toString() === id.toString()) {\n      results = e.likes + 1;\n    }\n  });\n  return results;\n};\n\nconst moreLikes = (e) => {\n  const number = e.innerText;\n  e.innerText = parseInt(number, 10) + 1;\n};\n\ncontainer.addEventListener('click', (e) => {\n  if (e.target.className === 'fas fa-heart like') {\n    const likeId = e.target.parentNode.querySelector('i').id;\n    const like = e.target.parentNode.querySelector('i');\n    updateLikes(likeId);\n    addLike(likeId);\n    moreLikes(like);\n  }\n});\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/moviecounter.js":
/*!*************************************!*\
  !*** ./src/modules/moviecounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/modules/apiCall.js\");\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count.js */ \"./src/modules/count.js\");\n\n\n\nconst displayNumber = document.getElementById('totalMovieCount');\nconst displaymoviescount = async () => {\n  const movies = await (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  displayNumber.textContent = `(${(0,_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movies)})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displaymoviescount);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/moviecounter.js?");

/***/ }),

/***/ "./src/modules/popupComments.js":
/*!**************************************!*\
  !*** ./src/modules/popupComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ \"./src/modules/commentAPI.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst popup = document.createElement('section');\n\n// DISPLAY POPUP\nconst popupDisplay = async (data) => {\n  document.body.addEventListener('click', (event) => {\n    if (event.target.className === 'commentBtn') {\n      const commentId = event.target.parentNode.querySelector('button').id;\n\n      data.forEach((item) => {\n        if (item.id.toString() === commentId.toString()) {\n          popup.innerHTML += `\n    <main class=\"popup-container\">\n    <span><i class=\"fas fa-times\" alt='#'></i></span>\n        <img src=\"${item.image.original}\" />\n\n        <div class=\"popup-headTitle\">\n        <h2>${item.name}</h2>\n        <p>${item.summary}</p>\n      \n      <section class=\"displayAllComments\">\n      <h2>Comments(<span id=\"totalCommentCount\"></span>)</h2>\n        <ul class=\"comment-ul\">\n        </ul>\n      </section>\n  \n      <section class=\"comment-section\">\n      <h2>Add a comment</h2>\n      <form class=\"form\">\n                <input class=\"user\" type=\"text\" placeholder=\"Enter your name\" required/> <br/>\n                <input class=\"comment\" type=\"text\" placeholder=\"Add your comment here\" required/> <br/>\n                <button id=${item.id} class=\"submitBtn\" type=\"submit\">Submit</button>\n                </form>\n      </section>\n      </div>\n    </main>\n  `;\n          document.body.prepend(popup);\n          popup.style.display = ('block');\n          document.body.style.overflowY = ('hidden');\n\n          const closeBtn = document.querySelector('.fa-times');\n          document.addEventListener('click', (event) => {\n            if (event.target === closeBtn) {\n              popup.style.display = 'none';\n              document.body.style.overflowY = ('auto');\n              window.location.reload();\n            }\n          });\n        }\n      });\n\n      const submitBtn = document.querySelector('.submitBtn');\n      const ulComments = document.querySelector('.comment-ul');\n      const template = document.createElement('template');\n      const user = document.querySelector('.user');\n      const text = document.querySelector('.comment');\n\n      // DISPLAY ALL COMMENTS\n      const displayComment = async (commentId) => {\n        const allComments = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(commentId);\n\n        allComments.forEach((comment) => {\n          template.innerHTML += `\n          <li>\n          ${comment.creation_date} <br/> ${comment.username} : ${comment.comment}\n          </li>\n          `;\n          ulComments.append(template.content);\n        });\n      };\n\n      displayComment(commentId);\n\n      // DISPLAY COMMENT COUNT\n      const displayNumber = document.querySelector('#totalCommentCount');\n      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.displayCommentCount)(commentId, displayNumber);\n\n      // GET USER INPUT\n      const submitComment = () => {\n        const comment = {\n          username: user.value,\n          comment: text.value,\n          item_id: commentId,\n        };\n\n        (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(comment);\n      };\n\n      // UPDATE COMMENTS\n      const updateComments = () => {\n        const li = document.createElement('li');\n        const date = new Date();\n        const day = date.getDay();\n        const month = date.getMonth();\n        const year = date.getFullYear();\n        li.innerHTML += `\n          <li class=\"userInput\">\n          ${year} ${-month} ${-day} </br> ${user.value} : ${text.value}\n          </li>\n          `;\n        ulComments.append(li);\n      };\n\n      submitBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        submitComment();\n        updateComments();\n        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.displayCommentCount)(commentId, displayNumber);\n\n        user.value = '';\n        text.value = '';\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupDisplay);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/popupComments.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\n\nconst render = (data) => {\n  const container = document.querySelector('.moviecards-container');\n  data.forEach(async (e) => {\n    const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(e.id);\n    container.innerHTML += `<div class='imageTextContainer'><div class='card'>\n    <img class='card-img' src=${e.image.medium}>\n  </div>\n  <div class='movieName'>\n      <h3 class='title'>${e.name}</h3>\n      <p class='likes'> <i class='fas fa-heart like' id='${e.id}'> <span class='num'> ${likes} </span> </i></p>\n      <button id=\"${e.id}\" class=\"commentBtn\" type=\"button\">Comment</button>\n  </div>\n  </div>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;