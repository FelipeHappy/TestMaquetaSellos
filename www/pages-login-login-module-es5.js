(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content>\r\n  <div class=\"main_content_div\">\r\n    <ion-label class=\"bold_lbl\">Login</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n    <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\r\n    <ion-label class=\"forgot_lbl\" (click)=\"goToForgot()\">Olvidaste tu contraseña ?</ion-label>\r\n    <ion-button expand=\"block\" (click)=\"goToTabs()\">\r\n      Login\r\n    </ion-button>\r\n    <ion-label class=\"bottom_lbl\" (click)=\"goToRegister()\">Crea una cuenta!</ion-label>\r\n  </div>\r\n</ion-content> -->\r\n\r\n<ion-content>\r\n  <ion-img [src]=\"displayedImage\"></ion-img>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='12' class='ion-text-center ion-padding-top'>\r\n        <h2>Sistema de Gestión\r\n          <br />\r\n          de Sellos Electrónicos\r\n        </h2>\r\n      </ion-col>\r\n      <ion-col size='12' class='subtitle-login ion-text-center ion-padding-top'>\r\n        <h1>ESCONDIDA | BHP</h1>\r\n      </ion-col>\r\n      <ion-col size='12' class='ion-text-center ion-padding-top'>\r\n        <ion-button color=\"primary\" routerLink='/scansello'>\r\n          Ingresar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".subtitle-login {\n  color: #f26232;\n}\n\n.buttonLogin {\n  background-color: #f26232;\n}\n\nion-button {\n  text-transform: capitalize;\n  --background: #FFD243;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQTtFQUNJLGNBQUE7QUF2Q0o7O0FBMENBO0VBQ0kseUJBQUE7QUF2Q0o7O0FBMENBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBdkNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1haW5fY29udGVudF9kaXYge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuLy8gICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmJvbGRfbGJsIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICBpb24taW5wdXQge1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmZvcmdvdF9sYmwge1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICAvLyBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuLy8gICAgICAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYm90dG9tX2xibCB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgICAgIC8vIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4vLyAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGJvdHRvbTogNDBweDtcclxuLy8gICAgICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uc3VidGl0bGUtbG9naW4ge1xyXG4gICAgY29sb3I6ICNmMjYyMzJcclxufVxyXG5cclxuLmJ1dHRvbkxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjYyMzIgICAgXHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkQyNDM7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route) {
          _classCallCheck(this, LoginPage);

          this.route = route;
          this.displayedImage = '../assets/login_image.png';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.route.navigate(['/register']);
          }
        }, {
          key: "goToForgot",
          value: function goToForgot() {
            this.route.navigate(['/forgot']);
          }
        }, {
          key: "goToTabs",
          value: function goToTabs() {
            this.route.navigate(['tabs']);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map