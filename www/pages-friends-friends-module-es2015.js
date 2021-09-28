(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-friends-friends-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friends/friends.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friends/friends.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Friends</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"user_div\" *ngFor=\"let item of users\">\r\n            <div class=\"user_back\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n            <div class=\"user_detail\">\r\n                <ion-label class=\"bold_lbl\">Elvin Sharvill</ion-label>\r\n                <ion-label class=\"grey_lbl\">Lorem ipsum</ion-label>\r\n            </div>\r\n            <ion-button fill=\"outline\" shape=\"round\" size=\"small\">\r\n                Follow\r\n            </ion-button>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/friends/friends-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/friends/friends-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FriendsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageRoutingModule", function() { return FriendsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");




const routes = [
    {
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_3__["FriendsPage"]
    }
];
let FriendsPageRoutingModule = class FriendsPageRoutingModule {
};
FriendsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FriendsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/friends/friends.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.module.ts ***!
  \*************************************************/
/*! exports provided: FriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friends-routing.module */ "./src/app/pages/friends/friends-routing.module.ts");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");







let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["FriendsPageRoutingModule"]
        ],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })
], FriendsPageModule);



/***/ }),

/***/ "./src/app/pages/friends/friends.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .user_div {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 10px;\n  background: white;\n}\n\n.main_content_div .user_div .user_back {\n  height: 45px;\n  width: 45px;\n  background-position: top;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .user_div .user_detail {\n  padding-left: 10px;\n  position: relative;\n}\n\n.main_content_div .user_div .user_detail .bold_lbl {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .user_div .user_detail .grey_lbl {\n  color: grey;\n  font-size: 14px;\n}\n\n.main_content_div .user_div ion-button {\n  color: cadetblue;\n  --border-color: cadetblue;\n  --border-radius: 25px;\n  position: absolute;\n  right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBRVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQVo7O0FBRVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSx3QkFBQTtBQUFoQjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQWhCOztBQUlRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjJGMkY0O1xyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJfZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG4gICAgICAgIC51c2VyX2JhY2sge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyX2RldGFpbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JleV9sYmwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/friends/friends.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/friends/friends.page.ts ***!
  \***********************************************/
/*! exports provided: FriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPage", function() { return FriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let FriendsPage = class FriendsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.users = [
            { img: 'assets/imgs/user1.jpg' },
            { img: 'assets/imgs/user2.jpg' },
            { img: 'assets/imgs/user3.jpg' },
            { img: 'assets/imgs/user4.jpg' },
            { img: 'assets/imgs/user5.jpg' },
        ];
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
};
FriendsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
FriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-friends',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friends.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friends/friends.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friends.page.scss */ "./src/app/pages/friends/friends.page.scss")).default]
    })
], FriendsPage);



/***/ })

}]);
//# sourceMappingURL=pages-friends-friends-module-es2015.js.map