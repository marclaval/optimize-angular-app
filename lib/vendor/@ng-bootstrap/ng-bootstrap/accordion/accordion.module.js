import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent } from './accordion';
import { NgbAccordionConfig } from './accordion-config';
export { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent } from './accordion';
export { NgbAccordionConfig } from './accordion-config';
const /** @type {?} */ NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent];
export class NgbAccordionModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbAccordionModule, providers: [NgbAccordionConfig] }; }
}
NgbAccordionModule.decorators = [
    { type: NgModule, args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule] },] },
];
/** @nocollapse */
NgbAccordionModule.ctorParameters = () => [];
function NgbAccordionModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAccordionModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAccordionModule.ctorParameters;
}
//# sourceMappingURL=accordion.module.js.map