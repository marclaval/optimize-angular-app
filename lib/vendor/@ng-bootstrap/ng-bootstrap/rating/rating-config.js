import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
export class NgbRatingConfig {
    constructor() {
        this.max = 10;
        this.readonly = false;
    }
}
NgbRatingConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbRatingConfig.ctorParameters = () => [];
function NgbRatingConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbRatingConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbRatingConfig.ctorParameters;
    /** @type {?} */
    NgbRatingConfig.prototype.max;
    /** @type {?} */
    NgbRatingConfig.prototype.readonly;
}
//# sourceMappingURL=rating-config.js.map