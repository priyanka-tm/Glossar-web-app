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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRQcm9kdWN0X3VybCIsInJlbmRlclVybCIsImZldGNoUHJvZHVjdHNEYXRhIiwiZW5kcG9pbnQiLCJCQVNFX1VSTCIsImF4aW9zU2VydmljZSIsImdldCIsImZldGNoU2FsZVByb2R1Y3RzRGF0YSIsInF1ZXJ5IiwiQVBJX1VSTCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJyZW5kZXJQYXJhbSIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsVUFBWjtBQUNBLElBQU1DLGNBQWMsR0FBRyxpQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsR0FBRCxFQUFTO0FBQ3pCLFNBQ0VBLEdBREY7QUFHRCxDQUpELEMsQ0FNQTs7O0FBQ08sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLE1BQUlDLFFBQVEsR0FDVkYsU0FBUyxDQUFDRyxzREFBUSxHQUFHSixjQUFaLENBRFgsQ0FEcUMsQ0FHbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0YsU0FBT0ssNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBWE07QUFhQSxJQUFNSSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBVztBQUM5QyxNQUFJTCxRQUFRLEdBQUdGLFNBQVMsQ0FBQ1EsdURBQU8sR0FBR1YsR0FBWCxFQUFnQlMsS0FBSyxDQUFDRSxLQUF0QixFQUE2QkYsS0FBSyxDQUFDRyxRQUFuQyxDQUF4QjtBQUNBLFNBQU9OLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsSUFBTVMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDSixLQUFELEVBQVc7QUFDbEQsTUFBSUwsUUFBUSxHQUFHRixTQUFTLENBQUNRLHVEQUFPLEdBQUdWLEdBQVgsRUFBZ0JTLEtBQUssQ0FBQ0UsS0FBdEIsRUFBNkJGLEtBQUssQ0FBQ0csUUFBbkMsQ0FBeEI7QUFDQSxTQUFPTiw0REFBWSxDQUFDQyxHQUFiLENBQWlCSCxRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLElBQU1VLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0wsS0FBRCxFQUFXO0FBQ3BELE1BQUlMLFFBQVEsR0FBR0YsU0FBUyxDQUFDUSx1REFBTyxHQUFHVixHQUFYLEVBQWdCUyxLQUFLLENBQUNFLEtBQXRCLEVBQTZCRixLQUFLLENBQUNHLFFBQW5DLENBQXhCO0FBQ0EsU0FBT04sNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxJQUFNVyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNOLEtBQUQsRUFBVztBQUM5QyxNQUFJTCxRQUFRLEdBQUdGLFNBQVMsQ0FBQ1EsdURBQU8sR0FBR1YsR0FBWCxFQUFnQlMsS0FBSyxDQUFDRSxLQUF0QixFQUE2QkYsS0FBSyxDQUFDRyxRQUFuQyxDQUF4QjtBQUNBLFNBQU9OLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxJQUFNWSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLElBQUQsRUFBVTtBQUM5QyxNQUFJYixRQUFRLEdBQUdNLHVEQUFPLEdBQUdWLEdBQVYsR0FBZ0IsR0FBaEIsR0FBc0JrQixpRUFBVyxDQUFDLE1BQUQsRUFBU0QsSUFBVCxDQUFoRDtBQUNBLFNBQU9YLDREQUFZLENBQUNDLEdBQWIsQ0FBaUJILFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxJQUFNZSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNWLEtBQUQsRUFBVztBQUNqRCxNQUFJTCxRQUFRLEdBQ1ZNLHVEQUFPLEdBQ1BWLEdBREEsR0FFQSxHQUZBLEdBR0FrQixpRUFBVyxDQUFDLEdBQUQsRUFBTVQsS0FBSyxDQUFDVyxLQUFaLENBSFgsR0FJQUYsaUVBQVcsQ0FBQyxVQUFELEVBQWFULEtBQUssQ0FBQ0csUUFBbkIsQ0FKWCxHQUtBTSxpRUFBVyxDQUFDLFFBQUQsRUFBV1QsS0FBSyxDQUFDRSxLQUFqQixDQU5iO0FBT0EsU0FBT0wsNERBQVksQ0FBQ0MsR0FBYixDQUFpQkgsUUFBakIsQ0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjc0OTk2MTIyMzgxYmE3Nzk4OTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL3V0aWxzL2NvbW1vblwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xyXG5jb25zdCBnZXRQcm9kdWN0X3VybCA9ICdwcm9kdWN0L2dldC1hbGwnXHJcblxyXG5jb25zdCByZW5kZXJVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHVybCBcclxuICApO1xyXG59O1xyXG5cclxuLy9GZXRjaCBsaXN0IG9mIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9ICgpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPVxyXG4gICAgcmVuZGVyVXJsKEJBU0VfVVJMICsgZ2V0UHJvZHVjdF91cmwpO1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJfcGFnZVwiLCBxdWVyeS5wYWdlKSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJfb3JkZXJcIiwgcXVlcnkuc29ydC5vcmRlcikgK1xyXG4gICAgLy8gcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LnEpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcclxuICAgIC8vIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuc2l6ZVwiLCBxdWVyeS5zaXplKSArXHJcbiAgICAvLyByZW5kZXJQYXJhbShcInRhZ19saWtlXCIsIHF1ZXJ5LnRhZyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHByb2R1Y3QgZGV0YWlsXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInNsdWdcIiwgc2x1Zyk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLy9GZXRjaCBzZXJjaGVkIHByb2R1Y3QgYnkgcXVlcnlcclxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICBBUElfVVJMICtcclxuICAgIHVybCArXHJcbiAgICBcIj9cIiArXHJcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkuaW5wdXQpICtcclxuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIHF1ZXJ5LmxpbWl0KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=