import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbar } from './progressbar';
import { NgbProgressbarConfig } from './progressbar-config';
export { NgbProgressbar } from './progressbar';
export { NgbProgressbarConfig } from './progressbar-config';
export class NgbProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbProgressbarModule, providers: [NgbProgressbarConfig] }; }
}
NgbProgressbarModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [CommonModule] },] },
];
/** @nocollapse */
NgbProgressbarModule.ctorParameters = () => [];
function NgbProgressbarModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbProgressbarModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbProgressbarModule.ctorParameters;
}
//# sourceMappingURL=progressbar.module.js.map