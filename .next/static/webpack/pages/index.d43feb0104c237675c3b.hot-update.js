webpackHotUpdate_N_E("pages/index",{

/***/ "./src/apis/shop.js":
/*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
/*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsData", function() { return fetchProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsData", function() { return fetchSaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsData", function() { return fetchFeaturedProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsData", function() { return fetchBestSellerProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsData", function() { return fetchDaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailData", function() { return fetchProductDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductData", function() { return fetchSearchedProductData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



var url = "/product";

var renderUrl = function renderUrl(url, limit, category) {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


var fetchProductsData = function fetchProductsData(query) {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
var fetchSaleProductsData = function fetchSaleProductsData(query) {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
var fetchFeaturedProductsData = function fetchFeaturedProductsData(query) {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
var fetchBestSellerProductsData = function fetchBestSellerProductsData(query) {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
var fetchDaleProductsData = function fetchDaleProductsData(query) {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch product detail

var fetchProductDetailData = function fetchProductDetailData(slug) {
  var endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch serched product by query

var fetchSearchedProductData = function fetchSearchedProductData(query) {
  var endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.input) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", query.limit);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/other/FetchDataHandle.js":
/*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "E:\\clg-project\\Glossar-web-app\\src\\components\\other\\FetchDataHandle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FetchDataHandle(_ref) {
  var data = _ref.data,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === void 0 ? "Get products fail, please try again" : _ref$errorMessage,
      _ref$emptyDescription = _ref.emptyDescription,
      emptyDescription = _ref$emptyDescription === void 0 ? "No product in this category" : _ref$emptyDescription,
      renderData = _ref.renderData;
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
}
_c = FetchDataHandle;

var _c;

$RefreshReg$(_c, "FetchDataHandle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/httpClient/AxiosClient.js":
false,

/***/ "./src/httpClient/ClientHelper.js":
false,

/***/ "./src/httpClient/index.js":
false,

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderOne */ "./src/components/sections/hero-slider/HeroSliderOne.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/categories/CategoriesOne */ "./src/components/sections/categories/CategoriesOne.js");
/* harmony import */ var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json");
var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json", 1);
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionOne */ "./src/components/sections/introduction/IntroductionOne.js");
/* harmony import */ var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json");
var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json", 1);
/* harmony import */ var _components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/dale-of-week/DowOne */ "./src/components/sections/dale-of-week/DowOne.js");
/* harmony import */ var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json");
var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json", 1);
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/other/Container */ "./src/components/other/Container.js");


var _jsxFileName = "E:\\clg-project\\Glossar-web-app\\src\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    daleProducts: ""
  }),
      currentProductTabsCategory = _useState[0],
      setCurrentProductTabsCategory = _useState[1];

  var fetchDaleProductsRequest = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__["fetchDaleProductsRequest"];
  var shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.shopReducer;
  });
  var daleProducts = shopState.daleProducts;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8,
      category: currentProductTabsCategory.daleProducts
    }));
  }, [currentProductTabsCategory.daleProducts]);
  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Homepage 1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__["default"], {
    threeCol: true,
    style: {
      marginTop: -75 / 16 + "em",
      position: "relative",
      zIndex: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: daleProducts,
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6
    },
    onTabChange: function onTabChange(val) {
      return setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
        daleProducts: val
      }));
    },
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_11__.slice(0, 5).map(function (item) {
      return item.name;
    }),
    headerTitle: "Deal of the week",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(_components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx(_components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__.one,
    countdownLast: 100000000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })));
}

_s(Home, "ZVnS3X3eFsjXH/c2/7jCvVxqBco=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return fetchProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return fetchProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return fetchSaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return fetchSaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return fetchSaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return fetchSaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return fetchFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return fetchFeaturedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return fetchFeaturedProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return fetchFeaturedProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return fetchBestSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return fetchBestSellerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return fetchBestSellerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return fetchBestSellerProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return fetchDaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return fetchDaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return fetchDaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return fetchDaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return fetchProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return fetchProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return fetchProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return fetchProductDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return fetchSearchedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return fetchSearchedProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return fetchSearchedProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return fetchSearchedProductRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");

 //Get all products

