import { Injectable } from '@angular/core';
/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
export class NgbPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
}
NgbPaginationConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbPaginationConfig.ctorParameters = () => [];
function NgbPaginationConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPaginationConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPaginationConfig.ctorParameters;
    /** @type {?} */
    NgbPaginationConfig.prototype.disabled;
    /** @type {?} */
    NgbPaginationConfig.prototype.boundaryLinks;
    /** @type {?} */
    NgbPaginationConfig.prototype.directionLinks;
    /** @type {?} */
    NgbPaginationConfig.prototype.ellipses;
    /** @type {?} */
    NgbPaginationConfig.prototype.maxSize;
    /** @type {?} */
    NgbPaginationConfig.prototype.pageSize;
    /** @type {?} */
    NgbPaginationConfig.prototype.rotate;
    /** @type {?} */
    NgbPaginationConfig.prototype.size;
}
//# sourceMappingURL=pagination-config.js.map