/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/shinyRDT.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-datasheet/lib/react-datasheet.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-datasheet/lib/react-datasheet.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nspan.data-grid-container, span.data-grid-container:focus {\n  outline: none;\n}\n\n.data-grid-container .data-grid {\n  table-layout: fixed;\n  border-collapse: collapse;\n} \n\n.data-grid-container .data-grid .cell.updated {\n    background-color: rgba(0, 145, 253, 0.16);\n    transition : background-color 0ms ease ;\n}\n.data-grid-container .data-grid .cell {\n  height: 17px;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  cursor: cell;\n  background-color: unset;\n  transition : background-color 500ms ease;\n  vertical-align: middle;\n  text-align: right;\n  border: 1px solid #DDD;\n  padding: 0;\n}\n.data-grid-container .data-grid .cell.selected {\n  border: 1px double rgb(33, 133, 208);\n  transition: none;\n  box-shadow: inset 0 -100px 0 rgba(33, 133, 208, 0.15);\n}\n\n.data-grid-container .data-grid .cell.read-only {\n  background: whitesmoke;\n  color: #999;\n  text-align: center;\n}\n\n.data-grid-container .data-grid .cell > .text {\n  padding: 2px 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n\n.data-grid-container .data-grid .cell > input {\n  outline: none !important;\n  border: 2px solid rgb(33, 133, 208);\n  text-align:right;\n  width: calc(100% - 6px);\n  height: 11px;\n  background: none;\n  display: block;\n}\n\n\n.data-grid-container .data-grid .cell {\n  vertical-align: bottom;\n}\n\n.data-grid-container .data-grid .cell,\n.data-grid-container .data-grid.wrap .cell,\n.data-grid-container .data-grid.wrap .cell.wrap,\n.data-grid-container .data-grid .cell.wrap,\n.data-grid-container .data-grid.nowrap .cell.wrap,\n.data-grid-container .data-grid.clip .cell.wrap {\n  white-space: normal;\n}\n\n.data-grid-container .data-grid.nowrap .cell,\n.data-grid-container .data-grid.nowrap .cell.nowrap,\n.data-grid-container .data-grid .cell.nowrap,\n.data-grid-container .data-grid.wrap .cell.nowrap,\n.data-grid-container .data-grid.clip .cell.nowrap {\n  white-space: nowrap;\n  overflow-x: visible;\n}\n\n.data-grid-container .data-grid.clip .cell,\n.data-grid-container .data-grid.clip .cell.clip,\n.data-grid-container .data-grid .cell.clip,\n.data-grid-container .data-grid.wrap .cell.clip,\n.data-grid-container .data-grid.nowrap .cell.clip {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.data-grid-container .data-grid .cell .value-viewer, .data-grid-container .data-grid .cell .data-editor {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/react-datasheet/lib/react-datasheet.css"],"names":[],"mappings":";AACA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;IACI,yCAAyC;IACzC,uCAAuC;AAC3C;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,wCAAwC;EACxC,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,qDAAqD;AACvD;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;AAClB;;;AAGA;EACE,wBAAwB;EACxB,mCAAmC;EACnC,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;;AAGA;EACE,sBAAsB;AACxB;;AAEA;;;;;;EAME,mBAAmB;AACrB;;AAEA;;;;;EAKE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;;;;EAKE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["\nspan.data-grid-container, span.data-grid-container:focus {\n  outline: none;\n}\n\n.data-grid-container .data-grid {\n  table-layout: fixed;\n  border-collapse: collapse;\n} \n\n.data-grid-container .data-grid .cell.updated {\n    background-color: rgba(0, 145, 253, 0.16);\n    transition : background-color 0ms ease ;\n}\n.data-grid-container .data-grid .cell {\n  height: 17px;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  cursor: cell;\n  background-color: unset;\n  transition : background-color 500ms ease;\n  vertical-align: middle;\n  text-align: right;\n  border: 1px solid #DDD;\n  padding: 0;\n}\n.data-grid-container .data-grid .cell.selected {\n  border: 1px double rgb(33, 133, 208);\n  transition: none;\n  box-shadow: inset 0 -100px 0 rgba(33, 133, 208, 0.15);\n}\n\n.data-grid-container .data-grid .cell.read-only {\n  background: whitesmoke;\n  color: #999;\n  text-align: center;\n}\n\n.data-grid-container .data-grid .cell > .text {\n  padding: 2px 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n\n.data-grid-container .data-grid .cell > input {\n  outline: none !important;\n  border: 2px solid rgb(33, 133, 208);\n  text-align:right;\n  width: calc(100% - 6px);\n  height: 11px;\n  background: none;\n  display: block;\n}\n\n\n.data-grid-container .data-grid .cell {\n  vertical-align: bottom;\n}\n\n.data-grid-container .data-grid .cell,\n.data-grid-container .data-grid.wrap .cell,\n.data-grid-container .data-grid.wrap .cell.wrap,\n.data-grid-container .data-grid .cell.wrap,\n.data-grid-container .data-grid.nowrap .cell.wrap,\n.data-grid-container .data-grid.clip .cell.wrap {\n  white-space: normal;\n}\n\n.data-grid-container .data-grid.nowrap .cell,\n.data-grid-container .data-grid.nowrap .cell.nowrap,\n.data-grid-container .data-grid .cell.nowrap,\n.data-grid-container .data-grid.wrap .cell.nowrap,\n.data-grid-container .data-grid.clip .cell.nowrap {\n  white-space: nowrap;\n  overflow-x: visible;\n}\n\n.data-grid-container .data-grid.clip .cell,\n.data-grid-container .data-grid.clip .cell.clip,\n.data-grid-container .data-grid .cell.clip,\n.data-grid-container .data-grid.wrap .cell.clip,\n.data-grid-container .data-grid.nowrap .cell.clip {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.data-grid-container .data-grid .cell .value-viewer, .data-grid-container .data-grid .cell .data-editor {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/shinyRDT.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/shinyRDT.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table.data-grid {\r\n    margin: auto;\r\n    width: 100%;\r\n}", "",{"version":3,"sources":["webpack://./srcjs/shinyRDT.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["table.data-grid {\r\n    margin: auto;\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/Cell.js":
/*!**************************************************!*\
  !*** ./node_modules/react-datasheet/lib/Cell.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = __webpack_require__(/*! ./CellShape */ "./node_modules/react-datasheet/lib/CellShape.js");

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cell = _props.cell,
          row = _props.row,
          col = _props.col,
          attributesRenderer = _props.attributesRenderer,
          className = _props.className,
          style = _props.style,
          onMouseDown = _props.onMouseDown,
          onMouseOver = _props.onMouseOver,
          onDoubleClick = _props.onDoubleClick,
          onContextMenu = _props.onContextMenu;
      var colSpan = cell.colSpan,
          rowSpan = cell.rowSpan;
      var attributes = attributesRenderer ? attributesRenderer(cell, row, col) : {};
      return _react2["default"].createElement('td', _extends({
        className: className,
        onMouseDown: onMouseDown,
        onMouseOver: onMouseOver,
        onDoubleClick: onDoubleClick,
        onTouchEnd: onDoubleClick,
        onContextMenu: onContextMenu,
        colSpan: colSpan,
        rowSpan: rowSpan,
        style: style
      }, attributes), this.props.children);
    }
  }]);

  return Cell;
}(_react.PureComponent);