var fetchProducts = function fetchProducts() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS
  };
};
var fetchProductsSuccess = function fetchProductsSuccess(data, productCount) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS,
    payload: {
      data: data,
      productCount: productCount
    }
  };
};
var fetchProductsFail = function fetchProductsFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchProductsRequest = function fetchProductsRequest(query) {
  return function (dispatch) {
    dispatch(fetchProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query).then(function (res) {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    })["catch"](function (err) {
      dispatch(fetchProductsFail(err));
    });
  };
}; //Get sale products

var fetchSaleProducts = function fetchSaleProducts() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS
  };
};
var fetchSaleProductsSuccess = function fetchSaleProductsSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchSaleProductsFail = function fetchSaleProductsFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchSaleProductsRequest = function fetchSaleProductsRequest(query) {
  return function (dispatch) {
    dispatch(fetchSaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](query).then(function (res) {
      dispatch(fetchSaleProductsSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchSaleProductsFail(err));
    });
  };
}; //Get featured products

var fetchFeaturedProducts = function fetchFeaturedProducts() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS
  };
};
var fetchFeaturedProductsSuccess = function fetchFeaturedProductsSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchFeaturedProductsFail = function fetchFeaturedProductsFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchFeaturedProductsRequest = function fetchFeaturedProductsRequest(query) {
  return function (dispatch) {
    dispatch(fetchFeaturedProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchFeaturedProductsData"](query).then(function (res) {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
}; //Get best seller products

var fetchBestSellerProducts = function fetchBestSellerProducts() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS
  };
};
var fetchBestSellerProductsSuccess = function fetchBestSellerProductsSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchBestSellerProductsFail = function fetchBestSellerProductsFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchBestSellerProductsRequest = function fetchBestSellerProductsRequest(query) {
  return function (dispatch) {
    dispatch(fetchBestSellerProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchBestSellerProductsData"](query).then(function (res) {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
}; //Get best seller products

var fetchDaleProducts = function fetchDaleProducts() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS
  };
};
var fetchDaleProductsSuccess = function fetchDaleProductsSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchDaleProductsFail = function fetchDaleProductsFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchDaleProductsRequest = function fetchDaleProductsRequest(query) {
  return function (dispatch) {
    dispatch(fetchDaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](query).then(function (res) {
      dispatch(fetchDaleProductsSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchDaleProductsFail(err));
    });
  };
}; //Get product detail

var fetchProductDetail = function fetchProductDetail() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL
  };
};
var fetchProductDetailSuccess = function fetchProductDetailSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchProductDetailFail = function fetchProductDetailFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchProductDetailRequest = function fetchProductDetailRequest(slug) {
  return function (dispatch) {
    dispatch(fetchProductDetail());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](slug).then(function (res) {
      dispatch(fetchProductDetailSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchProductDetailFail(err));
    });
  };
}; //Get searched product

