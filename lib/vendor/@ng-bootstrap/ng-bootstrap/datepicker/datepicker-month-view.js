import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDate } from './ngb-date';
import { NgbDatepickerI18n } from './datepicker-i18n';
export class NgbDatepickerMonthView {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.select = new EventEmitter();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    doSelect(day) {
        if (!this.isDisabled(day) && !this.isCollapsed(day) && !this.isHidden(day)) {
            this.select.emit(NgbDate.from(day.date));
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isDisabled(day) { return this.disabled || day.disabled; }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) { return this.selectedDate && this.selectedDate.equals(date); }
    /**
     * @param {?} day
     * @return {?}
     */
    isCollapsed(day) { return this.outsideDays === 'collapsed' && this.month.number !== day.date.month; }
    /**
     * @param {?} day
     * @return {?}
     */
    isHidden(day) { return this.outsideDays === 'hidden' && this.month.number !== day.date.month; }
}
NgbDatepickerMonthView.decorators = [
    { type: Component, args: [{
                selector: 'ngb-datepicker-month-view',
                host: { 'class': 'd-block' },
                styles: [`
    .ngb-dp-weekday, .ngb-dp-week-number {
      line-height: 2rem;
    }
    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {
      width: 2rem;
      height: 2rem;      
    }
    .ngb-dp-day {
      cursor: pointer;
    }
    .ngb-dp-day.disabled, .ngb-dp-day.hidden, .ngb-dp-day.collapsed {
      cursor: default;
    }
    :host/deep/.ngb-dp-day.collapsed > * {
      display: none;
    }
    :host/deep/.ngb-dp-day.hidden > * {
      visibility: hidden;
    }
  `],
                template: `
    <div *ngIf="showWeekdays" class="ngb-dp-week d-flex">
      <div *ngIf="showWeekNumbers" class="ngb-dp-weekday"></div>
      <div *ngFor="let w of month.weekdays" class="ngb-dp-weekday small text-center text-info font-italic">
        {{ i18n.getWeekdayShortName(w) }}
      </div>
    </div>
    <div *ngFor="let week of month.weeks" class="ngb-dp-week d-flex">
      <div *ngIf="showWeekNumbers" class="ngb-dp-week-number small text-center font-italic text-muted">{{ week.number }}</div>
      <div *ngFor="let day of week.days" (click)="doSelect(day)" class="ngb-dp-day" [class.disabled]="isDisabled(day)"
      [class.collapsed]="isCollapsed(day)" [class.hidden]="isHidden(day)">
          <template [ngTemplateOutlet]="dayTemplate"
          [ngOutletContext]="{date: {year: day.date.year, month: day.date.month, day: day.date.day},
            currentMonth: month.number,
            disabled: isDisabled(day),
            selected: isSelected(day.date)}">
          </template>
      </div>
    </div>
  `
            },] },
];
/** @nocollapse */
NgbDatepickerMonthView.ctorParameters = () => [
    { type: NgbDatepickerI18n, },
];
NgbDatepickerMonthView.propDecorators = {
    'dayTemplate': [{ type: Input },],
    'disabled': [{ type: Input },],
    'month': [{ type: Input },],
    'outsideDays': [{ type: Input },],
    'selectedDate': [{ type: Input },],
    'showWeekdays': [{ type: Input },],
    'showWeekNumbers': [{ type: Input },],
    'select': [{ type: Output },],
};
function NgbDatepickerMonthView_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerMonthView.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerMonthView.ctorParameters;
    /** @type {?} */
    NgbDatepickerMonthView.propDecorators;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.dayTemplate;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.disabled;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.month;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.outsideDays;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.selectedDate;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.showWeekdays;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.showWeekNumbers;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.select;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.i18n;
}
//# sourceMappingURL=datepicker-month-view.js.map