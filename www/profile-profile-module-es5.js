(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button size=\"small\" fill=\"clear\" slot=\"end\" (click)=\"goToEditProfile()\">\r\n            Edit\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"back_user\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n        <ion-label class=\"name_lbl\">Jonh Doe</ion-label>\r\n        <ion-label class=\"location_lbl\">New York</ion-label>\r\n\r\n        <div class=\"flex_div\" (click)=\"goToPaymentMethod()\">\r\n            <ion-label>Payment Method</ion-label>\r\n            <ion-icon name=\"chevron-forward\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"flex_div\" (click)=\"goToFriends()\">\r\n            <ion-label>Invite Friends</ion-label>\r\n            <ion-icon name=\"chevron-forward\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"flex_div\" (click)=\"goToAddresses()\">\r\n            <ion-label>Manage Address</ion-label>\r\n            <ion-icon name=\"chevron-forward\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"flex_div\" (click)=\"logout()\">\r\n            <ion-label>Logout</ion-label>\r\n            <ion-icon name=\"chevron-forward\"></ion-icon>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  --color: cadetblue;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_user {\n  height: 100px;\n  width: 100px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: block;\n  margin: auto;\n  margin-top: 40px;\n}\n\n.main_content_div .name_lbl {\n  font-family: \"semi-bold\";\n  text-align: center;\n  margin-top: 10px;\n}\n\n.main_content_div .location_lbl {\n  font-size: 14px;\n  color: grey;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.main_content_div .flex_div {\n  border-bottom: 1px solid lightgrey;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main_content_div .flex_div ion-icon {\n  color: lightgrey;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FBQVI7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBRUk7RUFDSSxjQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURSOztBQUlJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFLSTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSFI7O0FBS1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFIWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrX3VzZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZV9sYmwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5sb2NhdGlvbl9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxleF9kaXYge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(route) {
          _classCallCheck(this, ProfilePage);

          this.route = route;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToFriends",
          value: function goToFriends() {
            this.route.navigate(['/friends']);
          }
        }, {
          key: "goToEditProfile",
          value: function goToEditProfile() {
            this.route.navigate(['/edit-profile']);
          }
        }, {
          key: "goToPaymentMethod",
          value: function goToPaymentMethod() {
            this.route.navigate(['/payment-method']);
          }
        }, {
          key: "goToAddresses",
          value: function goToAddresses() {
            this.route.navigate(['/addresses']);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.route.navigate(['/login']);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map