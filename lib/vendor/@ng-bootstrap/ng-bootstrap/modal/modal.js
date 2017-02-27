import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import { NgbModalStack } from './modal-stack';
/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
export class NgbModal {
    /**
     * @param {?} _moduleCFR
     * @param {?} _injector
     * @param {?} _modalStack
     */
    constructor(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    open(content, options = {}) {
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    }
}
NgbModal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgbModal.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: NgbModalStack, },
];
function NgbModal_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModal.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModal.ctorParameters;
    /** @type {?} */
    NgbModal.prototype._moduleCFR;
    /** @type {?} */
    NgbModal.prototype._injector;
    /** @type {?} */
    NgbModal.prototype._modalStack;
}
//# sourceMappingURL=modal.js.map