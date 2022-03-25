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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background-color: aquamarine;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  background-color: crimson;\\r\\n  position: fixed;\\r\\n  justify-content: space-evenly;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  padding: 0 27% 0 38px;\\r\\n}\\r\\n\\r\\n.header-content {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: crimson;\\r\\n  color: cornsilk;\\r\\n  padding: 1% 0;\\r\\n  gap: 50%;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 80px;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.movieTitle {\\r\\n  font-size: 1.4rem;\\r\\n  color: beige;\\r\\n}\\r\\n\\r\\n.counter {\\r\\n  font-size: 2rem;\\r\\n  color: green;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  gap: 80%;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding: 5% 0 0 0;\\r\\n  margin: 1%;\\r\\n}\\r\\n\\r\\n.moviecards-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  column-gap: 1%;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.imageTextContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n/* POPUP STYLES */\\r\\n.popup-container {\\r\\n  background: #d7c49eff;\\r\\n  position: fixed;\\r\\n  opacity: 2;\\r\\n  top: 5%;\\r\\n  left: 2.5%;\\r\\n  overflow-y: hidden;\\r\\n  border: 1px solid #dfe1e6;\\r\\n  border-radius: 16px;\\r\\n  margin: 30px 20px 40px 0;\\r\\n  padding: 16px;\\r\\n  height: 90vh;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  position: fixed;\\r\\n  left: 95%;\\r\\n  font-size: 200%;\\r\\n}\\r\\n\\r\\n.popup-headTitle {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: left;\\r\\n  padding-left: 2%;\\r\\n}\\r\\n\\r\\n.popup-headTitle h2 {\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.popup-headTitle img {\\r\\n  width: 40%;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.displayAllComments {\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.comment-section h2,\\r\\n.displayAllComments h2 {\\r\\n  color: black;\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.user,\\r\\n.comment {\\r\\n  padding: 5px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.comment-ul {\\r\\n  flex-direction: column;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.comment-ul li {\\r\\n  background-color: #343148ff;\\r\\n  padding: 12px;\\r\\n  border-radius: 8px;\\r\\n  margin-top: 20px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.submitBtn {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 35%);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgb(17 134 36 / 60%);\\r\\n  color: white;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.movie-count {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  body {\\r\\n    background-color: lightblue;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .header-content {\\r\\n    display: flex;\\r\\n    justify-content: flex-end;\\r\\n    background-color: crimson;\\r\\n    color: cornsilk;\\r\\n    padding: 1% 0 1% 0%;\\r\\n    gap: 7%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_asset_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/asset/logo.svg */ \"./src/modules/asset/logo.svg\");\n/* harmony import */ var _modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiCall.js */ \"./src/modules/apiCall.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_popupComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupComments.js */ \"./src/modules/popupComments.js\");\n/* harmony import */ var _modules_moviecounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/moviecounter.js */ \"./src/modules/moviecounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst movieAppend = async () => {\r\n  const movieCard = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieCard);\r\n};\r\n\r\nmovieAppend();\r\n\r\nconst moviepop = async () => {\r\n  const movieCard = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_popupComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(movieCard);\r\n};\r\n\r\nmoviepop();\r\n\r\n(0,_modules_moviecounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tvApiUrl = 'https://api.tvmaze.com/shows';\r\n\r\nconst getMovies = async () => {\r\n  const response = await fetch(tvApiUrl);\r\n  const films = await response.json();\r\n  const data = films.slice(0, 20).map((item) => item);\r\n  return data;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/apiCall.js?");

/***/ }),

/***/ "./src/modules/commentAPI.js":
/*!***********************************!*\
  !*** ./src/modules/commentAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\nconst fetchMovieComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DI7eKxNz4tMHOe3Yq2L5/comments/';\r\n\r\nconst getComment = async (movieId) => {\r\n  const response = await fetch(`${fetchMovieComments}?item_id=${movieId}`).catch((err) => err);\r\n  const resJSON = response.json();\r\n  return (resJSON);\r\n};\r\n\r\n// SEND COMMENT TO API\r\nconst addComment = async (comment) => {\r\n  fetch(fetchMovieComments, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(comment),\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/commentAPI.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ \"./src/modules/commentAPI.js\");\n\r\n\r\nconst countComments = (list) => list.length;\r\n\r\nconst displayCommentCount = async (commentId, displayNumber) => {\r\n  const comments = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(commentId);\r\n  if (countComments(comments)) displayNumber.innerHTML = (`${countComments(comments)}`);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentCount);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst appId = 'GkH7NaZUGpE0nkgYlAMb';\r\nconst involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;\r\nconst container = document.querySelector('.moviecards-container');\r\n\r\n// add a like to a movie\r\nconst addLike = async (itemId) => {\r\n  fetch(involvementApiUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: itemId }),\r\n  });\r\n};\r\n// return a like\r\nconst getLikes = async () => {\r\n  const response = await fetch(involvementApiUrl);\r\n  const likes = await response.json();\r\n  return likes;\r\n};\r\n\r\nconst updateLikes = async (id) => {\r\n  const likes = await getLikes();\r\n  let results = 0;\r\n  likes.forEach((e) => {\r\n    if (e.item_id.toString() === id.toString()) {\r\n      results = e.likes + 1;\r\n    }\r\n  });\r\n  return results;\r\n};\r\n\r\nconst moreLikes = (e) => {\r\n  const number = e.innerText;\r\n  e.innerText = parseInt(number, 10) + 1;\r\n};\r\n\r\ncontainer.addEventListener('click', (e) => {\r\n  if (e.target.className === 'fas fa-heart like') {\r\n    const likeId = e.target.parentNode.querySelector('i').id;\r\n    const like = e.target.parentNode.querySelector('i');\r\n    updateLikes(likeId);\r\n    addLike(likeId);\r\n    moreLikes(like);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/moviecounter.js":
/*!*************************************!*\
  !*** ./src/modules/moviecounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/modules/apiCall.js\");\n\n\nconst moviescount = (list) => list.length;\nconst displayNumber = document.getElementById('totalMovieCount');\n\nconst displaymoviescount = async () => {\n  const movies = await (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  displayNumber.textContent = `(${moviescount(movies)})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displaymoviescount);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/moviecounter.js?");

/***/ }),