var fetchSearchedProduct = function fetchSearchedProduct() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS
  };
};
var fetchSearchedProductSuccess = function fetchSearchedProductSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fetchSearchedProductFail = function fetchSearchedProductFail(err) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL,
    payload: {
      err: err
    }
  };
};
var fetchSearchedProductRequest = function fetchSearchedProductRequest(query) {
  return function (dispatch) {
    dispatch(fetchSearchedProduct());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](query).then(function (res) {
      dispatch(fetchSearchedProductSuccess(res.data));
    })["catch"](function (err) {
      dispatch(fetchSearchedProductFail(err));
    });
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/common.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hEYXRhSGFuZGxlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInVybCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJyZW5kZXJQYXJhbSIsImZldGNoUHJvZHVjdHNEYXRhIiwicXVlcnkiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJwYWdlIiwic29ydCIsIm9yZGVyIiwicSIsImNvbG9yIiwic2l6ZSIsInRhZyIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsImZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEiLCJmZXRjaERhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaFByb2R1Y3REZXRhaWxEYXRhIiwic2x1ZyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0IiwiRmV0Y2hEYXRhSGFuZGxlIiwiZGF0YSIsImVycm9yTWVzc2FnZSIsImVtcHR5RGVzY3JpcHRpb24iLCJyZW5kZXJEYXRhIiwibG9hZGluZyIsImVycm9yIiwibGVuZ3RoIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImRhbGVQcm9kdWN0cyIsImN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5Iiwic2V0Q3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkiLCJmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QiLCJzaG9wQWN0aW9ucyIsInNob3BTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlciIsInVzZUVmZmVjdCIsImhlcm9zbGlkZU9uZURhdGEiLCJvbmUiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsInpJbmRleCIsImNhdGVnb3JpZXNPbmVEYXRhIiwieHMiLCJzbSIsImxnIiwidmFsIiwiY2F0ZWdvcmllcyIsInNsaWNlIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpbnRyb2R1Y3Rpb25PbmVEYXRhIiwiZG93T25lRGF0YSIsImZldGNoUHJvZHVjdHMiLCJ0eXBlIiwiU0hPUCIsIkZFVENIX1BST0RVQ1RTIiwiZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MiLCJwcm9kdWN0Q291bnQiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwicGF5bG9hZCIsImZldGNoUHJvZHVjdHNGYWlsIiwiZXJyIiwiRkVUQ0hfUFJPRFVDVFNfRkFJTCIsImZldGNoUHJvZHVjdHNSZXF1ZXN0Iiwic2hvcEFwaXMiLCJ0aGVuIiwicmVzIiwiaGVhZGVycyIsImZldGNoU2FsZVByb2R1Y3RzIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsImZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsImZldGNoU2FsZVByb2R1Y3RzRmFpbCIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsImZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0cyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUyIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbCIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaERhbGVQcm9kdWN0cyIsIkZFVENIX0RBTEVfUFJPRFVDVFMiLCJmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJmZXRjaERhbGVQcm9kdWN0c0ZhaWwiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwiLCJmZXRjaFByb2R1Y3REZXRhaWwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTCIsImZldGNoUHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbCIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJmZXRjaFByb2R1Y3REZXRhaWxSZXF1ZXN0IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3QiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsImZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxVQUFaOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNELEdBQUQsRUFBTUUsS0FBTixFQUFhQyxRQUFiLEVBQTBCO0FBQzFDLFNBQ0VILEdBQUcsR0FBRyxHQUFOLEdBQVlJLGlFQUFXLENBQUMsUUFBRCxFQUFXRixLQUFY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QUksRUFBRUMsaURBQUksQ0FBQ2lEO0FBRDhCLEdBQVA7QUFBQSxDQUE3QjtBQUlBLElBQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQzVGLElBQUQ7QUFBQSxTQUFXO0FBQ3BEeUMsUUFBSSxFQUFFQyxpREFBSSxDQUFDbUQsK0JBRHlDO0FBRXBEOUMsV0FBTyxFQUFFO0FBQ1AvQyxVQUFJLEVBQUpBO0FBRE87QUFGMkMsR0FBWDtBQUFBLENBQXBDO0FBT0EsSUFBTThGLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQzdDLEdBQUQ7QUFBQSxTQUFVO0FBQ2hEUixRQUFJLEVBQUVDLGlEQUFJLENBQUNxRCw0QkFEcUM7QUFFaERoRCxXQUFPLEVBQUU7QUFDUEUsU0FBRyxFQUFIQTtBQURPO0FBRnVDLEdBQVY7QUFBQSxDQUFqQztBQU9BLElBQU0rQywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNySCxLQUFELEVBQVc7QUFDcEQsU0FBTyxVQUFDK0IsUUFBRCxFQUFjO0FBQ25CQSxZQUFRLENBQUNnRixvQkFBb0IsRUFBckIsQ0FBUjtBQUNBdEMsdUVBQUEsQ0FDNEJ6RSxLQUQ1QixFQUVHMEUsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiNUMsY0FBUSxDQUFDa0YsMkJBQTJCLENBQUN0QyxHQUFHLENBQUN0RCxJQUFMLENBQTVCLENBQVI7QUFDRCxLQUpILFdBS1MsVUFBQ2lELEdBQUQsRUFBUztBQUNkdkMsY0FBUSxDQUFDb0Ysd0JBQXdCLENBQUM3QyxHQUFELENBQXpCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDQzZmViMDEwNGMyMzc2NzVjM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL3Byb2R1Y3RcIjtcclxuXHJcbmNvbnN0IHJlbmRlclVybCA9ICh1cmwsIGxpbWl0LCBjYXRlZ29yeSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXHJcbiAgKTtcclxufTtcclxuXHJcbi8vRmV0Y2ggbGlzdCBvZiBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPVxyXG4gICAgcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfcGFnZVwiLCBxdWVyeS5wYWdlKSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfb3JkZXJcIiwgcXVlcnkuc29ydC5vcmRlcikgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LnEpICtcclxuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcclxuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuc2l6ZVwiLCBxdWVyeS5zaXplKSArXHJcbiAgICByZW5kZXJQYXJhbShcInRhZ19saWtlXCIsIHF1ZXJ5LnRhZyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHByb2R1Y3QgZGV0YWlsXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInNsdWdcIiwgc2x1Zyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLy9GZXRjaCBzZXJjaGVkIHByb2R1Y3QgYnkgcXVlcnlcclxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICBBUElfVVJMICtcclxuICAgIHVybCArXHJcbiAgICBcIj9cIiArXHJcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkuaW5wdXQpICtcclxuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIHF1ZXJ5LmxpbWl0KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24sIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoRGF0YUhhbmRsZSh7XHJcbiAgZGF0YSxcclxuICBlcnJvck1lc3NhZ2UgPSBcIkdldCBwcm9kdWN0cyBmYWlsLCBwbGVhc2UgdHJ5IGFnYWluXCIsXHJcbiAgZW1wdHlEZXNjcmlwdGlvbiA9IFwiTm8gcHJvZHVjdCBpbiB0aGlzIGNhdGVnb3J5XCIsXHJcbiAgcmVuZGVyRGF0YSxcclxufSkge1xyXG4gIHJldHVybiBkYXRhLmxvYWRpbmcgPyAoXHJcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XHJcbiAgKSA6IGRhdGEuZXJyb3IgPyAoXHJcbiAgICA8aDM+e2Vycm9yTWVzc2FnZX08L2gzPlxyXG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcclxuICAgIHJlbmRlckRhdGEgJiYgcmVuZGVyRGF0YShkYXRhLmRhdGEpXHJcbiAgKSA6IChcclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249e2VtcHR5RGVzY3JpcHRpb259XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNob3BBY3Rpb25zIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZVwiO1xyXG5pbXBvcnQgSGVyb1NsaWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyT25lXCI7XHJcbmltcG9ydCBoZXJvc2xpZGVPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2hlcm8tc2xpZGVyLmpzb25cIjtcclxuaW1wb3J0IEJlbmVmaXRzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0JlbmVmaXRzXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhdGVnb3JpZXMvQ2F0ZWdvcmllc09uZVwiO1xyXG5pbXBvcnQgY2F0ZWdvcmllc09uZURhdGEgZnJvbSBcIi4uL2RhdGEvc2VjdGlvbnMvY2F0ZWdvcmllcy5qc29uXCI7XHJcbmltcG9ydCBQcm9kdWN0VGFiIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Byb2R1Y3QtdGh1bWIvUHJvZHVjdFRhYlwiO1xyXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbk9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lXCI7XHJcbmltcG9ydCBpbnRyb2R1Y3Rpb25PbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2ludHJvZHVjdGlvbi5qc29uXCI7XHJcbmltcG9ydCBEb3dPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFsZS1vZi13ZWVrL0Rvd09uZVwiO1xyXG5pbXBvcnQgZG93T25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9kYWxlLW9mLXdlZWsuanNvblwiO1xyXG5pbXBvcnQgUGFydG5lck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wYXJ0bmVycy9QYXJ0bmVyT25lXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcclxuICAgIGRhbGVQcm9kdWN0czogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCB9ID0gc2hvcEFjdGlvbnM7XHJcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcbiAgY29uc3QgeyBkYWxlUHJvZHVjdHMgfSA9IHNob3BTdGF0ZTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDggfSkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCh7XHJcbiAgICAgICAgbGltaXQ6IDgsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0cyxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSwgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0c10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwiSG9tZXBhZ2UgMVwiPlxyXG4gICAgICA8SGVyb1NsaWRlck9uZSBkYXRhPXtoZXJvc2xpZGVPbmVEYXRhLm9uZX0gLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QmVuZWZpdHNcclxuICAgICAgICAgIHRocmVlQ29sXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC03NSAvIDE2ICsgXCJlbVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Q2F0ZWdvcmllc09uZSBkYXRhPXtjYXRlZ29yaWVzT25lRGF0YS5vbmV9IC8+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFByb2R1Y3RUYWJcclxuICAgICAgICAgIGRhdGE9e2RhbGVQcm9kdWN0c31cclxuICAgICAgICAgIHByb2R1Y3RDb2w9e3sgeHM6IDEyLCBzbTogOCwgbGc6IDYgfX1cclxuICAgICAgICAgIG9uVGFiQ2hhbmdlPXsodmFsKSA9PlxyXG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XHJcbiAgICAgICAgICAgICAgLi4uY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgZGFsZVByb2R1Y3RzOiB2YWwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWFkZXJDYXRlZ29yaWVzPXtjYXRlZ29yaWVzLnNsaWNlKDAsIDUpLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKX1cclxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiRGVhbCBvZiB0aGUgd2Vla1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxJbnRyb2R1Y3Rpb25PbmUgZGF0YT17aW50cm9kdWN0aW9uT25lRGF0YS5vbmV9IC8+XHJcbiAgICAgIDxEb3dPbmUgZGF0YT17ZG93T25lRGF0YS5vbmV9IGNvdW50ZG93bkxhc3Q9ezEwMDAwMDAwMH0gLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UGFydG5lck9uZSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTGF5b3V0T25lPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzaG9wQXBpcyBmcm9tIFwiLi4vLi4vYXBpcy9zaG9wXCI7XHJcblxyXG4vL0dldCBhbGwgcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHByb2R1Y3RDb3VudCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICAgIHByb2R1Y3RDb3VudCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUU19GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XHJcbiAgICBzaG9wQXBpc1xyXG4gICAgICAuZmV0Y2hQcm9kdWN0c0RhdGEocXVlcnkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSwgcmVzLmhlYWRlcnNbXCJ4LXRvdGFsLWNvdW50XCJdKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c0ZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vL0dldCBzYWxlIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0cyA9ICgpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoU2FsZVByb2R1Y3RzRGF0YShxdWVyeSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzRmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vR2V0IGZlYXR1cmVkIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHMoKSk7XHJcbiAgICBzaG9wQXBpc1xyXG4gICAgICAuZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YShxdWVyeSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMoKSk7XHJcbiAgICBzaG9wQXBpc1xyXG4gICAgICAuZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhKHF1ZXJ5KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHMoKSk7XHJcbiAgICBzaG9wQXBpc1xyXG4gICAgICAuZmV0Y2hEYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHNGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy9HZXQgcHJvZHVjdCBkZXRhaWxcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbCA9ICgpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbEZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsUmVxdWVzdCA9IChzbHVnKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoUHJvZHVjdERldGFpbERhdGEoc2x1ZylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbFN1Y2Nlc3MocmVzLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3REZXRhaWxGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy9HZXQgc2VhcmNoZWQgcHJvZHVjdFxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3QoKSk7XHJcbiAgICBzaG9wQXBpc1xyXG4gICAgICAuZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhKHF1ZXJ5KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9