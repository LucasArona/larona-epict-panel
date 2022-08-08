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
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
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
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
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
      onOptionsChange = _a.onOptionsChange,
      width = _a.width,
      height = _a.height;
  var processedBgURL = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(options.bgURL);
  var hRatio = 1;
  var wRatio = 1;
  var boxes = options.boxes;

  var boxMouseUpHandler = function boxMouseUpHandler() {
    onBoxMouseUp();
  };

  var mainImgRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var onMainImageLoaded = function onMainImageLoaded() {
    processImageScaleFactor();
  };

  function processImageScaleFactor() {
    var _a, _b, _c;

    if (mainImgRef !== null && ((_a = mainImgRef.current) === null || _a === void 0 ? void 0 : _a.complete)) {
      var img = mainImgRef.current;

      if (options.autoScale === true) {
        hRatio = img.height / img.naturalHeight;
        wRatio = img.width / img.naturalWidth;

        if (hRatio <= 1 && wRatio <= 1 && !isEditMode()) {
          if (img.parentElement !== null) {
            var boxesInDOM = img.parentElement.querySelectorAll('.oneBox');

            if (boxesInDOM !== undefined) {
              for (var index = 0; index < boxesInDOM.length; index++) {
                var oneBox = boxesInDOM[index];
                /* Creating a new div is required, otherwise the transformOrigin will destroy the
                 * rotate transformOrigin (if the user wants to rotate the box)
                 */

                var boxParent = oneBox.parentNode;
                var scalingDiv = undefined;

                if (boxParent !== null && ((_b = boxParent) === null || _b === void 0 ? void 0 : _b.className) === 'scalingDiv') {
                  scalingDiv = boxParent; //scalingDiv is already existing
                } else {
                  //Create a new scaling div
                  scalingDiv = document.createElement('div');
                  scalingDiv.className = 'scalingDiv';
                  boxParent === null || boxParent === void 0 ? void 0 : boxParent.replaceChild(scalingDiv, oneBox);
                  scalingDiv.appendChild(oneBox); //scaling div is now the parent element of oneBox
                }

                if (scalingDiv !== null) {
                  scalingDiv.style.position = 'absolute';
                  scalingDiv.style.top = boxes[index].ypos * hRatio + "px";
                  scalingDiv.style.left = boxes[index].xpos * wRatio + "px";
                  scalingDiv.style.transform = "scale(" + wRatio + "," + hRatio + ")";
                  scalingDiv.style.transformOrigin = "top left";
                  scalingDiv.style.whiteSpace = 'no-wrap';
                }
              }
            }
          }
        }
      } else if (img.parentElement !== null && ((_c = img.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector('.scalingDiv')) !== null) {
        //Panel was autoscaled before. Now the user wants to remove the autoscaling, so we need to remove the scalingDiv
        var boxesInDOM = img.parentElement.querySelectorAll('.oneBox');

        if (boxesInDOM !== undefined) {
          for (var index = 0; index < boxesInDOM.length; index++) {
            var oneBox = boxesInDOM[index];
            var boxParent = oneBox.parentNode;

            if (boxParent !== null && boxParent.className === 'scalingDiv') {
              unwrap(boxParent);
            }
          }
        }
      }
    }
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    /* useEffect allows to call the function when rendering is complete */
    processImageScaleFactor();
  });
  var styles = getStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.wrapper),
    onMouseMove: function onMouseMove(event) {
      return onBoxMouseMove(event);
    },
    onClick: function onClick(event) {
      return onBackgroundClick(event);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.imgWrapper, 'img-wrapper')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    srcSet: processedBgURL,
    onClick: function onClick(event) {
      return onBgClick(event);
    },
    className: !isEditMode() && options.autoScale === true ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.bgImgScale) : undefined,
    ref: mainImgRef,
    onLoad: onMainImageLoaded
  }), boxes.map(function (oneBox, index) {
    return (
      /*start one box processing*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onMouseDown: function onMouseDown(event) {
          return onBoxMouseDown(event, oneBox);
        },
        onClick: function onClick(event) {
          return onBoxMouseClick(event, oneBox);
        },
        key: index,
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])('oneBox', Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                ", "\n                color: ", ";\n                transform: rotate(", "deg);\n                display: block;\n              "], ["\n                ", "\n                color: ", ";\n                transform: rotate(", "deg);\n                display: block;\n              "])), options.autoScale === false || isEditMode() ? "\n                    position: absolute;\n                    top:" + oneBox.ypos + "px;\n                    left: " + oneBox.xpos + "px;" : undefined
        /*If autoscale is enabled, top and left are set by the autoscale function*/
        , getBoxColor(oneBox), oneBox.angle), oneBox.hasBackground ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    background-color: ", ";\n                  "], ["\n                    background-color: ", ";\n                  "])), oneBox.backgroundColor) : '', isEditMode() && oneBox.selected ? styles.selectedBoxOutline : '')
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oneBox.url && !isEditMode() ? {
        href: Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(oneBox.url)
      } : null, {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.boxLink, oneBox.url ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      cursor: pointer;\n                    "], ["\n                      cursor: pointer;\n                    "]))) : Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      cursor: default;\n                    "], ["\n                      cursor: default;\n                    "]))))
      }), oneBox.hasOrb && oneBox.orbHideText || oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Top' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "], ["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
        title: getBoxTitleText(oneBox)
      }) : null, !oneBox.hasOrb || !oneBox.orbHideText ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      font-size: ", "px;\n                      line-heigh: normal;\n                    "], ["\n                      font-size: ", "px;\n                      line-heigh: normal;\n                    "])), oneBox.fontSize))
      }, oneBox.hasSymbol && !oneBox.colorSymbol && oneBox.symbol !== 'custom' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        srcSet: oneBox.symbol,
        width: oneBox.symbolWidth,
        height: oneBox.symbolHeight
      }) : null, oneBox.hasSymbol && oneBox.colorSymbol && oneBox.symbol !== 'custom' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background: ", ";\n                          mask-size: cover;\n                          display: inline-block;\n                          mask: url(", ");\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background: ", ";\n                          mask-size: cover;\n                          display: inline-block;\n                          mask: url(", ");\n                        "])), oneBox.symbolHeight, oneBox.symbolWidth, getBoxColor(oneBox), oneBox.symbol))
      }) : null, oneBox.symbol === 'custom' && !oneBox.colorSymbol && oneBox.customSymbol !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        srcSet: Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(oneBox.customSymbol),
        width: oneBox.symbolWidth,
        height: oneBox.symbolHeight
      }) : null, oneBox.symbol === 'custom' && oneBox.colorSymbol && oneBox.customSymbol !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background: ", ";\n                          mask-size: cover;\n                          display: inline-block;\n                          mask: url(", ");\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background: ", ";\n                          mask-size: cover;\n                          display: inline-block;\n                          mask: url(", ");\n                        "])), oneBox.symbolHeight, oneBox.symbolWidth, getBoxColor(oneBox), Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["getTemplateSrv"])().replace(oneBox.customSymbol)))
      }) : null, oneBox.hasOrb && oneBox.orbLocation === 'Left' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, styles.alignVertically, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
        title: getBoxTitleText(oneBox)
      }) : null, oneBox.prefix ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.alignVertically, styles.boxPrefix, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          font-size: ", "px;\n                        "], ["\n                          font-size: ", "px;\n                        "])), oneBox.prefixSize)),
        title: getBoxTitleText(oneBox)
      }, oneBox.prefix) : null, !oneBox.symbolHideText ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.alignVertically)
      }, getBoxText(oneBox)) : null, !oneBox.symbolHideText && oneBox.suffix ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.alignVertically, styles.boxSuffix, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          font-size: ", "px;\n                        "], ["\n                          font-size: ", "px;\n                        "])), oneBox.suffixSize)),
        title: getBoxTitleText(oneBox)
      }, oneBox.suffix) : null, oneBox.hasOrb && oneBox.orbLocation === 'Right' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, styles.alignVertically, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "], ["\n                          height: ", "px;\n                          width: ", "px;\n                          background-color: ", ";\n                        "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
        title: getBoxTitleText(oneBox)
      }) : null) : null, oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Bottom' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(isBoxBlinking(oneBox) ? styles.blink : '', styles.orbDefaults, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "], ["\n                      height: ", "px;\n                      width: ", "px;\n                      background-color: ", ";\n                    "])), oneBox.orbSize, oneBox.orbSize, getBoxColor(oneBox))),
        title: getBoxTitleText(oneBox)
      }) : null))
      /*end one box processing*/

    );
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

    return (_b = (_a = box.prefix) !== null && _a !== void 0 ? _a : ''.concat(getBoxValue(box.serie, 5))) !== null && _b !== void 0 ? _b : ''.concat(box.suffix);
  }

  function getBoxText(box) {
    return getBoxValue(box.serie, box.decimal);
  }

  function onBoxMouseClick(event, box) {
    if (isEditMode() && event.button === 0) {
      inBox = true;
      deselectAllBoxes();
      box.selected = true;
      onOptionsChange(options);
    }
  }

  function onBackgroundClick(event) {
    if (isEditMode() && event.button === 0 && !inBox) {
      deselectAllBoxes();
      onOptionsChange(options);
    }

    inBox = false;
  }

  function deselectAllBoxes() {
    options.boxes.forEach(function (b) {
      b.selected = false;
    });
  }

  function onBoxMouseDown(event, box) {
    if (isEditMode() && event.button === 0) {
      dragBox = box;
      oldX = box.xpos * 1;
      oldY = box.ypos * 1;
      oldMX = event.clientX * 1;
      oldMY = event.clientY * 1;
      isDrag = true;
      $(document).one('mouseup', boxMouseUpHandler.bind(boxMouseUpHandler));
      event.preventDefault();
    }
  }

  function onBoxMouseMove(event) {
    if (isDrag && isEditMode()) {
      var offX = event.clientX - oldMX;
      var offY = event.clientY - oldMY;
      dragBox.xpos = oldX + offX;
      dragBox.ypos = oldY + offY;
      onOptionsChange(options);
    }
  }

  function onBoxMouseUp() {
    $(document).unbind('mouseup', boxMouseUpHandler.bind(boxMouseUpHandler));
    isDrag = false;
  }

  function getBoxValue(serieName, decimals) {
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
      data.series.every(function (frm) {
        var targetField = frm.fields.find(function (f) {
          var fieldDisplayName = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(f, frm);
          var discoveredField = frm.name === undefined || frm.name === fieldDisplayName ? fieldDisplayName : frm.name + " (" + fieldDisplayName + ")";
          return discoveredField === serieName;
        });

        if (targetField !== undefined && targetField !== null) {
          retVal = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getLastNotNullStringValue"])(targetField);
          return false; //We found what we were looking for, so stop iterating
        }

        return true; //Continue iterating
      });
    }

    if (retVal === undefined) {
      serie = data.series.find(function (s) {
        return s.name === serieName;
      });
      /*for backward compatibility*/

      var fields = serie === null || serie === void 0 ? void 0 : serie.fields.find(function (f) {
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
}; //global variables
//Drag Box variables


var dragBox;
var isDrag;
var oldX;
var oldY;
var oldMX;
var oldMY;
var inBox;

var isEditMode = function isEditMode() {
  var params = _grafana_data__WEBPACK_IMPORTED_MODULE_2__["urlUtil"].getUrlSearchParams();
  var editMode = params.editPanel != null;
  return editMode;
};
/**
 * Unwrap the childrens out of the parent element,
 * and deletes de parent element
 * @param parentElement Parent Element to remove
 */


var unwrap = function unwrap(parentElement) {
  var parent = parentElement.parentNode;

  if (parent !== null) {
    while (parentElement.firstChild) {
      parent.insertBefore(parentElement.firstChild, parentElement);
    }

    parent.removeChild(parentElement);
  }
};

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n    "], ["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n    "]))),
    imgWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n      overflow: scroll;\n    "], ["\n      position: relative;\n      overflow: scroll;\n    "]))),
    bgImgScale: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      max-width: 100%;\n      max-height: 100%;\n      object-fit: scale-down;\n      object-position: top left;\n    "], ["\n      max-width: 100%;\n      max-height: 100%;\n      object-fit: scale-down;\n      object-position: top left;\n    "]))),
    boxLink: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "], ["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "]))),
    orbDefaults: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "], ["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "]))),
    blink: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "], ["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "]))),
    alignVertically: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_20 || (templateObject_20 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "], ["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "]))),
    boxPrefix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_21 || (templateObject_21 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "], ["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "]))),
    boxSuffix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_22 || (templateObject_22 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "], ["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "]))),
    selectedBoxOutline: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_23 || (templateObject_23 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      border-radius: 15px;\n      outline: dotted;'\n    "], ["\n      border-radius: 15px;\n      outline: dotted;'\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;

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
    options_1.autoScale = false;
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
        url: oldBox.URL,
        hasSymbol: false,
        symbolHideText: false,
        symbol: '',
        symbolWidth: 32,
        symbolHeight: 32,
        symbolDefWidth: 32,
        symbolDefHeight: 32,
        colorSymbol: false,
        customSymbol: '',
        selected: false
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
/*! exports provided: getLastNotNullValue, getLastNotNullStringValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastNotNullValue", function() { return getLastNotNullValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastNotNullStringValue", function() { return getLastNotNullStringValue; });
function getLastNotNullValue(fields, decimals) {
  var retVal = 'N/A';
  var lastNotNullValueIndex = fields === null || fields === void 0 ? void 0 : fields.values.length;

  if (lastNotNullValueIndex) {
    while (lastNotNullValueIndex-- && (fields === null || fields === void 0 ? void 0 : fields.values.get(lastNotNullValueIndex)) == null) {} //Find the last non-null value


    if (lastNotNullValueIndex !== -1) {
      // If we only have null values, index = -1
      retVal = fields === null || fields === void 0 ? void 0 : fields.values.get(lastNotNullValueIndex).toFixed(decimals).toString();
    }
  }

  return retVal;
}
function getLastNotNullStringValue(fields) {
  var retVal = 'N/A';
  var lastNotNullValueIndex = fields === null || fields === void 0 ? void 0 : fields.values.length;

  if (lastNotNullValueIndex) {
    while (lastNotNullValueIndex-- && (fields === null || fields === void 0 ? void 0 : fields.values.get(lastNotNullValueIndex)) == null) {} //Find the last non-null value


    if (lastNotNullValueIndex !== -1) {
      // If we only have null values, index = -1
      retVal = fields === null || fields === void 0 ? void 0 : fields.values.get(lastNotNullValueIndex).toString();
    }
  }

  return retVal;
}

/***/ }),

/***/ "./editors/BoxesEditor.tsx":
/*!*********************************!*\
  !*** ./editors/BoxesEditor.tsx ***!
  \*********************************/
/*! exports provided: BoxesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesEditor", function() { return BoxesEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var symLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! symLibrary */ "./symLibrary.ts");






var BoxesEditor = function BoxesEditor(_a) {
  var item = _a.item,
      value = _a.value,
      onChange = _a.onChange,
      context = _a.context;
  var ctx = context;
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
      url: '',
      hasSymbol: false,
      symbol: '',
      symbolHideText: false,
      symbolWidth: 32,
      symbolHeight: 32,
      symbolDefHeight: 32,
      symbolDefWidth: 32,
      colorSymbol: false,
      customSymbol: '',
      selected: false
    });
    onChange(options.boxes);
  };

  var onDeleteBox = function onDeleteBox(_a, index) {
    var target = _a.target;
    delete options.boxes[index];
    options.boxes.splice(index, 1);
    onChange(options.boxes);
  };

  var onCloneBox = function onCloneBox(_a, box) {
    var target = _a.target;
    options.boxes.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box));
    onChange(options.boxes);
  };

  var onBoxSerieUpdated = function onBoxSerieUpdated(value, box) {
    box.serie = value;
    onChange(options.boxes);
  };

  var onBoxPrefixChanged = function onBoxPrefixChanged(_a, box) {
    var target = _a.target;
    box.prefix = target.value;
    onChange(options.boxes);
  };

  var onBoxPrefixFontSizeChanged = function onBoxPrefixFontSizeChanged(_a, box) {
    var target = _a.target;
    box.prefixSize = target.value;
    onChange(options.boxes);
  };

  var onBoxSuffixChanged = function onBoxSuffixChanged(_a, box) {
    var target = _a.target;
    box.suffix = target.value;
    onChange(options.boxes);
  };

  var onBoxSuffixFontSizeChanged = function onBoxSuffixFontSizeChanged(_a, box) {
    var target = _a.target;
    box.suffixSize = target.value;
    onChange(options.boxes);
  };

  var onBoxXposChanged = function onBoxXposChanged(_a, box) {
    var target = _a.target;
    box.xpos = target.value;
    onChange(options.boxes);
  };

  var onBoxYposChanged = function onBoxYposChanged(_a, box) {
    var target = _a.target;
    box.ypos = target.value;
    onChange(options.boxes);
  };

  var onBoxAngleChanged = function onBoxAngleChanged(_a, box) {
    var target = _a.target;
    box.angle = target.value;
    onChange(options.boxes);
  };

  var onBoxUrlChanged = function onBoxUrlChanged(_a, box) {
    var target = _a.target;
    box.url = target.value;
    onChange(options.boxes);
  };

  var onBoxDecimalChanged = function onBoxDecimalChanged(_a, box) {
    var target = _a.target;
    box.decimal = target.value;
    onChange(options.boxes);
  };

  var onBoxFontsizeChanged = function onBoxFontsizeChanged(_a, box) {
    var target = _a.target;
    box.fontSize = target.value;
    onChange(options.boxes);
  };

  var onBoxOrbChanged = function onBoxOrbChanged(_a, box) {
    var target = _a.target;
    box.hasOrb = target.checked;
    onChange(options.boxes);
  };

  var onBoxOrbHideTextChanged = function onBoxOrbHideTextChanged(_a, box) {
    var target = _a.target;
    box.orbHideText = target.checked;
    onChange(options.boxes);
  };

  var onBoxOrbLocationChanged = function onBoxOrbLocationChanged(location, box) {
    box.orbLocation = location.value;
    onChange(options.boxes);
  };

  var onBoxSymbolHideTextChanged = function onBoxSymbolHideTextChanged(_a, box) {
    var target = _a.target;
    box.symbolHideText = target.checked;
    onChange(options.boxes);
  };

  var onBoxColorSymbolChanged = function onBoxColorSymbolChanged(_a, box) {
    var target = _a.target;
    box.colorSymbol = target.checked;
    onChange(options.boxes);
  };

  var onBoxSymbolChanged = function onBoxSymbolChanged(symbol, box) {
    box.symbol = symbol.value;
    box.hasSymbol = symbol.value !== '';
    box.symbolDefWidth = symbol.width;
    box.symbolWidth = symbol.width * symbol.factor;
    box.symbolDefHeight = symbol.height;
    box.symbolHeight = symbol.height * symbol.factor;
    onChange(options.boxes);
  };

  var onBoxSymbolWidthChanged = function onBoxSymbolWidthChanged(_a, box) {
    var target = _a.target;
    box.symbolWidth = target.value;
    onChange(options.boxes);
  };

  var onBoxSymbolHeightChanged = function onBoxSymbolHeightChanged(_a, box) {
    var target = _a.target;
    box.symbolHeight = target.value;
    onChange(options.boxes);
  };

  var onBoxCustomSymbolChanged = function onBoxCustomSymbolChanged(_a, box) {
    var target = _a.target;
    box.customSymbol = target.value;
    onChange(options.boxes);
  };

  var onBoxHasBackgroundChanged = function onBoxHasBackgroundChanged(_a, box) {
    var target = _a.target;
    box.hasBackground = target.checked;
    onChange(options.boxes);
  };

  var onBoxBackgroundColorChanged = function onBoxBackgroundColorChanged(color, box) {
    box.backgroundColor = color;
    onChange(options.boxes);
  };

  var onBoxUseThresholdsChanged = function onBoxUseThresholdsChanged(_a, box) {
    var target = _a.target;
    box.isUsingThresholds = target.checked;
    onChange(options.boxes);
  };

  var onBoxThresholdsChanged = function onBoxThresholdsChanged(_a, box) {
    var target = _a.target;
    box.thresholds = target.value;
    onChange(options.boxes);
  };

  var onBoxColorChanged = function onBoxColorChanged(color, box) {
    box.color = color;
    onChange(options.boxes);
  };

  var onBoxColorLowChanged = function onBoxColorLowChanged(color, box) {
    box.colorLow = color;
    onChange(options.boxes);
  };

  var onBoxColorMediumChanged = function onBoxColorMediumChanged(color, box) {
    box.colorMedium = color;
    onChange(options.boxes);
  };

  var onBoxColorHighChanged = function onBoxColorHighChanged(color, box) {
    box.colorHigh = color;
    onChange(options.boxes);
  };

  var onBoxBlinkHighChanged = function onBoxBlinkHighChanged(_a, box) {
    var target = _a.target;
    box.blinkHigh = target.checked;
    onChange(options.boxes);
  };

  var onBoxBlinkLowChanged = function onBoxBlinkLowChanged(_a, box) {
    var target = _a.target;
    box.blinkLow = target.checked;
    onChange(options.boxes);
  };

  var onBoxOrbSizeChanged = function onBoxOrbSizeChanged(_a, box) {
    var target = _a.target;
    box.orbSize = target.value;
    onChange(options.boxes);
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
      return f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].number;
    });
    valuesFields.forEach(function (oneValField) {
      if (oneValField !== undefined) {
        var fieldDisplayName = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["getFieldDisplayName"])(oneValField, frm);
        var discoveredField = frm.name === undefined || frm.name === fieldDisplayName ? fieldDisplayName : frm.name + " (" + fieldDisplayName + ")";
        availableSeries.push({
          value: discoveredField,
          label: discoveredField
        });
      }
    });
  });
  var selectedBoxIndex = options.boxes.findIndex(function (b) {
    return b.selected === true;
  });

  var oneBoxEditor = function oneBoxEditor(oneBox, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", null, "Box #", index), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      name: "trash-alt",
      size: "xl",
      surface: "panel",
      onClick: function onClick(event) {
        return onDeleteBox(event, index);
      }
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      name: "copy",
      size: "xl",
      surface: "panel",
      onClick: function onClick(event) {
        return onCloneBox(event, oneBox);
      }
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Metric",
      isOpen: true
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Name"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      readOnly: true,
      value: oneBox.serie,
      width: 16,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ValuePicker"], {
      label: "Change Metric",
      icon: "exchange-alt",
      options: availableSeries,
      onChange: function onChange(selectedItem) {
        return onBoxSerieUpdated(selectedItem.value, oneBox);
      },
      variant: "secondary",
      size: "sm"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Prefix"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxPrefixChanged(event, oneBox);
      },
      value: oneBox.prefix,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Suffix"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxSuffixChanged(event, oneBox);
      },
      value: oneBox.suffix,
      css: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, oneBox.prefix ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Prefix size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxPrefixFontSizeChanged(event, oneBox);
      },
      value: oneBox.prefixSize,
      css: undefined
    }))) : null, oneBox.suffix ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Suffix size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSuffixFontSizeChanged(event, oneBox);
      },
      value: oneBox.suffixSize,
      css: undefined
    }))) : null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Position and Link",
      isOpen: true
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      theme: "info",
      content: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "You can easily find the coordinates if you ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", null, "ctrl"), "+", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", null, "left click"), "anywhere on your image. You can also drag and drop the box on the image.")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "info-circle"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "X"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxXposChanged(event, oneBox);
      },
      value: oneBox.xpos,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Y"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxYposChanged(event, oneBox);
      },
      value: oneBox.ypos,
      css: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Angle"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxAngleChanged(event, oneBox);
      },
      value: oneBox.angle,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Link"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxUrlChanged(event, oneBox);
      },
      value: oneBox.url,
      css: undefined
    }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Symbol Library",
      isOpen: false
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-12"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Symbol"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      options: symLibrary__WEBPACK_IMPORTED_MODULE_5__["SymbolsLibrary"],
      onChange: function onChange(v) {
        return onBoxSymbolChanged(v, oneBox);
      },
      value: oneBox.symbol
    }))), oneBox.symbol !== '' && oneBox.symbol !== 'custom' && oneBox.symbol !== 'text' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      srcSet: Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace(oneBox.symbol),
      width: oneBox.symbolDefWidth,
      height: oneBox.symbolDefHeight
    }) : null), oneBox.symbol === 'custom' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Custom symbol url"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxCustomSymbolChanged(event, oneBox);
      },
      value: oneBox.customSymbol,
      css: undefined
    })))) : null, oneBox.symbol !== '' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Symbol width"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSymbolWidthChanged(event, oneBox);
      },
      value: oneBox.symbolWidth,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Symbol height"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSymbolHeightChanged(event, oneBox);
      },
      value: oneBox.symbolHeight,
      css: undefined
    })))) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Hide value"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: oneBox.symbolHideText,
      checked: oneBox.symbolHideText,
      onChange: function onChange(event) {
        return onBoxSymbolHideTextChanged(event, oneBox);
      },
      css: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Colorize symbol"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: oneBox.colorSymbol,
      checked: oneBox.colorSymbol,
      onChange: function onChange(event) {
        return onBoxColorSymbolChanged(event, oneBox);
      },
      css: undefined
    })))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Orb",
      isOpen: false
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-5"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Show Orb"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: oneBox.hasOrb,
      checked: oneBox.hasOrb,
      onChange: function onChange(event) {
        return onBoxOrbChanged(event, oneBox);
      },
      css: undefined
    }))), oneBox.hasOrb ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-6"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Hide text"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      checked: oneBox.orbHideText,
      onChange: function onChange(event) {
        return onBoxOrbHideTextChanged(event, oneBox);
      },
      css: undefined
    }))), !oneBox.orbHideText ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-12"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Orb Location"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      options: orbLocations,
      onChange: function onChange(v) {
        return onBoxOrbLocationChanged(v, oneBox);
      },
      value: oneBox.orbLocation
    })))) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Orb Size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      value: oneBox.orbSize,
      onChange: function onChange(event) {
        return onBoxOrbSizeChanged(event, oneBox);
      },
      css: undefined
    })))) : null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Font, decimal, thresholds, background",
      isOpen: false
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Decimal"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxDecimalChanged(event, oneBox);
      },
      value: oneBox.decimal,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Font-size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxFontsizeChanged(event, oneBox);
      },
      value: oneBox.fontSize,
      css: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Use Thresholds"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxUseThresholdsChanged(event, oneBox);
      },
      value: oneBox.isUsingThresholds,
      css: undefined
    })), oneBox.isUsingThresholds ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      content: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Enter 2 comma-separated numbers. 20,60 will produce: ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", null, "value <= 20"), " -> green", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", null, "value between 20 and 60"), " -> yellow ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", null, "value >= 60"), " -> red", ' ')
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "info-circle"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Thresholds"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxThresholdsChanged(event, oneBox);
      },
      value: oneBox.thresholds,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
      color: oneBox.colorLow,
      onChange: function onChange(color) {
        return onBoxColorLowChanged(color, oneBox);
      }
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
      color: oneBox.colorMedium,
      onChange: function onChange(color) {
        return onBoxColorMediumChanged(color, oneBox);
      }
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
      color: oneBox.colorHigh,
      onChange: function onChange(color) {
        return onBoxColorHighChanged(color, oneBox);
      }
    }))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Color"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
      color: oneBox.color,
      onChange: function onChange(color) {
        return onBoxColorChanged(color, oneBox);
      }
    }))), oneBox.isUsingThresholds ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Blink if low"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxBlinkLowChanged(event, oneBox);
      },
      value: oneBox.blinkLow,
      css: undefined
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Blink if high"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxBlinkHighChanged(event, oneBox);
      },
      value: oneBox.blinkHigh,
      css: undefined
    }))) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Show the background"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxHasBackgroundChanged(event, oneBox);
      },
      value: oneBox.hasBackground,
      css: undefined
    })), oneBox.hasBackground ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Color"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
      color: oneBox.backgroundColor,
      onChange: function onChange(color) {
        return onBoxBackgroundColorChanged(color, oneBox);
      }
    }))) : null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", null));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "section gf-form-group"
  }, selectedBoxIndex !== -1 ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "section-heading"
  }, "Selected Box:"), oneBoxEditor(options.boxes[selectedBoxIndex], selectedBoxIndex), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "section-heading"
  }, "All defined boxes:")) : null, options.boxes.map(function (oneBox, index) {
    return oneBoxEditor(oneBox, index);
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    size: "md",
    icon: "plus",
    onClick: onAddBoxBtnClicked
  }, "Add a box"));
};

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
/* harmony import */ var editors_BoxesEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editors/BoxesEditor */ "./editors/BoxesEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_EpictPanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  builder.addTextInput({
    name: 'Background URL',
    path: 'bgURL'
  }).addBooleanSwitch({
    name: 'Autoscale',
    path: 'autoScale',
    description: 'Determines if the panel should automatically scale down its content to fit the view',
    defaultValue: false
  }).addCustomEditor({
    path: 'boxes',
    name: 'Boxes definitions',
    id: 'boxesDefinitions',
    defaultValue: null,
    editor: editors_BoxesEditor__WEBPACK_IMPORTED_MODULE_3__["BoxesEditor"]
  });
}).setMigrationHandler(MigHandler__WEBPACK_IMPORTED_MODULE_2__["MigHandler"]);