exports["default"] = Cell;
Cell.propTypes = {
  row: _propTypes2["default"].number.isRequired,
  col: _propTypes2["default"].number.isRequired,
  cell: _propTypes2["default"].shape(_CellShape2["default"]).isRequired,
  selected: _propTypes2["default"].bool,
  editing: _propTypes2["default"].bool,
  updated: _propTypes2["default"].bool,
  attributesRenderer: _propTypes2["default"].func,
  onMouseDown: _propTypes2["default"].func.isRequired,
  onMouseOver: _propTypes2["default"].func.isRequired,
  onDoubleClick: _propTypes2["default"].func.isRequired,
  onContextMenu: _propTypes2["default"].func.isRequired,
  className: _propTypes2["default"].string,
  style: _propTypes2["default"].object
};
Cell.defaultProps = {
  selected: false,
  editing: false,
  updated: false,
  attributesRenderer: function attributesRenderer() {}
};

/***/ }),

/***/ "./node_modules/react-datasheet/lib/CellShape.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-datasheet/lib/CellShape.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/*
readOnly    Bool    false   Cell will never go in edit mode
key String  undefined   By default, each cell is given the key of col number and row number. This would override that key
className   String  undefined   Additional class names for cells.
component   ReactElement    undefined   Insert a react element or JSX to this field. This will render on edit mode
forceComponent  bool    false   Renders what's in component at all times, even when not in edit mode
disableEvents   bool    false   Makes cell unselectable and read only
colSpan number  1   The colSpan of the cell's td element
rowSpan number  1   The rowSpan of the cell's td element
width   number or String    undefined   Sets the cell's td width using a style attribute. Number is interpreted as pixels, strings are used as-is. Note: This will only work if the table does not have a set width.
overflow    'wrap'|'nowrap'| 'clip' undefined   How to render overflow text. Overrides grid-level overflow option.
editor func  undefined A component used to render the cell's value when being edited
viewer func  undefined A component used to render the cell's value when not being edited
*/


var CellShape = {
  readOnly: _propTypes2["default"].bool,
  key: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  component: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].func]),
  forceComponent: _propTypes2["default"].bool,
  disableEvents: _propTypes2["default"].bool,
  disableUpdatedFlag: _propTypes2["default"].bool,
  colSpan: _propTypes2["default"].number,
  rowSpan: _propTypes2["default"].number,
  width: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  overflow: _propTypes2["default"].oneOf(['wrap', 'nowrap', 'clip']),
  dataEditor: _propTypes2["default"].func,
  valueViewer: _propTypes2["default"].func
};
exports["default"] = CellShape;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/DataCell.js":
/*!******************************************************!*\
  !*** ./node_modules/react-datasheet/lib/DataCell.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-datasheet/lib/keys.js");

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/react-datasheet/lib/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

var _CellShape = __webpack_require__(/*! ./CellShape */ "./node_modules/react-datasheet/lib/CellShape.js");

var _CellShape2 = _interopRequireDefault(_CellShape);

var _DataEditor = __webpack_require__(/*! ./DataEditor */ "./node_modules/react-datasheet/lib/DataEditor.js");

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = __webpack_require__(/*! ./ValueViewer */ "./node_modules/react-datasheet/lib/ValueViewer.js");

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _renderHelpers = __webpack_require__(/*! ./renderHelpers */ "./node_modules/react-datasheet/lib/renderHelpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function initialData(_ref) {
  var cell = _ref.cell,
      row = _ref.row,
      col = _ref.col,
      valueRenderer = _ref.valueRenderer,
      dataRenderer = _ref.dataRenderer;
  return (0, _renderHelpers.renderData)(cell, row, col, valueRenderer, dataRenderer);
}

function initialValue(_ref2) {
  var cell = _ref2.cell,
      row = _ref2.row,
      col = _ref2.col,
      valueRenderer = _ref2.valueRenderer;
  return (0, _renderHelpers.renderValue)(cell, row, col, valueRenderer);
}

function widthStyle(cell) {
  var width = typeof cell.width === 'number' ? cell.width + 'px' : cell.width;
  return width ? {
    width: width
  } : null;
}

