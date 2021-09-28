(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddCardAddCardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n      </ion-button>\r\n      <ion-title>Add Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-content>\r\n        <div class=\"main_content_div\">\r\n            <ion-label class=\"bold_lbl\">Enter Card Detail</ion-label>\r\n\r\n            <ion-label class=\"small_lbl\">Card Holder Name</ion-label>\r\n            <ion-input type=\"text\" placeholder=\"Card Holder Name\"></ion-input>\r\n\r\n            <ion-label class=\"small_lbl\">Card Number</ion-label>\r\n            <ion-input type=\"number\" placeholder=\"Card No\"></ion-input>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"6\" style=\"padding-left: 0px;\">\r\n                    <ion-label class=\"small_lbl\">CVC</ion-label>\r\n                    <ion-input type=\"number\" placeholder=\"CVC\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"6\" style=\"padding-right: 0px;\">\r\n                    <ion-label class=\"small_lbl\">Expiry Date</ion-label>\r\n                    <ion-datetime display-format=\"MM/YYYY\" placeholder=\"MM/YYYY\"></ion-datetime>\r\n                </ion-col>\r\n            </ion-row>\r\n            \r\n            <ion-button (click)=\"goToProfile()\" expand=\"block\">\r\n                Add Card\r\n            </ion-button>\r\n        </div>\r\n    </ion-content>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/add-card/add-card-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddCardPageRoutingModule */

    /***/
    function srcAppPagesAddCardAddCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function () {
        return AddCardPageRoutingModule;
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


      var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-card.page */
      "./src/app/pages/add-card/add-card.page.ts");

      var routes = [{
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
      }];

      var AddCardPageRoutingModule = function AddCardPageRoutingModule() {
        _classCallCheck(this, AddCardPageRoutingModule);
      };

      AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add-card/add-card.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.module.ts ***!
      \***************************************************/

    /*! exports provided: AddCardPageModule */

    /***/
    function srcAppPagesAddCardAddCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function () {
        return AddCardPageModule;
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


      var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-card-routing.module */
      "./src/app/pages/add-card/add-card-routing.module.ts");
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-card.page */
      "./src/app/pages/add-card/add-card.page.ts");

      var AddCardPageModule = function AddCardPageModule() {
        _classCallCheck(this, AddCardPageModule);
      };

      AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
      })], AddCardPageModule);
      /***/
    },

    /***/
    "./src/app/pages/add-card/add-card.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddCardAddCardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  --color: cadetblue;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .bold_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n  margin-bottom: 20px;\n}\n\n.main_content_div .small_lbl {\n  margin-bottom: 5px;\n}\n\n.main_content_div ion-input, .main_content_div ion-datetime {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  margin-bottom: 16px;\n  border-radius: 3px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.main_content_div ion-button {\n  height: 50px;\n  --border-radius: 3px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUFBUjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFSTtFQUNJLGNBQUE7QUFBUjs7QUFHSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUtJO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuYm9sZF9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc21hbGxfbGJsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0LCBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHhcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/add-card/add-card.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.ts ***!
      \*************************************************/

    /*! exports provided: AddCardPage */

    /***/
    function srcAppPagesAddCardAddCardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPage", function () {
        return AddCardPage;
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

      var AddCardPage = /*#__PURE__*/function () {
        function AddCardPage(navCtrl, router) {
          _classCallCheck(this, AddCardPage);

          this.navCtrl = navCtrl;
          this.router = router;
        }

        _createClass(AddCardPage, [{
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

        return AddCardPage;
      }();

      AddCardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-card.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-card.page.scss */
        "./src/app/pages/add-card/add-card.page.scss"))["default"]]
      })], AddCardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-card-add-card-module-es5.js.map