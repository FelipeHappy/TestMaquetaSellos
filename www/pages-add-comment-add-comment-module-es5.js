(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-comment-add-comment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-comment/add-comment.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-comment/add-comment.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddCommentAddCommentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\">\r\n            <ion-icon name=\"arrow-back-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-title>Add Comment</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div class=\"comment_box\" *ngFor=\"let item of users\">\r\n            <div class=\"user_back\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n            <div class=\"user_detail\">\r\n                <ion-label class=\"name_lbl\">Elvin Sharvill</ion-label>\r\n                <ion-label class=\"comment_lbl\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. \r\n                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\r\n                </ion-label>\r\n                <ion-label class=\"time_lbl\">2 days ago</ion-label>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"background: white;\">\r\n    <div class=\"footer_div\">\r\n        <ion-input type=\"text\" placeholder=\"Type Something\"></ion-input>\r\n        <ion-icon name=\"send-sharp\" slot=\"end\"></ion-icon>\r\n    </div>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/add-comment/add-comment-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-comment/add-comment-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddCommentPageRoutingModule */

    /***/
    function srcAppPagesAddCommentAddCommentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCommentPageRoutingModule", function () {
        return AddCommentPageRoutingModule;
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


      var _add_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-comment.page */
      "./src/app/pages/add-comment/add-comment.page.ts");

      var routes = [{
        path: '',
        component: _add_comment_page__WEBPACK_IMPORTED_MODULE_3__["AddCommentPage"]
      }];

      var AddCommentPageRoutingModule = function AddCommentPageRoutingModule() {
        _classCallCheck(this, AddCommentPageRoutingModule);
      };

      AddCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCommentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add-comment/add-comment.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-comment/add-comment.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddCommentPageModule */

    /***/
    function srcAppPagesAddCommentAddCommentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCommentPageModule", function () {
        return AddCommentPageModule;
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


      var _add_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-comment-routing.module */
      "./src/app/pages/add-comment/add-comment-routing.module.ts");
      /* harmony import */


      var _add_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-comment.page */
      "./src/app/pages/add-comment/add-comment.page.ts");

      var AddCommentPageModule = function AddCommentPageModule() {
        _classCallCheck(this, AddCommentPageModule);
      };

      AddCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCommentPageRoutingModule"]],
        declarations: [_add_comment_page__WEBPACK_IMPORTED_MODULE_6__["AddCommentPage"]]
      })], AddCommentPageModule);
      /***/
    },

    /***/
    "./src/app/pages/add-comment/add-comment.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-comment/add-comment.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddCommentAddCommentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .comment_box {\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n  padding: 16px 0px;\n}\n.main_content_div .comment_box .user_back {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border-radius: 50%;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .comment_box .user_detail {\n  padding-left: 16px;\n  position: relative;\n}\n.main_content_div .comment_box .user_detail .name_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .comment_box .user_detail .comment_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .comment_box .user_detail .time_lbl {\n  font-size: 12px;\n  color: grey;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.footer_div {\n  background: #F2F2F4;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 16px;\n}\n.footer_div ion-input {\n  border-radius: 5px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-family: \"regular\";\n}\n.footer_div ion-icon {\n  color: lightgray;\n  font-size: 20px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBRUk7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUFaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFWTtFQUNJLHdCQUFBO0FBQWhCO0FBRVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUFoQjtBQUVZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBQWhCO0FBS0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jb21tZW50L2FkZC1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50X2JveCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG5cclxuICAgICAgICAudXNlcl9iYWNrIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXJfZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAubmFtZV9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21tZW50X2xibCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZV9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZm9vdGVyX2RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMTZweDtcclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/add-comment/add-comment.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-comment/add-comment.page.ts ***!
      \*******************************************************/

    /*! exports provided: AddCommentPage */

    /***/
    function srcAppPagesAddCommentAddCommentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCommentPage", function () {
        return AddCommentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddCommentPage = /*#__PURE__*/function () {
        function AddCommentPage(navCtrl) {
          _classCallCheck(this, AddCommentPage);

          this.navCtrl = navCtrl;
          this.users = [{
            img: 'assets/imgs/user1.jpg'
          }, {
            img: 'assets/imgs/user2.jpg'
          }, {
            img: 'assets/imgs/user3.jpg'
          }, {
            img: 'assets/imgs/user4.jpg'
          }, {
            img: 'assets/imgs/user5.jpg'
          }];
        }

        _createClass(AddCommentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return AddCommentPage;
      }();

      AddCommentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      AddCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-comment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-comment/add-comment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-comment.page.scss */
        "./src/app/pages/add-comment/add-comment.page.scss"))["default"]]
      })], AddCommentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-comment-add-comment-module-es5.js.map