/***/ }),

/***/ "./symLibrary.ts":
/*!***********************!*\
  !*** ./symLibrary.ts ***!
  \***********************/
/*! exports provided: SymbolsLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolsLibrary", function() { return SymbolsLibrary; });
var Arrow1 = __webpack_require__(/*! ./symbols/Arrow1.svg */ "./symbols/Arrow1.svg");

var Arrow2 = __webpack_require__(/*! ./symbols/Arrow2.svg */ "./symbols/Arrow2.svg");

var FlatVessel1 = __webpack_require__(/*! ./symbols/FlatVessel1.svg */ "./symbols/FlatVessel1.svg");

var Line1 = __webpack_require__(/*! ./symbols/Line1.svg */ "./symbols/Line1.svg");

var Mixer1 = __webpack_require__(/*! ./symbols/Mixer1.svg */ "./symbols/Mixer1.svg");

var Motor1 = __webpack_require__(/*! ./symbols/Motor1.svg */ "./symbols/Motor1.svg");

var Pipe1 = __webpack_require__(/*! ./symbols/Pipe1.svg */ "./symbols/Pipe1.svg");

var Pipe2 = __webpack_require__(/*! ./symbols/Pipe2.svg */ "./symbols/Pipe2.svg");

var Pipe3 = __webpack_require__(/*! ./symbols/Pipe3.svg */ "./symbols/Pipe3.svg");

