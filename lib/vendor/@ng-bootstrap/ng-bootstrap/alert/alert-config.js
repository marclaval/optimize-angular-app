import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
export class NgbAlertConfig {
    constructor() {
        this.dismissible = true;
        this.type = 'warning';
    }
}
NgbAlertConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbAlertConfig.ctorParameters = () => [];
function NgbAlertConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAlertConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAlertConfig.ctorParameters;
    /** @type {?} */
    NgbAlertConfig.prototype.dismissible;
    /** @type {?} */
    NgbAlertConfig.prototype.type;
}
//# sourceMappingURL=alert-config.js.map