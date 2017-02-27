import { Directive, Injector, ReflectiveInjector, Renderer, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { isDefined, isString } from '../util/util';
import { ContentRef } from '../util/popup';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbModalWindow } from './modal-window';
import { NgbModalStack } from './modal-stack';
import { NgbActiveModal, NgbModalRef } from './modal-ref';
export class NgbModalContainer {
    /**
     * @param {?} _injector
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _componentFactoryResolver
     * @param {?} ngbModalStack
     */
    constructor(_injector, _renderer, _viewContainerRef, _componentFactoryResolver, ngbModalStack) {
        this._injector = _injector;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalBackdrop);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalWindow);
        ngbModalStack.registerContainer(this);
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} options
     * @return {?}
     */
    open(moduleCFR, contentInjector, content, options) {
        const /** @type {?} */ activeModal = new NgbActiveModal();
        const /** @type {?} */ contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
        let /** @type {?} */ windowCmptRef;
        let /** @type {?} */ backdropCmptRef;
        let /** @type {?} */ ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._viewContainerRef.createComponent(this._backdropFactory, 0, this._injector);
        }
        windowCmptRef = this._viewContainerRef.createComponent(this._windowFactory, this._viewContainerRef.length - 1, this._injector, contentRef.nodes);
        ngbModalRef = new NgbModalRef(this._viewContainerRef, windowCmptRef, contentRef, backdropCmptRef);
        activeModal.close = (result) => { ngbModalRef.close(result); };
        activeModal.dismiss = (reason) => { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    }
    /**
     * @param {?} windowInstance
     * @param {?} options
     * @return {?}
     */
    _applyWindowOptions(windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach((optionName) => {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} context
     * @return {?}
     */
    _getContentRef(moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(/** @type {?} */ (content), context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else if (isString(content)) {
            return new ContentRef([[this._renderer.createText(null, `${content}`)]]);
        }
        else {
            const /** @type {?} */ contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            const /** @type {?} */ modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgbActiveModal, useValue: context }], contentInjector);
            const /** @type {?} */ componentRef = this._viewContainerRef.createComponent(contentCmptFactory, 0, modalContentInjector);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    }
}
NgbModalContainer.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbModalContainer]' },] },
];
/** @nocollapse */
NgbModalContainer.ctorParameters = () => [
    { type: Injector, },
    { type: Renderer, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: NgbModalStack, },
];
function NgbModalContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModalContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModalContainer.ctorParameters;
    /** @type {?} */
    NgbModalContainer.prototype._backdropFactory;
    /** @type {?} */
    NgbModalContainer.prototype._windowFactory;
    /** @type {?} */
    NgbModalContainer.prototype._injector;
    /** @type {?} */
    NgbModalContainer.prototype._renderer;
    /** @type {?} */
    NgbModalContainer.prototype._viewContainerRef;
    /** @type {?} */
    NgbModalContainer.prototype._componentFactoryResolver;
}
//# sourceMappingURL=modal-container.js.map