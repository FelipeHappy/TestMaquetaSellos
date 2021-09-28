(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurants-restaurants-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restaurants/restaurants.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restaurants/restaurants.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food1.jpg)'\">\r\n            <div class=\"gradient_div\">\r\n                <ion-icon name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n                <ion-label class=\"name_lbl\">Blacksmith Cafe</ion-label>\r\n            </div>\r\n        </div>\r\n        <div class=\"header_div\">\r\n            <ion-label [class.active]=\"tabID == 1\">Italian</ion-label>\r\n            <ion-label [class.active]=\"tabID == 2\">Mexican</ion-label>\r\n            <ion-label [class.active]=\"tabID == 3\">South Indian</ion-label>\r\n            <ion-label [class.active]=\"tabID == 4\">Chinese</ion-label>\r\n            <ion-label [class.active]=\"tabID == 5\">Panjabi</ion-label>\r\n            <ion-label [class.active]=\"tabID == 5\">Gujrati</ion-label>\r\n        </div>\r\n        \r\n        <div class=\"card_box\" *ngFor=\"let item of restaurants\">\r\n            <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n            <div class=\"detail_div\">\r\n                <ion-label class=\"bold_name\">Good Thai</ion-label>\r\n                <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar.</ion-label>\r\n            </div>\r\n            <div class=\"last_div\">\r\n                <div class=\"color_box\"><ion-label>4.5</ion-label></div>\r\n                <ion-icon name=\"bag-add\"></ion-icon>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n    <div class=\"btn_div\" (click)=\"goToCart()\">\r\n        <ion-label>Go to Cart</ion-label>\r\n    </div>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/restaurants/restaurants-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/restaurants/restaurants-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RestaurantsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageRoutingModule", function() { return RestaurantsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _restaurants_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurants.page */ "./src/app/pages/restaurants/restaurants.page.ts");




const routes = [
    {
        path: '',
        component: _restaurants_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantsPage"]
    }
];
let RestaurantsPageRoutingModule = class RestaurantsPageRoutingModule {
};
RestaurantsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestaurantsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/restaurants/restaurants.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/restaurants/restaurants.module.ts ***!
  \*********************************************************/
/*! exports provided: RestaurantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _restaurants_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurants-routing.module */ "./src/app/pages/restaurants/restaurants-routing.module.ts");
/* harmony import */ var _restaurants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurants.page */ "./src/app/pages/restaurants/restaurants.page.ts");







let RestaurantsPageModule = class RestaurantsPageModule {
};
RestaurantsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _restaurants_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantsPageRoutingModule"]
        ],
        declarations: [_restaurants_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantsPage"]]
    })
], RestaurantsPageModule);



/***/ }),

/***/ "./src/app/pages/restaurants/restaurants.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/restaurants/restaurants.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.main_content_div .back_img .gradient_div {\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div .back_img .gradient_div ion-icon {\n  color: white;\n  font-size: 30px;\n  margin-top: 40px;\n  margin-left: 16px;\n}\n\n.main_content_div .back_img .gradient_div .name_lbl {\n  font-size: 24px;\n  font-family: \"semi-bold\";\n  color: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_content_div .header_div {\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px !important;\n}\n\n.main_content_div .header_div ion-label {\n  border: 1px solid cadetblue;\n  border-radius: 25px;\n  white-space: nowrap;\n  font-size: 14px;\n  margin-right: 16px;\n  padding: 1px 16px;\n}\n\n.main_content_div .card_box {\n  margin-bottom: 10px;\n  background: white;\n  padding: 16px;\n  display: flex;\n}\n\n.main_content_div .card_box .back_image {\n  width: 100px;\n  min-width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .card_box .detail_div {\n  margin-left: 16px;\n  position: relative;\n}\n\n.main_content_div .card_box .detail_div .bold_name {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box .detail_div .addr_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-top: 5px;\n}\n\n.main_content_div .card_box .detail_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n}\n\n.main_content_div .card_box .detail_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .detail_div ion-icon {\n  color: cadetblue;\n  position: absolute;\n  font-size: 20px;\n  right: 0;\n  bottom: 7px;\n}\n\n.main_content_div .card_box .last_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.main_content_div .card_box .last_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.main_content_div .card_box .last_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .last_div ion-icon {\n  color: cadetblue;\n  font-size: 20px;\n}\n\nion-footer .btn_div {\n  background: cadetblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 55px;\n}\n\nion-footer .btn_div ion-label {\n  color: white;\n  font-family: \"semi-bold\";\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFSTtFQUNJLGNBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ1I7O0FBQ1E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDWjs7QUFDWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNoQjs7QUFFWTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUFoQjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQUhSOztBQUtRO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFIWjs7QUFNSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUpSOztBQU1RO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSlo7O0FBT1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBTFo7O0FBT1k7RUFDSSx3QkFBQTtBQUxoQjs7QUFPWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUxoQjs7QUFRWTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQU5oQjs7QUFRZ0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTnBCOztBQVVZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQVJoQjs7QUFZUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFWWjs7QUFZWTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVmhCOztBQVlnQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFWcEI7O0FBYVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFYaEI7O0FBa0JJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFmUjs7QUFpQlE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBZloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGMkYyRjQ7XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5iYWNrX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuZ3JhZGllbnRfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYW1lX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5iYWNrX2ltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5ib2xkX25hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyX2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdF9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5jb2xvcl9ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgLmJ0bl9kaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/restaurants/restaurants.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/restaurants/restaurants.page.ts ***!
  \*******************************************************/
/*! exports provided: RestaurantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPage", function() { return RestaurantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../filter/filter.page */ "./src/app/pages/filter/filter.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let RestaurantsPage = class RestaurantsPage {
    constructor(route, navCtrl, modalController) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.tabID = 1;
        this.restaurants = [
            {
                img: 'assets/imgs/food1.jpg'
            },
            {
                img: 'assets/imgs/food2.jpg'
            },
            {
                img: 'assets/imgs/food3.jpg'
            },
            {
                img: 'assets/imgs/food4.jpg'
            },
        ];
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
    openFilterModel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_1__["FilterPage"],
                cssClass: 'custom_modal'
            });
            return yield modal.present();
        });
    }
    goToCart() {
        this.route.navigate(['/cart']);
    }
};
RestaurantsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
RestaurantsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restaurants',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./restaurants.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restaurants/restaurants.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./restaurants.page.scss */ "./src/app/pages/restaurants/restaurants.page.scss")).default]
    })
], RestaurantsPage);



/***/ })

}]);
//# sourceMappingURL=pages-restaurants-restaurants-module-es2015.js.map