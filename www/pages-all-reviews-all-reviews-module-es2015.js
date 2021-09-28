(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-reviews-all-reviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-reviews/all-reviews.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-reviews/all-reviews.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Reviews</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div class=\"review_div\" *ngFor=\"let item of users\">\r\n            <div class=\"user_flex\">\r\n                <div class=\"user_back\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\r\n                <div class=\"user_detail\">\r\n                    <ion-label class=\"username\">Kelly West</ion-label>\r\n                    <ion-label class=\"grey_review\">120 Reviews, 200 Followers</ion-label>\r\n                </div>\r\n                <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"small\">\r\n                    Follow\r\n                </ion-button>\r\n            </div>\r\n\r\n            <span (click)=\"goToReviewDetail()\">\r\n                <div class=\"rating_flex\">\r\n                    <div class=\"star_flex\">\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star\"></ion-icon>\r\n                        <ion-icon name=\"star-outline\"></ion-icon>\r\n                        <ion-label>4.0</ion-label>\r\n                    </div>\r\n                    <div class=\"comment_flex\">\r\n                        <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n                        <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-label class=\"comment_text\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n                    when an unknown printer electronic typesetting... <span class=\"read_span\">Read more..</span>\r\n                </ion-label>\r\n\r\n                <div class=\"photo_flex\">\r\n                    <div class=\"image_flex\" *ngFor=\"let item of (images | slice: 0:4); let i = index\">\r\n                        <div [style.backgroundImage]=\"'url('+ item.img +')'\" class=\"photo_back\">\r\n                            <div class=\"overlay_div\" *ngIf=\"i == 3\">\r\n                                <ion-label>+ 12</ion-label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </span>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/all-reviews/all-reviews-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/all-reviews/all-reviews-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllReviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReviewsPageRoutingModule", function() { return AllReviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-reviews.page */ "./src/app/pages/all-reviews/all-reviews.page.ts");




const routes = [
    {
        path: '',
        component: _all_reviews_page__WEBPACK_IMPORTED_MODULE_3__["AllReviewsPage"]
    }
];
let AllReviewsPageRoutingModule = class AllReviewsPageRoutingModule {
};
AllReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllReviewsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/all-reviews/all-reviews.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-reviews/all-reviews.module.ts ***!
  \*********************************************************/
/*! exports provided: AllReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReviewsPageModule", function() { return AllReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _all_reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-reviews-routing.module */ "./src/app/pages/all-reviews/all-reviews-routing.module.ts");
/* harmony import */ var _all_reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-reviews.page */ "./src/app/pages/all-reviews/all-reviews.page.ts");







let AllReviewsPageModule = class AllReviewsPageModule {
};
AllReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllReviewsPageRoutingModule"]
        ],
        declarations: [_all_reviews_page__WEBPACK_IMPORTED_MODULE_6__["AllReviewsPage"]]
    })
], AllReviewsPageModule);



/***/ }),

/***/ "./src/app/pages/all-reviews/all-reviews.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-reviews/all-reviews.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div ion-label {\n  display: block;\n}\n.main_content_div .review_div {\n  padding: 16px;\n  border-bottom: 1px solid lightgrey;\n}\n.main_content_div .review_div .user_flex {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .review_div .user_flex .user_back {\n  width: 45px;\n  min-width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .review_div .user_flex .user_detail {\n  padding-left: 16px;\n}\n.main_content_div .review_div .user_flex .user_detail .username {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .review_div .user_flex .user_detail .grey_review {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .review_div .user_flex ion-button {\n  --border-radius: 25px;\n  position: absolute;\n  right: 0;\n  color: cadetblue;\n  --border-color: cadetblue;\n}\n.main_content_div .review_div .rating_flex {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .review_div .rating_flex .star_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-icon {\n  color: var(--ion-color-primary);\n  margin-left: 3px;\n}\n.main_content_div .review_div .rating_flex .star_flex ion-label {\n  color: var(--ion-color-primary);\n  margin-left: 10px;\n  font-size: 14px;\n}\n.main_content_div .review_div .rating_flex .comment_flex {\n  display: flex;\n}\n.main_content_div .review_div .rating_flex .comment_flex .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .review_div .rating_flex .comment_flex .chat_icn {\n  font-size: 20px;\n}\n.main_content_div .review_div .comment_text {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .review_div .comment_text .read_span {\n  color: cadetblue;\n}\n.main_content_div .review_div .photo_flex {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  margin-bottom: 10px;\n}\n.main_content_div .review_div .photo_flex .image_flex {\n  width: 100%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back {\n  width: 100%;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back .overlay_div {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  position: relative;\n}\n.main_content_div .review_div .photo_flex .image_flex .photo_back .overlay_div ion-label {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLXJldmlld3MvYWxsLXJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUNZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDaEI7QUFDWTtFQUNJLGtCQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBRXBCO0FBQWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFFcEI7QUFDWTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNoQjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURaO0FBR1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFEaEI7QUFHZ0I7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0FBRHBCO0FBSWdCO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGcEI7QUFLWTtFQUNJLGFBQUE7QUFIaEI7QUFLZ0I7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQU1nQjtFQUNJLGVBQUE7QUFKcEI7QUFTUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBUFo7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBV1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVFo7QUFXWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVGhCO0FBV2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVdvQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVQ1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1yZXZpZXdzL2FsbC1yZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmV2aWV3X2RpdntcclxuICAgICAgICBwYWRkaW5nIDogMTZweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG5cclxuICAgICAgICAudXNlcl9mbGV4IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAudXNlcl9iYWNrIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyX2RldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAudXNlcm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ3JleV9yZXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yYXRpbmdfZmxleCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5zdGFyX2ZsZXgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbW1lbnRfZmxleCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50aHVtYl9pY24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2hhdF9pY24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbW1lbnRfdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAucmVhZF9zcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob3RvX2ZsZXgge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2VfZmxleCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnBob3RvX2JhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXlfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/all-reviews/all-reviews.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-reviews/all-reviews.page.ts ***!
  \*******************************************************/
/*! exports provided: AllReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReviewsPage", function() { return AllReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AllReviewsPage = class AllReviewsPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.images = [
            {
                img: 'assets/imgs/food1.jpg',
                name: 'Food'
            },
            {
                img: 'assets/imgs/food2.jpg',
                name: 'Special'
            },
            {
                img: 'assets/imgs/food3.jpg',
                name: 'Menu'
            },
            {
                img: 'assets/imgs/food4.jpg',
                name: 'All Photos'
            },
        ];
        this.users = [
            'assets/imgs/user1.jpg',
            'assets/imgs/user2.jpg',
            'assets/imgs/user3.jpg',
            'assets/imgs/user4.jpg',
            'assets/imgs/user5.jpg'
        ];
    }
    ngOnInit() {
    }
    goToReviewDetail() {
        this.route.navigate(['/review-detail']);
    }
    goToBack() {
        this.navCtrl.back();
    }
};
AllReviewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
AllReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-reviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-reviews/all-reviews.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-reviews.page.scss */ "./src/app/pages/all-reviews/all-reviews.page.scss")).default]
    })
], AllReviewsPage);



/***/ })

}]);
//# sourceMappingURL=pages-all-reviews-all-reviews-module-es2015.js.map