var DataCell = function (_PureComponent) {
  _inherits(DataCell, _PureComponent);

  function DataCell(props) {
    _classCallCheck(this, DataCell);

    var _this = _possibleConstructorReturn(this, (DataCell.__proto__ || Object.getPrototypeOf(DataCell)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleCommit = _this.handleCommit.bind(_this);
    _this.handleRevert = _this.handleRevert.bind(_this);
    _this.handleKey = _this.handleKey.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleContextMenu = _this.handleContextMenu.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    _this.state = {
      updated: false,
      reverting: false,
      committing: false,
      value: ''
    };
    return _this;
  }

  _createClass(DataCell, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!this.props.cell.disableUpdatedFlag && initialValue(prevProps) !== initialValue(this.props)) {
        this.setState({
          updated: true
        });
        this.timeout = setTimeout(function () {
          return _this2.setState({
            updated: false
          });
        }, 700);
      }

      if (this.props.editing === true && prevProps.editing === false) {
        var value = this.props.clearing ? '' : initialData(this.props);
        this.setState({
          value: value,
          reverting: false
        });
      }

      if (prevProps.editing === true && this.props.editing === false && !this.state.reverting && !this.state.committing && this.state.value !== initialData(this.props)) {
        this.props.onChange(this.props.row, this.props.col, this.state.value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({
        value: value,
        committing: false
      });
    }
  }, {
    key: 'handleCommit',
    value: function handleCommit(value, e) {
      var _props = this.props,
          onChange = _props.onChange,
          onNavigate = _props.onNavigate;

      if (value !== initialData(this.props)) {
        this.setState({
          value: value,
          committing: true
        });
        onChange(this.props.row, this.props.col, value);
      } else {
        this.handleRevert();
      }

      if (e) {
        e.preventDefault();
        onNavigate(e, true);
      }
    }
  }, {
    key: 'handleRevert',
    value: function handleRevert() {
      this.setState({
        reverting: true
      });
      this.props.onRevert();
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var _props2 = this.props,
          row = _props2.row,
          col = _props2.col,
          onMouseDown = _props2.onMouseDown,
          cell = _props2.cell;

      if (!cell.disableEvents) {
        onMouseDown(row, col, e);
      }
    }
  }, {
    key: 'handleMouseOver',
    value: function handleMouseOver(e) {
      var _props3 = this.props,
          row = _props3.row,
          col = _props3.col,
          onMouseOver = _props3.onMouseOver,
          cell = _props3.cell;

      if (!cell.disableEvents) {
        onMouseOver(row, col);
      }
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props4 = this.props,
          row = _props4.row,
          col = _props4.col,
          onDoubleClick = _props4.onDoubleClick,
          cell = _props4.cell;

      if (!cell.disableEvents) {
        onDoubleClick(row, col);
      }
    }
  }, {
    key: 'handleContextMenu',
    value: function handleContextMenu(e) {
      var _props5 = this.props,
          row = _props5.row,
          col = _props5.col,
          onContextMenu = _props5.onContextMenu,
          cell = _props5.cell;

      if (!cell.disableEvents) {
        onContextMenu(e, row, col);
      }
    }
  }, {
    key: 'handleKey',
    value: function handleKey(e) {
      var keyCode = e.which || e.keyCode;

      if (keyCode === _keys.ESCAPE_KEY) {
        return this.handleRevert();
      }

      var _props6 = this.props,
          component = _props6.cell.component,
          forceEdit = _props6.forceEdit;
      var eatKeys = forceEdit || !!component;
      var commit = keyCode === _keys.ENTER_KEY || keyCode === _keys.TAB_KEY || !eatKeys && [_keys.LEFT_KEY, _keys.RIGHT_KEY, _keys.UP_KEY, _keys.DOWN_KEY].includes(keyCode);

      if (commit) {
        this.handleCommit(this.state.value, e);
      }
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(editing, cell) {
      var component = cell.component,
          readOnly = cell.readOnly,
          forceComponent = cell.forceComponent;

      if (editing && !readOnly || forceComponent) {
        return component;
      }
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor(editing, cell, row, col, dataEditor) {
      if (editing) {
        var Editor = cell.dataEditor || dataEditor || _DataEditor2["default"];
        return _react2["default"].createElement(Editor, {
          cell: cell,
          row: row,
          col: col,
          value: this.state.value,
          onChange: this.handleChange,
          onCommit: this.handleCommit,
          onRevert: this.handleRevert,
          onKeyDown: this.handleKey
        });
      }
    }
  }, {
    key: 'renderViewer',
    value: function renderViewer(cell, row, col, valueRenderer, valueViewer) {
      var Viewer = cell.valueViewer || valueViewer || _ValueViewer2["default"];
      var value = (0, _renderHelpers.renderValue)(cell, row, col, valueRenderer);
      return _react2["default"].createElement(Viewer, {
        cell: cell,
        row: row,
        col: col,
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          row = _props7.row,
          col = _props7.col,
          cell = _props7.cell,
          CellRenderer = _props7.cellRenderer,
          valueRenderer = _props7.valueRenderer,
          dataEditor = _props7.dataEditor,
          valueViewer = _props7.valueViewer,
          attributesRenderer = _props7.attributesRenderer,
          selected = _props7.selected,
          editing = _props7.editing,
          onKeyUp = _props7.onKeyUp;
      var updated = this.state.updated;
      var content = this.renderComponent(editing, cell) || this.renderEditor(editing, cell, row, col, dataEditor) || this.renderViewer(cell, row, col, valueRenderer, valueViewer);
      var className = [cell.className, 'cell', cell.overflow, selected && 'selected', editing && 'editing', cell.readOnly && 'read-only', updated && 'updated'].filter(function (a) {
        return a;
      }).join(' ');
      return _react2["default"].createElement(CellRenderer, {
        row: row,
        col: col,
        cell: cell,
        selected: selected,
        editing: editing,
        updated: updated,
        attributesRenderer: attributesRenderer,
        className: className,
        style: widthStyle(cell),
        onMouseDown: this.handleMouseDown,
        onMouseOver: this.handleMouseOver,
        onDoubleClick: this.handleDoubleClick,
        onContextMenu: this.handleContextMenu,
        onKeyUp: onKeyUp
      }, content);
    }
  }]);

  return DataCell;
}(_react.PureComponent);

exports["default"] = DataCell;
DataCell.propTypes = {
  row: _propTypes2["default"].number.isRequired,
  col: _propTypes2["default"].number.isRequired,
  cell: _propTypes2["default"].shape(_CellShape2["default"]).isRequired,
  forceEdit: _propTypes2["default"].bool,
  selected: _propTypes2["default"].bool,
  editing: _propTypes2["default"].bool,
  editValue: _propTypes2["default"].any,
  clearing: _propTypes2["default"].bool,
  cellRenderer: _propTypes2["default"].func,
  valueRenderer: _propTypes2["default"].func.isRequired,
  dataRenderer: _propTypes2["default"].func,
  valueViewer: _propTypes2["default"].func,
  dataEditor: _propTypes2["default"].func,
  attributesRenderer: _propTypes2["default"].func,
  onNavigate: _propTypes2["default"].func.isRequired,
  onMouseDown: _propTypes2["default"].func.isRequired,
  onMouseOver: _propTypes2["default"].func.isRequired,
  onDoubleClick: _propTypes2["default"].func.isRequired,
  onContextMenu: _propTypes2["default"].func.isRequired,
  onChange: _propTypes2["default"].func.isRequired,
  onRevert: _propTypes2["default"].func.isRequired,
  onEdit: _propTypes2["default"].func
};
DataCell.defaultProps = {
  forceEdit: false,
  selected: false,
  editing: false,
  clearing: false,
  cellRenderer: _Cell2["default"]
};

/***/ }),

/***/ "./node_modules/react-datasheet/lib/DataEditor.js":
/*!********************************************************!*\
  !*** ./node_modules/react-datasheet/lib/DataEditor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = __webpack_require__(/*! ./CellShape */ "./node_modules/react-datasheet/lib/CellShape.js");

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DataEditor = function (_PureComponent) {
  _inherits(DataEditor, _PureComponent);

  function DataEditor(props) {
    _classCallCheck(this, DataEditor);

    var _this = _possibleConstructorReturn(this, (DataEditor.__proto__ || Object.getPrototypeOf(DataEditor)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DataEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._input.focus();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          onKeyDown = _props.onKeyDown;
      return _react2["default"].createElement('input', {
        ref: function ref(input) {
          _this2._input = input;
        },
        className: 'data-editor',
        value: value,
        onChange: this.handleChange,
        onKeyDown: onKeyDown
      });
    }
  }]);

  return DataEditor;
}(_react.PureComponent);

exports["default"] = DataEditor;
DataEditor.propTypes = {
  value: _propTypes2["default"].node.isRequired,
  row: _propTypes2["default"].number.isRequired,
  col: _propTypes2["default"].number.isRequired,
  cell: _propTypes2["default"].shape(_CellShape2["default"]),
  onChange: _propTypes2["default"].func.isRequired,
  onCommit: _propTypes2["default"].func.isRequired,
  onRevert: _propTypes2["default"].func.isRequired,
  onKeyDown: _propTypes2["default"].func.isRequired
};

/***/ }),

/***/ "./node_modules/react-datasheet/lib/DataSheet.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-datasheet/lib/DataSheet.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Sheet = __webpack_require__(/*! ./Sheet */ "./node_modules/react-datasheet/lib/Sheet.js");

