(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trending-trending-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trending/trending.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trending/trending.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food1.jpg)'\">\r\n            <div class=\"gradient_div\">\r\n                <div class=\"flex_icn\">\r\n                    <ion-icon name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n                    <ion-label>Share</ion-label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <ion-label class=\"title_lbl\">Trending</ion-label>\r\n\r\n        <div class=\"header_div\">\r\n            <ion-label class=\"bold_lbl\">20 Restaurants</ion-label>\r\n            <ion-label class=\"green_lbl\" (click)=\"openFilterModel()\">Filter</ion-label>\r\n        </div>\r\n        \r\n        <div class=\"card_box\" *ngFor=\"let item of restaurants\">\r\n            <div class=\"detail_div\">\r\n                <ion-label class=\"bold_name\">Good Thai</ion-label>\r\n                <ion-label class=\"grey_lbl\">10:30AM to 10:00 PM</ion-label>\r\n                <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar.</ion-label>\r\n            </div>\r\n            <div class=\"last_div\">\r\n                <div class=\"color_box\"><ion-label>4.5</ion-label></div>\r\n                <ion-icon name=\"bookmark\"></ion-icon>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/trending/trending-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/trending/trending-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TrendingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageRoutingModule", function() { return TrendingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trending.page */ "./src/app/pages/trending/trending.page.ts");




const routes = [
    {
        path: '',
        component: _trending_page__WEBPACK_IMPORTED_MODULE_3__["TrendingPage"]
    }
];
let TrendingPageRoutingModule = class TrendingPageRoutingModule {
};
TrendingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrendingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trending/trending.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/trending/trending.module.ts ***!
  \***************************************************/
/*! exports provided: TrendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _trending_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trending-routing.module */ "./src/app/pages/trending/trending-routing.module.ts");
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trending.page */ "./src/app/pages/trending/trending.page.ts");







let TrendingPageModule = class TrendingPageModule {
};
TrendingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trending_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrendingPageRoutingModule"]
        ],
        declarations: [_trending_page__WEBPACK_IMPORTED_MODULE_6__["TrendingPage"]]
    })
], TrendingPageModule);



/***/ }),

/***/ "./src/app/pages/trending/trending.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/trending/trending.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.main_content_div .back_img .gradient_div {\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div .back_img .gradient_div .flex_icn {\n  padding: 40px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main_content_div .back_img .gradient_div .flex_icn ion-icon {\n  color: white;\n  font-size: 30px;\n}\n\n.main_content_div .back_img .gradient_div .flex_icn ion-label {\n  color: white;\n}\n\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n  font-size: 26px;\n  padding-left: 16px;\n  padding-top: 16px;\n}\n\n.main_content_div .header_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.main_content_div .header_div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .header_div .green_lbl {\n  color: cadetblue;\n}\n\n.main_content_div .card_box {\n  margin-bottom: 10px;\n  background: white;\n  padding: 16px;\n  display: flex;\n}\n\n.main_content_div .card_box .detail_div {\n  position: relative;\n}\n\n.main_content_div .card_box .detail_div .bold_name {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box .detail_div .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n\n.main_content_div .card_box .detail_div .addr_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-top: 5px;\n}\n\n.main_content_div .card_box .detail_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n}\n\n.main_content_div .card_box .detail_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .detail_div ion-icon {\n  color: cadetblue;\n  position: absolute;\n  font-size: 20px;\n  right: 0;\n  bottom: 7px;\n}\n\n.main_content_div .card_box .last_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.main_content_div .card_box .last_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.main_content_div .card_box .last_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .last_div ion-icon {\n  color: cadetblue;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFSTtFQUNJLGNBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ1I7O0FBQ1E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDWjs7QUFDWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDaEI7O0FBQWdCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFFcEI7O0FBQWdCO0VBQ0ksWUFBQTtBQUVwQjs7QUFHSTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQURSOztBQUdRO0VBQ0ksd0JBQUE7QUFEWjs7QUFJUTtFQUNJLGdCQUFBO0FBRlo7O0FBS0k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFIUjs7QUFLUTtFQUNJLGtCQUFBO0FBSFo7O0FBS1k7RUFDSSx3QkFBQTtBQUhoQjs7QUFLWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSGhCOztBQUtZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSGhCOztBQU1ZO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBSmhCOztBQU1nQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKcEI7O0FBUVk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBTmhCOztBQVVRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQVJaOztBQVVZO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSaEI7O0FBVWdCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJwQjs7QUFXWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQVRoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyZW5kaW5nL3RyZW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YyRjJGNDtcclxufVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJhY2tfaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5ncmFkaWVudF9kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5mbGV4X2ljbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIC5ib2xkX2xibCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmVlbl9sYmwge1xyXG4gICAgICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmJvbGRfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyZXlfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdF9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5jb2xvcl9ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/trending/trending.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/trending/trending.page.ts ***!
  \*************************************************/
/*! exports provided: TrendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPage", function() { return TrendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../filter/filter.page */ "./src/app/pages/filter/filter.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let TrendingPage = class TrendingPage {
    constructor(navCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.restaurants = [
            {
                img: 'assets/imgs/food1.jpg'
            },
            {
                img: 'assets/imgs/food2.jpg'
            },
            {
                img: 'assets/imgs/food3.jpg'
            },
            {
                img: 'assets/imgs/food4.jpg'
            },
        ];
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
    openFilterModel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_1__["FilterPage"],
                cssClass: 'custom_modal'
            });
            return yield modal.present();
        });
    }
};
TrendingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
TrendingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-trending',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trending.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trending/trending.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trending.page.scss */ "./src/app/pages/trending/trending.page.scss")).default]
    })
], TrendingPage);



/***/ })

}]);
//# sourceMappingURL=pages-trending-trending-module-es2015.js.map