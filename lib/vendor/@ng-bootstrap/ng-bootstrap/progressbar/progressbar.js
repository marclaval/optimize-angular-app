import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getValueInRange } from '../util/util';
import { NgbProgressbarConfig } from './progressbar-config';
/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
export class NgbProgressbar {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
    }
    /**
     * @return {?}
     */
    getValue() { return getValueInRange(this.value, this.max); }
    /**
     * @return {?}
     */
    getPercentValue() { return 100 * this.getValue() / this.max; }
}
NgbProgressbar.decorators = [
    { type: Component, args: [{
                selector: 'ngb-progressbar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="progress">
      <div class="progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?
    ' progress-bar-striped' : ''}}" role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
        <span *ngIf="showValue">{{getPercentValue()}}%</span><ng-content></ng-content>
      </div>
    </div>
  `
            },] },
];
/** @nocollapse */
NgbProgressbar.ctorParameters = () => [
    { type: NgbProgressbarConfig, },
];
NgbProgressbar.propDecorators = {
    'max': [{ type: Input },],
    'animated': [{ type: Input },],
    'striped': [{ type: Input },],
    'showValue': [{ type: Input },],
    'type': [{ type: Input },],
    'value': [{ type: Input },],
};
function NgbProgressbar_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbProgressbar.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbProgressbar.ctorParameters;
    /** @type {?} */
    NgbProgressbar.propDecorators;
    /**
     * Maximal value to be displayed in the progressbar.
     * @type {?}
     */
    NgbProgressbar.prototype.max;
    /**
     * A flag indicating if the stripes of the progress bar should be animated. Takes effect only for browsers
     * supporting CSS3 animations, and if striped is true.
     * @type {?}
     */
    NgbProgressbar.prototype.animated;
    /**
     * A flag indicating if a progress bar should be displayed as striped.
     * @type {?}
     */
    NgbProgressbar.prototype.striped;
    /**
     * A flag indicating if the current percentage value should be shown.
     * @type {?}
     */
    NgbProgressbar.prototype.showValue;
    /**
     * Type of progress bar, can be one of "success", "info", "warning" or "danger".
     * @type {?}
     */
    NgbProgressbar.prototype.type;
    /**
     * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
     * @type {?}
     */
    NgbProgressbar.prototype.value;
}
//# sourceMappingURL=progressbar.js.map