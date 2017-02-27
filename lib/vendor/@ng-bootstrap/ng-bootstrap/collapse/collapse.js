import { Directive, Input } from '@angular/core';
/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
export class NgbCollapse {
    constructor() {
        /**
         * A flag indicating collapsed (true) or open (false) state.
         */
        this.collapsed = false;
    }
}
NgbCollapse.decorators = [
    { type: Directive, args: [{
                selector: '[ngbCollapse]',
                exportAs: 'ngbCollapse',
                host: { '[class.collapse]': 'true', '[class.show]': '!collapsed', '[attr.aria-expanded]': '!collapsed' }
            },] },
];
/** @nocollapse */
NgbCollapse.ctorParameters = () => [];
NgbCollapse.propDecorators = {
    'collapsed': [{ type: Input, args: ['ngbCollapse',] },],
};
function NgbCollapse_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCollapse.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCollapse.ctorParameters;
    /** @type {?} */
    NgbCollapse.propDecorators;
    /**
     * A flag indicating collapsed (true) or open (false) state.
     * @type {?}
     */
    NgbCollapse.prototype.collapsed;
}
//# sourceMappingURL=collapse.js.map