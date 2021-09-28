(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-single-photo-single-photo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-photo/single-photo.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-photo/single-photo.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSinglePhotoSinglePhotoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" mode=\"md\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Photo</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"flex_div\">\r\n            <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\r\n            <div class=\"user_detail\">\r\n                <ion-label class=\"bold_lbl\">Elvin Sharvill</ion-label>\r\n                <ion-label class=\"grey_lbl\">45 Reviews, 120 Followers</ion-label>\r\n            </div>\r\n            <ion-button fill=\"outline\" shape=\"round\" size=\"small\">\r\n                Follow\r\n            </ion-button>\r\n        </div>\r\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/food1.jpg)'\"></div>\r\n        <div class=\"comment_div\">\r\n            <ion-icon name=\"thumbs-up-sharp\" class=\"thumb_icn\"></ion-icon>\r\n            <ion-icon name=\"chatbubble-outline\" class=\"chat_icn\" (click)=\"goToAddComment()\"></ion-icon>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/single-photo/single-photo-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/single-photo/single-photo-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SinglePhotoPageRoutingModule */

    /***/
    function srcAppPagesSinglePhotoSinglePhotoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglePhotoPageRoutingModule", function () {
        return SinglePhotoPageRoutingModule;
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


      var _single_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-photo.page */
      "./src/app/pages/single-photo/single-photo.page.ts");

      var routes = [{
        path: '',
        component: _single_photo_page__WEBPACK_IMPORTED_MODULE_3__["SinglePhotoPage"]
      }];

      var SinglePhotoPageRoutingModule = function SinglePhotoPageRoutingModule() {
        _classCallCheck(this, SinglePhotoPageRoutingModule);
      };

      SinglePhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SinglePhotoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/single-photo/single-photo.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/single-photo/single-photo.module.ts ***!
      \***********************************************************/

    /*! exports provided: SinglePhotoPageModule */

    /***/
    function srcAppPagesSinglePhotoSinglePhotoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglePhotoPageModule", function () {
        return SinglePhotoPageModule;
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


      var _single_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-photo-routing.module */
      "./src/app/pages/single-photo/single-photo-routing.module.ts");
      /* harmony import */


      var _single_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-photo.page */
      "./src/app/pages/single-photo/single-photo.page.ts");

      var SinglePhotoPageModule = function SinglePhotoPageModule() {
        _classCallCheck(this, SinglePhotoPageModule);
      };

      SinglePhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _single_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinglePhotoPageRoutingModule"]],
        declarations: [_single_photo_page__WEBPACK_IMPORTED_MODULE_6__["SinglePhotoPage"]]
      })], SinglePhotoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/single-photo/single-photo.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/single-photo/single-photo.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSinglePhotoSinglePhotoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.main_content_div .flex_div .user_back {\n  height: 45px;\n  width: 45px;\n  background-position: top;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .flex_div .user_detail {\n  padding-left: 10px;\n  position: relative;\n}\n.main_content_div .flex_div .user_detail .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .flex_div .user_detail .grey_lbl {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .flex_div ion-button {\n  color: cadetblue;\n  --border-color: cadetblue;\n  --border-radius: 25px;\n  position: absolute;\n  right: 16px;\n}\n.main_content_div .back_img {\n  width: 100%;\n  height: 240px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .comment_div {\n  padding: 10px 16px;\n}\n.main_content_div .comment_div .thumb_icn {\n  color: var(--ion-color-primary);\n  font-size: 24px;\n  margin-right: 16px;\n}\n.main_content_div .comment_div .chat_icn {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luZ2xlLXBob3RvL3NpbmdsZS1waG90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNZO0VBQ0ksd0JBQUE7QUFDaEI7QUFDWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBR1E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFEWjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUdRO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUdRO0VBQ0ksZUFBQTtBQURaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2luZ2xlLXBob3RvL3NpbmdsZS1waG90by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgLnVzZXJfYmFjayB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXJfZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuYm9sZF9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmV5X2xibCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja19pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5jb21tZW50X2RpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIC50aHVtYl9pY24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYXRfaWNuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/single-photo/single-photo.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/single-photo/single-photo.page.ts ***!
      \*********************************************************/

    /*! exports provided: SinglePhotoPage */

    /***/
    function srcAppPagesSinglePhotoSinglePhotoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglePhotoPage", function () {
        return SinglePhotoPage;
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

      var SinglePhotoPage = /*#__PURE__*/function () {
        function SinglePhotoPage(route) {
          _classCallCheck(this, SinglePhotoPage);

          this.route = route;
        }

        _createClass(SinglePhotoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToAddComment",
          value: function goToAddComment() {
            this.route.navigate(['/add-comment']);
          }
        }]);

        return SinglePhotoPage;
      }();

      SinglePhotoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      SinglePhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-single-photo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./single-photo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-photo/single-photo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./single-photo.page.scss */
        "./src/app/pages/single-photo/single-photo.page.scss"))["default"]]
      })], SinglePhotoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-single-photo-single-photo-module-es5.js.map