(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourite-favourite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFavouriteFavouritePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-title>Favourite</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"card_box\" *ngFor=\"let item of restaurants\" (click)=\"goToRestDetail()\">\r\n            <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n            <div class=\"detail_div\">\r\n                <ion-label class=\"bold_name\">Good Thai</ion-label>\r\n                <ion-label class=\"grey_lbl\">10:30AM to 10:00 PM</ion-label>\r\n                <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar.</ion-label>\r\n                <div class=\"color_box\"><ion-label>4.5</ion-label></div>\r\n                <ion-icon name=\"bookmark\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/favourite/favourite-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FavouritePageRoutingModule */

    /***/
    function srcAppPagesFavouriteFavouriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function () {
        return FavouritePageRoutingModule;
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


      var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favourite.page */
      "./src/app/pages/favourite/favourite.page.ts");

      var routes = [{
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
      }];

      var FavouritePageRoutingModule = function FavouritePageRoutingModule() {
        _classCallCheck(this, FavouritePageRoutingModule);
      };

      FavouritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavouritePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/favourite/favourite.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favourite/favourite.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavouritePageModule */

    /***/
    function srcAppPagesFavouriteFavouriteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function () {
        return FavouritePageModule;
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


      var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favourite-routing.module */
      "./src/app/pages/favourite/favourite-routing.module.ts");
      /* harmony import */


      var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favourite.page */
      "./src/app/pages/favourite/favourite.page.ts");

      var FavouritePageModule = function FavouritePageModule() {
        _classCallCheck(this, FavouritePageModule);
      };

      FavouritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
      })], FavouritePageModule);
      /***/
    },

    /***/
    "./src/app/pages/favourite/favourite.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favourite/favourite.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFavouriteFavouritePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .card_box {\n  margin-bottom: 10px;\n  background: white;\n  padding: 16px;\n  display: flex;\n}\n\n.main_content_div .card_box .back_image {\n  height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .card_box .detail_div {\n  padding-left: 10px;\n  position: relative;\n}\n\n.main_content_div .card_box .detail_div .bold_name {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box .detail_div .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n\n.main_content_div .card_box .detail_div .addr_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-top: 5px;\n}\n\n.main_content_div .card_box .detail_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n}\n\n.main_content_div .card_box .detail_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .detail_div ion-icon {\n  color: cadetblue;\n  position: absolute;\n  font-size: 20px;\n  right: 0;\n  bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3VyaXRlL2Zhdm91cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVJO0VBQ0ksY0FBQTtBQUNSOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ1I7O0FBQ1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDWjs7QUFDWTtFQUNJLHdCQUFBO0FBQ2hCOztBQUNZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDaEI7O0FBQ1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDaEI7O0FBRVk7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFwQjs7QUFJWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFGaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvdXJpdGUvZmF2b3VyaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YyRjJGNDtcclxufVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfYm94IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmJhY2tfaW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsX2RpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmJvbGRfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyZXlfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/favourite/favourite.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/favourite/favourite.page.ts ***!
      \***************************************************/

    /*! exports provided: FavouritePage */

    /***/
    function srcAppPagesFavouriteFavouritePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePage", function () {
        return FavouritePage;
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

      var FavouritePage = /*#__PURE__*/function () {
        function FavouritePage(route) {
          _classCallCheck(this, FavouritePage);

          this.route = route;
          this.restaurants = [{
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

        _createClass(FavouritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToRestDetail",
          value: function goToRestDetail() {
            this.route.navigate(['/rest-detail']);
          }
        }]);

        return FavouritePage;
      }();

      FavouritePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      FavouritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-favourite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favourite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favourite.page.scss */
        "./src/app/pages/favourite/favourite.page.scss"))["default"]]
      })], FavouritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favourite-favourite-module-es5.js.map