var _Sheet2 = _interopRequireDefault(_Sheet);

var _Row = __webpack_require__(/*! ./Row */ "./node_modules/react-datasheet/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/react-datasheet/lib/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

var _DataCell = __webpack_require__(/*! ./DataCell */ "./node_modules/react-datasheet/lib/DataCell.js");

var _DataCell2 = _interopRequireDefault(_DataCell);

var _DataEditor = __webpack_require__(/*! ./DataEditor */ "./node_modules/react-datasheet/lib/DataEditor.js");

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = __webpack_require__(/*! ./ValueViewer */ "./node_modules/react-datasheet/lib/ValueViewer.js");

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-datasheet/lib/keys.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isEmpty = function isEmpty(obj) {
  return Object.keys(obj).length === 0;
};

var range = function range(start, end) {
  var array = [];
  var inc = end - start > 0;

  for (var i = start; inc ? i <= end : i >= end; inc ? i++ : i--) {
    inc ? array.push(i) : array.unshift(i);
  }

  return array;
};

var defaultParsePaste = function defaultParsePaste(str) {
  return str.split(/\r\n|\n|\r/).map(function (row) {
    return row.split('\t');
  });
};

var DataSheet = function (_PureComponent) {
  _inherits(DataSheet, _PureComponent);

  function DataSheet(props) {
    _classCallCheck(this, DataSheet);

    var _this = _possibleConstructorReturn(this, (DataSheet.__proto__ || Object.getPrototypeOf(DataSheet)).call(this, props));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onMouseOver = _this.onMouseOver.bind(_this);
    _this.onDoubleClick = _this.onDoubleClick.bind(_this);
    _this.onContextMenu = _this.onContextMenu.bind(_this);
    _this.handleNavigate = _this.handleNavigate.bind(_this);
    _this.handleKey = _this.handleKey.bind(_this).bind(_this);
    _this.handleCut = _this.handleCut.bind(_this);
    _this.handleCopy = _this.handleCopy.bind(_this);
    _this.handlePaste = _this.handlePaste.bind(_this);
    _this.pageClick = _this.pageClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onRevert = _this.onRevert.bind(_this);
    _this.isSelected = _this.isSelected.bind(_this);
    _this.isEditing = _this.isEditing.bind(_this);
    _this.isClearing = _this.isClearing.bind(_this);
    _this.handleComponentKey = _this.handleComponentKey.bind(_this);
    _this.handleKeyboardCellMovement = _this.handleKeyboardCellMovement.bind(_this);
    _this.defaultState = {
      start: {},
      end: {},
      selecting: false,
      forceEdit: false,
      editing: {},
      clear: {}
    };
    _this.state = _this.defaultState;
    _this.removeAllListeners = _this.removeAllListeners.bind(_this);
    _this.handleIEClipboardEvents = _this.handleIEClipboardEvents.bind(_this);
    return _this;
  }

  _createClass(DataSheet, [{
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      document.removeEventListener('mousedown', this.pageClick);
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('cut', this.handleCut);
      document.removeEventListener('copy', this.handleCopy);
      document.removeEventListener('paste', this.handlePaste);
      document.removeEventListener('keydown', this.handleIEClipboardEvents);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add listener scoped to the DataSheet that catches otherwise unhandled
      // keyboard events when displaying components
      this.dgDom && this.dgDom.addEventListener('keydown', this.handleComponentKey);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dgDom && this.dgDom.removeEventListener('keydown', this.handleComponentKey);
      this.removeAllListeners();
    }
  }, {
    key: 'isSelectionControlled',
    value: function isSelectionControlled() {
      return 'selected' in this.props;
    }
  }, {
    key: 'getState',
    value: function getState() {
      var state = this.state;

      if (this.isSelectionControlled()) {
        var _ref = this.props.selected || {},
            start = _ref.start,
            end = _ref.end;

        start = start || this.defaultState.start;
        end = end || this.defaultState.end;
        state = _extends({}, state, {
          start: start,
          end: end
        });
      }

      return state;
    }
  }, {
    key: '_setState',
    value: function _setState(state) {
      if (this.isSelectionControlled() && ('start' in state || 'end' in state)) {
        var start = state.start,
            end = state.end,
            rest = _objectWithoutProperties(state, ['start', 'end']);

        var _props = this.props,
            selected = _props.selected,
            onSelect = _props.onSelect;
        selected = selected || {};

        if (!start) {
          start = 'start' in selected ? selected.start : this.defaultState.start;
        }

        if (!end) {
          end = 'end' in selected ? selected.end : this.defaultState.end;
        }

        onSelect && onSelect({
          start: start,
          end: end
        });
        this.setState(rest);
      } else {
        this.setState(state);
      }
    }
  }, {
    key: 'pageClick',
    value: function pageClick(e) {
      if (this.props.disablePageClick) return;
      var element = this.dgDom;

      if (!element.contains(e.target)) {
        this.setState(this.defaultState);
        this.removeAllListeners();
      }
    }
  }, {
    key: 'handleCut',
    value: function handleCut(e) {
      if (isEmpty(this.state.editing)) {
        e.preventDefault();
        this.handleCopy(e);

        var _getState = this.getState(),
            start = _getState.start,
            end = _getState.end;

        this.clearSelectedCells(start, end);
      }
    }
  }, {
    key: 'handleIEClipboardEvents',
    value: function handleIEClipboardEvents(e) {
      if (e.ctrlKey) {
        if (e.keyCode === 67) {
          // C - copy
          this.handleCopy(e);
        } else if (e.keyCode === 88) {
          // X - cut
          this.handleCut(e);
        } else if (e.keyCode === 86 || e.which === 86) {
          // P - patse
          this.handlePaste(e);
        }
      }
    }
  }, {
    key: 'handleCopy',
    value: function handleCopy(e) {
      if (isEmpty(this.state.editing)) {
        e.preventDefault();
        var _props2 = this.props,
            dataRenderer = _props2.dataRenderer,
            valueRenderer = _props2.valueRenderer,
            data = _props2.data;

        var _getState2 = this.getState(),
            start = _getState2.start,
            end = _getState2.end;

        if (this.props.handleCopy) {
          this.props.handleCopy({
            event: e,
            dataRenderer: dataRenderer,
            valueRenderer: valueRenderer,
            data: data,
            start: start,
            end: end,
            range: range
          });
        } else {
          var text = range(start.i, end.i).map(function (i) {
            return range(start.j, end.j).map(function (j) {
              var cell = data[i][j];
              var value = dataRenderer ? dataRenderer(cell, i, j) : null;

              if (value === '' || value === null || typeof value === 'undefined') {
                return valueRenderer(cell, i, j);
              }

              return value;
            }).join('\t');
          }).join('\n');

          if (window.clipboardData && window.clipboardData.setData) {
            window.clipboardData.setData('Text', text);
          } else {
            e.clipboardData.setData('text/plain', text);
          }
        }
      }
    }
  }, {
    key: 'handlePaste',
    value: function handlePaste(e) {
      if (isEmpty(this.state.editing)) {
        var _getState3 = this.getState(),
            start = _getState3.start,
            end = _getState3.end;

        start = {
          i: Math.min(start.i, end.i),
          j: Math.min(start.j, end.j)
        };
        end = {
          i: Math.max(start.i, end.i),
          j: Math.max(start.j, end.j)
        };
        var parse = this.props.parsePaste || defaultParsePaste;
        var changes = [];
        var pasteData = [];

        if (window.clipboardData && window.clipboardData.getData) {
          // IE
          pasteData = parse(window.clipboardData.getData('Text'));
        } else if (e.clipboardData && e.clipboardData.getData) {
          pasteData = parse(e.clipboardData.getData('text/plain'));
        } // in order of preference


        var _props3 = this.props,
            data = _props3.data,
            onCellsChanged = _props3.onCellsChanged,
            onPaste = _props3.onPaste,
            onChange = _props3.onChange;

        if (onCellsChanged) {
          var additions = [];
          pasteData.forEach(function (row, i) {
            row.forEach(function (value, j) {
              end = {
                i: start.i + i,
                j: start.j + j
              };
              var cell = data[end.i] && data[end.i][end.j];

              if (!cell) {
                additions.push({
                  row: end.i,
                  col: end.j,
                  value: value
                });
              } else if (!cell.readOnly) {
                changes.push({
                  cell: cell,
                  row: end.i,
                  col: end.j,
                  value: value
                });
              }
            });
          });

          if (additions.length) {
            onCellsChanged(changes, additions);
          } else {
            onCellsChanged(changes);
          }
        } else if (onPaste) {
          pasteData.forEach(function (row, i) {
            var rowData = [];
            row.forEach(function (pastedData, j) {
              end = {
                i: start.i + i,
                j: start.j + j
              };
              var cell = data[end.i] && data[end.i][end.j];
              rowData.push({
                cell: cell,
                data: pastedData
              });
            });
            changes.push(rowData);
          });
          onPaste(changes);
        } else if (onChange) {
          pasteData.forEach(function (row, i) {
            row.forEach(function (value, j) {
              end = {
                i: start.i + i,
                j: start.j + j
              };
              var cell = data[end.i] && data[end.i][end.j];

              if (cell && !cell.readOnly) {
                onChange(cell, end.i, end.j, value);
              }
            });
          });
        }

        this._setState({
          end: end
        });
      }
    }
  }, {
    key: 'handleKeyboardCellMovement',
    value: function handleKeyboardCellMovement(e) {
      var commit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _getState4 = this.getState(),
          start = _getState4.start,
          editing = _getState4.editing;

      var data = this.props.data;
      var isEditing = editing && !isEmpty(editing);
      var currentCell = data[start.i] && data[start.i][start.j];

      if (isEditing && !commit) {
        return false;
      }

      var hasComponent = currentCell && currentCell.component;
      var keyCode = e.which || e.keyCode;

      if (hasComponent && isEditing) {
        e.preventDefault();
        return;
      }

      if (keyCode === _keys.TAB_KEY) {
        this.handleNavigate(e, {
          i: 0,
          j: e.shiftKey ? -1 : 1
        }, true);
      } else if (keyCode === _keys.RIGHT_KEY) {
        this.handleNavigate(e, {
          i: 0,
          j: 1
        });
      } else if (keyCode === _keys.LEFT_KEY) {
        this.handleNavigate(e, {
          i: 0,
          j: -1
        });
      } else if (keyCode === _keys.UP_KEY) {
        this.handleNavigate(e, {
          i: -1,
          j: 0
        });
      } else if (keyCode === _keys.DOWN_KEY) {
        this.handleNavigate(e, {
          i: 1,
          j: 0
        });
      } else if (commit && keyCode === _keys.ENTER_KEY) {
        this.handleNavigate(e, {
          i: e.shiftKey ? -1 : 1,
          j: 0
        });
      }
    }
  }, {
    key: 'handleKey',
    value: function handleKey(e) {
      if (e.isPropagationStopped && e.isPropagationStopped()) {
        return;
      }

      var keyCode = e.which || e.keyCode;

      var _getState5 = this.getState(),
          start = _getState5.start,
          end = _getState5.end,
          editing = _getState5.editing;

      var isEditing = editing && !isEmpty(editing);
      var noCellsSelected = !start || isEmpty(start);
      var ctrlKeyPressed = e.ctrlKey || e.metaKey;
      var deleteKeysPressed = keyCode === _keys.DELETE_KEY || keyCode === _keys.BACKSPACE_KEY;
      var enterKeyPressed = keyCode === _keys.ENTER_KEY;
      var numbersPressed = keyCode >= 48 && keyCode <= 57;
      var lettersPressed = keyCode >= 65 && keyCode <= 90;
      var latin1Supplement = keyCode >= 160 && keyCode <= 255;
      var numPadKeysPressed = keyCode >= 96 && keyCode <= 105;
      var currentCell = !noCellsSelected && this.props.data[start.i][start.j];
      var equationKeysPressed = [187
      /* equal */
      , 189
      /* substract */
      , 190
      /* period */
      , 107
      /* add */
      , 109
      /* decimal point */
      , 110].indexOf(keyCode) > -1;

      if (noCellsSelected || ctrlKeyPressed) {
        return true;
      }

      if (!isEditing) {
        this.handleKeyboardCellMovement(e);

        if (deleteKeysPressed) {
          e.preventDefault();
          this.clearSelectedCells(start, end);
        } else if (currentCell && !currentCell.readOnly) {
          if (enterKeyPressed) {
            this._setState({
              editing: start,
              clear: {},
              forceEdit: true
            });

            e.preventDefault();
          } else if (numbersPressed || numPadKeysPressed || lettersPressed || latin1Supplement || equationKeysPressed) {
            // empty out cell if user starts typing without pressing enter
            this._setState({
              editing: start,
              clear: start,
              forceEdit: false
            });
          }
        }
      }
    }
  }, {
    key: 'getSelectedCells',
    value: function getSelectedCells(data, start, end) {
      var selected = [];
      range(start.i, end.i).map(function (row) {
        range(start.j, end.j).map(function (col) {
          if (data[row] && data[row][col]) {
            selected.push({
              cell: data[row][col],
              row: row,
              col: col
            });
          }
        });
      });
      return selected;
    }
  }, {
    key: 'clearSelectedCells',
    value: function clearSelectedCells(start, end) {
      var _this2 = this;

      var _props4 = this.props,
          data = _props4.data,
          onCellsChanged = _props4.onCellsChanged,
          onChange = _props4.onChange;
      var cells = this.getSelectedCells(data, start, end).filter(function (cell) {
        return !cell.cell.readOnly;
      }).map(function (cell) {
        return _extends({}, cell, {
          value: ''
        });
      });

      if (onCellsChanged) {
        onCellsChanged(cells);
        this.onRevert();
      } else if (onChange) {
        // ugly solution brought to you by https://reactjs.org/docs/react-component.html#setstate
        // setState in a loop is unreliable
        setTimeout(function () {
          cells.forEach(function (_ref2) {
            var cell = _ref2.cell,
                row = _ref2.row,
                col = _ref2.col,
                value = _ref2.value;
            onChange(cell, row, col, value);
          });

          _this2.onRevert();
        }, 0);
      }
    }
  }, {
    key: 'updateLocationSingleCell',
    value: function updateLocationSingleCell(location) {
      this._setState({
        start: location,
        end: location,
        editing: {}
      });
    }
  }, {
    key: 'updateLocationMultipleCells',
    value: function updateLocationMultipleCells(offsets) {
      var _getState6 = this.getState(),
          start = _getState6.start,
          end = _getState6.end;

      var data = this.props.data;
      var oldStartLocation = {
        i: start.i,
        j: start.j
      };
      var newEndLocation = {
        i: end.i + offsets.i,
        j: Math.min(data[0].length - 1, Math.max(0, end.j + offsets.j))
      };

      this._setState({
        start: oldStartLocation,
        end: newEndLocation,
        editing: {}
      });
    }
  }, {
    key: 'searchForNextSelectablePos',
    value: function searchForNextSelectablePos(isCellNavigable, data, start, offsets, jumpRow) {
      var previousRow = function previousRow(location) {
        return {
          i: location.i - 1,
          j: data[0].length - 1
        };
      };

      var nextRow = function nextRow(location) {
        return {
          i: location.i + 1,
          j: 0
        };
      };

      var advanceOffset = function advanceOffset(location) {
        return {
          i: location.i + offsets.i,
          j: location.j + offsets.j
        };
      };

      var isCellDefined = function isCellDefined(_ref3) {
        var i = _ref3.i,
            j = _ref3.j;
        return data[i] && typeof data[i][j] !== 'undefined';
      };

      var newLocation = advanceOffset(start);

      while (isCellDefined(newLocation) && !isCellNavigable(data[newLocation.i][newLocation.j], newLocation.i, newLocation.j)) {
        newLocation = advanceOffset(newLocation);
      }

      if (!isCellDefined(newLocation)) {
        if (!jumpRow) {
          return null;
        }

        if (offsets.j < 0) {
          newLocation = previousRow(newLocation);
        } else {
          newLocation = nextRow(newLocation);
        }
      }

      if (isCellDefined(newLocation) && !isCellNavigable(data[newLocation.i][newLocation.j], newLocation.i, newLocation.j)) {
        return this.searchForNextSelectablePos(isCellNavigable, data, newLocation, offsets, jumpRow);
      } else if (isCellDefined(newLocation)) {
        return newLocation;
      } else {
        return null;
      }
    }
  }, {
    key: 'handleNavigate',
    value: function handleNavigate(e, offsets, jumpRow) {
      if (offsets && (offsets.i || offsets.j)) {
        var data = this.props.data;

        var _getState7 = this.getState(),
            start = _getState7.start;

        var multiSelect = e.shiftKey && !jumpRow;
        var isCellNavigable = this.props.isCellNavigable ? this.props.isCellNavigable : function () {
          return true;
        };

        if (multiSelect) {
          this.updateLocationMultipleCells(offsets);
        } else {
          var newLocation = this.searchForNextSelectablePos(isCellNavigable, data, start, offsets, jumpRow);

          if (newLocation) {
            this.updateLocationSingleCell(newLocation);
          }
        }

        e.preventDefault();
      }
    }
  }, {
    key: 'handleComponentKey',
    value: function handleComponentKey(e) {
      var _this3 = this; // handles keyboard events when editing components


      var keyCode = e.which || e.keyCode;

      if (![_keys.ENTER_KEY, _keys.ESCAPE_KEY, _keys.TAB_KEY].includes(keyCode)) {
        return;
      }

      var editing = this.state.editing;
      var data = this.props.data;
      var isEditing = !isEmpty(editing);

      if (isEditing) {
        var currentCell = data[editing.i][editing.j];
        var offset = e.shiftKey ? -1 : 1;

        if (currentCell && currentCell.component && !currentCell.forceComponent) {
          e.preventDefault();
          var func = this.onRevert; // ESCAPE_KEY

          if (keyCode === _keys.ENTER_KEY) {
            func = function func() {
              return _this3.handleNavigate(e, {
                i: offset,
                j: 0
              });
            };
          } else if (keyCode === _keys.TAB_KEY) {
            func = function func() {
              return _this3.handleNavigate(e, {
                i: 0,
                j: offset
              }, true);
            };
          } // setTimeout makes sure that component is done handling the event before we take over


          setTimeout(function () {
            func();
            _this3.dgDom && _this3.dgDom.focus();
          }, 1);
        }
      }
    }
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(evt, i, j) {
      var cell = this.props.data[i][j];

      if (this.props.onContextMenu) {
        this.props.onContextMenu(evt, cell, i, j);
      }
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(i, j) {
      var cell = this.props.data[i][j];

      if (!cell.readOnly) {
        this._setState({
          editing: {
            i: i,
            j: j
          },
          forceEdit: true,
          clear: {}
        });
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(i, j, e) {
      var isNowEditingSameCell = !isEmpty(this.state.editing) && this.state.editing.i === i && this.state.editing.j === j;
      var editing = isEmpty(this.state.editing) || this.state.editing.i !== i || this.state.editing.j !== j ? {} : this.state.editing;

      this._setState({
        selecting: !isNowEditingSameCell,
        start: e.shiftKey ? this.state.start : {
          i: i,
          j: j
        },
        end: {
          i: i,
          j: j
        },
        editing: editing,
        forceEdit: !!isNowEditingSameCell
      });

      var ua = window.navigator.userAgent;
      var isIE = /MSIE|Trident/.test(ua); // Listen for Ctrl + V in case of IE

      if (isIE) {
        document.addEventListener('keydown', this.handleIEClipboardEvents);
      } // Keep listening to mouse if user releases the mouse (dragging outside)


      document.addEventListener('mouseup', this.onMouseUp); // Listen for any outside mouse clicks

      document.addEventListener('mousedown', this.pageClick); // Cut, copy and paste event handlers

      document.addEventListener('cut', this.handleCut);
      document.addEventListener('copy', this.handleCopy);
      document.addEventListener('paste', this.handlePaste);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(i, j) {
      if (this.state.selecting && isEmpty(this.state.editing)) {
        this._setState({
          end: {
            i: i,
            j: j
          }
        });
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      this._setState({
        selecting: false
      });

      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'onChange',
    value: function onChange(row, col, value) {
      var _props5 = this.props,
          onChange = _props5.onChange,
          onCellsChanged = _props5.onCellsChanged,
          data = _props5.data;

      if (onCellsChanged) {
        onCellsChanged([{
          cell: data[row][col],
          row: row,
          col: col,
          value: value
        }]);
      } else if (onChange) {
        onChange(data[row][col], row, col, value);
      }

      this.onRevert();
    }
  }, {
    key: 'onRevert',
    value: function onRevert() {
      this._setState({
        editing: {}
      });

      this.dgDom && this.dgDom.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _state = this.state,
          start = _state.start,
          end = _state.end;
      var prevEnd = prevState.end;

      if (!isEmpty(end) && !(end.i === prevEnd.i && end.j === prevEnd.j) && !this.isSelectionControlled()) {
        this.props.onSelect && this.props.onSelect({
          start: start,
          end: end
        });
      }
    }
  }, {
    key: 'isSelected',
    value: function isSelected(i, j) {
      var _getState8 = this.getState(),
          start = _getState8.start,
          end = _getState8.end;

      var posX = j >= start.j && j <= end.j;
      var negX = j <= start.j && j >= end.j;
      var posY = i >= start.i && i <= end.i;
      var negY = i <= start.i && i >= end.i;
      return posX && posY || negX && posY || negX && negY || posX && negY;
    }
  }, {
    key: 'isEditing',
    value: function isEditing(i, j) {
      return this.state.editing.i === i && this.state.editing.j === j;
    }
  }, {
    key: 'isClearing',
    value: function isClearing(i, j) {
      return this.state.clear.i === i && this.state.clear.j === j;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props6 = this.props,
          SheetRenderer = _props6.sheetRenderer,
          RowRenderer = _props6.rowRenderer,
          cellRenderer = _props6.cellRenderer,
          dataRenderer = _props6.dataRenderer,
          valueRenderer = _props6.valueRenderer,
          dataEditor = _props6.dataEditor,
          valueViewer = _props6.valueViewer,
          attributesRenderer = _props6.attributesRenderer,
          className = _props6.className,
          overflow = _props6.overflow,
          data = _props6.data,
          keyFn = _props6.keyFn;
      var forceEdit = this.state.forceEdit;
      return _react2["default"].createElement('span', {
        ref: function ref(r) {
          _this4.dgDom = r;
        },
        tabIndex: '0',
        className: 'data-grid-container',
        onKeyDown: this.handleKey
      }, _react2["default"].createElement(SheetRenderer, {
        data: data,
        className: ['data-grid', className, overflow].filter(function (a) {
          return a;
        }).join(' ')
      }, data.map(function (row, i) {
        return _react2["default"].createElement(RowRenderer, {
          key: keyFn ? keyFn(i) : i,
          row: i,
          cells: row
        }, row.map(function (cell, j) {
          var isEditing = _this4.isEditing(i, j);

          return _react2["default"].createElement(_DataCell2["default"], _extends({
            key: cell.key ? cell.key : i + '-' + j,
            row: i,
            col: j,
            cell: cell,
            forceEdit: false,
            onMouseDown: _this4.onMouseDown,
            onMouseOver: _this4.onMouseOver,
            onDoubleClick: _this4.onDoubleClick,
            onContextMenu: _this4.onContextMenu,
            onChange: _this4.onChange,
            onRevert: _this4.onRevert,
            onNavigate: _this4.handleKeyboardCellMovement,
            onKey: _this4.handleKey,
            selected: _this4.isSelected(i, j),
            editing: isEditing,
            clearing: _this4.isClearing(i, j),
            attributesRenderer: attributesRenderer,
            cellRenderer: cellRenderer,
            valueRenderer: valueRenderer,
            dataRenderer: dataRenderer,
            valueViewer: valueViewer,
            dataEditor: dataEditor
          }, isEditing ? {
            forceEdit: forceEdit
          } : {}));
        }));
      })));
    }
  }]);

  return DataSheet;
}(_react.PureComponent);

exports["default"] = DataSheet;
DataSheet.propTypes = {
  data: _propTypes2["default"].array.isRequired,
  className: _propTypes2["default"].string,
  disablePageClick: _propTypes2["default"].bool,
  overflow: _propTypes2["default"].oneOf(['wrap', 'nowrap', 'clip']),
  onChange: _propTypes2["default"].func,
  onCellsChanged: _propTypes2["default"].func,
  onContextMenu: _propTypes2["default"].func,
  onSelect: _propTypes2["default"].func,
  isCellNavigable: _propTypes2["default"].func,
  selected: _propTypes2["default"].shape({
    start: _propTypes2["default"].shape({
      i: _propTypes2["default"].number,
      j: _propTypes2["default"].number
    }),
    end: _propTypes2["default"].shape({
      i: _propTypes2["default"].number,
      j: _propTypes2["default"].number
    })
  }),
  valueRenderer: _propTypes2["default"].func.isRequired,
  dataRenderer: _propTypes2["default"].func,
  sheetRenderer: _propTypes2["default"].func.isRequired,
  rowRenderer: _propTypes2["default"].func.isRequired,
  cellRenderer: _propTypes2["default"].func.isRequired,
  valueViewer: _propTypes2["default"].func,
  dataEditor: _propTypes2["default"].func,
  parsePaste: _propTypes2["default"].func,
  attributesRenderer: _propTypes2["default"].func,
  keyFn: _propTypes2["default"].func,
  handleCopy: _propTypes2["default"].func
};
DataSheet.defaultProps = {
  sheetRenderer: _Sheet2["default"],
  rowRenderer: _Row2["default"],
  cellRenderer: _Cell2["default"],
  valueViewer: _ValueViewer2["default"],
  dataEditor: _DataEditor2["default"]
};

/***/ }),

/***/ "./node_modules/react-datasheet/lib/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-datasheet/lib/Row.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = __webpack_require__(/*! ./CellShape */ "./node_modules/react-datasheet/lib/CellShape.js");

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Row = function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement('tr', null, this.props.children);
    }
  }]);

  return Row;
}(_react.PureComponent);

