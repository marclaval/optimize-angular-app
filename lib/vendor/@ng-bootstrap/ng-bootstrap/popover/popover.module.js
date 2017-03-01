import { NgModule } from '@angular/core';
import { NgbPopover, NgbPopoverWindow } from './popover';
import { NgbPopoverConfig } from './popover-config';
export { NgbPopover } from './popover';
export { NgbPopoverConfig } from './popover-config';
export class NgbPopoverModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbPopoverModule, providers: [NgbPopoverConfig] }; }
}
NgbPopoverModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbPopover, NgbPopoverWindow], exports: [NgbPopover], entryComponents: [NgbPopoverWindow] },] },
];
/** @nocollapse */
NgbPopoverModule.ctorParameters = () => [];
function NgbPopoverModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPopoverModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPopoverModule.ctorParameters;
}
//# sourceMappingURL=popover.module.js.map