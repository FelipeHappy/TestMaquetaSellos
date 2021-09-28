(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addresses-addresses-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressesAddressesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n      </ion-button>\r\n      <ion-title>Address</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\">\r\n  \r\n      <ion-label class=\"title_lbl\">Your Addresses</ion-label>\r\n\r\n      <ion-label class=\"add_lbl\" (click)=\"goToAddAddress()\">+ Add Address</ion-label>\r\n\r\n      <ion-radio-group value=\"card1\" mode=\"md\">\r\n\r\n          <div class=\"card_div\">\r\n              <div>\r\n                  <ion-radio value=\"card1\"></ion-radio>\r\n              </div>\r\n              <div style=\"margin-left: 16px;\">\r\n                  <ion-label class=\"bold_lbl\">Home</ion-label>\r\n                  <ion-label class=\"small_lbl\">\r\n                      1234, Eva surbhi complex, aksharwadi road, Bhavnagar - 364001.\r\n                  </ion-label>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"card_div\">\r\n              <div>\r\n                  <ion-radio value=\"card2\"></ion-radio>\r\n              </div>\r\n              <div style=\"margin-left: 16px;\">\r\n                <ion-label class=\"bold_lbl\">Office</ion-label>\r\n                <ion-label class=\"small_lbl\">\r\n                    1234, Eva surbhi complex, aksharwadi road, Bhavnagar - 364001.\r\n                </ion-label>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"card_div\">\r\n              <div>\r\n                  <ion-radio value=\"card3\"></ion-radio>\r\n              </div>\r\n              <div style=\"margin-left: 16px;\">\r\n                <ion-label class=\"bold_lbl\">Other</ion-label>\r\n                <ion-label class=\"small_lbl\">\r\n                  1234, Eva surbhi complex, aksharwadi road, Bhavnagar - 364001.\r\n                </ion-label>\r\n              </div>\r\n          </div>\r\n\r\n      </ion-radio-group>\r\n      \r\n      <ion-button expand=\"block\">\r\n          Set Default Address\r\n      </ion-button>\r\n\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/addresses/addresses-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/addresses/addresses-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddressesPageRoutingModule */

    /***/
    function srcAppPagesAddressesAddressesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressesPageRoutingModule", function () {
        return AddressesPageRoutingModule;
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


      var _addresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addresses.page */
      "./src/app/pages/addresses/addresses.page.ts");

      var routes = [{
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_3__["AddressesPage"]
      }];

      var AddressesPageRoutingModule = function AddressesPageRoutingModule() {
        _classCallCheck(this, AddressesPageRoutingModule);
      };

      AddressesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddressesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/addresses/addresses.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/addresses/addresses.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddressesPageModule */

    /***/
    function srcAppPagesAddressesAddressesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function () {
        return AddressesPageModule;
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


      var _addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addresses-routing.module */
      "./src/app/pages/addresses/addresses-routing.module.ts");
      /* harmony import */


      var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addresses.page */
      "./src/app/pages/addresses/addresses.page.ts");

      var AddressesPageModule = function AddressesPageModule() {
        _classCallCheck(this, AddressesPageModule);
      };

      AddressesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressesPageRoutingModule"]],
        declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
      })], AddressesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/addresses/addresses.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/addresses/addresses.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddressesAddressesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .add_lbl {\n  color: cadetblue;\n  text-align: right;\n  margin-bottom: 16px;\n}\n.main_content_div .card_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  border-radius: 3px;\n}\n.main_content_div .card_div div .small_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .card_div div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  display: block;\n  margin: auto;\n  margin-bottom: 30px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFLWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSGhCO0FBS1k7RUFDSSx3QkFBQTtBQUhoQjtBQVFJO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlX2xibCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgIH1cclxuXHJcbiAgICAuYWRkX2xibCB7XHJcbiAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAuc21hbGxfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib2xkX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/addresses/addresses.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/addresses/addresses.page.ts ***!
      \***************************************************/

    /*! exports provided: AddressesPage */

    /***/
    function srcAppPagesAddressesAddressesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressesPage", function () {
        return AddressesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddressesPage = /*#__PURE__*/function () {
        function AddressesPage(router, navCtrl) {
          _classCallCheck(this, AddressesPage);

          this.router = router;
          this.navCtrl = navCtrl;
        }

        _createClass(AddressesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "goToAddAddress",
          value: function goToAddAddress() {
            this.router.navigate(['/add-address']);
          }
        }]);

        return AddressesPage;
      }();

      AddressesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      AddressesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addresses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addresses.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addresses.page.scss */
        "./src/app/pages/addresses/addresses.page.scss"))["default"]]
      })], AddressesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-addresses-addresses-module-es5.js.map