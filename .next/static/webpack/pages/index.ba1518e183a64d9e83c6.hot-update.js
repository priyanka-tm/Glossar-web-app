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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");




var url = "/product";
var getProduct_url = 'product/get-all';

var renderUrl = function renderUrl(url, limit, category) {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


var fetchProductsData = function fetchProductsData() {
  var endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJyZW5kZXJQYXJhbSIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJBUElfVVJMIiwicXVlcnkiLCJwYWdlIiwic29ydCIsIm9yZGVyIiwicSIsImNvbG9yIiwic2l6ZSIsInRhZyIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsImZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEiLCJmZXRjaERhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaFByb2R1Y3REZXRhaWxEYXRhIiwic2x1ZyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsVUFBWjtBQUNBLElBQU1DLGNBQWMsR0FBRyxpQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsR0FBRCxFQUFNRyxLQUFOLEVBQWFDLFFBQWIsRUFBMEI7QUFDMUMsU0FDRUosR0FBRyxHQUFHLEdBQU4sR0FBWUssaUVBQVcsQ0FBQyxRQUFELEVBQVdGLEtBQVgsQ0FBdkIsR0FBMkNFLGlFQUFXLENBQUMsVUFBRCxFQUFhRCxRQUFiLENBRHhEO0FBR0QsQ0FKRCxDLENBTUE7OztBQUNPLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQyxNQUFJQyxRQUFRLEdBQ1ZMLFNBQVMsQ0FBQ00sdURBQU8sR0FBR1IsR0FBWCxFQUFlUyxLQUFLLENBQUNOLEtBQXJCLEVB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LDREQUFZLENBQUNDLEdBQWIsQ0FBaUJYLFFBQWpCLENBQVA7QUFDRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhMTUxOGUxODNhNjRkOWU4M2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL3V0aWxzL2NvbW1vblwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xyXG5jb25zdCBnZXRQcm9kdWN0X3VybCA9ICdwcm9kdWN0L2dldC1hbGwnXHJcblxyXG5jb25zdCByZW5kZXJVcmwgPSAodXJsLCBsaW1pdCwgY2F0ZWdvcnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBsaW1pdCkgKyByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIGNhdGVnb3J5KVxyXG4gICk7XHJcbn07XHJcblxyXG4vL0ZldGNoIGxpc3Qgb2YgcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNEYXRhID0gKCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICByZW5kZXJVcmwoQVBJX1VSTCArIHVybCxxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfcGFnZVwiLCBxdWVyeS5wYWdlKSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfb3JkZXJcIiwgcXVlcnkuc29ydC5vcmRlcikgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LnEpICtcclxuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcclxuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuc2l6ZVwiLCBxdWVyeS5zaXplKSArXHJcbiAgICByZW5kZXJQYXJhbShcInRhZ19saWtlXCIsIHF1ZXJ5LnRhZyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHByb2R1Y3QgZGV0YWlsXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInNsdWdcIiwgc2x1Zyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLy9GZXRjaCBzZXJjaGVkIHByb2R1Y3QgYnkgcXVlcnlcclxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICBBUElfVVJMICtcclxuICAgIHVybCArXHJcbiAgICBcIj9cIiArXHJcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkuaW5wdXQpICtcclxuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIHF1ZXJ5LmxpbWl0KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=