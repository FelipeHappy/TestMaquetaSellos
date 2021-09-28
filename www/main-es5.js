(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFilterFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-label class=\"title_lbl\">Filter</ion-label>\r\n        <ion-label class=\"grey_lbl\">Quick Filter</ion-label>\r\n\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n              <ion-label>Rated 5</ion-label>\r\n              <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>Rated 4+</ion-label>\r\n                <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>Rated 3+</ion-label>\r\n                <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-label class=\"grey_lbl\">Sort By</ion-label>\r\n\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n                <ion-label>Close to me</ion-label>\r\n                <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>Price high to low</ion-label>\r\n                <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>Price low to high</ion-label>\r\n                <ion-checkbox slot=\"end\"></ion-checkbox>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-button expand=\"block\" class=\"apply_btn\">\r\n            Apply\r\n        </ion-button>\r\n\r\n        <ion-button expand=\"block\" fill=\"clear\" class=\"clear_btn\">\r\n            Clear\r\n        </ion-button>\r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [//Iniciar en la ruta indicada
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-welcome-welcome-module */
          "pages-welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./pages/welcome/welcome.module */
          "./src/app/pages/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "./src/app/pages/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'mobile-verify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-mobile-verify-mobile-verify-module */
          "pages-mobile-verify-mobile-verify-module").then(__webpack_require__.bind(null,
          /*! ./pages/mobile-verify/mobile-verify.module */
          "./src/app/pages/mobile-verify/mobile-verify.module.ts")).then(function (m) {
            return m.MobileVerifyPageModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-forgot-module */
          "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot/forgot.module */
          "./src/app/pages/forgot/forgot.module.ts")).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'user-location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-user-location-user-location-module */
          "pages-user-location-user-location-module").then(__webpack_require__.bind(null,
          /*! ./pages/user-location/user-location.module */
          "./src/app/pages/user-location/user-location.module.ts")).then(function (m) {
            return m.UserLocationPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'favourite',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favourite-favourite-module */
          "favourite-favourite-module").then(__webpack_require__.bind(null,
          /*! ./pages/favourite/favourite.module */
          "./src/app/pages/favourite/favourite.module.ts")).then(function (m) {
            return m.FavouritePageModule;
          });
        }
      }, {
        path: 'discovery',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-discovery-discovery-module */
          "pages-discovery-discovery-module").then(__webpack_require__.bind(null,
          /*! ./pages/discovery/discovery.module */
          "./src/app/pages/discovery/discovery.module.ts")).then(function (m) {
            return m.DiscoveryPageModule;
          });
        }
      }, {
        path: 'collections',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-collections-collections-module */
          "pages-collections-collections-module").then(__webpack_require__.bind(null,
          /*! ./pages/collections/collections.module */
          "./src/app/pages/collections/collections.module.ts")).then(function (m) {
            return m.CollectionsPageModule;
          });
        }
      }, {
        path: 'rest-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-rest-detail-rest-detail-module */
          "pages-rest-detail-rest-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/rest-detail/rest-detail.module */
          "./src/app/pages/rest-detail/rest-detail.module.ts")).then(function (m) {
            return m.RestDetailPageModule;
          });
        }
      }, {
        path: 'nearby',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-nearby-nearby-module */
          "nearby-nearby-module").then(__webpack_require__.bind(null,
          /*! ./pages/nearby/nearby.module */
          "./src/app/pages/nearby/nearby.module.ts")).then(function (m) {
            return m.NearbyPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'restaurants',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-restaurants-restaurants-module */
          "pages-restaurants-restaurants-module").then(__webpack_require__.bind(null,
          /*! ./pages/restaurants/restaurants.module */
          "./src/app/pages/restaurants/restaurants.module.ts")).then(function (m) {
            return m.RestaurantsPageModule;
          });
        }
      }, {
        path: 'trending',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-trending-trending-module */
          "pages-trending-trending-module").then(__webpack_require__.bind(null,
          /*! ./pages/trending/trending.module */
          "./src/app/pages/trending/trending.module.ts")).then(function (m) {
            return m.TrendingPageModule;
          });
        }
      }, {
        path: 'friends',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-friends-friends-module */
          "pages-friends-friends-module").then(__webpack_require__.bind(null,
          /*! ./pages/friends/friends.module */
          "./src/app/pages/friends/friends.module.ts")).then(function (m) {
            return m.FriendsPageModule;
          });
        }
      }, {
        path: 'all-photos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-all-photos-all-photos-module */
          "pages-all-photos-all-photos-module").then(__webpack_require__.bind(null,
          /*! ./pages/all-photos/all-photos.module */
          "./src/app/pages/all-photos/all-photos.module.ts")).then(function (m) {
            return m.AllPhotosPageModule;
          });
        }
      }, {
        path: 'all-reviews',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-all-reviews-all-reviews-module */
          "pages-all-reviews-all-reviews-module").then(__webpack_require__.bind(null,
          /*! ./pages/all-reviews/all-reviews.module */
          "./src/app/pages/all-reviews/all-reviews.module.ts")).then(function (m) {
            return m.AllReviewsPageModule;
          });
        }
      }, {
        path: 'review-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-review-detail-review-detail-module */
          "pages-review-detail-review-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/review-detail/review-detail.module */
          "./src/app/pages/review-detail/review-detail.module.ts")).then(function (m) {
            return m.ReviewDetailPageModule;
          });
        }
      }, {
        path: 'filter',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/filter/filter.module */
          "./src/app/pages/filter/filter.module.ts")).then(function (m) {
            return m.FilterPageModule;
          });
        }
      }, {
        path: 'all-photo-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-all-photo-list-all-photo-list-module */
          "pages-all-photo-list-all-photo-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/all-photo-list/all-photo-list.module */
          "./src/app/pages/all-photo-list/all-photo-list.module.ts")).then(function (m) {
            return m.AllPhotoListPageModule;
          });
        }
      }, {
        path: 'single-photo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-single-photo-single-photo-module */
          "pages-single-photo-single-photo-module").then(__webpack_require__.bind(null,
          /*! ./pages/single-photo/single-photo.module */
          "./src/app/pages/single-photo/single-photo.module.ts")).then(function (m) {
            return m.SinglePhotoPageModule;
          });
        }
      }, {
        path: 'add-comment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-comment-add-comment-module */
          "pages-add-comment-add-comment-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-comment/add-comment.module */
          "./src/app/pages/add-comment/add-comment.module.ts")).then(function (m) {
            return m.AddCommentPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-edit-profile-edit-profile-module */
          "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "pages-cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "./src/app/pages/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-payment-module */
          "pages-payment-payment-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment/payment.module */
          "./src/app/pages/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-success-success-module */
          "pages-success-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/success/success.module */
          "./src/app/pages/success/success.module.ts")).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }, {
        path: 'all-restaurants',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-all-restaurants-all-restaurants-module */
          "pages-all-restaurants-all-restaurants-module").then(__webpack_require__.bind(null,
          /*! ./pages/all-restaurants/all-restaurants.module */
          "./src/app/pages/all-restaurants/all-restaurants.module.ts")).then(function (m) {
            return m.AllRestaurantsPageModule;
          });
        }
      }, {
        path: 'payment-method',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-method-payment-method-module */
          "pages-payment-method-payment-method-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment-method/payment-method.module */
          "./src/app/pages/payment-method/payment-method.module.ts")).then(function (m) {
            return m.PaymentMethodPageModule;
          });
        }
      }, {
        path: 'add-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-card-add-card-module */
          "pages-add-card-add-card-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-card/add-card.module */
          "./src/app/pages/add-card/add-card.module.ts")).then(function (m) {
            return m.AddCardPageModule;
          });
        }
      }, {
        path: 'add-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-address-add-address-module */
          "pages-add-address-add-address-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-address/add-address.module */
          "./src/app/pages/add-address/add-address.module.ts")).then(function (m) {
            return m.AddAddressPageModule;
          });
        }
      }, {
        path: 'addresses',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-addresses-addresses-module */
          "pages-addresses-addresses-module").then(__webpack_require__.bind(null,
          /*! ./pages/addresses/addresses.module */
          "./src/app/pages/addresses/addresses.module.ts")).then(function (m) {
            return m.AddressesPageModule;
          });
        }
      }, {
        path: 'nfccontainer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-nfccontainer-nfccontainer-module */
          "pages-nfccontainer-nfccontainer-module").then(__webpack_require__.bind(null,
          /*! ./pages/nfccontainer/nfccontainer.module */
          "./src/app/pages/nfccontainer/nfccontainer.module.ts")).then(function (m) {
            return m.NfccontainerPageModule;
          });
        }
      }, {
        path: 'scansello',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-scansello-scansello-module */
          "pages-scansello-scansello-module").then(__webpack_require__.bind(null,
          /*! ./pages/scansello/scansello.module */
          "./src/app/pages/scansello/scansello.module.ts")).then(function (m) {
            return m.ScanselloPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  text-transform: capitalize;\n  --background: #FFD243;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZEMjQzO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleLightContent();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_pages_filter_filter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../app/pages/filter/filter.module */
      "./src/app/pages/filter/filter.module.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _app_pages_filter_filter_module__WEBPACK_IMPORTED_MODULE_9__["FilterPageModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_10__["NgOtpInputModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/pages/filter/filter-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/filter/filter-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: FilterPageRoutingModule */

    /***/
    function srcAppPagesFilterFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function () {
        return FilterPageRoutingModule;
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


      var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filter.page */
      "./src/app/pages/filter/filter.page.ts");

      var routes = [{
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
      }];

      var FilterPageRoutingModule = function FilterPageRoutingModule() {
        _classCallCheck(this, FilterPageRoutingModule);
      };

      FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FilterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/filter/filter.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/filter/filter.module.ts ***!
      \***********************************************/

    /*! exports provided: FilterPageModule */

    /***/
    function srcAppPagesFilterFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPageModule", function () {
        return FilterPageModule;
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


      var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filter-routing.module */
      "./src/app/pages/filter/filter-routing.module.ts");
      /* harmony import */


      var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter.page */
      "./src/app/pages/filter/filter.page.ts");

      var FilterPageModule = function FilterPageModule() {
        _classCallCheck(this, FilterPageModule);
      };

      FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"]],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
      })], FilterPageModule);
      /***/
    },

    /***/
    "./src/app/pages/filter/filter.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/filter/filter.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFilterFilterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_lbl {\n  font-size: 24px;\n  font-family: \"bold\";\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n.main_content_div ion-item {\n  --background: transparent;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n.main_content_div .apply_btn {\n  margin-top: 16px;\n  color: black;\n}\n.main_content_div .clear_btn {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLGdCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50aXRsZV9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgICAuZ3JleV9sYmwge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICAgIC5hcHBseV9idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLmNsZWFyX2J0biB7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/filter/filter.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/filter/filter.page.ts ***!
      \*********************************************/

    /*! exports provided: FilterPage */

    /***/
    function srcAppPagesFilterFilterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPage", function () {
        return FilterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FilterPage = /*#__PURE__*/function () {
        function FilterPage() {
          _classCallCheck(this, FilterPage);
        }

        _createClass(FilterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FilterPage;
      }();

      FilterPage.ctorParameters = function () {
        return [];
      };

      FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filter.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filter.page.scss */
        "./src/app/pages/filter/filter.page.scss"))["default"]]
      })], FilterPage);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\CANbiate\Desktop\appSellos\TestMaquetaSellos\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map