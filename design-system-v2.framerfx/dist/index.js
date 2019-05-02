(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("object-assign"), require("prop-types"), require("react"), require("react-dom"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "object-assign", "prop-types", "react", "react-dom", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("object-assign"), require("prop-types"), require("react"), require("react-dom"), require("styled-components")) : factory(root["Framer"], root["object-assign"], root["prop-types"], root["React"], root["ReactDOM"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_object_assign__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/button/dist/mdc.button.css":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/button/dist/mdc.button.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n.mdc-button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 0 8px 0 8px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  height: 36px;\n  border: none;\n  outline: none;\n  /* @alternate */\n  line-height: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  vertical-align: middle;\n  border-radius: 4px;\n}\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-button:active {\n  outline: none;\n}\n.mdc-button:hover {\n  cursor: pointer;\n}\n.mdc-button:disabled {\n  background-color: transparent;\n  color: rgba(0, 0, 0, 0.37);\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-button.mdc-button--dense {\n  border-radius: 4px;\n}\n.mdc-button:not(:disabled) {\n  background-color: transparent;\n}\n.mdc-button .mdc-button__icon {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 8px;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  vertical-align: top;\n}\n[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: 0;\n}\n.mdc-button:not(:disabled) {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-button__label + .mdc-button__icon {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: 0;\n}\n[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 8px;\n}\n\nsvg.mdc-button__icon {\n  fill: currentColor;\n}\n\n.mdc-button--raised .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon {\n  /* @noflip */\n  margin-left: -4px;\n  /* @noflip */\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl],\n[dir=rtl] .mdc-button--unelevated .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon[dir=rtl],\n[dir=rtl] .mdc-button--outlined .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: -4px;\n}\n.mdc-button--raised .mdc-button__label + .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n.mdc-button--outlined .mdc-button__label + .mdc-button__icon {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: -4px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl],\n[dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl],\n[dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon,\n.mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: -4px;\n  /* @noflip */\n  margin-right: 8px;\n}\n\n.mdc-button--raised,\n.mdc-button--unelevated {\n  padding: 0 16px 0 16px;\n}\n.mdc-button--raised:disabled,\n.mdc-button--unelevated:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.37);\n}\n.mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n  background-color: #6200ee;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n    /* @alternate */\n    background-color: var(--mdc-theme-primary, #6200ee);\n  }\n}\n.mdc-button--raised:not(:disabled),\n.mdc-button--unelevated:not(:disabled) {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff);\n}\n\n.mdc-button--raised {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-button--raised:hover, .mdc-button--raised:focus {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mdc-button--raised:active {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mdc-button--raised:disabled {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--outlined {\n  border-style: solid;\n  padding: 0 14px 0 14px;\n  border-width: 2px;\n}\n.mdc-button--outlined:disabled {\n  border-color: rgba(0, 0, 0, 0.37);\n}\n.mdc-button--outlined:not(:disabled) {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: 0.8125rem;\n}\n\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-button::before, .mdc-button::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-button::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-button.mdc-ripple-upgraded::before {\n  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n          transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.mdc-button.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n          animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n          animation: mdc-ripple-fg-opacity-out 150ms;\n  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n          transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button::before, .mdc-button::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-button.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-button::before, .mdc-button::after {\n  background-color: #6200ee;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-button::before, .mdc-button::after {\n    /* @alternate */\n    background-color: var(--mdc-theme-primary, #6200ee);\n  }\n}\n.mdc-button:hover::before {\n  opacity: 0.04;\n}\n.mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-button:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n\n.mdc-button--raised::before, .mdc-button--raised::after,\n.mdc-button--unelevated::before,\n.mdc-button--unelevated::after {\n  background-color: #fff;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-button--raised::before, .mdc-button--raised::after,\n.mdc-button--unelevated::before,\n.mdc-button--unelevated::after {\n    /* @alternate */\n    background-color: var(--mdc-theme-on-primary, #fff);\n  }\n}\n.mdc-button--raised:hover::before,\n.mdc-button--unelevated:hover::before {\n  opacity: 0.08;\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,\n.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded)::after,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-button--raised.mdc-ripple-upgraded,\n.mdc-button--unelevated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/chips/dist/mdc.chips.css":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/chips/dist/mdc.chips.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-chip {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  border-radius: 16px;\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  height: 32px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 7px 12px;\n  outline: none;\n  cursor: pointer;\n  overflow: hidden;\n}\n.mdc-chip::before, .mdc-chip::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-chip::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-chip.mdc-ripple-upgraded::before {\n  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n          transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-chip.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.mdc-chip.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-chip.mdc-ripple-upgraded--foreground-activation::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n          animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-chip.mdc-ripple-upgraded--foreground-deactivation::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n          animation: mdc-ripple-fg-opacity-out 150ms;\n  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n          transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-chip::before, .mdc-chip::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-chip.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-chip::before, .mdc-chip::after {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-chip:hover::before {\n  opacity: 0.04;\n}\n.mdc-chip:not(.mdc-ripple-upgraded):focus::before, .mdc-chip.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-chip:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-chip:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-chip.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-chip:hover {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,\n.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n  /* @noflip */\n  margin-left: -4px;\n  /* @noflip */\n  margin-right: 4px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark, .mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],\n[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),\n.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl] {\n  /* @noflip */\n  margin-left: 4px;\n  /* @noflip */\n  margin-right: -4px;\n}\n.mdc-chip:hover {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n\n.mdc-chip__icon--leading {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-chip__icon--trailing {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-chip__icon--trailing:hover {\n  color: rgba(0, 0, 0, 0.62);\n}\n.mdc-chip__icon--trailing:focus {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n\n.mdc-chip__icon.mdc-chip__icon--trailing {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.mdc-chip__icon--trailing {\n  margin: 0 -4px 0 4px;\n}\n\n.mdc-chip--exit {\n  transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;\n  opacity: 0;\n}\n\n.mdc-chip__text {\n  white-space: nowrap;\n}\n\n.mdc-chip__icon {\n  border-radius: 50%;\n  outline: none;\n  vertical-align: middle;\n}\n\n.mdc-chip__checkmark {\n  height: 20px;\n}\n\n.mdc-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke-width: 2px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-chip--selected .mdc-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before {\n  opacity: 0.08;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {\n  background-color: #6200ee;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {\n    /* @alternate */\n    background-color: var(--mdc-theme-primary, #6200ee);\n  }\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover::before {\n  opacity: 0.12;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.2;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {\n  color: rgba(98, 0, 238, 0.54);\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path {\n  stroke: #6200ee;\n  /* @alternate */\n  stroke: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip--selected {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n}\n\n.mdc-chip__checkmark-svg {\n  width: 0;\n  height: 20px;\n  transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-chip--selected .mdc-chip__checkmark-svg {\n  width: 20px;\n}\n\n.mdc-chip-set--filter .mdc-chip__icon--leading {\n  transition: opacity 75ms linear;\n  transition-delay: -50ms;\n  opacity: 1;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark {\n  transition: opacity 75ms linear;\n  transition-delay: 80ms;\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark .mdc-chip__checkmark-svg {\n  transition: width 0ms;\n}\n.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading {\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading + .mdc-chip__checkmark {\n  width: 0;\n  opacity: 1;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading {\n  width: 0;\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading + .mdc-chip__checkmark {\n  width: 20px;\n}\n\n@-webkit-keyframes mdc-chip-entry {\n  from {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    opacity: 0.4;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-chip-entry {\n  from {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    opacity: 0.4;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n.mdc-chip-set {\n  padding: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n.mdc-chip-set .mdc-chip {\n  margin: 4px;\n}\n\n.mdc-chip-set--input .mdc-chip {\n  -webkit-animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);\n          animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/elevation/dist/mdc.elevation.css":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/elevation/dist/mdc.elevation.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/fab/dist/mdc.fab.css":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/fab/dist/mdc.fab.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n.mdc-fab {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  fill: currentColor;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  background-color: #018786;\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-secondary, #fff);\n}\n.mdc-fab:not(.mdc-fab--extended) {\n  border-radius: 50%;\n}\n.mdc-fab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-fab:hover, .mdc-fab:focus {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mdc-fab:active {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mdc-fab:active, .mdc-fab:focus {\n  outline: none;\n}\n.mdc-fab:hover {\n  cursor: pointer;\n}\n.mdc-fab > svg {\n  width: 100%;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-fab {\n    /* @alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n.mdc-fab .mdc-fab__icon {\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n}\n\n.mdc-fab--mini {\n  width: 40px;\n  height: 40px;\n}\n\n.mdc-fab--extended {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-radius: 24px;\n  padding: 0 20px;\n  width: auto;\n  max-width: 100%;\n  height: 48px;\n}\n.mdc-fab--extended .mdc-fab__icon {\n  /* @noflip */\n  margin-left: -8px;\n  /* @noflip */\n  margin-right: 12px;\n}\n[dir=rtl] .mdc-fab--extended .mdc-fab__icon, .mdc-fab--extended .mdc-fab__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: 12px;\n  /* @noflip */\n  margin-right: -8px;\n}\n.mdc-fab--extended .mdc-fab__label + .mdc-fab__icon {\n  /* @noflip */\n  margin-left: 12px;\n  /* @noflip */\n  margin-right: -8px;\n}\n[dir=rtl] .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon, .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon[dir=rtl] {\n  /* @noflip */\n  margin-left: -8px;\n  /* @noflip */\n  margin-right: 12px;\n}\n\n.mdc-fab__label {\n  justify-content: flex-start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-fab__icon {\n  transition: -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  fill: currentColor;\n  will-change: transform;\n}\n\n.mdc-fab .mdc-fab__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mdc-fab--exited {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  transition: opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-fab--exited .mdc-fab__icon {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-fab {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-fab::before, .mdc-fab::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-fab::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-fab.mdc-ripple-upgraded::before {\n  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n          transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-fab.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.mdc-fab.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-fab.mdc-ripple-upgraded--foreground-activation::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n          animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n          animation: mdc-ripple-fg-opacity-out 150ms;\n  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n          transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-fab::before, .mdc-fab::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-fab.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-fab::before, .mdc-fab::after {\n  background-color: #fff;\n}\n@supports not (-ms-ime-align: auto) {\n  .mdc-fab::before, .mdc-fab::after {\n    /* @alternate */\n    background-color: var(--mdc-theme-on-secondary, #fff);\n  }\n}\n.mdc-fab:hover::before {\n  opacity: 0.08;\n}\n.mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-fab:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-fab:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-fab.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/theme/dist/mdc.theme.css":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/theme/dist/mdc.theme.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n:root {\n  --mdc-theme-primary: #6200ee;\n  --mdc-theme-secondary: #018786;\n  --mdc-theme-background: #fff;\n  --mdc-theme-surface: #fff;\n  --mdc-theme-error: #b00020;\n  --mdc-theme-on-primary: #fff;\n  --mdc-theme-on-secondary: #fff;\n  --mdc-theme-on-surface: #000;\n  --mdc-theme-on-error: #fff;\n  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-dark: white;\n  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);\n}\n\n.mdc-theme--primary {\n  color: #6200ee !important;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee) !important;\n}\n\n.mdc-theme--secondary {\n  color: #018786 !important;\n  /* @alternate */\n  color: var(--mdc-theme-secondary, #018786) !important;\n}\n\n.mdc-theme--background {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-background, #fff);\n}\n\n.mdc-theme--surface {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n}\n\n.mdc-theme--error {\n  color: #b00020 !important;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020) !important;\n}\n\n.mdc-theme--on-primary {\n  color: #fff !important;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff) !important;\n}\n\n.mdc-theme--on-secondary {\n  color: #fff !important;\n  /* @alternate */\n  color: var(--mdc-theme-on-secondary, #fff) !important;\n}\n\n.mdc-theme--on-surface {\n  color: #000 !important;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000) !important;\n}\n\n.mdc-theme--on-error {\n  color: #fff !important;\n  /* @alternate */\n  color: var(--mdc-theme-on-error, #fff) !important;\n}\n\n.mdc-theme--text-primary-on-background {\n  color: rgba(0, 0, 0, 0.87) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-background {\n  color: rgba(0, 0, 0, 0.54) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-light {\n  color: rgba(0, 0, 0, 0.87) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-light {\n  color: rgba(0, 0, 0, 0.54) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-dark {\n  color: white !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-dark, white) !important;\n}\n\n.mdc-theme--text-secondary-on-dark {\n  color: rgba(255, 255, 255, 0.7) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--primary-bg {\n  background-color: #6200ee !important;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee) !important;\n}\n\n.mdc-theme--secondary-bg {\n  background-color: #018786 !important;\n  /* @alternate */\n  background-color: var(--mdc-theme-secondary, #018786) !important;\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/typography/dist/mdc.typography.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/typography/dist/mdc.typography.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2019 Google Inc.\n License: MIT\n*/\n.mdc-typography {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\n.mdc-typography--headline1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 6rem;\n  line-height: 6rem;\n  font-weight: 300;\n  letter-spacing: -0.015625em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--headline2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 3.75rem;\n  line-height: 3.75rem;\n  font-weight: 300;\n  letter-spacing: -0.0083333333em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--headline3 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 3rem;\n  line-height: 3.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--headline4 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  line-height: 2.5rem;\n  font-weight: 400;\n  letter-spacing: 0.0073529412em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--headline5 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--headline6 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  line-height: 2rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--subtitle1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  letter-spacing: 0.009375em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--subtitle2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n  font-weight: 500;\n  letter-spacing: 0.0071428571em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--body1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.03125em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--body2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--caption {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0333333333em;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.mdc-typography--overline {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  line-height: 2rem;\n  font-weight: 500;\n  letter-spacing: 0.1666666667em;\n  text-decoration: none;\n  text-transform: uppercase;\n}", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@rmwc/icon/icon.css":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@rmwc/icon/icon.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rmwc-icon {\n  \n}\n\n.rmwc-icon--image {\n  min-width: 1em;\n  min-height: 1em;\n  background-repeat: no-repeat;\n  font-size: 1.5rem;\n  background-size: 1em;\n  background-position: center center;\n}\n\n.rmwc-icon--size-xsmall {\n  font-size: 1.125rem;\n  width: 1em;\n  height: 1em;\n}\n\n.rmwc-icon--size-small {\n  font-size: 1.25rem;\n  width: 1em;\n  height: 1em;\n}\n\n.rmwc-icon--size-medium {\n  font-size: 1.5rem;\n  width: 1em;\n  height: 1em;\n}\n\n.rmwc-icon--size-large {\n  font-size: 2.25rem;\n  width: 1em;\n  height: 1em;\n}\n\n.rmwc-icon--size-xlarge {\n  font-size: 3rem;\n  width: 1em;\n  height: 1em;\n}\n", ""]);



/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/process/browser.js":
/*!*********************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/process/browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js":
/*!********************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/urls.js":
/*!***************************************************************************************************************!*\
  !*** /Users/lincolnmitchell/.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/urls.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../design-system/components/Button.tsx":
/*!**********************************************!*\
  !*** ../design-system/components/Button.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Button_1 = __webpack_require__(/*! @rmwc/Button */ "../node_modules/@rmwc/Button/next/index.js");
__webpack_require__(/*! @material/button/dist/mdc.button.css */ "../node_modules/@material/button/dist/mdc.button.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
const framerx_integration_1 = __webpack_require__(/*! ./framerx-integration */ "../design-system/components/framerx-integration.ts");
// Component
exports.Button = (_a = framerx_integration_1.processIconProps(this.props)) => {
    var { children, dense, disabled, selected, icon, label, outlined, raised, ripple, trailingIcon, unelevated } = _a, rest = __rest(_a, ["children", "dense", "disabled", "selected", "icon", "label", "outlined", "raised", "ripple", "trailingIcon", "unelevated"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(Button_1.Button, Object.assign({ children: children, dense: dense, disabled: disabled, selected: selected, icon: icon, label: label, outlined: outlined, raised: raised, ripple: ripple, trailingIcon: trailingIcon, unelevated: unelevated }, rest), "YES")));
};
exports.__info__ = [{ name: "Button", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVzaWduLXN5c3RlbS9jb21wb25lbnRzL0J1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIseUNBQStDO0FBQy9DLGdEQUE4QztBQUM5QyxxREFBOEM7QUFDOUMsK0RBRStCO0FBaUIvQixZQUFZO0FBQ0MsUUFBQSxNQUFNLEdBQW9CLENBQUMsS0FjcEMsc0NBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFkSSxFQUN0QyxRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxPQUdvQixFQUY5QiwrSUFBTztJQUU2QixPQUFBLENBRXBDLG9CQUFDLHdCQUFjO1FBQ2Isb0JBQUMsZUFBTyxrQkFDTixRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsWUFBWSxFQUFFLFlBQVksRUFDMUIsVUFBVSxFQUFFLFVBQVUsSUFDbEIsSUFBSSxTQUNFLENBQ0ssQ0FDcEIsQ0FBQTtDQUFBLENBQUE7QUFBQSJ9

/***/ }),

/***/ "../design-system/components/Chip.tsx":
/*!********************************************!*\
  !*** ../design-system/components/Chip.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Chip_1 = __webpack_require__(/*! @rmwc/Chip */ "../node_modules/@rmwc/Chip/next/index.js");
__webpack_require__(/*! @material/chips/dist/mdc.chips.css */ "../node_modules/@material/chips/dist/mdc.chips.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
const framerx_integration_1 = __webpack_require__(/*! ./framerx-integration */ "../design-system/components/framerx-integration.ts");
// Component
exports.Chip = (_a = framerx_integration_1.processIconProps(this.props)) => {
    var { label, trailingIcon, checked, selected, children } = _a, rest = __rest(_a, ["label", "trailingIcon", "checked", "selected", "children"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(Chip_1.Chip, Object.assign({ label: label, trailingIcon: trailingIcon, checked: checked, selected: selected }, rest))));
};
exports.__info__ = [{ name: "Chip", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9DaGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixxQ0FBeUM7QUFDekMsOENBQTJDO0FBQzNDLHFEQUE4QztBQUM5QywrREFFK0I7QUFhL0IsWUFBWTtBQUNDLFFBQUEsSUFBSSxHQUFvQixDQUFDLEtBUWxDLHNDQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBUkUsRUFDcEMsS0FBSyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxFQUNSLFFBQVEsT0FHc0IsRUFGOUIsK0VBQU87SUFFNkIsT0FBQSxDQUVwQyxvQkFBQyx3QkFBYztRQUNiLG9CQUFDLFdBQUssa0JBQ0osS0FBSyxFQUFFLEtBQUssRUFDWixZQUFZLEVBQUUsWUFBWSxFQUMxQixPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxJQUNkLElBQUksRUFDQSxDQUNPLENBQ3BCLENBQUE7Q0FBQSxDQUFBO0FBQUEifQ==

/***/ }),

/***/ "../design-system/components/Elevation.tsx":
/*!*************************************************!*\
  !*** ../design-system/components/Elevation.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Elevation_1 = __webpack_require__(/*! @rmwc/Elevation */ "../node_modules/@rmwc/Elevation/next/index.js");
__webpack_require__(/*! @material/elevation/dist/mdc.elevation.css */ "../node_modules/@material/elevation/dist/mdc.elevation.css");
// Component
exports.Elevation = (_a) => {
    var { height, width, transition, wrap, z } = _a, rest = __rest(_a, ["height", "width", "transition", "wrap", "z"]);
    return (React.createElement(Elevation_1.Elevation, { z: z, wrap: wrap },
        React.createElement("span", null, "Elevation")));
};
exports.__info__ = [{ name: "Elevation", children: false, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVzaWduLXN5c3RlbS9jb21wb25lbnRzL0VsZXZhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsK0NBQXdEO0FBQ3hELHNEQUFvRDtBQWFwRCxZQUFZO0FBQ0MsUUFBQSxTQUFTLEdBQW9CLENBQUMsRUFRMUMsRUFBRSxFQUFFO1FBUnNDLEVBQ3pDLE1BQU0sRUFDTixLQUFLLEVBQ0wsVUFBVSxFQUNWLElBQUksRUFDSixDQUFDLE9BR0YsRUFGQyxpRUFBTztJQUVGLE9BQUEsQ0FDSCxvQkFBQyxxQkFBVSxJQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUk7UUFDM0IsOENBQXNCLENBQ1gsQ0FDaEIsQ0FBQTtDQUFBLENBQUE7QUFDRCJ9

/***/ }),

/***/ "../design-system/components/Fab.tsx":
/*!*******************************************!*\
  !*** ../design-system/components/Fab.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Fab_1 = __webpack_require__(/*! @rmwc/Fab */ "../node_modules/@rmwc/Fab/next/index.js");
__webpack_require__(/*! @material/fab/dist/mdc.fab.css */ "../node_modules/@material/fab/dist/mdc.fab.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
const framerx_integration_1 = __webpack_require__(/*! ./framerx-integration */ "../design-system/components/framerx-integration.ts");
// Component
exports.Fab = (_a = framerx_integration_1.processIconProps(this.props)) => {
    var { children, exited, icon, label, mini, ripple, trailingIcon } = _a, rest = __rest(_a, ["children", "exited", "icon", "label", "mini", "ripple", "trailingIcon"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(Fab_1.Fab, Object.assign({ children: children, exited: exited, icon: icon, label: label, mini: mini, ripple: ripple, trailingIcon: trailingIcon }, rest))));
};
exports.__info__ = [{ name: "Fab", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVzaWduLXN5c3RlbS9jb21wb25lbnRzL0ZhYi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNDO0FBQ3RDLDBDQUF1QztBQUN2QyxxREFBOEM7QUFDOUMsK0RBRStCO0FBYy9CLFlBQVk7QUFDQyxRQUFBLEdBQUcsR0FBb0IsQ0FBQyxLQVVqQyxzQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQVZDLEVBQ25DLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLEtBQUssRUFDTCxJQUFJLEVBQ0osTUFBTSxFQUNOLFlBQVksT0FHa0IsRUFGOUIsNEZBQU87SUFFNkIsT0FBQSxDQUVwQyxvQkFBQyx3QkFBYztRQUNiLG9CQUFDLFNBQUksa0JBQ0gsUUFBUSxFQUFFLFFBQVEsRUFDbEIsTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxZQUFZLElBQ3RCLElBQUksRUFDRCxDQUNRLENBQ3BCLENBQUE7Q0FBQSxDQUFBO0FBQUEifQ==

/***/ }),

/***/ "../design-system/components/FramerXWrapper.tsx":
/*!******************************************************!*\
  !*** ../design-system/components/FramerXWrapper.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const theme_1 = __webpack_require__(/*! @rmwc/theme */ "../node_modules/@rmwc/theme/next/index.js");
__webpack_require__(/*! @material/theme/dist/mdc.theme.css */ "../node_modules/@material/theme/dist/mdc.theme.css");
const theme_2 = __webpack_require__(/*! ./theme */ "../design-system/components/theme.js");
const react_helmet_1 = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");
function FramerXWrapper({ children }) {
    window["__checkBudget__"]();
    return (React.createElement(React.Fragment, null,
        React.createElement(react_helmet_1.default, null,
            React.createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" })),
        React.createElement(theme_1.ThemeProvider, { options: theme_2.default.options }, children)));
}
exports.default = FramerXWrapper;
exports.__info__ = [{ name: "FramerXWrapper", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWVyWFdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudHMvRnJhbWVyWFdyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHVDQUE0QztBQUM1Qyw4Q0FBNEM7QUFDNUMsbUNBQTRCO0FBQzVCLCtDQUFrQztBQUVsQyxTQUF3QixjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUU7O0lBQ2pELE9BQU8sQ0FDTDtRQUNFLG9CQUFDLHNCQUFNO1lBQ0wsOEJBQ0UsSUFBSSxFQUFDLHlEQUF5RCxFQUM5RCxHQUFHLEVBQUMsWUFBWSxHQUNoQixDQUNLO1FBQ1Qsb0JBQUMscUJBQWEsSUFBQyxPQUFPLEVBQUUsZUFBSyxDQUFDLE9BQU8sSUFBRyxRQUFRLENBQWlCLENBQ2hFLENBQ0osQ0FBQztDQUNIO0FBWkQsaUNBWUM7QUFDRCJ9

/***/ }),

/***/ "../design-system/components/Icon.tsx":
/*!********************************************!*\
  !*** ../design-system/components/Icon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const icon_1 = __webpack_require__(/*! @rmwc/icon */ "../node_modules/@rmwc/icon/next/index.js");
__webpack_require__(/*! @rmwc/icon/icon.css */ "../node_modules/@rmwc/icon/icon.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
const framerx_integration_1 = __webpack_require__(/*! ./framerx-integration */ "../design-system/components/framerx-integration.ts");
// Component
exports.Icon = (_a = framerx_integration_1.processIconProps(this.props)) => {
    var { icon } = _a, rest = __rest(_a, ["icon"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(icon_1.Icon, Object.assign({ icon: icon }, rest))));
};
exports.__info__ = [{ name: "Icon", children: false, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9JY29uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixxQ0FBeUM7QUFDekMsK0JBQTZCO0FBQzdCLHFEQUE4QztBQUM5QywrREFFK0I7QUFRL0IsWUFBWTtBQUNDLFFBQUEsSUFBSSxHQUFvQixDQUFDLEtBSWxDLHNDQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBSkUsRUFDcEMsSUFBSSxPQUcwQixFQUY5QiwyQkFBTztJQUU2QixPQUFBLENBRXBDLG9CQUFDLHdCQUFjO1FBQ2Isb0JBQUMsV0FBSyxrQkFDSixJQUFJLEVBQUUsSUFBSSxJQUNOLElBQUksRUFDQSxDQUNPLENBQ3BCLENBQUE7Q0FBQSxDQUFBO0FBQUEifQ==

/***/ }),

/***/ "../design-system/components/IconButton.tsx":
/*!**************************************************!*\
  !*** ../design-system/components/IconButton.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const icon_button_1 = __webpack_require__(/*! @rmwc/icon-button */ "../node_modules/@rmwc/icon-button/next/index.js");
__webpack_require__(/*! @material/button/dist/mdc.button.css */ "../node_modules/@material/button/dist/mdc.button.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
const framerx_integration_1 = __webpack_require__(/*! ./framerx-integration */ "../design-system/components/framerx-integration.ts");
// Component
exports.IconButton = (_a = framerx_integration_1.processIconProps(this.props)) => {
    var { children, disabled, icon, label, ripple } = _a, rest = __rest(_a, ["children", "disabled", "icon", "label", "ripple"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(icon_button_1.IconButton
        // children={children}
        , Object.assign({ 
            // children={children}
            disabled: disabled, icon: icon, label: label, ripple: ripple }, rest))));
};
exports.__info__ = [{ name: "IconButton", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtREFBNEQ7QUFDNUQsZ0RBQThDO0FBQzlDLHFEQUE4QztBQUM5QywrREFFK0I7QUFZL0IsWUFBWTtBQUNDLFFBQUEsVUFBVSxHQUFvQixDQUFDLEtBUXhDLHNDQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBUlEsRUFDMUMsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sT0FHd0IsRUFGOUIsc0VBQU87SUFFNkIsT0FBQSxDQUVwQyxvQkFBQyx3QkFBYztRQUNiLG9CQUFDLHdCQUFXO1FBQ1Ysc0JBQXNCOztZQUF0QixzQkFBc0I7WUFDdEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLElBQ1YsSUFBSSxFQUNNLENBQ0MsQ0FDcEIsQ0FBQTtDQUFBLENBQUE7QUFBQSJ9

/***/ }),

/***/ "../design-system/components/Input.tsx":
/*!*********************************************!*\
  !*** ../design-system/components/Input.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const theme_1 = __webpack_require__(/*! ../theme */ "../design-system/theme.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Component
exports.Input = ({ value, placeholder, error, disabled, onChange }) => (React.createElement(StyledInput, { type: "text", value: value, placeholder: placeholder, className: `${error ? "error" : ""} ${disabled ? "disabled" : ""}`, onChange: onChange }));
// Styles
const StyledInput = styled_components_1.default.input `
  background: ${theme_1.theme.color.paneBgDark};
  border-radius: 4px;
  border: none;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px ${theme_1.theme.color.paneBorder};
  color: ${theme_1.theme.color.body};
  font-family: ${theme_1.theme.font};
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: ${theme_1.theme.space[3]};
  transition: box-shadow 0.2s;
  width: 100%;

  &:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme_1.theme.color.primary},
      0px 0px 0px 2px ${theme_1.theme.color.primaryLight};
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  &.disabled {
    color: ${theme_1.theme.color.bodyLightest};
    pointer-events: none;
  }

  &.error {
    color: ${theme_1.theme.color.danger};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme_1.theme.color.danger};
  }
  &.error:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme_1.theme.color.danger},
      0px 0px 0px 2px ${theme_1.theme.color.dangerLight};
  }
  &.error::placeholder {
    color: ${theme_1.theme.color.danger};
    opacity: 0.5;
  }
`;
exports.__info__ = [{ name: "Input", children: false, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudHMvSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG9DQUFnQztBQUNoQyx5REFBc0M7QUFvQnRDLFlBQVk7QUFDQyxRQUFBLEtBQUssR0FBb0IsQ0FBQyxFQUNyQyxLQUFLLEVBQ0wsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsUUFBUSxFQUNULEVBQUUsRUFBRSxDQUFDLENBQ0osb0JBQUMsV0FBVyxJQUNWLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLEtBQUssRUFDWixXQUFXLEVBQUUsV0FBVyxFQUN4QixTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDbEUsUUFBUSxFQUFFLFFBQVEsR0FDbEIsQ0FDSCxDQUFBO0FBRUQsU0FBUztBQUNULE1BQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsS0FBSyxDQUFBO2dCQUNoQixhQUFLLENBQUMsS0FBSyxDQUFDLFVBQVU7Ozs7NEJBSVYsYUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVO1dBQ3ZDLGFBQUssQ0FBQyxLQUFLLENBQUMsSUFBSTtpQkFDVixhQUFLLENBQUMsSUFBSTs7Ozs7O2FBTWQsYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs4QkFNRyxhQUFLLENBQUMsS0FBSyxDQUFDLE9BQU87d0JBQ3pCLGFBQUssQ0FBQyxLQUFLLENBQUMsWUFBWTs7Ozs7Ozs7YUFRbkMsYUFBSyxDQUFDLEtBQUssQ0FBQyxZQUFZOzs7OzthQUt4QixhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07OzhCQUVELGFBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTs7Ozs4QkFJbEIsYUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNO3dCQUN4QixhQUFLLENBQUMsS0FBSyxDQUFDLFdBQVc7OzthQUdsQyxhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07OztDQUc5QixDQUFBO0FBQ0QifQ==

/***/ }),

/***/ "../design-system/components/Toggle.tsx":
/*!**********************************************!*\
  !*** ../design-system/components/Toggle.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const theme_1 = __webpack_require__(/*! ../theme */ "../design-system/theme.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Component
exports.Toggle = ({ disabled, on, onClick }) => (React.createElement(StyledToggle, { className: `${disabled ? "disabled" : ""} ${on ? "on" : ""}`, onClick: onClick }));
// Styling
const StyledToggle = styled_components_1.default.span `
  background: ${theme_1.theme.color.paneBgDark};
  border-radius: 18px;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px ${theme_1.theme.color.paneBorder};
  cursor: pointer;
  display: block;
  font-size: 14px;
  height: 36px;
  position: relative;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  width: 64px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    top: 3px;
    left: 3px;
    background: ${theme_1.theme.color.paneBg};
    transition: left 0.2s ease;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);
  }

  &.on {
    background: ${theme_1.theme.color.primary};
  }
  &.on:before {
    left: 31px;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
exports.__info__ = [{ name: "Toggle", children: false, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVzaWduLXN5c3RlbS9jb21wb25lbnRzL1RvZ2dsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsb0NBQWdDO0FBQ2hDLHlEQUFzQztBQWN0QyxZQUFZO0FBQ0MsUUFBQSxNQUFNLEdBQW9CLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNwRSxvQkFBQyxZQUFZLElBQ1gsU0FBUyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQzVELE9BQU8sRUFBRSxPQUFPLEdBQ2hCLENBQ0gsQ0FBQTtBQUVELFVBQVU7QUFDVixNQUFNLFlBQVksR0FBRywyQkFBTSxDQUFDLElBQUksQ0FBQTtnQkFDaEIsYUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVOzs7NEJBR1YsYUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBa0JoQyxhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7Ozs7a0JBT2xCLGFBQUssQ0FBQyxLQUFLLENBQUMsT0FBTzs7Ozs7Ozs7O0NBU3BDLENBQUE7QUFDRCJ9

/***/ }),

/***/ "../design-system/components/Tooltip.tsx":
/*!***********************************************!*\
  !*** ../design-system/components/Tooltip.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const theme_1 = __webpack_require__(/*! ../theme */ "../design-system/theme.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Component
exports.Tooltip = ({ arrow = "left", error, children }) => (React.createElement(StyledTooltip, { className: `${error ? "error" : ""} ${arrow ? arrow : ""}` }, children));
// Styling
const StyledTooltip = styled_components_1.default.span `
  background: ${theme_1.theme.color.bodyLight};
  font-size: 11px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }
  &.top:before,
  &.bottom:before {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    left: 50%;
    transform: translateX(-2px);
  }
  &.top:before {
    top: -4px;
    border-bottom: 4px solid ${theme_1.theme.color.bodyLight};
  }
  &.bottom:before {
    bottom: -4px;
    border-top: 4px solid ${theme_1.theme.color.bodyLight};
  }
  &.right:before,
  &.left:before {
    top: 7px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  &.right:before {
    right: -4px;
    border-left: 4px solid ${theme_1.theme.color.bodyLight};
  }
  &.left:before {
    left: -4px;
    border-right: 4px solid ${theme_1.theme.color.bodyLight};
  }

  &.error {
    background: ${theme_1.theme.color.danger};
  }
  &.error.top:before {
    border-bottom-color: ${theme_1.theme.color.danger};
  }
  &.error.right:before {
    border-left-color: ${theme_1.theme.color.danger};
  }
  &.error.bottom:before {
    border-top-color: ${theme_1.theme.color.danger};
  }
  &.error.left:before {
    border-right-color: ${theme_1.theme.color.danger};
  }
`;
exports.__info__ = [{ name: "Tooltip", children: true, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixvQ0FBZ0M7QUFDaEMseURBQXNDO0FBV3RDLFlBQVk7QUFDQyxRQUFBLE9BQU8sR0FBb0IsQ0FBQyxFQUN2QyxLQUFLLEdBQUcsTUFBTSxFQUNkLEtBQUssRUFDTCxRQUFRLEVBQ1QsRUFBRSxFQUFFLENBQUMsQ0FDSixvQkFBQyxhQUFhLElBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQ3RFLFFBQVEsQ0FDSyxDQUNqQixDQUFBO0FBRUQsVUFBVTtBQUNWLE1BQU0sYUFBYSxHQUFHLDJCQUFNLENBQUMsSUFBSSxDQUFBO2dCQUNqQixhQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkF3Qk4sYUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7OzRCQUl4QixhQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7NkJBVXBCLGFBQUssQ0FBQyxLQUFLLENBQUMsU0FBUzs7Ozs4QkFJcEIsYUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O2tCQUlqQyxhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07OzsyQkFHVCxhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07Ozt5QkFHcEIsYUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7d0JBR25CLGFBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTs7OzBCQUdoQixhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07O0NBRTNDLENBQUE7QUFDRCJ9

/***/ }),

/***/ "../design-system/components/Typography.tsx":
/*!**************************************************!*\
  !*** ../design-system/components/Typography.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const typography_1 = __webpack_require__(/*! @rmwc/typography */ "../node_modules/@rmwc/typography/next/index.js");
__webpack_require__(/*! @material/typography/dist/mdc.typography.css */ "../node_modules/@material/typography/dist/mdc.typography.css");
const FramerXWrapper_1 = __webpack_require__(/*! ./FramerXWrapper */ "../design-system/components/FramerXWrapper.tsx");
// Component
exports.Typography = (_a) => {
    var { use, text } = _a, rest = __rest(_a, ["use", "text"]);
    return (React.createElement(FramerXWrapper_1.default, null,
        React.createElement(typography_1.Typography, Object.assign({ use: use }, rest), text)));
};
exports.__info__ = [{ name: "Typography", children: false, type: "component" }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwb2dyYXBoeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9UeXBvZ3JhcGh5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpREFBMkQ7QUFDM0Qsd0RBQXNEO0FBQ3RELHFEQUE4QztBQVM5QyxZQUFZO0FBQ0MsUUFBQSxVQUFVLEdBQW9CLENBQUMsRUFLM0MsRUFBRyxFQUFFO1FBTHNDLEVBQzFDLEdBQUcsRUFDSCxJQUFJLE9BR0wsRUFGQyxrQ0FBTztJQUVELE9BQUEsQ0FFTixvQkFBQyx3QkFBYztRQUNiLG9CQUFDLHVCQUFXLGtCQUNWLEdBQUcsRUFBRSxHQUFHLElBQ0osSUFBSSxHQUNQLElBQUksQ0FDUyxDQUNDLENBQ3BCLENBQUE7Q0FBQSxDQUFBO0FBQUEifQ==

/***/ }),

/***/ "../design-system/components/framerx-integration.ts":
/*!**********************************************************!*\
  !*** ../design-system/components/framerx-integration.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const theme_1 = __webpack_require__(/*! ./theme */ "../design-system/components/theme.js");
const icons_1 = __webpack_require__(/*! ../../design-system-v2.framerfx/code/icons */ "./code/icons.ts");
function getOptions(compName) {
    window["__checkBudget__"]();
    const key = compName + "Themes";
    const value = theme_1.default[key];
    if (Array.isArray(value)) {
        return { options: value };
    }
    else {
        const optionTitles = Object.keys(value);
        return {
            optionTitles,
            options: optionTitles.map(k => value[k].join(" "))
        };
    }
}
exports.themePropertyControls = (type) => {
    window["__checkBudget__"]();
    return {
        theme: Object.assign({ type: framer_1.ControlType.Enum, title: "Theme" }, getOptions(type))
    };
};
exports.spacingPropertyControls = () => ({
    p: {
        type: framer_1.ControlType.FusedNumber,
        title: "Padding",
        toggleKey: "isPaddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: ["pt", "pl", "pr", "pb"],
        valueLabels: ["T", "L", "R", "B"]
    },
    m: {
        type: framer_1.ControlType.FusedNumber,
        title: "Margin",
        toggleKey: "isMarginPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: ["mt", "ml", "mr", "mb"],
        valueLabels: ["T", "L", "R", "B"]
    }
});
function processSpacingProps(props) {
    window["__checkBudget__"]();
    const { isPaddingPerSide, p, pt, pl, pr, pb, isMarginPerSide, m, mt, ml, mr, mb } = props, rest = __rest(props, ["isPaddingPerSide", "p", "pt", "pl", "pr", "pb", "isMarginPerSide", "m", "mt", "ml", "mr", "mb"]);
    const v = (t, r, b, l) => [t, r, b, l].map(s => `${s || 0}rem`).join(" ");
    const padding = typeof isPaddingPerSide === "undefined"
        ? undefined
        : isPaddingPerSide
            ? v(pt, pr, pb, pl)
            : v(p, p, p, p);
    const margin = typeof isMarginPerSide === "undefined"
        ? undefined
        : isMarginPerSide
            ? v(mt, mr, mb, ml)
            : v(m, m, m, m);
    const style = { padding, margin };
    return Object.assign({ style }, rest);
}
exports.processSpacingProps = processSpacingProps;
exports.processIconProps = props => {
    window["__checkBudget__"]();
    const { icon: oldIcon, builtInIcon } = props, rest = __rest(props, ["icon", "builtInIcon"]);
    if (oldIcon === "< none >") {
        return rest;
    }
    else {
        const icon = icons_1.getIconElement(oldIcon) || builtInIcon;
        return Object.assign({ icon }, rest);
    }
};
exports.__info__ = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyeC1pbnRlZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50cy9mcmFtZXJ4LWludGVncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXVEO0FBQ3ZELG1DQUE0QjtBQUM1QixzRUFBdUY7QUFFdkYsU0FBUyxVQUFVLENBQUMsUUFBUTs7SUFDMUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxlQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDM0I7U0FBTTtRQUNMLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTztZQUNMLFlBQVk7WUFDWixPQUFPLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkQsQ0FBQztLQUNIO0NBQ0Y7QUFFWSxRQUFBLHFCQUFxQixHQUFHLENBQUMsSUFBSSxFQUFvQixFQUFFOztJQUM5RCxPQUFPO1FBQ0wsS0FBSyxrQkFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJLEVBQ3RCLEtBQUssRUFBRSxPQUFPLElBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUNwQjtLQUNGLENBQUM7Q0FDSCxDQUFDO0FBRVcsUUFBQSx1QkFBdUIsR0FBRyxHQUFxQixFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDLEVBQUU7UUFDRCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxXQUFXO1FBQzdCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDbkMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ2xDO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsSUFBSSxFQUFFLG9CQUFXLENBQUMsV0FBVztRQUM3QixLQUFLLEVBQUUsUUFBUTtRQUNmLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDbkMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ2xDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsU0FBZ0IsbUJBQW1CLENBQUMsS0FBSzs7SUFDdkMsTUFBTSxFQUNKLGdCQUFnQixFQUNoQixDQUFDLEVBQ0QsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxFQUNGLGVBQWUsRUFDZixDQUFDLEVBQ0QsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxLQUVBLEtBQUssRUFEUCx1SEFDTyxDQUFDO0lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUUsTUFBTSxPQUFPLEdBQ1gsT0FBTyxnQkFBZ0IsS0FBSyxXQUFXO1FBQ3JDLENBQUMsQ0FBQyxTQUFTO1FBQ1gsQ0FBQyxDQUFDLGdCQUFnQjtZQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sTUFBTSxHQUNWLE9BQU8sZUFBZSxLQUFLLFdBQVc7UUFDcEMsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUMsZUFBZTtZQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRWxDLHVCQUFTLEtBQUssSUFBSyxJQUFJLEVBQUc7Q0FDM0I7QUFoQ0Qsa0RBZ0NDO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsRUFBRTs7SUFDdEMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxLQUFjLEtBQUssRUFBakIsNkNBQWlCLENBQUM7SUFDdEQsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7U0FBTTtRQUNMLE1BQU0sSUFBSSxHQUFHLHNCQUFjLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDO1FBQ3BELHVCQUFTLElBQUksSUFBSyxJQUFJLEVBQUc7S0FDMUI7Q0FDRixDQUFDO0FBRUYifQ==

/***/ }),

/***/ "../design-system/components/theme.js":
/*!********************************************!*\
  !*** ../design-system/components/theme.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  options: {
    primary: "lime",
    secondary: "red",
    error: "#b00020",
    background: "#fff",
    surface: "#fff",
    onPrimary: "rgba(255, 255, 255, 1)",
    onSecondary: "rgba(0, 0, 0, 0.87)",
    onSurface: "rgba(0, 0, 0, 0.87)",
    onError: "#fff",
    textPrimaryOnBackground: "rgba(0, 0, 0, 0.87)",
    textSecondaryOnBackground: "rgba(0, 0, 0, 0.54)",
    textHintOnBackground: "rgba(0, 0, 0, 0.38)",
    textDisabledOnBackground: "rgba(0, 0, 0, 0.38)",
    textIconOnBackground: "rgba(0, 0, 0, 0.38)",
    textPrimaryOnLight: "rgba(0, 0, 0, 0.87)",
    textSecondaryOnLight: "rgba(0, 0, 0, 0.54)",
    textHintOnLight: "rgba(0, 0, 0, 0.38)",
    textDisabledOnLight: "rgba(0, 0, 0, 0.38)",
    textIconOnLight: "rgba(0, 0, 0, 0.38)",
    textPrimaryOnDark: "white",
    textSecondaryOnDark: "rgba(255, 255, 255, 0.7)",
    textHintOnDark: "rgba(255, 255, 255, 0.5)",
    textDisabledOnDark: "rgba(255, 255, 255, 0.5)",
    textIconOnDark: "rgba(255, 255, 255, 0.5)"

    //// Dark theme
    // primary: "#24aee9",
    // secondary: "#e539ff",
    // error: "#b00020",
    // background: "#212121",
    // surface: "#37474F",
    // onPrimary: "rgba(255,255,255,.87)",
    // onSecondary: "rgba(0,0,0,0.87)",
    // onSurface: "rgba(255,255,255,.87)",
    // onError: "#fff",
    // textPrimaryOnBackground: "rgba(255, 255, 255, 1)",
    // textSecondaryOnBackground: "rgba(255, 255, 255, 0.7)",
    // textHintOnBackground: "rgba(255, 255, 255, 0.5)",
    // textDisabledOnBackground: "rgba(255, 255, 255, 0.5)",
    // textIconOnBackground: "rgba(255, 255, 255, 0.5)",
    // textPrimaryOnLight: "rgba(0, 0, 0, 0.87)",
    // textSecondaryOnLight: "rgba(0, 0, 0, 0.54)",
    // textHintOnLight: "rgba(0, 0, 0, 0.38)",
    // textDisabledOnLight: "rgba(0, 0, 0, 0.38)",
    // textIconOnLight: "rgba(0, 0, 0, 0.38)",
    // textPrimaryOnDark: "white",
    // textSecondaryOnDark: "rgba(255, 255, 255, 0.7)",
    // textHintOnDark: "rgba(255, 255, 255, 0.5)",
    // textDisabledOnDark: "rgba(255, 255, 255, 0.5)",
    // textIconOnDark: "rgba(255, 255, 255, 0.5)"
  },
  typographyThemes: [
    "primary",
    "secondary",
    "error",
    "onPrimary",
    "onSecondary",
    "onSurface",
    "onError",
    "textPrimaryOnBackground",
    "textSecondaryOnBackground",
    "textHintOnBackground",
    "textDisabledOnBackground",
    "textIconOnBackground",
    "textPrimaryOnLight",
    "textSecondaryOnLight",
    "textHintOnLight",
    "textDisabledOnLight",
    "textIconOnLight",
    "textPrimaryOnDark",
    "textSecondaryOnDark",
    "textHintOnDark",
    "textDisabledOnDark",
    "textIconOnDark"
  ],
  buttonThemes: {
    primary: ["primaryBg", "onPrimary"],
    secondary: ["secondaryBg", "onSecondary"]
  }
});


/***/ }),

/***/ "../design-system/index.tsx":
/*!**********************************!*\
  !*** ../design-system/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(/*! ./components/Button */ "../design-system/components/Button.tsx");
exports.Button = Button_1.Button;
exports.ButtonProps = Button_1.Props;
var Input_1 = __webpack_require__(/*! ./components/Input */ "../design-system/components/Input.tsx");
exports.Input = Input_1.Input;
exports.InputProps = Input_1.Props;
var Toggle_1 = __webpack_require__(/*! ./components/Toggle */ "../design-system/components/Toggle.tsx");
exports.Toggle = Toggle_1.Toggle;
exports.ToggleProps = Toggle_1.Props;
var Tooltip_1 = __webpack_require__(/*! ./components/Tooltip */ "../design-system/components/Tooltip.tsx");
exports.Tooltip = Tooltip_1.Tooltip;
exports.TooltipProps = Tooltip_1.Props;
var Chip_1 = __webpack_require__(/*! ./components/Chip */ "../design-system/components/Chip.tsx");
exports.Chip = Chip_1.Chip;
exports.ChipProps = Chip_1.Props;
var Elevation_1 = __webpack_require__(/*! ./components/Elevation */ "../design-system/components/Elevation.tsx");
exports.Elevation = Elevation_1.Elevation;
exports.ElevationProps = Elevation_1.Props;
var Fab_1 = __webpack_require__(/*! ./components/Fab */ "../design-system/components/Fab.tsx");
exports.Fab = Fab_1.Fab;
exports.FabProps = Fab_1.Props;
var IconButton_1 = __webpack_require__(/*! ./components/IconButton */ "../design-system/components/IconButton.tsx");
exports.IconButton = IconButton_1.IconButton;
exports.IconButtonProps = IconButton_1.Props;
var Icon_1 = __webpack_require__(/*! ./components/Icon */ "../design-system/components/Icon.tsx");
exports.Icon = Icon_1.Icon;
exports.IconProps = Icon_1.Props;
var Typography_1 = __webpack_require__(/*! ./components/Typography */ "../design-system/components/Typography.tsx");
exports.Typography = Typography_1.Typography;
exports.TypographyProps = Typography_1.Props;
exports.__info__ = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZXNpZ24tc3lzdGVtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFrRTtBQUF6RCwwQkFBQSxNQUFNLENBQUE7QUFBRSwrQkFBQSxLQUFLLENBQWU7QUFDckMsNENBQStEO0FBQXRELHdCQUFBLEtBQUssQ0FBQTtBQUFFLDZCQUFBLEtBQUssQ0FBYztBQUNuQyw4Q0FBa0U7QUFBekQsMEJBQUEsTUFBTSxDQUFBO0FBQUUsK0JBQUEsS0FBSyxDQUFlO0FBQ3JDLGdEQUFxRTtBQUE1RCw0QkFBQSxPQUFPLENBQUE7QUFBRSxpQ0FBQSxLQUFLLENBQWdCO0FBQ3ZDLDBDQUE0RDtBQUFuRCxzQkFBQSxJQUFJLENBQUE7QUFBRSwyQkFBQSxLQUFLLENBQWE7QUFDakMsb0RBQTJFO0FBQWxFLGdDQUFBLFNBQVMsQ0FBQTtBQUFFLHFDQUFBLEtBQUssQ0FBa0I7QUFDM0Msd0NBQXlEO0FBQWhELG9CQUFBLEdBQUcsQ0FBQTtBQUFFLHlCQUFBLEtBQUssQ0FBWTtBQUMvQixzREFBOEU7QUFBckUsa0NBQUEsVUFBVSxDQUFBO0FBQUUsdUNBQUEsS0FBSyxDQUFtQjtBQUM3QywwQ0FBNEQ7QUFBbkQsc0JBQUEsSUFBSSxDQUFBO0FBQUUsMkJBQUEsS0FBSyxDQUFhO0FBQ2pDLHNEQUE4RTtBQUFyRSxrQ0FBQSxVQUFVLENBQUE7QUFBRSx1Q0FBQSxLQUFLLENBQW1CO0FBQzdDIn0=

/***/ }),

/***/ "../design-system/theme.tsx":
/*!**********************************!*\
  !*** ../design-system/theme.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const color = {
    paneBg: "#FFF",
    paneBgDark: "#FDFDFD",
    paneBorder: "rgba(0, 0, 0, 0.1)",
    primary: "#75C",
    primaryDark: "#74C",
    primaryLight: "#EEF",
    danger: "#F44",
    dangerDark: "#F34",
    dangerLight: "#FDD",
    body: "#222",
    bodyLight: "#444",
    bodyLighter: "#666",
    bodyLightest: "#AAA"
};
const space = ["0", "4px", "8px", "16px", "32px"];
const font = "-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif";
exports.theme = {
    color,
    font,
    space
};
exports.__info__ = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZXNpZ24tc3lzdGVtL3RoZW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxNQUFNLEtBQUssR0FBVztJQUNwQixNQUFNLEVBQUUsTUFBTTtJQUNkLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsT0FBTyxFQUFFLE1BQU07SUFDZixXQUFXLEVBQUUsTUFBTTtJQUNuQixZQUFZLEVBQUUsTUFBTTtJQUNwQixNQUFNLEVBQUUsTUFBTTtJQUNkLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFLE1BQU07SUFDakIsV0FBVyxFQUFFLE1BQU07SUFDbkIsWUFBWSxFQUFFLE1BQU07Q0FDckIsQ0FBQTtBQUVELE1BQU0sS0FBSyxHQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRTNELE1BQU0sSUFBSSxHQUFHLGlFQUFpRSxDQUFBO0FBRWpFLFFBQUEsS0FBSyxHQUFHO0lBQ25CLEtBQUs7SUFDTCxJQUFJO0lBQ0osS0FBSztDQUNOLENBQUE7QUFDRCJ9

/***/ }),

/***/ "../node_modules/@material/base/component.js":
/*!***************************************************!*\
  !*** ../node_modules/@material/base/component.js ***!
  \***************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@material/base/foundation.js":
/*!****************************************************!*\
  !*** ../node_modules/@material/base/foundation.js ***!
  \****************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "../node_modules/@material/button/dist/mdc.button.css":
/*!************************************************************!*\
  !*** ../node_modules/@material/button/dist/mdc.button.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.button.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/button/dist/mdc.button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@material/chips/chip-set/component.js":
/*!*************************************************************!*\
  !*** ../node_modules/@material/chips/chip-set/component.js ***!
  \*************************************************************/
/*! exports provided: MDCChipSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCChipSet", function() { return MDCChipSet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "../node_modules/@material/base/component.js");
/* harmony import */ var _chip_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chip/index */ "../node_modules/@material/chips/chip/index.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/chips/chip-set/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var _a = _chip_index__WEBPACK_IMPORTED_MODULE_2__["MDCChipFoundation"].strings, INTERACTION_EVENT = _a.INTERACTION_EVENT, SELECTION_EVENT = _a.SELECTION_EVENT, REMOVAL_EVENT = _a.REMOVAL_EVENT;
var CHIP_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCChipSetFoundation"].strings.CHIP_SELECTOR;
var idCounter = 0;
var MDCChipSet = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCChipSet, _super);
    function MDCChipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipSet.attachTo = function (root) {
        return new MDCChipSet(root);
    };
    Object.defineProperty(MDCChipSet.prototype, "chips", {
        get: function () {
            return this.chips_.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
        /**
         * @return An array of the IDs of all selected chips.
         */
        get: function () {
            return this.foundation_.getSelectedChipIds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param chipFactory A function which creates a new MDCChip.
     */
    MDCChipSet.prototype.initialize = function (chipFactory) {
        if (chipFactory === void 0) { chipFactory = function (el) { return new _chip_index__WEBPACK_IMPORTED_MODULE_2__["MDCChip"](el); }; }
        this.chipFactory_ = chipFactory;
        this.chips_ = this.instantiateChips_(this.chipFactory_);
    };
    MDCChipSet.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.chips_.forEach(function (chip) {
            if (chip.id && chip.selected) {
                _this.foundation_.select(chip.id);
            }
        });
        this.handleChipInteraction_ = function (evt) { return _this.foundation_.handleChipInteraction(evt.detail.chipId); };
        this.handleChipSelection_ = function (evt) { return _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected); };
        this.handleChipRemoval_ = function (evt) { return _this.foundation_.handleChipRemoval(evt.detail.chipId); };
        this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
        this.listen(SELECTION_EVENT, this.handleChipSelection_);
        this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
    };
    MDCChipSet.prototype.destroy = function () {
        this.chips_.forEach(function (chip) {
            chip.destroy();
        });
        this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
        this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
        this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
        _super.prototype.destroy.call(this);
    };
    /**
     * Adds a new chip object to the chip set from the given chip element.
     */
    MDCChipSet.prototype.addChip = function (chipEl) {
        chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
        this.chips_.push(this.chipFactory_(chipEl));
    };
    MDCChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            removeChip: function (chipId) {
                var index = _this.findChipIndex_(chipId);
                if (index >= 0) {
                    _this.chips_[index].destroy();
                    _this.chips_.splice(index, 1);
                }
            },
            setSelected: function (chipId, selected) {
                var index = _this.findChipIndex_(chipId);
                if (index >= 0) {
                    _this.chips_[index].selected = selected;
                }
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCChipSetFoundation"](adapter);
    };
    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     */
    MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
        var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
        return chipElements.map(function (el) {
            el.id = el.id || "mdc-chip-" + ++idCounter;
            return chipFactory(el);
        });
    };
    /**
     * Returns the index of the chip with the given id, or -1 if the chip does not exist.
     */
    MDCChipSet.prototype.findChipIndex_ = function (chipId) {
        for (var i = 0; i < this.chips_.length; i++) {
            if (this.chips_[i].id === chipId) {
                return i;
            }
        }
        return -1;
    };
    return MDCChipSet;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip-set/constants.js":
/*!*************************************************************!*\
  !*** ../node_modules/@material/chips/chip-set/constants.js ***!
  \*************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    CHIP_SELECTOR: '.mdc-chip',
};
var cssClasses = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip-set/foundation.js":
/*!**************************************************************!*\
  !*** ../node_modules/@material/chips/chip-set/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCChipSetFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCChipSetFoundation", function() { return MDCChipSetFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "../node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../node_modules/@material/chips/chip-set/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCChipSetFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds_ = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                hasClass: function () { return false; },
                removeChip: function () { return undefined; },
                setSelected: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHOICE) && this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            this.selectedChipIds_.length = 0;
            this.adapter_.setSelected(previouslySelectedChip, false);
        }
        this.selectedChipIds_.push(chipId);
        this.adapter_.setSelected(chipId, true);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
        if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHOICE) || this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].FILTER)) {
            this.toggleSelect_(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected) {
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
        this.deselect_(chipId);
        this.adapter_.removeChip(chipId);
    };
    /**
     * Deselects the chip with the given id.
     */
    MDCChipSetFoundation.prototype.deselect_ = function (chipId) {
        var index = this.selectedChipIds_.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            this.adapter_.setSelected(chipId, false);
        }
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselect_(chipId);
        }
        else {
            this.select(chipId);
        }
    };
    return MDCChipSetFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipSetFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip-set/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@material/chips/chip-set/index.js ***!
  \*********************************************************/
/*! exports provided: MDCChipSet, MDCChipSetFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../node_modules/@material/chips/chip-set/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipSet", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCChipSet"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/chips/chip-set/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipSetFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCChipSetFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip/component.js":
/*!*********************************************************!*\
  !*** ../node_modules/@material/chips/chip/component.js ***!
  \*********************************************************/
/*! exports provided: MDCChip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCChip", function() { return MDCChip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "../node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/index */ "../node_modules/@material/ripple/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../node_modules/@material/chips/chip/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/chips/chip/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCChip = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCChip, _super);
    function MDCChip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCChip.prototype, "selected", {
        /**
         * @return Whether the chip is selected.
         */
        get: function () {
            return this.foundation_.isSelected();
        },
        /**
         * Sets selected state on the chip.
         */
        set: function (selected) {
            this.foundation_.setSelected(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
        /**
         * @return Whether a trailing icon click should trigger exit/removal of the chip.
         */
        get: function () {
            return this.foundation_.getShouldRemoveOnTrailingIconClick();
        },
        /**
         * Sets whether a trailing icon click should trigger exit/removal of the chip.
         */
        set: function (shouldRemove) {
            this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "id", {
        get: function () {
            return this.root_.id;
        },
        enumerable: true,
        configurable: true
    });
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_index__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"](el, foundation); }; }
        this.leadingIcon_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].LEADING_ICON_SELECTOR);
        this.trailingIcon_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].TRAILING_ICON_SELECTOR);
        this.checkmark_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKMARK_SELECTOR);
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_index__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].createAdapter(this), { computeBoundingRect: function () { return _this.foundation_.getDimensions(); } });
        this.ripple_ = rippleFactory(this.root_, new _material_ripple_index__WEBPACK_IMPORTED_MODULE_2__["MDCRippleFoundation"](rippleAdapter));
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function (evt) { return _this.foundation_.handleInteraction(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.handleTrailingIconInteraction_ = function (evt) {
            return _this.foundation_.handleTrailingIconInteraction(evt);
        };
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.listen(evtType, _this.handleInteraction_);
        });
        this.listen('transitionend', this.handleTransitionEnd_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
    };
    MDCChip.prototype.destroy = function () {
        var _this = this;
        this.ripple_.destroy();
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.unlisten(evtType, _this.handleInteraction_);
        });
        this.unlisten('transitionend', this.handleTransitionEnd_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChip.prototype.beginExit = function () {
        this.foundation_.beginExit();
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            addClassToLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.add(className);
                }
            },
            eventTargetHasClass: function (target, className) { return target ? target.classList.contains(className) : false; },
            getCheckmarkBoundingClientRect: function () { return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null; },
            getComputedStyleValue: function (propertyName) { return window.getComputedStyle(_this.root_).getPropertyValue(propertyName); },
            getRootBoundingClientRect: function () { return _this.root_.getBoundingClientRect(); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            hasLeadingIcon: function () { return !!_this.leadingIcon_; },
            notifyInteraction: function () { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            notifyRemoval: function () { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].REMOVAL_EVENT, { chipId: _this.id, root: _this.root_ }, true /* shouldBubble */); },
            notifySelection: function (selected) { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].SELECTION_EVENT, { chipId: _this.id, selected: selected }, true /* shouldBubble */); },
            notifyTrailingIconInteraction: function () { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].TRAILING_ICON_INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeClassFromLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.remove(className);
                }
            },
            setStyleProperty: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCChipFoundation"](adapter);
    };
    return MDCChip;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip/constants.js":
/*!*********************************************************!*\
  !*** ../node_modules/@material/chips/chip/constants.js ***!
  \*********************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    INTERACTION_EVENT: 'MDCChip:interaction',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    REMOVAL_EVENT: 'MDCChip:removal',
    SELECTION_EVENT: 'MDCChip:selection',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
};
var cssClasses = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    SELECTED: 'mdc-chip--selected',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip/foundation.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material/chips/chip/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCChipFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCChipFoundation", function() { return MDCChipFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "../node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../node_modules/@material/chips/chip/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCChipFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         */
        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassToLeadingIcon: function () { return undefined; },
                eventTargetHasClass: function () { return false; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                notifyInteraction: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        if (selected) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED);
        }
        this.adapter_.notifySelection(selected);
    };
    MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
    };
    MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    };
    MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;
        var getRootRect = function () { return _this.adapter_.getRootBoundingClientRect(); };
        var getCheckmarkRect = function () { return _this.adapter_.getCheckmarkBoundingClientRect(); };
        // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.
        if (!this.adapter_.hasLeadingIcon()) {
            var checkmarkRect = getCheckmarkRect();
            if (checkmarkRect) {
                var rootRect = getRootRect();
                // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                // However, the checkbox is initially hidden by setting the width to 0.
                // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                // when adding it to the root client rect's width.
                return {
                    bottom: rootRect.bottom,
                    height: rootRect.height,
                    left: rootRect.left,
                    right: rootRect.right,
                    top: rootRect.top,
                    width: rootRect.width + checkmarkRect.height,
                };
            }
        }
        return getRootRect();
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChipFoundation.prototype.beginExit = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHIP_EXIT);
    };
    /**
     * Handles an interaction event on the root element.
     */
    MDCChipFoundation.prototype.handleInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyInteraction();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        if (this.adapter_.eventTargetHasClass(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHIP_EXIT)) {
            if (evt.propertyName === 'width') {
                this.adapter_.notifyRemoval();
            }
            else if (evt.propertyName === 'opacity') {
                // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
                var chipWidth_1 = this.adapter_.getComputedStyleValue('width');
                // On the next frame (once we get the computed width), explicitly set the chip's width
                // to its current pixel width, so we aren't transitioning out of 'auto'.
                requestAnimationFrame(function () {
                    _this.adapter_.setStyleProperty('width', chipWidth_1);
                    // To mitigate jitter, start transitioning padding and margin before width.
                    _this.adapter_.setStyleProperty('padding', '0');
                    _this.adapter_.setStyleProperty('margin', '0');
                    // On the next frame (once width is explicitly set), transition width to 0.
                    requestAnimationFrame(function () {
                        _this.adapter_.setStyleProperty('width', '0');
                    });
                });
            }
            return;
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (evt.propertyName !== 'opacity') {
            return;
        }
        if (this.adapter_.eventTargetHasClass(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LEADING_ICON) &&
            this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED)) {
            this.adapter_.addClassToLeadingIcon(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HIDDEN_LEADING_ICON);
        }
        else if (this.adapter_.eventTargetHasClass(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKMARK) &&
            !this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED)) {
            this.adapter_.removeClassFromLeadingIcon(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HIDDEN_LEADING_ICON);
        }
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        evt.stopPropagation();
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyTrailingIconInteraction();
            if (this.shouldRemoveOnTrailingIconClick_) {
                this.beginExit();
            }
        }
    };
    return MDCChipFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "../node_modules/@material/chips/chip/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/@material/chips/chip/index.js ***!
  \*****************************************************/
/*! exports provided: MDCChip, MDCChipFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../node_modules/@material/chips/chip/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChip", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCChip"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/chips/chip/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCChipFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/chips/dist/mdc.chips.css":
/*!**********************************************************!*\
  !*** ../node_modules/@material/chips/dist/mdc.chips.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.chips.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/chips/dist/mdc.chips.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@material/chips/index.js":
/*!************************************************!*\
  !*** ../node_modules/@material/chips/index.js ***!
  \************************************************/
/*! exports provided: MDCChip, MDCChipFoundation, MDCChipSet, MDCChipSetFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chip_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip/index */ "../node_modules/@material/chips/chip/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChip", function() { return _chip_index__WEBPACK_IMPORTED_MODULE_0__["MDCChip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipFoundation", function() { return _chip_index__WEBPACK_IMPORTED_MODULE_0__["MDCChipFoundation"]; });

/* harmony import */ var _chip_set_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip-set/index */ "../node_modules/@material/chips/chip-set/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipSet", function() { return _chip_set_index__WEBPACK_IMPORTED_MODULE_1__["MDCChipSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCChipSetFoundation", function() { return _chip_set_index__WEBPACK_IMPORTED_MODULE_1__["MDCChipSetFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/dom/index.js":
/*!**********************************************!*\
  !*** ../node_modules/@material/dom/index.js ***!
  \**********************************************/
/*! exports provided: ponyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill */ "../node_modules/@material/dom/ponyfill.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ponyfill", function() { return _ponyfill__WEBPACK_IMPORTED_MODULE_0__; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/dom/ponyfill.js":
/*!*************************************************!*\
  !*** ../node_modules/@material/dom/ponyfill.js ***!
  \*************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "../node_modules/@material/elevation/dist/mdc.elevation.css":
/*!******************************************************************!*\
  !*** ../node_modules/@material/elevation/dist/mdc.elevation.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.elevation.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/elevation/dist/mdc.elevation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@material/fab/dist/mdc.fab.css":
/*!******************************************************!*\
  !*** ../node_modules/@material/fab/dist/mdc.fab.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.fab.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/fab/dist/mdc.fab.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@material/icon-button/component.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material/icon-button/component.js ***!
  \**********************************************************/
/*! exports provided: MDCIconButtonToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconButtonToggle", function() { return MDCIconButtonToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "../node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "../node_modules/@material/ripple/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/icon-button/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var strings = _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCIconButtonToggleFoundation"].strings;
var MDCIconButtonToggle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCIconButtonToggle, _super);
    function MDCIconButtonToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCIconButtonToggle.attachTo = function (root) {
        return new MDCIconButtonToggle(root);
    };
    MDCIconButtonToggle.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation_.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCIconButtonToggle.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCIconButtonToggle.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            notifyChange: function (evtData) { return _this.emit(strings.CHANGE_EVENT, evtData); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setAttr: function (attrName, attrValue) { return _this.root_.setAttribute(attrName, attrValue); },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCIconButtonToggleFoundation"](adapter);
    };
    Object.defineProperty(MDCIconButtonToggle.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggle.prototype, "on", {
        get: function () {
            return this.foundation_.isOn();
        },
        set: function (isOn) {
            this.foundation_.toggle(isOn);
        },
        enumerable: true,
        configurable: true
    });
    MDCIconButtonToggle.prototype.createRipple_ = function () {
        var ripple = new _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"](this.root_);
        ripple.unbounded = true;
        return ripple;
    };
    return MDCIconButtonToggle;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@material/icon-button/constants.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material/icon-button/constants.js ***!
  \**********************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ICON_BUTTON_ON: 'mdc-icon-button--on',
    ROOT: 'mdc-icon-button',
};
var strings = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@material/icon-button/foundation.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material/icon-button/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCIconButtonToggleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconButtonToggleFoundation", function() { return MDCIconButtonToggleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "../node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../node_modules/@material/icon-button/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCIconButtonToggleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCIconButtonToggleFoundation, _super);
    function MDCIconButtonToggleFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCIconButtonToggleFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifyChange: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCIconButtonToggleFoundation.prototype.init = function () {
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_PRESSED, "" + this.isOn());
    };
    MDCIconButtonToggleFoundation.prototype.handleClick = function () {
        this.toggle();
        this.adapter_.notifyChange({ isOn: this.isOn() });
    };
    MDCIconButtonToggleFoundation.prototype.isOn = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ICON_BUTTON_ON);
    };
    MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
        if (isOn === void 0) { isOn = !this.isOn(); }
        if (isOn) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ICON_BUTTON_ON);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ICON_BUTTON_ON);
        }
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_PRESSED, "" + isOn);
    };
    return MDCIconButtonToggleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCIconButtonToggleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "../node_modules/@material/icon-button/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@material/icon-button/index.js ***!
  \******************************************************/
/*! exports provided: MDCIconButtonToggle, MDCIconButtonToggleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../node_modules/@material/icon-button/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCIconButtonToggle", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCIconButtonToggle"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/icon-button/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCIconButtonToggleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCIconButtonToggleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/ripple/component.js":
/*!*****************************************************!*\
  !*** ../node_modules/@material/ripple/component.js ***!
  \*****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "../node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/index */ "../node_modules/@material/dom/index.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_4__["supportsCssVariables"](window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return _material_dom_index__WEBPACK_IMPORTED_MODULE_2__["ponyfill"].matches(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../node_modules/@material/ripple/constants.js":
/*!*****************************************************!*\
  !*** ../node_modules/@material/ripple/constants.js ***!
  \*****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/@material/ripple/foundation.js":
/*!******************************************************!*\
  !*** ../node_modules/@material/ripple/foundation.js ***!
  \******************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "../node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "../node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "../node_modules/@material/ripple/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@material/ripple/index.js ***!
  \*************************************************/
/*! exports provided: util, MDCRipple, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../node_modules/@material/ripple/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../node_modules/@material/ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "../node_modules/@material/ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCRippleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@material/ripple/util.js":
/*!************************************************!*\
  !*** ../node_modules/@material/ripple/util.js ***!
  \************************************************/
/*! exports provided: supportsCssVariables, applyPassive, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../node_modules/@material/theme/dist/mdc.theme.css":
/*!**********************************************************!*\
  !*** ../node_modules/@material/theme/dist/mdc.theme.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.theme.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/theme/dist/mdc.theme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@material/typography/dist/mdc.typography.css":
/*!********************************************************************!*\
  !*** ../node_modules/@material/typography/dist/mdc.typography.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./mdc.typography.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@material/typography/dist/mdc.typography.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@rmwc/Button/next/index.js":
/*!**************************************************!*\
  !*** ../node_modules/@rmwc/Button/next/index.js ***!
  \**************************************************/
/*! exports provided: Button, ButtonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return ButtonIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _rmwc_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/ripple */ "../node_modules/@rmwc/ripple/next/index.js");
/* harmony import */ var _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/icon */ "../node_modules/@rmwc/icon/next/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




/**
 * The Button component.
 */
var Button = Object(_rmwc_ripple__WEBPACK_IMPORTED_MODULE_2__["withRipple"])({
    surface: false
})(Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'Button',
    tag: 'button',
    classNames: function (props) { return [
        'mdc-button',
        {
            'mdc-button--dense': props.dense,
            'mdc-button--raised': props.raised,
            'mdc-button--unelevated': props.unelevated,
            'mdc-button--outlined': props.outlined
        }
    ]; },
    consumeProps: [
        'dense',
        'raised',
        'unelevated',
        'outlined',
        'primary',
        'accent',
        'unbounded'
    ],
    render: function (_a, ref, Tag) {
        var icon = _a.icon, trailingIcon = _a.trailingIcon, label = _a.label, children = _a.children, rest = __rest(_a, ["icon", "trailingIcon", "label", "children"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Tag, __assign({}, rest, { ref: ref }),
            !!icon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonIcon, { icon: icon }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "mdc-button__label" },
                label,
                children),
            !!trailingIcon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonIcon, { icon: trailingIcon })));
    }
}));
/** An icon that goes inside of buttons. This is an instance of the Icon component. */
var ButtonIcon = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'ButtonIcon',
    tag: _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
    classNames: ['mdc-button__icon']
});


/***/ }),

/***/ "../node_modules/@rmwc/Chip/next/index.js":
/*!************************************************!*\
  !*** ../node_modules/@rmwc/Chip/next/index.js ***!
  \************************************************/
/*! exports provided: Chip, ChipIcon, ChipSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return Chip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipIcon", function() { return ChipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipSet", function() { return ChipSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/chips */ "../node_modules/@material/chips/index.js");
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _rmwc_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/ripple */ "../node_modules/@rmwc/ripple/next/index.js");
/* harmony import */ var _rmwc_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rmwc/icon */ "../node_modules/@rmwc/icon/next/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var ChipRoot = Object(_rmwc_ripple__WEBPACK_IMPORTED_MODULE_3__["withRipple"])({})(Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'ChipRoot',
    classNames: function (props) { return [
        'mdc-chip',
        {
            'mdc-chip--selected': props.selected
        }
    ]; },
    consumeProps: ['selected']
}));
/** A Chip component. */
var Chip = /** @class */ (function (_super) {
    __extends(Chip, _super);
    function Chip(props) {
        var _this = _super.call(this, props) || this;
        _this.root = _this.createElement('root');
        _this.id = '';
        _this.checkmarkEl = null;
        _this.handleInteraction = _this.handleInteraction.bind(_this);
        _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
        _this.handleTrailingIconInteraction = _this.handleTrailingIconInteraction.bind(_this);
        return _this;
    }
    Chip.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.id =
            this.root.ref && this.root.ref.id
                ? this.root.ref.id
                : this._reactInternalFiber.key || Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["randomId"])('chip');
    };
    Chip.prototype.getDefaultFoundation = function () {
        var _this = this;
        return new _material_chips__WEBPACK_IMPORTED_MODULE_1__["MDCChipFoundation"](
        /** @type {!MDCChipAdapter} */ (Object.assign({
            addClass: function (className) {
                _this.root.addClass(className);
            },
            removeClass: function (className) { return _this.root.removeClass(className); },
            hasClass: function (className) { return _this.root.hasClass(className); },
            addClassToLeadingIcon: function (className) {
                // handled by props
            },
            removeClassFromLeadingIcon: function (className) {
                // handled by props
            },
            eventTargetHasClass: function (target, className) {
                return (_this.root.hasClass(className) ||
                    target.classList.contains(className));
            },
            notifyInteraction: function () {
                return _this.emit('onInteraction', { chipId: _this.id }, true /* shouldBubble */);
            },
            notifySelection: function (selected) {
                return _this.emit('onSelect', { chipId: _this.id, selected: selected }, true /* shouldBubble */);
            },
            notifyTrailingIconInteraction: function () {
                return _this.emit('onTrailingIconInteraction', { chipId: _this.id }, true /* shouldBubble */);
            },
            notifyRemoval: function () {
                return _this.emit('onRemove', { chipId: _this.id, root: _this.root.ref }, true /* shouldBubble */);
            },
            getComputedStyleValue: function (propertyName) {
                return _this.root.ref &&
                    window.getComputedStyle(_this.root.ref).getPropertyValue(propertyName);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.setStyle(propertyName, value);
            },
            hasLeadingIcon: function () { return !!_this.props.icon; },
            getRootBoundingClientRect: function () {
                return _this.root.ref && _this.root.ref.getBoundingClientRect();
            },
            getCheckmarkBoundingClientRect: function () {
                return _this.checkmarkEl && _this.checkmarkEl.getBoundingClientRect();
            }
        })));
    };
    Chip.prototype.handleInteraction = function (evt) {
        evt.type === 'click' && this.props.onClick && this.props.onClick(evt);
        evt.type === 'keydown' && this.props.onKeyDown && this.props.onKeyDown(evt);
        return this.foundation.handleInteraction(evt);
    };
    Chip.prototype.handleTransitionEnd = function (evt) {
        this.foundation.handleTransitionEnd(evt);
    };
    Chip.prototype.handleTrailingIconInteraction = function (evt) {
        return this.foundation.handleTrailingIconInteraction(evt);
    };
    Chip.prototype.render = function () {
        var _this = this;
        var _a = this.props, onInteraction = _a.onInteraction, onTrailingIconInteraction = _a.onTrailingIconInteraction, onRemove = _a.onRemove, onSelect = _a.onSelect, icon = _a.icon, trailingIcon = _a.trailingIcon, checkmark = _a.checkmark, text = _a.text, label = _a.label, children = _a.children, rest = __rest(_a, ["onInteraction", "onTrailingIconInteraction", "onRemove", "onSelect", "icon", "trailingIcon", "checkmark", "text", "label", "children"]);
        var labelToUse = label;
        if (text) {
            Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["deprecationWarning"])('Chip `text` is now `label`');
            labelToUse = text;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChipRoot, __assign({ tabIndex: 0 }, this.root.props(rest), { onClick: this.handleInteraction, onKeyDown: this.handleInteraction, onTransitionEnd: this.handleTransitionEnd, ref: this.root.setRef }),
            !!icon && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChipIcon, { icon: icon, leading: true, hidden: rest.selected && checkmark })),
            !!checkmark && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChipCheckmark, { elementRef: function (el) { return (_this.checkmarkEl = el); } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "mdc-chip__text" },
                labelToUse,
                children),
            !!trailingIcon && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChipIcon, { icon: trailingIcon, trailing: true, onClick: this.handleTrailingIconInteraction, onKeyDown: this.handleTrailingIconInteraction }))));
    };
    Chip.displayName = 'Chip';
    return Chip;
}(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["FoundationComponent"]));

/** A checkmark for chip selection and filtering. */
var ChipCheckmark = /** @class */ (function (_super) {
    __extends(ChipCheckmark, _super);
    function ChipCheckmark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipCheckmark.prototype.shouldComponentUpdate = function () {
        return false;
    };
    ChipCheckmark.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.props.elementRef, className: "mdc-chip__checkmark" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "mdc-chip__checkmark-svg", viewBox: "-2 -3 30 30" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { className: "mdc-chip__checkmark-path", fill: "none", stroke: "black", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }))));
    };
    return ChipCheckmark;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/** Icons inside of a chip. This is an instance of the Icon component. To make the icons interactive, add props tabIndex="0" and role="button". */
var ChipIconRoot = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'ChipIconRoot',
    tag: _rmwc_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"],
    classNames: function (props) {
        return [
            'mdc-chip__icon',
            {
                'mdc-chip__icon--leading': props.leading,
                'mdc-chip__icon--leading-hidden': props.hidden,
                'mdc-chip__icon--trailing': props.trailing
            }
        ];
    },
    consumeProps: ['trailing', 'leading']
});
var ChipIcon = function (props) {
    var hasInteractionHandler = Object.keys(props).some(function (p) {
        return p.startsWith('on');
    });
    var trailingProps = props.trailing || hasInteractionHandler
        ? { role: 'button', tabIndex: 0 }
        : {};
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChipIconRoot, __assign({}, trailingProps, props));
};
ChipIcon.displayName = 'ChipIcon';
/** A container for multiple chips. */
var ChipSet = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'ChipSet',
    classNames: function (props) { return [
        'mdc-chip-set',
        {
            'mdc-chip-set--choice': props.choice,
            'mdc-chip-set--filter': props.filter
        }
    ]; },
    consumeProps: ['filter', 'choice']
});


/***/ }),

/***/ "../node_modules/@rmwc/Elevation/next/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/@rmwc/Elevation/next/index.js ***!
  \*****************************************************/
/*! exports provided: Elevation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elevation", function() { return Elevation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


/** The Elevation Component */
var Elevation = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'Elevation',
    defaultProps: {
        z: 0,
        transition: false
    },
    classNames: function (props) { return [
        "mdc-elevation--z" + props.z,
        { 'mdc-elevation-transition': props.transition }
    ]; },
    consumeProps: ['z', 'transition'],
    render: function (props, ref, Tag) {
        var wrap = props.wrap, rest = __rest(props, ["wrap"]);
        if (wrap) {
            return Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["wrapChild"])(__assign({}, rest, { ref: ref }));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Tag, __assign({}, rest, { ref: ref }));
    }
});


/***/ }),

/***/ "../node_modules/@rmwc/Fab/next/index.js":
/*!***********************************************!*\
  !*** ../node_modules/@rmwc/Fab/next/index.js ***!
  \***********************************************/
/*! exports provided: FabIcon, Fab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabIcon", function() { return FabIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fab", function() { return Fab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _rmwc_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/ripple */ "../node_modules/@rmwc/ripple/next/index.js");
/* harmony import */ var _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/icon */ "../node_modules/@rmwc/icon/next/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var FabRoot = Object(_rmwc_ripple__WEBPACK_IMPORTED_MODULE_2__["withRipple"])({ surface: false })(Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'FabRoot',
    tag: 'button',
    classNames: function (props) { return [
        'mdc-fab',
        {
            'mdc-fab--mini': props.mini,
            'mdc-fab--exited': props.exited,
            'mdc-fab--extended': props.label
        }
    ]; },
    defaultProps: {
        cssOnly: false,
        mini: false
    },
    consumeProps: ['mini', 'cssOnly', 'exited', 'label', 'icon']
}));
var FabIcon = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'FabIcon',
    tag: _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
    classNames: ['mdc-fab__icon']
});
var FabLabel = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'FabLabel',
    classNames: ['mdc-fab__label']
});
/** A floating action button component */
var Fab = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (_a, ref) {
    var children = _a.children, label = _a.label, icon = _a.icon, trailingIcon = _a.trailingIcon, rest = __rest(_a, ["children", "label", "icon", "trailingIcon"]);
    if (trailingIcon && !label) {
        console.warn("FAB 'trailingIcon' prop should only be used in conjunction with 'label'");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FabRoot, __assign({ label: label }, rest, { ref: ref }),
        !!icon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FabIcon, { icon: icon }),
        !!label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FabLabel, null, label),
        children,
        !!trailingIcon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FabIcon, { icon: trailingIcon })));
});
Fab.displayName = 'Fab';


/***/ }),

/***/ "../node_modules/@rmwc/base/next/component.js":
/*!****************************************************!*\
  !*** ../node_modules/@rmwc/base/next/component.js ***!
  \****************************************************/
/*! exports provided: componentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFactory", function() { return componentFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-theme */ "../node_modules/@rmwc/base/next/with-theme.js");
/* harmony import */ var _utils_deprecation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/deprecation */ "../node_modules/@rmwc/base/next/utils/deprecation.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




// ALL OF THESE FUNCTIONS MUTATE THE COPY OF PROPS
// this is intentional and done for speed and memory
var handleClassNames = function (props, classNames, className, theme) {
    var finalClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, __spread([className], (!!theme ? Object(_with_theme__WEBPACK_IMPORTED_MODULE_2__["parseThemeOptions"])(theme) : []), (typeof classNames === 'function' ? classNames(props) : classNames)));
    props.className = finalClassNames;
};
var handleTag = function (props, defaultTag, tag) {
    // Handle the case where we are extending a component but passing
    // a string as a tag. For instance, extending an Icon but rendering a span
    if (typeof defaultTag !== 'string') {
        props.tag = tag;
        return defaultTag;
    }
    return tag || defaultTag;
};
var handleConsumeProps = function (props, consumeProps) {
    consumeProps.forEach(function (p) {
        delete props[p];
    });
};
var componentFactory = function (_a) {
    var displayName = _a.displayName, _b = _a.classNames, classNames = _b === void 0 ? [] : _b, _c = _a.tag, defaultTag = _c === void 0 ? 'div' : _c, deprecate = _a.deprecate, defaultProps = _a.defaultProps, _d = _a.consumeProps, consumeProps = _d === void 0 ? [] : _d, render = _a.render;
    var Component = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
        var className = props.className, theme = props.theme, tag = props.tag, rest = __rest(props, ["className", "theme", "tag"]);
        var newProps = rest;
        handleClassNames(newProps, classNames, className, theme);
        var Tag = handleTag(newProps, defaultTag, tag);
        if (deprecate) {
            newProps = Object(_utils_deprecation__WEBPACK_IMPORTED_MODULE_3__["handleDeprecations"])(newProps, deprecate, displayName);
        }
        handleConsumeProps(newProps, consumeProps);
        var finalProps = newProps;
        // @ts-ignore
        return render ? (render(finalProps, ref, Tag)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Tag, __assign({}, finalProps, { ref: ref })));
    });
    Component.displayName = displayName;
    Component.defaultProps = defaultProps;
    return Component;
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/foundation-component.js":
/*!***************************************************************!*\
  !*** ../node_modules/@rmwc/base/next/foundation-component.js ***!
  \***************************************************************/
/*! exports provided: FoundationElement, FoundationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationElement", function() { return FoundationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationComponent", function() { return FoundationComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_events_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events-map */ "../node_modules/@rmwc/base/next/utils/events-map.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/debounce */ "../node_modules/@rmwc/base/next/utils/debounce.js");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/strings */ "../node_modules/@rmwc/base/next/utils/strings.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var reactPropFromEventName = function (evtName) {
    return _utils_events_map__WEBPACK_IMPORTED_MODULE_2__["eventsMap"][evtName] || evtName;
};
var FoundationElement = /** @class */ (function () {
    function FoundationElement(onChange) {
        this._classes = new Set();
        this._events = {};
        this._style = {};
        this._props = {};
        this._ref = null;
        this._onChange = null;
        this._onChange = onChange;
        this.onChange = this.onChange.bind(this);
        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.hasClass = this.hasClass.bind(this);
        this.setProp = this.setProp.bind(this);
        this.getProp = this.getProp.bind(this);
        this.removeProp = this.removeProp.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.removeEventListener = this.removeEventListener.bind(this);
        this.setRef = this.setRef.bind(this);
    }
    FoundationElement.prototype.onChange = function () {
        this._onChange && this._onChange();
    };
    FoundationElement.prototype.destroy = function () {
        this._onChange = null;
        this._ref = null;
        this._events = {};
        this._style = {};
        this._props = {};
        this._classes = new Set();
    };
    /**************************************************
     * Classes
     **************************************************/
    FoundationElement.prototype.addClass = function (className) {
        if (!this._classes.has(className)) {
            this._classes.add(className);
            this.onChange();
        }
    };
    FoundationElement.prototype.removeClass = function (className) {
        if (this._classes.has(className)) {
            this._classes.delete(className);
            this.onChange();
        }
    };
    FoundationElement.prototype.hasClass = function (className) {
        return this._classes.has(className);
    };
    /**************************************************
     * Props
     **************************************************/
    FoundationElement.prototype.setProp = function (propName, value) {
        if (this._props[propName] !== value) {
            this._props[propName] = value;
            this.onChange();
        }
    };
    FoundationElement.prototype.getProp = function (propName) {
        return this._props[propName];
    };
    FoundationElement.prototype.removeProp = function (propName) {
        if (this._props[propName] !== undefined) {
            delete this._props[propName];
            this.onChange();
        }
    };
    FoundationElement.prototype.props = function (propsToMerge) {
        var _this = this;
        var _a = propsToMerge.className, className = _a === void 0 ? '' : _a, _b = propsToMerge.style, style = _b === void 0 ? {} : _b;
        // handle merging events
        // the foundation should be able to pass something onClick as well as a user
        // This wraps them in a function that calls both
        var mergedEvents = Object.entries(propsToMerge).reduce(function (acc, _a) {
            var _b = __read(_a, 2), key = _b[0], possibleCallback = _b[1];
            var existingCallback = _this._events[key];
            if (typeof possibleCallback === 'function' &&
                typeof existingCallback === 'function') {
                var wrappedCallback = function (evt) {
                    existingCallback(evt);
                    return possibleCallback(evt);
                };
                acc[key] = wrappedCallback;
            }
            return acc;
        }, __assign({}, this._events));
        // handle className
        var mergedClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, __spread(this._classes));
        // handle styles
        var mergedStyles = __assign({}, this._style, style);
        return __assign({}, propsToMerge, this._props, mergedEvents, { style: mergedStyles, className: mergedClasses });
    };
    /**************************************************
     * Styles
     **************************************************/
    FoundationElement.prototype.setStyle = function (propertyName, value) {
        propertyName = propertyName.startsWith('--')
            ? propertyName
            : Object(_utils_strings__WEBPACK_IMPORTED_MODULE_4__["toCamel"])(propertyName);
        if (this._style[propertyName] !== value) {
            this._style[propertyName] = value;
            this.onChange();
        }
    };
    /**************************************************
     * Events
     **************************************************/
    FoundationElement.prototype.addEventListener = function (evtName, callback) {
        var propName = reactPropFromEventName(evtName);
        if (this._events[propName] !== callback) {
            this._events[propName] = callback;
            this.onChange();
        }
    };
    FoundationElement.prototype.removeEventListener = function (evtName, callback) {
        var propName = reactPropFromEventName(evtName);
        if (this._events[propName]) {
            delete this._events[propName];
            this.onChange();
        }
    };
    /**************************************************
     * Refs
     **************************************************/
    FoundationElement.prototype.setRef = function (el) {
        if (el) {
            this._ref = el;
        }
    };
    Object.defineProperty(FoundationElement.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        enumerable: true,
        configurable: true
    });
    return FoundationElement;
}());

var FoundationComponent = /** @class */ (function (_super) {
    __extends(FoundationComponent, _super);
    function FoundationComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.elements = {};
        //@ts-ignore
        if (_this.constructor.shouldDebounce) {
            _this.update = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this.update.bind(_this), 0);
        }
        else {
            _this.update = _this.update.bind(_this);
        }
        return _this;
    }
    FoundationComponent.prototype.componentDidMount = function () {
        this.foundation = this.getDefaultFoundation();
        this.foundation.init();
        this.sync(this.props, {});
    };
    FoundationComponent.prototype.componentDidUpdate = function (prevProps) {
        this.sync(this.props, prevProps);
    };
    FoundationComponent.prototype.componentWillUnmount = function () {
        this.foundation && this.foundation.destroy();
        // @ts-ignore
        this.foundation = undefined;
        Object.values(this.elements).forEach(function (el) { return el.destroy(); });
    };
    FoundationComponent.prototype.createElement = function (elementName) {
        var el = new FoundationElement(this.update);
        this.elements[elementName] = el;
        return el;
    };
    FoundationComponent.prototype.update = function () {
        this.foundation && this.setState({});
    };
    FoundationComponent.prototype.sync = function (props, prevProps) { };
    FoundationComponent.prototype.syncProp = function (prop, prevProp, callback) {
        if ((prop !== undefined || (prevProp !== undefined && prop === undefined)) &&
            prop !== prevProp) {
            callback();
        }
    };
    FoundationComponent.prototype.getDefaultFoundation = function () {
        return {
            init: function () { },
            destroy: function () { }
        };
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     */
    FoundationComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        evt = new CustomEvent(evtType, {
            detail: evtData,
            bubbles: shouldBubble
        });
        // bugfix for events coming from form elements
        // and also fits with reacts form pattern better...
        // This should always otherwise be null since there is no target
        // for Custom Events
        Object.defineProperty(evt, 'target', {
            value: evtData,
            writable: false
        });
        Object.defineProperty(evt, 'currentTarget', {
            value: evtData,
            writable: false
        });
        // Custom handling for React
        var propName = evtType;
        // check to see if the foundation still exists. If not, we are
        // probably unmounted or destroyed and dont want to call any more handlers
        // This happens when MDC broadcasts certain events on timers
        if (this.foundation) {
            //@ts-ignore
            this.props[propName] && this.props[propName](evt);
        }
        return evt;
    };
    FoundationComponent.shouldDebounce = false;
    return FoundationComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "../node_modules/@rmwc/base/next/index.js":
/*!************************************************!*\
  !*** ../node_modules/@rmwc/base/next/index.js ***!
  \************************************************/
/*! exports provided: classNames, FoundationComponent, componentFactory, createFocusTrap, parseThemeOptions, withTheme, deprecationWarning, handleDeprecations, toCamel, toDashCase, debounce, eventsMap, closest, matches, randomId, wrapChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap */ "../node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classnames__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _with_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-theme */ "../node_modules/@rmwc/base/next/with-theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseThemeOptions", function() { return _with_theme__WEBPACK_IMPORTED_MODULE_2__["parseThemeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _with_theme__WEBPACK_IMPORTED_MODULE_2__["withTheme"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/@rmwc/base/next/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecationWarning", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["deprecationWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDeprecations", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["handleDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCamel", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["toCamel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDashCase", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["toDashCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["eventsMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomId", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["randomId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapChild", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["wrapChild"]; });

/* harmony import */ var _foundation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation-component */ "../node_modules/@rmwc/base/next/foundation-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoundationComponent", function() { return _foundation_component__WEBPACK_IMPORTED_MODULE_4__["FoundationComponent"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "../node_modules/@rmwc/base/next/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "componentFactory", function() { return _component__WEBPACK_IMPORTED_MODULE_5__["componentFactory"]; });







var createFocusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_0___default.a;


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/debounce.js":
/*!*********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/debounce.js ***!
  \*********************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var debounce = function (func, wait) {
    var timeout;
    return function () {
        // @ts-ignore
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        timeout !== null && clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/deprecation.js":
/*!************************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/deprecation.js ***!
  \************************************************************/
/*! exports provided: deprecationWarning, handleDeprecations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecationWarning", function() { return deprecationWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDeprecations", function() { return handleDeprecations; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var deprecationWarning = function (message) {
    if (process && process.env && "development" !== 'production') {
        console.warn("RMWC Deprecation Warning: " + message);
    }
};
var handleDeprecations = function (props, deprecate, displayName) {
    props = __assign({}, props);
    for (var oldPropName in deprecate) {
        var newProp = deprecate[oldPropName];
        var newPropName = void 0;
        var transformProp = function (value) { return value; };
        if (Array.isArray(newProp)) {
            newPropName = newProp[0];
            transformProp = newProp[1];
        }
        else {
            newPropName = newProp;
        }
        if (props[oldPropName] !== undefined) {
            if (newPropName === '') {
                /* istanbul ignore next */
                deprecationWarning((displayName ||
                    '') + " component prop '" + oldPropName + "' has been removed from and is no longer a valid prop.");
            }
            else {
                props[newPropName] = transformProp(props[oldPropName]);
                var propTransformMessage = '';
                if (props[newPropName] !== props[oldPropName]) {
                    propTransformMessage = " The old value has also been converted from '" + props[oldPropName] + "' to '" + props[newPropName] + "'";
                }
                /* istanbul ignore next */
                deprecationWarning((displayName ||
                    '') + " component prop '" + oldPropName + "' has been replaced with '" + newPropName + "'. " + propTransformMessage);
            }
            delete props[oldPropName];
        }
    }
    return props;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/process/browser.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/events-map.js":
/*!***********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/events-map.js ***!
  \***********************************************************/
/*! exports provided: eventsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsMap", function() { return eventsMap; });
/* istanbul ignore file */
var eventsMap = {
    blur: 'onBlur',
    cancel: 'onCancel',
    click: 'onClick',
    close: 'onClose',
    contextmenu: 'onContextMenu',
    copy: 'onCopy',
    cut: 'onCut',
    auxclick: 'onAuxClick',
    doubleclick: 'onDoubleClick',
    dragend: 'onDragEnd',
    dragstart: 'onDragStart',
    drop: 'onDrop',
    focus: 'onFocus',
    input: 'onInput',
    invalid: 'onInvalid',
    keydown: 'onKeyDown',
    keypress: 'onKeyPress',
    keyup: 'onKeyUp',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    paste: 'onPaste',
    pause: 'onPause',
    play: 'onPlay',
    pointercancel: 'onPointerCancel',
    pointerdown: 'onPointerDown',
    pointerup: 'onPointerUp',
    ratechange: 'onRateChange',
    reset: 'onReset',
    seeked: 'onSeeked',
    submit: 'onSubmit',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchstart: 'onTouchStart',
    volumechange: 'onVolumeChange',
    abort: 'onAbort',
    animationend: 'onAnimationEnd',
    animationiteration: 'onAnimationIteration',
    animationstart: 'onAnimationStart',
    canplay: 'onCanPlay',
    canplaythrough: 'onCanPlayThrough',
    drag: 'onDrag',
    dragenter: 'onDragEnter',
    dragexit: 'onDragExit',
    dragleave: 'onDragLeave',
    dragover: 'onDragOver',
    durationchange: 'onDurationChange',
    emptied: 'onEmptied',
    encrypted: 'onEncrypted',
    ended: 'onEnded',
    error: 'onError',
    gotpointercapture: 'onGotPointerCapture',
    load: 'onLoad',
    loadeddata: 'onLoadedData',
    loadedmetadata: 'onLoadedMetadata',
    loadstart: 'onLoadStart',
    lostpointercapture: 'onLostPointerCapture',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseover: 'onMouseOver',
    playing: 'onPlaying',
    pointermove: 'onPointerMove',
    pointerout: 'onPointerOut',
    pointerover: 'onPointerOver',
    progress: 'onProgress',
    scroll: 'onScroll',
    seeking: 'onSeeking',
    stalled: 'onStalled',
    suspend: 'onSuspend',
    timeupdate: 'onTimeUpdate',
    toggle: 'onToggle',
    touchmove: 'onTouchMove',
    transitionend: 'onTransitionEnd',
    waiting: 'onWaiting',
    wheel: 'onWheel',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    pointerenter: 'onPointerEnter',
    pointerleave: 'onPointerLeave',
    change: 'onChange',
    select: 'onSelect',
    beforeinput: 'onBeforeInput',
    compositionend: 'onCompositionEnd',
    compositionstart: 'onCompositionStart',
    compositionupdate: 'onCompositionUpdate'
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/index.js ***!
  \******************************************************/
/*! exports provided: deprecationWarning, handleDeprecations, toCamel, toDashCase, debounce, eventsMap, closest, matches, randomId, wrapChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ "../node_modules/@rmwc/base/next/utils/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony import */ var _deprecation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecation */ "../node_modules/@rmwc/base/next/utils/deprecation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecationWarning", function() { return _deprecation__WEBPACK_IMPORTED_MODULE_1__["deprecationWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDeprecations", function() { return _deprecation__WEBPACK_IMPORTED_MODULE_1__["handleDeprecations"]; });

/* harmony import */ var _events_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-map */ "../node_modules/@rmwc/base/next/utils/events-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsMap", function() { return _events_map__WEBPACK_IMPORTED_MODULE_2__["eventsMap"]; });

/* harmony import */ var _ponyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ponyfills */ "../node_modules/@rmwc/base/next/utils/ponyfills.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _ponyfills__WEBPACK_IMPORTED_MODULE_3__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _ponyfills__WEBPACK_IMPORTED_MODULE_3__["matches"]; });

/* harmony import */ var _random_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random-id */ "../node_modules/@rmwc/base/next/utils/random-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomId", function() { return _random_id__WEBPACK_IMPORTED_MODULE_4__["randomId"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "../node_modules/@rmwc/base/next/utils/strings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCamel", function() { return _strings__WEBPACK_IMPORTED_MODULE_5__["toCamel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDashCase", function() { return _strings__WEBPACK_IMPORTED_MODULE_5__["toDashCase"]; });

/* harmony import */ var _wrap_child__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrap-child */ "../node_modules/@rmwc/base/next/utils/wrap-child.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapChild", function() { return _wrap_child__WEBPACK_IMPORTED_MODULE_6__["wrapChild"]; });










/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/ponyfills.js":
/*!**********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/ponyfills.js ***!
  \**********************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
var closest = function (element, selector) {
    if (element instanceof Element) {
        /* istanbul ignore else  */
        if (element && element.closest) {
            return element.closest(selector);
        }
        else {
            var el = element;
            while (el) {
                if (matches(el, selector)) {
                    return el;
                }
                el = el.parentElement;
            }
        }
    }
    return null;
};
var matches = function (element, selector) {
    /* istanbul ignore next  */
    var nativeMatches = element.matches ||
        element.webkitMatchesSelector ||
        // @ts-ignore
        element.msMatchesSelector;
    return nativeMatches.call(element, selector);
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/random-id.js":
/*!**********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/random-id.js ***!
  \**********************************************************/
/*! exports provided: randomId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomId", function() { return randomId; });
/**
 * Generates a pseudo random string for DOM ids
 * Will return 'test' in the NODE test-env so things like storyshots doesnt break.
 */
var randomId = function (prefix) {
    var id =  false
        ? undefined
        : (Math.random() + Math.random() + 1).toString(36).substring(2);
    return prefix + "-" + id;
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/strings.js":
/*!********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/strings.js ***!
  \********************************************************/
/*! exports provided: toCamel, toDashCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamel", function() { return toCamel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDashCase", function() { return toDashCase; });
var toCamel = function (str) {
    return str.replace(/(-[a-z])/g, function ($1) { return $1.toUpperCase().replace('-', ''); });
};
var toDashCase = function (str) {
    return str.replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); });
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/utils/wrap-child.js":
/*!***********************************************************!*\
  !*** ../node_modules/@rmwc/base/next/utils/wrap-child.js ***!
  \***********************************************************/
/*! exports provided: wrapChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapChild", function() { return wrapChild; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var wrapChild = function (props) {
    var child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(props.children);
    return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, __assign({}, props, child.props, { 
        // @ts-ignore
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, child.props.className) }));
};


/***/ }),

/***/ "../node_modules/@rmwc/base/next/with-theme.js":
/*!*****************************************************!*\
  !*** ../node_modules/@rmwc/base/next/with-theme.js ***!
  \*****************************************************/
/*! exports provided: parseThemeOptions, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseThemeOptions", function() { return parseThemeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/strings */ "../node_modules/@rmwc/base/next/utils/strings.js");
/* harmony import */ var _utils_deprecation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/deprecation */ "../node_modules/@rmwc/base/next/utils/deprecation.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




/**
 * Actually parses the theme options
 */
var parseThemeOptions = function (theme) {
    if (typeof theme === 'string' && theme.includes(' ')) {
        Object(_utils_deprecation__WEBPACK_IMPORTED_MODULE_3__["deprecationWarning"])("Theme no longer accepts a string of theme names with spaces. Please pass them as an array instead.");
    }
    var themeItems = Array.isArray(theme) ? theme : theme.split(' ');
    return themeItems.map(function (v) {
        if (v.includes('-')) {
            Object(_utils_deprecation__WEBPACK_IMPORTED_MODULE_3__["deprecationWarning"])("Theme properties need to be passed as camelCase. Please convert " + v + " to " + v.replace(/-([a-z])/g, function (m, w) {
                return w.toUpperCase();
            }));
        }
        return "mdc-theme--" + Object(_utils_strings__WEBPACK_IMPORTED_MODULE_2__["toDashCase"])(v);
    });
};
/**
 * HOC that adds themeability to any component
 */
var withTheme = function (Component) {
    var HOC = function (_a) {
        var theme = _a.theme, className = _a.className, rest = __rest(_a, ["theme", "className"]);
        if (theme) {
            var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, parseThemeOptions(theme));
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({ className: classes }, rest));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({ className: className }, rest));
    };
    HOC.displayName = 'withTheme';
    return HOC;
};


/***/ }),

/***/ "../node_modules/@rmwc/icon-button/next/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/@rmwc/icon-button/next/index.js ***!
  \*******************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/icon-button */ "../node_modules/@material/icon-button/index.js");
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/icon */ "../node_modules/@rmwc/icon/next/index.js");
/* harmony import */ var _rmwc_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rmwc/ripple */ "../node_modules/@rmwc/ripple/next/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var IconButtonRoot = Object(_rmwc_ripple__WEBPACK_IMPORTED_MODULE_4__["withRipple"])({
    surface: false,
    unbounded: true
})(Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'IconButtonRoot',
    tag: _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
    classNames: function (props) { return [
        'mdc-icon-button',
        {
            'mdc-icon-button--on': props.checked
        }
    ]; },
    defaultProps: {
        role: 'button',
        tabIndex: '0'
    },
    consumeProps: ['checked']
}));
var IconButtonToggleRoot = Object(_rmwc_ripple__WEBPACK_IMPORTED_MODULE_4__["withRipple"])({
    surface: false,
    unbounded: true
})(Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'IconButtonRoot',
    tag: 'button',
    classNames: function (props) { return [
        'mdc-icon-button',
        {
            'mdc-icon-button--on': props.checked
        }
    ]; },
    defaultProps: {
        role: 'button',
        tabIndex: '0'
    },
    consumeProps: ['checked']
}));
var IconButtonIcon = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({
    displayName: 'IconButtonIcon',
    tag: _rmwc_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
    classNames: function (props) { return [
        'mdc-icon-button__icon',
        {
            'mdc-icon-button__icon--on': props.on
        }
    ]; },
    consumeProps: ['on']
});
var IconButtonToggle = /** @class */ (function (_super) {
    __extends(IconButtonToggle, _super);
    function IconButtonToggle(props) {
        var _this = _super.call(this, props) || this;
        _this.root = _this.createElement('root');
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Object.defineProperty(IconButtonToggle.prototype, "on", {
        get: function () {
            return this.foundation && this.foundation.isOn();
        },
        set: function (isOn) {
            this.foundation.toggle(isOn);
        },
        enumerable: true,
        configurable: true
    });
    IconButtonToggle.prototype.getDefaultFoundation = function () {
        var _this = this;
        return new _material_icon_button__WEBPACK_IMPORTED_MODULE_1__["MDCIconButtonToggleFoundation"]({
            addClass: function (className) { return _this.root.addClass(className); },
            removeClass: function (className) { return _this.root.removeClass(className); },
            hasClass: function (className) { return _this.root.hasClass(className); },
            setAttr: function (attrName, attrValue) {
                return _this.root.setProp(attrName, attrValue);
            },
            notifyChange: function (evtData) {
                return _this.emit('onChange', evtData);
            }
        });
    };
    /** Takes into account our checked prop */
    IconButtonToggle.prototype.isOn = function () {
        if (this.props.checked !== undefined) {
            return this.props.checked;
        }
        return this.on;
    };
    IconButtonToggle.prototype.sync = function (nextProps) {
        // checked
        if (nextProps.checked !== undefined && this.on !== nextProps.checked) {
            this.on = !!nextProps.checked;
        }
    };
    IconButtonToggle.prototype.handleClick = function (evt) {
        this.props.onClick && this.props.onClick(evt);
        this.foundation.handleClick();
    };
    IconButtonToggle.prototype.render = function () {
        var _a = this.props, icon = _a.icon, iconOptions = _a.iconOptions, onIcon = _a.onIcon, onIconOptions = _a.onIconOptions, rest = __rest(_a, ["icon", "iconOptions", "onIcon", "onIconOptions"]);
        if (iconOptions || onIconOptions) {
            Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["deprecationWarning"])('IconButton component props iconOptions and onIconOptions must be passed directly to the icon and onIcon prop. This issue has NOT been automatically fixed for you, please update your code.');
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconButtonToggleRoot, __assign({ "aria-pressed": this.isOn(), "aria-hidden": "true" }, this.root.props(rest), { tag: "button", onClick: this.handleClick }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconButtonIcon, { icon: icon }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconButtonIcon, { icon: onIcon, on: true })));
    };
    IconButtonToggle.displayName = 'IconButton';
    return IconButtonToggle;
}(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["FoundationComponent"]));
/** An IconButton component that can also be used as a toggle. */
var IconButton = function (_a) {
    var rest = __rest(_a, []);
    if (rest.onIcon) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconButtonToggle, __assign({}, rest));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconButtonRoot, __assign({ "aria-hidden": "true", tag: "button" }, rest));
};
IconButton.displayName = 'IconButton';


/***/ }),

/***/ "../node_modules/@rmwc/icon/icon.css":
/*!*******************************************!*\
  !*** ../node_modules/@rmwc/icon/icon.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./icon.css */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!../node_modules/@rmwc/icon/icon.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@rmwc/icon/next/index.js":
/*!************************************************!*\
  !*** ../node_modules/@rmwc/icon/next/index.js ***!
  \************************************************/
/*! exports provided: getIconStrategy, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconStrategy", function() { return getIconStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/provider */ "../node_modules/@rmwc/provider/next/index.js");
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



/**
 * Given content, tries to figure out an appropriate strategy for it
 */
var processAutoStrategy = function (content) {
    // check for URLS
    if (typeof content === 'string' && content.includes('/')) {
        return 'url';
    }
    // handle JSX components
    if (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](content)) {
        return 'component';
    }
    // we dont know what it is, default to ligature for compat with material icons
    return 'ligature';
};
/**
 * Get the actual icon strategy to use
 */
var getIconStrategy = function (content, strategy, providerStrategy) {
    strategy = strategy || providerStrategy || 'auto';
    if (strategy === 'auto') {
        return processAutoStrategy(content);
    }
    return strategy;
};
var renderLigature = function (_a) {
    var content = _a.content, rest = __rest(_a, ["content"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconRoot, __assign({}, rest), content));
};
var renderClassName = function (_a) {
    var content = _a.content, rest = __rest(_a, ["content"]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconRoot, __assign({}, rest));
};
var renderUrl = function (_a) {
    var content = _a.content, rest = __rest(_a, ["content"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconRoot, __assign({}, rest, { className: Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["classNames"])(rest.className, 'rmwc-icon--image'), style: __assign({}, rest.style, { backgroundImage: "url(" + content + ")" }) })));
};
var renderComponent = function (_a) {
    var content = _a.content, rest = __rest(_a, ["content"]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconRoot, __assign({}, rest), content);
};
var iconRenderMap = {
    ligature: renderLigature,
    className: renderClassName,
    url: renderUrl,
    component: renderComponent,
    auto: undefined
};
var buildIconOptions = function (icon) {
    if (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](icon) || (icon && typeof icon !== 'object')) {
        return {
            icon: icon
        };
    }
    return icon;
};
var IconRoot = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["componentFactory"])({ displayName: 'IconRoot', tag: 'i' });
/** An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info. */
var Icon = Object(_rmwc_provider__WEBPACK_IMPORTED_MODULE_1__["withProviderContext"])()(function (_a) {
    var _b;
    var icon = _a.icon, deprecatedIconOption = _a.iconOptions, providerContext = _a.providerContext, rest = __rest(_a, ["icon", "iconOptions", "providerContext"]);
    // handle deprecation
    if (!!deprecatedIconOption) {
        var converted = __assign({ content: typeof icon === 'string' ? icon : "<MyComponent {...}/>" }, deprecatedIconOption);
        Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["deprecationWarning"])("Icon component prop 'iconOptions' is deprecated. You options should now be passed directly to the 'icon' prop. I.E. icon={" + JSON.stringify(converted) + "}");
    }
    // Build icon options object
    var _c = __assign({}, buildIconOptions(icon), deprecatedIconOption), content = _c.icon, strategy = _c.strategy, prefix = _c.prefix, basename = _c.basename, render = _c.render, size = _c.size, optionsRest = __rest(_c, ["icon", "strategy", "prefix", "basename", "render", "size"]);
    // Get provider options
    var _d = providerContext.icon || {}, _e = _d.basename, providerBasename = _e === void 0 ? null : _e, _f = _d.prefix, providerPrefix = _f === void 0 ? null : _f, _g = _d.strategy, providerStrategy = _g === void 0 ? null : _g, _h = _d.render, providerRender = _h === void 0 ? null : _h;
    var contentToUse = content;
    var strategyToUse = getIconStrategy(contentToUse, strategy || null, providerStrategy || null);
    var prefixToUse = prefix || providerPrefix;
    var basenameToUse = basename === undefined ? providerBasename : basename;
    var iconClassName = strategyToUse === 'className' && typeof content === 'string'
        ? "" + String(prefixToUse) + content
        : null;
    var rendererFromMap = !!strategyToUse && iconRenderMap[strategyToUse];
    // For some reason TS thinks the render method will return undefined...
    var renderToUse = strategyToUse === 'custom'
        ? render || providerRender
        : rendererFromMap || null;
    if (!renderToUse) {
        console.error("Icon: rendering not implemented for " + String(strategyToUse) + ".");
        return null;
    }
    var rendered = renderToUse(__assign({}, rest, optionsRest, { content: contentToUse, className: Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["classNames"])('rmwc-icon', basenameToUse, rest.className, optionsRest.className, iconClassName, (_b = {},
            _b["rmwc-icon--size-" + (size || '')] = !!size,
            _b)) }));
    // Unwrap double layered icons...
    if (rendered.props.children &&
        rendered.props.children.type &&
        ['Avatar', 'Icon'].includes(rendered.props.children.type.displayName)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](rendered.props.children, __assign({}, rendered.props.children.props, rendered.props, { 
            // prevents an infinite loop
            children: rendered.props.children.props.children, className: Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_2__["classNames"])(rendered.props.className, rendered.props.children.props.className) }));
    }
    return rendered;
});
Icon.displayName = 'Icon';


/***/ }),

/***/ "../node_modules/@rmwc/provider/next/index.js":
/*!****************************************************!*\
  !*** ../node_modules/@rmwc/provider/next/index.js ***!
  \****************************************************/
/*! exports provided: ProviderContext, withProviderContext, RMWCProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderContext", function() { return ProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProviderContext", function() { return withProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMWCProvider", function() { return RMWCProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


// Default provider options
var providerDefaults = {
    ripple: true,
    icon: {
        icon: '',
        basename: 'material-icons',
        prefix: '',
        strategy: 'auto',
        render: undefined
    }
};
var ProviderContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](providerDefaults);
var withProviderContext = function () { return function (Component) {
    var wrapped = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProviderContext.Consumer, null, function (providerContext) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, props, { providerContext: providerContext, ref: ref }))); })); });
    return wrapped;
}; };
/** A provider for setting global options in RMWC. */
var RMWCProvider = function (_a) {
    var children = _a.children, iconClassNameBase = _a.iconClassNameBase, iconClassNamePrefix = _a.iconClassNamePrefix, iconStrategy = _a.iconStrategy, iconRender = _a.iconRender, rest = __rest(_a, ["children", "iconClassNameBase", "iconClassNamePrefix", "iconStrategy", "iconRender"]);
    var value = __assign({}, providerDefaults);
    var iconOptions = __assign({}, value.icon);
    /* istanbul ignore if */
    if (iconClassNameBase || iconClassNamePrefix || iconStrategy || iconRender) {
        Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["deprecationWarning"])("RMWCProvider component no longer accepts iconClassNameBase, iconClassNamePrefix, iconStrategy, or iconRender props. Please use the 'icon' props instead. icon={{basename: 'material-icons', strategy: 'url'}}");
        iconOptions.basename = iconClassNameBase || iconOptions.basename;
        iconOptions.prefix = iconClassNamePrefix || iconOptions.prefix;
        iconOptions.strategy = iconStrategy || iconOptions.strategy;
        iconOptions.render = iconRender || iconOptions.render;
    }
    value.icon = iconOptions;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProviderContext.Provider, { value: __assign({}, value, rest) }, children));
};


/***/ }),

/***/ "../node_modules/@rmwc/ripple/next/index.js":
/*!**************************************************!*\
  !*** ../node_modules/@rmwc/ripple/next/index.js ***!
  \**************************************************/
/*! exports provided: Ripple, RippleSurface, withRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleSurface", function() { return RippleSurface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRipple", function() { return withRipple; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple */ "../node_modules/@material/ripple/index.js");
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _rmwc_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rmwc/provider */ "../node_modules/@rmwc/provider/next/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var RippleSurfaceContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
/** A component for adding Ripples to other components. */
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.root = _this.createElement('root');
        _this.surface = _this.createElement('surface');
        _this.isTouched = false;
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
        _this.handleMouseUp = _this.handleMouseUp.bind(_this);
        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        return _this;
    }
    Ripple.prototype.getDefaultFoundation = function () {
        var _this = this;
        return new _material_ripple__WEBPACK_IMPORTED_MODULE_2__["MDCRippleFoundation"]({
            browserSupportsCssVars: function () { return _material_ripple__WEBPACK_IMPORTED_MODULE_2__["util"].supportsCssVariables(window); },
            isUnbounded: function () { return !!_this.props.unbounded; },
            isSurfaceActive: function () {
                if (_this.root.ref) {
                    return Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_3__["matches"])(_this.root.ref, ':active');
                }
                return false;
            },
            isSurfaceDisabled: function () { return !!_this.props.disabled; },
            addClass: function (className) { return _this.surface.addClass(className); },
            removeClass: function (className) { return _this.surface.removeClass(className); },
            containsEventTarget: function (target) {
                return !!_this.root.ref && _this.root.ref.contains(target);
            },
            registerInteractionHandler: function (evtType, handler) { return _this.root.addEventListener(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.root.removeEventListener(evtType, handler); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, _material_ripple__WEBPACK_IMPORTED_MODULE_2__["util"].applyPassive());
            },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, _material_ripple__WEBPACK_IMPORTED_MODULE_2__["util"].applyPassive());
            },
            registerResizeHandler: function (handler) {
                return window.addEventListener('resize', handler);
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            updateCssVariable: function (varName, value) {
                return _this.surface.setStyle(varName, value);
            },
            computeBoundingRect: function () {
                return _this.root.ref
                    ? _this.root.ref.getBoundingClientRect()
                    : { width: 0, height: 0 };
            },
            getWindowPageOffset: function () { return ({
                x: window.pageXOffset,
                y: window.pageYOffset
            }); }
        });
    };
    Ripple.prototype.sync = function (props, prevProps) {
        this.root.setRef(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](this));
        if (props.unbounded !== prevProps.unbounded) {
            this.foundation.setUnbounded(!!props.unbounded);
        }
    };
    Ripple.prototype.handleFocus = function (evt) {
        this.props.onFocus && this.props.onFocus(evt);
        this.foundation && this.foundation.handleFocus();
    };
    Ripple.prototype.handleBlur = function (evt) {
        this.props.onBlur && this.props.onBlur(evt);
        this.foundation.handleBlur();
    };
    Ripple.prototype.handleMouseDown = function (evt) {
        this.props.onMouseDown && this.props.onMouseDown(evt);
        if (!this.isTouched) {
            this.activateRipple(evt);
        }
        this.isTouched = false;
    };
    Ripple.prototype.handleMouseUp = function (evt) {
        this.props.onMouseUp && this.props.onMouseUp(evt);
        this.deactivateRipple(evt);
    };
    Ripple.prototype.handleTouchStart = function (evt) {
        this.isTouched = true;
        this.props.onTouchStart && this.props.onTouchStart(evt);
        this.activateRipple(evt);
    };
    Ripple.prototype.handleTouchEnd = function (evt) {
        this.props.onTouchEnd && this.props.onTouchEnd(evt);
        this.deactivateRipple(evt);
    };
    Ripple.prototype.handleKeyDown = function (evt) {
        this.props.onKeyDown && this.props.onKeyDown(evt);
        this.activateRipple(evt);
    };
    Ripple.prototype.handleKeyUp = function (evt) {
        this.props.onKeyUp && this.props.onKeyUp(evt);
        this.deactivateRipple(evt);
    };
    Ripple.prototype.activateRipple = function (evt) {
        // https://reactjs.org/docs/events.html#event-pooling
        evt.persist();
        this.foundation.activate(evt);
    };
    Ripple.prototype.deactivateRipple = function (evt) {
        // https://reactjs.org/docs/events.html#event-pooling
        evt.persist();
        this.foundation.deactivate();
    };
    Ripple.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, primary = _a.primary, accent = _a.accent, unbounded = _a.unbounded, surface = _a.surface, rest = __rest(_a, ["children", "className", "primary", "accent", "unbounded", "surface"]);
        var child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
        if (!react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](child)) {
            return null;
        }
        // This flag really determines a lot
        // is surfaceIsRoot is true, then the surface props are spread
        // to the underlying component, otherwise the only place they
        // can be picked up is by the context consumer
        var surfaceIsRoot = !surface || !unbounded;
        var unboundedProp = unbounded
            ? { 'data-mdc-ripple-is-unbounded': true }
            : {};
        var rippleSurfaceProps = surfaceIsRoot
            ? this.surface.props({ style: child.props.style })
            : {};
        var finalClassNames = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_3__["classNames"])(className, rippleSurfaceProps.className, child.props.className, {
            'mdc-ripple-surface': typeof surface === 'boolean' ? surface : surface === undefined,
            'mdc-ripple-surface--primary': primary,
            'mdc-ripple-surface--accent': accent
        });
        // Fixes a ripple artifact issue
        // that is caused when clicking a button disables it
        // https://codesandbox.io/s/842vo56019
        if (rest.disabled) {
            finalClassNames = finalClassNames.replace('mdc-ripple-upgraded--background-focused', '');
        }
        // do some crazy props merging...
        var content = react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, __assign({}, child.props, unboundedProp, this.root.props(__assign({}, rest, { style: child.props.style }, rippleSurfaceProps, { className: finalClassNames })), { onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseDown: this.handleMouseDown, onMouseUp: this.handleMouseUp, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp }));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RippleSurfaceContext.Provider, { value: this.surface.props({ style: child.props.style }) }, content));
    };
    Ripple.shouldDebounce = true;
    Ripple.displayName = 'Ripple';
    return Ripple;
}(_rmwc_base__WEBPACK_IMPORTED_MODULE_3__["FoundationComponent"]));

var RippleSurface = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RippleSurfaceContext.Consumer, null, function (rippleSurfaceProps) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", __assign({}, rest, rippleSurfaceProps, { className: className + " " + (rippleSurfaceProps.className || '') }))); }));
};
/**
 * HOC that adds ripples to any component
 */
var withRipple = function (_a) {
    var _b = _a === void 0 ? {} : _a, defaultUnbounded = _b.unbounded, defaultAccent = _b.accent, defaultSurface = _b.surface;
    return function (Component) {
        var WithRippleComponent = Object(_rmwc_provider__WEBPACK_IMPORTED_MODULE_4__["withProviderContext"])()(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (_a, ref) {
            var providerContext = _a.providerContext, _b = _a.ripple, ripple = _b === void 0 ? providerContext.ripple : _b, rest = __rest(_a, ["providerContext", "ripple"]);
            var rippleOptions = typeof ripple !== 'object' ? {} : ripple;
            if (rest.accent || rest.unbounded || rest.surface) {
                Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_3__["deprecationWarning"])("'accent', 'unbounded', and 'surface' have been deprecated as indiviudal props. Please pass an options object to the ripple prop directly. ripple={{accent: true, unbounded: true}} ");
                rippleOptions.accent = rest.accent || rippleOptions.accent;
                rippleOptions.unbounded = rest.unbounded || rippleOptions.unbounded;
                rippleOptions.surface = rest.surface || rippleOptions.surface;
            }
            if (ripple) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Ripple, __assign({}, rest, { accent: rippleOptions.accent || defaultAccent, unbounded: rippleOptions.unbounded || defaultUnbounded, surface: rippleOptions.surface || defaultSurface }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, rest, { ref: ref }))));
            }
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, rest, { ref: ref }));
        }));
        WithRippleComponent.displayName = "withRipple(" + (Component.displayName ||
            'Unknown') + ")";
        return WithRippleComponent;
    };
};


/***/ }),

/***/ "../node_modules/@rmwc/theme/next/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@rmwc/theme/next/index.js ***!
  \*************************************************/
/*! exports provided: Theme, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/@rmwc/theme/next/utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var ThemeRoot = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["componentFactory"])({
    displayName: 'ThemeRoot',
    tag: 'span'
});
/** A Theme Component. */
var Theme = function (_a) {
    var use = _a.use, wrap = _a.wrap, rest = __rest(_a, ["use", "wrap"]);
    if (wrap) {
        return Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["wrapChild"])(__assign({}, rest, { className: Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["parseThemeOptions"])(use).join(' ') }));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ThemeRoot, __assign({ theme: use }, rest));
};
Theme.displayName = 'Theme';
/** A ThemeProvider. This sets theme colors for its child tree. */
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prevOpts_ = '';
        _this.colors_ = {};
        return _this;
    }
    Object.defineProperty(ThemeProvider.prototype, "colors", {
        get: function () {
            var _this = this;
            // implement some caching to prevent the color checking from being called over and over again.
            var parsed = JSON.stringify(this.props.options);
            if (parsed !== this.prevOpts_) {
                this.prevOpts_ = parsed;
                var processedColors = Object.keys(this.props.options).reduce(function (acc, key) {
                    var val = _this.props.options[key];
                    key = key.startsWith('--') ? key : "--mdc-theme-" + Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_1__["toDashCase"])(key);
                    acc[key] = val;
                    return acc;
                }, {});
                this.colors_ = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getAutoColorsForTheme"])(processedColors);
            }
            return this.colors_;
        },
        enumerable: true,
        configurable: true
    });
    ThemeProvider.prototype.render = function () {
        var _a = this.props, options = _a.options, _b = _a.style, style = _b === void 0 ? {} : _b, wrap = _a.wrap, rest = __rest(_a, ["options", "style", "wrap"]);
        // Casting styles to avoid TSX error
        var tsxSafeStyle = style;
        var themeStyles = __assign({}, tsxSafeStyle, this.colors);
        if (wrap && rest.children) {
            var child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(rest.children);
            if (!react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](child)) {
                return;
            }
            var childStyle = child.props.style || {};
            return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, __assign({}, child.props, rest, { style: __assign({}, themeStyles, childStyle) }));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", __assign({}, rest, { style: themeStyles }));
    };
    ThemeProvider.displayName = 'ThemeProvider';
    return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "../node_modules/@rmwc/theme/next/utils.js":
/*!*************************************************!*\
  !*** ../node_modules/@rmwc/theme/next/utils.js ***!
  \*************************************************/
/*! exports provided: getRgb, isDark, getAutoColorsForTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRgb", function() { return getRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDark", function() { return isDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutoColorsForTheme", function() { return getAutoColorsForTheme; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var colorMap = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    'indianred ': '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgrey: '#d3d3d3',
    lightgreen: '#90ee90',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370d8',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#d87093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    transparent: '#ffffff',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
};
var nameToHex = function (name) { return colorMap[name] || name; };
var hexToRgb = function (hex) {
    if (hex.length === 4) {
        hex = hex + hex.slice(1);
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : {
            r: 0,
            g: 0,
            b: 0
        };
};
var luminance = function (r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
var contrast = function (rgb1, rgb2) {
    return ((luminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05) /
        (luminance(rgb2[0], rgb2[1], rgb2[2]) + 0.05));
};
var getRgb = function (color) {
    color = nameToHex(color);
    return hexToRgb(color);
};
var isDark = function (color) {
    var _a = getRgb(color), r = _a.r, g = _a.g, b = _a.b;
    var ratio = contrast([255, 255, 255], [r, g, b]);
    return ratio > 3 ? false : true;
};
var paletteMap = {
    '--mdc-theme-primary': [['--mdc-theme-on-primary', 0]],
    '--mdc-theme-surface': [['--mdc-theme-on-surface', 0]],
    '--mdc-theme-secondary': [['--mdc-theme-on-secondary', 0]],
    '--mdc-theme-background': [
        ['--mdc-theme-text-primary-on-background', 0],
        ['--mdc-theme-text-secondary-on-background', 1],
        ['--mdc-theme-text-hint-on-background', 2],
        ['--mdc-theme-text-disabled-on-background', 2],
        ['--mdc-theme-text-icon-on-background', 2]
    ]
};
var lightTextPalette = [
    'rgba(0, 0, 0, 0.87)',
    'rgba(0, 0, 0, 0.54)',
    'rgba(0, 0, 0, 0.38)'
];
var darkTextPalette = [
    'rgba(255, 255, 255, 1)',
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 0.5)'
];
var getAutoColorsForTheme = function (colors) {
    var autoColors = Object.keys(paletteMap).reduce(function (acc, key) {
        if (colors[key]) {
            var palette_1 = isDark(colors[key])
                ? lightTextPalette
                : darkTextPalette;
            paletteMap[key].forEach(function (k) {
                acc[k[0]] = palette_1[k[1]];
            });
        }
        return acc;
    }, {});
    return __assign({}, autoColors, colors);
};


/***/ }),

/***/ "../node_modules/@rmwc/typography/next/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@rmwc/typography/next/index.js ***!
  \******************************************************/
/*! exports provided: Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Typography; });
/* harmony import */ var _rmwc_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rmwc/base */ "../node_modules/@rmwc/base/next/index.js");

/** The Typography Component */
var Typography = Object(_rmwc_base__WEBPACK_IMPORTED_MODULE_0__["componentFactory"])({
    displayName: 'Typography',
    tag: 'span',
    classNames: function (props) {
        var _a;
        return [
            (_a = {},
                _a["mdc-typography--" + props.use] = props.use,
                _a)
        ];
    },
    consumeProps: ['use']
});


/***/ }),

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../node_modules/exenv/index.js":
/*!**************************************!*\
  !*** ../node_modules/exenv/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "../node_modules/focus-trap/index.js":
/*!*******************************************!*\
  !*** ../node_modules/focus-trap/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "../node_modules/tabbable/index.js");
var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "../node_modules/react-fast-compare/index.js":
/*!***************************************************!*\
  !*** ../node_modules/react-fast-compare/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "../node_modules/react-helmet/lib/Helmet.js":
/*!**************************************************!*\
  !*** ../node_modules/react-helmet/lib/Helmet.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "../node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(/*! react-fast-compare */ "../node_modules/react-fast-compare/index.js");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "../node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "../node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "../node_modules/react-helmet/lib/HelmetConstants.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-helmet/lib/HelmetConstants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "../node_modules/react-helmet/lib/HelmetUtils.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-helmet/lib/HelmetUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "../node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/webpack/buildin/global.js */ "../../.npm/_npx/2738/lib/node_modules/framer-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/react-side-effect/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/react-side-effect/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(/*! exenv */ "../node_modules/exenv/index.js"));
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js"));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "../node_modules/shallowequal/index.js":
/*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "../node_modules/tabbable/index.js":
/*!*****************************************!*\
  !*** ../node_modules/tabbable/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "../node_modules/xtend/immutable.js":
/*!******************************************!*\
  !*** ../node_modules/xtend/immutable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Button.tsx": "./code/Button.tsx",
	"./Chip.tsx": "./code/Chip.tsx",
	"./Elevation.tsx": "./code/Elevation.tsx",
	"./Fab.tsx": "./code/Fab.tsx",
	"./Icon.tsx": "./code/Icon.tsx",
	"./IconButton.tsx": "./code/IconButton.tsx",
	"./Input.tsx": "./code/Input.tsx",
	"./Toggle.tsx": "./code/Toggle.tsx",
	"./Tooltip.tsx": "./code/Tooltip.tsx",
	"./Typography.tsx": "./code/Typography.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./icons.ts": "./code/icons.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxtQ0FBc0Q7QUFPdEQsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQ2hELE1BQU07O1FBQ0osT0FBTyxvQkFBQyxNQUFNLENBQUMsTUFBTSxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDekM7O0FBRU0sbUJBQVksR0FBVTtJQUMzQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsUUFBUTtDQUNoQixDQUFBO0FBRU0sdUJBQWdCLEdBQTRCO0lBQ2pELDZEQUE2RDtJQUM3RCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNwRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUMxRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUMxRCxxREFBcUQ7SUFDckQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDMUQsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDdEQsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDdEQsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7SUFDakUsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7Q0FDL0QsQ0FBQTtBQXhCSCx3QkF5QkM7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Button extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Button, Object.assign({}, this.props));
    }
}
Button.defaultProps = {
    width: 150,
    height: 48,
    disabled: false,
    label: "Button"
};
Button.propertyControls = {
    // children: { type: ControlType.String, title: "Children" },
    dense: { type: framer_1.ControlType.Boolean, title: "Dense" },
    disabled: { type: framer_1.ControlType.Boolean, title: "Disabled" },
    selected: { type: framer_1.ControlType.Boolean, title: "Selected" },
    // icon: { type: ControlType.String, title: "Icon" },
    label: { type: framer_1.ControlType.String, title: "Label" },
    outlined: { type: framer_1.ControlType.Boolean, title: "Outlined" },
    raised: { type: framer_1.ControlType.Boolean, title: "Raised" },
    ripple: { type: framer_1.ControlType.Boolean, title: "Ripple" },
    trailingIcon: { type: framer_1.ControlType.String, title: "TrailingIcon" },
    unelevated: { type: framer_1.ControlType.Boolean, title: "Unelevated" },
};
exports.Button = Button;
exports.__info__ = [{ name: "Button", children: false, type: "component" }];


/***/ }),

/***/ "./code/Chip.tsx":
/*!***********************!*\
  !*** ./code/Chip.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ2hpcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsOENBQTZDO0FBQzdDLG1DQUFzRDtBQU90RCxNQUFhLElBQUssU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDOUMsTUFBTTs7UUFDSixPQUFPLG9CQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUN2Qzs7QUFFTSxpQkFBWSxHQUFVO0lBQzNCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUE7QUFFTSxxQkFBZ0IsR0FBaUM7SUFDdEQsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDNUQsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDbEQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDOUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDMUQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7Q0FDbkUsQ0FBQTtBQWxCSCxvQkFtQkM7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Chip extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Chip, Object.assign({}, this.props));
    }
}
Chip.defaultProps = {
    width: 150,
    height: 48,
    label: "label",
};
Chip.propertyControls = {
    checkmark: { type: framer_1.ControlType.Boolean, title: "Checkmark" },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    id: { type: framer_1.ControlType.String, title: "Id" },
    label: { type: framer_1.ControlType.String, title: "Label" },
    selected: { type: framer_1.ControlType.Boolean, title: "Selected" },
    trailingIcon: { type: framer_1.ControlType.String, title: "TrailingIcon" },
};
exports.Chip = Chip;
exports.__info__ = [{ name: "Chip", children: false, type: "component" }];


/***/ }),

/***/ "./code/Elevation.tsx":
/*!****************************!*\
  !*** ./code/Elevation.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9FbGV2YXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxtQ0FBc0Q7QUFPdEQsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQ25ELE1BQU07O1FBQ0osT0FBTyxvQkFBQyxNQUFNLENBQUMsU0FBUyxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDNUM7O0FBRU0sc0JBQVksR0FBVTtJQUMzQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsQ0FBQyxFQUFFLENBQUM7Q0FDTCxDQUFBO0FBRU0sMEJBQWdCLEdBQWlDO0lBQ3RELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ2xELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO0lBQy9ELENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzNDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ3RELENBQUE7QUFoQkgsOEJBaUJDO0FBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Elevation extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Elevation, Object.assign({}, this.props));
    }
}
Elevation.defaultProps = {
    width: 150,
    height: 48,
    z: 1,
};
Elevation.propertyControls = {
    wrap: { type: framer_1.ControlType.Boolean, title: "Wrap" },
    transition: { type: framer_1.ControlType.Boolean, title: "Transition" },
    z: { type: framer_1.ControlType.Number, title: "Z" },
    height: { type: framer_1.ControlType.String, title: "Height" },
};
exports.Elevation = Elevation;
exports.__info__ = [{ name: "Elevation", children: false, type: "component" }];


/***/ }),

/***/ "./code/Fab.tsx":
/*!**********************!*\
  !*** ./code/Fab.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9GYWIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxtQ0FBc0Q7QUFPdEQsTUFBYSxHQUFJLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQzdDLE1BQU07O1FBQ0osT0FBTyxvQkFBQyxNQUFNLENBQUMsR0FBRyxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDdEM7O0FBRU0sZ0JBQVksR0FBVTtJQUMzQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFBO0FBRU0sb0JBQWdCLEdBQTRCO0lBQ2pELDZEQUE2RDtJQUM3RCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUN0RCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNqRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNuRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNsRCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUN0RCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtDQUVuRSxDQUFBO0FBcEJILGtCQXFCQztBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Fab extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Fab, Object.assign({}, this.props));
    }
}
Fab.defaultProps = {
    width: 150,
    height: 48,
    label: "Fab"
};
Fab.propertyControls = {
    // children: { type: ControlType.String, title: "Children" },
    exited: { type: framer_1.ControlType.Boolean, title: "Exited" },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    label: { type: framer_1.ControlType.String, title: "Label" },
    mini: { type: framer_1.ControlType.Boolean, title: "Mini" },
    ripple: { type: framer_1.ControlType.Boolean, title: "Ripple" },
    trailingIcon: { type: framer_1.ControlType.String, title: "Trailing Icon" },
};
exports.Fab = Fab;
exports.__info__ = [{ name: "Fab", children: false, type: "component" }];


/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsOENBQTZDO0FBQzdDLG1DQUFzRDtBQU90RCxNQUFhLElBQUssU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDOUMsTUFBTTs7UUFDSixPQUFPLG9CQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUN2Qzs7QUFFTSxpQkFBWSxHQUFVO0lBQzNCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUE7QUFFTSxxQkFBZ0IsR0FBNEI7SUFDakQsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDbEQsQ0FBQTtBQWJILG9CQWNDO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Icon extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Icon, Object.assign({}, this.props));
    }
}
Icon.defaultProps = {
    width: 150,
    height: 48,
    icon: "star"
};
Icon.propertyControls = {
    icon: { type: framer_1.ControlType.String, title: "Icon" }
};
exports.Icon = Icon;
exports.__info__ = [{ name: "Icon", children: false, type: "component" }];


/***/ }),

/***/ "./code/IconButton.tsx":
/*!*****************************!*\
  !*** ./code/IconButton.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbkJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsOENBQTZDO0FBQzdDLG1DQUFzRDtBQU90RCxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDcEQsTUFBTTs7UUFDSixPQUFPLG9CQUFDLE1BQU0sQ0FBQyxVQUFVLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUM3Qzs7QUFFTSx1QkFBWSxHQUFVO0lBQzNCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFBO0FBRU0sMkJBQWdCLEdBQTRCO0lBQ2pELDZEQUE2RDtJQUM3RCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUMxRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNqRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNuRCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtDQUN2RCxDQUFBO0FBaEJILGdDQWlCQztBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class IconButton extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.IconButton, Object.assign({}, this.props));
    }
}
IconButton.defaultProps = {
    width: 150,
    height: 48,
};
IconButton.propertyControls = {
    // children: { type: ControlType.String, title: "Children" },
    disabled: { type: framer_1.ControlType.Boolean, title: "Disabled" },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    label: { type: framer_1.ControlType.String, title: "Label" },
    ripple: { type: framer_1.ControlType.Boolean, title: "Ripple" },
};
exports.IconButton = IconButton;
exports.__info__ = [{ name: "IconButton", children: false, type: "component" }];


/***/ }),

/***/ "./code/Input.tsx":
/*!************************!*\
  !*** ./code/Input.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5Qiw4Q0FBNkM7QUFDN0MsbUNBQXNEO0FBV3RELE1BQWEsS0FBTSxTQUFRLEtBQUssQ0FBQyxTQUF1QjtJQUF4RDs7UUFDRSxVQUFLLEdBQUc7WUFDTixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUE7UUFFRCxpQkFBWSxHQUFHLEtBQUssQ0FBQyxFQUFFOztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtTQUM3QyxDQUFBO0lBeUJILENBQUM7SUF2QkMsTUFBTTs7UUFDSixPQUFPLENBQ0wsb0JBQUMsTUFBTSxDQUFDLEtBQUssb0JBQ1AsSUFBSSxDQUFDLEtBQUssSUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxJQUMzQixDQUNILENBQUE7S0FDRjs7QUFFTSxrQkFBWSxHQUFVO0lBQzNCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxLQUFLO0lBQ1osV0FBVyxFQUFFLE9BQU87Q0FDckIsQ0FBQTtBQUVNLHNCQUFnQixHQUE0QjtJQUNqRCxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUMvRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUMxRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtDQUNyRCxDQUFBO0FBL0JILHNCQWdDQztBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: null
        };
        this.handleChange = event => {
            window["__checkBudget__"]();
            this.setState({ value: event.target.value });
        };
    }
    render() {
        window["__checkBudget__"]();
        return (React.createElement(System.Input, Object.assign({}, this.props, { value: this.state.value, onChange: this.handleChange })));
    }
}
Input.defaultProps = {
    width: 150,
    height: 50,
    disabled: false,
    error: false,
    placeholder: "Email"
};
Input.propertyControls = {
    placeholder: { type: framer_1.ControlType.String, title: "Placeholder" },
    disabled: { type: framer_1.ControlType.Boolean, title: "Disabled" },
    error: { type: framer_1.ControlType.Boolean, title: "Error" }
};
exports.Input = Input;
exports.__info__ = [{ name: "Input", children: false, type: "component" }];


/***/ }),

/***/ "./code/Toggle.tsx":
/*!*************************!*\
  !*** ./code/Toggle.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Ub2dnbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxtQ0FBc0Q7QUFXdEQsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBQXpEOztRQUNFLFVBQUssR0FBRztZQUNOLEVBQUUsRUFBRSxLQUFLO1NBQ1YsQ0FBQTtRQUVELGdCQUFXLEdBQUcsR0FBRyxFQUFFOztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDLENBQUE7SUFxQkgsQ0FBQztJQW5CQyxNQUFNOztRQUNKLE9BQU8sQ0FDTCxvQkFBQyxNQUFNLENBQUMsTUFBTSxvQkFDUixJQUFJLENBQUMsS0FBSyxJQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQ3pCLENBQ0gsQ0FBQTtLQUNGOztBQUVNLG1CQUFZLEdBQVU7SUFDM0IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUE7QUFFTSx1QkFBZ0IsR0FBNEI7SUFDakQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Q0FDM0QsQ0FBQTtBQTNCSCx3QkE0QkM7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Toggle extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            on: false
        };
        this.handleClick = () => {
            window["__checkBudget__"]();
            this.setState({ on: !this.state.on });
        };
    }
    render() {
        window["__checkBudget__"]();
        return (React.createElement(System.Toggle, Object.assign({}, this.props, { on: this.state.on, onClick: this.handleClick })));
    }
}
Toggle.defaultProps = {
    width: 64,
    height: 36,
    disabled: false
};
Toggle.propertyControls = {
    disabled: { type: framer_1.ControlType.Boolean, title: "Disabled" }
};
exports.Toggle = Toggle;
exports.__info__ = [{ name: "Toggle", children: false, type: "component" }];


/***/ }),

/***/ "./code/Tooltip.tsx":
/*!**************************!*\
  !*** ./code/Tooltip.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVG9vbHRpcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsOENBQTZDO0FBQzdDLG1DQUFzRDtBQVN0RCxNQUFhLE9BQVEsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDakQsTUFBTTs7UUFDSixNQUFNLGVBQStCLEVBQS9CLEVBQUUsSUFBSSxPQUF5QixFQUF2Qiw0QkFBdUIsQ0FBQTtRQUNyQyxPQUFPLG9CQUFDLE1BQU0sQ0FBQyxPQUFPLG9CQUFLLEtBQUssR0FBRyxJQUFJLENBQWtCLENBQUE7S0FDMUQ7O0FBRU0sb0JBQVksR0FBVTtJQUMzQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixLQUFLLEVBQUUsTUFBTTtJQUNiLEtBQUssRUFBRSxLQUFLO0NBQ2IsQ0FBQTtBQUVNLHdCQUFnQixHQUE0QjtJQUNqRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNqRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO1FBQy9CLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUMzQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDbEMsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUNELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0NBQ3JELENBQUE7QUF2QkgsMEJBd0JDO0FBQ0QifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Tooltip extends React.Component {
    render() {
        window["__checkBudget__"]();
        const _a = this.props, { text } = _a, props = __rest(_a, ["text"]);
        return React.createElement(System.Tooltip, Object.assign({}, props), text);
    }
}
Tooltip.defaultProps = {
    width: 122,
    height: 24,
    text: "This is a cool feature",
    arrow: "left",
    error: false
};
Tooltip.propertyControls = {
    text: { type: framer_1.ControlType.String, title: "Text" },
    arrow: {
        type: framer_1.ControlType.SegmentedEnum,
        options: ["top", "right", "bottom", "left"],
        optionTitles: ["T", "R", "B", "L"],
        title: "Arrow"
    },
    error: { type: framer_1.ControlType.Boolean, title: "Error" }
};
exports.Tooltip = Tooltip;
exports.__info__ = [{ name: "Tooltip", children: false, type: "component" }];


/***/ }),

/***/ "./code/Typography.tsx":
/*!*****************************!*\
  !*** ./code/Typography.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwb2dyYXBoeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYXBoeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsOENBQTZDO0FBQzdDLG1DQUFzRDtBQUt0RCxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDcEQsTUFBTTs7UUFDSixPQUFPLG9CQUFDLE1BQU0sQ0FBQyxVQUFVLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUM3Qzs7QUFFTSx1QkFBWSxHQUFVO0lBQzNCLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQTtBQUVNLDJCQUFnQixHQUE0QjtJQUNqRCxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMvQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtDQUNsRCxDQUFBO0FBYkgsZ0NBY0M7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const System = __webpack_require__(/*! ../../design-system */ "../design-system/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Typography extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(System.Typography, Object.assign({}, this.props));
    }
}
Typography.defaultProps = {
    use: "headline6",
    text: "Text"
};
Typography.propertyControls = {
    use: { type: framer_1.ControlType.String, title: "Use" },
    text: { type: framer_1.ControlType.String, title: "Text" }
};
exports.Typography = Typography;
exports.__info__ = [{ name: "Typography", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./code/icons.ts":
/*!***********************!*\
  !*** ./code/icons.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2ljb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUFxQztBQUNyQyxtQ0FBbUM7QUFJdEIsUUFBQSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbkUsUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsUUFBUSxFQUFFLGlCQUFTLENBQUMsQ0FBQyxDQUFDO0NBQ3ZCLENBQUM7QUFDVyxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsaUJBQVM7S0FDbkI7Q0FDRixDQUFDO0FBRUYsU0FBZ0IsY0FBYyxDQUFDLFFBQWdCLEVBQUUsS0FBSyxHQUFHLEVBQUU7O0lBQ3pELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUMsbUJBQ00sS0FBSyxJQUNSLEtBQUssb0JBQ0EsS0FBSyxDQUFDLEtBQUssSUFDZCxRQUFRLEVBQUUsVUFBVSxFQUNwQixTQUFTLEVBQUUsZ0JBQWdCLE9BR2pDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDVixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztDQUNyRTtBQWJELHdDQWFDO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Canvas = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
exports.iconNames = Object.keys(Canvas).filter(n => n.startsWith("Icon_"));
exports.iconDefaultProps = {
    width: 24,
    height: 24,
    iconName: exports.iconNames[0]
};
exports.iconPropertyControls = {
    iconName: {
        type: framer_1.ControlType.Enum,
        title: "Icon",
        options: exports.iconNames
    }
};
function getIconElement(iconName, props = {}) {
    window["__checkBudget__"]();
    const IconComp = Canvas[iconName];
    const actualProps = Canvas[iconName]
        ? Object.assign({}, props, { style: Object.assign({}, props.style, { position: "relative", transform: "translate(0,0)" }) }) : props;
    return IconComp ? React.createElement(IconComp, actualProps) : null;
}
exports.getIconElement = getIconElement;
exports.__info__ = [];


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.10","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-junit":"^5.2.0","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, version, dependencies, framer, author, name, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10"},"peerDependencies":{"framer":"^0.10","react":"^16.3.0","react-dom":"^16.3.0"},"version":"1.6.0","dependencies":{"styled-components":"^4.2.0"},"framer":{"id":"7c15e4fe-2858-41e1-b306-c66029e297e7","displayName":"Design System V2"},"author":"Lincoln Mitchell","name":"@framer/interfacesncreatives.design-system-v2"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_object_assign__;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});