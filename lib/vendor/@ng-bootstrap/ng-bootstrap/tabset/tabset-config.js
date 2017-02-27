import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
export class NgbTabsetConfig {
    constructor() {
        this.justify = 'start';
        this.type = 'tabs';
    }
}
NgbTabsetConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbTabsetConfig.ctorParameters = () => [];
function NgbTabsetConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTabsetConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTabsetConfig.ctorParameters;
    /** @type {?} */
    NgbTabsetConfig.prototype.justify;
    /** @type {?} */
    NgbTabsetConfig.prototype.type;
}
//# sourceMappingURL=tabset-config.js.map