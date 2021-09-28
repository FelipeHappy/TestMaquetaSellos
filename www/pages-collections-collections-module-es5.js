(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-collections-collections-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collections/collections.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collections/collections.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCollectionsCollectionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Collections</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food1.jpg)'\">\r\n            <div class=\"grey_div\">\r\n                <div class=\"abs_div\">\r\n                    <div class=\"yellow_div\"></div>\r\n                    <ion-label class=\"bold_lbl\">Health</ion-label>\r\n                    <ion-label class=\"small_lbl\">12 Places</ion-label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"content_div\">\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let item of foodSlider; let i = index\" [class.left-pad]=\"i % 2 == 1\" [class.right-pad]=\"i % 2 == 0\" (click)=\"goToRestList()\">\r\n                    <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\">\r\n                        <div class=\"grey_div\">\r\n                            <div class=\"abs_div\">\r\n                                <div class=\"yellow_div\"></div>\r\n                                <ion-label class=\"bold_lbl\">Burger</ion-label>\r\n                                <ion-label class=\"small_lbl\">12 Places</ion-label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/collections/collections-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/collections/collections-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CollectionsPageRoutingModule */

    /***/
    function srcAppPagesCollectionsCollectionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPageRoutingModule", function () {
        return CollectionsPageRoutingModule;
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


      var _collections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collections.page */
      "./src/app/pages/collections/collections.page.ts");

      var routes = [{
        path: '',
        component: _collections_page__WEBPACK_IMPORTED_MODULE_3__["CollectionsPage"]
      }];

      var CollectionsPageRoutingModule = function CollectionsPageRoutingModule() {
        _classCallCheck(this, CollectionsPageRoutingModule);
      };

      CollectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CollectionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/collections/collections.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/collections/collections.module.ts ***!
      \*********************************************************/

    /*! exports provided: CollectionsPageModule */

    /***/
    function srcAppPagesCollectionsCollectionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPageModule", function () {
        return CollectionsPageModule;
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


      var _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./collections-routing.module */
      "./src/app/pages/collections/collections-routing.module.ts");
      /* harmony import */


      var _collections_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collections.page */
      "./src/app/pages/collections/collections.page.ts");

      var CollectionsPageModule = function CollectionsPageModule() {
        _classCallCheck(this, CollectionsPageModule);
      };

      CollectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectionsPageRoutingModule"]],
        declarations: [_collections_page__WEBPACK_IMPORTED_MODULE_6__["CollectionsPage"]]
      })], CollectionsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/collections/collections.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/collections/collections.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCollectionsCollectionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_img {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .back_img .grey_div {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);\n  position: relative;\n  padding: 16px;\n}\n\n.main_content_div .back_img .grey_div .abs_div {\n  position: absolute;\n  bottom: 16px;\n}\n\n.main_content_div .back_img .grey_div .abs_div .yellow_div {\n  width: 50px;\n  height: 3px;\n  background: var(--ion-color-primary);\n  margin-bottom: 5px;\n}\n\n.main_content_div .back_img .grey_div .abs_div .bold_lbl {\n  color: white;\n  font-size: 16px;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .back_img .grey_div .abs_div .small_lbl {\n  color: white;\n  font-size: 12px;\n}\n\n.main_content_div .content_div {\n  padding: 16px;\n}\n\n.main_content_div .content_div ion-col {\n  padding: 0;\n  padding-bottom: 16px;\n}\n\n.main_content_div .content_div .left-pad {\n  padding-left: 8px;\n}\n\n.main_content_div .content_div .right-pad {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFHSTtFQUNJLGNBQUE7QUFBUjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRFI7O0FBR1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRFo7O0FBR1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFEaEI7O0FBRWdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQXBCOztBQUdnQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFEcEI7O0FBR2dCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFEcEI7O0FBT0k7RUFDSSxhQUFBO0FBTFI7O0FBT1E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFMWjs7QUFPUTtFQUNJLGlCQUFBO0FBTFo7O0FBT1E7RUFDSSxrQkFBQTtBQUxaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjJGMkY0O1xyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgICAgICAuZ3JleV9kaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLHJnYmEoMCwwLDAsMC41KSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAuYWJzX2RpdiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAueWVsbG93X2RpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYm9sZF9sYmx7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdC1wYWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LXBhZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/collections/collections.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/collections/collections.page.ts ***!
      \*******************************************************/

    /*! exports provided: CollectionsPage */

    /***/
    function srcAppPagesCollectionsCollectionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPage", function () {
        return CollectionsPage;
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

      var CollectionsPage = /*#__PURE__*/function () {
        function CollectionsPage(route, navCtrl) {
          _classCallCheck(this, CollectionsPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.foodSlider = [{
            img: 'assets/imgs/food1.jpg'
          }, {
            img: 'assets/imgs/food2.jpg'
          }, {
            img: 'assets/imgs/food3.jpg'
          }, {
            img: 'assets/imgs/food4.jpg'
          }, {
            img: 'assets/imgs/food5.jpg'
          }, {
            img: 'assets/imgs/food6.jpg'
          }, {
            img: 'assets/imgs/food7.jpg'
          }];
        }

        _createClass(CollectionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }, {
          key: "goToRestList",
          value: function goToRestList() {
            this.route.navigate(['/all-restaurants']);
          }
        }]);

        return CollectionsPage;
      }();

      CollectionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      CollectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-collections',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./collections.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collections/collections.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./collections.page.scss */
        "./src/app/pages/collections/collections.page.scss"))["default"]]
      })], CollectionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-collections-collections-module-es5.js.map