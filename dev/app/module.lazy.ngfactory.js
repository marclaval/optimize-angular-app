/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['@angular/core/src/linker/ng_module_factory', './module.lazy', '@angular/common/src/common_module', '@angular/core/src/application_module', '@angular/platform-browser/src/browser', '@angular/router/src/router_module', './welcome/welcome.module', '@angular/common/src/localization', '@angular/core/src/application_init', '@angular/core/src/testability/testability', '@angular/core/src/application_ref', '@angular/core/src/linker/compiler', '@angular/platform-browser/src/dom/events/hammer_gestures', '@angular/platform-browser/src/dom/events/event_manager', '@angular/platform-browser/src/dom/shared_styles_host', '@angular/platform-browser/src/dom/dom_renderer', '@angular/platform-browser/src/security/dom_sanitization_service', '@angular/core/src/animation/animation_queue', '@angular/core/src/linker/view_utils', '@angular/platform-browser/src/browser/title', '@angular/common/src/location/location', '@angular/router/src/url_tree', '@angular/router/src/router_outlet_map', '@angular/core/src/linker/system_js_ng_module_factory_loader', '@angular/router/src/router_preloader', './welcome/welcome.ngfactory', './app.ngfactory', '@angular/core/src/i18n/tokens', '@angular/core/src/application_tokens', '@angular/platform-browser/src/dom/events/dom_events', '@angular/platform-browser/src/dom/events/key_events', '@angular/core/src/zone/ng_zone', '@angular/platform-browser/src/dom/debug/ng_probe', '@angular/common/src/location/platform_location', '@angular/common/src/location/location_strategy', './welcome/welcome', '@angular/router/src/url_handling_strategy', '@angular/router/src/route_reuse_strategy', '@angular/router/src/router', '@angular/core/src/console', '@angular/core/src/error_handler', '@angular/platform-browser/src/dom/dom_tokens', '@angular/platform-browser/src/dom/animation_driver', '@angular/core/src/render/api', '@angular/core/src/security', '@angular/core/src/change_detection/differs/iterable_differs', '@angular/core/src/change_detection/differs/keyvalue_differs', '@angular/platform-browser/src/browser/meta', '@angular/core/src/linker/ng_module_factory_loader', '@angular/router/src/router_config_loader', '@angular/router/src/router_state'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import17, import18, import19, import20, import21, import22, import23, import24, import26, import27, import28, import29, import30, import31, import32, import33, import34, import35, import36, import37, import38, import39, import40, import41, import42, import43, import44, import45, import46, import47, import48, import49, import50, import51;
    var AppLazyModuleInjector, AppLazyModuleNgFactory;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            },
            function (import10_1) {
                import10 = import10_1;
            },
            function (import11_1) {
                import11 = import11_1;
            },
            function (import12_1) {
                import12 = import12_1;
            },
            function (import13_1) {
                import13 = import13_1;
            },
            function (import14_1) {
                import14 = import14_1;
            },
            function (import15_1) {
                import15 = import15_1;
            },
            function (import16_1) {
                import16 = import16_1;
            },
            function (import17_1) {
                import17 = import17_1;
            },
            function (import18_1) {
                import18 = import18_1;
            },
            function (import19_1) {
                import19 = import19_1;
            },
            function (import20_1) {
                import20 = import20_1;
            },
            function (import21_1) {
                import21 = import21_1;
            },
            function (import22_1) {
                import22 = import22_1;
            },
            function (import23_1) {
                import23 = import23_1;
            },
            function (import24_1) {
                import24 = import24_1;
            },
            function (import26_1) {
                import26 = import26_1;
            },
            function (import27_1) {
                import27 = import27_1;
            },
            function (import28_1) {
                import28 = import28_1;
            },
            function (import29_1) {
                import29 = import29_1;
            },
            function (import30_1) {
                import30 = import30_1;
            },
            function (import31_1) {
                import31 = import31_1;
            },
            function (import32_1) {
                import32 = import32_1;
            },
            function (import33_1) {
                import33 = import33_1;
            },
            function (import34_1) {
                import34 = import34_1;
            },
            function (import35_1) {
                import35 = import35_1;
            },
            function (import36_1) {
                import36 = import36_1;
            },
            function (import37_1) {
                import37 = import37_1;
            },
            function (import38_1) {
                import38 = import38_1;
            },
            function (import39_1) {
                import39 = import39_1;
            },
            function (import40_1) {
                import40 = import40_1;
            },
            function (import41_1) {
                import41 = import41_1;
            },
            function (import42_1) {
                import42 = import42_1;
            },
            function (import43_1) {
                import43 = import43_1;
            },
            function (import44_1) {
                import44 = import44_1;
            },
            function (import45_1) {
                import45 = import45_1;
            },
            function (import46_1) {
                import46 = import46_1;
            },
            function (import47_1) {
                import47 = import47_1;
            },
            function (import48_1) {
                import48 = import48_1;
            },
            function (import49_1) {
                import49 = import49_1;
            },
            function (import50_1) {
                import50 = import50_1;
            },
            function (import51_1) {
                import51 = import51_1;
            }],
        execute: function() {
            AppLazyModuleInjector = (function (_super) {
                __extends(AppLazyModuleInjector, _super);
                function AppLazyModuleInjector(parent) {
                    _super.call(this, parent, [
                        import26.WelcomeNgFactory,
                        import27.AppNgFactory
                    ], [import27.AppNgFactory]);
                }
                Object.defineProperty(AppLazyModuleInjector.prototype, "_LOCALE_ID_7", {
                    get: function () {
                        if ((this.__LOCALE_ID_7 == null)) {
                            (this.__LOCALE_ID_7 = import3._localeFactory(this.parent.get(import28.LOCALE_ID, null)));
                        }
                        return this.__LOCALE_ID_7;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NgLocalization_8", {
                    get: function () {
                        if ((this.__NgLocalization_8 == null)) {
                            (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7));
                        }
                        return this.__NgLocalization_8;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ApplicationRef_13", {
                    get: function () {
                        if ((this.__ApplicationRef_13 == null)) {
                            (this.__ApplicationRef_13 = this._ApplicationRef__12);
                        }
                        return this.__ApplicationRef_13;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Compiler_14", {
                    get: function () {
                        if ((this.__Compiler_14 == null)) {
                            (this.__Compiler_14 = new import11.Compiler());
                        }
                        return this.__Compiler_14;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_APP_ID_15", {
                    get: function () {
                        if ((this.__APP_ID_15 == null)) {
                            (this.__APP_ID_15 = import29._appIdRandomProviderFactory());
                        }
                        return this.__APP_ID_15;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_DOCUMENT_16", {
                    get: function () {
                        if ((this.__DOCUMENT_16 == null)) {
                            (this.__DOCUMENT_16 = import4._document());
                        }
                        return this.__DOCUMENT_16;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
                    get: function () {
                        if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                            (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig());
                        }
                        return this.__HAMMER_GESTURE_CONFIG_17;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
                    get: function () {
                        if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                            (this.__EVENT_MANAGER_PLUGINS_18 = [
                                new import30.DomEventsPlugin(),
                                new import31.KeyEventsPlugin(),
                                new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                            ]);
                        }
                        return this.__EVENT_MANAGER_PLUGINS_18;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_EventManager_19", {
                    get: function () {
                        if ((this.__EventManager_19 == null)) {
                            (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import32.NgZone)));
                        }
                        return this.__EventManager_19;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_AnimationDriver_21", {
                    get: function () {
                        if ((this.__AnimationDriver_21 == null)) {
                            (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
                        }
                        return this.__AnimationDriver_21;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_DomRootRenderer_22", {
                    get: function () {
                        if ((this.__DomRootRenderer_22 == null)) {
                            (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
                        }
                        return this.__DomRootRenderer_22;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NgProbeToken_23", {
                    get: function () {
                        if ((this.__NgProbeToken_23 == null)) {
                            (this.__NgProbeToken_23 = [import5.routerNgProbeToken()]);
                        }
                        return this.__NgProbeToken_23;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_RootRenderer_24", {
                    get: function () {
                        if ((this.__RootRenderer_24 == null)) {
                            (this.__RootRenderer_24 = import33._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import33.NgProbeToken, null), this._NgProbeToken_23));
                        }
                        return this.__RootRenderer_24;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_DomSanitizer_25", {
                    get: function () {
                        if ((this.__DomSanitizer_25 == null)) {
                            (this.__DomSanitizer_25 = new import16.DomSanitizerImpl());
                        }
                        return this.__DomSanitizer_25;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Sanitizer_26", {
                    get: function () {
                        if ((this.__Sanitizer_26 == null)) {
                            (this.__Sanitizer_26 = this._DomSanitizer_25);
                        }
                        return this.__Sanitizer_26;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_AnimationQueue_27", {
                    get: function () {
                        if ((this.__AnimationQueue_27 == null)) {
                            (this.__AnimationQueue_27 = new import17.AnimationQueue(this.parent.get(import32.NgZone)));
                        }
                        return this.__AnimationQueue_27;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ViewUtils_28", {
                    get: function () {
                        if ((this.__ViewUtils_28 == null)) {
                            (this.__ViewUtils_28 = new import18.ViewUtils(this._RootRenderer_24, this._Sanitizer_26, this._AnimationQueue_27));
                        }
                        return this.__ViewUtils_28;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_IterableDiffers_29", {
                    get: function () {
                        if ((this.__IterableDiffers_29 == null)) {
                            (this.__IterableDiffers_29 = import3._iterableDiffersFactory());
                        }
                        return this.__IterableDiffers_29;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_KeyValueDiffers_30", {
                    get: function () {
                        if ((this.__KeyValueDiffers_30 == null)) {
                            (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory());
                        }
                        return this.__KeyValueDiffers_30;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_SharedStylesHost_31", {
                    get: function () {
                        if ((this.__SharedStylesHost_31 == null)) {
                            (this.__SharedStylesHost_31 = this._DomSharedStylesHost_20);
                        }
                        return this.__SharedStylesHost_31;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Meta_32", {
                    get: function () {
                        if ((this.__Meta_32 == null)) {
                            (this.__Meta_32 = import4.meta());
                        }
                        return this.__Meta_32;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Title_33", {
                    get: function () {
                        if ((this.__Title_33 == null)) {
                            (this.__Title_33 = new import19.Title());
                        }
                        return this.__Title_33;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ROUTER_CONFIGURATION_34", {
                    get: function () {
                        if ((this.__ROUTER_CONFIGURATION_34 == null)) {
                            (this.__ROUTER_CONFIGURATION_34 = {
                                useHash: true,
                                preloadingStrategy: import1.PreloadSelectedModules
                            });
                        }
                        return this.__ROUTER_CONFIGURATION_34;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_LocationStrategy_35", {
                    get: function () {
                        if ((this.__LocationStrategy_35 == null)) {
                            (this.__LocationStrategy_35 = import5.provideLocationStrategy(this.parent.get(import34.PlatformLocation), this.parent.get(import35.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_34));
                        }
                        return this.__LocationStrategy_35;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Location_36", {
                    get: function () {
                        if ((this.__Location_36 == null)) {
                            (this.__Location_36 = new import20.Location(this._LocationStrategy_35));
                        }
                        return this.__Location_36;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_UrlSerializer_37", {
                    get: function () {
                        if ((this.__UrlSerializer_37 == null)) {
                            (this.__UrlSerializer_37 = new import21.DefaultUrlSerializer());
                        }
                        return this.__UrlSerializer_37;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_RouterOutletMap_38", {
                    get: function () {
                        if ((this.__RouterOutletMap_38 == null)) {
                            (this.__RouterOutletMap_38 = new import22.RouterOutletMap());
                        }
                        return this.__RouterOutletMap_38;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NgModuleFactoryLoader_39", {
                    get: function () {
                        if ((this.__NgModuleFactoryLoader_39 == null)) {
                            (this.__NgModuleFactoryLoader_39 = new import23.SystemJsNgModuleLoader(this._Compiler_14, this.parent.get(import23.SystemJsNgModuleLoaderConfig, null)));
                        }
                        return this.__NgModuleFactoryLoader_39;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ROUTES_40", {
                    get: function () {
                        if ((this.__ROUTES_40 == null)) {
                            (this.__ROUTES_40 = [[
                                    {
                                        path: '',
                                        component: import36.Welcome
                                    },
                                    {
                                        path: 'list',
                                        loadChildren: 'app/list/list.module#ListModule'
                                    },
                                    {
                                        path: 'subscribe',
                                        loadChildren: 'app/subscribe/subscribe.module#SubscribeModule'
                                    },
                                    {
                                        path: 'search',
                                        loadChildren: 'app/search/search.module#SearchModule'
                                    }
                                ]
                            ]);
                        }
                        return this.__ROUTES_40;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Router_41", {
                    get: function () {
                        if ((this.__Router_41 == null)) {
                            (this.__Router_41 = import5.setupRouter(this._ApplicationRef_13, this._UrlSerializer_37, this._RouterOutletMap_38, this._Location_36, this, this._NgModuleFactoryLoader_39, this._Compiler_14, this._ROUTES_40, this._ROUTER_CONFIGURATION_34, this.parent.get(import37.UrlHandlingStrategy, null), this.parent.get(import38.RouteReuseStrategy, null)));
                        }
                        return this.__Router_41;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ActivatedRoute_42", {
                    get: function () {
                        if ((this.__ActivatedRoute_42 == null)) {
                            (this.__ActivatedRoute_42 = import5.rootRoute(this._Router_41));
                        }
                        return this.__ActivatedRoute_42;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NoPreloading_46", {
                    get: function () {
                        if ((this.__NoPreloading_46 == null)) {
                            (this.__NoPreloading_46 = new import24.NoPreloading());
                        }
                        return this.__NoPreloading_46;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_PreloadAllModules_47", {
                    get: function () {
                        if ((this.__PreloadAllModules_47 == null)) {
                            (this.__PreloadAllModules_47 = new import24.PreloadAllModules());
                        }
                        return this.__PreloadAllModules_47;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ROUTER_INITIALIZER_48", {
                    get: function () {
                        if ((this.__ROUTER_INITIALIZER_48 == null)) {
                            (this.__ROUTER_INITIALIZER_48 = import5.initialRouterNavigation(this._Router_41, this._ApplicationRef_13, this._RouterPreloader_45, this._ROUTER_CONFIGURATION_34));
                        }
                        return this.__ROUTER_INITIALIZER_48;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_49", {
                    get: function () {
                        if ((this.__APP_BOOTSTRAP_LISTENER_49 == null)) {
                            (this.__APP_BOOTSTRAP_LISTENER_49 = [this._ROUTER_INITIALIZER_48]);
                        }
                        return this.__APP_BOOTSTRAP_LISTENER_49;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppLazyModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._ApplicationModule_1 = new import3.ApplicationModule();
                    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
                    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import39.Router, null));
                    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
                    this._WelcomeModule_5 = new import6.WelcomeModule();
                    this._AppLazyModule_6 = new import1.AppLazyModule();
                    this._ErrorHandler_9 = import4.errorHandler();
                    this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER, null));
                    this._Testability_11 = new import9.Testability(this.parent.get(import32.NgZone));
                    this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import32.NgZone), this.parent.get(import40.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import9.TestabilityRegistry, null), this._Testability_11);
                    this._DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16);
                    this._PreloadSelectedModules_43 = new import1.PreloadSelectedModules();
                    this._PreloadingStrategy_44 = this._PreloadSelectedModules_43;
                    this._RouterPreloader_45 = new import24.RouterPreloader(this._Router_41, this._NgModuleFactoryLoader_39, this._Compiler_14, this, this._PreloadingStrategy_44);
                    return this._AppLazyModule_6;
                };
                AppLazyModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import3.ApplicationModule)) {
                        return this._ApplicationModule_1;
                    }
                    if ((token === import4.BrowserModule)) {
                        return this._BrowserModule_2;
                    }
                    if ((token === import5.ROUTER_FORROOT_GUARD)) {
                        return this._ROUTER_FORROOT_GUARD_3;
                    }
                    if ((token === import5.RouterModule)) {
                        return this._RouterModule_4;
                    }
                    if ((token === import6.WelcomeModule)) {
                        return this._WelcomeModule_5;
                    }
                    if ((token === import1.AppLazyModule)) {
                        return this._AppLazyModule_6;
                    }
                    if ((token === import28.LOCALE_ID)) {
                        return this._LOCALE_ID_7;
                    }
                    if ((token === import7.NgLocalization)) {
                        return this._NgLocalization_8;
                    }
                    if ((token === import41.ErrorHandler)) {
                        return this._ErrorHandler_9;
                    }
                    if ((token === import8.ApplicationInitStatus)) {
                        return this._ApplicationInitStatus_10;
                    }
                    if ((token === import9.Testability)) {
                        return this._Testability_11;
                    }
                    if ((token === import10.ApplicationRef_)) {
                        return this._ApplicationRef__12;
                    }
                    if ((token === import10.ApplicationRef)) {
                        return this._ApplicationRef_13;
                    }
                    if ((token === import11.Compiler)) {
                        return this._Compiler_14;
                    }
                    if ((token === import29.APP_ID)) {
                        return this._APP_ID_15;
                    }
                    if ((token === import42.DOCUMENT)) {
                        return this._DOCUMENT_16;
                    }
                    if ((token === import12.HAMMER_GESTURE_CONFIG)) {
                        return this._HAMMER_GESTURE_CONFIG_17;
                    }
                    if ((token === import13.EVENT_MANAGER_PLUGINS)) {
                        return this._EVENT_MANAGER_PLUGINS_18;
                    }
                    if ((token === import13.EventManager)) {
                        return this._EventManager_19;
                    }
                    if ((token === import14.DomSharedStylesHost)) {
                        return this._DomSharedStylesHost_20;
                    }
                    if ((token === import43.AnimationDriver)) {
                        return this._AnimationDriver_21;
                    }
                    if ((token === import15.DomRootRenderer)) {
                        return this._DomRootRenderer_22;
                    }
                    if ((token === import10.NgProbeToken)) {
                        return this._NgProbeToken_23;
                    }
                    if ((token === import44.RootRenderer)) {
                        return this._RootRenderer_24;
                    }
                    if ((token === import16.DomSanitizer)) {
                        return this._DomSanitizer_25;
                    }
                    if ((token === import45.Sanitizer)) {
                        return this._Sanitizer_26;
                    }
                    if ((token === import17.AnimationQueue)) {
                        return this._AnimationQueue_27;
                    }
                    if ((token === import18.ViewUtils)) {
                        return this._ViewUtils_28;
                    }
                    if ((token === import46.IterableDiffers)) {
                        return this._IterableDiffers_29;
                    }
                    if ((token === import47.KeyValueDiffers)) {
                        return this._KeyValueDiffers_30;
                    }
                    if ((token === import14.SharedStylesHost)) {
                        return this._SharedStylesHost_31;
                    }
                    if ((token === import48.Meta)) {
                        return this._Meta_32;
                    }
                    if ((token === import19.Title)) {
                        return this._Title_33;
                    }
                    if ((token === import5.ROUTER_CONFIGURATION)) {
                        return this._ROUTER_CONFIGURATION_34;
                    }
                    if ((token === import35.LocationStrategy)) {
                        return this._LocationStrategy_35;
                    }
                    if ((token === import20.Location)) {
                        return this._Location_36;
                    }
                    if ((token === import21.UrlSerializer)) {
                        return this._UrlSerializer_37;
                    }
                    if ((token === import22.RouterOutletMap)) {
                        return this._RouterOutletMap_38;
                    }
                    if ((token === import49.NgModuleFactoryLoader)) {
                        return this._NgModuleFactoryLoader_39;
                    }
                    if ((token === import50.ROUTES)) {
                        return this._ROUTES_40;
                    }
                    if ((token === import39.Router)) {
                        return this._Router_41;
                    }
                    if ((token === import51.ActivatedRoute)) {
                        return this._ActivatedRoute_42;
                    }
                    if ((token === import1.PreloadSelectedModules)) {
                        return this._PreloadSelectedModules_43;
                    }
                    if ((token === import24.PreloadingStrategy)) {
                        return this._PreloadingStrategy_44;
                    }
                    if ((token === import24.RouterPreloader)) {
                        return this._RouterPreloader_45;
                    }
                    if ((token === import24.NoPreloading)) {
                        return this._NoPreloading_46;
                    }
                    if ((token === import24.PreloadAllModules)) {
                        return this._PreloadAllModules_47;
                    }
                    if ((token === import5.ROUTER_INITIALIZER)) {
                        return this._ROUTER_INITIALIZER_48;
                    }
                    if ((token === import29.APP_BOOTSTRAP_LISTENER)) {
                        return this._APP_BOOTSTRAP_LISTENER_49;
                    }
                    return notFoundResult;
                };
                AppLazyModuleInjector.prototype.destroyInternal = function () {
                    this._ApplicationRef__12.ngOnDestroy();
                    this._DomSharedStylesHost_20.ngOnDestroy();
                    this._RouterPreloader_45.ngOnDestroy();
                };
                return AppLazyModuleInjector;
            }(import0.NgModuleInjector));
            exports_1("AppLazyModuleNgFactory", AppLazyModuleNgFactory = new import0.NgModuleFactory(AppLazyModuleInjector, import1.AppLazyModule));
        }
    }
});
//# sourceMappingURL=module.lazy.ngfactory.js.map