import { Directive, Input, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef, Injector, Renderer, ElementRef, forwardRef, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { letProto } from 'rxjs/operator/let';
import { _do } from 'rxjs/operator/do';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { positionElements } from '../util/positioning';
import { NgbTypeaheadWindow } from './typeahead-window';
import { PopupService } from '../util/popup';
import { toString, isDefined } from '../util/util';
import { NgbTypeaheadConfig } from './typeahead-config';
let Key = {};
Key.Tab = 9;
Key.Enter = 13;
Key.Escape = 27;
Key.ArrowUp = 38;
Key.ArrowDown = 40;
Key[Key.Tab] = "Tab";
Key[Key.Enter] = "Enter";
Key[Key.Escape] = "Escape";
Key[Key.ArrowUp] = "ArrowUp";
Key[Key.ArrowDown] = "ArrowDown";
const /** @type {?} */ NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbTypeahead),
    multi: true
};
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
export class NgbTypeahead {
    /**
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _injector
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new EventEmitter();
        this._onTouched = () => { };
        this._onChange = (_) => { };
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this._valueChanges = fromEvent(_elementRef.nativeElement, 'input', ($event) => $event.target.value);
        this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ inputValues$ = _do.call(this._valueChanges, value => {
            this._userInput = value;
            if (this.editable) {
                this._onChange(value);
            }
        });
        const /** @type {?} */ results$ = letProto.call(inputValues$, this.ngbTypeahead);
        const /** @type {?} */ userInput$ = _do.call(results$, () => {
            if (!this.editable) {
                this._onChange(undefined);
            }
        });
        this._subscription = this._subscribeToUserInput(userInput$);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { this._writeInputValue(this._formatItemForInput(value)); }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @return {?}
     */
    dismissPopup() {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._userInput);
        }
    }
    /**
     * @return {?}
     */
    isPopupOpen() { return this._windowRef != null; }
    /**
     * @return {?}
     */
    handleBlur() { this._onTouched(); }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (!this._windowRef) {
            return;
        }
        if (Key[toString(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    const /** @type {?} */ result = this._windowRef.instance.getActive();
                    if (isDefined(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this.dismissPopup();
                    break;
            }
        }
    }
    /**
     * @return {?}
     */
    _openPopup() {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open();
            this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
        }
    }
    /**
     * @return {?}
     */
    _closePopup() {
        this._popupService.close();
        this._windowRef = null;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    _selectResult(result) {
        let /** @type {?} */ defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: () => { defaultPrevented = true; } });
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    }
    /**
     * @param {?} result
     * @return {?}
     */
    _selectResultClosePopup(result) {
        this._selectResult(result);
        this._closePopup();
    }
    /**
     * @return {?}
     */
    _showHint() {
        if (this.showHint) {
            const /** @type {?} */ userInputLowerCase = this._userInput.toLowerCase();
            const /** @type {?} */ formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'setSelectionRange', [this._userInput.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatItemForInput(item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _writeInputValue(value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
    }
    /**
     * @param {?} userInput$
     * @return {?}
     */
    _subscribeToUserInput(userInput$) {
        return userInput$.subscribe((results) => {
            if (!results || results.length === 0) {
                this._closePopup();
            }
            else {
                this._openPopup();
                this._windowRef.instance.focusFirst = this.focusFirst;
                this._windowRef.instance.results = results;
                this._windowRef.instance.term = this._elementRef.nativeElement.value;
                if (this.resultFormatter) {
                    this._windowRef.instance.formatter = this.resultFormatter;
                }
                if (this.resultTemplate) {
                    this._windowRef.instance.resultTemplate = this.resultTemplate;
                }
                this._showHint();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                this._windowRef.changeDetectorRef.detectChanges();
            }
        });
    }
    /**
     * @return {?}
     */
    _unsubscribeFromUserInput() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    }
}
NgbTypeahead.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngbTypeahead]',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(document:click)': 'dismissPopup()',
                    '(keydown)': 'handleKeyDown($event)',
                    'autocomplete': 'off',
                    'autocapitalize': 'off',
                    'autocorrect': 'off'
                },
                providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTypeahead.ctorParameters = () => [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
    { type: NgbTypeaheadConfig, },
    { type: NgZone, },
];
NgbTypeahead.propDecorators = {
    'editable': [{ type: Input },],
    'focusFirst': [{ type: Input },],
    'inputFormatter': [{ type: Input },],
    'ngbTypeahead': [{ type: Input },],
    'resultFormatter': [{ type: Input },],
    'resultTemplate': [{ type: Input },],
    'showHint': [{ type: Input },],
    'selectItem': [{ type: Output },],
};
function NgbTypeahead_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTypeahead.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTypeahead.ctorParameters;
    /** @type {?} */
    NgbTypeahead.propDecorators;
    /** @type {?} */
    NgbTypeahead.prototype._popupService;
    /** @type {?} */
    NgbTypeahead.prototype._subscription;
    /** @type {?} */
    NgbTypeahead.prototype._userInput;
    /** @type {?} */
    NgbTypeahead.prototype._valueChanges;
    /** @type {?} */
    NgbTypeahead.prototype._windowRef;
    /** @type {?} */
    NgbTypeahead.prototype._zoneSubscription;
    /**
     * A flag indicating if model values should be restricted to the ones selected from the popup only.
     * @type {?}
     */
    NgbTypeahead.prototype.editable;
    /**
     * A flag indicating if the first match should automatically be focused as you type.
     * @type {?}
     */
    NgbTypeahead.prototype.focusFirst;
    /**
     * A function to convert a given value into string to display in the input field
     * @type {?}
     */
    NgbTypeahead.prototype.inputFormatter;
    /**
     * A function to transform the provided observable text into the array of results.  Note that the "this" argument
     * is undefined so you need to explicitly bind it to a desired "this" target.
     * @type {?}
     */
    NgbTypeahead.prototype.ngbTypeahead;
    /**
     * A function to format a given result before display. This function should return a formatted string without any
     * HTML markup
     * @type {?}
     */
    NgbTypeahead.prototype.resultFormatter;
    /**
     * A template to override a matching result default display
     * @type {?}
     */
    NgbTypeahead.prototype.resultTemplate;
    /**
     * Show hint when an option in the result list matches.
     * @type {?}
     */
    NgbTypeahead.prototype.showHint;
    /**
     * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
     * @type {?}
     */
    NgbTypeahead.prototype.selectItem;
    /** @type {?} */
    NgbTypeahead.prototype._onTouched;
    /** @type {?} */
    NgbTypeahead.prototype._onChange;
    /** @type {?} */
    NgbTypeahead.prototype._elementRef;
    /** @type {?} */
    NgbTypeahead.prototype._viewContainerRef;
    /** @type {?} */
    NgbTypeahead.prototype._renderer;
    /** @type {?} */
    NgbTypeahead.prototype._injector;
}
//# sourceMappingURL=typeahead.js.map