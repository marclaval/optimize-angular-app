System.register(["@angular/core", "@angular/platform-browser", "@angular/common", "@angular/forms", "@angular/http", "@angular/router", "@ng-bootstrap/ng-bootstrap/pagination/pagination.module", "./app", "./welcome/welcome", "./list/list", "./subscribe/subscribe", "./search/search", "./welcome/welcome.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, common_1, forms_1, http_1, router_1, pagination_module_1, app_1, welcome_1, list_1, subscribe_1, search_1, welcome_module_1, appRoutes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pagination_module_1_1) {
                pagination_module_1 = pagination_module_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (subscribe_1_1) {
                subscribe_1 = subscribe_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (welcome_module_1_1) {
                welcome_module_1 = welcome_module_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: welcome_1.Welcome },
                { path: 'list', component: list_1.List },
                { path: 'subscribe', component: subscribe_1.Subscribe },
                { path: 'search', component: search_1.Search }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, common_1.CommonModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true }), forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, pagination_module_1.NgbPaginationModule, welcome_module_1.WelcomeModule],
                    declarations: [app_1.App, list_1.List, subscribe_1.Subscribe, search_1.Search],
                    providers: [pagination_module_1.NgbPaginationConfig],
                    bootstrap: [app_1.App]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=module.js.map