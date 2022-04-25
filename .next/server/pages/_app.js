module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/common */ "./src/utils/common.js");





const url = "/cart";
const url1 = '/cart/create';
const url2 = '/cart/user-get';
const url3 = '/cart/update';
const fetchCartData = () => {
  // let endpoint = cartId ? API_URL + url + `/${cartId}` : API_URL + url;
  let endpoint = _utils_common__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + url2;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint, {
    headers: {
      'Authorization': Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["getToken"])()
    }
  });
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  console.log('data:====== ', Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["getToken"])(), data); // let endpoint = API_URL + url;

  let endpoint = _utils_common__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + url1;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data, {
    headers: {
      'Authorization': Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["getToken"])()
    }
  });
};
const removeCartData = cartId => {
  let endpoint = _utils_common__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + url3;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].put(endpoint, cartId, {
    headers: {
      'Authorization': Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["getToken"])()
    }
  });
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/common */ "./src/utils/common.js");




const url = "/wishlist";
const url1 = '/fevorite/create';
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  console.log('data: ', data); // let endpoint = BASE_URL + url1;

  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url, headers = {}) {
    return this.instance.get(url, headers);
  }

  post(url, body, headers = {}) {
    console.log('headers: ', headers);
    return this.instance.post(url, body, headers);
  }

  patch(url, body, headers = {}) {
    return this.instance.patch(url, body, headers);
  }

  delete(url) {
    return this.instance.delete(url);
  }

  put(url, body, headers = {}) {
    return this.instance.put(url, body, headers);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "INR") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "E:\\clg-project\\Glossar-web-app\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ "./src/components/other/FetchInitData.js":
/*!***********************************************!*\
  !*** ./src/components/other/FetchInitData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchInitData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");




function FetchInitData({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["fetchCartRequest"])());
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__["fetchWishListRequest"])());
  }, []);
  return children;
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
/* harmony import */ var _components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/other/FetchInitData */ "./src/components/other/FetchInitData.js");
var _jsxFileName = "E:\\clg-project\\Glossar-web-app\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import Loading from "../components/other/Loading";




const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__["default"])(App));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      let {
        data
      } = res.data;
      dispatch(fetchCartSuccess([data]));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/reducers/blogFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/blogFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/blogReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/blogReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  allPosts: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  recentPosts: {
    loading: true,
    data: [],
    error: false
  },
  postDetail: {
    loading: true,
    data: [],
    error: false
  }
};
function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = [];
function compareReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");
/* harmony import */ var _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopFilterReducer */ "./src/redux/reducers/shopFilterReducer.js");
/* harmony import */ var _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogFilterReducer */ "./src/redux/reducers/blogFilterReducer.js");
/* harmony import */ var _blogReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogReducer */ "./src/redux/reducers/blogReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogFilterReducer: _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  blogReducer: _blogReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  shopFilterReducer: _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  compareReducer: _compareReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/shopFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sort
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        show: action.show
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        color: action.color
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: action.size
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  saleProducts: {
    loading: true,
    data: [],
    error: false
  },
  featuredProducts: {
    loading: true,
    data: [],
    error: false
  },
  bestSellerProducts: {
    loading: true,
    data: [],
    error: false
  },
  daleProducts: {
    loading: true,
    data: [],
    error: false
  },
  productDetail: {
    loading: true,
    data: [],
    error: false
  },
  searchedProducts: {
    loading: true,
    data: [],
    error: false
  }
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.totalCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WISHLISTReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");




const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: BASE_URL, getUser, getEmail, getData, getToken, removeUserSession, setUserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserSession", function() { return removeUserSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserSession", function() { return setUserSession; });
// export const BASE_URL = 'https://web-glooser.herokuapp.com/api/app';
const BASE_URL = 'http://192.168.1.9:12000/api/app';
const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);else return null;
};
const getEmail = () => {
  const userEmail = sessionStorage.getItem('user_email');
  if (userEmail) return JSON.parse(userEmail);else return null;
};
const getData = () => {
  const userData = sessionStorage.getItem('data');
  if (userData) return JSON.parse(userData);else return null;
}; // return the token from the session storage

const getToken = () => {
  return sessionStorage.getItem('token') || null;
}; // remove the token and user from the session storage

const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('user_email');
}; // set the token and user from the session storage

