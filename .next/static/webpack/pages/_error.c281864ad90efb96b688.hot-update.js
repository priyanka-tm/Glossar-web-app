webpackHotUpdate_N_E("pages/_error",{

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: BASE_URL, getUser, getEmail, getData, getToken, removeUserSession, setUserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserSession", function() { return removeUserSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserSession", function() { return setUserSession; });
// export const BASE_URL = 'https://web-glooser.herokuapp.com/api/app';
var BASE_URL = 'http://192.168.1.9:12000/api/app';
var getUser = function getUser() {
  var userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);else return null;
};
var getEmail = function getEmail() {
  var userEmail = sessionStorage.getItem('user_email');
  if (userEmail) return JSON.parse(userEmail);else return null;
};
var getData = function getData() {
  var userData = sessionStorage.getItem('data');
  if (userData) return JSON.parse(userData);else return null;
}; // return the token from the session storage

var getToken = function getToken() {
  return sessionStorage.getItem('token') || null;
}; // remove the token and user from the session storage

var removeUserSession = function removeUserSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('user_email');
}; // set the token and user from the session storage

var setUserSession = function setUserSession(token, user, email, phone, data) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
  sessionStorage.setItem('user_email', JSON.stringify(email));
  sessionStorage.setItem('user_phone', JSON.stringify(phone));
  sessionStorage.setItem('data', JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImdldFVzZXIiLCJ1c2VyU3RyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZ2V0RW1haWwiLCJ1c2VyRW1haWwiLCJnZXREYXRhIiwidXNlckRhdGEiLCJnZXRUb2tlbiIsInJlbW92ZVVzZXJTZXNzaW9uIiwicmVtb3ZlSXRlbSIsInNldFVzZXJTZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiZW1haWwiLCJwaG9uZSIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLGtDQUFqQjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDekIsTUFBTUMsT0FBTyxHQUFHQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQSxNQUFJRixPQUFKLEVBQWEsT0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQVgsQ0FBUCxDQUFiLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKSTtBQUtFLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDNUIsTUFBTUMsU0FBUyxHQUFHTCxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxNQUFJSSxTQUFKLEVBQWUsT0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFNBQVgsQ0FBUCxDQUFmLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKTTtBQUtBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxHQUFHUCxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxNQUFJTSxRQUFKLEVBQWMsT0FBT0wsSUFBSSxDQUFDQyxLQUFMLENBQVdJLFFBQVgsQ0FBUCxDQUFkLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKTSxDLENBS1A7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUM1QixTQUFPUixjQUFjLENBQUNDLE9BQWYsQ0FBdUIsT0FBdkIsS0FBbUMsSUFBMUM7QUFDRCxDQUZNLEMsQ0FHUDs7QUFDTyxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckNULGdCQUFjLENBQUNVLFVBQWYsQ0FBMEIsT0FBMUI7QUFDQVYsZ0JBQWMsQ0FBQ1UsVUFBZixDQUEwQixNQUExQjtBQUNBVixnQkFBYyxDQUFDVSxVQUFmLENBQTBCLFlBQTFCO0FBQ0QsQ0FKTSxDLENBS1A7O0FBQ08sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBY0MsS0FBZCxFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLEVBQXFDO0FBRWpFaEIsZ0JBQWMsQ0FBQ2lCLE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0NMLEtBQWhDO0FBQ0FaLGdCQUFjLENBQUNpQixPQUFmLENBQXVCLE1BQXZCLEVBQStCZixJQUFJLENBQUNnQixTQUFMLENBQWVMLElBQWYsQ0FBL0I7QUFDQWIsZ0JBQWMsQ0FBQ2lCLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUNmLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZUosS0FBZixDQUFyQztBQUNBZCxnQkFBYyxDQUFDaUIsT0FBZixDQUF1QixZQUF2QixFQUFxQ2YsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlSCxLQUFmLENBQXJDO0FBQ0FmLGdCQUFjLENBQUNpQixPQUFmLENBQXVCLE1BQXZCLEVBQStCZixJQUFJLENBQUNnQixTQUFMLENBQWVGLElBQWYsQ0FBL0I7QUFDRCxDQVBNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci5jMjgxODY0YWQ5MGVmYjk2YjY4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vd2ViLWdsb29zZXIuaGVyb2t1YXBwLmNvbS9hcGkvYXBwJztcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjk6MTIwMDAvYXBpL2FwcCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJTdHIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBpZiAodXNlclN0cikgcmV0dXJuIEpTT04ucGFyc2UodXNlclN0cik7XHJcbiAgICBlbHNlIHJldHVybiBudWxsO1xyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGdldEVtYWlsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9lbWFpbCcpO1xyXG4gICAgaWYgKHVzZXJFbWFpbCkgcmV0dXJuIEpTT04ucGFyc2UodXNlckVtYWlsKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuICBleHBvcnQgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSByZXR1cm4gSlNPTi5wYXJzZSh1c2VyRGF0YSk7XHJcbiAgICBlbHNlIHJldHVybiBudWxsO1xyXG4gIH07XHJcbiAgLy8gcmV0dXJuIHRoZSB0b2tlbiBmcm9tIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICBleHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBudWxsO1xyXG4gIH07XHJcbiAgLy8gcmVtb3ZlIHRoZSB0b2tlbiBhbmQgdXNlciBmcm9tIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICBleHBvcnQgY29uc3QgcmVtb3ZlVXNlclNlc3Npb24gPSAoKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcl9lbWFpbCcpO1xyXG4gIH07XHJcbiAgLy8gc2V0IHRoZSB0b2tlbiBhbmQgdXNlciBmcm9tIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICBleHBvcnQgY29uc3Qgc2V0VXNlclNlc3Npb24gPSAodG9rZW4sIHVzZXIsIGVtYWlsLCBwaG9uZSwgZGF0YSkgPT4ge1xyXG4gICBcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJfZW1haWwnLCBKU09OLnN0cmluZ2lmeShlbWFpbCkpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9waG9uZScsIEpTT04uc3RyaW5naWZ5KHBob25lKSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==