Row.propTypes = {
  row: _propTypes2["default"].number.isRequired,
  cells: _propTypes2["default"].arrayOf(_propTypes2["default"].shape(_CellShape2["default"])).isRequired
};
exports["default"] = Row;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/Sheet.js":
/*!***************************************************!*\
  !*** ./node_modules/react-datasheet/lib/Sheet.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Sheet = function (_PureComponent) {
  _inherits(Sheet, _PureComponent);

  function Sheet() {
    _classCallCheck(this, Sheet);

    return _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).apply(this, arguments));
  }

  _createClass(Sheet, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement('table', {
        className: this.props.className
      }, _react2["default"].createElement('tbody', null, this.props.children));
    }
  }]);

  return Sheet;
}(_react.PureComponent);

Sheet.propTypes = {
  className: _propTypes2["default"].string,
  data: _propTypes2["default"].array.isRequired
};
exports["default"] = Sheet;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/ValueViewer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-datasheet/lib/ValueViewer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = __webpack_require__(/*! ./CellShape */ "./node_modules/react-datasheet/lib/CellShape.js");

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ValueViewer = function (_PureComponent) {
  _inherits(ValueViewer, _PureComponent);

  function ValueViewer() {
    _classCallCheck(this, ValueViewer);

    return _possibleConstructorReturn(this, (ValueViewer.__proto__ || Object.getPrototypeOf(ValueViewer)).apply(this, arguments));
  }

  _createClass(ValueViewer, [{
    key: 'render',
    value: function render() {
      var value = this.props.value;
      return _react2["default"].createElement('span', {
        className: 'value-viewer'
      }, value);
    }
  }]);

  return ValueViewer;
}(_react.PureComponent);

