define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./EpictPanel.tsx":
/*!************************!*\
  !*** ./EpictPanel.tsx ***!
  \************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utilities */ "./Utilities.tsx");







var SimplePanel = function SimplePanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var processedBgURL = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(options.bgURL);
  var boxes = options.boxes;
  var styles = getStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.wrapper)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.imgWrapper),
    id: "img-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    srcSet: processedBgURL,
    onClick: function onClick(event) {
      return onBgClick(event);
    }
  }), boxes.map(function (oneBox, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.box, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                top: ", "px;\n                left: ", "px;\n                color: ", ";\n                transform: rotate(", "deg);\n              "], ["\n                top: ", "px;\n                left: ", "px;\n                color: ", ";\n                transform: rotate(", "deg);\n              "])), oneBox.ypos, oneBox.xpos, getBoxColor(oneBox), oneBox.angle))
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: oneBox.url ? Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(oneBox.url) : '#',
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.boxLink, oneBox.url ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      cursor: pointer;\n                    "], ["\n                      cursor: pointer;\n                    "]))) : Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      cursor: default;\n                    "], ["\n                      cursor: default;\n                    "]))))
    }, oneBox.hasOrb && oneBox.orbHideText || oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Top' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "], ["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
      title: getBoxTitleText(oneBox)
    }) : null, !oneBox.hasOrb || !oneBox.orbHideText ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      font-size: ", "px;\n                      line-heigh: normal;\n                    "], ["\n                      font-size: ", "px;\n                      line-heigh: normal;\n                    "])), oneBox.fontSize))
    }, oneBox.hasOrb && oneBox.orbLocation === 'Left' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, styles.alignVertically, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
      title: getBoxTitleText(oneBox)
    }) : null, oneBox.prefix ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.alignVertically, styles.boxPrefix, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          font-size: ", "px;\n                        "], ["\n                          font-size: ", "px;\n                        "])), oneBox.prefixSize)),
      title: getBoxTitleText(oneBox)
    }, oneBox.prefix) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.alignVertically)
    }, getBoxText(oneBox)), oneBox.suffix ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.alignVertically, styles.boxSuffix, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          font-size: ", "px;\n                        "], ["\n                          font-size: ", "px;\n                        "])), oneBox.suffixSize)),
      title: getBoxTitleText(oneBox)
    }, oneBox.suffix) : null, oneBox.hasOrb && oneBox.orbLocation === 'Right' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, styles.alignVertically, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
      title: getBoxTitleText(oneBox)
    }) : null) : null, oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Bottom' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "], ["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
      title: getBoxTitleText(oneBox)
    }) : null));
  })));

  function isBoxBlinking(box) {
    if (box.isUsingThresholds && box.thresholds && (box.blinkHigh || box.blinkLow)) {
      var value = getBoxText(box);
      var lowThreshold = +box.thresholds.split(',')[0];
      var highThreshold = +box.thresholds.split(',')[1];

      if (box.blinkHigh && +value >= highThreshold) {
        return true;
      } else if (box.blinkLow && +value <= lowThreshold) {
        return true;
      }
    }

    return false;
  }

  function getBoxColor(box) {
    var value = getBoxText(box);

    if (box.isUsingThresholds && box.thresholds) {
      var lowThreshold = +box.thresholds.split(',')[0];
      var highThreshold = +box.thresholds.split(',')[1];

      if (+value >= highThreshold) {
        return box.colorHigh;
      } else if (+value <= lowThreshold) {
        return box.colorLow;
      } else {
        return box.colorMedium;
      }
    }

    return box.color;
  }

  function getBoxTitleText(box) {
    var _a, _b;

    return _b = (_a = box.prefix, _a !== null && _a !== void 0 ? _a : ''.concat(getBoxValue(box.serie, 5))), _b !== null && _b !== void 0 ? _b : ''.concat(box.suffix);
  }

  function getBoxText(box) {
    return getBoxValue(box.serie, box.decimal);
  }

  function getBoxValue(serieName, decimals) {
    var _a;

    var retVal = undefined;
    var serie = undefined;
    data.series.every(function (frm) {
      var numberFields = frm.fields.filter(function (f) {
        return f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
      });
      var targetField = numberFields.find(function (f) {
        var fieldDisplayName = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(f, frm);
        var discoveredField = frm.name === undefined || frm.name === fieldDisplayName ? fieldDisplayName : frm.name + " (" + fieldDisplayName + ")";
        return discoveredField === serieName;
      });

      if (targetField !== undefined && targetField !== null) {
        retVal = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getLastNotNullValue"])(targetField, decimals);
        return false; //We found what we were looking for, so stop iterating
      }

      return true; //Continue iterating
    });

    if (retVal === undefined) {
      serie = data.series.find(function (s) {
        return s.name === serieName;
      });
      /*for backward compatibility*/

      var fields = (_a = serie) === null || _a === void 0 ? void 0 : _a.fields.find(function (f) {
        return f.type === 'number';
      });
      retVal = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getLastNotNullValue"])(fields, decimals);
    }

    if (retVal === undefined) {
      retVal = 'N/A';
    }

    return retVal;
  }
};

