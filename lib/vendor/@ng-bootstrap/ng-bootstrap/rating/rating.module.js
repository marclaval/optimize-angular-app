import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingConfig } from './rating-config';
import { NgbRating } from './rating';
export { NgbRating } from './rating';
export { NgbRatingConfig } from './rating-config';
export class NgbRatingModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbRatingModule, providers: [NgbRatingConfig] }; }
}
NgbRatingModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [CommonModule] },] },
];
/** @nocollapse */
NgbRatingModule.ctorParameters = () => [];
function NgbRatingModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbRatingModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbRatingModule.ctorParameters;
}
//# sourceMappingURL=rating.module.js.map