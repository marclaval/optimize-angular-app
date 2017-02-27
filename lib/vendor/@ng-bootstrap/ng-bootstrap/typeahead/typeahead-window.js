import { Component, Input, Output, EventEmitter } from '@angular/core';
import { toString } from '../util/util';
export class NgbTypeaheadWindow {
    constructor() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getActive() { return this.results[this.activeIdx]; }
    /**
     * @param {?} activeIdx
     * @return {?}
     */
    markActive(activeIdx) { this.activeIdx = activeIdx; }
    /**
     * @return {?}
     */
    next() {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) { this.selectEvent.emit(item); }
    /**
     * @return {?}
     */
    ngOnInit() { this.activeIdx = this.focusFirst ? 0 : -1; }
}
NgbTypeaheadWindow.decorators = [
    { type: Component, args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                host: { 'class': 'dropdown-menu', 'style': 'display: block' },
                template: `
    <template #rt let-result="result" let-term="term" let-formatter="formatter">
      <ngb-highlight [result]="formatter(result)" [term]="term"></ngb-highlight>
    </template>
    <template ngFor [ngForOf]="results" let-result let-idx="index">
      <button type="button" class="dropdown-item" [class.active]="idx === activeIdx" 
        (mouseenter)="markActive(idx)" 
        (click)="select(result)">
          <template [ngTemplateOutlet]="resultTemplate || rt" 
          [ngOutletContext]="{result: result, term: term, formatter: formatter}"></template>
      </button>
    </template>
  `
            },] },
];
/** @nocollapse */
NgbTypeaheadWindow.ctorParameters = () => [];
NgbTypeaheadWindow.propDecorators = {
    'focusFirst': [{ type: Input },],
    'results': [{ type: Input },],
    'term': [{ type: Input },],
    'formatter': [{ type: Input },],
    'resultTemplate': [{ type: Input },],
    'selectEvent': [{ type: Output, args: ['select',] },],
};
function NgbTypeaheadWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTypeaheadWindow.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTypeaheadWindow.ctorParameters;
    /** @type {?} */
    NgbTypeaheadWindow.propDecorators;
    /** @type {?} */
    NgbTypeaheadWindow.prototype.activeIdx;
    /**
     * Flag indicating if the first row should be active initially
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.focusFirst;
    /**
     * Typeahead match results to be displayed
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.results;
    /**
     * Search term used to get current results
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.term;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.formatter;
    /**
     * A template to override a matching result default display
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.resultTemplate;
    /**
     * Event raised when user selects a particular result row
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.selectEvent;
}
//# sourceMappingURL=typeahead-window.js.map