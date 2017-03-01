import { NgModule } from '@angular/core';
import { NgbCollapse } from './collapse';
export { NgbCollapse } from './collapse';
export class NgbCollapseModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbCollapseModule, providers: [] }; }
}
NgbCollapseModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] },] },
];
/** @nocollapse */
NgbCollapseModule.ctorParameters = () => [];
function NgbCollapseModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCollapseModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCollapseModule.ctorParameters;
}
//# sourceMappingURL=collapse.module.js.map