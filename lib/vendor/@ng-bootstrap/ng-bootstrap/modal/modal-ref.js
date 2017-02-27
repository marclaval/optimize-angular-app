import { Injectable, ComponentRef, ViewContainerRef } from '@angular/core';
import { ContentRef } from '../util/popup';
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
export class NgbActiveModal {
    /**
     * Can be used to close a modal, passing an optional result.
     * @param {?=} result
     * @return {?}
     */
    close(result) { }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     * @param {?=} reason
     * @return {?}
     */
    dismiss(reason) { }
}
NgbActiveModal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbActiveModal.ctorParameters = () => [];
function NgbActiveModal_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbActiveModal.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbActiveModal.ctorParameters;
}
/**
 * A reference to a newly opened modal.
 */
export class NgbModalRef {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _windowCmptRef
     * @param {?} _contentRef
     * @param {?=} _backdropCmptRef
     */
    constructor(_viewContainerRef, _windowCmptRef, _contentRef, _backdropCmptRef) {
        this._viewContainerRef = _viewContainerRef;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        _windowCmptRef.instance.dismissEvent.subscribe((reason) => { this.dismiss(reason); });
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => { });
    }
    /**
     * The instance of component used as modal's content.
     * Undefined when a TemplateRef is used as modal's content.
     * @return {?}
     */
    get componentInstance() {
        if (this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    set componentInstance(instance) { }
    /**
     * Can be used to close a modal, passing an optional result.
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     * @param {?=} reason
     * @return {?}
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            this._reject(reason);
            this._removeModalElements();
        }
    }
    /**
     * @return {?}
     */
    _removeModalElements() {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowCmptRef.hostView));
        if (this._backdropCmptRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._backdropCmptRef.hostView));
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    }
}
NgbModalRef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbModalRef.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ComponentRef, },
    { type: ContentRef, },
    { type: ComponentRef, },
];
function NgbModalRef_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModalRef.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModalRef.ctorParameters;
    /** @type {?} */
    NgbModalRef.prototype._resolve;
    /** @type {?} */
    NgbModalRef.prototype._reject;
    /**
     * A promise that is resolved when a modal is closed and rejected when a modal is dismissed.
     * @type {?}
     */
    NgbModalRef.prototype.result;
    /** @type {?} */
    NgbModalRef.prototype._viewContainerRef;
    /** @type {?} */
    NgbModalRef.prototype._windowCmptRef;
    /** @type {?} */
    NgbModalRef.prototype._contentRef;
    /** @type {?} */
    NgbModalRef.prototype._backdropCmptRef;
}
//# sourceMappingURL=modal-ref.js.map