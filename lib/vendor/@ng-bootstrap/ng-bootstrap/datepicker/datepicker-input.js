import { Directive, Input, ElementRef, ViewContainerRef, Renderer, ComponentFactoryResolver, NgZone, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDate } from './ngb-date';
import { NgbDatepicker } from './datepicker';
import { NgbDateParserFormatter } from './ngb-date-parser-formatter';
import { positionElements } from '../util/positioning';
import { NgbCalendar } from './ngb-calendar';
import { NgbDatepickerService } from './datepicker-service';
const /** @type {?} */ NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbInputDatepicker),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
export class NgbInputDatepicker {
    /**
     * @param {?} _parserFormatter
     * @param {?} _elRef
     * @param {?} _vcRef
     * @param {?} _renderer
     * @param {?} _cfr
     * @param {?} ngZone
     * @param {?} _service
     * @param {?} _calendar
     */
    constructor(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar) {
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._cRef = null;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new EventEmitter();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._cRef) {
                positionElements(this._elRef.nativeElement, this._cRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        const /** @type {?} */ ngbDate = value ? new NgbDate(value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(isDisabled);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    manualDateChange(value) {
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : null);
        this._writeModelValue(this._model);
    }
    /**
     * @return {?}
     */
    isOpen() { return !!this._cRef; }
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     * @return {?}
     */
    open() {
        if (!this.isOpen()) {
            const /** @type {?} */ cf = this._cfr.resolveComponentFactory(NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._cRef.instance.writeValue(this._model);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            // date selection event handling
            this._cRef.instance.registerOnChange((selectedDate) => {
                this.writeValue(selectedDate);
                this._onChange(selectedDate);
                this.close();
            });
        }
    }
    /**
     * Closes the datepicker popup.
     * @return {?}
     */
    close() {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    }
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     * @return {?}
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
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
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    }
    /**
     * @return {?}
     */
    onBlur() { this._onTouched(); }
    /**
     * @param {?} datepickerInstance
     * @return {?}
     */
    _applyDatepickerInputs(datepickerInstance) {
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach((optionName) => {
            if (this[optionName] !== undefined) {
                datepickerInstance[optionName] = this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    }
    /**
     * @param {?} nativeElement
     * @return {?}
     */
    _applyPopupStyling(nativeElement) {
        this._renderer.setElementClass(nativeElement, 'dropdown-menu', true);
        this._renderer.setElementStyle(nativeElement, 'padding', '0');
    }
    /**
     * @param {?} datepickerInstance
     * @return {?}
     */
    _subscribeForDatepickerOutputs(datepickerInstance) {
        datepickerInstance.navigate.subscribe(date => this.navigate.emit(date));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    _writeModelValue(model) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(model);
            this._onTouched();
        }
    }
}
NgbInputDatepicker.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbInputDatepicker.ctorParameters = () => [
    { type: NgbDateParserFormatter, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer, },
    { type: ComponentFactoryResolver, },
    { type: NgZone, },
    { type: NgbDatepickerService, },
    { type: NgbCalendar, },
];
NgbInputDatepicker.propDecorators = {
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
function NgbInputDatepicker_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbInputDatepicker.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbInputDatepicker.ctorParameters;
    /** @type {?} */
    NgbInputDatepicker.propDecorators;
    /** @type {?} */
    NgbInputDatepicker.prototype._cRef;
    /** @type {?} */
    NgbInputDatepicker.prototype._model;
    /** @type {?} */
    NgbInputDatepicker.prototype._zoneSubscription;
    /**
     * Reference for the custom template for the day display
     * @type {?}
     */
    NgbInputDatepicker.prototype.dayTemplate;
    /**
     * Number of months to display
     * @type {?}
     */
    NgbInputDatepicker.prototype.displayMonths;
    /**
     * First day of the week. With default calendar we use ISO 8601: 1=Mon ... 7=Sun
     * @type {?}
     */
    NgbInputDatepicker.prototype.firstDayOfWeek;
    /**
     * Callback to mark a given date as disabled.
     * 'Current' contains the month that will be displayed in the view
     * @type {?}
     */
    NgbInputDatepicker.prototype.markDisabled;
    /**
     * Min date for the navigation. If not provided will be 10 years before today or `startDate`
     * @type {?}
     */
    NgbInputDatepicker.prototype.minDate;
    /**
     * Max date for the navigation. If not provided will be 10 years from today or `startDate`
     * @type {?}
     */
    NgbInputDatepicker.prototype.maxDate;
    /**
     * Navigation type: `select` (default with select boxes for month and year), `arrows`
     * (without select boxes, only navigation arrows) or `none` (no navigation at all)
     * @type {?}
     */
    NgbInputDatepicker.prototype.navigation;
    /**
     * The way to display days that don't belong to current month: `visible` (default),
     * `hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)
     * @type {?}
     */
    NgbInputDatepicker.prototype.outsideDays;
    /**
     * Whether to display days of the week
     * @type {?}
     */
    NgbInputDatepicker.prototype.showWeekdays;
    /**
     * Whether to display week numbers
     * @type {?}
     */
    NgbInputDatepicker.prototype.showWeekNumbers;
    /**
     * Date to open calendar with.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided, calendar will open with current month.
     * Use 'navigateTo(date)' as an alternative
     * @type {?}
     */
    NgbInputDatepicker.prototype.startDate;
    /**
     * An event fired when navigation happens and currently displayed month changes.
     * See NgbDatepickerNavigateEvent for the payload info.
     * @type {?}
     */
    NgbInputDatepicker.prototype.navigate;
    /** @type {?} */
    NgbInputDatepicker.prototype._onChange;
    /** @type {?} */
    NgbInputDatepicker.prototype._onTouched;
    /** @type {?} */
    NgbInputDatepicker.prototype._parserFormatter;
    /** @type {?} */
    NgbInputDatepicker.prototype._elRef;
    /** @type {?} */
    NgbInputDatepicker.prototype._vcRef;
    /** @type {?} */
    NgbInputDatepicker.prototype._renderer;
    /** @type {?} */
    NgbInputDatepicker.prototype._cfr;
    /** @type {?} */
    NgbInputDatepicker.prototype._service;
    /** @type {?} */
    NgbInputDatepicker.prototype._calendar;
}
//# sourceMappingURL=datepicker-input.js.map