var Pump1 = __webpack_require__(/*! ./symbols/Pump1.svg */ "./symbols/Pump1.svg");

var Tank1 = __webpack_require__(/*! ./symbols/Tank1.svg */ "./symbols/Tank1.svg");

var Tank2 = __webpack_require__(/*! ./symbols/Tank2.svg */ "./symbols/Tank2.svg");

var Tank3 = __webpack_require__(/*! ./symbols/Tank3.svg */ "./symbols/Tank3.svg");

var Valve1 = __webpack_require__(/*! ./symbols/Valve1.svg */ "./symbols/Valve1.svg");

var Valve2 = __webpack_require__(/*! ./symbols/Valve2.svg */ "./symbols/Valve2.svg"); // attention. In the svg files add  preserveAspectRatio="none" to the svg tag to allow non-uniform scale


var SymbolsLibrary = [{
  label: 'None',
  value: '',
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Custom Symbol',
  value: 'custom',
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Arrow 1',
  value: Arrow1,
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Arrow 2',
  value: Arrow2,
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Flat Vessel 1',
  value: FlatVessel1,
  width: 16,
  height: 32,
  factor: 8
}, {
  label: 'Line 1',
  value: Line1,
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Mixer 1',
  value: Mixer1,
  width: 32,
  height: 32,
  factor: 2
}, {
  label: 'Motor 1',
  value: Motor1,
  width: 32,
  height: 32,
  factor: 2
}, {
  label: 'Pipe 1',
  value: Pipe1,
  width: 32,
  height: 32,
  factor: 1
}, {
  label: 'Pipe 2',
  value: Pipe2,
  width: 32,
  height: 32,
  factor: 2
}, {
  label: 'Pipe 3',
  value: Pipe3,
  width: 32,
  height: 32,
  factor: 2
}, {
  label: 'Pump 1',
  value: Pump1,
  width: 32,
  height: 32,
  factor: 2
}, {
  label: 'Tank 1',
  value: Tank1,
  width: 16,
  height: 32,
  factor: 8
}, {
  label: 'Tank 2',
  value: Tank2,
  width: 16,
  height: 32,
  factor: 8
}, {
  label: 'Tank 3',
  value: Tank3,
  width: 16,
  height: 32,
  factor: 8
}, {
  label: 'Valve 1',
  value: Valve1,
  width: 32,
  height: 16,
  factor: 2
}, {
  label: 'Valve 2',
  value: Valve2,
  width: 32,
  height: 32,
  factor: 2
}];

