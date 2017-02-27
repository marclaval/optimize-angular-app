import { NgbDate } from './ngb-date';
import { Injectable } from '@angular/core';
import { isNumber } from '../util/util';
/**
 * @param {?} jsDate
 * @return {?}
 */
function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
/**
 * @param {?} date
 * @return {?}
 */
function toJSDate(date) {
    const /** @type {?} */ jsDate = new Date(date.year, date.month - 1, date.day);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
/**
 * @abstract
 */
export class NgbCalendar {
    /**
     * @abstract
     * @return {?}
     */
    getDaysPerWeek() { }
    /**
     * @abstract
     * @return {?}
     */
    getMonths() { }
    /**
     * @abstract
     * @return {?}
     */
    getWeeksPerMonth() { }
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) { }
    /**
     * @abstract
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    getNext(date, period, number) { }
    /**
     * @abstract
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    getPrev(date, period, number) { }
    /**
     * @abstract
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    getWeekNumber(week, firstDayOfWeek) { }
    /**
     * @abstract
     * @return {?}
     */
    getToday() { }
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    isValid(date) { }
}
NgbCalendar.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbCalendar.ctorParameters = () => [];
function NgbCalendar_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCalendar.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCalendar.ctorParameters;
}
export class NgbCalendarGregorian extends NgbCalendar {
    /**
     * @return {?}
     */
    getDaysPerWeek() { return 7; }
    /**
     * @return {?}
     */
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    /**
     * @return {?}
     */
    getWeeksPerMonth() { return 6; }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    getNext(date, period = 'd', number = 1) {
        let /** @type {?} */ jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new NgbDate(date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        let /** @type {?} */ jsDate = toJSDate(date);
        let /** @type {?} */ day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const /** @type {?} */ thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        let /** @type {?} */ date = week[thursdayIndex];
        const /** @type {?} */ jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const /** @type {?} */ time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @return {?}
     */
    getToday() { return fromJSDate(new Date()); }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
            !isNaN(toJSDate(date).getTime());
    }
}
NgbCalendarGregorian.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbCalendarGregorian.ctorParameters = () => [];
function NgbCalendarGregorian_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCalendarGregorian.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCalendarGregorian.ctorParameters;
}
//# sourceMappingURL=ngb-calendar.js.map