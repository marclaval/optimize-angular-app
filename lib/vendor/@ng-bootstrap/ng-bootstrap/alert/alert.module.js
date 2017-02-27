import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert } from './alert';
import { NgbAlertConfig } from './alert-config';
export { NgbAlert } from './alert';
export { NgbAlertConfig } from './alert-config';
export class NgbAlertModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbAlertModule, providers: [NgbAlertConfig] }; }
}
NgbAlertModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [CommonModule], entryComponents: [NgbAlert] },] },
];
/** @nocollapse */
NgbAlertModule.ctorParameters = () => [];
function NgbAlertModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAlertModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAlertModule.ctorParameters;
}
//# sourceMappingURL=alert.module.js.map