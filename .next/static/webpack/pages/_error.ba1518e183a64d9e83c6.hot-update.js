webpackHotUpdate_N_E("pages/_error",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJyZW5kZXJQYXJhbSIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJBUElfVVJMIiwicXVlcnkiLCJwYWdlIiwic29ydCIsIm9yZGVyIiwicSIsImNvbG9yIiwic2l6ZSIsInRhZyIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsImZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEiLCJmZXRjaERhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaFByb2R1Y3REZXRhaWxEYXRhIiwic2x1ZyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsVUFBWjtBQUNBLElBQU1DLGNBQWMsR0FBRyxpQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsR0FBRCxFQUFNRyxLQUFOLEVBQWFDLFFBQWIsRUFBMEI7QUFDMUMsU0FDRUosR0FBRyxHQUFHLEdBQU4sR0FBWUssaUVBQVcsQ0FBQyxRQUFELEVBQVdGLEtBQVgsQ0FBdkIsR0FBMkNFLGlFQUFXLENBQUMsVUFBRCxFQUFhRCxRQUFiLENBRHhEO0FBR0QsQ0FKRCxDLENBTUE7OztBQUNPLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQyxNQUFJQyxRQUFRLEdBQ1ZMLFNBQVMsQ0FBQ00sdURBQU8sR0FBR1IsR0FBWCxFQUFlUyxLQUFLLENBQUNOLEtBQXJCLEVB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LDREQUFZLENBQUNDLEdBQWIsQ0FBaUJYLFFBQWpCLENBQVA7QUFDRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci5iYTE1MThlMTgzYTY0ZDllODNjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi91dGlscy9jb21tb25cIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL3Byb2R1Y3RcIjtcclxuY29uc3QgZ2V0UHJvZHVjdF91cmwgPSAncHJvZHVjdC9nZXQtYWxsJ1xyXG5cclxuY29uc3QgcmVuZGVyVXJsID0gKHVybCwgbGltaXQsIGNhdGVnb3J5KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgbGltaXQpICsgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBjYXRlZ29yeSlcclxuICApO1xyXG59O1xyXG5cclxuLy9GZXRjaCBsaXN0IG9mIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9ICgpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPVxyXG4gICAgcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwscXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICAgIHJlbmRlclBhcmFtKFwiX3BhZ2VcIiwgcXVlcnkucGFnZSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfc29ydFwiLCBxdWVyeS5zb3J0LnNvcnQpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX29yZGVyXCIsIHF1ZXJ5LnNvcnQub3JkZXIpICtcclxuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5xKSArXHJcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLmNvbG9yXCIsIHF1ZXJ5LmNvbG9yKSArXHJcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLnNpemVcIiwgcXVlcnkuc2l6ZSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJ0YWdfbGlrZVwiLCBxdWVyeS50YWcpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLy9GZXRjaCBwcm9kdWN0IGRldGFpbFxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSA9IChzbHVnKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbi8vRmV0Y2ggc2VyY2hlZCBwcm9kdWN0IGJ5IHF1ZXJ5XHJcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPVxyXG4gICAgQVBJX1VSTCArXHJcbiAgICB1cmwgK1xyXG4gICAgXCI/XCIgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LmlucHV0KSArXHJcbiAgICByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIHF1ZXJ5LmNhdGVnb3J5KSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBxdWVyeS5saW1pdCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9