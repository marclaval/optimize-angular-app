import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabset, NgbTab, NgbTabContent, NgbTabTitle } from './tabset';
import { NgbTabsetConfig } from './tabset-config';
export { NgbTabset, NgbTab, NgbTabContent, NgbTabTitle } from './tabset';
export { NgbTabsetConfig } from './tabset-config';
const /** @type {?} */ NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
export class NgbTabsetModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbTabsetModule, providers: [NgbTabsetConfig] }; }
}
NgbTabsetModule.decorators = [
    { type: NgModule, args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [CommonModule] },] },
];
/** @nocollapse */
NgbTabsetModule.ctorParameters = () => [];
function NgbTabsetModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTabsetModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTabsetModule.ctorParameters;
}
//# sourceMappingURL=tabset.module.js.map