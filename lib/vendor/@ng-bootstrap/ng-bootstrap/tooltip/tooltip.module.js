import { NgModule } from '@angular/core';
import { NgbTooltip, NgbTooltipWindow } from './tooltip';
import { NgbTooltipConfig } from './tooltip-config';
export { NgbTooltipConfig } from './tooltip-config';
export { NgbTooltip } from './tooltip';
export class NgbTooltipModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbTooltipModule, providers: [NgbTooltipConfig] }; }
}
NgbTooltipModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] },] },
];
/** @nocollapse */
NgbTooltipModule.ctorParameters = () => [];
function NgbTooltipModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTooltipModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTooltipModule.ctorParameters;
}
//# sourceMappingURL=tooltip.module.js.map