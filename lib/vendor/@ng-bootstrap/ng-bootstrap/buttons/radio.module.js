import { NgModule } from '@angular/core';
import { NgbRadio, NgbActiveLabel, NgbRadioGroup } from './radio';
export { NgbRadio, NgbActiveLabel, NgbRadioGroup } from './radio';
const /** @type {?} */ NGB_RADIO_DIRECTIVES = [NgbRadio, NgbActiveLabel, NgbRadioGroup];
export class NgbButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbButtonsModule, providers: [] }; }
}
NgbButtonsModule.decorators = [
    { type: NgModule, args: [{ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES },] },
];
/** @nocollapse */
NgbButtonsModule.ctorParameters = () => [];
function NgbButtonsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbButtonsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbButtonsModule.ctorParameters;
}
//# sourceMappingURL=radio.module.js.map