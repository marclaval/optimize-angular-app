import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
export class NgbTooltipConfig {
    constructor() {
        this.placement = 'top';
        this.triggers = 'hover';
    }
}
NgbTooltipConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbTooltipConfig.ctorParameters = () => [];
function NgbTooltipConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTooltipConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTooltipConfig.ctorParameters;
    /** @type {?} */
    NgbTooltipConfig.prototype.placement;
    /** @type {?} */
    NgbTooltipConfig.prototype.triggers;
    /** @type {?} */
    NgbTooltipConfig.prototype.container;
}
//# sourceMappingURL=tooltip-config.js.map