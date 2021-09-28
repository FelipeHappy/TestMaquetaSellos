(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scansello-scansello-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scansello/scansello.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scansello/scansello.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesScanselloScanselloPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-img [src]=\"displayedImage\"></ion-img>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' class='ion-text-center ion-padding-top'>\n        <h2>Sistema de Gestión\n          <br />\n          de Sellos Electrónicos\n        </h2>\n      </ion-col>\n      <ion-col size='12' class='subtitle-login ion-text-center ion-padding-top'>\n        <h1>ESCONDIDA | BHP</h1>\n      </ion-col>\n      <ion-col size='12' class='ion-text-center ion-padding-top'>\n        <ion-button color=\"success\" routerLink='/nfccontainer'>\n          Escanear Sello\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/scansello/scansello-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/scansello/scansello-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ScanselloPageRoutingModule */

    /***/
    function srcAppPagesScanselloScanselloRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanselloPageRoutingModule", function () {
        return ScanselloPageRoutingModule;
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


      var _scansello_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scansello.page */
      "./src/app/pages/scansello/scansello.page.ts");

      var routes = [{
        path: '',
        component: _scansello_page__WEBPACK_IMPORTED_MODULE_3__["ScanselloPage"]
      }];

      var ScanselloPageRoutingModule = function ScanselloPageRoutingModule() {
        _classCallCheck(this, ScanselloPageRoutingModule);
      };

      ScanselloPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScanselloPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/scansello/scansello.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/scansello/scansello.module.ts ***!
      \*****************************************************/

    /*! exports provided: ScanselloPageModule */

    /***/
    function srcAppPagesScanselloScanselloModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanselloPageModule", function () {
        return ScanselloPageModule;
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


      var _scansello_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scansello-routing.module */
      "./src/app/pages/scansello/scansello-routing.module.ts");
      /* harmony import */


      var _scansello_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scansello.page */
      "./src/app/pages/scansello/scansello.page.ts");

      var ScanselloPageModule = function ScanselloPageModule() {
        _classCallCheck(this, ScanselloPageModule);
      };

      ScanselloPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scansello_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanselloPageRoutingModule"]],
        declarations: [_scansello_page__WEBPACK_IMPORTED_MODULE_6__["ScanselloPage"]]
      })], ScanselloPageModule);
      /***/
    },

    /***/
    "./src/app/pages/scansello/scansello.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/scansello/scansello.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesScanselloScanselloPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".subtitle-login {\n  color: #f26232;\n}\n\n.buttonLogin {\n  background-color: #f26232;\n}\n\nion-button {\n  text-transform: capitalize;\n  --background: #FFD243;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NhbnNlbGxvL3NjYW5zZWxsby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2Fuc2VsbG8vc2NhbnNlbGxvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZS1sb2dpbiB7XHJcbiAgICBjb2xvcjogI2YyNjIzMlxyXG59XHJcblxyXG4uYnV0dG9uTG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNjIzMiAgICBcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRDI0MztcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/scansello/scansello.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/scansello/scansello.page.ts ***!
      \***************************************************/

    /*! exports provided: ScanselloPage */

    /***/
    function srcAppPagesScanselloScanselloPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanselloPage", function () {
        return ScanselloPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ScanselloPage = /*#__PURE__*/function () {
        function ScanselloPage() {
          _classCallCheck(this, ScanselloPage);

          this.displayedImage = '../assets/login_image.png';
        }

        _createClass(ScanselloPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ScanselloPage;
      }();

      ScanselloPage.ctorParameters = function () {
        return [];
      };

      ScanselloPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scansello',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scansello.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scansello/scansello.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scansello.page.scss */
        "./src/app/pages/scansello/scansello.page.scss"))["default"]]
      })], ScanselloPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-scansello-scansello-module-es5.js.map