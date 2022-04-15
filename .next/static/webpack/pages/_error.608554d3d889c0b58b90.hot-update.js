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

var renderUrl = function renderUrl(url) {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


var fetchProductsData = function fetchProductsData() {
  var endpoint = renderUrl(_utils_common__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + getProduct_url); // renderParam("_page", query.page) +
  // renderParam("_sort", query.sort.sort) +
  // renderParam("_order", query.sort.order) +
  // renderParam("q", query.q) +
  // renderParam("specifications.color", query.color) +
  // renderParam("specifications.size", query.size) +
  // renderParam("tag_like", query.tag);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsInJlbmRlclBhcmFtIiwibGltaXQiLCJjYXRlZ29yeSIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJCQVNFX1VSTCIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsInF1ZXJ5IiwiQVBJX1VSTCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEiLCJmZXRjaERhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaFByb2R1Y3REZXRhaWxEYXRhIiwic2x1ZyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsVUFBWjtBQUNBLElBQU1DLGNBQWMsR0FBRyxpQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsR0FBRCxFQUFTO0FBQ3pCLFNBQ0VBLEdBQUcsR0FBRyxHQUFOLEdBQVlHLGlFQUFXLENBQUMsUUFBRCxFQUFXQyxLQUFYLENBQXZCLEdBQTJDRCxpRUFBVyxDQUFDLFVBQUQsRUFBYUUsUUFBYixDQUR4RDtBQUdELENBSkQsQyxDQU1BOzs7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckMsTUFBSUMsUUFBUSxHQUNWTCxTQUFTLENBQUNNLHNEQUFRLEdBQUdQLGNBQVosQ0FEWCxDQURxQyxDQUduQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRixTQUFPUSw0REFBWSxDQUFDQyxHQUFiLENBQWlCSCxRQUFqQixDQUFQO0FBQ0QsQ0FYTTtBQWFBLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlDLE1BQUlMLFFBQVEsR0FBR0wsU0FBUyxDQUFDVyx1REFBTyxHQUFHYixHQUFYLEVBQWdCWSxLQUFLLENBQUNSLEtBQXRCLEVBQTZCUSxLQUFLLENBQUNQLFFBQW5DLENBQXhCO0FBQ0EsU0FBT0ksNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxJQUFNTyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNGLEtBQUQsRUFBVztBQUNsRCxNQUFJTCxRQUFRLEdBQUdMLFNBQVMsQ0FBQ1csdURBQU8sR0FBR2IsR0FBWCxFQUFnQlksS0FBSyxDQUFDUixLQUF0QixFQUE2QlEsS0FBSyxDQUFDUCxRQUFuQyxDQUF4QjtBQUNBLFNBQU9JLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsSUFBTVEsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDSCxLQUFELEVBQVc7QUFDcEQsTUFBSUwsUUFBUSxHQUFHTCxTQUFTLENBQUNXLHVEQUFPLEdBQUdiLEdBQVgsRUFBZ0JZLEtBQUssQ0FBQ1IsS0FBdEIsRUFBNkJRLEtBQUssQ0FBQ1AsUUFBbkMsQ0FBeEI7QUFDQSxTQUFPSSw0REFBWSxDQUFDQyxHQUFiLENBQWlCSCxRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLElBQU1TLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0osS0FBRCxFQUFXO0FBQzlDLE1BQUlMLFFBQVEsR0FBR0wsU0FBUyxDQUFDVyx1REFBTyxHQUFHYixHQUFYLEVBQWdCWSxLQUFLLENBQUNSLEtBQXRCLEVBQTZCUSxLQUFLLENBQUNQLFFBQW5DLENBQXhCO0FBQ0EsU0FBT0ksNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBSE0sQyxDQUtQOztBQUNPLElBQU1VLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlDLE1BQUlYLFFBQVEsR0FBR00sdURBQU8sR0FBR2IsR0FBVixHQUFnQixHQUFoQixHQUFzQkcsaUVBQVcsQ0FBQyxNQUFELEVBQVNlLElBQVQsQ0FBaEQ7QUFDQSxTQUFPVCw0REFBWSxDQUFDQyxHQUFiLENBQWlCSCxRQUFqQixDQUFQO0FBQ0QsQ0FITSxDLENBS1A7O0FBQ08sSUFBTVksd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDUCxLQUFELEVBQVc7QUFDakQsTUFBSUwsUUFBUSxHQUNWTSx1REFBTyxHQUNQYixHQURBLEdBRUEsR0FGQSxHQUdBRyxpRUFBVyxDQUFDLEdBQUQsRUFBTVMsS0FBSyxDQUFDUSxLQUFaLENBSFgsR0FJQWpCLGlFQUFXLENBQUMsVUFBRCxFQUFhUyxLQUFLLENBQUNQLFFBQW5CLENBSlgsR0FLQUYsaUVBQVcsQ0FBQyxRQUFELEVBQVdTLEtBQUssQ0FBQ1IsS0FBakIsQ0FOYjtBQU9BLFNBQU9LLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci42MDg1NTRkM2Q4ODljMGI1OGI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi91dGlscy9jb21tb25cIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL3Byb2R1Y3RcIjtcclxuY29uc3QgZ2V0UHJvZHVjdF91cmwgPSAncHJvZHVjdC9nZXQtYWxsJ1xyXG5cclxuY29uc3QgcmVuZGVyVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXHJcbiAgKTtcclxufTtcclxuXHJcbi8vRmV0Y2ggbGlzdCBvZiBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0RhdGEgPSAoKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID1cclxuICAgIHJlbmRlclVybChCQVNFX1VSTCArIGdldFByb2R1Y3RfdXJsKTtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwiX3BhZ2VcIiwgcXVlcnkucGFnZSkgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJfc29ydFwiLCBxdWVyeS5zb3J0LnNvcnQpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwiX29yZGVyXCIsIHF1ZXJ5LnNvcnQub3JkZXIpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5xKSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLmNvbG9yXCIsIHF1ZXJ5LmNvbG9yKSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLnNpemVcIiwgcXVlcnkuc2l6ZSkgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJ0YWdfbGlrZVwiLCBxdWVyeS50YWcpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLy9GZXRjaCBwcm9kdWN0IGRldGFpbFxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSA9IChzbHVnKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbi8vRmV0Y2ggc2VyY2hlZCBwcm9kdWN0IGJ5IHF1ZXJ5XHJcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPVxyXG4gICAgQVBJX1VSTCArXHJcbiAgICB1cmwgK1xyXG4gICAgXCI/XCIgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LmlucHV0KSArXHJcbiAgICByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIHF1ZXJ5LmNhdGVnb3J5KSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBxdWVyeS5saW1pdCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9