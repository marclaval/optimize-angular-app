import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDatepickerService } from './datepicker-service';
import { NavigationEvent } from './datepicker-view-model';
import { toInteger } from '../util/util';
import { NgbDatepickerConfig } from './datepicker-config';
import { NgbDatepickerI18n } from './datepicker-i18n';
const /** @type {?} */ NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbDatepicker),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
export class NgbDatepicker {
    /**
     * @param {?} _service
     * @param {?} _calendar
     * @param {?} i18n
     * @param {?} config
     */
    constructor(_service, _calendar, i18n, config) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this.months = [];
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new EventEmitter();
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.dayTemplate = config.dayTemplate;
        this.displayMonths = config.displayMonths;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.markDisabled = config.markDisabled;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.navigation = config.navigation;
        this.outsideDays = config.outsideDays;
        this.showWeekdays = config.showWeekdays;
        this.showWeekNumbers = config.showWeekNumbers;
        this.startDate = config.startDate;
    }
    /**
     * @return {?}
     */
    getHeaderHeight() {
        const /** @type {?} */ h = this.showWeekdays ? 6.25 : 4.25;
        return this.displayMonths === 1 || this.navigation !== 'select' ? h - 2 : h;
    }
    /**
     * @return {?}
     */
    getHeaderMargin() {
        const /** @type {?} */ m = this.showWeekdays ? 2 : 0;
        return this.displayMonths !== 1 || this.navigation !== 'select' ? m + 2 : m;
    }
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     * @param {?=} date
     * @return {?}
     */
    navigateTo(date) {
        this._setViewWithinLimits(this._service.toValidDate(date));
        this._updateData();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setDates();
        this.navigateTo(this._date);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._setDates();
        this._setViewWithinLimits(this._date);
        if (changes['displayMonths']) {
            this.displayMonths = toInteger(this.displayMonths);
        }
        // we have to force rebuild all months only if any of these inputs changes
        if (['startDate', 'minDate', 'maxDate', 'navigation', 'firstDayOfWeek', 'markDisabled', 'displayMonths'].some(input => !!changes[input])) {
            this._updateData(true);
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this._setViewWithinLimits(date);
        this.onTouched();
        this.writeValue(date);
        this.onChange({ year: date.year, month: date.month, day: date.day });
        // switch current month
        if (this._date.month !== this.months[0].number && this.displayMonths === 1) {
            this._updateData();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onNavigateDateSelect(date) {
        this._setViewWithinLimits(date);
        this._updateData();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNavigateEvent(event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._setViewWithinLimits(this._calendar.getPrev(this.months[0].firstDate, 'm'));
                break;
            case NavigationEvent.NEXT:
                this._setViewWithinLimits(this._calendar.getNext(this.months[0].firstDate, 'm'));
                break;
        }
        this._updateData();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { this.model = this._service.toValidDate(value, null); }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    /**
     * @return {?}
     */
    _setDates() {
        this._maxDate = NgbDate.from(this.maxDate);
        this._minDate = NgbDate.from(this.minDate);
        this._date = this._service.toValidDate(this.startDate);
        if (!this._calendar.isValid(this._minDate)) {
            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
            this.minDate = { year: this._minDate.year, month: this._minDate.month, day: this._minDate.day };
        }
        if (!this._calendar.isValid(this._maxDate)) {
            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
            this._maxDate = this._calendar.getPrev(this._maxDate);
            this.maxDate = { year: this._maxDate.year, month: this._maxDate.month, day: this._maxDate.day };
        }
        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
            throw new Error(`'maxDate' ${this._maxDate} should be greater than 'minDate' ${this._minDate}`);
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    _setViewWithinLimits(date) {
        if (this._minDate && date.before(this._minDate)) {
            this._date = new NgbDate(this._minDate.year, this._minDate.month, 1);
        }
        else if (this._maxDate && date.after(this._maxDate)) {
            this._date = new NgbDate(this._maxDate.year, this._maxDate.month, 1);
        }
        else {
            this._date = new NgbDate(date.year, date.month, 1);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    _updateData(force = false) {
        const /** @type {?} */ newMonths = [];
        for (let /** @type {?} */ i = 0; i < this.displayMonths; i++) {
            const /** @type {?} */ newDate = this._calendar.getNext(this._date, 'm', i);
            const /** @type {?} */ index = this.months.findIndex(month => month.firstDate.equals(newDate));
            if (force || index === -1) {
                newMonths.push(this._service.generateMonthViewModel(newDate, this._minDate, this._maxDate, toInteger(this.firstDayOfWeek), this.markDisabled));
            }
            else {
                newMonths.push(this.months[index]);
            }
        }
        const /** @type {?} */ newDate = newMonths[0].firstDate;
        const /** @type {?} */ oldDate = this.months[0] ? this.months[0].firstDate : null;
        this.months = newMonths;
        // emitting navigation event if the first month changes
        if (!newDate.equals(oldDate)) {
            this.navigate.emit({
                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                next: { year: newDate.year, month: newDate.month }
            });
        }
    }
}
NgbDatepicker.decorators = [
    { type: Component, args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                host: { 'class': 'd-inline-block rounded' },
                styles: [`
    :host {
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
    .ngb-dp-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
    .ngb-dp-month {
      pointer-events: none;
    }
    ngb-datepicker-month-view {
      pointer-events: auto;
    }
    .ngb-dp-month:first-child {
      margin-left: 0 !important;
    }    
    .ngb-dp-month-name {
      font-size: larger;
      height: 2rem;
      line-height: 2rem;
    }    
  `],
                template: `
    <template #dt let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled">
       <div ngbDatepickerDayView [date]="date" [currentMonth]="currentMonth" [selected]="selected" [disabled]="disabled"></div>
    </template>
    
    <div class="ngb-dp-header bg-faded pt-1 rounded-top" [style.height.rem]="getHeaderHeight()" 
      [style.marginBottom.rem]="-getHeaderMargin()">
      <ngb-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="months[0]?.firstDate"
        [minDate]="_minDate"
        [maxDate]="_maxDate"
        [months]="months.length"
        [disabled]="disabled"
        [showWeekNumbers]="showWeekNumbers"
        [showSelect]="navigation === 'select'"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ngb-datepicker-navigation>
    </div>

    <div class="ngb-dp-months d-flex px-1 pb-1">
      <template ngFor let-month [ngForOf]="months" let-i="index">
        <div class="ngb-dp-month d-block ml-3">            
          <div *ngIf="navigation !== 'select' || displayMonths > 1" class="ngb-dp-month-name text-center">
            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}
          </div>
          <ngb-datepicker-month-view
            [month]="month"
            [selectedDate]="model"
            [dayTemplate]="dayTemplate || dt"
            [showWeekdays]="showWeekdays"
            [showWeekNumbers]="showWeekNumbers"
            [disabled]="disabled"
            [outsideDays]="displayMonths === 1 ? outsideDays : 'hidden'"
            (select)="onDateSelect($event)">
          </ngb-datepicker-month-view>
        </div>
      </template>
    </div>
  `,
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbDatepicker.ctorParameters = () => [
    { type: NgbDatepickerService, },
    { type: NgbCalendar, },
    { type: NgbDatepickerI18n, },
    { type: NgbDatepickerConfig, },
];
NgbDatepicker.propDecorators = {
    'dayTemplate': [{ type: Input },],
    'displayMonths': [{ type: Input },],
    'firstDayOfWeek': [{ type: Input },],
    'markDisabled': [{ type: Input },],
    'minDate': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'navigation': [{ type: Input },],
    'outsideDays': [{ type: Input },],
    'showWeekdays': [{ type: Input },],
    'showWeekNumbers': [{ type: Input },],
    'startDate': [{ type: Input },],
    'navigate': [{ type: Output },],
};
function NgbDatepicker_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepicker.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepicker.ctorParameters;
    /** @type {?} */
    NgbDatepicker.propDecorators;
    /** @type {?} */
    NgbDatepicker.prototype._date;
    /** @type {?} */
    NgbDatepicker.prototype._maxDate;
    /** @type {?} */
    NgbDatepicker.prototype._minDate;
    /** @type {?} */
    NgbDatepicker.prototype.model;
    /** @type {?} */
    NgbDatepicker.prototype.months;
    /**
     * Reference for the custom template for the day display
     * @type {?}
     */
    NgbDatepicker.prototype.dayTemplate;
    /**
     * Number of months to display
     * @type {?}
     */
    NgbDatepicker.prototype.displayMonths;
    /**
     * First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     * @type {?}
     */
    NgbDatepicker.prototype.firstDayOfWeek;
    /**
     * Callback to mark a given date as disabled.
     * 'Current' contains the month that will be displayed in the view
     * @type {?}
     */
    NgbDatepicker.prototype.markDisabled;
    /**
     * Min date for the navigation. If not provided will be 10 years before today or `startDate`
     * @type {?}
     */
    NgbDatepicker.prototype.minDate;
    /**
     * Max date for the navigation. If not provided will be 10 years from today or `startDate`
     * @type {?}
     */
    NgbDatepicker.prototype.maxDate;
    /**
     * Navigation type: `select` (default with select boxes for month and year), `arrows`
     * (without select boxes, only navigation arrows) or `none` (no navigation at all)
     * @type {?}
     */
    NgbDatepicker.prototype.navigation;
    /**
     * The way to display days that don't belong to current month: `visible` (default),
     * `hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)
     * @type {?}
     */
    NgbDatepicker.prototype.outsideDays;
    /**
     * Whether to display days of the week
     * @type {?}
     */
    NgbDatepicker.prototype.showWeekdays;
    /**
     * Whether to display week numbers
     * @type {?}
     */
    NgbDatepicker.prototype.showWeekNumbers;
    /**
     * Date to open calendar with.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided, calendar will open with current month.
     * Use 'navigateTo(date)' as an alternative
     * @type {?}
     */
    NgbDatepicker.prototype.startDate;
    /**
     * An event fired when navigation happens and currently displayed month changes.
     * See NgbDatepickerNavigateEvent for the payload info.
     * @type {?}
     */
    NgbDatepicker.prototype.navigate;
    /** @type {?} */
    NgbDatepicker.prototype.disabled;
    /** @type {?} */
    NgbDatepicker.prototype.onChange;
    /** @type {?} */
    NgbDatepicker.prototype.onTouched;
    /** @type {?} */
    NgbDatepicker.prototype._service;
    /** @type {?} */
    NgbDatepicker.prototype._calendar;
    /** @type {?} */
    NgbDatepicker.prototype.i18n;
}
//# sourceMappingURL=datepicker.js.map