exports["default"] = ValueViewer;
ValueViewer.propTypes = {
  row: _propTypes2["default"].number.isRequired,
  col: _propTypes2["default"].number.isRequired,
  cell: _propTypes2["default"].shape(_CellShape2["default"]),
  value: _propTypes2["default"].node.isRequired
};

/***/ }),

/***/ "./node_modules/react-datasheet/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-datasheet/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderData = exports.renderValue = exports.ValueViewer = exports.DataEditor = exports.Cell = exports.Row = exports.Sheet = undefined;

var _DataSheet = __webpack_require__(/*! ./DataSheet */ "./node_modules/react-datasheet/lib/DataSheet.js");

var _DataSheet2 = _interopRequireDefault(_DataSheet);

var _Sheet = __webpack_require__(/*! ./Sheet */ "./node_modules/react-datasheet/lib/Sheet.js");

var _Sheet2 = _interopRequireDefault(_Sheet);

var _Row = __webpack_require__(/*! ./Row */ "./node_modules/react-datasheet/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/react-datasheet/lib/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

var _DataEditor = __webpack_require__(/*! ./DataEditor */ "./node_modules/react-datasheet/lib/DataEditor.js");

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = __webpack_require__(/*! ./ValueViewer */ "./node_modules/react-datasheet/lib/ValueViewer.js");

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _renderHelpers = __webpack_require__(/*! ./renderHelpers */ "./node_modules/react-datasheet/lib/renderHelpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = _DataSheet2["default"];
exports.Sheet = _Sheet2["default"];
exports.Row = _Row2["default"];
exports.Cell = _Cell2["default"];
exports.DataEditor = _DataEditor2["default"];
exports.ValueViewer = _ValueViewer2["default"];
exports.renderValue = _renderHelpers.renderValue;
exports.renderData = _renderHelpers.renderData;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/keys.js":
/*!**************************************************!*\
  !*** ./node_modules/react-datasheet/lib/keys.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TAB_KEY = exports.TAB_KEY = 9;
var ENTER_KEY = exports.ENTER_KEY = 13;
var ESCAPE_KEY = exports.ESCAPE_KEY = 27;
var LEFT_KEY = exports.LEFT_KEY = 37;
var UP_KEY = exports.UP_KEY = 38;
var RIGHT_KEY = exports.RIGHT_KEY = 39;
var DOWN_KEY = exports.DOWN_KEY = 40;
var DELETE_KEY = exports.DELETE_KEY = 46;
var BACKSPACE_KEY = exports.BACKSPACE_KEY = 8;

/***/ }),

