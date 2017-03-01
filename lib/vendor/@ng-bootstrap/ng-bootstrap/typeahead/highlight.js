import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { regExpEscape, toString } from '../util/util';
export class NgbHighlight {
    constructor() {
        this.highlightClass = 'ngb-highlight';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ resultStr = toString(this.result);
        const /** @type {?} */ resultLC = resultStr.toLowerCase();
        const /** @type {?} */ termLC = toString(this.term).toLowerCase();
        let /** @type {?} */ currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp(`(${regExpEscape(termLC)})`)).map((part) => {
                const /** @type {?} */ originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    }
}
NgbHighlight.decorators = [
    { type: Component, args: [{
                selector: 'ngb-highlight',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `<template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
                    `<span *ngIf="isOdd" class="{{highlightClass}}">{{part}}</span><template [ngIf]="!isOdd">{{part}}</template>` +
                    `</template>`,
                styles: [`
    .ngb-highlight {
      font-weight: bold;
    }
  `]
            },] },
];
/** @nocollapse */
NgbHighlight.ctorParameters = () => [];
NgbHighlight.propDecorators = {
    'highlightClass': [{ type: Input },],
    'result': [{ type: Input },],
    'term': [{ type: Input },],
};
function NgbHighlight_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbHighlight.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbHighlight.ctorParameters;
    /** @type {?} */
    NgbHighlight.propDecorators;
    /** @type {?} */
    NgbHighlight.prototype.parts;
    /** @type {?} */
    NgbHighlight.prototype.highlightClass;
    /** @type {?} */
    NgbHighlight.prototype.result;
    /** @type {?} */
    NgbHighlight.prototype.term;
}
//# sourceMappingURL=highlight.js.map