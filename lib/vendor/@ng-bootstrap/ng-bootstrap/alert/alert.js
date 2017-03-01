import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgbAlertConfig } from './alert-config';
/**
 * Alerts can be used to provide feedback messages.
 */
export class NgbAlert {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new EventEmitter();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    /**
     * @return {?}
     */
    closeHandler() { this.close.emit(null); }
}
NgbAlert.decorators = [
    { type: Component, args: [{
                selector: 'ngb-alert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [class]="'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')" role="alert">
      <button *ngIf="dismissible" type="button" class="close" aria-label="Close" (click)="closeHandler()">
            <span aria-hidden="true">&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
    `
            },] },
];
/** @nocollapse */
NgbAlert.ctorParameters = () => [
    { type: NgbAlertConfig, },
];
NgbAlert.propDecorators = {
    'dismissible': [{ type: Input },],
    'type': [{ type: Input },],
    'close': [{ type: Output },],
};
function NgbAlert_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAlert.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAlert.ctorParameters;
    /** @type {?} */
    NgbAlert.propDecorators;
    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of an ×) will be displayed.
     * @type {?}
     */
    NgbAlert.prototype.dismissible;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {?}
     */
    NgbAlert.prototype.type;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     * @type {?}
     */
    NgbAlert.prototype.close;
}
//# sourceMappingURL=alert.js.map