/***/ }),

/***/ "./symbols/Arrow1.svg":
/*!****************************!*\
  !*** ./symbols/Arrow1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3R5bGU9ImZpbGw6I2IxYjNiNDtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTS43MyAzMi4wMSAzMiAxLjIxVjYyLjh6Ii8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Arrow2.svg":
/*!****************************!*\
  !*** ./symbols/Arrow2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIHN0eWxlPSJmaWxsOiNiMWIzYjQ7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIGQ9Ik0uNzggMzEuOTYgMzIuMTIgMS4xN3YyMS44NWgzMS4zNHYxNy45NUgzMi4xMnYyMS43N3oiLz48L3N2Zz4="

/***/ }),

/***/ "./symbols/FlatVessel1.svg":
/*!*********************************!*\
  !*** ./symbols/FlatVessel1.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48c3R5bGU+LnN0MXtmaWxsOiM4Nzg4OGE7c3Ryb2tlOiM3MDcxNzM7c3Ryb2tlLW1pdGVybGltaXQ6MTB9PC9zdHlsZT48cGF0aCBzdHlsZT0iZmlsbDojYjFiM2I0O3N0cm9rZTojYjFiM2I0O3N0cm9rZS1taXRlcmxpbWl0OjEwIiBkPSJNLjU4IDE1OS40N3YtMTAxbDEuMzYtMS4wNkwzMS40IDM0LjZoNjQuNjNsMzEuMzkgMjMuODd2MTAxTDcwLjg0IDIyMS40SDU2Ljc3eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjcuOTEgNTguNzFILjA4TS4wOCAxNTkuMTZoMTI3LjgzIi8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Line1.svg":
/*!***************************!*\
  !*** ./symbols/Line1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIHN0eWxlPSJmaWxsOiNiMWIzYjQ7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIGQ9Ik0uNTIgMzBoNjIuOTl2NEguNTJ6Ii8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Mixer1.svg":
/*!****************************!*\
  !*** ./symbols/Mixer1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTExLjEyIDI3LjkzaDIxLjU3djE1LjMySDExLjEyeiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBkPSJNMTEuNjIgMzUuNTljMC00LjQ1IDMuODktNy4xNiA4LjIxLTcuMTYgNS4zMiAwIDEyLjE2IDYuODMgMTIuMTYgNi44M3MtNy4wNCA3LjQ5LTEyLjA4IDcuNDktOC4yOS0yLjcxLTguMjktNy4xNnoiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNiKTtmaWxsOiNiMWIzYjQ7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48Zz48ZGVmcz48cGF0aCBpZD0iYyIgZD0iTTMxLjMgMjcuOTNoMjEuNTd2MTUuMzJIMzEuM3oiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJkIj48dXNlIHhsaW5rOmhyZWY9IiNjIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTUyLjM4IDM1LjU5YzAtNC40NS0zLjg5LTcuMTYtOC4yMS03LjE2LTUuMzIgMC0xMi4xNiA2LjgzLTEyLjE2IDYuODNzNy4wNCA3LjQ5IDEyLjA4IDcuNDkgOC4yOS0yLjcxIDguMjktNy4xNnoiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNkKTtmaWxsOiNiMWIzYjQ7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2IxYjNiNDtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTMyIDE3LjE5VjM1Ii8+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMjguMTgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48L3N2Zz4="

/***/ }),

