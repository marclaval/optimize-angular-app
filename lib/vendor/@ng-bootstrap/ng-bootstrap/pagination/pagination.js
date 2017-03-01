import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { getValueInRange, isNumber } from '../util/util';
import { NgbPaginationConfig } from './pagination-config';
/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
export class NgbPagination {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  Current page.
         */
        this.page = 0;
        /**
         *  An event fired when the page is changed.
         *  Event's payload equals to the newly selected page.
         */
        this.pageChange = new EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    /**
     * @return {?}
     */
    hasPrevious() { return this.page > 1; }
    /**
     * @return {?}
     */
    hasNext() { return this.page < this.pageCount; }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { this._updatePages(this.page); }
    /**
     * \@internal
     * @param {?} pageNumber
     * @return {?}
     */
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @return {?}
     */
    _applyRotation() {
        let /** @type {?} */ start = 0;
        let /** @type {?} */ end = this.pageCount;
        let /** @type {?} */ leftOffset = Math.floor(this.maxSize / 2);
        let /** @type {?} */ rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page
     * @return {?}
     */
    _applyPagination() {
        let /** @type {?} */ page = Math.ceil(this.page / this.maxSize) - 1;
        let /** @type {?} */ start = page * this.maxSize;
        let /** @type {?} */ end = start + this.maxSize;
        return [start, end];
    }
    /**
     * @param {?} newPageNo
     * @return {?}
     */
    _setPageInRange(newPageNo) {
        const /** @type {?} */ prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    }
    /**
     * @param {?} newPage
     * @return {?}
     */
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let /** @type {?} */ i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let /** @type {?} */ start = 0;
            let /** @type {?} */ end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgbPagination.decorators = [
    { type: Component, args: [{
                selector: 'ngb-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nav>
      <ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
        <li *ngIf="boundaryLinks" class="page-item" 
          [class.disabled]="!hasPrevious() || disabled">
          <a aria-label="First" class="page-link" href (click)="!!selectPage(1)" [attr.tabindex]="hasPrevious() ? null : '-1'">
            <span aria-hidden="true">&laquo;&laquo;</span>
            <span class="sr-only">First</span>
          </a>                
        </li>
      
        <li *ngIf="directionLinks" class="page-item" 
          [class.disabled]="!hasPrevious() || disabled">
          <a aria-label="Previous" class="page-link" href (click)="!!selectPage(page-1)" [attr.tabindex]="hasPrevious() ? null : '-1'">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li *ngFor="let pageNumber of pages" class="page-item" [class.active]="pageNumber === page" 
          [class.disabled]="isEllipsis(pageNumber) || disabled">
          <a *ngIf="isEllipsis(pageNumber)" class="page-link">...</a>
          <a *ngIf="!isEllipsis(pageNumber)" class="page-link" href (click)="!!selectPage(pageNumber)">{{pageNumber}}</a>
        </li>
        <li *ngIf="directionLinks" class="page-item" [class.disabled]="!hasNext() || disabled">
          <a aria-label="Next" class="page-link" href (click)="!!selectPage(page+1)" [attr.tabindex]="hasNext() ? null : '-1'">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li *ngIf="boundaryLinks" class="page-item" [class.disabled]="!hasNext() || disabled">
          <a aria-label="Last" class="page-link" href (click)="!!selectPage(pageCount)" [attr.tabindex]="hasNext() ? null : '-1'">
            <span aria-hidden="true">&raquo;&raquo;</span>
            <span class="sr-only">Last</span>
          </a>                
        </li>        
      </ul>
    </nav>
  `
            },] },
];
/** @nocollapse */
NgbPagination.ctorParameters = () => [
    { type: NgbPaginationConfig, },
];
NgbPagination.propDecorators = {
    'disabled': [{ type: Input },],
    'boundaryLinks': [{ type: Input },],
    'directionLinks': [{ type: Input },],
    'ellipses': [{ type: Input },],
    'rotate': [{ type: Input },],
    'collectionSize': [{ type: Input },],
    'maxSize': [{ type: Input },],
    'page': [{ type: Input },],
    'pageSize': [{ type: Input },],
    'pageChange': [{ type: Output },],
    'size': [{ type: Input },],
};
function NgbPagination_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPagination.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPagination.ctorParameters;
    /** @type {?} */
    NgbPagination.propDecorators;
    /** @type {?} */
    NgbPagination.prototype.pageCount;
    /** @type {?} */
    NgbPagination.prototype.pages;
    /**
     * Whether to disable buttons from user input
     * @type {?}
     */
    NgbPagination.prototype.disabled;
    /**
     *  Whether to show the "First" and "Last" page links
     * @type {?}
     */
    NgbPagination.prototype.boundaryLinks;
    /**
     *  Whether to show the "Next" and "Previous" page links
     * @type {?}
     */
    NgbPagination.prototype.directionLinks;
    /**
     *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
     * @type {?}
     */
    NgbPagination.prototype.ellipses;
    /**
     *  Whether to rotate pages when maxSize > number of pages.
     *  Current page will be in the middle
     * @type {?}
     */
    NgbPagination.prototype.rotate;
    /**
     *  Number of items in collection.
     * @type {?}
     */
    NgbPagination.prototype.collectionSize;
    /**
     *  Maximum number of pages to display.
     * @type {?}
     */
    NgbPagination.prototype.maxSize;
    /**
     *  Current page.
     * @type {?}
     */
    NgbPagination.prototype.page;
    /**
     *  Number of items per page.
     * @type {?}
     */
    NgbPagination.prototype.pageSize;
    /**
     *  An event fired when the page is changed.
     *  Event's payload equals to the newly selected page.
     * @type {?}
     */
    NgbPagination.prototype.pageChange;
    /**
     * Pagination display size: small or large
     * @type {?}
     */
    NgbPagination.prototype.size;
}
//# sourceMappingURL=pagination.js.map