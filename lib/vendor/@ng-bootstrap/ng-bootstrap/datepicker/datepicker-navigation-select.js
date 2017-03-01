import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDate } from './ngb-date';
import { toInteger } from '../util/util';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbCalendar } from './ngb-calendar';
export class NgbDatepickerNavigationSelect {
    /**
     * @param {?} i18n
     * @param {?} calendar
     */
    constructor(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new EventEmitter();
        this.months = calendar.getMonths();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    }
    /**
     * @param {?} month
     * @return {?}
     */
    changeMonth(month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); }
    /**
     * @param {?} year
     * @return {?}
     */
    changeYear(year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); }
    /**
     * @return {?}
     */
    _generateMonths() {
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            const /** @type {?} */ index = this.months.findIndex(month => month === this.minDate.month);
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            const /** @type {?} */ index = this.months.findIndex(month => month === this.maxDate.month);
            this.months = this.months.slice(0, index + 1);
        }
    }
    /**
     * @return {?}
     */
    _generateYears() {
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, (e, i) => this.minDate.year + i);
    }
}
NgbDatepickerNavigationSelect.decorators = [
    { type: Component, args: [{
                selector: 'ngb-datepicker-navigation-select',
                styles: [`
    select {
      /* to align with btn-sm */
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;      
      line-height: 1.25;
      /* to cancel the custom height set by custom-select */
      height: inherit;
      width: 50%;
    }
  `],
                template: `
    <select [disabled]="disabled" class="custom-select d-inline-block" [value]="date?.month" (change)="changeMonth($event.target.value)">
      <option *ngFor="let m of months" [value]="m">{{ i18n.getMonthShortName(m) }}</option>
    </select>` +
                    `<select [disabled]="disabled" class="custom-select d-inline-block" [value]="date?.year" (change)="changeYear($event.target.value)">
      <option *ngFor="let y of years" [value]="y">{{ y }}</option>
    </select> 
  ` // template needs to be formatted in a certain way so we don't add empty text nodes
            },] },
];
/** @nocollapse */
NgbDatepickerNavigationSelect.ctorParameters = () => [
    { type: NgbDatepickerI18n, },
    { type: NgbCalendar, },
];
NgbDatepickerNavigationSelect.propDecorators = {
    'date': [{ type: Input },],
    'disabled': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'minDate': [{ type: Input },],
    'select': [{ type: Output },],
};
function NgbDatepickerNavigationSelect_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerNavigationSelect.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerNavigationSelect.ctorParameters;
    /** @type {?} */
    NgbDatepickerNavigationSelect.propDecorators;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.months;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.years;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.date;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.disabled;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.maxDate;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.minDate;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.select;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.i18n;
    /** @type {?} */
    NgbDatepickerNavigationSelect.prototype.calendar;
}
//# sourceMappingURL=datepicker-navigation-select.js.map