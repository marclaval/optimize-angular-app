System.register(['@angular/core', '@angular/router', '@ng-bootstrap/ng-bootstrap/pagination/pagination.module', './list'], function(exports_1, context_1) {
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
    var core_1, router_1, pagination_module_1, list_1;
    var routes, ListModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pagination_module_1_1) {
                pagination_module_1 = pagination_module_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: list_1.List },
            ];
            ListModule = (function () {
                function ListModule() {
                }
                ListModule = __decorate([
                    core_1.NgModule({
                        imports: [pagination_module_1.NgbPaginationModule, router_1.RouterModule.forChild(routes)],
                        declarations: [list_1.List],
                        providers: [pagination_module_1.NgbPaginationConfig]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListModule);
                return ListModule;
            }());
            exports_1("ListModule", ListModule);
        }
    }
});
//# sourceMappingURL=list.module.js.map