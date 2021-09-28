(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-method-payment-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Payment Method</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n    \r\n        <ion-label class=\"title_lbl\">Your Cards</ion-label>\r\n\r\n        <ion-label class=\"add_lbl\" (click)=\"goToAddCard()\">+ Add Card</ion-label>\r\n\r\n        <ion-radio-group value=\"card1\" mode=\"md\">\r\n\r\n            <div class=\"card_div\">\r\n                <ion-radio value=\"card1\"></ion-radio>\r\n                <div>\r\n                <ion-label class=\"small_lbl\">Personal</ion-label>\r\n                <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card_div\">\r\n                <ion-radio value=\"card2\"></ion-radio>\r\n                <div>\r\n                <ion-label class=\"small_lbl\">Office</ion-label>\r\n                <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card_div\">\r\n                <ion-radio value=\"card3\"></ion-radio>\r\n                <div>\r\n                <ion-label class=\"small_lbl\">Father</ion-label>\r\n                <ion-label class=\"card_lbl\">XXXX-XXXX-XXXX-1234</ion-label>\r\n                </div>\r\n            </div>\r\n\r\n        </ion-radio-group>\r\n        \r\n        <ion-button expand=\"block\">\r\n            Set Default Card\r\n        </ion-button>\r\n  \r\n    </div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageRoutingModule", function() { return PaymentMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");




const routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodPage"]
    }
];
let PaymentMethodPageRoutingModule = class PaymentMethodPageRoutingModule {
};
PaymentMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-method-routing.module */ "./src/app/pages/payment-method/payment-method-routing.module.ts");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");







let PaymentMethodPageModule = class PaymentMethodPageModule {
};
PaymentMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodPageRoutingModule"]
        ],
        declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]]
    })
], PaymentMethodPageModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .add_lbl {\n  color: cadetblue;\n  text-align: right;\n  margin-bottom: 16px;\n}\n.main_content_div .card_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  border-radius: 3px;\n}\n.main_content_div .card_div div {\n  margin-left: 16px;\n}\n.main_content_div .card_div div .small_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .card_div div .card_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  display: block;\n  margin: auto;\n  margin-bottom: 30px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSVE7RUFDSSxpQkFBQTtBQUZaO0FBSVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUZoQjtBQUlZO0VBQ0ksd0JBQUE7QUFGaEI7QUFPSTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRfbGJsIHtcclxuICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfZGl2IHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLnNtYWxsX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZF9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.ts ***!
  \*************************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let PaymentMethodPage = class PaymentMethodPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToAddCard() {
        this.router.navigate(['/add-card']);
    }
};
PaymentMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
PaymentMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/pages/payment-method/payment-method.page.scss")).default]
    })
], PaymentMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-method-payment-method-module-es2015.js.map