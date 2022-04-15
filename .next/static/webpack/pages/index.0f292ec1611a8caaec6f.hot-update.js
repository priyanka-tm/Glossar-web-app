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
  var endpoint = renderUrl(_utils_common__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + getProduct_url, query.limit, query.category);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJyZW5kZXJQYXJhbSIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJCQVNFX1VSTCIsInF1ZXJ5IiwicGFnZSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJBUElfVVJMIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YSIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSIsImZldGNoRGFsZVByb2R1Y3RzRGF0YSIsImZldGNoUHJvZHVjdERldGFpbERhdGEiLCJzbHVnIiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxVQUFaO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGlCQUF2Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixHQUFELEVBQU1HLEtBQU4sRUFBYUMsUUFBYixFQUEwQjtBQUMxQyxTQUNFSixHQUFHLEdBQUcsR0FBTixHQUFZSyxpRUFBVyxDQUFDLFFBQUQsRUFBV0YsS0FBWCxDQUF2QixHQUEyQ0UsaUVBQVcsQ0FBQyxVQUFELEVBQWFELFFBQWIsQ0FEeEQ7QUFHRCxDQUpELEMsQ0FNQTs7O0FBQ08sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLE1BQUlDLFFBQVEsR0FDVkwsU0FBUyxDQUFDTSxzREFBUSxHQUFHUCxjQUFaLEVBQTJCUSxLQUFLLENB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TixLQUFqQixDQU5iO0FBT0EsU0FBT2MsNERBQVksQ0FBQ0MsR0FBYixDQUFpQlgsUUFBakIsQ0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGYyOTJlYzE2MTFhOGNhYWVjNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vdXRpbHMvY29tbW9uXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9wcm9kdWN0XCI7XHJcbmNvbnN0IGdldFByb2R1Y3RfdXJsID0gJ3Byb2R1Y3QvZ2V0LWFsbCdcclxuXHJcbmNvbnN0IHJlbmRlclVybCA9ICh1cmwsIGxpbWl0LCBjYXRlZ29yeSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXHJcbiAgKTtcclxufTtcclxuXHJcbi8vRmV0Y2ggbGlzdCBvZiBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0RhdGEgPSAoKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID1cclxuICAgIHJlbmRlclVybChCQVNFX1VSTCArIGdldFByb2R1Y3RfdXJsLHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgICByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX3NvcnRcIiwgcXVlcnkuc29ydC5zb3J0KSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9vcmRlclwiLCBxdWVyeS5zb3J0Lm9yZGVyKSArXHJcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5jb2xvclwiLCBxdWVyeS5jb2xvcikgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5zaXplXCIsIHF1ZXJ5LnNpemUpICtcclxuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbERhdGEgPSAoc2x1ZykgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwic2x1Z1wiLCBzbHVnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID1cclxuICAgIEFQSV9VUkwgK1xyXG4gICAgdXJsICtcclxuICAgIFwiP1wiICtcclxuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBxdWVyeS5jYXRlZ29yeSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgcXVlcnkubGltaXQpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==