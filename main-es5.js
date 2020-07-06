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


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/posts/posts.component */
    "./src/app/modules/posts/posts.component.ts");
    /* harmony import */


    var _components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/weather-widget-main/weather-widget-main.component */
    "./src/app/components/weather-widget-main/weather-widget-main.component.ts");

    var routes = [{
      path: '',
      component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"],
      children: [{
        path: '',
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
      }, {
        path: 'posts',
        component: src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]
      }, {
        path: 'weather-widget-main',
        component: _components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__["WeatherWidgetMainComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dashtest';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _layouts_default_default_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layouts/default/default.component.ngfactory */
    "./src/app/layouts/default/default.component.ngfactory.js");
    /* harmony import */


    var _modules_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component.ngfactory */
    "./src/app/modules/dashboard/dashboard.component.ngfactory.js");
    /* harmony import */


    var _modules_posts_posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/posts/posts.component.ngfactory */
    "./src/app/modules/posts/posts.component.ngfactory.js");
    /* harmony import */


    var _components_weather_widget_main_weather_widget_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/weather-widget-main/weather-widget-main.component.ngfactory */
    "./src/app/components/weather-widget-main/weather-widget-main.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/tooltip/index.ngfactory */
    "./node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _modules_dashboard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./modules/dashboard.service */
    "./src/app/modules/dashboard.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./userdata.service */
    "./src/app/userdata.service.ts");
    /* harmony import */


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./modules/posts/posts.component */
    "./src/app/modules/posts/posts.component.ts");
    /* harmony import */


    var _components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/weather-widget-main/weather-widget-main.component */
    "./src/app/components/weather-widget-main/weather-widget-main.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _layouts_default_default_Module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./layouts/default/default.Module */
    "./src/app/layouts/default/default.Module.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _layouts_default_default_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DefaultComponentNgFactory"], _modules_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DashboardComponentNgFactory"], _modules_posts_posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PostsComponentNgFactory"], _components_weather_widget_main_weather_widget_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["WeatherWidgetMainComponentNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TooltipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) {
        return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_15__["removeStyles"](p1_0, p1_1)];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_16__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_dashboard_service__WEBPACK_IMPORTED_MODULE_24__["DashboardService"], _modules_dashboard_service__WEBPACK_IMPORTED_MODULE_24__["DashboardService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_26__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_26__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _userdata_service__WEBPACK_IMPORTED_MODULE_27__["UserdataService"], _userdata_service__WEBPACK_IMPORTED_MODULE_27__["UserdataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
        return [[{
          path: "",
          component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_28__["DefaultComponent"],
          children: [{
            path: "",
            component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"]
          }, {
            path: "posts",
            component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_30__["PostsComponent"]
          }, {
            path: "weather-widget-main",
            component: _components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_31__["WeatherWidgetMainComponent"]
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_15__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_46__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_46__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, highcharts_angular__WEBPACK_IMPORTED_MODULE_47__["HighchartsChartModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_47__["HighchartsChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_50__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_50__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_52__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_52__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _layouts_default_default_Module__WEBPACK_IMPORTED_MODULE_54__["DefaultModule"], _layouts_default_default_Module__WEBPACK_IMPORTED_MODULE_54__["DefaultModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_26__["LAZY_MAPS_API_CONFIG"], {
        apiKey: ""
      }, [])]);
    });
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

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/weather-widget-main/weather-widget-main.component.ngfactory.js":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/weather-widget-main/weather-widget-main.component.ngfactory.js ***!
    \*******************************************************************************************/

  /*! exports provided: RenderType_WeatherWidgetMainComponent, View_WeatherWidgetMainComponent_0, View_WeatherWidgetMainComponent_Host_0, WeatherWidgetMainComponentNgFactory */

  /***/
  function srcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_WeatherWidgetMainComponent", function () {
      return RenderType_WeatherWidgetMainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WeatherWidgetMainComponent_0", function () {
      return View_WeatherWidgetMainComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WeatherWidgetMainComponent_Host_0", function () {
      return View_WeatherWidgetMainComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponentNgFactory", function () {
      return WeatherWidgetMainComponentNgFactory;
    });
    /* harmony import */


    var _weather_widget_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./weather-widget-main.component.scss.shim.ngstyle */
    "./src/app/components/weather-widget-main/weather-widget-main.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_agm_core_agm_core_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@agm/core/agm-core.ngfactory */
    "./node_modules/@agm/core/agm-core.ngfactory.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _weather_widget_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./weather-widget-main.component */
    "./src/app/components/weather-widget-main/weather-widget-main.component.ts");
    /* harmony import */


    var _weatherdata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../weatherdata.service */
    "./src/app/weatherdata.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_WeatherWidgetMainComponent = [_weather_widget_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_WeatherWidgetMainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_WeatherWidgetMainComponent,
      data: {}
    });

    function View_WeatherWidgetMainComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 64, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 63, "div", [["class", "col-md-6 offset-md-3 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "col-sm-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "input-group mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, [["userInput", 1]], null, 0, "input", [["class", "form-control"], ["placeholder", "Enter Your City"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["class", "input-group-text btn btn-outline-primary"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.getCity(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Current Weather and Forecast in your City"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["Weather in ", ",", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "col-md-6 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "span", [["class", "temp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["alt", "01d.png"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", "\xB0F "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "P", [["class", "text-uppercase font-italic font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 28, "table", [["class", "table table-dark table-striped table-bordered table-sm "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 27, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Humidity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pressure"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", " hpa"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sunrise"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](38, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sunset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](44, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Geo cords"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](49, null, ["[", ",", "]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 16, "agm-map", [], [[2, "sebm-google-map-container", null]], [[null, "mapClick"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mapClick" === en) {
          var pd_0 = _co.getCoords($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_agm_core_agm_core_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AgmMap_0"], _node_modules_agm_core_agm_core_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AgmMap"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["CircleManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["CircleManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["DataLayerManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["DataLayerManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["KmlLayerManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["KmlLayerManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["LayerManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["LayerManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["PolygonManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["PolygonManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["PolylineManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["PolylineManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["RectangleManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["RectangleManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["ɵa"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 770048, null, 0, _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        longitude: [0, "longitude"],
        latitude: [1, "latitude"]
      }, {
        mapClick: "mapClick"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, 0, 3, "agm-marker", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _agm_core__WEBPACK_IMPORTED_MODULE_4__["FitBoundsAccessor"], null, [_agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 1720320, null, 1, _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], [_agm_core__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]], {
        latitude: [0, "latitude"],
        longitude: [1, "longitude"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        infoWindow: 1
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_12 = _co.lon;
        var currVal_13 = _co.lat;

        _ck(_v, 61, 0, currVal_12, currVal_13);

        var currVal_14 = _co.lat;
        var currVal_15 = _co.lon;

        _ck(_v, 65, 0, currVal_14, currVal_15);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.weather.name;
        var currVal_1 = _co.weather.sys.country;

        _ck(_v, 13, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets/", _co.weather.weather[0].icon, ".png");

        _ck(_v, 16, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.weather.main.temp, "1.0-0"));

        _ck(_v, 17, 0, currVal_3);

        var currVal_4 = _co.weather.weather[0].description;

        _ck(_v, 20, 0, currVal_4);

        var currVal_5 = _co.weather.main.humidity;

        _ck(_v, 27, 0, currVal_5);

        var currVal_6 = _co.weather.main.pressure;

        _ck(_v, 32, 0, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _ck(_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.weather.sys.sunrise * 1000, "H:mm"));

        _ck(_v, 37, 0, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 43, 0, _ck(_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.weather.sys.sunset * 1000, "H:mm"));

        _ck(_v, 43, 0, currVal_8);

        var currVal_9 = _co.weather.coord.lat;
        var currVal_10 = _co.weather.coord.lon;

        _ck(_v, 49, 0, currVal_9, currVal_10);

        var currVal_11 = true;

        _ck(_v, 50, 0, currVal_11);
      });
    }

    function View_WeatherWidgetMainComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-weather-widget-main", [], null, null, null, View_WeatherWidgetMainComponent_0, RenderType_WeatherWidgetMainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _weather_widget_main_component__WEBPACK_IMPORTED_MODULE_5__["WeatherWidgetMainComponent"], [_weatherdata_service__WEBPACK_IMPORTED_MODULE_6__["WeatherdataService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var WeatherWidgetMainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-weather-widget-main", _weather_widget_main_component__WEBPACK_IMPORTED_MODULE_5__["WeatherWidgetMainComponent"], View_WeatherWidgetMainComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/weather-widget-main/weather-widget-main.component.scss.shim.ngstyle.js":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/weather-widget-main/weather-widget-main.component.scss.shim.ngstyle.js ***!
    \***************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["agm-map[_ngcontent-%COMP%] {\n  height: 25rem;\n}\n\nh5[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-family: oswald, sans-serif;\n  color: 0;\n  font-weight: 500;\n  line-height: 33px;\n  margin-top: 2rem;\n}\n\nh2[_ngcontent-%COMP%], .temp[_ngcontent-%COMP%] {\n  color: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1tYWluL3dlYXRoZXItd2lkZ2V0LW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxhQUFBO0FBQ0E7O0FBQ0E7RUFDSSwrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtbWFpbi93ZWF0aGVyLXdpZGdldC1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuaGVpZ2h0OiAyNXJlbTtcclxufVxyXG5oNSxoMntcclxuICAgIGZvbnQtZmFtaWx5Om9zd2FsZCxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGdyZWVuKCRjb2xvcjogIzAwMDAwMCkgIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbmgyLC50ZW1we1xyXG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMDAwMDAwKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/weather-widget-main/weather-widget-main.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/weather-widget-main/weather-widget-main.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: WeatherWidgetMainComponent */

  /***/
  function srcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponent", function () {
      return WeatherWidgetMainComponent;
    });

    var WeatherWidgetMainComponent = /*#__PURE__*/function () {
      function WeatherWidgetMainComponent(WeatherdataService) {
        _classCallCheck(this, WeatherWidgetMainComponent);

        this.WeatherdataService = WeatherdataService;
        this.locationDenied = true;
        this.locationDeniedEnableCity = false;
      }

      _createClass(WeatherWidgetMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLocation();
          this.getCity('Bangalore');
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this = this;

          if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(function (success) {
              _this.lat = success.coords.latitude;
              _this.lon = success.coords.longitude;
              console.log('this.lat : ' + _this.lat);
              console.log('this.lng : ' + _this.lng);

              _this.WeatherdataService.getWeatherDataByCoords(_this.lat, _this.lon).subscribe(function (data) {
                _this.weather = data;
              });
            });
          }
        }
      }, {
        key: "getCity",
        value: function getCity(city) {
          var _this2 = this;

          console.log('city : ' + city);
          this.WeatherdataService.getWeatherDataByCityName(city).subscribe(function (data) {
            _this2.weather = data;
            _this2.lat = data.coord.lat;
            _this2.lon = data.coord.lon;
          });
        }
      }, {
        key: "getCoords",
        value: function getCoords(event) {
          var _this3 = this;

          this.lat = event.coords.lat;
          this.lng = event.coords.lng;
          this.WeatherdataService.getWeatherDataByCoords(this.lat, this.lng).subscribe(function (data) {
            _this3.weather = data;
          });
        }
      }]);

      return WeatherWidgetMainComponent;
    }();
    /***/

  },

  /***/
  "./src/app/layouts/default/default.Module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/default/default.Module.ts ***!
    \***************************************************/

  /*! exports provided: DefaultModule */

  /***/
  function srcAppLayoutsDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
    });

    var DefaultModule = function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    };
    /***/

  },

  /***/
  "./src/app/layouts/default/default.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/default/default.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_DefaultComponent, View_DefaultComponent_0, View_DefaultComponent_Host_0, DefaultComponentNgFactory */

  /***/
  function srcAppLayoutsDefaultDefaultComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DefaultComponent", function () {
      return RenderType_DefaultComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DefaultComponent_0", function () {
      return View_DefaultComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DefaultComponent_Host_0", function () {
      return View_DefaultComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponentNgFactory", function () {
      return DefaultComponentNgFactory;
    });
    /* harmony import */


    var _default_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./default.component.scss.shim.ngstyle */
    "./src/app/layouts/default/default.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/components/header/header.component.ngfactory */
    "./src/app/shared/components/header/header.component.ngfactory.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component.ngfactory */
    "./src/app/shared/components/sidebar/sidebar.component.ngfactory.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/components/footer/footer.component.ngfactory */
    "./src/app/shared/components/footer/footer.component.ngfactory.js");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _default_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/layouts/default/default.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DefaultComponent = [_default_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DefaultComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DefaultComponent,
      data: {}
    });

    function View_DefaultComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "mat-drawer-container", [["class", "mat-drawer-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDrawerContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDrawerContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 4, "mat-drawer", [["class", "mat-drawer"], ["mode", "side"], ["opened", ""], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDrawer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDrawer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 3325952, [[1, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["ɵangular_material_src_material_sidenav_sidenav_a"]]], {
        mode: [0, "mode"],
        opened: [1, "opened"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "app-sidebar", [], null, null, null, _shared_components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SidebarComponent_0"], _shared_components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sidebar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 1, 3, "mat-drawer-content", [["class", "mat-drawer-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDrawerContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDrawerContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "app-footer", [], null, null, null, _shared_components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_FooterComponent_0"], _shared_components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        var currVal_8 = "side";
        var currVal_9 = "";

        _ck(_v, 8, 0, currVal_8, currVal_9);

        _ck(_v, 10, 0);

        _ck(_v, 13, 0);

        _ck(_v, 15, 0);

        _ck(_v, 17, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._backdropOverride;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).position === "end";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).mode === "over";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).mode === "push";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).mode === "side";

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).opened;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationState;

        _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._container._contentMargins.left;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._container._contentMargins.right;

        _ck(_v, 12, 0, currVal_10, currVal_11);
      });
    }

    function View_DefaultComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-default", [], null, null, null, View_DefaultComponent_0, RenderType_DefaultComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _default_component__WEBPACK_IMPORTED_MODULE_17__["DefaultComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DefaultComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-default", _default_component__WEBPACK_IMPORTED_MODULE_17__["DefaultComponent"], View_DefaultComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/layouts/default/default.component.scss.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/layouts/default/default.component.scss.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLayoutsDefaultDefaultComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LWRyYXdlcntcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtZHJhd2VyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/layouts/default/default.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/default/default.component.ts ***!
    \******************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });

    var DefaultComponent = /*#__PURE__*/function () {
      // sideBarOpen = true;
      function DefaultComponent() {
        _classCallCheck(this, DefaultComponent);
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultComponent;
    }();
    /***/

  },

  /***/
  "./src/app/modules/dashboard.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/dashboard.service.ts ***!
    \**********************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppModulesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService() {
        _classCallCheck(this, DashboardService);
      }

      _createClass(DashboardService, [{
        key: "bigChart",
        value: function bigChart() {
          return [{
            name: 'Asia',
            data: [500, 635, 809, 947, 1402, 3634, 5268]
          }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
          }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
          }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
          }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
          }];
        }
      }, {
        key: "cards",
        value: function cards() {
          return [71, 78, 39, 66];
        }
      }, {
        key: "pieChart",
        value: function pieChart() {
          return [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }, {
            name: 'Safari',
            y: 4.18
          }, {
            name: 'Sogou Explorer',
            y: 1.64
          }, {
            name: 'Opera',
            y: 1.6
          }, {
            name: 'QQ',
            y: 1.2
          }, {
            name: 'Other',
            y: 2.61
          }];
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function DashboardService_Factory() {
        return new DashboardService();
      },
      token: DashboardService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.ngfactory.js":
  /*!********************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ngfactory.js ***!
    \********************************************************************/

  /*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */

  /***/
  function srcAppModulesDashboardDashboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function () {
      return RenderType_DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function () {
      return View_DashboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function () {
      return View_DashboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function () {
      return DashboardComponentNgFactory;
    });
    /* harmony import */


    var _dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard.component.scss.shim.ngstyle */
    "./src/app/modules/dashboard/dashboard.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_widgets_area_area_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/widgets/area/area.component.ngfactory */
    "./src/app/shared/widgets/area/area.component.ngfactory.js");
    /* harmony import */


    var _shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/widgets/area/area.component */
    "./src/app/shared/widgets/area/area.component.ts");
    /* harmony import */


    var _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/divider/index.ngfactory */
    "./node_modules/@angular/material/divider/index.ngfactory.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/card/index.ngfactory */
    "./node_modules/@angular/material/card/index.ngfactory.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/widgets/card/card.component.ngfactory */
    "./src/app/shared/widgets/card/card.component.ngfactory.js");
    /* harmony import */


    var _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/widgets/card/card.component */
    "./src/app/shared/widgets/card/card.component.ts");
    /* harmony import */


    var _shared_widget_pie_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/widget/pie/pie.component.ngfactory */
    "./src/app/shared/widget/pie/pie.component.ngfactory.js");
    /* harmony import */


    var _shared_widget_pie_pie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/widget/pie/pie.component */
    "./src/app/shared/widget/pie/pie.component.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/modules/dashboard.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DashboardComponent = [_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DashboardComponent,
      data: {}
    });

    function View_DashboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-widget-area", [], [[8, "data", 0]], null, null, _shared_widgets_area_area_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AreaComponent_0"], _shared_widgets_area_area_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AreaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_3__["AreaComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 23, "div", [["class", "stats-card"], ["fxLayout", "row"], ["fxLayoutAlign", "space-between center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "mat-card", [["class", "mat-card mat-focus-indicator"], ["fxFlex", "25"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "app-widget-card", [["label", "New Users"], ["percentage", "50"], ["total", "12k"]], null, null, null, _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardComponent_0"], _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], [], {
        label: [0, "label"],
        total: [1, "total"],
        percentage: [2, "percentage"],
        data: [3, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "mat-card", [["class", "mat-card mat-focus-indicator"], ["fxFlex", "25"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "app-widget-card", [["label", "Users Retention"], ["percentage", "40"], ["total", "10k"]], null, null, null, _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardComponent_0"], _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 114688, null, 0, _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], [], {
        label: [0, "label"],
        total: [1, "total"],
        percentage: [2, "percentage"],
        data: [3, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "mat-card", [["class", "mat-card mat-focus-indicator"], ["fxFlex", "25"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 1, "app-widget-card", [["label", "Users engagement"], ["percentage", "30"], ["total", "8k"]], null, null, null, _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardComponent_0"], _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 114688, null, 0, _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], [], {
        label: [0, "label"],
        total: [1, "total"],
        percentage: [2, "percentage"],
        data: [3, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "mat-card", [["class", "mat-card mat-focus-indicator"], ["fxFlex", "25"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 1, "app-widget-card", [["label", "Referral"], ["percentage", "20"], ["total", "6k"]], null, null, null, _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardComponent_0"], _shared_widgets_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], [], {
        label: [0, "label"],
        total: [1, "total"],
        percentage: [2, "percentage"],
        data: [3, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "div", [["fxLayout", "60"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 3, "div", [["fxLayout", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "app-widget-pie", [], null, null, null, _shared_widget_pie_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PieComponent_0"], _shared_widget_pie_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PieComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 114688, null, 0, _shared_widget_pie_pie_component__WEBPACK_IMPORTED_MODULE_15__["PieComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 2, 0);

        var currVal_5 = "row";

        _ck(_v, 8, 0, currVal_5);

        var currVal_6 = "20px";

        _ck(_v, 9, 0, currVal_6);

        var currVal_7 = "space-between center";

        _ck(_v, 10, 0, currVal_7);

        var currVal_9 = "25";

        _ck(_v, 12, 0, currVal_9);

        var currVal_10 = "New Users";
        var currVal_11 = "12k";
        var currVal_12 = "50";
        var currVal_13 = _co.cards;

        _ck(_v, 15, 0, currVal_10, currVal_11, currVal_12, currVal_13);

        var currVal_15 = "25";

        _ck(_v, 17, 0, currVal_15);

        var currVal_16 = "Users Retention";
        var currVal_17 = "10k";
        var currVal_18 = "40";
        var currVal_19 = _co.cards;

        _ck(_v, 20, 0, currVal_16, currVal_17, currVal_18, currVal_19);

        var currVal_21 = "25";

        _ck(_v, 22, 0, currVal_21);

        var currVal_22 = "Users engagement";
        var currVal_23 = "8k";
        var currVal_24 = "30";
        var currVal_25 = _co.cards;

        _ck(_v, 25, 0, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_27 = "25";

        _ck(_v, 27, 0, currVal_27);

        var currVal_28 = "Referral";
        var currVal_29 = "6k";
        var currVal_30 = "20";
        var currVal_31 = _co.cards;

        _ck(_v, 30, 0, currVal_28, currVal_29, currVal_30, currVal_31);

        var currVal_36 = "row";

        _ck(_v, 36, 0, currVal_36);

        var currVal_37 = "20px";

        _ck(_v, 37, 0, currVal_37);

        var currVal_38 = "space-between center";

        _ck(_v, 38, 0, currVal_38);

        var currVal_39 = "60";

        _ck(_v, 40, 0, currVal_39);

        var currVal_40 = "40";

        _ck(_v, 42, 0, currVal_40);

        var currVal_41 = _co.pieChart;

        _ck(_v, 44, 0, currVal_41);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.bigChart;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).vertical ? "vertical" : "horizontal";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).vertical;

        var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).vertical;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inset;

        _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations";

        _ck(_v, 11, 0, currVal_8);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations";

        _ck(_v, 16, 0, currVal_14);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations";

        _ck(_v, 21, 0, currVal_20);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationMode === "NoopAnimations";

        _ck(_v, 26, 0, currVal_26);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).vertical ? "vertical" : "horizontal";

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).vertical;

        var currVal_34 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).vertical;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).inset;

        _ck(_v, 32, 0, currVal_32, currVal_33, currVal_34, currVal_35);
      });
    }

    function View_DashboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], [_dashboard_service__WEBPACK_IMPORTED_MODULE_17__["DashboardService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.scss.shim.ngstyle.js":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.scss.shim.ngstyle.js ***!
    \****************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesDashboardDashboardComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.bigChart = [];
        this.cards = [];
        this.pieChart = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bigChart = this.dashboardService.bigChart();
          this.cards = this.dashboardService.cards();
          this.pieChart = this.dashboardService.pieChart();
        }
      }]);

      return DashboardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/modules/posts/posts.component.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/modules/posts/posts.component.ngfactory.js ***!
    \************************************************************/

  /*! exports provided: RenderType_PostsComponent, View_PostsComponent_0, View_PostsComponent_Host_0, PostsComponentNgFactory */

  /***/
  function srcAppModulesPostsPostsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PostsComponent", function () {
      return RenderType_PostsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PostsComponent_0", function () {
      return View_PostsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PostsComponent_Host_0", function () {
      return View_PostsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponentNgFactory", function () {
      return PostsComponentNgFactory;
    });
    /* harmony import */


    var _posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./posts.component.scss.shim.ngstyle */
    "./src/app/modules/posts/posts.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/modules/posts/posts.component.ts");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../userdata.service */
    "./src/app/userdata.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PostsComponent = [_posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PostsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PostsComponent,
      data: {}
    });

    function View_PostsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "post-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["style", "font-style: italic;color: darkgreen;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", "-", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;
        var currVal_1 = _v.context.$implicit.id;

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _v.context.$implicit.email;

        _ck(_v, 4, 0, currVal_2);
      });
    }

    function View_PostsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [["style", "font: bold;text-align: center;color:coral;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User Data from JSON"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.posts;

        _ck(_v, 3, 0, currVal_0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_PostsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-posts", [], null, null, null, View_PostsComponent_0, RenderType_PostsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], [_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserdataService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PostsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-posts", _posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], View_PostsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/modules/posts/posts.component.scss.shim.ngstyle.js":
  /*!********************************************************************!*\
    !*** ./src/app/modules/posts/posts.component.scss.shim.ngstyle.js ***!
    \********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesPostsPostsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".post-card[_ngcontent-%COMP%] {\n  background: #ccc;\n  margin: 10px;\n  padding: 10px;\n  width: 40%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/modules/posts/posts.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/posts/posts.component.ts ***!
    \**************************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppModulesPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(userdataservice) {
        _classCallCheck(this, PostsComponent);

        this.userdataservice = userdataservice;
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          return this.userdataservice.getUsers().subscribe(function (userdata) {
            return _this4.posts = userdata;
          });
        }
      }]);

      return PostsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */

  /***/
  function srcAppSharedComponentsFooterFooterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function () {
      return RenderType_FooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function () {
      return View_FooterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function () {
      return View_FooterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function () {
      return FooterComponentNgFactory;
    });
    /* harmony import */


    var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./footer.component.scss.shim.ngstyle */
    "./src/app/shared/components/footer/footer.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/divider/index.ngfactory */
    "./node_modules/@angular/material/divider/index.ngfactory.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FooterComponent,
      data: {}
    });

    function View_FooterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "footer", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\xA9All rights reserved 2020\n"]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inset;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_FooterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss.shim.ngstyle.js":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss.shim.ngstyle.js ***!
    \********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () {
      return RenderType_HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () {
      return View_HeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () {
      return View_HeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () {
      return HeaderComponentNgFactory;
    });
    /* harmony import */


    var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header.component.scss.shim.ngstyle */
    "./src/app/shared/components/header/header.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/toolbar/index.ngfactory */
    "./node_modules/@angular/material/toolbar/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/menu/index.ngfactory */
    "./node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/shared/components/header/header.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HeaderComponent,
      data: {}
    });

    function View_HeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 1, 47, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.toggleSideBar() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["APP LOGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 38, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "flex-end"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 34, "ul", [["fxLayout", "row"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 19, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["class", "mat-focus-indicator mat-menu-trigger"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleMousedown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]], {
        menu: [0, "menu"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["person_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 12, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 5, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 180224, [[2, 4], [3, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["exit_to_app"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Sign out "]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);

        _ck(_v, 8, 0);

        var currVal_7 = "row";

        _ck(_v, 13, 0, currVal_7);

        var currVal_8 = "flex-end";

        _ck(_v, 14, 0, currVal_8);

        var currVal_9 = "";

        _ck(_v, 15, 0, currVal_9);

        var currVal_10 = "row";

        _ck(_v, 17, 0, currVal_10);

        var currVal_11 = "20px";

        _ck(_v, 18, 0, currVal_11);

        _ck(_v, 23, 0);

        _ck(_v, 29, 0);

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39);

        _ck(_v, 34, 0, currVal_24);

        _ck(_v, 36, 0);

        _ck(_v, 39, 0);

        _ck(_v, 48, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

        _ck(_v, 5, 0, currVal_3, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn";

        _ck(_v, 7, 0, currVal_5, currVal_6);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

        _ck(_v, 20, 0, currVal_12, currVal_13);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn";

        _ck(_v, 22, 0, currVal_14, currVal_15);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null;
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._animationMode === "NoopAnimations";

        _ck(_v, 26, 0, currVal_16, currVal_17);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).inline;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color !== "warn";

        _ck(_v, 28, 0, currVal_18, currVal_19);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).menuOpen || null;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).menu.panelId : null;

        _ck(_v, 32, 0, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).inline;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "warn";

        _ck(_v, 35, 0, currVal_25, currVal_26);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).role;

        var currVal_28 = true;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._highlighted;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._triggersSubmenu;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._getTabIndex();

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).disabled.toString();

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).disabled || null;

        _ck(_v, 45, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).inline;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "warn";

        _ck(_v, 47, 0, currVal_34, currVal_35);
      });
    }

    function View_HeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {
      toggleSideBarForMe: "toggleSideBarForMe"
    }, []);
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.scss.shim.ngstyle.js":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss.shim.ngstyle.js ***!
    \********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSideBar",
        value: function toggleSideBar() {
          this.toggleSideBarForMe.emit();
        }
      }]);

      return HeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_SidebarComponent, View_SidebarComponent_0, View_SidebarComponent_Host_0, SidebarComponentNgFactory */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SidebarComponent", function () {
      return RenderType_SidebarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_0", function () {
      return View_SidebarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_Host_0", function () {
      return View_SidebarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponentNgFactory", function () {
      return SidebarComponentNgFactory;
    });
    /* harmony import */


    var _sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidebar.component.scss.shim.ngstyle */
    "./src/app/shared/components/sidebar/sidebar.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/divider/index.ngfactory */
    "./node_modules/@angular/material/divider/index.ngfactory.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_SidebarComponent = [_sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SidebarComponent,
      data: {}
    });

    function View_SidebarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 74, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 6, "div", [["class", "profile-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "header "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Saravana"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["saran381986@gmail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "Saravana"], ["class", "profiltIMG"], ["src", "assets/profile.JPG"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "h2", [["class", "mat-subheader"], ["matSubheader", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 9, "a", [["class", "mat-list-item mat-focus-indicator"], ["mat-list-item", ""], ["routerLink", "/"], ["routerLinkActive", "list-item-active"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _icon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 9, "a", [["class", "mat-list-item mat-focus-indicator"], ["mat-list-item", ""], ["routerLink", "/posts"], ["routerLinkActive", "list-item-active"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _icon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Posts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 9, "a", [["class", "mat-list-item mat-focus-indicator"], ["mat-list-item", ""], ["routerLink", "/weather-widget-main"], ["routerLinkActive", "list-item-active"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        _icon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, [[15, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Weather-Widget"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 0, 2, "h2", [["class", "mat-subheader"], ["matSubheader", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 12, "a", [["class", "mat-list-item mat-focus-indicator"], ["mat-list-item", ""], ["routerLink", "/Contacts"], ["routerLinkActive", "list-item-active"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        _icon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, [[20, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 2, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["import_contacts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, [" Contacts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 12, "a", [["class", "mat-list-item mat-focus-indicator"], ["mat-list-item", ""], ["routerLink", "/Contacts"], ["routerLinkActive", "list-item-active"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
        _lines: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
        _avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
        _icon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 671744, [[25, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, 2, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["contact_phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, [" Leads "]))], function (_ck, _v) {
        var currVal_9 = "/";

        _ck(_v, 19, 0, currVal_9);

        var currVal_10 = "list-item-active";

        _ck(_v, 20, 0, currVal_10);

        var currVal_16 = "/posts";

        _ck(_v, 29, 0, currVal_16);

        var currVal_17 = "list-item-active";

        _ck(_v, 30, 0, currVal_17);

        var currVal_23 = "/weather-widget-main";

        _ck(_v, 39, 0, currVal_23);

        var currVal_24 = "list-item-active";

        _ck(_v, 40, 0, currVal_24);

        var currVal_34 = "/Contacts";

        _ck(_v, 54, 0, currVal_34);

        var currVal_35 = "list-item-active";

        _ck(_v, 55, 0, currVal_35);

        _ck(_v, 59, 0);

        var currVal_43 = "/Contacts";

        _ck(_v, 67, 0, currVal_43);

        var currVal_44 = "list-item-active";

        _ck(_v, 68, 0, currVal_44);

        _ck(_v, 72, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).inset;

        _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._icon;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._icon;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href;

        _ck(_v, 14, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).disabled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._icon;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._icon;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).target;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).href;

        _ck(_v, 24, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._icon;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._icon;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).target;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).href;

        _ck(_v, 34, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).vertical ? "vertical" : "horizontal";

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).vertical;

        var currVal_27 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).vertical;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).inset;

        _ck(_v, 44, 0, currVal_25, currVal_26, currVal_27, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._icon;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._icon;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).target;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).href;

        _ck(_v, 49, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).inline;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).color !== "warn";

        _ck(_v, 58, 0, currVal_36, currVal_37);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._icon;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._icon;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).target;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).href;

        _ck(_v, 62, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).inline;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color !== "warn";

        _ck(_v, 71, 0, currVal_45, currVal_46);
      });
    }

    function View_SidebarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sidebar", _sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], View_SidebarComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3R7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1jYXJke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9maWx0SU1He1xyXG4gICAgXHJcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    }); // import { WeatherWidgetMainComponent } from '../components/weather-widget-main/weather-widget-main.component';


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };
    /***/

  },

  /***/
  "./src/app/shared/widget/pie/pie.component.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/shared/widget/pie/pie.component.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: RenderType_PieComponent, View_PieComponent_0, View_PieComponent_Host_0, PieComponentNgFactory */

  /***/
  function srcAppSharedWidgetPiePieComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PieComponent", function () {
      return RenderType_PieComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PieComponent_0", function () {
      return View_PieComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PieComponent_Host_0", function () {
      return View_PieComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieComponentNgFactory", function () {
      return PieComponentNgFactory;
    });
    /* harmony import */


    var _pie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pie.component.scss.shim.ngstyle */
    "./src/app/shared/widget/pie/pie.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */
    "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pie.component */
    "./src/app/shared/widget/pie/pie.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PieComponent = [_pie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PieComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PieComponent,
      data: {}
    });

    function View_PieComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%;  display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        Highcharts: [0, "Highcharts"],
        options: [1, "options"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.Highcharts;
        var currVal_1 = _co.chartOptions;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_PieComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-widget-pie", [], null, null, null, View_PieComponent_0, RenderType_PieComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pie_component__WEBPACK_IMPORTED_MODULE_4__["PieComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PieComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-widget-pie", _pie_component__WEBPACK_IMPORTED_MODULE_4__["PieComponent"], View_PieComponent_Host_0, {
      data: "data"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/widget/pie/pie.component.scss.shim.ngstyle.js":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/widget/pie/pie.component.scss.shim.ngstyle.js ***!
    \**********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedWidgetPiePieComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXQvcGllL3BpZS5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/shared/widget/pie/pie.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/widget/pie/pie.component.ts ***!
    \****************************************************/

  /*! exports provided: PieComponent */

  /***/
  function srcAppSharedWidgetPiePieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieComponent", function () {
      return PieComponent;
    });
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);

    var PieComponent = /*#__PURE__*/function () {
      function PieComponent() {
        _classCallCheck(this, PieComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.data = [];
      }

      _createClass(PieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartOptions = {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
            },
            title: {
              text: 'Random Data'
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
              point: {
                valueSuffix: '%'
              }
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
              }
            },
            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            },
            series: [{
              name: 'Brands',
              colorByPoint: true,
              data: this.data // data: [{
              //     name: 'Chrome',
              //     y: 61.41,
              //     sliced: true,
              //     selected: true
              // }, {
              //     name: 'Internet Explorer',
              //     y: 11.84
              // }, {
              //     name: 'Firefox',
              //     y: 10.85
              // }, {
              //     name: 'Edge',
              //     y: 4.67
              // }, {
              //     name: 'Safari',
              //     y: 4.18
              // }, {
              //     name: 'Sogou Explorer',
              //     y: 1.64
              // }, {
              //     name: 'Opera',
              //     y: 1.6
              // }, {
              //     name: 'QQ',
              //     y: 1.2
              // }, {
              //     name: 'Other',
              //     y: 2.61
              // }]

            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
          setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
          }, 300);
        }
      }]);

      return PieComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/widgets/area/area.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/widgets/area/area.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_AreaComponent, View_AreaComponent_0, View_AreaComponent_Host_0, AreaComponentNgFactory */

  /***/
  function srcAppSharedWidgetsAreaAreaComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AreaComponent", function () {
      return RenderType_AreaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AreaComponent_0", function () {
      return View_AreaComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AreaComponent_Host_0", function () {
      return View_AreaComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaComponentNgFactory", function () {
      return AreaComponentNgFactory;
    });
    /* harmony import */


    var _area_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./area.component.scss.shim.ngstyle */
    "./src/app/shared/widgets/area/area.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */
    "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./area.component */
    "./src/app/shared/widgets/area/area.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AreaComponent = [_area_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AreaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AreaComponent,
      data: {}
    });

    function View_AreaComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height: 300px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        Highcharts: [0, "Highcharts"],
        options: [1, "options"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.Highcharts;
        var currVal_1 = _co.chartOptions;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_AreaComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-widget-area", [], null, null, null, View_AreaComponent_0, RenderType_AreaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AreaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-widget-area", _area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], View_AreaComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/widgets/area/area.component.scss.shim.ngstyle.js":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/widgets/area/area.component.scss.shim.ngstyle.js ***!
    \*************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedWidgetsAreaAreaComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/shared/widgets/area/area.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/widgets/area/area.component.ts ***!
    \*******************************************************/

  /*! exports provided: AreaComponent */

  /***/
  function srcAppSharedWidgetsAreaAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaComponent", function () {
      return AreaComponent;
    });
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);

    var AreaComponent = /*#__PURE__*/function () {
      function AreaComponent() {
        _classCallCheck(this, AreaComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
      }

      _createClass(AreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartOptions = {
            chart: {
              type: 'area'
            },
            title: {
              text: 'Random Data'
            },
            subtitle: {
              text: 'Demo'
            },
            tooltip: {
              split: true,
              valueSuffix: ' millions'
            },
            credits: {
              enabled: false
            },
            exporting: {
              enabled: true
            },
            series: [{
              name: 'Asia',
              data: [500, 635, 809, 947, 1402, 3634, 5268]
            }, {
              name: 'Africa',
              data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
              name: 'Europe',
              data: [163, 203, 276, 408, 547, 729, 628]
            }, {
              name: 'America',
              data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
              name: 'Oceania',
              data: [2, 2, 2, 6, 13, 30, 46]
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
          setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
          }, 300);
        }
      }]);

      return AreaComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/widgets/card/card.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/widgets/card/card.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_CardComponent, View_CardComponent_0, View_CardComponent_Host_0, CardComponentNgFactory */

  /***/
  function srcAppSharedWidgetsCardCardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CardComponent", function () {
      return RenderType_CardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CardComponent_0", function () {
      return View_CardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CardComponent_Host_0", function () {
      return View_CardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponentNgFactory", function () {
      return CardComponentNgFactory;
    });
    /* harmony import */


    var _card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card.component.scss.shim.ngstyle */
    "./src/app/shared/widgets/card/card.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */
    "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/shared/widgets/card/card.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CardComponent = [_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CardComponent,
      data: {}
    });

    function View_CardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "total"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "primary"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["trending_up"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" of_target "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height: 100px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        Highcharts: [0, "Highcharts"],
        options: [1, "options"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = "primary";

        _ck(_v, 7, 0, currVal_4);

        var currVal_6 = _co.Highcharts;
        var currVal_7 = _co.chartOptions;

        _ck(_v, 15, 0, currVal_6, currVal_7);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.label;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.total;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "warn";

        _ck(_v, 6, 0, currVal_2, currVal_3);

        var currVal_5 = _co.percentage;

        _ck(_v, 10, 0, currVal_5);
      });
    }

    function View_CardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-widget-card", [], null, null, null, View_CardComponent_0, RenderType_CardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-widget-card", _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], View_CardComponent_Host_0, {
      label: "label",
      total: "total",
      percentage: "percentage",
      data: "data"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/widgets/card/card.component.scss.shim.ngstyle.js":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/widgets/card/card.component.scss.shim.ngstyle.js ***!
    \*************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedWidgetsCardCardComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 4px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.mat-icon[_ngcontent-%COMP%], descrption[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUk7RUFDSSxjQUFBO0FBQ1I7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmg0e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgIC50b3RhbHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbixkZXNjcnB0aW9ue1xyXG4gICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgdG9wOjVweDtcclxuICAgIH0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shared/widgets/card/card.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/widgets/card/card.component.ts ***!
    \*******************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedWidgetsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.data = [];
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartOptions = {
            chart: {
              type: 'area',
              backgroundcolor: null,
              borderwidth: 0,
              margin: [2, 2, 2, 2],
              height: 60
            },
            title: {
              text: null
            },
            subtitle: {
              text: null
            },
            tooltip: {
              split: true,
              outside: true
            },
            legend: {
              enabled: false
            },
            credits: {
              enabled: false
            },
            exporting: {
              enabled: false
            },
            xAxis: {
              labels: {
                enabled: false
              },
              title: {
                text: null
              },
              startOnTick: false,
              endOnTick: false,
              tickOptions: []
            },
            yAxis: {
              labels: {
                enabled: false
              },
              title: {
                text: null
              },
              startOnTick: false,
              endOnTick: false,
              tickOptions: []
            },
            series: [{
              data: this.data
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
          setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
          }, 300);
        }
      }]);

      return CardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/userdata.service.ts":
  /*!*************************************!*\
    !*** ./src/app/userdata.service.ts ***!
    \*************************************/

  /*! exports provided: UserdataService */

  /***/
  function srcAppUserdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdataService", function () {
      return UserdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserdataService = /*#__PURE__*/function () {
      function UserdataService(_http) {
        _classCallCheck(this, UserdataService);

        this._http = _http;
        this.apiurl = 'https://jsonplaceholder.typicode.com/users';
      }

      _createClass(UserdataService, [{
        key: "getUsers",
        value: function getUsers() {
          return this._http.get(this.apiurl);
        }
      }]);

      return UserdataService;
    }();

    UserdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function UserdataService_Factory() {
        return new UserdataService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: UserdataService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/weatherdata.service.ts":
  /*!****************************************!*\
    !*** ./src/app/weatherdata.service.ts ***!
    \****************************************/

  /*! exports provided: WeatherdataService */

  /***/
  function srcAppWeatherdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherdataService", function () {
      return WeatherdataService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WeatherdataService = /*#__PURE__*/function () {
      function WeatherdataService(http) {
        _classCallCheck(this, WeatherdataService);

        this.http = http;
        this.url = 'https:/api.openweathermap.org/data/2.5/weather';
        this.apikey = '4e2e93d53f8b9f8e16410f30ebf6c3f7';
      }

      _createClass(WeatherdataService, [{
        key: "getWeatherDataByCoords",
        value: function getWeatherDataByCoords(lat, lon) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('lat', lat).set('lon', lon).set('units', 'imperial').set('appid', this.apikey);
          return this.http.get(this.url, {
            params: params
          });
        }
      }, {
        key: "getWeatherDataByCityName",
        value: function getWeatherDataByCityName(city) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('q', city).set('units', 'imperial').set('appid', this.apikey);
          return this.http.get(this.url, {
            params: params
          });
        }
      }]);

      return WeatherdataService;
    }();

    WeatherdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function WeatherdataService_Factory() {
        return new WeatherdataService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: WeatherdataService,
      providedIn: "root"
    });
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
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
    /*! C:\Users\saranya\dashtest\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map