(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-detail-review-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review-detail/review-detail.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review-detail/review-detail.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesReviewDetailReviewDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Review</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"review_div\">\r\n            <div class=\"user_flex\">\r\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n                <div class=\"user_detail\">\r\n                    <ion-label class=\"username\">Kelly West</ion-label>\r\n                    <ion-label class=\"grey_review\">120 Reviews, 200 Followers</ion-label>\r\n                </div>\r\n                <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"small\">\r\n                    Follow\r\n                </ion-button>\r\n            </div>\r\n\r\n            <div class=\"rating_flex\">\r\n                <div class=\"star_flex\">\r\n                    <ion-icon name=\"star\"></ion-icon>\r\n                    <ion-icon name=\"star\"></ion-icon>\r\n                    <ion-icon name=\"star\"></ion-icon>\r\n                    <ion-icon name=\"star\"></ion-icon>\r\n                    <ion-icon name=\"star-outline\"></ion-icon>\r\n                    <ion-label>4.0</ion-label>\r\n                </div>\r\n                <div class=\"comment_flex\">\r\n                    <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n                    <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\"></ion-icon>\r\n                </div>\r\n            </div>\r\n\r\n            <ion-label class=\"comment_text\">\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. \r\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \r\n                when an unknown printer electronic typesetting.\r\n            </ion-label>\r\n\r\n            <ion-grid fixed>\r\n                <ion-row>\r\n                    <ion-col size=\"3\" *ngFor=\"let item of images; let i = index\">\r\n                        <div [style.backgroundImage]=\"'url('+ item +')'\" class=\"photo_back\"></div>    \r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/review-detail/review-detail-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/review-detail/review-detail-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ReviewDetailPageRoutingModule */

    /***/
    function srcAppPagesReviewDetailReviewDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewDetailPageRoutingModule", function () {
        return ReviewDetailPageRoutingModule;
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


      var _review_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./review-detail.page */
      "./src/app/pages/review-detail/review-detail.page.ts");

      var routes = [{
        path: '',
        component: _review_detail_page__WEBPACK_IMPORTED_MODULE_3__["ReviewDetailPage"]
      }];

      var ReviewDetailPageRoutingModule = function ReviewDetailPageRoutingModule() {
        _classCallCheck(this, ReviewDetailPageRoutingModule);
      };

      ReviewDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/review-detail/review-detail.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/review-detail/review-detail.module.ts ***!
      \*************************************************************/

    /*! exports provided: ReviewDetailPageModule */

    /***/
    function srcAppPagesReviewDetailReviewDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewDetailPageModule", function () {
        return ReviewDetailPageModule;
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


      var _review_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./review-detail-routing.module */
      "./src/app/pages/review-detail/review-detail-routing.module.ts");
      /* harmony import */


      var _review_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./review-detail.page */
      "./src/app/pages/review-detail/review-detail.page.ts");

      var ReviewDetailPageModule = function ReviewDetailPageModule() {
        _classCallCheck(this, ReviewDetailPageModule);
      };

      ReviewDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _review_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewDetailPageRoutingModule"]],
        declarations: [_review_detail_page__WEBPACK_IMPORTED_MODULE_6__["ReviewDetailPage"]]
      })], ReviewDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/review-detail/review-detail.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/review-detail/review-detail.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesReviewDetailReviewDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .review_div .user_flex {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .review_div .user_flex .user_back {\n  width: 45px;\n  min-width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .review_div .user_flex .user_detail {\n  padding-left: 16px;\n}\n.main_content_div .review_div .user_flex .user_detail .username {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .review_div .user_flex .user_detail .grey_review {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .review_div .user_flex ion-button {\n  --border-radius: 25px;\n  position: absolute;\n  right: 0;\n  color: cadetblue;\n  --border-color: cadetblue;\n}\n.main_content_div .review_div .rating_flex {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.main_content_div .review_div .rating_flex .star_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-icon {\n  color: var(--ion-color-primary);\n  margin-left: 3px;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-label {\n  color: var(--ion-color-primary);\n  margin-left: 10px;\n  font-size: 14px;\n}\n.main_content_div .review_div .rating_flex .comment_flex {\n  display: flex;\n}\n.main_content_div .review_div .rating_flex .comment_flex .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .review_div .rating_flex .comment_flex .chat_icn {\n  font-size: 20px;\n}\n.main_content_div .review_div .comment_text {\n  color: grey;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.main_content_div .review_div .comment_text .read_span {\n  color: cadetblue;\n}\n.main_content_div .review_div ion-grid {\n  padding: 0px;\n}\n.main_content_div .review_div .photo_back {\n  width: 100%;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3LWRldGFpbC9yZXZpZXctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNoQjtBQUNZO0VBQ0ksa0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFFcEI7QUFBZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUVwQjtBQUNZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ2hCO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRGhCO0FBR2dCO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQURwQjtBQUlnQjtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRnBCO0FBS1k7RUFDSSxhQUFBO0FBSGhCO0FBS2dCO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIcEI7QUFNZ0I7RUFDSSxlQUFBO0FBSnBCO0FBU1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUFo7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBV1E7RUFDSSxZQUFBO0FBVFo7QUFZUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFWWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlldy1kZXRhaWwvcmV2aWV3LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBwYWRkaW5nIDogMTZweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJldmlld19kaXZ7XHJcbiAgICAgICAgLnVzZXJfZmxleCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLnVzZXJfYmFjayB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlcl9kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdyZXlfcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmF0aW5nX2ZsZXgge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAuc3Rhcl9mbGV4IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21tZW50X2ZsZXgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGh1bWJfaWNuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoYXRfaWNuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21tZW50X3RleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLnJlYWRfc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob3RvX2JhY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/review-detail/review-detail.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/review-detail/review-detail.page.ts ***!
      \***********************************************************/

    /*! exports provided: ReviewDetailPage */

    /***/
    function srcAppPagesReviewDetailReviewDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewDetailPage", function () {
        return ReviewDetailPage;
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

      var ReviewDetailPage = /*#__PURE__*/function () {
        function ReviewDetailPage(navCtrl) {
          _classCallCheck(this, ReviewDetailPage);

          this.navCtrl = navCtrl;
          this.images = ['assets/imgs/food1.jpg', 'assets/imgs/food2.jpg', 'assets/imgs/food3.jpg', 'assets/imgs/food4.jpg', 'assets/imgs/food5.jpg', 'assets/imgs/food6.jpg', 'assets/imgs/food7.jpg', 'assets/imgs/food1.jpg', 'assets/imgs/food2.jpg', 'assets/imgs/food3.jpg'];
        }

        _createClass(ReviewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return ReviewDetailPage;
      }();

      ReviewDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      ReviewDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-review-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./review-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review-detail/review-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./review-detail.page.scss */
        "./src/app/pages/review-detail/review-detail.page.scss"))["default"]]
      })], ReviewDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-review-detail-review-detail-module-es5.js.map