import { NgModule } from '@angular/core';
import { NgbDropdown, NgbDropdownToggle } from './dropdown';
import { NgbDropdownConfig } from './dropdown-config';
export { NgbDropdown, NgbDropdownToggle } from './dropdown';
export { NgbDropdownConfig } from './dropdown-config';
const /** @type {?} */ NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
export class NgbDropdownModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbDropdownModule, providers: [NgbDropdownConfig] }; }
}
NgbDropdownModule.decorators = [
    { type: NgModule, args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
];
/** @nocollapse */
NgbDropdownModule.ctorParameters = () => [];
function NgbDropdownModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDropdownModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDropdownModule.ctorParameters;
}
//# sourceMappingURL=dropdown.module.js.map