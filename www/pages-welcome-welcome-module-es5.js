(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <ion-slides>\r\n            <ion-slide *ngFor=\"let item of slides\">\r\n                <div class=\"inner_slider\">\r\n                    <img src=\"{{item.img}}\">\r\n                    <ion-label class=\"bold_lbl\">{{item.title}}</ion-label>\r\n                    <ion-label class=\"simple_lbl\">{{item.subTitle}}</ion-label>\r\n                    <ion-button expand=\"block\" (click)=\"goToLogin()\">Entrar</ion-button>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomePageRoutingModule */

    /***/
    function srcAppPagesWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
        return WelcomePageRoutingModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/pages/welcome/welcome.page.ts");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
      }];

      var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      };

      WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.module.ts ***!
      \*************************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "./src/app/pages/welcome/welcome-routing.module.ts");
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/pages/welcome/welcome.page.ts");

      var WelcomePageModule = function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      };

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
      })], WelcomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-primary);\n}\n\n.main_content_div {\n  width: 100%;\n  height: 100%;\n  padding: 30px;\n  display: flex;\n}\n\n.main_content_div ion-label {\n  display: block;\n  text-align: center;\n}\n\n.main_content_div .inner_slider {\n  padding: 16px;\n  margin-top: -20px;\n}\n\n.main_content_div img {\n  width: 120px;\n  margin-bottom: 40px;\n}\n\n.main_content_div .bold_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n}\n\n.main_content_div .simple_lbl {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\n.main_content_div ion-button {\n  width: 100%;\n  --background: white;\n  --border-radius: 5px;\n  color: black;\n  font-family: \"semi-bold\";\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRUo7O0FBR0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFEUjs7QUFJSTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtBQUhSOztBQU1JO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSlI7O0FBUUk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQU5SOztBQVNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBVUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBUlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyX3NsaWRlciB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDk1JTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvbGRfbGJsIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbXBsZV9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.ts ***!
      \***********************************************/

    /*! exports provided: WelcomePage */

    /***/
    function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
        return WelcomePage;
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

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage(route) {
          _classCallCheck(this, WelcomePage);

          this.route = route;
          this.slides = [{
            img: 'assets/imgs/search.png',
            title: 'S A M T E C H',
            subTitle: 'El socio tecnológico que pone el futuro de tu empresa bajo control.'
          }, {
            img: 'assets/imgs/groceries.png',
            title: 'Veriety of food',
            subTitle: 'Set your location to start exploring restaurants allow you.'
          }, {
            img: 'assets/imgs/pins.png',
            title: 'Search for place',
            subTitle: 'Set your location to start exploring restaurants allow you.'
          }, {
            img: 'assets/imgs/cycling.png',
            title: 'Fast Shipping',
            subTitle: 'Set your location to start exploring restaurants allow you.'
          }];
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.route.navigate(['/login']);
          }
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome.page.scss */
        "./src/app/pages/welcome/welcome.page.scss"))["default"]]
      })], WelcomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map