import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from './pagination';
import { NgbPaginationConfig } from './pagination-config';
export { NgbPagination } from './pagination';
export { NgbPaginationConfig } from './pagination-config';
export class NgbPaginationModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbPaginationModule, providers: [NgbPaginationConfig] }; }
}
NgbPaginationModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbPagination], exports: [NgbPagination], imports: [CommonModule] },] },
];
/** @nocollapse */
NgbPaginationModule.ctorParameters = () => [];
function NgbPaginationModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPaginationModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPaginationModule.ctorParameters;
}
//# sourceMappingURL=pagination.module.js.map