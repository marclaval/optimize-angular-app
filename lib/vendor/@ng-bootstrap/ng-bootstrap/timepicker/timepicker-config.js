import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
export class NgbTimepickerConfig {
    constructor() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
}
NgbTimepickerConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbTimepickerConfig.ctorParameters = () => [];
function NgbTimepickerConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTimepickerConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTimepickerConfig.ctorParameters;
    /** @type {?} */
    NgbTimepickerConfig.prototype.meridian;
    /** @type {?} */
    NgbTimepickerConfig.prototype.spinners;
    /** @type {?} */
    NgbTimepickerConfig.prototype.seconds;
    /** @type {?} */
    NgbTimepickerConfig.prototype.hourStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.minuteStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.secondStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.disabled;
    /** @type {?} */
    NgbTimepickerConfig.prototype.readonlyInputs;
    /** @type {?} */
    NgbTimepickerConfig.prototype.size;
}
//# sourceMappingURL=timepicker-config.js.map