import { Component, ContentChild, ContentChildren, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { isString } from '../util/util';
import { NgbAccordionConfig } from './accordion-config';
let /** @type {?} */ nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
export class NgbPanelTitle {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelTitle.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbPanelTitle]' },] },
];
/** @nocollapse */
NgbPanelTitle.ctorParameters = () => [
    { type: TemplateRef, },
];
function NgbPanelTitle_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPanelTitle.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPanelTitle.ctorParameters;
    /** @type {?} */
    NgbPanelTitle.prototype.templateRef;
}
/**
 * This directive must be used to wrap accordion panel content.
 */
export class NgbPanelContent {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelContent.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbPanelContent]' },] },
];
/** @nocollapse */
NgbPanelContent.ctorParameters = () => [
    { type: TemplateRef, },
];
function NgbPanelContent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPanelContent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPanelContent.ctorParameters;
    /** @type {?} */
    NgbPanelContent.prototype.templateRef;
}
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
export class NgbPanel {
    constructor() {
        /**
         * Defines if the tab control is focused
         */
        this.focused = false;
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = `ngb-panel-${nextId++}`;
    }
}
NgbPanel.decorators = [
    { type: Directive, args: [{ selector: 'ngb-panel' },] },
];
/** @nocollapse */
NgbPanel.ctorParameters = () => [];
NgbPanel.propDecorators = {
    'disabled': [{ type: Input },],
    'id': [{ type: Input },],
    'title': [{ type: Input },],
    'type': [{ type: Input },],
    'contentTpl': [{ type: ContentChild, args: [NgbPanelContent,] },],
    'titleTpl': [{ type: ContentChild, args: [NgbPanelTitle,] },],
};
function NgbPanel_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbPanel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbPanel.ctorParameters;
    /** @type {?} */
    NgbPanel.propDecorators;
    /**
     * Defines if the tab control is focused
     * @type {?}
     */
    NgbPanel.prototype.focused;
    /**
     *  A flag determining whether the panel is disabled or not.
     *  When disabled, the panel cannot be toggled.
     * @type {?}
     */
    NgbPanel.prototype.disabled;
    /**
     *  An optional id for the panel. The id should be unique.
     *  If not provided, it will be auto-generated.
     * @type {?}
     */
    NgbPanel.prototype.id;
    /**
     *  The title for the panel.
     * @type {?}
     */
    NgbPanel.prototype.title;
    /**
     *  Accordion's types of panels to be applied per panel basis.
     *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {?}
     */
    NgbPanel.prototype.type;
    /** @type {?} */
    NgbPanel.prototype.contentTpl;
    /** @type {?} */
    NgbPanel.prototype.titleTpl;
}
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only panel can be opened at a time.
 */
export class NgbAccordion {
    /**
     * @param {?} config
     */
    constructor(config) {
        this._states = new Map();
        this._panelRefs = new Map();
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new EventEmitter();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     * @param {?} panelId
     * @return {?}
     */
    toggle(panelId) {
        const /** @type {?} */ panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            const /** @type {?} */ nextState = !this._states.get(panelId);
            let /** @type {?} */ defaultPrevented = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = ((this.activeIds)).split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    }
    /**
     * \@internal
     * @param {?} panelId
     * @return {?}
     */
    isOpen(panelId) { return this._states.get(panelId); }
    /**
     * @param {?} panelId
     * @return {?}
     */
    _closeOthers(panelId) {
        this._states.forEach((state, id) => {
            if (id !== panelId) {
                this._states.set(id, false);
            }
        });
    }
    /**
     * @return {?}
     */
    _updateActiveIds() {
        this.activeIds =
            this.panels.toArray().filter(panel => this.isOpen(panel.id) && !panel.disabled).map(panel => panel.id);
    }
    /**
     * @return {?}
     */
    _updateStates() {
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach((panel) => {
            this._states.set(panel.id, this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            this._panelRefs.set(panel.id, panel);
        });
    }
}
NgbAccordion.decorators = [
    { type: Component, args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: `
  <div class="card">
    <template ngFor let-panel [ngForOf]="panels">
      <div role="tab" id="{{panel.id}}-header" [attr.aria-selected]="panel.focused"
        [class]="'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')" [class.active]="isOpen(panel.id)">
        <a href (click)="!!toggle(panel.id)" (focus)="panel.focused = true" 
          (blur)="panel.focused = false" [class.text-muted]="panel.disabled" 
          [attr.aria-expanded]="isOpen(panel.id)" [attr.aria-controls]="panel.id">
          {{panel.title}}<template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></template>
        </a>
      </div>
      <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'" class="card-block" *ngIf="isOpen(panel.id)">
        <template [ngTemplateOutlet]="panel.contentTpl.templateRef"></template>
      </div>
    </template>
  </div>
`
            },] },
];
/** @nocollapse */
NgbAccordion.ctorParameters = () => [
    { type: NgbAccordionConfig, },
];
NgbAccordion.propDecorators = {
    'panels': [{ type: ContentChildren, args: [NgbPanel,] },],
    'activeIds': [{ type: Input },],
    'closeOtherPanels': [{ type: Input, args: ['closeOthers',] },],
    'type': [{ type: Input },],
    'panelChange': [{ type: Output },],
};
function NgbAccordion_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbAccordion.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbAccordion.ctorParameters;
    /** @type {?} */
    NgbAccordion.propDecorators;
    /**
     * A map that stores each panel state
     * @type {?}
     */
    NgbAccordion.prototype._states;
    /**
     * A map that stores references to all panels
     * @type {?}
     */
    NgbAccordion.prototype._panelRefs;
    /** @type {?} */
    NgbAccordion.prototype.panels;
    /**
     * An array or comma separated strings of panel identifiers that should be opened
     * @type {?}
     */
    NgbAccordion.prototype.activeIds;
    /**
     *  Whether the other panels should be closed when a panel is opened
     * @type {?}
     */
    NgbAccordion.prototype.closeOtherPanels;
    /**
     *  Accordion's types of panels to be applied globally.
     *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {?}
     */
    NgbAccordion.prototype.type;
    /**
     * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
     * @type {?}
     */
    NgbAccordion.prototype.panelChange;
}
//# sourceMappingURL=accordion.js.map