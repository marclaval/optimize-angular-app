import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { Injectable } from '@angular/core';
export class NgbDatepickerService {
    /**
     * @param {?} _calendar
     */
    constructor(_calendar) {
        this._calendar = _calendar;
    }
    /**
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @param {?} firstDayOfWeek
     * @param {?} markDisabled
     * @return {?}
     */
    generateMonthViewModel(date, minDate, maxDate, firstDayOfWeek, markDisabled) {
        const /** @type {?} */ month = { firstDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
        date = this._getFirstViewDate(date, firstDayOfWeek);
        // month has weeks
        for (let /** @type {?} */ w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
            const /** @type {?} */ days = [];
            // week has days
            for (let /** @type {?} */ d = 0; d < this._calendar.getDaysPerWeek(); d++) {
                if (w === 0) {
                    month.weekdays.push(this._calendar.getWeekday(date));
                }
                const /** @type {?} */ newDate = new NgbDate(date.year, date.month, date.day);
                let /** @type {?} */ disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
                if (!disabled && markDisabled) {
                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
                }
                // saving first date of the month
                if (month.firstDate === null && date.month === month.number) {
                    month.firstDate = newDate;
                }
                days.push({ date: newDate, disabled: disabled });
                date = this._calendar.getNext(date);
            }
            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(day => NgbDate.from(day.date)), firstDayOfWeek), days: days });
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */
    toValidDate(date, defaultValue) {
        const /** @type {?} */ ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    }
    /**
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    _getFirstViewDate(date, firstDayOfWeek) {
        const /** @type {?} */ currentMonth = date.month;
        let /** @type {?} */ today = new NgbDate(date.year, date.month, date.day);
        let /** @type {?} */ yesterday = this._calendar.getPrev(today);
        const /** @type {?} */ firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = () => { return today.month !== yesterday.month && firstDayOfWeek === this._calendar.getWeekday(today); };
        const /** @type {?} */ reachedTheFirstDayOfTheLastWeekOfPreviousMonth = () => { return today.month !== currentMonth && firstDayOfWeek === this._calendar.getWeekday(today); };
        // going back in time
        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
            today = new NgbDate(yesterday.year, yesterday.month, yesterday.day);
            yesterday = this._calendar.getPrev(yesterday);
        }
        return today;
    }
}
NgbDatepickerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbDatepickerService.ctorParameters = () => [
    { type: NgbCalendar, },
];
function NgbDatepickerService_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerService.ctorParameters;
    /** @type {?} */
    NgbDatepickerService.prototype._calendar;
}
//# sourceMappingURL=datepicker-service.js.map