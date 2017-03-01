import { Component, Input } from '@angular/core';
export class NgbDatepickerDayView {
    /**
     * @return {?}
     */
    isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
NgbDatepickerDayView.decorators = [
    { type: Component, args: [{
                selector: '[ngbDatepickerDayView]',
                styles: [`
    :host {
      text-align: center;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;      
      border-radius: 0.25rem;
    }
    :host.outside {
      opacity: 0.5;
    }
  `],
                host: {
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.btn-secondary]': '!disabled'
                },
                template: `{{ date.day }}`
            },] },
];
/** @nocollapse */
NgbDatepickerDayView.ctorParameters = () => [];
NgbDatepickerDayView.propDecorators = {
    'currentMonth': [{ type: Input },],
    'date': [{ type: Input },],
    'disabled': [{ type: Input },],
    'selected': [{ type: Input },],
};
function NgbDatepickerDayView_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerDayView.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerDayView.ctorParameters;
    /** @type {?} */
    NgbDatepickerDayView.propDecorators;
    /** @type {?} */
    NgbDatepickerDayView.prototype.currentMonth;
    /** @type {?} */
    NgbDatepickerDayView.prototype.date;
    /** @type {?} */
    NgbDatepickerDayView.prototype.disabled;
    /** @type {?} */
    NgbDatepickerDayView.prototype.selected;
}
//# sourceMappingURL=datepicker-day-view.js.map