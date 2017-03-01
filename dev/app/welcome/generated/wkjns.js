System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Wkjns;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Wkjns = (function () {
                function Wkjns() {
                    this.msg = 'nothing to say';
                }
                Wkjns.prototype.doNothing = function (evt) { };
                return Wkjns;
            }());
            Wkjns = __decorate([
                core_1.Component({
                    selector: 'd-wkjns',
                    template: "\n    <span [attr.aria-label]=\"msg\" [hidden]=\"false\">This is a dummy component for Wkjns</span>\n    <div (click)=\"doNothing($event)\"></div>\n    ",
                })
            ], Wkjns);
            exports_1("Wkjns", Wkjns);
        }
    };
});
//# sourceMappingURL=wkjns.js.map