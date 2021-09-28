(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobile-verify-mobile-verify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-label class=\"bold_lbl\">Verify your Mobile</ion-label>\r\n        <ion-label class=\"grey_lbl\">Enter your code here</ion-label>\r\n        <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:4}\"></ng-otp-input>\r\n        <ion-button expand=\"block\" (click)=\"goToUserLocation()\">\r\n            Verify Now\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MobileVerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPageRoutingModule", function() { return MobileVerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mobile_verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-verify.page */ "./src/app/pages/mobile-verify/mobile-verify.page.ts");




const routes = [
    {
        path: '',
        component: _mobile_verify_page__WEBPACK_IMPORTED_MODULE_3__["MobileVerifyPage"]
    }
];
let MobileVerifyPageRoutingModule = class MobileVerifyPageRoutingModule {
};
MobileVerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileVerifyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.module.ts ***!
  \*************************************************************/
/*! exports provided: MobileVerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPageModule", function() { return MobileVerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mobile_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-verify-routing.module */ "./src/app/pages/mobile-verify/mobile-verify-routing.module.ts");
/* harmony import */ var _mobile_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-verify.page */ "./src/app/pages/mobile-verify/mobile-verify.page.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");








let MobileVerifyPageModule = class MobileVerifyPageModule {
};
MobileVerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileVerifyPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]
        ],
        declarations: [_mobile_verify_page__WEBPACK_IMPORTED_MODULE_6__["MobileVerifyPage"]]
    })
], MobileVerifyPageModule);



/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .bold_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 10px;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.main_content_div ion-button {\n  margin-top: 40px;\n  margin-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9iaWxlLXZlcmlmeS9tb2JpbGUtdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9iaWxlLXZlcmlmeS9tb2JpbGUtdmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2xkX2xibCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmV5X2xibCB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.page.ts ***!
  \***********************************************************/
/*! exports provided: MobileVerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPage", function() { return MobileVerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let MobileVerifyPage = class MobileVerifyPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goToUserLocation() {
        this.route.navigate(['/user-location']);
    }
    onOtpChange(eve) {
        console.log(eve);
    }
};
MobileVerifyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
MobileVerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mobile-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mobile-verify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mobile-verify.page.scss */ "./src/app/pages/mobile-verify/mobile-verify.page.scss")).default]
    })
], MobileVerifyPage);



/***/ })

}]);
//# sourceMappingURL=pages-mobile-verify-mobile-verify-module-es2015.js.map