/***/ "./node_modules/react-datasheet/lib/react-datasheet.css":
/*!**************************************************************!*\
  !*** ./node_modules/react-datasheet/lib/react-datasheet.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_react_datasheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./react-datasheet.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-datasheet/lib/react-datasheet.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_react_datasheet_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_react_datasheet_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/react-datasheet/lib/renderHelpers.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-datasheet/lib/renderHelpers.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderValue = renderValue;
exports.renderData = renderData;

function renderValue(cell, row, col, valueRenderer) {
  var value = valueRenderer(cell, row, col);
  return value === null || typeof value === 'undefined' ? '' : value;
}

function renderData(cell, row, col, valueRenderer, dataRenderer) {
  var value = dataRenderer ? dataRenderer(cell, row, col) : null;
  return value === null || typeof value === 'undefined' ? renderValue(cell, row, col, valueRenderer) : value;
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./srcjs/shinyRDT.css":
/*!****************************!*\
  !*** ./srcjs/shinyRDT.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shinyRDT_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./shinyRDT.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/shinyRDT.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shinyRDT_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_shinyRDT_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./srcjs/shinyRDT.jsx":
/*!****************************!*\
  !*** ./srcjs/shinyRDT.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_datasheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-datasheet */ "./node_modules/react-datasheet/lib/index.js");
