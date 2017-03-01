import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
export class NgbTypeaheadConfig {
    constructor() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
    }
}
NgbTypeaheadConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbTypeaheadConfig.ctorParameters = () => [];
function NgbTypeaheadConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTypeaheadConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTypeaheadConfig.ctorParameters;
    /** @type {?} */
    NgbTypeaheadConfig.prototype.editable;
    /** @type {?} */
    NgbTypeaheadConfig.prototype.focusFirst;
    /** @type {?} */
    NgbTypeaheadConfig.prototype.showHint;
}
//# sourceMappingURL=typeahead-config.js.map