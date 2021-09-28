(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-photos-all-photos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photos/all-photos.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photos/all-photos.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAllPhotosAllPhotosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>All Photos</ion-title>\r\n        <ion-button (click)=\"changeView()\" fill=\"clear\" size=\"small\" slot=\"end\">\r\n            <ion-icon name=\"apps-sharp\" *ngIf=\"isGridView == true\" style=\"color: black;\"></ion-icon>\r\n            <ion-icon name=\"list\" *ngIf=\"isGridView == false\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"main_content_div1\" *ngIf=\"isGridView == true\">\r\n        <ion-grid fixed>\r\n            <ion-row>\r\n                <ion-col size=\"4\">\r\n                    <div class=\"back_image_color\">\r\n                        <ion-icon name=\"camera-outline\"></ion-icon>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"4\" *ngFor=\"let item of images\" (click)=\"openSinglePhoto()\">\r\n                    <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"main_content_div2\" *ngIf=\"isGridView == false\">\r\n        <div class=\"card_div\" *ngFor=\"let item of images\">\r\n            <div class=\"flex_div\">\r\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n                <div class=\"user_detail\">\r\n                    <ion-label class=\"bold_lbl\">Elvin Sharvill</ion-label>\r\n                    <ion-label class=\"grey_lbl\">45 Reviews, 120 Followers</ion-label>\r\n                </div>\r\n                <ion-button fill=\"outline\" shape=\"round\" size=\"small\">\r\n                  Follow\r\n                </ion-button>\r\n            </div>\r\n            <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\r\n            <div class=\"comment_div\">\r\n                <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n                <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\" (click)=\"goToAddComment()\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/all-photos/all-photos-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/all-photos/all-photos-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AllPhotosPageRoutingModule */

    /***/
    function srcAppPagesAllPhotosAllPhotosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllPhotosPageRoutingModule", function () {
        return AllPhotosPageRoutingModule;
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


      var _all_photos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-photos.page */
      "./src/app/pages/all-photos/all-photos.page.ts");

      var routes = [{
        path: '',
        component: _all_photos_page__WEBPACK_IMPORTED_MODULE_3__["AllPhotosPage"]
      }];

      var AllPhotosPageRoutingModule = function AllPhotosPageRoutingModule() {
        _classCallCheck(this, AllPhotosPageRoutingModule);
      };

      AllPhotosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AllPhotosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/all-photos/all-photos.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/all-photos/all-photos.module.ts ***!
      \*******************************************************/

    /*! exports provided: AllPhotosPageModule */

    /***/
    function srcAppPagesAllPhotosAllPhotosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllPhotosPageModule", function () {
        return AllPhotosPageModule;
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


      var _all_photos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./all-photos-routing.module */
      "./src/app/pages/all-photos/all-photos-routing.module.ts");
      /* harmony import */


      var _all_photos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./all-photos.page */
      "./src/app/pages/all-photos/all-photos.page.ts");

      var AllPhotosPageModule = function AllPhotosPageModule() {
        _classCallCheck(this, AllPhotosPageModule);
      };

      AllPhotosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _all_photos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllPhotosPageRoutingModule"]],
        declarations: [_all_photos_page__WEBPACK_IMPORTED_MODULE_6__["AllPhotosPage"]]
      })], AllPhotosPageModule);
      /***/
    },

    /***/
    "./src/app/pages/all-photos/all-photos.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/all-photos/all-photos.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAllPhotosAllPhotosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div1 .back_image_color {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background: var(--ion-color-primary);\n  position: relative;\n}\n.main_content_div1 .back_image_color ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n}\n.main_content_div1 .back_image {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div2 {\n  width: 100%;\n}\n.main_content_div2 ion-label {\n  display: block;\n}\n.main_content_div2 .card_div {\n  margin-bottom: 10px;\n  background: white;\n}\n.main_content_div2 .card_div .flex_div {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.main_content_div2 .card_div .flex_div .user_back {\n  height: 45px;\n  width: 45px;\n  background-position: top;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div2 .card_div .flex_div .user_detail {\n  padding-left: 10px;\n  position: relative;\n}\n.main_content_div2 .card_div .flex_div .user_detail .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div2 .card_div .flex_div .user_detail .grey_lbl {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div2 .card_div .flex_div ion-button {\n  color: cadetblue;\n  --border-color: cadetblue;\n  --border-radius: 25px;\n  position: absolute;\n  right: 16px;\n}\n.main_content_div2 .card_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div2 .card_div .comment_div {\n  padding: 10px 16px;\n}\n.main_content_div2 .card_div .comment_div .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 24px;\n  margin-right: 16px;\n}\n.main_content_div2 .card_div .comment_div .chat_icn {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLXBob3Rvcy9hbGwtcGhvdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFBWjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURSO0FBS0E7RUFDSSxXQUFBO0FBRko7QUFJSTtFQUNJLGNBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUhSO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSFo7QUFJWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFGaEI7QUFJWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFGaEI7QUFJZ0I7RUFDSSx3QkFBQTtBQUZwQjtBQUlnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRnBCO0FBTVk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFKaEI7QUFPUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTFo7QUFPUTtFQUNJLGtCQUFBO0FBTFo7QUFNWTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSmhCO0FBTVk7RUFDSSxlQUFBO0FBSmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxsLXBob3Rvcy9hbGwtcGhvdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2MSB7XHJcbiAgICAuYmFja19pbWFnZV9jb2xvciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW5fY29udGVudF9kaXYyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgICAgICAuZmxleF9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAudXNlcl9iYWNrIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyX2RldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5ib2xkX2xibCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdyZXlfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhY2tfaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1lbnRfZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgICAgICAudGh1bWJfaWNuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYXRfaWNuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/all-photos/all-photos.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/all-photos/all-photos.page.ts ***!
      \*****************************************************/

    /*! exports provided: AllPhotosPage */

    /***/
    function srcAppPagesAllPhotosAllPhotosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllPhotosPage", function () {
        return AllPhotosPage;
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

      var AllPhotosPage = /*#__PURE__*/function () {
        function AllPhotosPage(route, navCtrl) {
          _classCallCheck(this, AllPhotosPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.isGridView = true;
          this.images = ['assets/imgs/food1.jpg', 'assets/imgs/food2.jpg', 'assets/imgs/food3.jpg', 'assets/imgs/food4.jpg', 'assets/imgs/food5.jpg', 'assets/imgs/food6.jpg', 'assets/imgs/food7.jpg', 'assets/imgs/food1.jpg', 'assets/imgs/food2.jpg', 'assets/imgs/food3.jpg', 'assets/imgs/food4.jpg', 'assets/imgs/food5.jpg', 'assets/imgs/food6.jpg', 'assets/imgs/food7.jpg', 'assets/imgs/food1.jpg', 'assets/imgs/food2.jpg', 'assets/imgs/food3.jpg'];
        }

        _createClass(AllPhotosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openSinglePhoto",
          value: function openSinglePhoto() {
            this.route.navigate(['/single-photo']);
          }
        }, {
          key: "changeView",
          value: function changeView() {
            this.isGridView = !this.isGridView;
          }
        }, {
          key: "goToAddComment",
          value: function goToAddComment() {
            this.route.navigate(['/add-comment']);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return AllPhotosPage;
      }();

      AllPhotosPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      AllPhotosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-photos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./all-photos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photos/all-photos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./all-photos.page.scss */
        "./src/app/pages/all-photos/all-photos.page.scss"))["default"]]
      })], AllPhotosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-all-photos-all-photos-module-es5.js.map