/* harmony import */ var react_datasheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_datasheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datasheet_lib_react_datasheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datasheet/lib/react-datasheet.css */ "./node_modules/react-datasheet/lib/react-datasheet.css");
/* harmony import */ var _shinyRDT_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shinyRDT.css */ "./srcjs/shinyRDT.css");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var toValueFormat = function toValueFormat(_ref) {
  var data = _ref.data,
      headers = _ref.headers,
      nrows = _ref.nrows;
  var dataArray = [];
  var headerArray = [];
  headers.forEach(function (colname) {
    headerArray.push({
      value: colname,
      readOnly: true
    });
  });
  dataArray.push(headerArray);

  var _loop = function _loop(i) {
    var row = [];
    headers.forEach(function (colname) {
      row.push({
        value: data[colname][i]
      });
    });
    dataArray.push(row);
  };

  for (var i = 0; i < nrows; i++) {
    _loop(i);
  }

  return dataArray;
};

var DataSheetInput = function DataSheetInput(_ref2) {
  var data = _ref2.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(toValueFormat(data)),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setData = _useState2[1]; // const [input, setData] = useState([
  // 		[
  // 			{readOnly: true, value: ''},
  // 			{value: 'A', readOnly: true},
  // 			{value: 'B', readOnly: true},
  // 			{value: 'C', readOnly: true},
  // 			{value: 'D', readOnly: true}
  // 		],
  // 		[{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
  // 		[{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
  // 		[{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
  // 		[{readOnly: true, value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
  // 	]
  // );
  // console.log(data);
  // console.log(headers);
  // console.log(toValueFormat(data));


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_datasheet__WEBPACK_IMPORTED_MODULE_0___default.a, {
    data: input,
    valueRenderer: function valueRenderer(cell) {
      return cell.value;
    },
    onContextMenu: function onContextMenu(e, cell, i, j) {
      return cell.readOnly ? e.preventDefault() : null;
    },
    onCellsChanged: function onCellsChanged(changes) {
      var grid = input.map(function (row) {
        return _toConsumableArray(row);
      });
      changes.forEach(function (_ref3) {
        var cell = _ref3.cell,
            row = _ref3.row,
            col = _ref3.col,
            value = _ref3.value;
        grid[row][col] = _objectSpread(_objectSpread({}, grid[row][col]), {}, {
          value: value
        });
      });
      setData(grid);
    }
  });
};

Object(reactR__WEBPACK_IMPORTED_MODULE_3__["reactWidget"])('shinyRDT', 'output', {
  DataSheet: DataSheetInput
});

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=shinyRDT.js.map