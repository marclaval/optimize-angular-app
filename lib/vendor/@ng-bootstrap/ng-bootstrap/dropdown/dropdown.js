import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgbDropdownConfig } from './dropdown-config';
/**
 * Transforms a node into a dropdown.
 */
export class NgbDropdown {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new EventEmitter();
        this.up = config.up;
        this.autoClose = config.autoClose;
    }
    /**
     * Checks if the dropdown menu is open or not.
     * @return {?}
     */
    isOpen() { return this._open; }
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     * @return {?}
     */
    open() {
        if (!this._open) {
            this._open = true;
            this.openChange.emit(true);
        }
    }
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     * @return {?}
     */
    close() {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    }
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     * @return {?}
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeFromOutsideClick($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    closeFromOutsideEsc() {
        if (this.autoClose) {
            this.close();
        }
    }
    /**
     * \@internal
     * @param {?} toggleElement
     * @return {?}
     */
    set toggleElement(toggleElement) { this._toggleElement = toggleElement; }
    /**
     * @param {?} $event
     * @return {?}
     */
    _isEventFromToggle($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); }
}
NgbDropdown.decorators = [
    { type: Directive, args: [{
                selector: '[ngbDropdown]',
                exportAs: 'ngbDropdown',
                host: {
                    '[class.dropdown]': '!up',
                    '[class.dropup]': 'up',
                    '[class.show]': 'isOpen()',
                    '(keyup.esc)': 'closeFromOutsideEsc()',
                    '(document:click)': 'closeFromOutsideClick($event)'
                }
            },] },
];
/** @nocollapse */
NgbDropdown.ctorParameters = () => [
    { type: NgbDropdownConfig, },
];
NgbDropdown.propDecorators = {
    'up': [{ type: Input },],
    'autoClose': [{ type: Input },],
    '_open': [{ type: Input, args: ['open',] },],
    'openChange': [{ type: Output },],
};
function NgbDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDropdown.ctorParameters;
    /** @type {?} */
    NgbDropdown.propDecorators;
    /** @type {?} */
    NgbDropdown.prototype._toggleElement;
    /**
     * Indicates that the dropdown should open upwards
     * @type {?}
     */
    NgbDropdown.prototype.up;
    /**
     * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
     * @type {?}
     */
    NgbDropdown.prototype.autoClose;
    /**
     *  Defines whether or not the dropdown-menu is open initially.
     * @type {?}
     */
    NgbDropdown.prototype._open;
    /**
     *  An event fired when the dropdown is opened or closed.
     *  Event's payload equals whether dropdown is open.
     * @type {?}
     */
    NgbDropdown.prototype.openChange;
}
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
export class NgbDropdownToggle {
    /**
     * @param {?} dropdown
     * @param {?} elementRef
     */
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    toggleOpen() { this.dropdown.toggle(); }
}
NgbDropdownToggle.decorators = [
    { type: Directive, args: [{
                selector: '[ngbDropdownToggle]',
                host: {
                    'class': 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen()',
                    '(click)': 'toggleOpen()'
                }
            },] },
];
/** @nocollapse */
NgbDropdownToggle.ctorParameters = () => [
    { type: NgbDropdown, },
    { type: ElementRef, },
];
function NgbDropdownToggle_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDropdownToggle.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDropdownToggle.ctorParameters;
    /** @type {?} */
    NgbDropdownToggle.prototype.dropdown;
}
//# sourceMappingURL=dropdown.js.map