(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div *ngIf=\"tabID == 1\">\r\n            <ion-label class=\"bold_lbl\">Fogot Password ?</ion-label>\r\n            <ion-label class=\"grey_lbl\">Please enter your email</ion-label>\r\n            <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n            <ion-button expand=\"block\" (click)=\"tabID = 2\">\r\n                Sumbit\r\n            </ion-button>\r\n        </div>\r\n\r\n        <div *ngIf=\"tabID == 2\">\r\n            <ion-label class=\"bold_lbl\">Verify OTP</ion-label>\r\n            <ion-label class=\"grey_lbl\">Please enter your OTP</ion-label>\r\n            <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:4}\"></ng-otp-input>\r\n            <ion-button expand=\"block\" (click)=\"tabID = 3\">\r\n                Sumbit\r\n            </ion-button>\r\n            <ion-label class=\"small_lbl\">Resend OTP</ion-label>\r\n        </div>\r\n\r\n        <div *ngIf=\"tabID == 3\">\r\n            <ion-label class=\"bold_lbl\">Set New Password</ion-label>\r\n            <ion-label class=\"grey_lbl\">Please enter new password</ion-label>\r\n            <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-label class=\"grey_lbl\">Please enter confirm password</ion-label>\r\n            <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-button expand=\"block\" (click)=\"goToLogin()\">\r\n                Change Password\r\n            </ion-button>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/forgot/forgot-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgot/forgot.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/pages/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");








let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_6__["ForgotPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_1__["NgOtpInputModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n  height: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .bold_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n  margin-top: 40px;\n  margin-bottom: 10px;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  font-size: 14px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-input {\n  font-family: \"semi-bold\";\n  border-bottom: 1px solid lightgrey;\n  margin-bottom: 16px;\n}\n.main_content_div ion-button {\n  margin-top: 40px;\n  margin-bottom: 16px;\n}\n.main_content_div .small_lbl {\n  text-align: center;\n  font-size: 14px;\n  color: cadetblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuYm9sZF9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmV5X2xibCB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbWFsbF9sYmwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let ForgotPage = class ForgotPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.tabID = 1;
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
    onOtpChange(eve) {
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.page.scss */ "./src/app/pages/forgot/forgot.page.scss")).default]
    })
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-forgot-module-es2015.js.map