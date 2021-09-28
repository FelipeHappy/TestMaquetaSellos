(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nfccontainer-nfccontainer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nfccontainer/nfccontainer.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nfccontainer/nfccontainer.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>nfccontainer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header>\r\n  <ion-toolbar color='success'>\r\n    <ion-buttons slot='start'>\r\n      <ion-back-button defaultHref='/'> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Detalle patente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='4' class='ion-text-start'>\r\n        <h2>Patente:</h2>\r\n      </ion-col>\r\n      <ion-col size='6' class='ion-text-start'>\r\n        <h2 class=\"ion-text-center patent-name\">JFDJ50</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-list class='list-data'>\r\n      <ion-item>\r\n          <ion-label>Sello</ion-label>\r\n          <ion-label>Estado</ion-label>\r\n          <ion-label>Vence</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <span class='sello-state'>\r\n          <ion-label>N</ion-label>\r\n        </span>\r\n        <ion-label class=\"ion-text-end\" color='success'>Vigente</ion-label>\r\n        <ion-label class=\"ion-text-end\">23-03-2022</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <span class='sello-state-example'>\r\n          <ion-label>A</ion-label>\r\n        </span>\r\n        <ion-label class=\"ion-text-end\" color='success'>Vigente</ion-label>\r\n        <ion-label class=\"ion-text-end\">23-03-2022</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <span class='sello-state-example'>\r\n          <ion-label>A</ion-label>\r\n        </span>\r\n        <ion-label class=\"ion-text-end\" color='success'>Vigente</ion-label>\r\n        <ion-label class=\"ion-text-end\">23-03-2022</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <span class='sello-state'>\r\n          <ion-label>N</ion-label>\r\n        </span>\r\n        <ion-label class=\"ion-text-end\" color='success'>Vigente</ion-label>\r\n        <ion-label class=\"ion-text-end\">23-03-2022</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <span class='sello-state'>\r\n          <ion-label>N</ion-label>\r\n        </span>\r\n        <ion-label class=\"ion-text-end\" color='success'>Vigente</ion-label>\r\n        <ion-label class=\"ion-text-end\">23-03-2022</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-row class='container-data'>\r\n      <ion-col size='12' class=\"ion-text-start\">\r\n        <h3>Empresa:</h3>\r\n      </ion-col>\r\n      <ion-col size='12' class=\"ion-text-start\">\r\n        <h3>Gerencia:</h3>\r\n      </ion-col>\r\n      <ion-col size='12' class=\"ion-text-start\">\r\n        <h3>Fecha de lectura:</h3>\r\n      </ion-col>\r\n      <ion-col size='12' class=\"ion-text-start\">\r\n        <h3>Id Sello:</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class='button-fixed-footer'>\r\n      <ion-col size=\"12\" class=\"ion-text-center ion-padding-top\">\r\n        <ion-button expand=\"block\" color=\"success\" href=\"/login\" class='button-scan'>\r\n          <h3>Escanear otro Sello</h3>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <!-- <ion-img [src]=\"logo\"></ion-img> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/nfccontainer/nfccontainer-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nfccontainer/nfccontainer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NfccontainerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfccontainerPageRoutingModule", function() { return NfccontainerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nfccontainer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfccontainer.page */ "./src/app/pages/nfccontainer/nfccontainer.page.ts");




const routes = [
    {
        path: '',
        component: _nfccontainer_page__WEBPACK_IMPORTED_MODULE_3__["NfccontainerPage"]
    }
];
let NfccontainerPageRoutingModule = class NfccontainerPageRoutingModule {
};
NfccontainerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NfccontainerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/nfccontainer/nfccontainer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/nfccontainer/nfccontainer.module.ts ***!
  \***********************************************************/
/*! exports provided: NfccontainerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfccontainerPageModule", function() { return NfccontainerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nfccontainer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nfccontainer-routing.module */ "./src/app/pages/nfccontainer/nfccontainer-routing.module.ts");
/* harmony import */ var _nfccontainer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nfccontainer.page */ "./src/app/pages/nfccontainer/nfccontainer.page.ts");







let NfccontainerPageModule = class NfccontainerPageModule {
};
NfccontainerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nfccontainer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NfccontainerPageRoutingModule"]
        ],
        declarations: [_nfccontainer_page__WEBPACK_IMPORTED_MODULE_6__["NfccontainerPage"]]
    })
], NfccontainerPageModule);



/***/ }),

/***/ "./src/app/pages/nfccontainer/nfccontainer.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/nfccontainer/nfccontainer.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-background-color {\n  --background: #ac6a08 !important;\n}\n\n.button-fixed-footer {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\n.patent-name {\n  border: 1px solid !important;\n  border-radius: 5px;\n  background: white !important;\n}\n\n.sello-state {\n  border-radius: 5px;\n  padding: 0 5px;\n  text-align: center;\n  height: 50px;\n  width: 50px !important;\n  background: #ff9100;\n  color: white;\n}\n\n.sello-state-example {\n  border-radius: 5px;\n  padding: 0px 0px 0px 0px;\n  text-align: center;\n  height: 50px;\n  width: 50px !important;\n  background: #00158a;\n  color: white;\n}\n\n.sello-state-example > ion-label {\n  font-weight: bold;\n  font-size: 25px;\n  padding-top: 12px;\n}\n\n.sello-state > ion-label {\n  font-weight: bold;\n  font-size: 25px;\n  padding-top: 12px;\n}\n\n.list-data {\n  height: 250px;\n  overflow-y: scroll;\n  --ion-item-background:#ffffffd5;\n  border: 2px solid;\n}\n\n.item-content {\n  background-color: white !important;\n}\n\n.button-scan {\n  --border-radius: 10px;\n  --box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.59);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmZjY29udGFpbmVyL25mY2NvbnRhaW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSxpQkFBQTtFQUNELGVBQUE7RUFDQSxpQkFBQTtBQURIOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtDQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLCtDQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZmNjb250YWluZXIvbmZjY29udGFpbmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogI2FjNmEwOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLWZpeGVkLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wYXRlbnQtbmFtZSB7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGxvLXN0YXRlIHsgXHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDE0NSwgMCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZWxsby1zdGF0ZS1leGFtcGxlIHsgXHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6cmdiKDAsIDIxLCAxMzgpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIFxyXG59XHJcblxyXG4uc2VsbG8tc3RhdGUtZXhhbXBsZSA+IGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLnNlbGxvLXN0YXRlID4gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5saXN0LWRhdGEge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmZmZmZDU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLml0ZW0tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLXNjYW4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMTRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC41OSk7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nfccontainer/nfccontainer.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/nfccontainer/nfccontainer.page.ts ***!
  \*********************************************************/
/*! exports provided: NfccontainerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfccontainerPage", function() { return NfccontainerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NfccontainerPage = class NfccontainerPage {
    constructor() {
        this.logo = '../assets/logo1.png';
    }
    ngOnInit() {
    }
};
NfccontainerPage.ctorParameters = () => [];
NfccontainerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nfccontainer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nfccontainer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nfccontainer/nfccontainer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nfccontainer.page.scss */ "./src/app/pages/nfccontainer/nfccontainer.page.scss")).default]
    })
], NfccontainerPage);



/***/ })

}]);
//# sourceMappingURL=pages-nfccontainer-nfccontainer-module-es2015.js.map