/***/ "./symbols/Motor1.svg":
/*!****************************!*\
  !*** ./symbols/Motor1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIuNyIgcj0iMjguNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMCIvPjxwYXRoIGQ9Ik0yMC4yIDQ1LjRWMTkuNmg1LjFsNi4xIDE4LjJjLjYgMS43IDEgMyAxLjIgMy44LjMtLjkuOC0yLjMgMS40LTQuMWw2LjItMTcuOWg0LjZ2MjUuOGgtMy4zVjIzLjhMMzQgNDUuNGgtM2wtNy41LTIxLjl2MjEuOWgtMy4zeiIgc3R5bGU9ImZpbGw6I2IxYjNiNCIvPjwvc3ZnPg=="

/***/ }),

/***/ "./symbols/Pipe1.svg":
/*!***************************!*\
  !*** ./symbols/Pipe1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMiIgeTE9IjUzLjc4IiB4Mj0iMzIiIHkyPSI4LjQyIj48c3RvcCBvZmZzZXQ9Ii4wMDQiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48c3RvcCBvZmZzZXQ9Ii4wOTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ZThmOTAiLz48c3RvcCBvZmZzZXQ9Ii41MDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNkOWRhZGIiLz48c3RvcCBvZmZzZXQ9Ii41OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiNkNWQ2ZDciLz48c3RvcCBvZmZzZXQ9Ii43MDQiIHN0eWxlPSJzdG9wLWNvbG9yOiNjN2M4Y2EiLz48c3RvcCBvZmZzZXQ9Ii44MTQiIHN0eWxlPSJzdG9wLWNvbG9yOiNiMWIyYjQiLz48c3RvcCBvZmZzZXQ9Ii45MjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzk0OTYiLz48c3RvcCBvZmZzZXQ9Ii45OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjYSkiIGQ9Ik0wIDguNDJoNjR2NDUuMzZIMHoiLz48L3N2Zz4="

/***/ }),

