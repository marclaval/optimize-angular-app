import { Component, Output, EventEmitter, Input, ElementRef, Renderer } from '@angular/core';
import { ModalDismissReasons } from './modal-dismiss-reasons';
export class NgbModalWindow {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    backdropClick($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    escKey($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(ModalDismissReasons.ESC);
        }
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    dismiss(reason) { this.dismissEvent.emit(reason); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._elWithFocus = document.activeElement;
        this._renderer.setElementClass(document.body, 'modal-open', true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
            this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
        }
        else {
            this._renderer.invokeElementMethod(document.body, 'focus', []);
        }
        this._elWithFocus = null;
        this._renderer.setElementClass(document.body, 'modal-open', false);
    }
}
NgbModalWindow.decorators = [
    { type: Component, args: [{
                selector: 'ngb-modal-window',
                host: {
                    '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
                    'role': 'dialog',
                    'tabindex': '-1',
                    'style': 'display: block;',
                    '(keyup.esc)': 'escKey($event)',
                    '(click)': 'backdropClick($event)'
                },
                template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>
    `
            },] },
];
/** @nocollapse */
NgbModalWindow.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
NgbModalWindow.propDecorators = {
    'backdrop': [{ type: Input },],
    'keyboard': [{ type: Input },],
    'size': [{ type: Input },],
    'windowClass': [{ type: Input },],
    'dismissEvent': [{ type: Output, args: ['dismiss',] },],
};
function NgbModalWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbModalWindow.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbModalWindow.ctorParameters;
    /** @type {?} */
    NgbModalWindow.propDecorators;
    /** @type {?} */
    NgbModalWindow.prototype._elWithFocus;
    /** @type {?} */
    NgbModalWindow.prototype.backdrop;
    /** @type {?} */
    NgbModalWindow.prototype.keyboard;
    /** @type {?} */
    NgbModalWindow.prototype.size;
    /** @type {?} */
    NgbModalWindow.prototype.windowClass;
    /** @type {?} */
    NgbModalWindow.prototype.dismissEvent;
    /** @type {?} */
    NgbModalWindow.prototype._elRef;
    /** @type {?} */
    NgbModalWindow.prototype._renderer;
}
//# sourceMappingURL=modal-window.js.map