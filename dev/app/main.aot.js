System.register(["@angular/platform-browser", "@angular/core", "./module.ngfactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, core_1, module_ngfactory_1;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (module_ngfactory_1_1) {
                module_ngfactory_1 = module_ngfactory_1_1;
            }
        ],
        execute: function () {
            core_1.enableProdMode();
            platform_browser_1.platformBrowser().bootstrapModuleFactory(module_ngfactory_1.AppModuleNgFactory);
        }
    };
});
//# sourceMappingURL=main.aot.js.map