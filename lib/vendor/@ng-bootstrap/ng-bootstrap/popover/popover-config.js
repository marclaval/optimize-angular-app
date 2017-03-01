import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
export class NgbPopoverConfig {
    constructor() {
        this.placement = 'top';
        this.triggers = 'click';
    }
}
NgbPopoverConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbPopoverConfig.ctorParameters = () => [];
function NgbPopoverConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPopoverConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPopoverConfig.ctorParameters;
    /** @type {?} */
    NgbPopoverConfig.prototype.placement;
    /** @type {?} */
    NgbPopoverConfig.prototype.triggers;
    /** @type {?} */
    NgbPopoverConfig.prototype.container;
}
//# sourceMappingURL=popover-config.js.map