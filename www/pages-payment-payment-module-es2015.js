(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Payment</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    \r\n  <div class=\"main_content_div\">\r\n  \r\n      <ion-label class=\"welcome_lbl\">Payment</ion-label>\r\n  \r\n      <ion-label class=\"amount_lbl\">Amount Payable <span>Rs. 1040</span></ion-label>\r\n      \r\n  \r\n      <div class=\"flex_div\" (click)=\"payID = 1\">\r\n          <div class=\"round_div\">\r\n              <img src=\"assets/imgs/stripe.png\" alt=\"\">\r\n          </div>\r\n          <ion-label>Pay with stripe</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"content_div\" *ngIf=\"payID == 1\">\r\n          \r\n          <ion-radio-group value=\"card1\" mode=\"md\">\r\n\r\n              <div class=\"card_div\">\r\n                  <ion-radio value=\"card1\"></ion-radio>\r\n                  <div>\r\n                    <ion-label class=\"small_lbl\">Personal</ion-label>\r\n                    <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"card_div\">\r\n                  <ion-radio value=\"card2\"></ion-radio>\r\n                  <div>\r\n                    <ion-label class=\"small_lbl\">Office</ion-label>\r\n                    <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"card_div\">\r\n                  <ion-radio value=\"card3\"></ion-radio>\r\n                  <div>\r\n                    <ion-label class=\"small_lbl\">Father</ion-label>\r\n                    <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                  </div>\r\n              </div>\r\n\r\n          </ion-radio-group>\r\n          \r\n          <ion-button expand=\"block\" (click)=\"goToSuccess()\">\r\n              Pay\r\n          </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"flex_div\" (click)=\"payID = 2\">\r\n          <div class=\"round_div\">\r\n              <img src=\"assets/imgs/paypal.png\" alt=\"\">\r\n          </div>\r\n          <ion-label>Pay with Paypal</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"content_div\" *ngIf=\"payID == 2\">\r\n          <ion-input type=\"text\" placeholder=\"Paypal ID\"></ion-input>\r\n          <ion-button expand=\"block\" (click)=\"goToSuccess()\">\r\n              Pay\r\n          </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"flex_div\" (click)=\"payID = 3\">\r\n          <div class=\"round_div\">\r\n              <img src=\"assets/imgs/cod.png\">\r\n          </div>\r\n          <ion-label>Cash on Delivery</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"content_div\" *ngIf=\"payID == 3\">\r\n          <ion-button expand=\"block\" (click)=\"goToSuccess()\">\r\n              Pay\r\n          </ion-button>\r\n      </div>\r\n  \r\n  </div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n  padding-top: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 20px;\n}\n.main_content_div .amount_lbl {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.main_content_div .flex_div .round_div {\n  border: 1px solid lightgrey;\n  width: 48px;\n  height: 48px;\n  border-radius: 100%;\n  position: relative;\n}\n.main_content_div .flex_div .round_div img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 30px;\n}\n.main_content_div .flex_div ion-label {\n  margin-left: 16px;\n}\n.main_content_div .content_div ion-input {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.main_content_div .content_div .card_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  border-radius: 3px;\n}\n.main_content_div .content_div .card_div div {\n  margin-left: 16px;\n}\n.main_content_div .content_div .card_div div .small_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .content_div .card_div div .card_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  display: block;\n  margin: auto;\n  margin-bottom: 30px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFHUTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFEaEI7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFPUTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUxaO0FBUVE7RUFDSSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFRWTtFQUNJLGlCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFOcEI7QUFRZ0I7RUFDSSx3QkFBQTtBQU5wQjtBQVlJO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lX2xibCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnRfbGJsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgLnJvdW5kX2RpdiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkX2xibCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let PaymentPage = class PaymentPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.payID = 1;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToSuccess() {
        this.router.navigate(['/success']);
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map