var onBgClick = function onBgClick(event) {
  if (event.ctrlKey) {
    alert('X:' + event.nativeEvent.offsetX + ' Y:' + event.nativeEvent.offsetY);
  }
};

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      justify-content: center;\n    "], ["\n      display: flex;\n      justify-content: center;\n    "]))),
    imgWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    box: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n    "], ["\n      position: absolute;\n    "]))),
    boxLink: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "], ["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "]))),
    orbDefaults: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "], ["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "]))),
    blink: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "], ["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "]))),
    alignVertically: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "], ["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "]))),
    boxPrefix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "], ["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "]))),
    boxSuffix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "], ["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;

/***/ }),

/***/ "./MigHandler.tsx":
/*!************************!*\
  !*** ./MigHandler.tsx ***!
  \************************/
/*! exports provided: MigHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigHandler", function() { return MigHandler; });
var Opts =
/** @class */
function () {
  function Opts() {}

  return Opts;
}();

var MigHandler = function MigHandler(panel) {
  if (panel.boxes != null && panel.pluginVersion == null) {
    //We found boxes to upgrade from an old plugin
    console.log('Migrating from an older version', panel);
    var options_1 = new Opts();
    options_1.bgURL = panel.bgURL;
    options_1.boxes = [];
    panel.boxes.forEach(function (oldBox) {
      console.log('Found a box to upgrade:', oldBox);
      options_1.boxes.push({
        angle: oldBox.angle,
        color: oldBox.color,
        colorHigh: oldBox.colorHigh,
        colorLow: oldBox.colorLow,
        colorMedium: oldBox.colorMedium,
        decimal: oldBox.decimal,
        fontSize: oldBox.fontsize,
        hasOrb: oldBox.hasOrb,
        hasBackground: false,
        backgroundColor: '#5794F2',
        orbHideText: oldBox.orbHideText,
        orbLocation: oldBox.orbLocation,
        orbSize: oldBox.orbSize,
        prefixSize: oldBox.prefixSize,
        serie: oldBox.serie,
        suffixSize: oldBox.suffixSize,
        text: oldBox.text,
        suffix: oldBox.suffix,
        prefix: oldBox.prefix,
        thresholds: oldBox.thresholds,
        blinkHigh: oldBox.blinkHigh,
        blinkLow: oldBox.blinkLow,
        isUsingThresholds: oldBox.usingThresholds,
        xpos: oldBox.xpos,
        ypos: oldBox.ypos,
        url: oldBox.URL
      });
    });
    return options_1;
  } else {
    //Nothing to do
    console.log('MigHandler: Nothing to upgrade');
    return panel.options;
  }
};

/***/ }),

/***/ "./Utilities.tsx":
/*!***********************!*\
  !*** ./Utilities.tsx ***!
  \***********************/
