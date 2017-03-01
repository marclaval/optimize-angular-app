import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEvent } from './datepicker-view-model';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbCalendar } from './ngb-calendar';
export class NgbDatepickerNavigation {
    /**
     * @param {?} i18n
     * @param {?} _calendar
     */
    constructor(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = NavigationEvent;
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    doNavigate(event) { this.navigate.emit(event); }
    /**
     * @return {?}
     */
    nextDisabled() {
        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
    }
    /**
     * @return {?}
     */
    prevDisabled() {
        const /** @type {?} */ prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) { this.select.emit(date); }
}
NgbDatepickerNavigation.decorators = [
    { type: Component, args: [{
                selector: 'ngb-datepicker-navigation',
                host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
                styles: [`
    :host {
      height: 2rem;
      line-height: 1.85rem;
    }
    :host.collapsed {
      margin-bottom: -2rem;        
    }
    .ngb-dp-navigation-chevron::before {
      border-style: solid;
      border-width: 0.2em 0.2em 0 0;
      content: '';
      display: inline-block;
      height: 0.75em;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      width: 0.75em;
      margin: 0 0 0 0.5rem;
    }    
    .ngb-dp-navigation-chevron.right:before {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      margin: 0 0.5rem 0 0;
    }
    .btn-link {
      cursor: pointer;
      outline: 0;
    }
    .btn-link[disabled] {
      cursor: not-allowed;
      opacity: .65;
    }    
  `],
                template: `
    <button type="button" class="btn-link" (click)="!!doNavigate(navigation.PREV)" [disabled]="prevDisabled()">
      <span class="ngb-dp-navigation-chevron"></span>    
    </button>
    
    <ngb-datepicker-navigation-select *ngIf="showSelect" class="d-block" [style.width.rem]="months * 9"
      [date]="date"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [disabled] = "disabled"
      (select)="selectDate($event)">
    </ngb-datepicker-navigation-select>
    
    <button type="button" class="btn-link" (click)="!!doNavigate(navigation.NEXT)" [disabled]="nextDisabled()">
      <span class="ngb-dp-navigation-chevron right"></span>
    </button>
  `
            },] },
];
/** @nocollapse */
NgbDatepickerNavigation.ctorParameters = () => [
    { type: NgbDatepickerI18n, },
    { type: NgbCalendar, },
];
NgbDatepickerNavigation.propDecorators = {
    'date': [{ type: Input },],
    'disabled': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'minDate': [{ type: Input },],
    'months': [{ type: Input },],
    'showSelect': [{ type: Input },],
    'showWeekNumbers': [{ type: Input },],
    'navigate': [{ type: Output },],
    'select': [{ type: Output },],
};
function NgbDatepickerNavigation_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerNavigation.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerNavigation.ctorParameters;
    /** @type {?} */
    NgbDatepickerNavigation.propDecorators;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.navigation;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.date;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.disabled;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.maxDate;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.minDate;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.months;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.showSelect;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.showWeekNumbers;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.navigate;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.select;
    /** @type {?} */
    NgbDatepickerNavigation.prototype.i18n;
    /** @type {?} */
    NgbDatepickerNavigation.prototype._calendar;
}
//# sourceMappingURL=datepicker-navigation.js.map