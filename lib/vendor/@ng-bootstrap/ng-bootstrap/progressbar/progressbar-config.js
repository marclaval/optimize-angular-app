import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
export class NgbProgressbarConfig {
    constructor() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
}
NgbProgressbarConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbProgressbarConfig.ctorParameters = () => [];
function NgbProgressbarConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbProgressbarConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbProgressbarConfig.ctorParameters;
    /** @type {?} */
    NgbProgressbarConfig.prototype.max;
    /** @type {?} */
    NgbProgressbarConfig.prototype.animated;
    /** @type {?} */
    NgbProgressbarConfig.prototype.striped;
    /** @type {?} */
    NgbProgressbarConfig.prototype.type;
    /** @type {?} */
    NgbProgressbarConfig.prototype.showValue;
}
//# sourceMappingURL=progressbar-config.js.map