/***/ "./src/modules/popupComments.js":
/*!**************************************!*\
  !*** ./src/modules/popupComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ \"./src/modules/commentAPI.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst popup = document.createElement('section');\r\n\r\n// DISPLAY POPUP\r\nconst popupDisplay = async (data) => {\r\n  document.body.addEventListener('click', (event) => {\r\n    if (event.target.className === 'commentBtn') {\r\n      const commentId = event.target.parentNode.querySelector('button').id;\r\n\r\n      const displayComment = async (commentId) => {\r\n        const allComments = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(commentId);\r\n\r\n        allComments.forEach((comment) => {\r\n          const template = document.createElement('template');\r\n          template.innerHTML += `\r\n          <li>\r\n          ${comment.creation_date} <br/> ${comment.username} : ${comment.comment}\r\n          </li>\r\n          `;\r\n          const ulComments = document.querySelector('.comment-ul');\r\n          ulComments.append(template.content);\r\n        });\r\n      };\r\n\r\n      displayComment(commentId);\r\n\r\n      data.forEach((item) => {\r\n        if (item.id.toString() === commentId.toString()) {\r\n          popup.innerHTML += `\r\n    <main class=\"popup-container\">\r\n    <span><i class=\"fas fa-times\" alt='#'></i></span>\r\n        <img src=\"${item.image.original}\" />\r\n\r\n        <div class=\"popup-headTitle\">\r\n        <h2>${item.name}</h2>\r\n        <p>${item.summary}</p>\r\n      \r\n      <section class=\"displayAllComments\">\r\n      <h2>Comments(<span id=\"totalCommentCount\"></span>)</h2>\r\n        <ul class=\"comment-ul\">\r\n        </ul>\r\n      </section>\r\n  \r\n      <section class=\"comment-section\">\r\n      <h2>Add a comment</h2>\r\n      <form class=\"form\">\r\n                <input class=\"user\" type=\"text\" placeholder=\"Enter your name\" required/> <br/>\r\n                <input class=\"comment\" type=\"text\" placeholder=\"Add your comment here\" required/> <br/>\r\n                <button id=${item.id} class=\"submitBtn\" type=\"submit\">Submit</button>\r\n                </form>\r\n      </section>\r\n      </div>\r\n    </main>\r\n  `;\r\n          document.body.prepend(popup);\r\n          popup.style.display = ('block');\r\n          document.body.overflowY = ('hidden');\r\n\r\n          const closeBtn = document.querySelector('.fa-times');\r\n          document.addEventListener('click', (event) => {\r\n            if (event.target === closeBtn) {\r\n              popup.style.display = 'none';\r\n              document.body.style.overflowY = ('auto');\r\n              window.location.reload();\r\n            }\r\n          });\r\n        }\r\n      });\r\n\r\n      const submitBtn = document.querySelector('.submitBtn');\r\n\r\n      // DISPLAY COMMENT COUNT\r\n      const displayNumber = document.querySelector('#totalCommentCount');\r\n      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentId, displayNumber);\r\n\r\n      // GET USER INPUT\r\n      const submitComment = (e) => {\r\n        e.preventDefault();\r\n        const user = document.querySelector('.user');\r\n        const text = document.querySelector('.comment');\r\n\r\n        const comment = {\r\n          username: user.value,\r\n          comment: text.value,\r\n          item_id: commentId,\r\n        };\r\n\r\n        (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(comment);\r\n\r\n        user.value = '';\r\n        text.value = '';\r\n      };\r\n\r\n      submitBtn.addEventListener('click', submitComment);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupDisplay);\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/popupComments.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\r\n\r\nconst render = (data) => {\r\n  const container = document.querySelector('.moviecards-container');\r\n  data.forEach(async (e) => {\r\n    const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(e.id);\r\n    container.innerHTML += `<div class='imageTextContainer'><div class='card'>\r\n    <img class='card-img' src=${e.image.medium}>\r\n  </div>\r\n  <div class='movieName'>\r\n      <h3 class='title'>${e.name}</h3>\r\n      <p class='likes'> <i class='fas fa-heart like' id='${e.id}'> <span class='num'> ${likes} </span> </i></p>\r\n      <button id=\"${e.id}\" class=\"commentBtn\" type=\"button\">Comment</button>\r\n  </div>\r\n  </div>`;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/render.js?");

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