System.register(['@angular/core', '@angular/platform-browser', '@angular/router', 'rxjs/add/observable/of', 'rxjs/Observable', './app', './welcome/welcome.module', './welcome/welcome'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, router_1, Observable_1, app_1, welcome_module_1, welcome_1;
    var appRoutes, PreloadSelectedModules, AppLazyModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (welcome_module_1_1) {
                welcome_module_1 = welcome_module_1_1;
            },
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: welcome_1.Welcome },
                { path: 'list', loadChildren: 'app/list/list.module#ListModule' },
                { path: 'subscribe', loadChildren: 'app/subscribe/subscribe.module#SubscribeModule' },
                { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
            ];
            PreloadSelectedModules = (function () {
                function PreloadSelectedModules() {
                    this.preloadedModules = [];
                }
                PreloadSelectedModules.prototype.preload = function (route, load) {
                    if (route.path == 'list') {
                        this.preloadedModules.push(route.path);
                        return load();
                    }
                    else {
                        return Observable_1.Observable.of(null);
                    }
                };
                PreloadSelectedModules = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PreloadSelectedModules);
                return PreloadSelectedModules;
            }());
            exports_1("PreloadSelectedModules", PreloadSelectedModules);
            AppLazyModule = (function () {
                function AppLazyModule() {
                }
                AppLazyModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadSelectedModules }), welcome_module_1.WelcomeModule],
                        declarations: [app_1.App],
                        bootstrap: [app_1.App],
                        providers: [PreloadSelectedModules]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppLazyModule);
                return AppLazyModule;
            }());
            exports_1("AppLazyModule", AppLazyModule);
        }
    }
});
//# sourceMappingURL=module.lazy.js.map