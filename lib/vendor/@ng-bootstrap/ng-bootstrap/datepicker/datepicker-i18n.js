import { Injectable } from '@angular/core';
const /** @type {?} */ WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const /** @type {?} */ MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const /** @type {?} */ MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 * @abstract
 */
export class NgbDatepickerI18n {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     * @abstract
     * @param {?} weekday
     * @return {?}
     */
    getWeekdayShortName(weekday) { }
    /**
     * Returns the short month name to display in the date picker navigation.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec
     * @abstract
     * @param {?} month
     * @return {?}
     */
    getMonthShortName(month) { }
    /**
     * Returns the full month name to display in the date picker navigation.
     * With default calendar we use ISO 8601: 'month' is 1=January ... 12=December
     * @abstract
     * @param {?} month
     * @return {?}
     */
    getMonthFullName(month) { }
}
NgbDatepickerI18n.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbDatepickerI18n.ctorParameters = () => [];
function NgbDatepickerI18n_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerI18n.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerI18n.ctorParameters;
}
export class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    /**
     * @param {?} weekday
     * @return {?}
     */
    getWeekdayShortName(weekday) { return WEEKDAYS_SHORT[weekday - 1]; }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonthShortName(month) { return MONTHS_SHORT[month - 1]; }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonthFullName(month) { return MONTHS_FULL[month - 1]; }
}
NgbDatepickerI18nDefault.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = () => [];
function NgbDatepickerI18nDefault_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerI18nDefault.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerI18nDefault.ctorParameters;
}
//# sourceMappingURL=datepicker-i18n.js.map