(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" mode=\"md\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Sdyney CBD</ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"header_search\">\r\n      <ion-input type=\"text\" placeholder=\"Search for Restautants..\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n      </ion-input>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <ion-slides pager=\"ios\" class=\"home_slider\">\r\n            <ion-slide *ngFor=\"let item of foodSlider\" (click)=\"goToTrending()\">\r\n                <div class=\"slider_back\" [style.backgroundImage]=\"'url('+ item.img +')'\">\r\n                  <div class=\"gradient_div\">\r\n                      <div class=\"abs_div\">\r\n                          <ion-label class=\"bold_lbl\">Thai Style</ion-label>\r\n                          <ion-label class=\"small_lbl\">12 Places</ion-label>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <div class=\"content_div\">\r\n            <div class=\"header_div\">\r\n                <ion-label Class=\"title_lbl\">Most Popular</ion-label>\r\n                <ion-label Class=\"view_lbl\">See All</ion-label>\r\n            </div>\r\n\r\n            <div class=\"custom_slider\">\r\n                <div class=\"slide_box\" *ngFor=\"let item of foodSlider\" (click)=\"goToRest()\">\r\n                    <div class=\"slide1_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n                    <div class=\"detail1_div\">\r\n                        <ion-label class=\"bold_lbl\">Green House</ion-label>\r\n                        <ion-label class=\"grey_lbl\">122 Queen Steet</ion-label>\r\n                        <ion-label class=\"small_lbl\">Fried chicken, American</ion-label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"header_div\">\r\n                <ion-label Class=\"title_lbl\">Meal Deals</ion-label>\r\n                <ion-label Class=\"view_lbl\" (click)=\"goToCollection()\">See All</ion-label>\r\n            </div>\r\n\r\n            <div class=\"custom_slider\">\r\n                <div class=\"slide_box\" *ngFor=\"let item of foodSlider\" (click)=\"goToRest()\">\r\n                    <div class=\"slide2_img\" [style.backgroundImage]=\"'url('+ item.img +')'\">\r\n                        <div class=\"gradient_div\">\r\n                            <div class=\"detail2_div\">\r\n                              <div class=\"yellow_div\"></div>\r\n                              <ion-label class=\"bold_lbl\">Green House</ion-label>\r\n                              <ion-label class=\"small_lbl\">122 Queen Steet</ion-label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"header_div\">\r\n                <ion-label Class=\"title_lbl\">Popular Restaurants</ion-label>\r\n                <ion-label Class=\"view_lbl\" (click)=\"goToAllRest()\">See All</ion-label>\r\n            </div>\r\n\r\n            <div class=\"custom_slider\">\r\n                <div class=\"slide_box\" *ngFor=\"let item of foodSlider\" (click)=\"goToRest()\">\r\n                    <div class=\"slide3_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        \r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header_search {\n  padding: 16px;\n}\n.header_search ion-input {\n  border: 1px solid lightgrey;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 10px;\n  background: white;\n}\n.header_search ion-input ion-icon {\n  color: grey;\n  margin-left: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .slider_back {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .slider_back .gradient_div {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.main_content_div .slider_back .gradient_div .abs_div {\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n}\n.main_content_div .slider_back .gradient_div .abs_div .bold_lbl {\n  font-family: \"medium\";\n  font-size: 14px;\n  color: white;\n  text-align: left;\n}\n.main_content_div .slider_back .gradient_div .abs_div .small_lbl {\n  font-size: 12px;\n  color: white;\n  text-align: left;\n}\n.main_content_div .content_div {\n  padding: 16px;\n  background: #F2F2F4;\n}\n.main_content_div .content_div .header_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.main_content_div .content_div .header_div .title_lbl {\n  font-family: \"semi-bold\";\n  color: black;\n}\n.main_content_div .content_div .header_div .view_lbl {\n  color: cadetblue;\n  font-size: 14px;\n}\n.main_content_div .content_div .custom_slider {\n  display: flex;\n  overflow: scroll;\n  margin-bottom: 10px;\n}\n.main_content_div .content_div .custom_slider .slide_box {\n  border-radius: 10px;\n  margin-right: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  width: 140px;\n  min-width: 140px;\n  margin-bottom: 10px;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide1_img {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.main_content_div .content_div .custom_slider .slide_box .detail1_div {\n  padding: 10px;\n}\n.main_content_div .content_div .custom_slider .slide_box .detail1_div .bold_lbl {\n  font-size: 14px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .custom_slider .slide_box .detail1_div .grey_lbl {\n  font-size: 13px;\n  color: grey;\n}\n.main_content_div .content_div .custom_slider .slide_box .detail1_div .small_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img {\n  width: 100%;\n  height: 180px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img .gradient_div {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 10px;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img .gradient_div .detail2_div {\n  position: absolute;\n  padding: 10px;\n  bottom: 0;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img .gradient_div .detail2_div .yellow_div {\n  width: 50px;\n  height: 3px;\n  background: var(--ion-color-primary);\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img .gradient_div .detail2_div .bold_lbl {\n  color: white;\n  font-size: 14px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .custom_slider .slide_box .slide2_img .gradient_div .detail2_div .small_lbl {\n  color: white;\n  font-size: 12px;\n}\n.main_content_div .content_div .custom_slider .slide_box .slide3_img {\n  width: 100%;\n  height: 130px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUlJO0VBQ0ksY0FBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUZSO0FBSVE7RUFDSSwwRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQUlZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUZoQjtBQUdnQjtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURwQjtBQUdnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFEcEI7QUFPSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxSO0FBT1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTFo7QUFPWTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBTGhCO0FBU1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBaO0FBUVk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5oQjtBQVFnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQU5wQjtBQVFnQjtFQUNJLGFBQUE7QUFOcEI7QUFPb0I7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUFMeEI7QUFPb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUx4QjtBQU9vQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTHhCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUHBCO0FBU29CO0VBQ0ksMEVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQeEI7QUFTd0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBUDVCO0FBUzRCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUGhDO0FBVTRCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVJoQztBQVU0QjtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBUmhDO0FBY2dCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVpwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX3NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXJfYmFjayB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICAuZ3JhZGllbnRfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLDAuNSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICAgICAgLmFic19kaXYge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjJGMkY0O1xyXG5cclxuICAgICAgICAuaGVhZGVyX2RpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmlld19sYmwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1c3RvbV9zbGlkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAuc2xpZGVfYm94IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGUxX2ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV0YWlsMV9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmV5X2xibCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGUyX2ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZ3JhZGllbnRfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLDAuNSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbDJfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC55ZWxsb3dfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm9sZF9sYmx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZTNfaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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

      var HomePage = /*#__PURE__*/function () {
        function HomePage(route) {
          _classCallCheck(this, HomePage);

          this.route = route;
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

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToRestDetail",
          value: function goToRestDetail() {
            this.route.navigate(['/rest-detail']);
          }
        }, {
          key: "goToCollection",
          value: function goToCollection() {
            this.route.navigate(['/collections']);
          }
        }, {
          key: "goToRest",
          value: function goToRest() {
            this.route.navigate(['/restaurants']); // this.route.navigate(['/trending']);
          }
        }, {
          key: "goToTrending",
          value: function goToTrending() {
            this.route.navigate(['/trending']);
          }
        }, {
          key: "goToAllRest",
          value: function goToAllRest() {
            this.route.navigate(['/all-restaurants']);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map