(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-location-user-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-location/user-location.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-location/user-location.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>User Current Location</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <ion-input type=\"text\" placeholder=\"Search the city..\"\r\n            (ionInput)=\"onSearchChange1($event)\" \r\n            autocomplete = \"on\"\r\n            showCancelButton=\"never\"\r\n            mode=\"ios\"\r\n            [(ngModel)]=\"autocomplete1.query\"\r\n        ></ion-input>\r\n    \r\n        <!-- <ion-searchbar \r\n          placeholder=\"Why is an exact location better ?\" \r\n          showCancelButton=\"never\"\r\n          (ionInput)=\"onSearchChange1($event)\" \r\n          autocomplete = \"on\"\r\n          showCancelButton=\"never\"\r\n          mode=\"ios\"\r\n          [(ngModel)]=\"autocomplete1.query\"\r\n        >\r\n        </ion-searchbar> -->\r\n\r\n        <ion-list style=\"margin-bottom: 16px;\">\r\n            <ion-item *ngFor=\"let item of autocompleteItems1\" (click)=\"selectSearchResult1(item)\">\r\n              {{ item }}\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n        <ion-label class=\"title_lbl\">Recently visited countries</ion-label>\r\n\r\n        <ion-item detail=\"true\" lines=\"full\" *ngFor=\"let item of countries\">\r\n            <ion-label>{{item}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"goToHome()\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"arrow-forward-sharp\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab>\r\n\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/user-location/user-location-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-location/user-location-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationPageRoutingModule", function() { return UserLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-location.page */ "./src/app/pages/user-location/user-location.page.ts");




const routes = [
    {
        path: '',
        component: _user_location_page__WEBPACK_IMPORTED_MODULE_3__["UserLocationPage"]
    }
];
let UserLocationPageRoutingModule = class UserLocationPageRoutingModule {
};
UserLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-location/user-location.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-location/user-location.module.ts ***!
  \*************************************************************/
/*! exports provided: UserLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationPageModule", function() { return UserLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-location-routing.module */ "./src/app/pages/user-location/user-location-routing.module.ts");
/* harmony import */ var _user_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-location.page */ "./src/app/pages/user-location/user-location.page.ts");







let UserLocationPageModule = class UserLocationPageModule {
};
UserLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserLocationPageRoutingModule"]
        ],
        declarations: [_user_location_page__WEBPACK_IMPORTED_MODULE_6__["UserLocationPage"]]
    })
], UserLocationPageModule);



/***/ }),

/***/ "./src/app/pages/user-location/user-location.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-location/user-location.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-input, .main_content_div ion-searchbar {\n  font-family: \"semi-bold\";\n  border-bottom: 1px solid lightgrey;\n  margin-bottom: 20px;\n}\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n.main_content_div ion-item .item-inner {\n  padding: 0px !important;\n}\n.main_content_div ion-item img {\n  width: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1sb2NhdGlvbi91c2VyLWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNJLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSx3QkFBQTtBQUFSO0FBRUk7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBQVI7QUFFUTtFQUNJLHVCQUFBO0FBQVo7QUFFUTtFQUNJLFdBQUE7QUFBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbG9jYXRpb24vdXNlci1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaW9uLWlucHV0LCBpb24tc2VhcmNoYmFye1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlX2xibCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user-location/user-location.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-location/user-location.page.ts ***!
  \***********************************************************/
/*! exports provided: UserLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationPage", function() { return UserLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let UserLocationPage = class UserLocationPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.autocompleteItems1 = [];
        this.countries = ['India', 'Australia', 'France', 'Korean', 'Brazil', 'Canada', 'Japan'];
    }
    ngOnInit() {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete1 = { query: '' };
        this.autocompleteItems1 = [];
    }
    goToHome() {
        this.route.navigate(['tabs']);
    }
    onSearchChange1(event) {
        if (this.autocomplete1.query === '') {
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete1.query }, (predictions, status) => {
            this.autocompleteItems1 = [];
            console.log(predictions, status);
            predictions.forEach(element => {
                this.autocompleteItems1.push(element.description);
            });
        });
    }
    selectSearchResult1(item) {
        console.log(item);
        this.autocompleteItems1 = [];
        this.autocomplete1.query = item;
    }
    goToBack() {
        this.navCtrl.back();
    }
};
UserLocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
UserLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-location/user-location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-location.page.scss */ "./src/app/pages/user-location/user-location.page.scss")).default]
    })
], UserLocationPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-location-user-location-module-es2015.js.map