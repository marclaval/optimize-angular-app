System.register(["@angular/core", "@angular/platform-browser", "@angular/router", "rxjs/observable/of", "./app", "./welcome/welcome.module", "./welcome/welcome"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, router_1, of_1, app_1, welcome_module_1, welcome_1, appRoutes, PreloadSelectedModules, AppLazyModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (of_1_1) {
                of_1 = of_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (welcome_module_1_1) {
                welcome_module_1 = welcome_module_1_1;
            },
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            }
        ],
        execute: function () {
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
                        return of_1.of.call(null);
                    }
                };
                return PreloadSelectedModules;
            }());
            PreloadSelectedModules = __decorate([
                core_1.Injectable()
            ], PreloadSelectedModules);
            exports_1("PreloadSelectedModules", PreloadSelectedModules);
            AppLazyModule = (function () {
                function AppLazyModule() {
                }
                return AppLazyModule;
            }());
            AppLazyModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadSelectedModules }), welcome_module_1.WelcomeModule],
                    declarations: [app_1.App],
                    bootstrap: [app_1.App],
                    providers: [PreloadSelectedModules]
                })
            ], AppLazyModule);
            exports_1("AppLazyModule", AppLazyModule);
        }
    };
});
//# sourceMappingURL=module.lazy.js.map