/***/ "./symbols/Pipe2.svg":
/*!***************************!*\
  !*** ./symbols/Pipe2.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjAuNjYiIHkxPSI4Ni42OCIgeDI9IjIwLjY2IiB5Mj0iNDEuMzIiPjxzdG9wIG9mZnNldD0iLjAwNCIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZSIvPjxzdG9wIG9mZnNldD0iLjA5OSIgc3R5bGU9InN0b3AtY29sb3I6IzhlOGY5MCIvPjxzdG9wIG9mZnNldD0iLjUwMyIgc3R5bGU9InN0b3AtY29sb3I6I2Q5ZGFkYiIvPjxzdG9wIG9mZnNldD0iLjU5OSIgc3R5bGU9InN0b3AtY29sb3I6I2Q1ZDZkNyIvPjxzdG9wIG9mZnNldD0iLjcwNCIgc3R5bGU9InN0b3AtY29sb3I6I2M3YzhjYSIvPjxzdG9wIG9mZnNldD0iLjgxNCIgc3R5bGU9InN0b3AtY29sb3I6I2IxYjJiNCIvPjxzdG9wIG9mZnNldD0iLjkyNiIgc3R5bGU9InN0b3AtY29sb3I6IzkzOTQ5NiIvPjxzdG9wIG9mZnNldD0iLjk5OSIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggc3R5bGU9ImZpbGw6dXJsKCNhKSIgZD0iTTAgNDEuMzJoNDEuMzJ2NDUuMzZIMHoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDAuNjk2IiB5MT0iNjQuMzk3IiB4Mj0iNDAuNjk2IiB5Mj0iMTkuMDM2IiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC05MCA4NS4xNTYgNjIuODc2KSI+PHN0b3Agb2Zmc2V0PSIuMDA0IiBzdHlsZT0ic3RvcC1jb2xvcjojN2I3YzdlIi8+PHN0b3Agb2Zmc2V0PSIuMDk5IiBzdHlsZT0ic3RvcC1jb2xvcjojOGU4ZjkwIi8+PHN0b3Agb2Zmc2V0PSIuNTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojZDlkYWRiIi8+PHN0b3Agb2Zmc2V0PSIuNTk5IiBzdHlsZT0ic3RvcC1jb2xvcjojZDVkNmQ3Ii8+PHN0b3Agb2Zmc2V0PSIuNzA0IiBzdHlsZT0ic3RvcC1jb2xvcjojYzdjOGNhIi8+PHN0b3Agb2Zmc2V0PSIuODE0IiBzdHlsZT0ic3RvcC1jb2xvcjojYjFiMmI0Ii8+PHN0b3Agb2Zmc2V0PSIuOTI2IiBzdHlsZT0ic3RvcC1jb2xvcjojOTM5NDk2Ii8+PHN0b3Agb2Zmc2V0PSIuOTk5IiBzdHlsZT0ic3RvcC1jb2xvcjojN2I3YzdlIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBzdHlsZT0iZmlsbDp1cmwoI2IpIiBkPSJNNDEuMzIgODYuNjhoNDUuMzZWMTI4SDQxLjMyeiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MS4zMiIgeTE9Ijg2LjY4IiB4Mj0iNzMuMjQ4IiB5Mj0iNTQuNzUzIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48c3RvcCBvZmZzZXQ9Ii4zNjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNkOWRhZGIiLz48c3RvcCBvZmZzZXQ9Ii40ODEiIHN0eWxlPSJzdG9wLWNvbG9yOiNjZmQwZDEiLz48c3RvcCBvZmZzZXQ9Ii42NzgiIHN0eWxlPSJzdG9wLWNvbG9yOiNiNGI1YjYiLz48c3RvcCBvZmZzZXQ9Ii45MzEiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ODg5OGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik00MS4zMiA0MS4zMnMxNS43Ni0uNjMgMzAuMzYgMTIgMTUgMzMuMzYgMTUgMzMuMzZINDEuMzJWNDEuMzJ6IiBzdHlsZT0iZmlsbDp1cmwoI2MpIi8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Pipe3.svg":
/*!***************************!*\
  !*** ./symbols/Pipe3.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjQiIHkxPSI0MS4zMiIgeDI9IjY0IiB5Mj0iODYuNjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMjgpIj48c3RvcCBvZmZzZXQ9Ii4wMDQiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48c3RvcCBvZmZzZXQ9Ii4wOTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ZThmOTAiLz48c3RvcCBvZmZzZXQ9Ii41MDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNkOWRhZGIiLz48c3RvcCBvZmZzZXQ9Ii41OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiNkNWQ2ZDciLz48c3RvcCBvZmZzZXQ9Ii43MDQiIHN0eWxlPSJzdG9wLWNvbG9yOiNjN2M4Y2EiLz48c3RvcCBvZmZzZXQ9Ii44MTQiIHN0eWxlPSJzdG9wLWNvbG9yOiNiMWIyYjQiLz48c3RvcCBvZmZzZXQ9Ii45MjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzk0OTYiLz48c3RvcCBvZmZzZXQ9Ii45OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjYSkiIGQ9Ik0wIDQxLjNoMTI4djQ1LjRIMHoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjY4OSIgeTE9IjYzLjYwNCIgeDI9IjEwNC42ODkiIHkyPSIxMDguOTY0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAxNTAuMjggMjEyLjAzMikiPjxzdG9wIG9mZnNldD0iLjAwNCIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZSIvPjxzdG9wIG9mZnNldD0iLjA5OSIgc3R5bGU9InN0b3AtY29sb3I6IzhlOGY5MCIvPjxzdG9wIG9mZnNldD0iLjUwMyIgc3R5bGU9InN0b3AtY29sb3I6I2Q5ZGFkYiIvPjxzdG9wIG9mZnNldD0iLjU5OSIgc3R5bGU9InN0b3AtY29sb3I6I2Q1ZDZkNyIvPjxzdG9wIG9mZnNldD0iLjcwNCIgc3R5bGU9InN0b3AtY29sb3I6I2M3YzhjYSIvPjxzdG9wIG9mZnNldD0iLjgxNCIgc3R5bGU9InN0b3AtY29sb3I6I2IxYjJiNCIvPjxzdG9wIG9mZnNldD0iLjkyNiIgc3R5bGU9InN0b3AtY29sb3I6IzkzOTQ5NiIvPjxzdG9wIG9mZnNldD0iLjk5OSIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggc3R5bGU9ImZpbGw6dXJsKCNiKSIgZD0iTTQxLjMgODYuN2g0NS40VjEyOEg0MS4zeiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MS4zMiIgeTE9IjQxLjMxNyIgeDI9IjczLjI0NyIgeTI9IjczLjI0NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEyOCkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZSIvPjxzdG9wIG9mZnNldD0iLjM2NiIgc3R5bGU9InN0b3AtY29sb3I6I2Q5ZGFkYiIvPjxzdG9wIG9mZnNldD0iLjQ4MSIgc3R5bGU9InN0b3AtY29sb3I6I2NmZDBkMSIvPjxzdG9wIG9mZnNldD0iLjY3OCIgc3R5bGU9InN0b3AtY29sb3I6I2I0YjViNjtzdG9wLW9wYWNpdHk6LjE1Ii8+PHN0b3Agb2Zmc2V0PSIuOTMxIiBzdHlsZT0ic3RvcC1jb2xvcjojODg4OThiO3N0b3Atb3BhY2l0eTouMSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzdiN2M3ZTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTQxLjMgNDEuM3MxNS44LS42IDMwLjQgMTIgMTUgMzMuNCAxNSAzMy40SDQxLjNWNDEuM3oiIHN0eWxlPSJvcGFjaXR5Oi41O2ZpbGw6dXJsKCNjKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3OS43MjgiIHkxPSI0MS40NDgiIHgyPSIxMTEuNjU1IiB5Mj0iNzMuMzc2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAxMjguMTMxIDE2Ni40MDgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2UiLz48c3RvcCBvZmZzZXQ9Ii4zNjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNkOWRhZGIiLz48c3RvcCBvZmZzZXQ9Ii40ODEiIHN0eWxlPSJzdG9wLWNvbG9yOiNjZmQwZDEiLz48c3RvcCBvZmZzZXQ9Ii42NzgiIHN0eWxlPSJzdG9wLWNvbG9yOiNiNGI1YjY7c3RvcC1vcGFjaXR5Oi4xNSIvPjxzdG9wIG9mZnNldD0iLjkzMSIgc3R5bGU9InN0b3AtY29sb3I6Izg4ODk4YjtzdG9wLW9wYWNpdHk6LjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YjdjN2U7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik00MS4zIDg2LjdzLS42LTE1LjggMTItMzAuNCAzMy40LTE1IDMzLjQtMTV2NDUuNEg0MS4zeiIgc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDp1cmwoI2QpIi8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Pump1.svg":
/*!***************************!*\
  !*** ./symbols/Pump1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxzdHlsZT4uc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMyIiBjeT0iMzIuNyIgcj0iMjguNSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4zIDMuNSA0LjEgMzIuN2wzNy40IDI4LjUiLz48L3N2Zz4="

/***/ }),

