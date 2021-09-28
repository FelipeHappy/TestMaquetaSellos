(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n      </ion-button>\r\n      <ion-title>Edit Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-content>\r\n        <div class=\"main_content_div\">\r\n            <div class=\"back_user\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n            <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\r\n            <ion-input type=\"email\" placeholder=\"Email ID\"></ion-input>\r\n            <ion-input type=\"number\" placeholder=\"Phone Number\"></ion-input>\r\n            <ion-input type=\"text\" placeholder=\"City\"></ion-input>\r\n            <ion-button (click)=\"goToProfile()\" expand=\"block\">\r\n              Click me\r\n            </ion-button>\r\n        </div>\r\n    </ion-content>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/edit-profile/edit-profile-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function srcAppPagesEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/pages/edit-profile/edit-profile.page.ts");

      var routes = [{
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/edit-profile/edit-profile.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
      \***********************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function srcAppPagesEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "./src/app/pages/edit-profile/edit-profile-routing.module.ts");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/pages/edit-profile/edit-profile.page.ts");

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/edit-profile/edit-profile.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  --color: cadetblue;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_user {\n  height: 100px;\n  width: 100px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: block;\n  margin: auto;\n  margin-top: 40px;\n  margin-bottom: 30px;\n}\n\n.main_content_div ion-input {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  margin-bottom: 16px;\n  border-radius: 3px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.main_content_div ion-button {\n  height: 50px;\n  --border-radius: 3px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQUFSOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBQ0ksY0FBQTtBQUFSOztBQUdJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSOztBQUlJO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrX3VzZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweFxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/edit-profile/edit-profile.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
      \*********************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function srcAppPagesEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(navCtrl, router) {
          _classCallCheck(this, EditProfilePage);

          this.navCtrl = navCtrl;
          this.router = router;
        }

        _createClass(EditProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(['/tabs/profile']);
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-profile.page.scss */
        "./src/app/pages/edit-profile/edit-profile.page.scss"))["default"]]
      })], EditProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map