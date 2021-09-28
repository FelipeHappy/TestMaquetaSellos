(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\" style=\"color: black;\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>My Cart</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"header_div\">\r\n            <ion-label>2 Items in cart</ion-label>\r\n        </div>\r\n\r\n        <div class=\"card_box\" *ngFor=\"let item of (restaurants | slice: 0: 2)\">\r\n            <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n\r\n            <div class=\"detail_div\">\r\n                <ion-label class=\"bold_name\">Good Thai</ion-label>\r\n                <ion-label class=\"addr_lbl\">\r\n                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.\r\n                </ion-label>\r\n\r\n                <div class=\"flex_div\">\r\n                    <ion-label class=\"price_lbl\">Rs. 200</ion-label>\r\n                    <div class=\"add_del\">\r\n                        <div class=\"btn_div\" style=\"background-color: cadetblue;\" (click)=\"plus()\">\r\n                            <ion-icon name=\"add\"></ion-icon>\r\n                        </div>\r\n                        <ion-label>{{qty}}</ion-label>\r\n                        <div class=\"btn_div\" style=\"background: lightcoral;\" (click)=\"minus()\">\r\n                            <ion-icon name=\"remove\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"amout_detail\">\r\n            <ion-label>Good Thai X 2 <span>Rs. 400</span></ion-label>\r\n            <ion-label>Good Thai X 3 <span>Rs. 600</span></ion-label>\r\n            <ion-label>Shipping Charge <span>Rs. 40</span></ion-label>\r\n            <ion-label style=\"font-family: 'semi-bold';\">Total Amount <span>Rs. 1040</span></ion-label>\r\n        </div>\r\n\r\n        <div class=\"btn_div\">\r\n            <ion-button expand=\"block\" (click)=\"goToPaymemt()\">\r\n                Confirm Order\r\n            </ion-button>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/cart/cart-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/cart/cart-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/pages/cart/cart.page.ts");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.module.ts ***!
      \*******************************************/

    /*! exports provided: CartPageModule */

    /***/
    function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "./src/app/pages/cart/cart-routing.module.ts");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/pages/cart/cart.page.ts");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F2F2F4;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .header_div {\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px !important;\n}\n\n.main_content_div .header_div ion-label {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box {\n  margin-bottom: 10px;\n  background: white;\n  padding: 16px;\n  display: flex;\n  position: relative;\n}\n\n.main_content_div .card_box .back_image {\n  width: 100px;\n  min-width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .card_box .detail_div {\n  margin-left: 16px;\n  position: relative;\n}\n\n.main_content_div .card_box .detail_div .bold_name {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box .detail_div .addr_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-top: 5px;\n}\n\n.main_content_div .card_box .detail_div .color_box {\n  border-radius: 3px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n}\n\n.main_content_div .card_box .detail_div .color_box ion-label {\n  color: white;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main_content_div .card_box .detail_div ion-icon {\n  color: cadetblue;\n  position: absolute;\n  font-size: 20px;\n  right: 0;\n  bottom: 7px;\n}\n\n.main_content_div .card_box .detail_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 5px;\n}\n\n.main_content_div .card_box .detail_div .flex_div .price_lbl {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .card_box .detail_div .flex_div .add_del {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main_content_div .card_box .detail_div .flex_div .add_del .btn_div {\n  height: 28px;\n  width: 28px;\n  border-radius: 100%;\n  position: relative;\n}\n\n.main_content_div .card_box .detail_div .flex_div .add_del .btn_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.main_content_div .card_box .detail_div .flex_div .add_del ion-label {\n  font-family: \"semi-bold\";\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.main_content_div .amout_detail {\n  background: white;\n  padding: 16px;\n}\n\n.main_content_div .amout_detail ion-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n\n.main_content_div .amout_detail ion-label span {\n  font-family: \"semi-bold\";\n  font-size: 16px;\n}\n\n.main_content_div .btn_div {\n  padding: 16px;\n}\n\n.main_content_div .btn_div ion-button {\n  --border-radius: 3px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUk7RUFDSSxjQUFBO0FBQ1I7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7QUFBUjs7QUFFUTtFQUNJLHdCQUFBO0FBQVo7O0FBR0k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURSOztBQUdRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRFo7O0FBSVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRlo7O0FBSVk7RUFDSSx3QkFBQTtBQUZoQjs7QUFLWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhoQjs7QUFNWTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUpoQjs7QUFNZ0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSnBCOztBQVFZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQU5oQjs7QUFTWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBoQjs7QUFTZ0I7RUFDSSx3QkFBQTtBQVBwQjs7QUFVZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVJwQjs7QUFVb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSeEI7O0FBVXdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQVI1Qjs7QUFZb0I7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWeEI7O0FBaUJJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBZlI7O0FBaUJRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFmWjs7QUFpQlk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFmaEI7O0FBbUJJO0VBQ0ksYUFBQTtBQWpCUjs7QUFtQlE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBakJaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YyRjJGNDtcclxufVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVyX2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuYmFja19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlsX2RpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuYm9sZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFkZHJfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29sb3JfYm94IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAucHJpY2VfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFkZF9kZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bl9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbW91dF9kZXRhaWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuX2RpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/cart/cart.page.ts ***!
      \*****************************************/

    /*! exports provided: CartPage */

    /***/
    function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(navCtrl, router) {
          _classCallCheck(this, CartPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.tabID = 1;
          this.qty = 1;
          this.restaurants = [{
            img: 'assets/imgs/food1.jpg'
          }, {
            img: 'assets/imgs/food2.jpg'
          }, {
            img: 'assets/imgs/food3.jpg'
          }, {
            img: 'assets/imgs/food4.jpg'
          }];
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "plus",
          value: function plus() {
            this.qty = this.qty + 1;
          }
        }, {
          key: "minus",
          value: function minus() {
            if (this.qty > 1) {
              this.qty = this.qty - 1;
            }
          }
        }, {
          key: "goToPaymemt",
          value: function goToPaymemt() {
            this.router.navigate(['/payment']);
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.page.scss */
        "./src/app/pages/cart/cart.page.scss"))["default"]]
      })], CartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cart-cart-module-es5.js.map