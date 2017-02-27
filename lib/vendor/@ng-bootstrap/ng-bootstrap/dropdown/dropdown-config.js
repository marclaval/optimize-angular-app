import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
export class NgbDropdownConfig {
    constructor() {
        this.up = false;
        this.autoClose = true;
    }
}
NgbDropdownConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbDropdownConfig.ctorParameters = () => [];
function NgbDropdownConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDropdownConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDropdownConfig.ctorParameters;
    /** @type {?} */
    NgbDropdownConfig.prototype.up;
    /** @type {?} */
    NgbDropdownConfig.prototype.autoClose;
}
//# sourceMappingURL=dropdown-config.js.map