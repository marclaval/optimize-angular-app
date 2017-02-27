import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, TemplateRef, ContentChild, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NgbRatingConfig } from './rating-config';
import { toString, getValueInRange } from '../util/util';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let Key = {};
Key.End = 35;
Key.Home = 36;
Key.ArrowLeft = 37;
Key.ArrowUp = 38;
Key.ArrowRight = 39;
Key.ArrowDown = 40;
Key[Key.End] = "End";
Key[Key.Home] = "Home";
Key[Key.ArrowLeft] = "ArrowLeft";
Key[Key.ArrowUp] = "ArrowUp";
Key[Key.ArrowRight] = "ArrowRight";
Key[Key.ArrowDown] = "ArrowDown";
const /** @type {?} */ NGB_RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbRating),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
export class NgbRating {
    /**
     * @param {?} config
     * @param {?} _changeDetectorRef
     */
    constructor(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.range = [];
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    /**
     * @return {?}
     */
    ariaValueText() { return `${this.rate} out of ${this.max}`; }
    /**
     * @param {?} value
     * @return {?}
     */
    enter(value) {
        if (!this.readonly) {
            this.rate = value;
        }
        this.hover.emit(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (Key[toString(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getFillValue(index) {
        const /** @type {?} */ diff = this.rate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['rate']) {
            this.update(this.rate);
            this._oldRate = this.rate;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { this.range = Array.from({ length: this.max }, (v, k) => k + 1); }
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
     * @return {?}
     */
    reset() {
        this.leave.emit(this.rate);
        this.rate = this._oldRate;
    }
    /**
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    update(value, internalChange = true) {
        if (!this.readonly) {
            const /** @type {?} */ newRate = value ? getValueInRange(value, this.max, 0) : 0;
            if (this._oldRate !== newRate) {
                this._oldRate = newRate;
                this.rate = newRate;
                this.rateChange.emit(newRate);
                if (internalChange) {
                    this.onChange(this.rate);
                }
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    }
}
NgbRating.decorators = [
    { type: Component, args: [{
                selector: 'ngb-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { '(keydown)': 'handleKeyDown($event)' },
                template: `
    <template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</template>
    <span tabindex="0" (mouseleave)="reset()" role="slider" aria-valuemin="0"
      [attr.aria-valuemax]="max" [attr.aria-valuenow]="rate" [attr.aria-valuetext]="ariaValueText()">
      <template ngFor [ngForOf]="range" let-index="index">
        <span class="sr-only">({{ index < rate ? '*' : ' ' }})</span>
        <span (mouseenter)="enter(index + 1)" (click)="update(index + 1)" 
        [style.cursor]="readonly ? 'default' : 'pointer'">
          <template [ngTemplateOutlet]="starTemplate || t" [ngOutletContext]="{fill: getFillValue(index)}"></template>
        </span>
      </template>
    </span>
  `,
                providers: [NGB_RATING_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRating.ctorParameters = () => [
    { type: NgbRatingConfig, },
    { type: ChangeDetectorRef, },
];
NgbRating.propDecorators = {
    'max': [{ type: Input },],
    'rate': [{ type: Input },],
    'readonly': [{ type: Input },],
    'starTemplate': [{ type: Input }, { type: ContentChild, args: [TemplateRef,] },],
    'hover': [{ type: Output },],
    'leave': [{ type: Output },],
    'rateChange': [{ type: Output },],
};
function NgbRating_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbRating.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbRating.ctorParameters;
    /** @type {?} */
    NgbRating.propDecorators;
    /** @type {?} */
    NgbRating.prototype._oldRate;
    /** @type {?} */
    NgbRating.prototype.range;
    /**
     * Maximal rating that can be given using this widget.
     * @type {?}
     */
    NgbRating.prototype.max;
    /**
     * Current rating. Can be a decimal value like 3.75
     * @type {?}
     */
    NgbRating.prototype.rate;
    /**
     * A flag indicating if rating can be updated.
     * @type {?}
     */
    NgbRating.prototype.readonly;
    /**
     * A template to override star display.
     * Alternatively put a <template> as the only child of <ngb-rating> element
     * @type {?}
     */
    NgbRating.prototype.starTemplate;
    /**
     * An event fired when a user is hovering over a given rating.
     * Event's payload equals to the rating being hovered over.
     * @type {?}
     */
    NgbRating.prototype.hover;
    /**
     * An event fired when a user stops hovering over a given rating.
     * Event's payload equals to the rating of the last item being hovered over.
     * @type {?}
     */
    NgbRating.prototype.leave;
    /**
     * An event fired when a user selects a new rating.
     * Event's payload equals to the newly selected rating.
     * @type {?}
     */
    NgbRating.prototype.rateChange;
    /** @type {?} */
    NgbRating.prototype.onChange;
    /** @type {?} */
    NgbRating.prototype.onTouched;
    /** @type {?} */
    NgbRating.prototype._changeDetectorRef;
}
//# sourceMappingURL=rating.js.map