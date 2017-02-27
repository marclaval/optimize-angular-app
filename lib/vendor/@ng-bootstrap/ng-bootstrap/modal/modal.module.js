import { NgModule } from '@angular/core';
import { NgbModalContainer } from './modal-container';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbModalWindow } from './modal-window';
import { NgbModalStack } from './modal-stack';
import { NgbModal } from './modal';
export { NgbModal } from './modal';
export { NgbModalRef, NgbActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';
export class NgbModalModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbModalModule, providers: [NgbModal, NgbModalStack] }; }
}
NgbModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbModalContainer, NgbModalBackdrop, NgbModalWindow],
                entryComponents: [NgbModalBackdrop, NgbModalWindow],
                providers: [NgbModal],
                exports: [NgbModalContainer]
            },] },
];
/** @nocollapse */
NgbModalModule.ctorParameters = () => [];
function NgbModalModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModalModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModalModule.ctorParameters;
}
//# sourceMappingURL=modal.module.js.map