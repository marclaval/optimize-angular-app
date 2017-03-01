import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, Injector, Renderer, ElementRef, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
import { listenToTriggers } from '../util/triggers';
import { positionElements } from '../util/positioning';
import { PopupService } from '../util/popup';
import { NgbPopoverConfig } from './popover-config';
export class NgbPopoverWindow {
    constructor() {
        this.placement = 'top';
    }
}
NgbPopoverWindow.decorators = [
    { type: Component, args: [{
                selector: 'ngb-popover-window',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { '[class]': '"popover show popover-" + placement', 'role': 'tooltip' },
                template: `
    <h3 class="popover-title">{{title}}</h3><div class="popover-content"><ng-content></ng-content></div>
    `
            },] },
];
/** @nocollapse */
NgbPopoverWindow.ctorParameters = () => [];
NgbPopoverWindow.propDecorators = {
    'placement': [{ type: Input },],
    'title': [{ type: Input },],
};
function NgbPopoverWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPopoverWindow.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPopoverWindow.ctorParameters;
    /** @type {?} */
    NgbPopoverWindow.propDecorators;
    /** @type {?} */
    NgbPopoverWindow.prototype.placement;
    /** @type {?} */
    NgbPopoverWindow.prototype.title;
}
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export class NgbPopover {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} injector
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the popover is shown
         */
        this.shown = new EventEmitter();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new EventEmitter();
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     * @param {?=} context
     * @return {?}
     */
    open(context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.title = this.popoverTitle;
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() are not picked up by change detection with the OnPush strategy
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     * @return {?}
     */
    close() {
        if (this._windowRef) {
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     * @return {?}
     */
    toggle() {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    isOpen() { return this._windowRef != null; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    }
}
NgbPopover.decorators = [
    { type: Directive, args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
];
/** @nocollapse */
NgbPopover.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: NgbPopoverConfig, },
    { type: NgZone, },
];
NgbPopover.propDecorators = {
    'ngbPopover': [{ type: Input },],
    'popoverTitle': [{ type: Input },],
    'placement': [{ type: Input },],
    'triggers': [{ type: Input },],
    'container': [{ type: Input },],
    'shown': [{ type: Output },],
    'hidden': [{ type: Output },],
};
function NgbPopover_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPopover.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPopover.ctorParameters;
    /** @type {?} */
    NgbPopover.propDecorators;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    NgbPopover.prototype.ngbPopover;
    /**
     * Title of a popover.
     * @type {?}
     */
    NgbPopover.prototype.popoverTitle;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    NgbPopover.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     * @type {?}
     */
    NgbPopover.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    NgbPopover.prototype.container;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    NgbPopover.prototype.shown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    NgbPopover.prototype.hidden;
    /** @type {?} */
    NgbPopover.prototype._popupService;
    /** @type {?} */
    NgbPopover.prototype._windowRef;
    /** @type {?} */
    NgbPopover.prototype._unregisterListenersFn;
    /** @type {?} */
    NgbPopover.prototype._zoneSubscription;
    /** @type {?} */
    NgbPopover.prototype._elementRef;
    /** @type {?} */
    NgbPopover.prototype._renderer;
}
//# sourceMappingURL=popover.js.map