import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTimepicker } from './timepicker';
import { NgbTimepickerConfig } from './timepicker-config';
export { NgbTimepicker } from './timepicker';
export { NgbTimepickerConfig } from './timepicker-config';
export class NgbTimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbTimepickerModule, providers: [NgbTimepickerConfig] }; }
}
NgbTimepickerModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [CommonModule] },] },
];
/** @nocollapse */
NgbTimepickerModule.ctorParameters = () => [];
function NgbTimepickerModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTimepickerModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTimepickerModule.ctorParameters;
}
//# sourceMappingURL=timepicker.module.js.map