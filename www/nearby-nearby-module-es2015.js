(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearby-nearby-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nearby/nearby.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nearby/nearby.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-title>Near By</ion-title>\r\n        <ion-button (click)=\"changeView()\" fill=\"clear\" size=\"small\" slot=\"end\">\r\n            <ion-icon name=\"map\" *ngIf=\"isMap == true\"></ion-icon>\r\n            <ion-icon name=\"list\" *ngIf=\"isMap == false\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"my_header\">\r\n        <div class=\"loc_flex\">\r\n            <ion-icon name=\"location\"></ion-icon>\r\n            <ion-label>Sdyney CBD</ion-label>\r\n        </div>\r\n        <div class=\"header_search\">\r\n            <ion-input type=\"text\" placeholder=\"Search for Restautants..\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n            </ion-input>\r\n        </div>\r\n    </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"map_content_div\" *ngIf=\"isMap == true\">\r\n        <div #map id=\"map\"></div>\r\n    </div>\r\n    \r\n    <div class=\"main_content_div\" *ngIf=\"isMap == false\">\r\n        <div class=\"card_box\" *ngFor=\"let item of [1,2,3,4,5]\" (click)=\"goToRestDetail()\">\r\n            <div class=\"detail_div\">\r\n                <ion-label class=\"bold_name\">Good Thai</ion-label>\r\n                <ion-label class=\"grey_lbl\">10:30AM to 10:00 PM</ion-label>\r\n                <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar.</ion-label>\r\n            </div>\r\n            <div class=\"last_div\">\r\n                <div class=\"color_box\"><ion-label>4.5</ion-label></div>\r\n                <ion-icon name=\"bookmark\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/nearby/nearby-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/nearby/nearby-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NearbyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageRoutingModule", function() { return NearbyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nearby_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nearby.page */ "./src/app/pages/nearby/nearby.page.ts");




const routes = [
    {
        path: '',
        component: _nearby_page__WEBPACK_IMPORTED_MODULE_3__["NearbyPage"]
    }
];
let NearbyPageRoutingModule = class NearbyPageRoutingModule {
};
NearbyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NearbyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/nearby/nearby.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/nearby/nearby.module.ts ***!
  \***********************************************/
/*! exports provided: NearbyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageModule", function() { return NearbyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nearby_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nearby-routing.module */ "./src/app/pages/nearby/nearby-routing.module.ts");
/* harmony import */ var _nearby_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nearby.page */ "./src/app/pages/nearby/nearby.page.ts");







let NearbyPageModule = class NearbyPageModule {
};
NearbyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nearby_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearbyPageRoutingModule"]
        ],
        declarations: [_nearby_page__WEBPACK_IMPORTED_MODULE_6__["NearbyPage"]]
    })
], NearbyPageModule);



/***/ }),

/***/ "./src/app/pages/nearby/nearby.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/nearby/nearby.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my_header {\n  padding: 16px;\n}\n.my_header .loc_flex {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.my_header .loc_flex ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.my_header .loc_flex ion-label {\n  font-family: \"semi-bold\";\n  margin-left: 10px;\n}\n.my_header .header_search ion-input {\n  border: 1px solid lightgrey;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 10px;\n  background: white;\n}\n.my_header .header_search ion-input ion-icon {\n  color: grey;\n  margin-left: 16px;\n}\nion-content {\n  --background: #F2F2F4;\n}\n.map_content_div {\n  width: 100%;\n  height: 100%;\n}\n.map_content_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: flex;\n}\n.main_content_div .card_box {\n  margin-bottom: 10px;\n  background: white;\n  padding: 16px;\n  display: flex;\n}\n.main_content_div .card_box .detail_div {\n  position: relative;\n}\n.main_content_div .card_box .detail_div .bold_name {\n  font-family: \"semi-bold\";\n}\n.main_content_div .card_box .detail_div .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .card_box .detail_div .addr_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-top: 5px;\n}\n.main_content_div .card_box .detail_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n}\n.main_content_div .card_box .detail_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n.main_content_div .card_box .detail_div ion-icon {\n  color: cadetblue;\n  position: absolute;\n  font-size: 20px;\n  right: 0;\n  bottom: 7px;\n}\n.main_content_div .card_box .last_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.main_content_div .card_box .last_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.main_content_div .card_box .last_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n.main_content_div .card_box .last_div ion-icon {\n  color: cadetblue;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmVhcmJ5L25lYXJieS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQUVaO0FBQ1E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FBQ1o7QUFJUTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQUlZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRmhCO0FBUUE7RUFDSSxxQkFBQTtBQUxKO0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpKO0FBTUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpSO0FBT0E7RUFDSSxXQUFBO0FBSko7QUFNSTtFQUNJLGFBQUE7QUFKUjtBQU9JO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBTFI7QUFPUTtFQUNJLGtCQUFBO0FBTFo7QUFPWTtFQUNJLHdCQUFBO0FBTGhCO0FBT1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUxoQjtBQU9ZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTGhCO0FBUVk7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFOaEI7QUFRZ0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTnBCO0FBVVk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBUmhCO0FBWVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBVlo7QUFZWTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVmhCO0FBWWdCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZwQjtBQWFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBWGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmVhcmJ5L25lYXJieS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlfaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAubG9jX2ZsZXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX3NlYXJjaCB7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTZweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjJGMkY0O1xyXG59XHJcbi5tYXBfY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgI21hcHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmJvbGRfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyZXlfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdF9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5jb2xvcl9ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/nearby/nearby.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/nearby/nearby.page.ts ***!
  \*********************************************/
/*! exports provided: NearbyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPage", function() { return NearbyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let NearbyPage = class NearbyPage {
    constructor(route) {
        this.route = route;
        this.isMap = true;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    ngOnInit() {
        this.initMap();
    }
    changeView() {
        this.isMap = !this.isMap;
    }
    goToRestDetail() {
        this.route.navigate(['/rest-detail']);
    }
    initMap() {
        navigator.geolocation.getCurrentPosition((location) => {
            console.log(location);
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                center: { lat: location.coords.latitude, lng: location.coords.longitude },
                zoom: 15
            });
            this.infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch({
                location: { lat: location.coords.latitude, lng: location.coords.longitude },
                radius: 1000,
                type: ['store']
            }, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        this.createMarker(results[i]);
                    }
                }
            });
        }, (error) => {
            console.log(error);
        }, this.options);
        var myplace = { lat: -33.8665, lng: 151.1956 };
    }
    createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.map,
            position: placeLoc
        });
        google.maps.event.addListener(marker, 'click', function () {
            this.infowindow.setContent(place.name);
            this.infowindow.open(this.map, this);
        });
    }
};
NearbyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
NearbyPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['map',] }]
};
NearbyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nearby',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nearby.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nearby/nearby.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nearby.page.scss */ "./src/app/pages/nearby/nearby.page.scss")).default]
    })
], NearbyPage);



/***/ })

}]);
//# sourceMappingURL=nearby-nearby-module-es2015.js.map