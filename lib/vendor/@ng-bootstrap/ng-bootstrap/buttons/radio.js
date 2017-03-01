import { Directive, forwardRef, Optional, Input, Renderer, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const /** @type {?} */ NGB_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbRadioGroup),
    multi: true
};
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
export class NgbRadioGroup {
    constructor() {
        this._radios = new Set();
        this._value = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    set disabled(isDisabled) { this.setDisabledState(isDisabled); }
    /**
     * @param {?} radio
     * @return {?}
     */
    onRadioChange(radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    }
    /**
     * @return {?}
     */
    onRadioValueUpdate() { this._updateRadiosValue(); }
    /**
     * @param {?} radio
     * @return {?}
     */
    register(radio) { this._radios.add(radio); }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    unregister(radio) { this._radios.delete(radio); }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this._updateRadiosValue();
    }
    /**
     * @return {?}
     */
    _updateRadiosValue() { this._radios.forEach((radio) => radio.updateValue(this._value)); }
    /**
     * @return {?}
     */
    _updateRadiosDisabled() { this._radios.forEach((radio) => radio.updateDisabled()); }
}
NgbRadioGroup.decorators = [
    { type: Directive, args: [{
                selector: '[ngbRadioGroup]',
                host: { 'data-toggle': 'buttons', 'class': 'btn-group' },
                providers: [NGB_RADIO_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRadioGroup.ctorParameters = () => [];
function NgbRadioGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbRadioGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbRadioGroup.ctorParameters;
    /** @type {?} */
    NgbRadioGroup.prototype._radios;
    /** @type {?} */
    NgbRadioGroup.prototype._value;
    /** @type {?} */
    NgbRadioGroup.prototype._disabled;
    /** @type {?} */
    NgbRadioGroup.prototype.onChange;
    /** @type {?} */
    NgbRadioGroup.prototype.onTouched;
}
export class NgbActiveLabel {
    /**
     * @param {?} _renderer
     * @param {?} _elRef
     */
    constructor(_renderer, _elRef) {
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    set active(isActive) { this._renderer.setElementClass(this._elRef.nativeElement, 'active', isActive); }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    set disabled(isDisabled) {
        this._renderer.setElementClass(this._elRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    set focused(isFocused) { this._renderer.setElementClass(this._elRef.nativeElement, 'focus', isFocused); }
}
NgbActiveLabel.decorators = [
    { type: Directive, args: [{ selector: 'label.btn' },] },
];
/** @nocollapse */
NgbActiveLabel.ctorParameters = () => [
    { type: Renderer, },
    { type: ElementRef, },
];
function NgbActiveLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbActiveLabel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbActiveLabel.ctorParameters;
    /** @type {?} */
    NgbActiveLabel.prototype._renderer;
    /** @type {?} */
    NgbActiveLabel.prototype._elRef;
}
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
export class NgbRadio {
    /**
     * @param {?} _group
     * @param {?} _label
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        if (this._group) {
            this._group.register(this);
        }
    }
    /**
     * You can specify model value of a given radio by binding to the value property.
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        const /** @type {?} */ stringValue = value ? value.toString() : '';
        this._renderer.setElementProperty(this._element.nativeElement, 'value', stringValue);
        if (this._group) {
            this._group.onRadioValueUpdate();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    set disabled(isDisabled) {
        this._disabled = isDisabled !== false;
        this.updateDisabled();
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    set focused(isFocused) {
        if (this._label) {
            this._label.focused = isFocused;
        }
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @return {?}
     */
    get disabled() { return (this._group && this._group.disabled) || this._disabled; }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._group) {
            this._group.unregister(this);
        }
    }
    /**
     * @return {?}
     */
    onChange() {
        if (this._group) {
            this._group.onRadioChange(this);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        this._checked = (this.value === value && value !== null);
        this._label.active = this._checked;
    }
    /**
     * @return {?}
     */
    updateDisabled() {
        let /** @type {?} */ disabled = (this._group && this._group.disabled) || this._disabled;
        if (this._label) {
            this._label.disabled = disabled;
        }
    }
}
NgbRadio.decorators = [
    { type: Directive, args: [{
                selector: 'input[type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] },
];
/** @nocollapse */
NgbRadio.ctorParameters = () => [
    { type: NgbRadioGroup, decorators: [{ type: Optional },] },
    { type: NgbActiveLabel, decorators: [{ type: Optional },] },
    { type: Renderer, },
    { type: ElementRef, },
];
NgbRadio.propDecorators = {
    'value': [{ type: Input, args: ['value',] },],
    'checked': [{ type: Input, args: ['checked',] },],
    'disabled': [{ type: Input, args: ['disabled',] },],
};
function NgbRadio_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbRadio.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbRadio.ctorParameters;
    /** @type {?} */
    NgbRadio.propDecorators;
    /** @type {?} */
    NgbRadio.prototype._checked;
    /** @type {?} */
    NgbRadio.prototype._disabled;
    /** @type {?} */
    NgbRadio.prototype._value;
    /** @type {?} */
    NgbRadio.prototype._group;
    /** @type {?} */
    NgbRadio.prototype._label;
    /** @type {?} */
    NgbRadio.prototype._renderer;
    /** @type {?} */
    NgbRadio.prototype._element;
}
//# sourceMappingURL=radio.js.map