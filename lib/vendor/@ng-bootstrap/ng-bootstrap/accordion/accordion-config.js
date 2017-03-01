import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
export class NgbAccordionConfig {
    constructor() {
        this.closeOthers = false;
    }
}
NgbAccordionConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbAccordionConfig.ctorParameters = () => [];
function NgbAccordionConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAccordionConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAccordionConfig.ctorParameters;
    /** @type {?} */
    NgbAccordionConfig.prototype.closeOthers;
    /** @type {?} */
    NgbAccordionConfig.prototype.type;
}
//# sourceMappingURL=accordion-config.js.map