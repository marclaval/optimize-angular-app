System.register(["@angular/common", "@angular/core", "@angular/http", "@angular/router", "./search"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var common_1, core_1, http_1, router_1, search_1, routes, SearchModule;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: search_1.Search },
            ];
            SearchModule = (function () {
                function SearchModule() {
                }
                return SearchModule;
            }());
            SearchModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, http_1.HttpModule, http_1.JsonpModule, router_1.RouterModule.forChild(routes)],
                    declarations: [search_1.Search]
                })
            ], SearchModule);
            exports_1("SearchModule", SearchModule);
        }
    };
});
//# sourceMappingURL=search.module.js.map