/***/ "./symbols/Tank1.svg":
/*!***************************!*\
  !*** ./symbols/Tank1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMS4xIDIwMy4zdi0xNTBzMTMuOS0yMS44IDYzLTIxLjggNjMgMTkuMyA2MyAxOS4zdjE1Mi41cy0xNS40IDIwLjgtNjMgMjAuOC02My0yMC44LTYzLTIwLjh6IiBzdHlsZT0iZmlsbDojYjFiM2I0O3N0cm9rZTojYjFiM2I0O3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Tank2.svg":
/*!***************************!*\
  !*** ./symbols/Tank2.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI4IDI1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTEuMSAyMDMuM3YtMTUwczEzLjktMjEuOCA2My0yMS44IDYzIDE5LjMgNjMgMTkuM3YxNTIuNXMtMTUuNCAyMC44LTYzIDIwLjgtNjMtMjAuOC02My0yMC44eiIgc3R5bGU9ImZpbGw6I2IxYjNiNDtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMCIvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNDYuNiAyMDAuN2gyMS42VjIxNkg0Ni42eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBkPSJNNDcuMSAyMDguM2MwLTQuNCAzLjktNy4yIDguMi03LjIgNS4zIDAgMTIuMiA2LjggMTIuMiA2LjhzLTcgNy41LTEyLjEgNy41LTguMy0yLjYtOC4zLTcuMXoiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNiKTtmaWxsOiM4Nzg4OGE7c3Ryb2tlOiM4Nzg4OGE7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48Zz48ZGVmcz48cGF0aCBpZD0iYyIgZD0iTTY2LjggMjAwLjdoMjEuNlYyMTZINjYuOHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJkIj48dXNlIHhsaW5rOmhyZWY9IiNjIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTg3LjkgMjA4LjNjMC00LjQtMy45LTcuMi04LjItNy4yLTUuMyAwLTEyLjIgNi44LTEyLjIgNi44czcgNy41IDEyLjEgNy41IDguMy0yLjYgOC4zLTcuMXoiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNkKTtmaWxsOiM4Nzg4OGE7c3Ryb2tlOiM4Nzg4OGE7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6Izg3ODg4YTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTY3LjUgMTg5Ljl2MTcuOSIvPjwvc3ZnPg=="

/***/ }),

