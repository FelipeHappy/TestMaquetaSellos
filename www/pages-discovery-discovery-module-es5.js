(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discovery-discovery-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/discovery/discovery.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/discovery/discovery.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDiscoveryDiscoveryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Discovery</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-grid fixed style=\"padding: 0;\">\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let item of discover; let i = index\" (click)=\"selectTab(i)\" [class.left-pad]=\"i % 2 == 1\" [class.right-pad]=\"i % 2 == 0\">\r\n                    <div class=\"inner_div\" [class.active]=\"selectID == i\">\r\n                        <img src=\"{{item.img}}\">\r\n                        <ion-label class=\"bold_lbl\">{{item.name}}</ion-label>\r\n                        <ion-label class=\"loc_lbl\">{{item.place}}</ion-label>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/discovery/discovery-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/discovery/discovery-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DiscoveryPageRoutingModule */

    /***/
    function srcAppPagesDiscoveryDiscoveryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoveryPageRoutingModule", function () {
        return DiscoveryPageRoutingModule;
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


      var _discovery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discovery.page */
      "./src/app/pages/discovery/discovery.page.ts");

      var routes = [{
        path: '',
        component: _discovery_page__WEBPACK_IMPORTED_MODULE_3__["DiscoveryPage"]
      }];

      var DiscoveryPageRoutingModule = function DiscoveryPageRoutingModule() {
        _classCallCheck(this, DiscoveryPageRoutingModule);
      };

      DiscoveryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DiscoveryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/discovery/discovery.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/discovery/discovery.module.ts ***!
      \*****************************************************/

    /*! exports provided: DiscoveryPageModule */

    /***/
    function srcAppPagesDiscoveryDiscoveryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoveryPageModule", function () {
        return DiscoveryPageModule;
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


      var _discovery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./discovery-routing.module */
      "./src/app/pages/discovery/discovery-routing.module.ts");
      /* harmony import */


      var _discovery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discovery.page */
      "./src/app/pages/discovery/discovery.page.ts");

      var DiscoveryPageModule = function DiscoveryPageModule() {
        _classCallCheck(this, DiscoveryPageModule);
      };

      DiscoveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _discovery_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoveryPageRoutingModule"]],
        declarations: [_discovery_page__WEBPACK_IMPORTED_MODULE_6__["DiscoveryPage"]]
      })], DiscoveryPageModule);
      /***/
    },

    /***/
    "./src/app/pages/discovery/discovery.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/discovery/discovery.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDiscoveryDiscoveryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div ion-col {\n  padding: 0;\n  padding-bottom: 16px;\n}\n\n.main_content_div .left-pad {\n  padding-left: 8px;\n}\n\n.main_content_div .right-pad {\n  padding-right: 8px;\n}\n\n.main_content_div .inner_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n}\n\n.main_content_div .inner_div img {\n  width: 80px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.main_content_div .inner_div .bold_lbl {\n  font-family: \"semi-bold\";\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.main_content_div .inner_div .loc_lbl {\n  color: gray;\n  font-size: 15px;\n  text-align: center;\n}\n\n.main_content_div .active {\n  background: var(--ion-color-primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlzY292ZXJ5L2Rpc2NvdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFJO0VBQ0ksY0FBQTtBQUVSOztBQUNJO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FBQ1I7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7QUFDUjs7QUFFSTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFFUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBR1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEWjs7QUFHUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFEWjs7QUFLSTtFQUNJLCtDQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXNjb3ZlcnkvZGlzY292ZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YyRjJGNDtcclxufVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuICAgIC5sZWZ0LXBhZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtcGFkIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyX2RpdiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvY19sYmwge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/discovery/discovery.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/discovery/discovery.page.ts ***!
      \***************************************************/

    /*! exports provided: DiscoveryPage */

    /***/
    function srcAppPagesDiscoveryDiscoveryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoveryPage", function () {
        return DiscoveryPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DiscoveryPage = /*#__PURE__*/function () {
        function DiscoveryPage(navCtrl) {
          _classCallCheck(this, DiscoveryPage);

          this.navCtrl = navCtrl;
          this.discover = [{
            img: 'assets/imgs/cheers.png',
            name: 'Bars & Hotels',
            place: '42 Places'
          }, {
            img: 'assets/imgs/tray.png',
            name: 'Fine Dinning',
            place: '30 Places'
          }, {
            img: 'assets/imgs/shop.png',
            name: 'Cafes',
            place: '50 Places'
          }, {
            img: 'assets/imgs/destination.png',
            name: 'Nearby',
            place: '10 Places'
          }, {
            img: 'assets/imgs/fast-food.png',
            name: 'Fast Foods',
            place: '25 Places'
          }, {
            img: 'assets/imgs/pizza.png',
            name: 'Features Food',
            place: '30 Places'
          }];
        }

        _createClass(DiscoveryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectTab",
          value: function selectTab(val) {
            this.selectID = val;
            console.log(val);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return DiscoveryPage;
      }();

      DiscoveryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      DiscoveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-discovery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./discovery.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/discovery/discovery.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./discovery.page.scss */
        "./src/app/pages/discovery/discovery.page.scss"))["default"]]
      })], DiscoveryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-discovery-discovery-module-es5.js.map