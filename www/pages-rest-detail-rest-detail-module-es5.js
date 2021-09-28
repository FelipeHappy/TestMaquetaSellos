(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-detail-rest-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-detail/rest-detail.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-detail/rest-detail.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRestDetailRestDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food1.jpg)'\">\r\n            <div class=\"gradient_div\">\r\n                <ion-icon name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n                <ion-label class=\"name_lbl\">Blacksmith Cafe</ion-label>\r\n            </div>\r\n        </div>\r\n\r\n        <ion-button expand=\"block\" class=\"order_btn\" (click)=\"goToRest()\">\r\n            Order Food Online\r\n        </ion-button>\r\n\r\n        <div class=\"flex_div\">\r\n            <div class=\"inner_div\">\r\n                <ion-icon name=\"share-social-outline\"></ion-icon>\r\n                <ion-label>share</ion-label>\r\n            </div>\r\n            <div class=\"inner_div\" (click)=\"goToAddComment()\">\r\n                <ion-icon name=\"star-outline\"></ion-icon>\r\n                <ion-label>Review</ion-label>\r\n            </div>\r\n            <div class=\"inner_div\">\r\n                <ion-icon name=\"camera-outline\"></ion-icon>\r\n                <ion-label>Photo</ion-label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"map\"></div>\r\n\r\n        <div class=\"content_div\">\r\n            <ion-label class=\"detail_lbl\">Call <span>9876543212</span></ion-label>\r\n            <ion-label class=\"detail_lbl\">Cuisines <span>American, Cafe</span></ion-label>\r\n            <ion-label class=\"detail_lbl\">Average Cost <span>$20 - $50</span></ion-label>\r\n\r\n            <div class=\"header_div\">\r\n                <ion-label class=\"bold_lbl\">Photos</ion-label>\r\n                <ion-label class=\"green_lbl\">+ Add</ion-label>\r\n            </div>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"3\" *ngFor=\"let item of images; let i = index\" (click)=\"goToAllPhotos()\">\r\n                    <div [style.backgroundImage]=\"'url('+ item.img +')'\" class=\"photo_back\"></div>\r\n                    <ion-label class=\"photo_lbl\">{{item.name}}</ion-label>\r\n                    <ion-label class=\"loc_lbl\">(80)</ion-label> \r\n                </ion-col>\r\n            </ion-row>\r\n\r\n        </div>\r\n\r\n        <ion-label class=\"title_lbl\">Review</ion-label>\r\n\r\n        <div class=\"review_div\" *ngFor=\"let item of [1,2,3]\">\r\n            <div class=\"user_flex\">\r\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n                <div class=\"user_detail\">\r\n                    <ion-label class=\"username\">Kelly West</ion-label>\r\n                    <ion-label class=\"grey_review\">120 Reviews, 200 Followers</ion-label>\r\n                </div>\r\n                <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"small\">\r\n                    Follow\r\n                </ion-button>\r\n            </div>\r\n\r\n            <span (click)=\"goToReviewDetail()\">\r\n                <div class=\"rating_flex\">\r\n                    <div class=\"star_flex\">\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star-outline\"></ion-icon>\r\n                        <ion-label>4.0</ion-label>\r\n                    </div>\r\n                    <div class=\"comment_flex\">\r\n                        <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n                        <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <ion-label class=\"comment_text\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n                    when an unknown printer electronic typesetting... <span class=\"read_span\">Read more..</span>\r\n                </ion-label>\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"3\" *ngFor=\"let item of (images | slice: 0:4); let i = index\">\r\n                        <div [style.backgroundImage]=\"'url('+ item.img +')'\" class=\"photo_back\">\r\n                            <div class=\"overlay_div\" *ngIf=\"i == 3\">\r\n                                <ion-label>+ 12</ion-label>\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n            </span>\r\n        </div>\r\n\r\n        <ion-label class=\"all_review_lbl\" (click)=\"goToAllReviews()\">Read All (123)</ion-label>\r\n\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/rest-detail/rest-detail-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/rest-detail/rest-detail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: RestDetailPageRoutingModule */

    /***/
    function srcAppPagesRestDetailRestDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestDetailPageRoutingModule", function () {
        return RestDetailPageRoutingModule;
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


      var _rest_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rest-detail.page */
      "./src/app/pages/rest-detail/rest-detail.page.ts");

      var routes = [{
        path: '',
        component: _rest_detail_page__WEBPACK_IMPORTED_MODULE_3__["RestDetailPage"]
      }];

      var RestDetailPageRoutingModule = function RestDetailPageRoutingModule() {
        _classCallCheck(this, RestDetailPageRoutingModule);
      };

      RestDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RestDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/rest-detail/rest-detail.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/rest-detail/rest-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: RestDetailPageModule */

    /***/
    function srcAppPagesRestDetailRestDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestDetailPageModule", function () {
        return RestDetailPageModule;
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


      var _rest_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rest-detail-routing.module */
      "./src/app/pages/rest-detail/rest-detail-routing.module.ts");
      /* harmony import */


      var _rest_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rest-detail.page */
      "./src/app/pages/rest-detail/rest-detail.page.ts");

      var RestDetailPageModule = function RestDetailPageModule() {
        _classCallCheck(this, RestDetailPageModule);
      };

      RestDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rest_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestDetailPageRoutingModule"]],
        declarations: [_rest_detail_page__WEBPACK_IMPORTED_MODULE_6__["RestDetailPage"]]
      })], RestDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/rest-detail/rest-detail.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/rest-detail/rest-detail.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRestDetailRestDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.main_content_div .back_img .gradient_div {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .back_img .gradient_div ion-icon {\n  color: white;\n  font-size: 30px;\n  margin-top: 40px;\n  margin-left: 16px;\n}\n.main_content_div .back_img .gradient_div .name_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n  color: white;\n  position: absolute;\n  left: 16px;\n  bottom: 16px;\n}\n.main_content_div .order_btn {\n  margin: 0;\n  --border-radius: 0px;\n  box-shadow: none;\n}\n.main_content_div .flex_div {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .flex_div .inner_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div .flex_div .inner_div ion-icon {\n  font-size: 20px;\n}\n.main_content_div .flex_div .inner_div ion-label {\n  font-size: 14px;\n  margin-top: 5px;\n}\n.main_content_div .map {\n  width: 100%;\n  height: 120px;\n  background: lightgray;\n}\n.main_content_div .content_div {\n  padding: 16px;\n}\n.main_content_div .content_div .detail_lbl {\n  display: flex;\n  justify-content: space-between;\n  color: grey;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .detail_lbl span {\n  color: cadetblue;\n}\n.main_content_div .content_div .header_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .content_div .header_div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .header_div .green_lbl {\n  color: cadetblue;\n}\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n  padding-left: 16px;\n}\n.main_content_div .review_div {\n  padding: 16px;\n  border-bottom: 1px solid lightgrey;\n}\n.main_content_div .review_div .user_flex {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .review_div .user_flex .user_back {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .review_div .user_flex .user_detail {\n  padding-left: 16px;\n}\n.main_content_div .review_div .user_flex .user_detail .username {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .review_div .user_flex .user_detail .grey_review {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .review_div .user_flex ion-button {\n  --border-radius: 25px;\n  position: absolute;\n  right: 0;\n  color: cadetblue;\n  --border-color: cadetblue;\n}\n.main_content_div .review_div .rating_flex {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .review_div .rating_flex .star_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-icon {\n  color: var(--ion-color-primary);\n  margin-left: 3px;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-label {\n  color: var(--ion-color-primary);\n  margin-left: 10px;\n  font-size: 14px;\n}\n.main_content_div .review_div .rating_flex .comment_flex {\n  display: flex;\n}\n.main_content_div .review_div .rating_flex .comment_flex .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .review_div .rating_flex .comment_flex .chat_icn {\n  font-size: 20px;\n}\n.main_content_div .review_div .comment_text {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .review_div .comment_text .read_span {\n  color: cadetblue;\n}\n.main_content_div .review_div .photo_flex {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  margin-bottom: 10px;\n}\n.main_content_div .review_div .photo_flex .image_flex {\n  width: 100%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back {\n  width: 100%;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back .overlay_div {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  position: relative;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back .overlay_div ion-label {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .all_review_lbl {\n  color: cadetblue;\n  font-size: 14px;\n  padding: 16px;\n}\n.photo_back {\n  width: 100%;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.photo_back .overlay_div {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  position: relative;\n}\n.photo_back .overlay_div ion-label {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.photo_lbl {\n  font-size: 14px;\n  font-family: \"semi-bold\";\n  text-align: center;\n  margin-top: 5px;\n}\n.loc_lbl {\n  color: grey;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC1kZXRhaWwvcmVzdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFSO0FBRVE7RUFDSSwwRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQWhCO0FBR1k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQURoQjtBQU9JO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTlI7QUFRUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFRWTtFQUNJLGVBQUE7QUFOaEI7QUFTWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBUGhCO0FBWUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBVlI7QUFhSTtFQUNJLGFBQUE7QUFYUjtBQWFRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWFo7QUFhWTtFQUNJLGdCQUFBO0FBWGhCO0FBZVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBYlo7QUFlWTtFQUNJLHdCQUFBO0FBYmhCO0FBZVk7RUFDSSxnQkFBQTtBQWJoQjtBQWtCSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7QUFoQlI7QUFtQkk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUFqQlI7QUFtQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWpCWjtBQWtCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFoQmhCO0FBa0JZO0VBQ0ksa0JBQUE7QUFoQmhCO0FBaUJnQjtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQWZwQjtBQWlCZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQWZwQjtBQWtCWTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWhCaEI7QUFvQlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBbEJaO0FBb0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBbEJoQjtBQW9CZ0I7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0FBbEJwQjtBQXFCZ0I7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW5CcEI7QUFzQlk7RUFDSSxhQUFBO0FBcEJoQjtBQXNCZ0I7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXBCcEI7QUF1QmdCO0VBQ0ksZUFBQTtBQXJCcEI7QUEwQlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQXhCWjtBQTBCWTtFQUNJLGdCQUFBO0FBeEJoQjtBQTRCUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUExQlo7QUE0Qlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTFCaEI7QUE0QmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQTFCcEI7QUE0Qm9CO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUExQnhCO0FBNEJ3QjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUExQjVCO0FBa0NJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWhDUjtBQXFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7QUFvQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWxDUjtBQW9DUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFsQ1o7QUFzQ0E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFuQ0o7QUFzQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbkNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzdC1kZXRhaWwvcmVzdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5iYWNrX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuZ3JhZGllbnRfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLDAuNSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZV9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vcmRlcl9idG4ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmlubmVyX2RpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRfZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgICAgICAuZGV0YWlsX2xibCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlcl9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAuYm9sZF9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmVlbl9sYmwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXdfZGl2e1xyXG4gICAgICAgIHBhZGRpbmcgOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcblxyXG4gICAgICAgIC51c2VyX2ZsZXgge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC51c2VyX2JhY2sge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXJfZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ncmV5X3JldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhdGluZ19mbGV4IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgLnN0YXJfZmxleCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tbWVudF9mbGV4IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRodW1iX2ljbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaGF0X2ljbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29tbWVudF90ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICAgIC5yZWFkX3NwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGhvdG9fZmxleCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZV9mbGV4IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucGhvdG9fYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAub3ZlcmxheV9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWxsX3Jldmlld19sYmwge1xyXG4gICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ucGhvdG9fYmFjayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5vdmVybGF5X2RpdiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5waG90b19sYmwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubG9jX2xibCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/rest-detail/rest-detail.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/rest-detail/rest-detail.page.ts ***!
      \*******************************************************/

    /*! exports provided: RestDetailPage */

    /***/
    function srcAppPagesRestDetailRestDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestDetailPage", function () {
        return RestDetailPage;
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RestDetailPage = /*#__PURE__*/function () {
        function RestDetailPage(route, navCrtl) {
          _classCallCheck(this, RestDetailPage);

          this.route = route;
          this.navCrtl = navCrtl;
          this.images = [{
            img: 'assets/imgs/food1.jpg',
            name: 'Food'
          }, {
            img: 'assets/imgs/food2.jpg',
            name: 'Special'
          }, {
            img: 'assets/imgs/food3.jpg',
            name: 'Menu'
          }, {
            img: 'assets/imgs/food4.jpg',
            name: 'All Photos'
          }];
        }

        _createClass(RestDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToAllReviews",
          value: function goToAllReviews() {
            this.route.navigate(['/all-reviews']);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCrtl.back();
          }
        }, {
          key: "goToReviewDetail",
          value: function goToReviewDetail() {
            this.route.navigate(['/review-detail']);
          }
        }, {
          key: "goToAllPhotos",
          value: function goToAllPhotos() {
            this.route.navigate(['/all-photos']);
          }
        }, {
          key: "goToRest",
          value: function goToRest() {
            this.route.navigate(['/restaurants']);
          }
        }, {
          key: "goToAddComment",
          value: function goToAddComment() {
            this.route.navigate(['/add-comment']);
          }
        }]);

        return RestDetailPage;
      }();

      RestDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      RestDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rest-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rest-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-detail/rest-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rest-detail.page.scss */
        "./src/app/pages/rest-detail/rest-detail.page.scss"))["default"]]
      })], RestDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-rest-detail-rest-detail-module-es5.js.map