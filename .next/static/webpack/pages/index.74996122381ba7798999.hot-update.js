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

var renderUrl = function renderUrl(url) {
  return url;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJCQVNFX1VSTCIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsInF1ZXJ5IiwiQVBJX1VSTCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJyZW5kZXJQYXJhbSIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsVUFBWjtBQUNBLElBQU1DLGNBQWMsR0FBRyxpQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsR0FBRCxFQUFTO0FBQ3pCLFNBQ0VBLEdBREY7QUFHRCxDQUpELEMsQ0FNQTs7O0FBQ08sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLE1BQUlDLFFBQVEsR0FDVkYsU0FBUyxDQUFDRyxzREFBUSxHQUFHSixjQUFaLENBRFgsQ0FEcUMsQ0FHbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0YsU0FBT0ssNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBWE07QUFhQSxJQUFNSSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBVztBQUM5QyxNQUFJTCxRQUFRLEdBQUdGLFNBQVMsQ0FBQ1EsdURBQU8sR0FBR1YsR0FBWCxFQUFnQlMsS0FBSyxDQUFDRSxLQUF0QixFQUE2QkYsS0FBSyxDQUFDRyxRQUFuQyxDQUF4QjtBQUNBLFNBQU9OLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsSUFBTVMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDSixLQUFELEVBQVc7QUFDbEQsTUFBSUwsUUFBUSxHQUFHRixTQUFTLENBQUNRLHVEQUFPLEdBQUdWLEdBQVgsRUFBZ0JTLEtBQUssQ0FBQ0UsS0FBdEIsRUFBNkJGLEtBQUssQ0FBQ0csUUFBbkMsQ0FBeEI7QUFDQSxTQUFPTiw0REFBWSxDQUFDQyxHQUFiLENBQWlCSCxRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLElBQU1VLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0wsS0FBRCxFQUFXO0FBQ3BELE1BQUlMLFFBQVEsR0FBR0YsU0FBUyxDQUFDUSx1REFBTyxHQUFHVixHQUFYLEVBQWdCUyxLQUFLLENBQUNFLEtBQXRCLEVBQTZCRixLQUFLLENBQUNHLFFBQW5DLENBQXhCO0FBQ0EsU0FBT04sNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxJQUFNVyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNOLEtBQUQsRUFBVztBQUM5QyxNQUFJTCxRQUFRLEdBQUdGLFNBQVMsQ0FBQ1EsdURBQU8sR0FBR1YsR0FBWCxFQUFnQlMsS0FBSyxDQUFDRSxLQUF0QixFQUE2QkYsS0FBSyxDQUFDRyxRQUFuQyxDQUF4QjtBQUNBLFNBQU9OLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxJQUFNWSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLElBQUQsRUFBVTtBQUM5QyxNQUFJYixRQUFRLEdBQUdNLHVEQUFPLEdBQUdWLEdBQVYsR0FBZ0IsR0FBaEIsR0FBc0JrQixpRUFBVyxDQUFDLE1BQUQsRUFBU0QsSUFBVCxDQUFoRDtBQUNBLFNBQU9YLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxJQUFNZSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNWLEtBQUQsRUFBVztBQUNqRCxNQUFJTCxRQUFRLEdBQ1ZNLHVEQUFPLEdBQ1BWLEdBREEsR0FFQSxHQUZBLEdBR0FrQixpRUFBVyxDQUFDLEdBQUQsRUFBTVQsS0FBSyxDQUFDVyxLQUFaLENBSFgsR0FJQUYsaUVBQVcsQ0FBQyxVQUFELEVBQWFULEtBQUssQ0FBQ0csUUFBbkIsQ0FKWCxHQUtBTSxpRUFBVyxDQUFDLFFBQUQsRUFBV1QsS0FBSyxDQUFDRSxLQUFqQixDQU5iO0FBT0EsU0FBT0wsNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ5OTYxMjIzODFiYTc3OTg5OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vdXRpbHMvY29tbW9uXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9wcm9kdWN0XCI7XHJcbmNvbnN0IGdldFByb2R1Y3RfdXJsID0gJ3Byb2R1Y3QvZ2V0LWFsbCdcclxuXHJcbmNvbnN0IHJlbmRlclVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgdXJsIFxyXG4gICk7XHJcbn07XHJcblxyXG4vL0ZldGNoIGxpc3Qgb2YgcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNEYXRhID0gKCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICByZW5kZXJVcmwoQkFTRV9VUkwgKyBnZXRQcm9kdWN0X3VybCk7XHJcbiAgICAvLyByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwiX3NvcnRcIiwgcXVlcnkuc29ydC5zb3J0KSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcIl9vcmRlclwiLCBxdWVyeS5zb3J0Lm9yZGVyKSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5jb2xvclwiLCBxdWVyeS5jb2xvcikgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5zaXplXCIsIHF1ZXJ5LnNpemUpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbERhdGEgPSAoc2x1ZykgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwic2x1Z1wiLCBzbHVnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID1cclxuICAgIEFQSV9VUkwgK1xyXG4gICAgdXJsICtcclxuICAgIFwiP1wiICtcclxuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBxdWVyeS5jYXRlZ29yeSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgcXVlcnkubGltaXQpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==