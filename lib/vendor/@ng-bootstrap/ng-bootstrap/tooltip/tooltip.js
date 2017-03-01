import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, Injector, Renderer, ElementRef, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
import { listenToTriggers } from '../util/triggers';
import { positionElements } from '../util/positioning';
import { PopupService } from '../util/popup';
import { NgbTooltipConfig } from './tooltip-config';
export class NgbTooltipWindow {
    constructor() {
        this.placement = 'top';
    }
}
NgbTooltipWindow.decorators = [
    { type: Component, args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { '[class]': '"tooltip show tooltip-" + placement', 'role': 'tooltip' },
                template: `
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `
            },] },
];
/** @nocollapse */
NgbTooltipWindow.ctorParameters = () => [];
NgbTooltipWindow.propDecorators = {
    'placement': [{ type: Input },],
};
function NgbTooltipWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTooltipWindow.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTooltipWindow.ctorParameters;
    /** @type {?} */
    NgbTooltipWindow.propDecorators;
    /** @type {?} */
    NgbTooltipWindow.prototype.placement;
}
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
export class NgbTooltip {
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
       * Emits an event when the tooltip is shown
       */
        this.shown = new EventEmitter();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new EventEmitter();
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        });
    }
    /**
     * Content to be displayed as tooltip. If falsy, the tooltip won't open.
     * @param {?} value
     * @return {?}
     */
    set ngbTooltip(value) {
        this._ngbTooltip = value;
        if (!value && this._windowRef) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    get ngbTooltip() { return this._ngbTooltip; }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     * @param {?=} context
     * @return {?}
     */
    open(context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.placement = this.placement;
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() - to be determined if this is a bug in the Angular itself
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @return {?}
     */
    close() {
        if (this._windowRef != null) {
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
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
     * Returns whether or not the tooltip is currently being shown
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
NgbTooltip.decorators = [
    { type: Directive, args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
];
/** @nocollapse */
NgbTooltip.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: NgbTooltipConfig, },
    { type: NgZone, },
];
NgbTooltip.propDecorators = {
    'placement': [{ type: Input },],
    'triggers': [{ type: Input },],
    'container': [{ type: Input },],
    'shown': [{ type: Output },],
    'hidden': [{ type: Output },],
    'ngbTooltip': [{ type: Input },],
};
function NgbTooltip_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTooltip.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTooltip.ctorParameters;
    /** @type {?} */
    NgbTooltip.propDecorators;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    NgbTooltip.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     * @type {?}
     */
    NgbTooltip.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    NgbTooltip.prototype.container;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    NgbTooltip.prototype.shown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    NgbTooltip.prototype.hidden;
    /** @type {?} */
    NgbTooltip.prototype._ngbTooltip;
    /** @type {?} */
    NgbTooltip.prototype._popupService;
    /** @type {?} */
    NgbTooltip.prototype._windowRef;
    /** @type {?} */
    NgbTooltip.prototype._unregisterListenersFn;
    /** @type {?} */
    NgbTooltip.prototype._zoneSubscription;
    /** @type {?} */
    NgbTooltip.prototype._elementRef;
    /** @type {?} */
    NgbTooltip.prototype._renderer;
}
//# sourceMappingURL=tooltip.js.map