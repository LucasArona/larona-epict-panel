define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react","tslib"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_tslib__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./EpictPanel.tsx":
/*!************************!*\
  !*** ./EpictPanel.tsx ***!
  \************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
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
  var boxes = options.boxes;

  var boxMouseUpHandler = function boxMouseUpHandler() {
    onBoxMouseUp();
  };

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
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.imgWrapper),
    id: "img-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    srcSet: processedBgURL,
    onClick: function onClick(event) {
      return onBgClick(event);
    }
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
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.box, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                top: ", "px;\n                left: ", "px;\n                color: ", ";\n                transform: rotate(", "deg);\n              "], ["\n                top: ", "px;\n                left: ", "px;\n                color: ", ";\n                transform: rotate(", "deg);\n              "])), oneBox.ypos, oneBox.xpos, getBoxColor(oneBox), oneBox.angle), oneBox.hasBackground ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    background-color: ", ";\n                  "], ["\n                    background-color: ", ";\n                  "])), oneBox.backgroundColor) : '', isEditMode() && oneBox.selected ? styles.selectedBoxOutline : '')
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

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n    "], ["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n    "]))),
    imgWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    box: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n    "], ["\n      position: absolute;\n    "]))),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
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
      width: 16
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
      value: oneBox.prefix
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Suffix"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxSuffixChanged(event, oneBox);
      },
      value: oneBox.suffix
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, oneBox.prefix ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Prefix size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxPrefixFontSizeChanged(event, oneBox);
      },
      value: oneBox.prefixSize
    }))) : null, oneBox.suffix ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Suffix size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSuffixFontSizeChanged(event, oneBox);
      },
      value: oneBox.suffixSize
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
      value: oneBox.xpos
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Y"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxYposChanged(event, oneBox);
      },
      value: oneBox.ypos
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Angle"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxAngleChanged(event, oneBox);
      },
      value: oneBox.angle
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Link"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      onChange: function onChange(event) {
        return onBoxUrlChanged(event, oneBox);
      },
      value: oneBox.url
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
      value: oneBox.customSymbol
    })))) : null, oneBox.symbol !== '' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Symbol width"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSymbolWidthChanged(event, oneBox);
      },
      value: oneBox.symbolWidth
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Symbol height"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxSymbolHeightChanged(event, oneBox);
      },
      value: oneBox.symbolHeight
    })))) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Hide value"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: oneBox.symbolHideText,
      checked: oneBox.symbolHideText,
      onChange: function onChange(event) {
        return onBoxSymbolHideTextChanged(event, oneBox);
      }
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Colorize symbol"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: oneBox.colorSymbol,
      checked: oneBox.colorSymbol,
      onChange: function onChange(event) {
        return onBoxColorSymbolChanged(event, oneBox);
      }
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
      }
    }))), oneBox.hasOrb ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "width-6"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Hide text"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      checked: oneBox.orbHideText,
      onChange: function onChange(event) {
        return onBoxOrbHideTextChanged(event, oneBox);
      }
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
      }
    })))) : null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CollapsableSection"], {
      label: "Font-size, decimal, thresholds, background",
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
      value: oneBox.decimal
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Font-size"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      onChange: function onChange(event) {
        return onBoxFontsizeChanged(event, oneBox);
      },
      value: oneBox.fontSize
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Use Thresholds"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxUseThresholdsChanged(event, oneBox);
      },
      value: oneBox.isUsingThresholds
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
      value: oneBox.thresholds
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
      value: oneBox.blinkLow
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Blink if high"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxBlinkHighChanged(event, oneBox);
      },
      value: oneBox.blinkHigh
    }))) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      label: "Show the background"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      onChange: function onChange(event) {
        return onBoxHasBackgroundChanged(event, oneBox);
      },
      value: oneBox.hasBackground
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

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNCMUIzQjQ7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMC43MywzMi4wMSAzMiwxLjIxIDMyLDYyLjggIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./symbols/Arrow2.svg":
/*!****************************!*\
  !*** ./symbols/Arrow2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNCMUIzQjQ7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMC43OCwzMS45NiAzMi4xMiwxLjE3IDMyLjEyLDIzLjAyIDYzLjQ2LDIzLjAyIDYzLjQ2LDQwLjk3IDMyLjEyLDQwLjk3IDMyLjEyLDYyLjc0ICIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./symbols/FlatVessel1.svg":
/*!*********************************!*\
  !*** ./symbols/FlatVessel1.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6Izg3ODg4QTtzdHJva2U6IzcwNzE3MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIwLjU4LDE1OS40NyAwLjU4LDU4LjQ3IDEuOTQsNTcuNDEgMzEuNCwzNC42IDk2LjAzLDM0LjYgMTI3LjQyLDU4LjQ3IDEyNy40MiwxNTkuNDcgNzAuODQsMjIxLjQgDQoJNTYuNzcsMjIxLjQgIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTI3LjkxIiB5MT0iNTguNzEiIHgyPSIwLjA4IiB5Mj0iNTguNzEiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIwLjA4IiB5MT0iMTU5LjE2IiB4Mj0iMTI3LjkxIiB5Mj0iMTU5LjE2Ii8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./symbols/Line1.svg":
/*!***************************!*\
  !*** ./symbols/Line1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNCMUIzQjQ7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjAuNTIiIHk9IjMwIiBjbGFzcz0ic3QwIiB3aWR0aD0iNjIuOTkiIGhlaWdodD0iNCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./symbols/Mixer1.svg":
/*!****************************!*\
  !*** ./symbols/Mixer1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTtmaWxsOiNCMUIzQjQ7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6I0IxQjNCNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCTxnIGlkPSJfeDNDX01pcnJvcl9SZXBlYXRfeDNFX18zXyI+DQoJCQk8Zz4NCgkJCQk8ZGVmcz4NCgkJCQkJPHJlY3QgaWQ9IlNWR0lEXzFfIiB4PSIxMS4xMiIgeT0iMjcuOTMiIHdpZHRoPSIyMS41NyIgaGVpZ2h0PSIxNS4zMiIvPg0KCQkJCTwvZGVmcz4NCgkJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCQk8L2NsaXBQYXRoPg0KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMS42MiwzNS41OWMwLTQuNDUsMy44OS03LjE2LDguMjEtNy4xNmM1LjMyLDAsMTIuMTYsNi44MywxMi4xNiw2Ljgzcy03LjA0LDcuNDktMTIuMDgsNy40OQ0KCQkJCQlTMTEuNjIsNDAuMDQsMTEuNjIsMzUuNTl6Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgkJPGcgaWQ9Il94M0NfTWlycm9yX1JlcGVhdF94M0VfXzJfIj4NCgkJCTxnPg0KCQkJCTxkZWZzPg0KCQkJCQk8cmVjdCBpZD0iU1ZHSURfM18iIHg9IjMxLjMiIHk9IjI3LjkzIiB3aWR0aD0iMjEuNTciIGhlaWdodD0iMTUuMzIiLz4NCgkJCQk8L2RlZnM+DQoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF80XyI+DQoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQkJPC9jbGlwUGF0aD4NCgkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTIuMzgsMzUuNTljMC00LjQ1LTMuODktNy4xNi04LjIxLTcuMTZjLTUuMzIsMC0xMi4xNiw2LjgzLTEyLjE2LDYuODNzNy4wNCw3LjQ5LDEyLjA4LDcuNDkNCgkJCQkJUzUyLjM4LDQwLjA0LDUyLjM4LDM1LjU5eiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIzMiIgeTE9IjE3LjE5IiB4Mj0iMzIiIHkyPSIzNSIvPg0KPC9nPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjguMTgiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./symbols/Motor1.svg":
/*!****************************!*\
  !*** ./symbols/Motor1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDF7ZmlsbDojQjFCM0I0O30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMiIgY3k9IjMyLjciIHI9IjI4LjUiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMC4yLDQ1LjRWMTkuNmg1LjFsNi4xLDE4LjJjMC42LDEuNywxLDMsMS4yLDMuOGMwLjMtMC45LDAuOC0yLjMsMS40LTQuMWw2LjItMTcuOWg0LjZ2MjUuOGgtMy4zVjIzLjgNCgkJbC03LjUsMjEuNkgzMWwtNy41LTIxLjl2MjEuOUgyMC4yeiIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./symbols/Pipe1.svg":
/*!***************************!*\
  !*** ./symbols/Pipe1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30NCjwvc3R5bGU+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMyIiB5MT0iNTMuNzgwMiIgeDI9IjMyIiB5Mj0iOC40MTk5Ij4NCgk8c3RvcCAgb2Zmc2V0PSIzLjU2NDUwM2UtMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QjdDN0UiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjA5ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiM4RThGOTAiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjUwMjciIHN0eWxlPSJzdG9wLWNvbG9yOiNEOURBREIiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjU5ODkiIHN0eWxlPSJzdG9wLWNvbG9yOiNENUQ2RDciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjcwNDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNDN0M4Q0EiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjgxNCIgc3R5bGU9InN0b3AtY29sb3I6I0IxQjJCNCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuOTI2IiBzdHlsZT0ic3RvcC1jb2xvcjojOTM5NDk2Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC45OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QjdDN0UiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cmVjdCB5PSI4LjQyIiBjbGFzcz0ic3QwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDUuMzYiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./symbols/Pipe2.svg":
/*!***************************!*\
  !*** ./symbols/Pipe2.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQ0KPC9zdHlsZT4NCjxnPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjAuNjU5OSIgeTE9Ijg2LjY4MDEiIHgyPSIyMC42NTk5IiB5Mj0iNDEuMzE5OSI+DQoJCTxzdG9wICBvZmZzZXQ9IjMuNTY0NTAzZS0wMyIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjA5ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiM4RThGOTAiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC41MDI3IiBzdHlsZT0ic3RvcC1jb2xvcjojRDlEQURCIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNTk4OSIgc3R5bGU9InN0b3AtY29sb3I6I0Q1RDZENyIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjcwNDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNDN0M4Q0EiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC44MTQiIHN0eWxlPSJzdG9wLWNvbG9yOiNCMUIyQjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC45MjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzk0OTYiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC45OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QjdDN0UiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxyZWN0IHk9IjQxLjMyIiBjbGFzcz0ic3QwIiB3aWR0aD0iNDEuMzIiIGhlaWdodD0iNDUuMzYiLz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MC42OTU3IiB5MT0iNjQuMzk2NSIgeDI9IjQwLjY5NTciIHkyPSIxOS4wMzYyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC00LjE3MDY5NWUtMDcgLTEgMSAtNC4xNzA2OTVlLTA3IDIyLjI4MDMgMTQ4LjAzMjQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMy41NjQ1MDNlLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojN0I3QzdFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuMDk4OCIgc3R5bGU9InN0b3AtY29sb3I6IzhFOEY5MCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjUwMjciIHN0eWxlPSJzdG9wLWNvbG9yOiNEOURBREIiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC41OTg5IiBzdHlsZT0ic3RvcC1jb2xvcjojRDVENkQ3Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNzA0MiIgc3R5bGU9InN0b3AtY29sb3I6I0M3QzhDQSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjgxNCIgc3R5bGU9InN0b3AtY29sb3I6I0IxQjJCNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjkyNiIgc3R5bGU9InN0b3AtY29sb3I6IzkzOTQ5NiIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjk5OSIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHJlY3QgeD0iNDEuMzIiIHk9Ijg2LjY4IiBjbGFzcz0ic3QxIiB3aWR0aD0iNDUuMzYiIGhlaWdodD0iNDEuMzIiLz4NCgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxLjMxOTgiIHkxPSI4Ni42ODA0IiB4Mj0iNzMuMjQ3NSIgeTI9IjU0Ljc1MjciPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojN0I3QzdFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuMzY1OCIgc3R5bGU9InN0b3AtY29sb3I6I0Q5REFEQiIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjQ4MTMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDRkQwRDEiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42NzgyIiBzdHlsZT0ic3RvcC1jb2xvcjojQjRCNUI2Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuOTMxMSIgc3R5bGU9InN0b3AtY29sb3I6Izg4ODk4QiIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojN0I3QzdFIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDEuMzIsNDEuMzJjMCwwLDE1Ljc2LTAuNjMsMzAuMzYsMTJzMTUsMzMuMzYsMTUsMzMuMzZINDEuMzJWNDEuMzJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./symbols/Pipe3.svg":
/*!***************************!*\
  !*** ./symbols/Pipe3.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Qye29wYWNpdHk6MC41O2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQ0KCS5zdDN7b3BhY2l0eTowLjU7ZmlsbDp1cmwoI1NWR0lEXzRfKTt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2NCIgeTE9IjQxLjMyIiB4Mj0iNjQiIHkyPSI4Ni42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEyOCkiPg0KCTxzdG9wICBvZmZzZXQ9IjMuNTY0NTAzZS0wMyIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KCTxzdG9wICBvZmZzZXQ9IjkuODgwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzhFOEY5MCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTAyNyIgc3R5bGU9InN0b3AtY29sb3I6I0Q5REFEQiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTk4OSIgc3R5bGU9InN0b3AtY29sb3I6I0Q1RDZENyIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNzA0MiIgc3R5bGU9InN0b3AtY29sb3I6I0M3QzhDQSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuODE0IiBzdHlsZT0ic3RvcC1jb2xvcjojQjFCMkI0Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC45MjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzk0OTYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjk5OSIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxyZWN0IHk9IjQxLjMiIGNsYXNzPSJzdDAiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDUuNCIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMDQuNjg5IiB5MT0iNjMuNjAzNyIgeDI9IjEwNC42ODkiIHkyPSIxMDguOTYzNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtNC4xNzA2OTVlLTA3IC0xIC0xIDQuMTcwNjk1ZS0wNyAxNTAuMjgwMyAyMTIuMDMyMykiPg0KCTxzdG9wICBvZmZzZXQ9IjMuNTY0NTAzZS0wMyIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KCTxzdG9wICBvZmZzZXQ9IjkuODgwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzhFOEY5MCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTAyNyIgc3R5bGU9InN0b3AtY29sb3I6I0Q5REFEQiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTk4OSIgc3R5bGU9InN0b3AtY29sb3I6I0Q1RDZENyIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNzA0MiIgc3R5bGU9InN0b3AtY29sb3I6I0M3QzhDQSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuODE0IiBzdHlsZT0ic3RvcC1jb2xvcjojQjFCMkI0Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC45MjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzk0OTYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjk5OSIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxyZWN0IHg9IjQxLjMiIHk9Ijg2LjciIGNsYXNzPSJzdDEiIHdpZHRoPSI0NS40IiBoZWlnaHQ9IjQxLjMiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDEuMzIiIHkxPSI0MS4zMTc0IiB4Mj0iNzMuMjQ3MiIgeTI9IjczLjI0NDYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMjgpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojN0I3QzdFIi8+DQoJPHN0b3AgIG9mZnNldD0iMC4zNjU4IiBzdHlsZT0ic3RvcC1jb2xvcjojRDlEQURCIi8+DQoJPHN0b3AgIG9mZnNldD0iMC40ODEzIiBzdHlsZT0ic3RvcC1jb2xvcjojQ0ZEMEQxIi8+DQoJPHN0b3AgIG9mZnNldD0iMC42NzgyIiBzdHlsZT0ic3RvcC1jb2xvcjojQjRCNUI2O3N0b3Atb3BhY2l0eTowLjE1Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC45MzExIiBzdHlsZT0ic3RvcC1jb2xvcjojODg4OThCO3N0b3Atb3BhY2l0eTowLjEiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojN0I3QzdFO3N0b3Atb3BhY2l0eTowIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTQxLjMsNDEuM2MwLDAsMTUuOC0wLjYsMzAuNCwxMnMxNSwzMy40LDE1LDMzLjRINDEuM1Y0MS4zeiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3OS43MjgxIiB5MT0iNDEuNDQ4NCIgeDI9IjExMS42NTUzIiB5Mj0iNzMuMzc1NiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgLTEgLTYuMTIzMjM0ZS0xNyAxMjguMTMxIDE2Ni40MDgxKSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMzY1OCIgc3R5bGU9InN0b3AtY29sb3I6I0Q5REFEQiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNDgxMyIgc3R5bGU9InN0b3AtY29sb3I6I0NGRDBEMSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNjc4MiIgc3R5bGU9InN0b3AtY29sb3I6I0I0QjVCNjtzdG9wLW9wYWNpdHk6MC4xNSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuOTMxMSIgc3R5bGU9InN0b3AtY29sb3I6Izg4ODk4QjtzdG9wLW9wYWNpdHk6MC4xIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzdCN0M3RTtzdG9wLW9wYWNpdHk6MCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik00MS4zLDg2LjdjMCwwLTAuNi0xNS44LDEyLTMwLjRzMzMuNC0xNSwzMy40LTE1djQ1LjRINDEuM3oiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./symbols/Pump1.svg":
/*!***************************!*\
  !*** ./symbols/Pump1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNCMUIzQjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMyIiBjeT0iMzIuNyIgcj0iMjguNSIvPg0KPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMzkuMywzLjUgNC4xLDMyLjcgNDEuNSw2MS4yICIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./symbols/Tank1.svg":
/*!***************************!*\
  !*** ./symbols/Tank1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4xLDIwMy4zdi0xNTBjMCwwLDEzLjktMjEuOCw2My0yMS44czYzLDE5LjMsNjMsMTkuM3YxNTIuNWMwLDAtMTUuNCwyMC44LTYzLDIwLjhTMS4xLDIwMy4zLDEuMSwyMDMuM3oiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./symbols/Tank2.svg":
/*!***************************!*\
  !*** ./symbols/Tank2.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM4Nzg4OEE7c3Ryb2tlOiM4Nzg4OEE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNF8pO2ZpbGw6Izg3ODg4QTtzdHJva2U6Izg3ODg4QTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0M3tmaWxsOm5vbmU7c3Ryb2tlOiM4Nzg4OEE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xLjEsMjAzLjN2LTE1MGMwLDAsMTMuOS0yMS44LDYzLTIxLjhzNjMsMTkuMyw2MywxOS4zdjE1Mi41YzAsMC0xNS40LDIwLjgtNjMsMjAuOFMxLjEsMjAzLjMsMS4xLDIwMy4zeiIvPg0KPGc+DQoJPGc+DQoJCTxnIGlkPSJfeDNDX01pcnJvcl9SZXBlYXRfeDNFX18zXyI+DQoJCQk8Zz4NCgkJCQk8Zz4NCgkJCQkJPGRlZnM+DQoJCQkJCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHg9IjQ2LjYiIHk9IjIwMC43IiB3aWR0aD0iMjEuNiIgaGVpZ2h0PSIxNS4zIi8+DQoJCQkJCTwvZGVmcz4NCgkJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+DQoJCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJCQk8L2NsaXBQYXRoPg0KCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDcuMSwyMDguM2MwLTQuNCwzLjktNy4yLDguMi03LjJjNS4zLDAsMTIuMiw2LjgsMTIuMiw2LjhzLTcsNy41LTEyLjEsNy41UzQ3LjEsMjEyLjgsNDcuMSwyMDguM3oiLz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4NCgkJPGcgaWQ9Il94M0NfTWlycm9yX1JlcGVhdF94M0VfXzJfIj4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJCQk8ZGVmcz4NCgkJCQkJCTxyZWN0IGlkPSJTVkdJRF8zXyIgeD0iNjYuOCIgeT0iMjAwLjciIHdpZHRoPSIyMS42IiBoZWlnaHQ9IjE1LjMiLz4NCgkJCQkJPC9kZWZzPg0KCQkJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj4NCgkJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQkJCTwvY2xpcFBhdGg+DQoJCQkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04Ny45LDIwOC4zYzAtNC40LTMuOS03LjItOC4yLTcuMmMtNS4zLDAtMTIuMiw2LjgtMTIuMiw2LjhzNyw3LjUsMTIuMSw3LjVTODcuOSwyMTIuOCw4Ny45LDIwOC4zeiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iNjcuNSIgeTE9IjE4OS45IiB4Mj0iNjcuNSIgeTI9IjIwNy44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./symbols/Tank3.svg":
/*!***************************!*\
  !*** ./symbols/Tank3.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEuOSwyMjcuMlYzMC4xYzAsMCw5LjQtMjguNiw0Mi42LTI4LjZTMTA3LDI2LjgsMTA3LDI2Ljh2MjAwLjRjMCwwLTEwLjQsMjcuMy00Mi42LDI3LjMNCglTMjEuOSwyMjcuMiwyMS45LDIyNy4yeiIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI0LjIiIHkxPSIzOS40IiB4Mj0iMTA0LjEiIHkyPSIzOS40Ii8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQuNiIgeTE9IjIyNC45IiB4Mj0iMTA0LjQiIHkyPSIyMjQuOSIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI0LjYiIHkxPSI3MSIgeDI9IjEwNC40IiB5Mj0iNzEiLz4NCjxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyNC42IiB5MT0iMTk2LjMiIHgyPSIxMDQuNCIgeTI9IjE5Ni4zIi8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQuNiIgeTE9IjEwNC41IiB4Mj0iMTA0LjQiIHkyPSIxMDQuNSIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI0LjYiIHkxPSIxNjYuMSIgeDI9IjEwNC40IiB5Mj0iMTY2LjEiLz4NCjxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyNC42IiB5MT0iMTM1LjMiIHgyPSIxMDQuNCIgeTI9IjEzNS4zIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./symbols/Valve1.svg":
/*!****************************!*\
  !*** ./symbols/Valve1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0IxQjNCNDtzdHJva2U6I0IxQjNCNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIwLjUsMC45NCA2NCwzMiAxMjcuNSwwLjk0IDEyNy41LDYzLjA2IDY0LDMyIDAuNSw2My4wNiAiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./symbols/Valve2.svg":
/*!****************************!*\
  !*** ./symbols/Valve2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQjFCM0I0O3N0cm9rZTojQjFCM0I0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6I0IxQjNCNDtzdHJva2U6I0IxQjNCNDtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIwLjUsNjIuOSA2NCw5NCAxMjcuNSw2Mi45IDEyNy41LDEyNS4xIDY0LDk0IDAuNSwxMjUuMSAiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC42LDQyLjdINjRoNDJjMCwwLTkuNi0yOC42LTQyLjctMjguNlMyMC42LDQyLjcsMjAuNiw0Mi43eiIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjY0IiB5MT0iOTQiIHgyPSI2NCIgeTI9IjQyLjciLz4NCjwvc3ZnPg0K"

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

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tslib__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map