/*! exports provided: getLastNotNullValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastNotNullValue", function() { return getLastNotNullValue; });
function getLastNotNullValue(fields, decimals) {
  var _a, _b, _c;

  var retVal = 'N/A';
  var lastNotNullValueIndex = (_a = fields) === null || _a === void 0 ? void 0 : _a.values.length;

  if (lastNotNullValueIndex) {
    while (lastNotNullValueIndex-- && ((_b = fields) === null || _b === void 0 ? void 0 : _b.values.get(lastNotNullValueIndex)) == null) {} //Find the last non-null value


    if (lastNotNullValueIndex !== -1) {
      // If we only have null values, index = -1
      retVal = (_c = fields) === null || _c === void 0 ? void 0 : _c.values.get(lastNotNullValueIndex).toFixed(decimals).toString();
    }
  }

  return retVal;
}

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EpictPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EpictPanel */ "./EpictPanel.tsx");
/* harmony import */ var MigHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MigHandler */ "./MigHandler.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);





var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_EpictPanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  builder.addTextInput({
    name: 'Background URL',
    path: 'bgURL'
  }).addCustomEditor({
    path: 'boxes',
    name: 'Boxes definitions',
    id: 'boxesDefinitions',
    defaultValue: null,
    editor: function editor(props) {
      var ctx = props.context;
      var data = ctx.data;
      var options = ctx.options;

      if (options.boxes == null) {
        options.boxes = [];
      }

      var onAddBoxBtnClicked = function onAddBoxBtnClicked(_a) {
        var target = _a.target;

        if (options.boxes == null) {
          options.boxes = [];
        }

        options.boxes.push({
          angle: 0,
          color: '#fff',
          colorHigh: '#f00',
          colorLow: '#0f0',
          colorMedium: '#fa1',
          decimal: 0,
          fontSize: 12,
          hasOrb: false,
          hasBackground: false,
          backgroundColor: '#5794F2',
          orbHideText: false,
          orbLocation: 'Left',
          orbSize: 10,
          prefixSize: 10,
          serie: 'A-Serie',
          suffixSize: 10,
          text: 'N/A',
          suffix: '',
          prefix: '',
          thresholds: '',
          blinkHigh: true,
          blinkLow: false,
          isUsingThresholds: false,
          xpos: 0,
          ypos: 0,
          url: ''
        });
        props.onChange(options.boxes);
      };

      var onDeleteBox = function onDeleteBox(_a, index) {
        var target = _a.target;
        delete options.boxes[index];
        options.boxes.splice(index, 1);
        props.onChange(options.boxes);
      };

      var onCloneBox = function onCloneBox(_a, box) {
        var target = _a.target;
        options.boxes.push(Object.create(box));
        props.onChange(options.boxes);
      };

      var onBoxSerieUpdated = function onBoxSerieUpdated(value, box) {
        box.serie = value;
        props.onChange(options.boxes);
      };

      var onBoxPrefixChanged = function onBoxPrefixChanged(_a, box) {
        var target = _a.target;
        box.prefix = target.value;
        props.onChange(options.boxes);
      };

      var onBoxPrefixFontSizeChanged = function onBoxPrefixFontSizeChanged(_a, box) {
        var target = _a.target;
        box.prefixSize = target.value;
        props.onChange(options.boxes);
      };

      var onBoxSuffixChanged = function onBoxSuffixChanged(_a, box) {
        var target = _a.target;
        box.suffix = target.value;
        props.onChange(options.boxes);
      };

      var onBoxSuffixFontSizeChanged = function onBoxSuffixFontSizeChanged(_a, box) {
        var target = _a.target;
        box.suffixSize = target.value;
        props.onChange(options.boxes);
      };

      var onBoxXposChanged = function onBoxXposChanged(_a, box) {
        var target = _a.target;
        box.xpos = target.value;
        props.onChange(options.boxes);
      };

      var onBoxYposChanged = function onBoxYposChanged(_a, box) {
        var target = _a.target;
        box.ypos = target.value;
        props.onChange(options.boxes);
      };

      var onBoxAngleChanged = function onBoxAngleChanged(_a, box) {
        var target = _a.target;
        box.angle = target.value;
        props.onChange(options.boxes);
      };

      var onBoxUrlChanged = function onBoxUrlChanged(_a, box) {
        var target = _a.target;
        box.url = target.value;
        props.onChange(options.boxes);
      };

      var onBoxDecimalChanged = function onBoxDecimalChanged(_a, box) {
        var target = _a.target;
        box.decimal = target.value;
        props.onChange(options.boxes);
      };

      var onBoxFontsizeChanged = function onBoxFontsizeChanged(_a, box) {
        var target = _a.target;
        box.fontSize = target.value;
        props.onChange(options.boxes);
      };

      var onBoxOrbChanged = function onBoxOrbChanged(_a, box) {
        var target = _a.target;
        box.hasOrb = target.checked;
        props.onChange(options.boxes);
      };

      var onBoxOrbHideTextChanged = function onBoxOrbHideTextChanged(_a, box) {
        var target = _a.target;
        box.orbHideText = target.checked;
        props.onChange(options.boxes);
      };

      var onBoxOrbLocationChanged = function onBoxOrbLocationChanged(location, box) {
        box.orbLocation = location.value;
        props.onChange(options.boxes);
      }; // const onBoxHasBackgroundChanged = ({ target }: any, box: Box) => {
      //   box.hasBackground = target.checked;
      //   props.onChange(options.boxes);
      // };
      // const onBoxBackgroundColorChanged = (color: string, box: Box) => {
      //   box.backgroundColor = color;
      //   props.onChange(options.boxes);
      // };


      var onBoxUseThresholdsChanged = function onBoxUseThresholdsChanged(_a, box) {
        var target = _a.target;
        box.isUsingThresholds = target.checked;
        props.onChange(options.boxes);
      };

      var onBoxThresholdsChanged = function onBoxThresholdsChanged(_a, box) {
        var target = _a.target;
        box.thresholds = target.value;
        props.onChange(options.boxes);
      };

      var onBoxColorChanged = function onBoxColorChanged(color, box) {
        box.color = color;
        props.onChange(options.boxes);
      };

      var onBoxColorLowChanged = function onBoxColorLowChanged(color, box) {
        box.colorLow = color;
        props.onChange(options.boxes);
      };

      var onBoxColorMediumChanged = function onBoxColorMediumChanged(color, box) {
        box.colorMedium = color;
        props.onChange(options.boxes);
      };

      var onBoxColorHighChanged = function onBoxColorHighChanged(color, box) {
        box.colorHigh = color;
        props.onChange(options.boxes);
      };

      var onBoxBlinkHighChanged = function onBoxBlinkHighChanged(_a, box) {
        var target = _a.target;
        box.blinkHigh = target.checked;
        props.onChange(options.boxes);
      };

      var onBoxBlinkLowChanged = function onBoxBlinkLowChanged(_a, box) {
        var target = _a.target;
        box.blinkLow = target.checked;
        props.onChange(options.boxes);
      };

      var onBoxOrbSizeChanged = function onBoxOrbSizeChanged(_a, box) {
        var target = _a.target;
        box.orbSize = target.value;
        props.onChange(options.boxes);
      };

      var orbLocations = [{
        label: 'Top',
        value: 'Top'
      }, {
        label: 'Bottom',
        value: 'Bottom'
      }, {
        label: 'Left',
        value: 'Left'
      }, {
        label: 'Right',
        value: 'Right'
      }];
      var availableSeries = [];
      data.forEach(function (frm) {
        var valuesFields = frm.fields.filter(function (f) {
          return f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number;
        });
        valuesFields.forEach(function (oneValField) {
          if (oneValField !== undefined) {
            var fieldDisplayName = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_0__["getFieldDisplayName"])(oneValField, frm);
            var discoveredField = frm.name === undefined || frm.name === fieldDisplayName ? fieldDisplayName : frm.name + " (" + fieldDisplayName + ")";
            availableSeries.push({
              value: discoveredField,
              label: discoveredField
            });
          }
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "section gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
        className: "section-heading"
      }, "Boxes definitions"), options.boxes.map(function (oneBox, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", null, "Box #", index), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "section gf-form-group"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
          name: "trash-alt",
          size: "xl",
          surface: "panel",
          onClick: function onClick(event) {
            return onDeleteBox(event, index);
          }
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
          name: "copy",
          size: "xl",
          surface: "panel",
          onClick: function onClick(event) {
            return onCloneBox(event, oneBox);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "section gf-form-group"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
          className: "section-heading"
        }, "Metric"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Name"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          readOnly: true,
          value: oneBox.serie,
          width: 16
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["ValuePicker"], {
          label: "Change Metric",
          icon: "exchange-alt",
          options: availableSeries,
          onChange: function onChange(selectedItem) {
            return onBoxSerieUpdated(selectedItem.value, oneBox);
          },
          variant: "secondary",
          size: "sm"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Prefix"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxPrefixChanged(event, oneBox);
          },
          value: oneBox.prefix
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Suffix"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxSuffixChanged(event, oneBox);
          },
          value: oneBox.suffix
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, oneBox.prefix ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Prefix size"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxPrefixFontSizeChanged(event, oneBox);
          },
          value: oneBox.prefixSize
        }))) : null, oneBox.suffix ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Suffix size"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxSuffixFontSizeChanged(event, oneBox);
          },
          value: oneBox.suffixSize
        }))) : null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "section gf-form-group"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
          className: "section-heading"
        }, "Position and Link"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          theme: "info",
          content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "You can easily find the coordinates if you ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code", null, "ctrl"), "+", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code", null, "left click"), "anywhere on your image")
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "info-circle"
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "X"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxXposChanged(event, oneBox);
          },
          value: oneBox.xpos
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Y"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxYposChanged(event, oneBox);
          },
          value: oneBox.ypos
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Angle"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxAngleChanged(event, oneBox);
          },
          value: oneBox.angle
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Link"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxUrlChanged(event, oneBox);
          },
          value: oneBox.url
        })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "section gf-form-group"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
          className: "section-heading"
        }, "Appearance"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Decimal"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxDecimalChanged(event, oneBox);
          },
          value: oneBox.decimal
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Font-size"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxFontsizeChanged(event, oneBox);
          },
          value: oneBox.fontSize
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "width-5"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Show Orb"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          value: oneBox.hasOrb,
          checked: oneBox.hasOrb,
          onChange: function onChange(event) {
            return onBoxOrbChanged(event, oneBox);
          }
        }))), oneBox.hasOrb ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "width-6"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Hide text"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          checked: oneBox.orbHideText,
          onChange: function onChange(event) {
            return onBoxOrbHideTextChanged(event, oneBox);
          }
        }))), !oneBox.orbHideText ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "width-12"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Orb Location"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
          options: orbLocations,
          onChange: function onChange(v) {
            return onBoxOrbLocationChanged(v, oneBox);
          },
          value: oneBox.orbLocation
        })))) : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Orb Size"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          value: oneBox.orbSize,
          onChange: function onChange(event) {
            return onBoxOrbSizeChanged(event, oneBox);
          }
        })))) : null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Use Thresholds"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          onChange: function onChange(event) {
            return onBoxUseThresholdsChanged(event, oneBox);
          },
          value: oneBox.isUsingThresholds
        })), oneBox.isUsingThresholds ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Enter 2 comma-separated numbers. 20,60 will produce: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code", null, "value <= 20"), " -> green ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code", null, "value between 20 and 60"), " -> yellow ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code", null, "value >= 60"), " -> red", ' ')
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "info-circle"
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Thresholds"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          onChange: function onChange(event) {
            return onBoxThresholdsChanged(event, oneBox);
          },
          value: oneBox.thresholds
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
          color: oneBox.colorLow,
          onChange: function onChange(color) {
            return onBoxColorLowChanged(color, oneBox);
          }
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
          color: oneBox.colorMedium,
          onChange: function onChange(color) {
            return onBoxColorMediumChanged(color, oneBox);
          }
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
          color: oneBox.colorHigh,
          onChange: function onChange(color) {
            return onBoxColorHighChanged(color, oneBox);
          }
        }))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Color"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
          color: oneBox.color,
          onChange: function onChange(color) {
            return onBoxColorChanged(color, oneBox);
          }
        }))), oneBox.isUsingThresholds ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Blink if low"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          onChange: function onChange(event) {
            return onBoxBlinkLowChanged(event, oneBox);
          },
          value: oneBox.blinkLow
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          label: "Blink if high"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          onChange: function onChange(event) {
            return onBoxBlinkHighChanged(event, oneBox);
          },
          value: oneBox.blinkHigh
        }))) : null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null));
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "md",
        icon: "plus",
        onClick: onAddBoxBtnClicked
      }, "Add a box"));
    }
  });
}).setMigrationHandler(MigHandler__WEBPACK_IMPORTED_MODULE_2__["MigHandler"]);

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map