const setUserSession = (token, user, email, phone, data) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
  sessionStorage.setItem('user_email', JSON.stringify(email));
  sessionStorage.setItem('user_phone', JSON.stringify(phone));
  sessionStorage.setItem('data', JSON.stringify(data));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsidXJsIiwidXJsMSIsInVybDIiLCJ1cmwzIiwiZmV0Y2hDYXJ0RGF0YSIsImVuZHBvaW50IiwiQkFTRV9VUkwiLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwiQVBJX1VSTCIsInJlbmRlclBhcmFtIiwiYWRkQ2FydERhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJyZW1vdmVDYXJ0RGF0YSIsImNhcnRJZCIsInB1dCIsInVwZGF0ZUNhcnREYXRhIiwicGF0Y2giLCJmZXRjaFdpc2hsaXN0RGF0YSIsImZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhIiwiYWRkV2lzaGxpc3REYXRhIiwicmVtb3ZlV2lzaGxpc3REYXRhIiwiZGVsZXRlIiwiQXhpb3NTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5IiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsImxvY2FsZXMiLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsInBhcmFtTmFtZSIsInBhcmFtVmFsdWUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImlucHV0Rm9ybWF0Iiwib3V0cHV0Rm9ybWF0IiwibW9tZW50IiwicmVtb3ZlRGFzaCIsInN0ciIsInJlcGxhY2UiLCJpc1NlcnZlciIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsIndpbmRvdyIsIndpdGhSZWR1eFN0b3IiLCJBcHAiLCJBcHBXaXRoUmVkdXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJyZWR1eFN0b3JlIiwiY3R4IiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwicHJvcHMiLCJyZW5kZXIiLCJGZXRjaEluaXREYXRhIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hDYXJ0UmVxdWVzdCIsImZldGNoV2lzaExpc3RSZXF1ZXN0IiwicGFnZVByb3BzIiwid2l0aFJlZHV4U3RvcmUiLCJTSE9QIiwiRkVUQ0hfUFJPRFVDVFMiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1NBTEVfUFJPRFVDVFMiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0RBTEVfUFJPRFVDVFMiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFMiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCIsIkJMT0ciLCJGRVRDSF9QT1NUUyIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTCIsIkZFVENIX1JFQ0VOVF9QT1NUUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUwiLCJTSE9QX0ZJTFRFUiIsIlJFU0VUX0ZJTFRFUlMiLCJTRVRfU09SVCIsIlNFVF9TSE9XIiwiU0VUX1ZJRVciLCJTRVRfQ0FURUdPUlkiLCJTRVRfQ09MT1IiLCJTRVRfU0laRSIsIlNFVF9UQUciLCJDQVJUIiwiRkVUQ0hfQ0FSVCIsIkZFVENIX0NBUlRfU1VDQ0VTUyIsIkZFVENIX0NBUlRfRkFJTCIsIldJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVF9TVUNDRVNTIiwiRkVUQ0hfV0lTSExJU1RfRkFJTCIsIkNPTVBBUkUiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9GUk9NX0NPTVBBUkUiLCJCTE9HX0ZJTFRFUiIsImZldGNoQ2FydCIsInR5cGUiLCJmZXRjaENhcnRTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoQ2FydEZhaWwiLCJlcnIiLCJjYXJ0QXBpcyIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImZldGNoV2lzaExpc3QiLCJmZXRjaFdpc2hMaXN0U3VjY2VzcyIsImZldGNoV2lzaExpc3RGYWlsIiwid2lzaGxpc3RBcGlzIiwiY2F0ZWdvcnkiLCJ0YWciLCJibG9nRmlsdGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiYWxsUG9zdHMiLCJsb2FkaW5nIiwiY291bnQiLCJyZWNlbnRQb3N0cyIsInBvc3REZXRhaWwiLCJibG9nUmVkdWNlciIsInBvc3RDb3VudCIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVJlZHVjZXIiLCJpbmNsdWRlcyIsImxlZ3RoIiwic2xpY2UiLCJjb21wYXJlSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJwcm9kdWN0SWQiLCJjb21wYXJlSXRlbUluZGV4IiwiaW5kZXhPZiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic2hvcFJlZHVjZXIiLCJzaG9wRmlsdGVyUmVkdWNlciIsIndpc2hsaXN0UmVkdWNlciIsInNvcnQiLCJzaG93IiwidmlldyIsImNvbG9yIiwic2l6ZSIsInByb2R1Y3RzIiwic2FsZVByb2R1Y3RzIiwiZmVhdHVyZWRQcm9kdWN0cyIsImJlc3RTZWxsZXJQcm9kdWN0cyIsImRhbGVQcm9kdWN0cyIsInByb2R1Y3REZXRhaWwiLCJzZWFyY2hlZFByb2R1Y3RzIiwidG90YWxDb3VudCIsInByb2R1Y3RDb3VudCIsIldJU0hMSVNUUmVkdWNlciIsImNyZWF0ZWRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiZ2V0VXNlciIsInVzZXJTdHIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJnZXRFbWFpbCIsInVzZXJFbWFpbCIsImdldERhdGEiLCJ1c2VyRGF0YSIsInJlbW92ZVVzZXJTZXNzaW9uIiwicmVtb3ZlSXRlbSIsInNldFVzZXJTZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiZW1haWwiLCJwaG9uZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FB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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnLi8uLi91dGlscy9jb21tb24nO1xyXG5pbXBvcnQge2dldFRva2VufSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5cclxuY29uc3QgdXJsID0gXCIvY2FydFwiO1xyXG5jb25zdCB1cmwxID0gJy9jYXJ0L2NyZWF0ZSdcclxuY29uc3QgdXJsMiA9ICcvY2FydC91c2VyLWdldCdcclxuY29uc3QgdXJsMyA9ICcvY2FydC91cGRhdGUnXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RGF0YSA9ICgpID0+IHtcclxuICAvLyBsZXQgZW5kcG9pbnQgPSBjYXJ0SWQgPyBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gIDogQVBJX1VSTCArIHVybDtcclxuICBsZXQgZW5kcG9pbnQgPSAgQkFTRV9VUkwgKyB1cmwyO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50LCB7IGhlYWRlcnM6IHtcclxuICAgICdBdXRob3JpemF0aW9uJzogZ2V0VG9rZW4oKSxcclxuICB9fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInByb2R1Y3RJZFwiLCBwaWQpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXJ0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2RhdGE6PT09PT09ICcsIGdldFRva2VuKCksIGRhdGEpO1xyXG4gIC8vIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XHJcbiAgbGV0IGVuZHBvaW50ID0gQkFTRV9VUkwgKyB1cmwxO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSwgeyBoZWFkZXJzOiB7XHJcbiAgICAnQXV0aG9yaXphdGlvbic6IGdldFRva2VuKCksXHJcbiAgfX0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEJBU0VfVVJMICsgdXJsMztcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnB1dChlbmRwb2ludCwgY2FydElkLCB7IGhlYWRlcnM6IHtcclxuICAgICdBdXRob3JpemF0aW9uJzogZ2V0VG9rZW4oKSxcclxuICB9fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydERhdGEgPSAoY2FydElkLCBkYXRhKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJy4vLi4vdXRpbHMvY29tbW9uJztcclxuXHJcbmNvbnN0IHVybCA9IFwiL3dpc2hsaXN0XCI7XHJcbmNvbnN0IHVybDEgPSAnL2Zldm9yaXRlL2NyZWF0ZSdcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hsaXN0RGF0YSA9ICgpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcImlkXCIsIHBpZCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpO1xyXG4gIC8vIGxldCBlbmRwb2ludCA9IEJBU0VfVVJMICsgdXJsMTtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7cGlkfWA7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcclxuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCwgaGVhZGVycyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQodXJsLCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBib2R5LCBoZWFkZXJzID0ge30pIHtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXJzOiAnLCBoZWFkZXJzKTtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnBvc3QodXJsLCBib2R5LCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gIHBhdGNoKHVybCwgYm9keSwgaGVhZGVycyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHksIGhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHVybCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVsZXRlKHVybCk7XHJcbiAgfVxyXG5cclxuICBwdXQodXJsLCBib2R5LCBoZWFkZXJzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnB1dCh1cmwsIGJvZHksIGhlYWRlcnMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF4aW9zU2VydmljZSgpO1xyXG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9vZ2FtaS1hcGkuaGVyb2t1YXBwLmNvbVwiO1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIklOUlwiKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxyXG4gIH0pLmZvcm1hdChwcmljZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUGFyYW0gPSAocGFyYW1OYW1lLCBwYXJhbVZhbHVlKSA9PiB7XHJcbiAgaWYgKHBhcmFtVmFsdWUgJiYgcGFyYW1WYWx1ZSAhPT0gXCJcIiAmJiBwYXJhbVZhbHVlICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gYCYke3BhcmFtTmFtZX09JHtwYXJhbVZhbHVlfWA7XHJcbiAgfVxyXG4gIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoXHJcbiAgZGF0ZSxcclxuICBpbnB1dEZvcm1hdCA9IFwiWVlZWS1NTS1ERFwiLFxyXG4gIG91dHB1dEZvcm1hdCA9IFwiTU1NIERELCBZWVlZXCJcclxuKSA9PiB7XHJcbiAgcmV0dXJuIG1vbWVudChkYXRlLCBpbnB1dEZvcm1hdCkuZm9ybWF0KG91dHB1dEZvcm1hdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRGFzaCA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplU3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgc3RvcmUgaWYgdW5hdmFpbGFibGUgb24gdGhlIGNsaWVudCBhbmQgc2V0IGl0IG9uIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XHJcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVkdXhTdG9yKEFwcCkge1xyXG4gIHJldHVybiBjbGFzcyBBcHBXaXRoUmVkdXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XHJcbiAgICAgIC8vIEdldCBvciBDcmVhdGUgdGhlIHN0b3JlIHdpdGggYHVuZGVmaW5lZGAgYXMgaW5pdGlhbFN0YXRlXHJcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcclxuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKTtcclxuXHJcbiAgICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xyXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZTtcclxuXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFdpc2hMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hJbml0RGF0YSh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XHJcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYW50ZC5sZXNzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuc2Nzc1wiO1xyXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9Mb2FkaW5nXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vY29tbW9uL3dpdGhSZWR1eFN0b3JlXCI7XHJcbmltcG9ydCBGZXRjaEluaXREYXRhIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGFcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgPEZldGNoSW5pdERhdGE+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0ZldGNoSW5pdERhdGE+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShBcHApO1xyXG4iLCJleHBvcnQgY29uc3QgU0hPUCA9IHtcclxuICBGRVRDSF9QUk9EVUNUUzogXCJGRVRDSF9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVFNfRkFJTFwiLFxyXG4gIEZFVENIX1NBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcclxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFM6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNcIixcclxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcclxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTFwiLFxyXG4gIEZFVENIX0RBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcclxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxcIixcclxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIixcclxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUxcIixcclxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJMT0cgPSB7XHJcbiAgRkVUQ0hfUE9TVFM6IFwiRkVUQ0hfUE9TVFNcIixcclxuICBGRVRDSF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIixcclxuICBGRVRDSF9QT1NUU19GQUlMOiBcIkZFVENIX1BPU1RTX0ZBSUxcIixcclxuICBGRVRDSF9QT1NUX0RFVEFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTFwiLFxyXG4gIEZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BPU1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTFwiLFxyXG4gIEZFVENIX1JFQ0VOVF9QT1NUUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNcIixcclxuICBGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19GQUlMOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0hPUF9GSUxURVIgPSB7XHJcbiAgUkVTRVRfRklMVEVSUzogXCJSRVNFVF9GSUxURVJTXCIsXHJcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcclxuICBTRVRfU0hPVzogXCJTRVRfU0hPV1wiLFxyXG4gIFNFVF9WSUVXOiBcIlNFVF9WSUVXXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9DT0xPUjogXCJTRVRfQ09MT1JcIixcclxuICBTRVRfU0laRTogXCJTRVRfU0laRVwiLFxyXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XHJcbiAgRkVUQ0hfQ0FSVDogXCJGRVRDSF9DQVJUXCIsXHJcbiAgRkVUQ0hfQ0FSVF9TVUNDRVNTOiBcIkZFVENIX0NBUlRfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0NBUlRfRkFJTDogXCJGRVRDSF9DQVJUX0ZBSUxcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcclxuICBGRVRDSF9XSVNITElTVDogXCJGRVRDSF9XSVNITElTVFwiLFxyXG4gIEZFVENIX1dJU0hMSVNUX1NVQ0NFU1M6IFwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1dJU0hMSVNUX0ZBSUw6IFwiRkVUQ0hfV0lTSExJU1RfRkFJTFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSB7XHJcbiAgQUREX1RPX0NPTVBBUkU6IFwiQUREX1RPX0NPTVBBUkVcIixcclxuICBSRU1PVkVfRlJPTV9DT01QQVJFOiBcIlJFTU9WRV9GUk9NX0NPTVBBUkVcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCTE9HX0ZJTFRFUiA9IHtcclxuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXHJcbn07XHJcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmltcG9ydCAqIGFzIGNhcnRBcGlzIGZyb20gXCIuLi8uLi9hcGlzL2NhcnRcIjtcclxuXHJcbi8vR2V0IGNhcnQgZGF0YVxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBDQVJULkZFVENIX0NBUlQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBDQVJULkZFVENIX0NBUlRfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydEZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoQ2FydCgpKTtcclxuICAgIGNhcnRBcGlzXHJcbiAgICAgIC5mZXRjaENhcnREYXRhKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB7ZGF0YX0gPSByZXMuZGF0YVxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFN1Y2Nlc3MoW2RhdGFdKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0RmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmltcG9ydCAqIGFzIHdpc2hsaXN0QXBpcyBmcm9tIFwiLi4vLi4vYXBpcy93aXNobGlzdFwiO1xyXG5cclxuLy9HZXQgY2FydCBkYXRhXHJcbmNvbnN0IGZldGNoV2lzaExpc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNULFxyXG59KTtcclxuXHJcbmNvbnN0IGZldGNoV2lzaExpc3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaExpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XHJcbiAgICB3aXNobGlzdEFwaXNcclxuICAgICAgLmZldGNoV2lzaGxpc3REYXRhKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdEZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IEJMT0dfRklMVEVSIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgdGFnOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ0ZpbHRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQkxPR19GSUxURVIuUkVTRVRfRklMVEVSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICB0YWc6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEJMT0dfRklMVEVSLlNFVF9DQVRFR09SWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5TRVRfVEFHOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhZzogYWN0aW9uLnRhZyxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQkxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGFsbFBvc3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXHJcbiAgcmVjZW50UG9zdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIHBvc3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIC8vQWxsIHBvc3RzXHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsUG9zdHM6IHtcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsUG9zdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmFsbFBvc3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnBvc3RDb3VudCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWxsUG9zdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmFsbFBvc3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9SZWNlbnQgcG9zdHNcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5yZWNlbnRQb3N0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wb3N0Q291bnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZWNlbnRQb3N0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucmVjZW50UG9zdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1Bvc3QgZGV0YWlsXHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zdERldGFpbDogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3N0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wb3N0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3N0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wb3N0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcnRSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQ0FSVC5GRVRDSF9DQVJUX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTVBBUkUgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ09NUEFSRS5BRERfVE9fQ09NUEFSRTpcclxuICAgICAgaWYgKCFzdGF0ZS5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5kYXRhKSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5sZWd0aCA8PSAzKSB7XHJcbiAgICAgICAgICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLmRhdGEsIC4uLnN0YXRlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZC5kYXRhLCAuLi5zdGF0ZS5zbGljZSgwLCAyKV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBjYXNlIENPTVBBUkUuUkVNT1ZFX0ZST01fQ09NUEFSRTpcclxuICAgICAgY29uc3QgY29tcGFyZUl0ZW0gPSBzdGF0ZS5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0SWRcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tcGFyZUl0ZW1JbmRleCA9IGNvbXBhcmVJdGVtICYmIHN0YXRlLmluZGV4T2YoY29tcGFyZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGNvbXBhcmVJdGVtSW5kZXgpLFxyXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKGNvbXBhcmVJdGVtSW5kZXggKyAxKSxcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFJlZHVjZXJcIjtcclxuaW1wb3J0IGNvbXBhcmVSZWR1Y2VyIGZyb20gXCIuL2NvbXBhcmVSZWR1Y2VyXCI7XHJcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSBcIi4vd2lzaGxpc3RSZWR1Y2VyXCI7XHJcbmltcG9ydCBzaG9wUmVkdWNlciBmcm9tIFwiLi9zaG9wUmVkdWNlclwiO1xyXG5pbXBvcnQgc2hvcEZpbHRlclJlZHVjZXIgZnJvbSBcIi4vc2hvcEZpbHRlclJlZHVjZXJcIjtcclxuaW1wb3J0IGJsb2dGaWx0ZXJSZWR1Y2VyIGZyb20gXCIuL2Jsb2dGaWx0ZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBibG9nUmVkdWNlciBmcm9tIFwiLi9ibG9nUmVkdWNlclwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGJsb2dGaWx0ZXJSZWR1Y2VyLFxyXG4gIGJsb2dSZWR1Y2VyLFxyXG4gIHNob3BSZWR1Y2VyLFxyXG4gIHNob3BGaWx0ZXJSZWR1Y2VyLFxyXG4gIGNvbXBhcmVSZWR1Y2VyLFxyXG4gIGNhcnRSZWR1Y2VyLFxyXG4gIHdpc2hsaXN0UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgU0hPUF9GSUxURVIgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzb3J0OiB7fSxcclxuICBzaG93OiBcIjEwXCIsXHJcbiAgdmlldzogXCJncmlkXCIsXHJcbiAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgY29sb3I6IFwiXCIsXHJcbiAgc2l6ZTogXCJcIixcclxuICB0YWc6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wRmlsdGVyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5SRVNFVF9GSUxURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNvcnQ6IHt9LFxyXG4gICAgICAgIHNob3c6IFwiMTBcIixcclxuICAgICAgICB2aWV3OiBcImdyaWRcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjb2xvcjogXCJcIixcclxuICAgICAgICBzaXplOiBcIlwiLFxyXG4gICAgICAgIHRhZzogXCJcIixcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NPUlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc29ydDogYWN0aW9uLnNvcnQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TSE9XOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNob3c6IGFjdGlvbi5zaG93LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfVklFVzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aWV3OiBhY3Rpb24udmlldyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX0NBVEVHT1JZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcnksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9DT0xPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU0laRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaXplOiBhY3Rpb24uc2l6ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1RBRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YWc6IGFjdGlvbi50YWcsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxyXG4gIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgZmVhdHVyZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgYmVzdFNlbGxlclByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIHByb2R1Y3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIHNlYXJjaGVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIC8vQWxsIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NhbGUgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9GZWF0dXJlZCBwcm9kdWN0c1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vQmVzdCBzZWxsZXIgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5iZXN0U2VsbGVyUHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuYmVzdFNlbGxlclByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9EYWxlIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vUHJvZHVjdCBkZXRhaWxcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NlYXJjaGVkIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2hlZFByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb3VudCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2VhcmNoZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vRGVmYXVsIGNhc2VcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0lTSExJU1RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZWRTdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcclxuICByZXR1cm4gY3JlYXRlZFN0b3JlO1xyXG59O1xyXG4iLCIvLyBleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly93ZWItZ2xvb3Nlci5oZXJva3VhcHAuY29tL2FwaS9hcHAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuOToxMjAwMC9hcGkvYXBwJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclN0ciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGlmICh1c2VyU3RyKSByZXR1cm4gSlNPTi5wYXJzZSh1c2VyU3RyKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuICBleHBvcnQgY29uc3QgZ2V0RW1haWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2VtYWlsJyk7XHJcbiAgICBpZiAodXNlckVtYWlsKSByZXR1cm4gSlNPTi5wYXJzZSh1c2VyRW1haWwpO1xyXG4gICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkYXRhJyk7XHJcbiAgICBpZiAodXNlckRhdGEpIHJldHVybiBKU09OLnBhcnNlKHVzZXJEYXRhKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuICAvLyByZXR1cm4gdGhlIHRva2VuIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8IG51bGw7XHJcbiAgfTtcclxuICAvLyByZW1vdmUgdGhlIHRva2VuIGFuZCB1c2VyIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCByZW1vdmVVc2VyU2Vzc2lvbiA9ICgpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyX2VtYWlsJyk7XHJcbiAgfTtcclxuICAvLyBzZXQgdGhlIHRva2VuIGFuZCB1c2VyIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCBzZXRVc2VyU2Vzc2lvbiA9ICh0b2tlbiwgdXNlciwgZW1haWwsIHBob25lLCBkYXRhKSA9PiB7XHJcbiAgIFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9lbWFpbCcsIEpTT04uc3RyaW5naWZ5KGVtYWlsKSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyX3Bob25lJywgSlNPTi5zdHJpbmdpZnkocGhvbmUpKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=