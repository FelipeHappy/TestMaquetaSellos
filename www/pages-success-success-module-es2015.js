(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-success-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n        <ion-label>Your order placed <br>Successfully</ion-label>\r\n        <ion-button expand=\"block\" (click)=\"goToHome()\">\r\n            Go to Home\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/success/success-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/success/success-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function() { return SuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/success/success.page.ts");




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/success/success.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.module.ts ***!
  \*************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-routing.module */ "./src/app/pages/success/success-routing.module.ts");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/success/success.page.ts");







let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })
], SuccessPageModule);



/***/ }),

/***/ "./src/app/pages/success/success.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .main_content_div {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\nion-content ion-icon {\n  font-size: 120px;\n  color: cadetblue;\n}\nion-content ion-label {\n  color: cadetblue;\n  display: block;\n  margin-top: 40px;\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 40px;\n}\nion-content ion-button {\n  --border-radius: 3px;\n  width: 100%;\n  --background: cadetblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cclxuICAgIC5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/success/success.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/success/success.page.ts ***!
  \***********************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let SuccessPage = class SuccessPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToHome() {
        this.router.navigate(['/tabs/home']);
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./success.page.scss */ "./src/app/pages/success/success.page.scss")).default]
    })
], SuccessPage);



/***/ })

}]);
//# sourceMappingURL=pages-success-success-module-es2015.js.map