/***/ "./symbols/Tank3.svg":
/*!***************************!*\
  !*** ./symbols/Tank3.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48c3R5bGU+LnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEuOSAyMjcuMlYzMC4xUzMxLjMgMS41IDY0LjUgMS41IDEwNyAyNi44IDEwNyAyNi44djIwMC40cy0xMC40IDI3LjMtNDIuNiAyNy4zLTQyLjUtMjcuMy00Mi41LTI3LjN6TTI0LjIgMzkuNGg3OS45TTI0LjYgMjI0LjloNzkuOE0yNC42IDcxaDc5LjhNMjQuNiAxOTYuM2g3OS44TTI0LjYgMTA0LjVoNzkuOE0yNC42IDE2Ni4xaDc5LjhNMjQuNiAxMzUuM2g3OS44Ii8+PC9zdmc+"

/***/ }),

/***/ "./symbols/Valve1.svg":
/*!****************************!*\
  !*** ./symbols/Valve1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCA2NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggc3R5bGU9ImZpbGw6I2IxYjNiNDtzdHJva2U6I2IxYjNiNDtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTS41Ljk0IDY0IDMyIDEyNy41Ljk0djYyLjEyTDY0IDMyIC41IDYzLjA2eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./symbols/Valve2.svg":
/*!****************************!*\
  !*** ./symbols/Valve2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48c3R5bGU+LnN0MHtmaWxsOiNiMWIzYjQ7c3Ryb2tlOiNiMWIzYjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLjUgNjIuOSA2NCA5NGw2My41LTMxLjF2NjIuMkw2NCA5NCAuNSAxMjUuMXpNMjAuNiA0Mi43SDEwNnMtOS42LTI4LjYtNDIuNy0yOC42LTQyLjcgMjguNi00Mi43IDI4LjZ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I2IxYjNiNDtzdHJva2U6I2IxYjNiNDtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTY0IDk0VjQyLjciLz48L3N2Zz4="

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