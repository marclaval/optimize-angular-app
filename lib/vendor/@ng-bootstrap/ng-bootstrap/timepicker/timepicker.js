import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNumber, padNumber, toInteger } from '../util/util';
import { NgbTime } from './ngb-time';
import { NgbTimepickerConfig } from './timepicker-config';
const /** @type {?} */ NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbTimepicker),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
export class NgbTimepicker {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.model = value ? new NgbTime(value.hour, value.minute, value.second) : new NgbTime();
        if (!this.seconds && (!value || !isNumber(value.second))) {
            this.model.second = 0;
        }
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
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    /**
     * @param {?} step
     * @return {?}
     */
    changeHour(step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    changeMinute(step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    changeSecond(step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    updateHour(newVal) {
        this.model.updateHour(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    updateMinute(newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    updateSecond(newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (this.meridian) {
            this.changeHour(12);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatHour(value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatMinSec(value) { return padNumber(value); }
    /**
     * @return {?}
     */
    setFormControlSize() { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; }
    /**
     * @return {?}
     */
    setMeridanSize() { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    }
    /**
     * @param {?=} touched
     * @return {?}
     */
    propagateModelChange(touched = true) {
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    }
}
NgbTimepicker.decorators = [
    { type: Component, args: [{
                selector: 'ngb-timepicker',
                styles: [`
    .chevron::before {
      border-style: solid;
      border-width: 0.29em 0.29em 0 0;
      content: '';
      display: inline-block;
      height: 0.69em;
      left: 0.05em;
      position: relative;
      top: 0.15em;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      vertical-align: middle;
      width: 0.71em;
    }

    .chevron.bottom:before {
      top: -.3em;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    .btn-link {
      outline: 0;
    }

    .btn-link.disabled {
      cursor: not-allowed;
      opacity: .65;
    }

    input {
      text-align: center;
    }
  `],
                template: `
     <fieldset [disabled]="disabled" [class.disabled]="disabled">
      <table>
        <tr *ngIf="spinners">
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeHour(hourStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron"></span>
            </button>
          </td>
          <td>&nbsp;</td>
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeMinute(minuteStep)"
              [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron"></span>
            </button>
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;</td>
            <td class="text-center">
              <button type="button" class="btn-link" (click)="changeSecond(secondStep)"
                [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron"></span>
              </button>
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </template>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="HH"
              [value]="formatHour(model?.hour)" (change)="updateHour($event.target.value)"
              [readonly]="readonlyInputs" [disabled]="disabled">
          </td>
          <td>&nbsp;:&nbsp;</td>
          <td>
            <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="MM"
              [value]="formatMinSec(model?.minute)" (change)="updateMinute($event.target.value)"
              [readonly]="readonlyInputs" [disabled]="disabled">
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;:&nbsp;</td>
            <td>
              <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="SS"
                [value]="formatMinSec(model?.second)" (change)="updateSecond($event.target.value)"
                [readonly]="readonlyInputs" [disabled]="disabled">
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;&nbsp;</td>
            <td>
              <button type="button" class="btn btn-outline-primary" [ngClass]="setMeridanSize()"
                (click)="toggleMeridian()">{{model.hour >= 12 ? 'PM' : 'AM'}}</button>
            </td>
          </template>
        </tr>
        <tr *ngIf="spinners">
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeHour(-hourStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron bottom"></span>
            </button>
          </td>
          <td>&nbsp;</td>
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeMinute(-minuteStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron bottom"></span>
            </button>
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;</td>
            <td class="text-center">
              <button type="button" class="btn-link" (click)="changeSecond(-secondStep)"
                [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron bottom"></span>
              </button>
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </template>
        </tr>
      </table>
    </fieldset>
  `,
                providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTimepicker.ctorParameters = () => [
    { type: NgbTimepickerConfig, },
];
NgbTimepicker.propDecorators = {
    'meridian': [{ type: Input },],
    'spinners': [{ type: Input },],
    'seconds': [{ type: Input },],
    'hourStep': [{ type: Input },],
    'minuteStep': [{ type: Input },],
    'secondStep': [{ type: Input },],
    'readonlyInputs': [{ type: Input },],
    'size': [{ type: Input },],
};
function NgbTimepicker_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTimepicker.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTimepicker.ctorParameters;
    /** @type {?} */
    NgbTimepicker.propDecorators;
    /** @type {?} */
    NgbTimepicker.prototype.disabled;
    /** @type {?} */
    NgbTimepicker.prototype.model;
    /**
     * Whether to display 12H or 24H mode.
     * @type {?}
     */
    NgbTimepicker.prototype.meridian;
    /**
     * Whether to display the spinners above and below the inputs.
     * @type {?}
     */
    NgbTimepicker.prototype.spinners;
    /**
     * Whether to display seconds input.
     * @type {?}
     */
    NgbTimepicker.prototype.seconds;
    /**
     * Number of hours to increase or decrease when using a button.
     * @type {?}
     */
    NgbTimepicker.prototype.hourStep;
    /**
     * Number of minutes to increase or decrease when using a button.
     * @type {?}
     */
    NgbTimepicker.prototype.minuteStep;
    /**
     * Number of seconds to increase or decrease when using a button.
     * @type {?}
     */
    NgbTimepicker.prototype.secondStep;
    /**
     * To make timepicker readonly
     * @type {?}
     */
    NgbTimepicker.prototype.readonlyInputs;
    /**
     * To set the size of the inputs and button
     * @type {?}
     */
    NgbTimepicker.prototype.size;
    /** @type {?} */
    NgbTimepicker.prototype.onChange;
    /** @type {?} */
    NgbTimepicker.prototype.onTouched;
}
//# sourceMappingURL=timepicker.js.map