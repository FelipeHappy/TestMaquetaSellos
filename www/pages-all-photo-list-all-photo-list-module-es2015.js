(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-photo-list-all-photo-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photo-list/all-photo-list.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photo-list/all-photo-list.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>all-photo-list</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"card_div\" *ngFor=\"let item of images\">\r\n            <div class=\"flex_div\">\r\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n                <div class=\"user_detail\">\r\n                    <ion-label class=\"bold_lbl\">Elvin Sharvill</ion-label>\r\n                    <ion-label class=\"grey_lbl\">45 Reviews, 120 Followers</ion-label>\r\n                </div>\r\n                <ion-button fill=\"outline\" shape=\"round\" size=\"small\">\r\n                  Follow\r\n                </ion-button>\r\n            </div>\r\n            <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\r\n            <div class=\"comment_div\">\r\n                <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n                <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\" (click)=\"goToAddComment()\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/all-photo-list/all-photo-list-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/all-photo-list/all-photo-list-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AllPhotoListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPhotoListPageRoutingModule", function() { return AllPhotoListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_photo_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-photo-list.page */ "./src/app/pages/all-photo-list/all-photo-list.page.ts");




const routes = [
    {
        path: '',
        component: _all_photo_list_page__WEBPACK_IMPORTED_MODULE_3__["AllPhotoListPage"]
    }
];
let AllPhotoListPageRoutingModule = class AllPhotoListPageRoutingModule {
};
AllPhotoListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllPhotoListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/all-photo-list/all-photo-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/all-photo-list/all-photo-list.module.ts ***!
  \***************************************************************/
/*! exports provided: AllPhotoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPhotoListPageModule", function() { return AllPhotoListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _all_photo_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-photo-list-routing.module */ "./src/app/pages/all-photo-list/all-photo-list-routing.module.ts");
/* harmony import */ var _all_photo_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-photo-list.page */ "./src/app/pages/all-photo-list/all-photo-list.page.ts");







let AllPhotoListPageModule = class AllPhotoListPageModule {
};
AllPhotoListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_photo_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllPhotoListPageRoutingModule"]
        ],
        declarations: [_all_photo_list_page__WEBPACK_IMPORTED_MODULE_6__["AllPhotoListPage"]]
    })
], AllPhotoListPageModule);



/***/ }),

/***/ "./src/app/pages/all-photo-list/all-photo-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/all-photo-list/all-photo-list.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .card_div {\n  margin-bottom: 10px;\n  background: white;\n}\n\n.main_content_div .card_div .flex_div {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n\n.main_content_div .card_div .flex_div .user_back {\n  height: 45px;\n  width: 45px;\n  background-position: top;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .card_div .flex_div .user_detail {\n  padding-left: 10px;\n  position: relative;\n}\n\n.main_content_div .card_div .flex_div .user_detail .bold_lbl {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_div .flex_div .user_detail .grey_lbl {\n  color: grey;\n  font-size: 14px;\n}\n\n.main_content_div .card_div .flex_div ion-button {\n  color: cadetblue;\n  --border-color: cadetblue;\n  --border-radius: 25px;\n  position: absolute;\n  right: 16px;\n}\n\n.main_content_div .card_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .card_div .comment_div {\n  padding: 10px 16px;\n}\n\n.main_content_div .card_div .comment_div .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 24px;\n  margin-right: 16px;\n}\n\n.main_content_div .card_div .comment_div .chat_icn {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLXBob3RvLWxpc3QvYWxsLXBob3RvLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDWjs7QUFBWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFFaEI7O0FBQVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRWhCOztBQUFnQjtFQUNJLHdCQUFBO0FBRXBCOztBQUFnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRXBCOztBQUVZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQWhCOztBQUdRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFEWjs7QUFHUTtFQUNJLGtCQUFBO0FBRFo7O0FBRVk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFoQjs7QUFFWTtFQUNJLGVBQUE7QUFBaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbGwtcGhvdG8tbGlzdC9hbGwtcGhvdG8tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGMkYyRjQ7XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIC51c2VyX2JhY2sge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXJfZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ3JleV9sYmwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFja19pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tbWVudF9kaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIC50aHVtYl9pY24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhdF9pY24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/all-photo-list/all-photo-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/all-photo-list/all-photo-list.page.ts ***!
  \*************************************************************/
/*! exports provided: AllPhotoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPhotoListPage", function() { return AllPhotoListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let AllPhotoListPage = class AllPhotoListPage {
    constructor(route) {
        this.route = route;
        this.images = [
            'assets/imgs/food1.jpg',
            'assets/imgs/food2.jpg',
            'assets/imgs/food3.jpg',
            'assets/imgs/food4.jpg',
            'assets/imgs/food5.jpg',
            'assets/imgs/food6.jpg',
            'assets/imgs/food7.jpg',
            'assets/imgs/food1.jpg',
            'assets/imgs/food2.jpg',
            'assets/imgs/food3.jpg',
            'assets/imgs/food4.jpg',
            'assets/imgs/food5.jpg',
            'assets/imgs/food6.jpg',
            'assets/imgs/food7.jpg',
            'assets/imgs/food1.jpg',
            'assets/imgs/food2.jpg',
            'assets/imgs/food3.jpg',
        ];
    }
    ngOnInit() {
    }
    goToAddComment() {
        this.route.navigate(['/add-comment']);
    }
};
AllPhotoListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AllPhotoListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-all-photo-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-photo-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-photo-list/all-photo-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-photo-list.page.scss */ "./src/app/pages/all-photo-list/all-photo-list.page.scss")).default]
    })
], AllPhotoListPage);



/***/ })

}]);
//# sourceMappingURL=pages-all-photo-list-all-photo-list-module-es2015.js.map