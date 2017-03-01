import { Injectable } from '@angular/core';
export class NgbModalStack {
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    open(moduleCFR, contentInjector, content, options = {}) {
        if (!this.modalContainer) {
            throw new Error('Missing modal container, add <template ngbModalContainer></template> to one of your application templates.');
        }
        return this.modalContainer.open(moduleCFR, contentInjector, content, options);
    }
    /**
     * @param {?} modalContainer
     * @return {?}
     */
    registerContainer(modalContainer) { this.modalContainer = modalContainer; }
}
NgbModalStack.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbModalStack.ctorParameters = () => [];
function NgbModalStack_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModalStack.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModalStack.ctorParameters;
    /** @type {?} */
    NgbModalStack.prototype.modalContainer;
}
//# sourceMappingURL=modal-stack.js.map