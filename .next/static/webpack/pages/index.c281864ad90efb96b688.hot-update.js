webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImdldFVzZXIiLCJ1c2VyU3RyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZ2V0RW1haWwiLCJ1c2VyRW1haWwiLCJnZXREYXRhIiwidXNlckRhdGEiLCJnZXRUb2tlbiIsInJlbW92ZVVzZXJTZXNzaW9uIiwicmVtb3ZlSXRlbSIsInNldFVzZXJTZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiZW1haWwiLCJwaG9uZSIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLGtDQUFqQjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDekIsTUFBTUMsT0FBTyxHQUFHQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQSxNQUFJRixPQUFKLEVBQWEsT0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQVgsQ0FBUCxDQUFiLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKSTtBQUtFLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDNUIsTUFBTUMsU0FBUyxHQUFHTCxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxNQUFJSSxTQUFKLEVBQWUsT0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFNBQVgsQ0FBUCxDQUFmLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKTTtBQUtBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxHQUFHUCxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxNQUFJTSxRQUFKLEVBQWMsT0FBT0wsSUFBSSxDQUFDQyxLQUFMLENBQVdJLFFBQVgsQ0FBUCxDQUFkLEtBQ0ssT0FBTyxJQUFQO0FBQ04sQ0FKTSxDLENBS1A7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUM1QixTQUFPUixjQUFjLENBQUNDLE9BQWYsQ0FBdUIsT0FBdkIsS0FBbUMsSUFBMUM7QUFDRCxDQUZNLEMsQ0FHUDs7QUFDTyxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckNULGdCQUFjLENBQUNVLFVBQWYsQ0FBMEIsT0FBMUI7QUFDQVYsZ0JBQWMsQ0FBQ1UsVUFBZixDQUEwQixNQUExQjtBQUNBVixnQkFBYyxDQUFDVSxVQUFmLENBQTBCLFlBQTFCO0FBQ0QsQ0FKTSxDLENBS1A7O0FBQ08sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBY0MsS0FBZCxFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLEVBQXFDO0FBRWpFaEIsZ0JBQWMsQ0FBQ2lCLE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0NMLEtBQWhDO0FBQ0FaLGdCQUFjLENBQUNpQixPQUFmLENBQXVCLE1BQXZCLEVBQStCZixJQUFJLENBQUNnQixTQUFMLENBQWVMLElBQWYsQ0FBL0I7QUFDQWIsZ0JBQWMsQ0FBQ2lCLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUNmLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZUosS0FBZixDQUFyQztBQUNBZCxnQkFBYyxDQUFDaUIsT0FBZixDQUF1QixZQUF2QixFQUFxQ2YsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlSCxLQUFmLENBQXJDO0FBQ0FmLGdCQUFjLENBQUNpQixPQUFmLENBQXVCLE1BQXZCLEVBQStCZixJQUFJLENBQUNnQixTQUFMLENBQWVGLElBQWYsQ0FBL0I7QUFDRCxDQVBNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyODE4NjRhZDkwZWZiOTZiNjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly93ZWItZ2xvb3Nlci5oZXJva3VhcHAuY29tL2FwaS9hcHAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuOToxMjAwMC9hcGkvYXBwJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclN0ciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGlmICh1c2VyU3RyKSByZXR1cm4gSlNPTi5wYXJzZSh1c2VyU3RyKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuICBleHBvcnQgY29uc3QgZ2V0RW1haWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2VtYWlsJyk7XHJcbiAgICBpZiAodXNlckVtYWlsKSByZXR1cm4gSlNPTi5wYXJzZSh1c2VyRW1haWwpO1xyXG4gICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkYXRhJyk7XHJcbiAgICBpZiAodXNlckRhdGEpIHJldHVybiBKU09OLnBhcnNlKHVzZXJEYXRhKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuICAvLyByZXR1cm4gdGhlIHRva2VuIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8IG51bGw7XHJcbiAgfTtcclxuICAvLyByZW1vdmUgdGhlIHRva2VuIGFuZCB1c2VyIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCByZW1vdmVVc2VyU2Vzc2lvbiA9ICgpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyX2VtYWlsJyk7XHJcbiAgfTtcclxuICAvLyBzZXQgdGhlIHRva2VuIGFuZCB1c2VyIGZyb20gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gIGV4cG9ydCBjb25zdCBzZXRVc2VyU2Vzc2lvbiA9ICh0b2tlbiwgdXNlciwgZW1haWwsIHBob25lLCBkYXRhKSA9PiB7XHJcbiAgIFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9lbWFpbCcsIEpTT04uc3RyaW5naWZ5KGVtYWlsKSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyX3Bob25lJywgSlNPTi5zdHJpbmdpZnkocGhvbmUpKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9